const express = require( "express" );
const app = express();

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '1234',
  database: 'KATYA SUDA NAZVANIE BD ILI DB'
});

app.get( "/authentification" , (req, res) => {
    connection.query(
        'SELECT * fro users where login = "'+req.body.login+'" and password = "'+req.body.password+'";',
        function(err, results, fields) {
            if(results.length > 0){
                res.json({
                    ok  : 'true'
                })
            }   else    {
                res.json({
                    ok : 'false'
                })
            }
        }
      );
    
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));``