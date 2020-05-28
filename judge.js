var server = 'http://localhost:9000/';
var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function getAddEventToGameDiv(){
    // Get the modal
    var modal = document.getElementById("AddEventToGameDiv");
    // Get the button that opens the modal
    var btn = document.getElementById("btnAddEventToGame");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    $(document).keydown(function (event) {
        if (event.keyCode == 27) {
            $('#AddEventToGameDiv').hide();
        }
    });
}

function getUpdateGameEventAfterEndDiv(){
    // Get the modal
    var modal = document.getElementById("UpdateGameEventAfterEndDiv");
    // Get the button that opens the modal
    var btn = document.getElementById("btnUpdateGameEventAfterEnd");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    $(document).keydown(function (event) {
        if (event.keyCode == 27) {
            $('#UpdateGameEventAfterEndDiv').hide();
        }
    });
}

function getCreateReportForGameDiv(){
    // Get the modal
    var modal = document.getElementById("CreateReportForGameDiv");
    // Get the button that opens the modal
    var btn = document.getElementById("btnCreateReportForGameDiv");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    $(document).keydown(function (event) {
        if (event.keyCode == 27) {
            $('#CreateReportForGameDiv').hide();
        }
    });
}

function submitAddEvent() {
    var emptyCell = false;
    var email =  localStorage.getItem("user");
    var gameId= document.getElementById("gameId").value;
    var eventTime = document.getElementById("eventTime").value+"";
    var eventMinute = document.getElementById("eventMinute").value;
    var gameEventType = document.getElementById("gameEventType").value;
    var description = document.getElementById("description").value;
    if (email == "" ||gameId==""  || eventTime == "" || eventMinute == "" ||gameEventType==""||description=="")
        emptyCell = true;
    if (!emptyCell) {
        try {
            console.log("addEventToGame/"+email+"/"+gameId+"/"+eventTime+"/"+eventMinute+"/"+gameEventType+"/"+description+"/");
            $.ajax({
                url: server + "addEventToGame/"+email+"/"+gameId+"/"+eventTime+"/"+eventMinute+"/"+gameEventType+"/"+description+"/",
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {
                    alert("event added to the game successfully!");
                },
                error: function (xhr) {
                    alert(xhr.responseJSON.message);
                }
            });
        } catch (error) {
            alert(error);
        }
    }else {
        alert("error: Some event details are not filled appropriately");
    }
    var frm = document.getElementById("AddEventToGameForm");
    frm.reset();
}

function submitUpdateGameEventAfterEnd() {
    var emptyCell = false;
    var judgeMail =  localStorage.getItem("user");
    var gameIdU= document.getElementById("gameIdU").value;
    var eventId = document.getElementById("eventId").value;
    var eventTimeU = document.getElementById("eventTimeU").value;
    var eventMinuteU = document.getElementById("eventMinuteU").value;
    var gameEventTypeU = document.getElementById("gameEventTypeU").value;
    var descriptionU = document.getElementById("descriptionU").value;
    if (judgeMail == "" ||gameIdU==""  || eventId == "" || eventTimeU == "" ||eventMinuteU==""||gameEventTypeU==""||descriptionU=="")
        emptyCell = true;
    if (!emptyCell) {
        try {
            console.log("updateGameEventAfterEnd/"+judgeMail+"/"+gameIdU+"/"+eventId+"/"+eventTimeU+"/"+eventMinuteU+"/"+gameEventTypeU+"/"+descriptionU+"/");
            $.ajax({
                url: server + "updateGameEventAfterEnd/"+judgeMail+"/"+gameIdU+"/"+eventId+"/"+eventTimeU+"/"+eventMinuteU+"/"+gameEventTypeU+"/"+descriptionU+"/",
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {
                    alert("Update Game Event After End has done successfully!");
                },
                error: function (xhr) {
                    alert(xhr.responseJSON.message);
                }
            });
        } catch (error) {
            alert(error);
        }
    }else {
        alert("error: Some event details are not filled appropriately");
    }
    var frm = document.getElementById("UpdateGameEventAfterEndForm");
    frm.reset();
}

function submitCreateReportForGame() {
    var emptyCell = false;
    var i_file = document.getElementById("i_file").value;
    var judgeMailC =localStorage.getItem("user");
    var gameIdC = document.getElementById("gameIdC").value;
    if ( i_file == "" ||judgeMailC==""||gameIdC=="")
        emptyCell = true;
    if (!emptyCell) {
        try {
            console.log("createReportForGame/"+i_file+" "+"/"+judgeMailC+"/"+gameIdC+"/");
            $.ajax({
                url: server + "createReportForGame/"+i_file+" "+"/"+judgeMailC+"/"+gameIdC+"/",
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {
                    alert("Report for game "+gameIdC+" has added successfully!");
                },
                error: function (xhr) {
                    alert(xhr.responseJSON.message);
                }
            });
        } catch (error) {
            alert(error);
        }
    }else {
        alert("error: Some report details are not filled appropriately");
    }
    var frm = document.getElementById("CreateReportForGameForm");
    frm.reset();
}

function emailTest(input) {
    if (emailReg.test(input)) {
        return true;
    } else {
        return false;
    }
}

function getGameDetailsDiv() {
    // Get the modal
    var modal = document.getElementById("gamesDetails");

    // Get the button that opens the modal
    var btn = document.getElementById("btnGameBoard");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeChangeGame")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        deleteGames();
        getGamesFromServer();
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
            $('#gamesDetails').hide();
        }
    });
}

function deleteGames() {
    var tableDel =document.getElementById("games")
    var lengthTable = tableDel.rows.length;
    for (var i =1 ; i<lengthTable; i++) {
        tableDel.deleteRow(1);
    }

}

function getGamesFromServer() {
    $.ajax({
        url: server+'getAllGames/',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            setGames(data);
        },
        error: function(xhr){
            alert(xhr.responseJSON.message);
        }
    });
}

function setGames(data) {
    var table = document.getElementById("games");
    for (var k in data) {
        var row = table.insertRow(1);
        var gameID = row.insertCell(0);
        var hostTeam = row.insertCell(1);
        var guestTeam = row.insertCell(2);
        var gameDate = row.insertCell(3);
        var court = row.insertCell(4);
        gameID.innerHTML = data[k].gameID;
        hostTeam.innerHTML = data[k].hostTeam;
        guestTeam.innerHTML = data[k].guestTeam;
        var dateSplit = data[k].gameDate.split('-').join(', ').split('T');
        var hower = dateSplit[1].split(":");
        hower = hower[0]+":"+hower[1];
        dateSplit =dateSplit[0].split(',');
        gameDate.innerHTML = dateSplit[2]+"-"+dateSplit[1]+"-"+dateSplit[0]+" "+hower;
        court.innerHTML = data[k].court;
    }
    for (var i=1; i<table.rows.length ; i++){
        table.rows[i].addEventListener('click',function (ev) {
            getEventsGameDetails(ev);
        });
    }
}

function deleteEvents() {
    var tableDel =document.getElementById("eventsByGame");
    var lengthTable = tableDel.rows.length;
    for (var i =1 ; i<lengthTable; i++) {
        tableDel.deleteRow(1);
    }
}

function getEventsGameDetails(ev) {
    var x =ev.target ;
    var element = document.getElementsByClassName('selected');
    if(element.length >0){
        element[0].className="";
    }
    ev.target.parentNode.className = 'selected';
    element = document.getElementsByClassName('selected');
    var rowChosen = element[0];
    var gameID = rowChosen.cells[0].innerText;
    // Get the modal
    var modal = document.getElementById("eventsDetails");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeChangeGame")[0];
        deleteEvents();
        getEventsFromServer(gameID);
        modal.style.display = "block";
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
            $('#eventsDetails').hide();
        }
    });
}

function getEventsFromServer(gameId) {
    var user=localStorage.getItem("user");
    $.ajax({
        url: server+"getEventsByGameId/"+user+"/"+gameId+"/",
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            setGames(data);
        },
        error: function(xhr){
            alert(xhr.responseJSON.message);
        }
    });
}