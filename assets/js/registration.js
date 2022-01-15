 function submit() {
    //var country = "Bangladesh";
 var country= document.getElementById("country").value;
    //console.log(px);
    var firstName= document.getElementById("firstName").value;
     //alert(px+" "+p);
      var lastName = document.getElementById("lastName").value;
        var Password = document.getElementById("Password").value;
      var Year = document.getElementById("Year").value;
       var gender = document.getElementById("Gender").value;
      //alert(country + " " +firstName +" "  +lastName+ " "+ gender +" "+ Year+" "+Password);
var user_id = Date.now();
alert(user_id);
     firebase.database().ref('User/registration/'+ user_id).set({
            country: country,
            firstName: firstName,
            lastName: lastName,
            
            Password:Password,
            Year:Year,
            gender:gender

           
          }, function(error) {
            if (error) {
              // The write failed...
              
            } else {
                alert("Registration complete!");
              
           
            }
          });
 }
function search()
{
  var user_id= document.getElementById("user_id").value;

  alert("user id : "+user_id);

  var seen=document.getElementById('show_info');
  seen.style.display='block';
   //console.log("user id "+ user_id);
firebase.database().ref('User/registration/'+user_id).once('value').then(function(snapshot)
{
  if(snapshot.exists())
  {
     var country=snapshot.val().country;
    var firstName=snapshot.val().firstName;
     var lastName=snapshot.val().lastName;
    //  var Password=snapshot.val().Password; 
      var Year=snapshot.val().Year; 
       var gender=snapshot.val().gender; 
       

 document.getElementById("country").value=country;
        document.getElementById("firstName").value = firstName;
        document.getElementById("lastName").value = lastName;
          
        // document.getElementById("Password").value=Password;
        document.getElementById("Year").value=Year;

                  document.getElementById("gender").value=gender;
                    
     //alert("data found!!")
  }
  else{
alert("data not found")
  }
},function(error)
{
  if(error)
  {

  }
  else{

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

 


// var user_id=0;
//     function addComment(country,firstName,lastName,Year,gender){
      
//       var ul=document.getElementById('list');
//       var header=document.createElement('h2');
//       var country=document.createElement('div');
//       var firstName=document.createElement('div');
//       var lastName=document.createElement('div');
//       var Year=document.createElement('div');
//  var gender=document.createElement('div');
//       header.innerHTML='User id'+ (++user_id);
//       country.innerHTML=country;
//       firstName.innerHTML=firstName;
//       lastName.innerHTML=lastName;
//       Year.innerHTML=Year;
//       gender.innerHTML=gender;
      
//       ul.appendChild(header);
//       ul.appendChild(country);
//       ul.appendChild(firstName);
//       ul.appendChild(lastName);
//       ul.appendChild(Year);
//        ul.appendChild(gender);

//     }
//     function FetchAllData(){
//       firebase.database().ref('users').once('value',function(snapshot){
//         snapshot.forEach( 
//            function(Childsnapshot){
//              let country=Childsnapshot.val().country;
//              let firstName=Childsnapshot.val().firstName;
//                 let lastName=Childsnapshot.val().lastName;
//              let Year=Childsnapshot.val().Year;
//              let gender=Childsnapshot.val().gender;
//              addComment(country,firstName,lastName,Year,gender);
//            }
//         )
  
          
//         });
//     }
   


 


 