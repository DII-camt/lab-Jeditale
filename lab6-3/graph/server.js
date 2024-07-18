// Serve the GraphiQL IDE.

const port = 3307;
var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")

const mariadb = require('mariadb');

const pool = mariadb.createPool({ 
    host: 'localhost', 
    user: 'root', 
    password: '1234', 
    database: 'test', 
    connectionLimit: 5 
}); 
const initializeDatabase = async () => { 
    let conn; 
    try { 
        conn = await pool.getConnection(); 
        await conn.query(` 
            CREATE TABLE IF NOT EXISTS user ( 
                id INT AUTO_INCREMENT PRIMARY KEY, 
                name VARCHAR(100), 
                age INT 
            ); 
        `); 
        console.log('User table created or already exists.'); 
    } catch (err) { 
        console.error('Error creating user table:', err); 
    } finally { 
        if (conn) conn.end(); 
    } 
}; 
 
initializeDatabase(); 
 

 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    getuser: String
  }
`)
 
// The root provides a resolver function for each API endpoint
var root = {
  hello() {
    return "Hello world!"
  },
  getuser() {
    return "Hello user!"
  },
}
var { ruruHTML } = require("ruru/server")
 

var app = express()
app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })
// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
)
  
// Start the server at port
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")