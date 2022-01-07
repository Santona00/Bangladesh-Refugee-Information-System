 function login() {
    var userid = document.getElementById("userid").value;

    //console.log(px);
    var password= document.getElementById("password").value;
     //alert(px+" "+p);


     firebase.database().ref('User/login/' + id).set({
            userid: userid,
             password:password
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                alert("Done");
              
           
            }
          });
 }