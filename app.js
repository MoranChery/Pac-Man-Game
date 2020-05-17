var server = 'http://localhost:9000/';

function signIn() {
    $.ajax({
        //todo - change the ip
        url: server,
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            alert(data.hi);
        },
        error: function(xhr){
            var divBlock= document.getElementById("SignIn");
            var divNone = document.getElementById("Welcome");
            changeToDiv(divBlock,divNone);
            alert("Sign In");
            //alert(xhr.responseJSON.message);
        }
    });
}

function logIn() {
    var teamName = "{teamName}";
    $.ajax({
        //todo - change the ip
        url: server+'teams/' + teamName,
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            alert(data.TeamName);
        },
        error: function(xhr){
            var divBlock= document.getElementById("LogIn");
            var divNone = document.getElementById("Welcome");
            changeToDiv(divBlock,divNone);
            //alert("Log In");

            alert(xhr.responseJSON.message);
        }
    });
}

function getUserScreen() {
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
            alert("Log In");
            //alert(xhr.responseJSON.message);
        }
    });
}

function changeToDiv(divBlock , divNone) {
    divBlock.style.display= "block";
    divNone.style.display= "none";
}

