const express = require('express');
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");
const userdata=require('./../userData.json')
// Data is stored in the file `database.json` in the folder `db`.
// Note that if you leave your app public, this database file will be copied if
// someone forks your app. So don't use it to store sensitive information.
const adapter = new FileSync("./db/database.json");
const db = low(adapter);

// Initial set of users to populate the database with
const defaultUsers = userdata;
// Clear the databaase
db.get("users")
  .remove()
  .write();
// Put defualt users in the users list
defaultUsers.forEach(function(user) {
  db.get("users")
    .push({ id:user.id,name: user.name,email:user.email })
    .write();
});

// Send user data - used by client.js
router.get("/", function(request, response) {
 const users = db.get("users").value(); // finds all entries in the users table
 response.json({message:"User fetched successfully",data:users,status:200});// sends users back to the page
});

// Create a new entry in the users table
router.post("/new", function(request, response) {
  const id = db.get("users").value().length()+1;
  db.get("users")
    .push({id:id, name: request.body.user,email: request.body.email })
    .write();
});

router.delete("/:id", async function(request, response) {
  
  const index = db.get("users").value().findIndex(ele=>ele.id===request.params.id);
  await db.get("users")
    .splice(index,1)
    .write();
    const users = db.get("users").value(); 
    response.json({message:"User deleted successfully",data:users,status:200});
});

// Empties the database and re-populates users with the default users
router.get("/reset", function(request, response) {
  // Clear the databaase
  db.get("users")
    .remove()
    .write();
  // Set the database up again
  defaultUsers.forEach(function(user) {
    db.get("users")
      .push({ id:user.id,name: user.name,email:user.email })
      .write();
      
  });
  const users = db.get("users").value(); 
      response.json({message:"User table reset successfully",data:users,status:200});
  
});


module.exports = router;
