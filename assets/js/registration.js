 function submit() {
    var country = "Bangladesh";
 //var country= document.getElementById("country").value;
    //console.log(px);
    var firstName= document.getElementById("firstName").value;
     //alert(px+" "+p);
      var lastName = document.getElementById("lastName").value;
        var Password = document.getElementById("Password").value;
      var gender = document.getElementById("femaleGender").value;
       var gender = document.getElementById("maleGender").value;
        var gender = document.getElementById("other").value;
      var Year = document.getElementById("Year").value;
      //alert(country + " " +firstName +" "  +lastName+ " "+ gender +" "+ Year+" "+Password);

     firebase.database().ref('User/registration/'+ firstName).set({
            country: country,
            firstName: firstName,
            lastName: lastName,
            Year:Year,
            Password:Password
           
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                alert("Registration complete!");
              
           
            }
          });
 }

 