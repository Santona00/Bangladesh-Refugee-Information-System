function search()
{
  var id = document.getElementById("id1").value;
firebase.database().ref('User/'+id).once('value').then(function(snapshot)
{
  if(snapshot.exists())
  {
    var name_=snapshot.val().name;
      var id_=snapshot.val().id; 
        var mail_=snapshot.val().email;
        document.getElementById("id").value=name_;
        document.getElementById("name").value=id_;
        document.getElementById("email").value=mail_;
  }
  else{

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

 function show() {
    var first_name = document.getElementById("name").value;

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


