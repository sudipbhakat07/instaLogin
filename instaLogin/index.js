var loginBttn = document.getElementById("login");

    loginBttn.addEventListener('click',function(){

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        var firebaseRef = firebase.database()
 
        
         var data = {
             username:username,
             password:password
         }
 
         
         firebaseRef.ref('records').push(data);

    })
 