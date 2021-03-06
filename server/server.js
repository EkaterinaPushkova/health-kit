const express = require( "express" );
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '62.113.96.113',
  user: 'root',
  password : '1234',
  database: 'diplom'
});
 

//----------------запрос на получение последних 5 резултатов 

app.get( "/getListOfResults" , (req, res) => {


  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(

    '(SELECT * FROM (SELECT * FROM results where id_user = '+ req.query.id +' ORDER BY id DESC LIMIT 5) t ORDER BY id);',
    function(err, results, fields) {
       
      var json = {};
      var key = 'details';
      json[key] = []; 
       results.forEach(element => {
         var details={
           "weight":element.weight,
           "height":element.height,
           "girth_of_chest":element.girth_of_chest,
           "girth_of_weist":element.girth_of_weist,
           "girth_of_hips":element.girth_of_hips,
           "girth_of_biceps":element.girth_of_biceps,
           "date":element.date
         };
         json[key].push(details);
       });
       res.send(json)
      
    }
  );
  

});



//------------запрос на получение изменений за все время

app.get( "/getFullListOfResults" , (req, res) => {


  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(

    'SELECT * FROM results where id_user = '+ req.query.id +' ORDER BY id ASC;',
    function(err, results, fields) {
       
      var json = {};
      var key = 'details';
      json[key] = [];
       results.forEach(element => {
         var details={
           "weight":element.weight,
           "height":element.height,
           "girth_of_chest":element.girth_of_chest,
           "girth_of_weist":element.girth_of_weist,
           "girth_of_hips":element.girth_of_hips,
           "girth_of_biceps":element.girth_of_biceps,
           "date":element.date
         };
         json[key].push(details);
       });
       res.send(json)
      
    }
  );
  

}); 

//------------------запрос на получение последних 5 изменений 
app.get( "/getLastResult" , (req, res) => {


  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(

    'SELECT * FROM results where id_user = '+ req.query.id +'  ORDER BY id DESC LIMIT 1;',
    function(err, results, fields) {
       
      res.status(200).json({
           "weight":results[0].weight,
           "height":results[0].height,
           "girth_of_chest":results[0].girth_of_chest,
           "girth_of_weist":results[0].girth_of_weist,
           "girth_of_hips":results[0].girth_of_hips,
           "girth_of_biceps":results[0].girth_of_biceps,
           "date":results[0].date
        
       });
       
      
    }
  );
  

});


//----------запрос на получение тренировок по выбранным целям (для чек-листа)
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

//----------запрос на получение тренировок (для панели администрирования)
app.get( "/getFullListOfTrainings" , (req, res) => {


  res.setHeader('Access-Control-Allow-Origin', '*');
 
  
connection.query(

    'SELECT trainings.id,trainings.name,trainings.amount_of_reps,trainings.amount_of_sets,paths.path_name,trainings.amount_in_week,trainings.day from trainings,paths where trainings.purpose_id = paths.id and paths.id = '+req.query.purpose+' and trainings.amount_in_week = '+req.query.week+' and trainings.day = '+req.query.day+';',
    function(err, results, fields) {
       
      var json = {};
      var key = 'details';
      json[key] = [];
       results.forEach(element => {
         var details={
           "name":element.name,
           "amount_of_reps":element.amount_of_reps,
           "amount_of_sets":element.amount_of_sets,
           "purpose_id":element.path_name,
           "amount_in_week":element.amount_in_week,
           "day":element.day,
           "id":element.id
         };
         json[key].push(details);
       });
       res.send(json)
      
    }
  );
  

});


//--------------запрос на получение всех вредных привычек
// app.get( "/getBadHabits" , (req, res) => {


//   res.setHeader('Access-Control-Allow-Origin', '*');

  
// connection.query(

//     'SELECT * from bad_habits where id_user = '+ req.query.id+';',
//     function(err, results, fields) {
       
//       var json = {};
//       var key = 'details';
//       json[key] = [];
//        results.forEach(element => {
//          var details={
//            "name":element.name,
//            "status":element.status
//          };
//          json[key].push(details);
//        });
//        res.send(json)
      
//     }
//   );
  

// });


//--------------запрос на получение сообщения
app.get( "/getMessages" , (req, res) => {


  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(

    'SELECT * from messages ;',
    function(err, results, fields) {
       
      var json = {};
      var key = 'details';
      json[key] = [];
       results.forEach(element => {
         var details={
           "id":element.id_user,
           "subject":element.subject,
           "object":element.object,
           "date":element.date_of_message
         };
         json[key].push(details);
       });
       res.send(json)
      
    }
  );
  
});

//---------------------запрос в базу при авторизации
app.get( "/authentification" , (req, res) => {


      res.setHeader('Access-Control-Allow-Origin', '*');
  
      
    connection.query(

        'SELECT * from users where login = "'+req.query.login+'" and password = "'+req.query.password+'";',
        function(err, results, fields) {
           if(results.length>0){
              console.log("User exist");
              res.status(200).json({
                ok: true,
                password:results[0].password,
                id:results[0].id,
                name:results[0].name,
                surname:results[0].surname,
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


//-------------------------запрос при регистрации
app.get("/registration", (req, res) => {

   
  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(
    'INSERT INTO users VALUES(null,"'+req.query.name+'", "'+req.query.surname+'", "'+req.query.birthday+'",  "'+req.query.login+'", "'+req.query.password+'");',

  );
  

});

//------------------------запрос для добавления изменения параметров
app.get("/addResult", (req, res) => {

   
  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(
    'INSERT INTO results VALUES(null,'+req.query.weight+', '+req.query.height+', '+req.query.girth_of_chest+',  '+req.query.girth_of_weist+', '+req.query.girth_of_hips+', '+req.query.girth_of_biceps+', CURRENT_DATE() ,"'+req.query.id+'");',
 
  );
  res.status(200);

});


//-----------------запрос для добавления упражнения в бд в таблицу тренировок
app.get("/addTraining", (req, res) => {

   
  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(
    'INSERT INTO trainings VALUES(null,"'+req.query.name+'", '+req.query.amount_of_reps+', '+req.query.amount_of_sets+',  '+req.query.purpose_id+', '+req.query.amount_in_week+', '+req.query.day+');',
 
  );
  res.status(200);

});


//------------------------запрос для удаления упражнения из таблицы тренировок
app.get("/deleteTraining", (req, res) => {

   
  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(
    'DELETE from trainings where id = '+req.query.id+';',
 
  ); 
  res.status(200);
  
});
  
//------------------------запрос для редактирования профиля
app.get("/updateProfile", (req, res) => {

   
  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(
    'UPDATE users SET name = "'+req.query.name+'"  , surname = "'+req.query.surname+'" , birthday = "'+req.query.birthday+'" , login = "'+req.query.login+'" , password = "'+req.query.password+'" where id = '+req.query.id+' ;',
    
  ); 
  res.status(200);
  
});

//------------------------запрос для отправления сообщения из форма обратной связи
app.get("/addMessage", (req, res) => {

   
  res.setHeader('Access-Control-Allow-Origin', '*');

  
connection.query(
    'INSERT INTO  messages VALUES(null, "'+req.query.subject+'", "'+req.query.object+'", CURRENT_DATE(), '+req.query.id+');',
    
  ); 
  res.status(200);
  
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));``