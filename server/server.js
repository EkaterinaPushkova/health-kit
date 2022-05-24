const express = require( "express" );
const app = express();

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '1234',
  database: 'diplom'
});
app.get( "/test" , (req, res) => {


  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(

    'SELECT * from users;',
    function(err, results, fields) {
      var json = {};
      var key = 'details';
      json[key] = [];
       results.forEach(element => {
         var details={
           "id":element.id,
           "login":element.login
         };
         json[key].push(details);
       });
       res.send(json)
       
    }
  );
  

});
app.get( "/getListOfTrainings" , (req, res) => {


  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(

    'SELECT * from trainings where purpose_id = '+ req.query.id+' and amount_in_week = '+req.query.amount+' and day = '+req.query.day+';',
    function(err, results, fields) {
       
      var json = {};
      var key = 'details';
      json[key] = [];
       results.forEach(element => {
         var details={
           "name":element.name,
           "amount_of_reps":element.amount_of_reps,
           "amount_of_sets":element.amount_of_sets
         };
         json[key].push(details);
       });
       res.send(json)
      
    }
  );
  

});

app.get( "/getBadHabits" , (req, res) => {


  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(

    'SELECT * from bad_habits where id_user = '+ req.query.id+';',
    function(err, results, fields) {
       
      var json = {};
      var key = 'details';
      json[key] = [];
       results.forEach(element => {
         var details={
           "name":element.name,
           "status":element.status
         };
         json[key].push(details);
       });
       res.send(json)
      
    }
  );
  

});

app.get( "/getPurposes" , (req, res) => {


  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(

    'SELECT * from paths ;',
    function(err, results, fields) {
       
      var json = {};
      var key = 'details';
      json[key] = [];
       results.forEach(element => {
         var details={
           "name":element.name
         };
         json[key].push(details);
       });
       res.send(json)
      
    }
  );
  

});
app.get( "/authentification" , (req, res) => {


      res.setHeader('Access-Control-Allow-Origin', '*');
  
      
    connection.query(

        'SELECT * from users where login = "'+req.query.login+'" and password = "'+req.query.password+'";',
        function(err, results, fields) {
           if(results.length>0){
              console.log("USer присутсвует");
              res.status(200).json({
                ok: true,
                password:results[0].password,
                id:results[0].id,
                name:results[0].name,
                surname:results[0].surname,
                weight: results[0].weight,
                height: results[0].height,
                login: results[0].login,
                purpose_id: results[0].purpose_id,
                birthday: results[0].birthday
              });
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
    
});




const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));``