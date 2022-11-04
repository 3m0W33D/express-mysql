import express, {json} from "express";
import db from "./db.js";
import path from 'path'

const pool = db.sequelize;
const app = express();

app.use(json())

// The app supports app.get for GET Methods and app.post for POST Methods

// This is how to server static html files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'))
});

// This is how to make an SQL query with prepared statements.
// If there is no prepare parameters you can simply leave out {bind:[]} part.
app.post("/login", async (req,res) => {
  // Gets the username and password fields from the request body
  // Also possible to get from query paramter req.query.field is used for /login?field=value
  let username = req.body.username;
  let password = req.body.password;
  let [result,meta] = await pool.query("SELECT * FROM users where username = $1 and password = $2",{
    bind:[username, password]
  })
    res.json(result);
})


app.listen(8001, () => {
	console.log("Server is running");
});
