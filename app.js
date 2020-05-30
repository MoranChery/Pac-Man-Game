//var server = 'http://localhost:9000/';
var server = 'http://132.72.65.26:9000/';
var userEmail;


function welcomLoadHtmlButton() {
    document.getElementById("myBtn").click();
}

function connectionToExternalSystems() {
    $.ajax({
        url: server+'isConnectionToExternalSystems',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
        },
        error: function(xhr){
            alert(xhr.responseJSON.message);
        }
    });
}

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
    if(userEmail==null || userEmail==""){
        alert("put valid  User Name");
    }
    else if (pass==null || pass==""){
        alert("put valid  Password ");
    }
    else {
        $.ajax({
            url: server + 'login/' + userEmail + '/' + pass + '/',
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {
                setUser(userEmail);
                connectionToExternalSystems();
                getRoles();
            },
            error: function (xhr) {
                alert(xhr.responseJSON.message);
            }
        });
    }
}



function deleteTableRow() {
    var tableDel =document.getElementById("alertTable")
    for (var i =1 ; i<tableDel.rows.length ; i++) {
        tableDel.deleteRow(i);
    }
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
        deleteTableRow();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            deleteTableRow();
        }
    }
    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            deleteTableRow();
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
        success: function(data) {
            if (data[0]!=null) {
                showAlertOfUser(data);
            }
        }
    });

    setTimeout(getAlerts,1000);
}

function showRoleType(data){
    var select = document.getElementById("roles");
    for (var k in data) {
        var option = document.createElement("option");
        option.text = data[k];
        select.add(option);
    }
    var modalLogIn = document.getElementById("LogInDiv");
    modalLogIn.style.display = "none";
    var modalChooseRole =document.getElementById("ChooseRole");
    modalChooseRole.style.display = "block";

    var span = document.getElementsByClassName("closeChooseRole")[0];

    span.onclick = function() {
        modalChooseRole.style.display = "none";
        deleteSelecteList();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modalChooseRole) {
            modalChooseRole.style.display = "none";
            deleteSelecteList();
        }
    }
    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            deleteSelecteList();
            $('#ChooseRole').hide();
        }
    });

}

function getRoles(){
    $.ajax({
        url: server+'getRules/'+userEmail+'/',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            showRoleType(data);
        },
        error: function(xhr){
            alert(xhr.responseJSON.message);
        }
    });
}

function getScreen(){
    var checkBox= document.getElementById("boolIsMail");
    sendcheckBoxChoosenToServer(checkBox);

    var select = document.getElementById("roles");
    var screen = select.value+"screen.html";
    window.location=screen;
}

function sendcheckBoxChoosenToServer(checkBox) {
    if(checkBox.checked) {
        $.ajax({
            url: server + 'setSubscriberWantAlertInMail/' + userEmail ,
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {
            },
            error: function (xhr) {
            }
        });
    }
}
function deleteSelecteList(){
    var select = document.getElementById("roles");
    var length = select.options.length;
    for (i = length-1; i >= 0; i--) {
        select.options[i] = null;
    }
}

function setUser(userEmail){
    localStorage.setItem("user", userEmail);
}