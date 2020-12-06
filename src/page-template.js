// let build = require("./lib");

const fullTeam = ``;

const generateHTML = function (fullTeam) {

  // const teamCards = function (teamArray) {

    if (fullTeam.Role === "Manager") {
      return `<div class="card" style="width: 18rem;">
      <div class="card-header p-4">
        <h2>${name}</h2>
        <h4><i class="fas fa-mug-hot"></i> Manager<h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
        <li class="list-group-item">ID Number: ${IDname}</li>
        <li class="list-group-item">Office Number: ${officeNumber}</li>
      </ul>
      </div>`

    } else if (fullTeam.Role === "Engineer") {
      return `<div class="card" style="width: 18rem;">
      <div class="card-header p-4">
        <h2>${name}</h2>
        <h4><i class="fas fa-glasses"></i> Engineer<h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
        <li class="list-group-item">ID Number: ${IDname}</li>
        <li class="list-group-item">Github: <a href="https://github.com/${Github}"> ${Github} </a>
      </ul>
      </div>`

    } else if (fullTeam.Role === "Intern") {
      return `<div class="card" style="width: 18rem;">
      <div class="card-header p-4">
        <h2>${name}</h2>
        <h4><i class="fas fa-user-graduate"></i>   Intern<h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Email: <a href=mailto:"${email}>${email}</a></li>
        <li class="list-group-item">ID Number: ${IDname}</li>
        <li class="list-group-item">School: ${school}</li>
      </ul>
      </div>`

    }
    
};

module.exports = data => {

return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
       <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
       <link rel="stylesheet" href="/style.css">
       <title>2020 Leading Team</title>
   </head>
   
   <body>
     <style>
       body{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       background-color: #EFEEEE;
       display: flex;
       justify-content: center;
       flex-wrap: wrap;
       height: 100%;
       width: 100%;
       letter-spacing: 2px;
   }
   
   .header{
     width: 100%;
     font-family: 'Bebas Neue', cursive;
     text-align: center;
     padding: 7%;
     background-color: rgb(202, 88, 88);
     color: #EFEEEE;
     box-shadow: -6px -6px 26px 0 rgba(255, 255, 255, 0.83),6px 6px 16px 0 rgba(217, 210, 200, 0.51);
     border: 1px solid rgba(255, 255, 255, 0.20);
     margin-bottom: 30px;
     clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
   
   }
   
   .card{
     margin-top: 20px;
     margin-right: 20px;
     margin-left: 20px;
     color: rgb(202, 88, 88);
     background-color: #EFEEEE;
     font-family: 'Bebas Neue', cursive;
     box-shadow: -6px -6px 26px 0 rgba(255, 255, 255, 0.83),6px 6px 16px 0 rgba(217, 210, 200, 0.51);
     border: 1px solid rgba(255, 255, 255, 0.20)
   }
   
   .card ul li{
       background-color: #EFEEEE;
       border-bottom: 1px solid rgba(206, 189, 189, 0.657);
   }
   
   .card-header{
     font-family: 'Bebas Neue', cursive;
     background-color: #EFEEEE;
       border-bottom: 1px solid rgba(206, 189, 189, 0.685);
   }
   .footer{
     width: 100%;
     padding: 7%;
   }
    </style>
    <div class="header"><h1>My Team</h1></div>
     ${fullTeam}
   
     <div class="footer"></div>  
</body>
</html>`

}

exports.generateHTML = generateHTML;