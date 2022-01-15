 function show() {
    var name = document.getElementById("name").value;

    //console.log(px);
    var id= document.getElementById("id").value;
     //alert(px+" "+p);
 var sub = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

     firebase.database().ref('User/contact/' + id).set({
            username: name,
            userid : id,
            subject:sub,
             message:message
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                alert("Message sent!");
              
           
            }
          });
 }
 

//  function show() {
   
//     var firstName= document.getElementById("firstName").value;
   
//       var lastName = document.getElementById("lastName").value;
     
//       var Year = document.getElementById("Year").value;
//       //alert(country + " " +firstName +" "  +lastName+ " "+ gender +" "+ Year+" "+Password);

//      firebase.database().ref('User/registration/'+ firstName).set({
//             //country: country,
//             firstName: firstName,
//             lastName: lastName,
//             Year:Year,
//             //Password:Password
           
//           }, function(error) {
//             if (error) {
//               // The write failed...
//             } else {
                
              
           
//             }
//           });
//  }

 

