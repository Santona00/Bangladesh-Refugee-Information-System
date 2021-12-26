function show() {
    var name = document.getElementById("name").value;

    // console.log(px);
    var id= document.getElementById("id").value;
     // alert(px+" "+p);
 var sub = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

     firebase.database().ref('User/contact/' + id).set({
            username: name,
            userid : id,
            subject:sub,
            Message:message
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                alert("DONE");
              
           
            }
          });
 }