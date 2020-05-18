var server = 'http://localhost:9000/';

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
    var userEma = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    $.ajax({
        //todo - change the ip
        url: server+'login/{'+userEma+'}/{'+pass+'}/',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            var screen = data.UserType+"Screen.html";
            window.location=screen;
        },
        error: function(xhr){
                alert("Something got wrong");
            //  alert(xhr.message);
             alert(xhr.responseJSON.message);

        }
    });
}

function getAlertOfUser() {
    var moran = "moran";
    $.ajax({
        //todo - change the ip
        url: server+'teams/' + moran,
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            alert(data.hi);
        },
        error: function(xhr){
            var divBlock= document.getElementById("LogIn");
            var divNone = document.getElementById("Welcome");
            changeToDiv(divBlock,divNone);
            //alert("llog in");
            alert(xhr.responseJSON.status);
        }
    });
}

function changeToDiv(divBlock , divNone) {
    divBlock.style.display= "block";
    divNone.style.display= "none";
}

