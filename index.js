import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import pg from "pg";
import fs from "fs";
import countries from "./countries.js";

const app = express();
const port = 3000;
env.config();

const db = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        ca: fs.readFileSync('./ca.crt').toString()
    }
});

await db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var curUserPos = 0;
var curUserVis = [];
var users = [];

async function loadVisited(){
  if(users.length === 0)
    return;
  try {
    const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1", [users[curUserPos].id]);
    curUserVis = [];
    result.rows.forEach((country) => {
        curUserVis.push(country.country_code);
    });
  } catch(err) {
    console.log(err);
  }
}

async function loadUsers(){
  try {
    const result = await db.query("SELECT * FROM users");
    users = result.rows;
  } catch(err) {
    console.log(err);
  }
}

app.get("/", async (req, res) => {
  await loadUsers();
  await loadVisited();
  res.render("index.ejs", {
    countries: curUserVis,
    users: users,
    color: (users.length === 0 ? 'teal' : users[curUserPos].color)
  });
});

app.post("/add", async (req, res) => {
  let data = {
    countries: curUserVis,
    users: users,
    color: (users.length === 0 ? 'teal' : users[curUserPos].color)
  };

  if(users.length === 0){
    data.error = "Add a new member first.";
    res.render("index.ejs", data);
    return;
  }

  let input = req.body['country'].trim().toLowerCase();

  let id = countries.findIndex(country => country.country_name.toLowerCase().includes(input));
  
  if(id < 0){
    data.error = "Country name does not exist, try again.";
    res.render("index.ejs", data);
  } else {
    let country_code = countries[id].country_code;
    if(curUserVis.includes(country_code)){
        data.error = "Country has already been added, try again.";
    } else {
      try {
        await db.query("INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)", [country_code, users[curUserPos].id]);
        curUserVis.push(country_code);
      } catch(err) {
        console.log(err);
      }
    }
    res.render("index.ejs", data);
  }
});

app.post("/user", async (req, res) => {
  if(req.body.add === "new"){
    res.render("new.ejs");
    return;
  }
  let userId = parseInt(req.body.user);
  let newPos = users.findIndex((user) => user.id === userId);
  curUserPos = newPos;
  await loadVisited();
  res.render("index.ejs", {
    countries: curUserVis,
    users: users,
    color: users[curUserPos].color
  });
});

app.post("/new", async (req, res) => {
  let newUserName = req.body.name;
  let newUserColor = req.body.color;
  try {
    await db.query("INSERT INTO users (name, color) VALUES ($1, $2)", [newUserName, newUserColor]);
    curUserPos = users.length;
  } catch(err) {
    console.log(err);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});