var loginBttn = document.getElementById("login");
loginBttn.addEventListener('click', function () {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var firebaseRef = firebase.database()


    var data = {
        username: username,
        password: password
    }
    console.log(data)
    const recordsListRef = firebaseRef.ref('records');
    const newRecordRef = recordsListRef.push(data);

})