const express = require( "express" );
const app = express();

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '1234',
  database: 'diplom'
});
//  
app.get( "/authentification" , (req, res) => {


    var data1 = {
        ok: false
      };
  
      // Adds header
      res.setHeader('Access-Control-Allow-Origin', '*');
  
      
    connection.query(
        'SELECT * from users where login = "'+req.query.login+'" and password = "'+req.query.password+'";',
        function(err, results, fields) {
           if(results.length>0){
              console.log("USer присутсвует");
              data1.ok = true;
           }else{
                
           }
        }
      );
      res.status(200).json(data1);
    
});

app.get("/registration", (req, res) => {

    var data1 = {
        ok: true
      };
  
      // Adds header
      res.setHeader('Access-Control-Allow-Origin', '*');
  
      
    connection.query(
        'INSERT INTO users VALUES(null,"'+req.query.name+'", "'+req.query.surname+'", "2002.07.22", 0, 0, "null", "'+req.query.login+'", "'+req.query.password+'");',
     
      );
      res.status(200).json(data1);
    
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));``