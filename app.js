var server = 'http://localhost:9000/';
var userEmail;
var interval;

function getLogInDiv(){

    // Get the modal
    var modal = document.getElementById("LogInDiv");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            $('#LogInDiv').hide();
        }
    });
}

function logIn() {
    userEmail = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    $.ajax({
        url: server+'login/'+userEmail+'/'+pass+'/',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            var screen = data.UserType+"Screen.html";
            localStorage.setItem("user" , userEmail );
            window.location=screen;
        },
        error: function(xhr){
             alert(xhr.responseJSON.message);
        }
    });
}

function showAlertOfUser(data) {
    var table = document.getElementById("alertTable");
    for (var k in data) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = data[k].msgHeader;
        cell2.innerHTML = data[k].msgBody;
    }


    // Get the modal
    var modal = document.getElementById("AlertDiv");

    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            $('#AlertDiv').hide();
        }
    });
}

function getAlerts(){
    userEmail  = localStorage.getItem("user");

    $.ajax({

        url: server+'getAlerts/' + userEmail,
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            showAlertOfUser(data);
        },
        error: function(xhr){
        }

    });

    setTimeout(getAlerts, 60000); //todo  - need to change to 10 min - now is 1 min

}
