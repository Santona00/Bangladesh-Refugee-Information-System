 function submit() {
    var country = document.getElementById("country").value;

    //console.log(px);
    var id= document.getElementById("id").value;
     //alert(px+" "+p);
 var sub = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

     firebase.database().ref('User/registration/' + id).set({
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