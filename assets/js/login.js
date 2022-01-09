 
   var firebaseConfig = {
    apiKey: "AIzaSyB6IY0O5FDD2_tmDxhbFGiWNvujO_HvD_w",
    authDomain: "bd-refugee-information-system.firebaseapp.com",
    databaseURL: "https://bd-refugee-information-system-default-rtdb.firebaseio.com",
    projectId: "bd-refugee-information-system",
    storageBucket: "bd-refugee-information-system.appspot.com",
    messagingSenderId: "700305332490",
    appId: "1:700305332490:web:90f775b7e15bb1e07b42f3"
  };
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const database = firebase.database()



//  function login() {
//     var userid = document.getElementById("userid").value;

//     //console.log(px);
//     var password= document.getElementById("password").value;
//      //alert(px+" "+p);


//      firebase.database().ref('User/login/' + id).set({
//             userid: userid,
//              password:password
//           }, function(error) {
//             if (error) {
//               // The write failed...
//             } else {
//                 alert("Done");
              
           
//             }
//           });
//  }

 function register ()
 {
   password=document.getElementById("password").value
country=document.getElementById("country").value
first_name=document.getElementById("first_name").value
last_name=document.getElementById("last_name").value
year=document.getElementById("year").value
if(validate_password(password)==false )
{
  alert('password is outta line!!')
  return
}
if(validate_field(first_name)==false || validate_field(last_name)==false ||
validate_field(year)==false || validate_field(country)==false){
  alert('One or more extra field is not filled up!!')
  return
}
auth.createUserWithEmailANdPassword(Year,password).then(function(){
var user = auth.currentUser
var database_ref=database.ref()
var user_data ={
  last_login:Date.now()
}
database_ref.child('users/'+user.uid).update(user_data)
alert('User Logged In!!')
})
.catch(function(error))
{
  var error_code = error.code
  var error_message=error.message
  alert(error_message)
}

  }
