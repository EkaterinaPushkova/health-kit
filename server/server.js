const express = require( "express" );
const app = express();

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '1234',
  database: 'diplom'
});

app.get( "/authentification" , (req, res) => {


      res.setHeader('Access-Control-Allow-Origin', '*');
  
      
    connection.query(

        'SELECT * from users where login = "'+req.query.login+'" and password = "'+req.query.password+'";',
        function(err, results, fields) {
           if(results.length>0){
              console.log("USer присутсвует");
              res.status(200).json({ok: true});
           }else{
            res.status(200).json({ok: false});
           }
        }
      );
      
    
});

app.get("/registration", (req, res) => {

   
      res.setHeader('Access-Control-Allow-Origin', '*');
  
      
    connection.query(
        'INSERT INTO users VALUES(null,"'+req.query.name+'", "'+req.query.surname+'", "'+req.query.birthday+'", "'+req.query.height+'", "'+req.query.weight+'", "'+req.query.badhabits+'", "'+req.query.login+'", "'+req.query.password+'");',
     
      );
      res.status(200);
    
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));``