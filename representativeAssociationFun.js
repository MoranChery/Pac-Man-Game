var userEmail;

function repAssLoadHtmlButton() {
    document.getElementById("btnChangePointsPolicy").click();
    document.getElementById("btnGameBoard").click();
    getAlerts();
}

function changeCalculateLeaguePointsPolicy(){

    // Get the modal
    var modal = document.getElementById("ChangePointsPolicyDiv");

    // Get the button that opens the modal
    var btn = document.getElementById("btnChangePointsPolicy");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeChangePointsPolicyDiv")[0];

    if(modal.style.display == "none"){
        deleteLeagueSeason();
    }

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        deleteLeagueSeason();
        deletePolicy();
        getLeagueSeason();
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
            deleteLeagueSeason();
            deletePolicy();
        }
    }
    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            deleteLeagueSeason();
            deletePolicy();
            $('#ChangePointsPolicyDiv').hide();
        }
    });
}

function changePolicy(){
    userEmail =localStorage.getItem("user");
    var changeLeagueSeason = document.getElementById("leagueSeason").value;
    var policyChosen = document.getElementById("policy").value;
    userEmail = localStorage.getItem("user");
    $.ajax({
        url: server+'changeCalculateLeaguePointsPolicy/'+userEmail+"/"+changeLeagueSeason+"/"+policyChosen+"/",
        type: 'POST',
        contentType: 'application/json',
        success: function(data){
            showAlertSuccessChangePolicy();
        },
        error: function(xhr){
            alert(xhr.responseJSON.message);
        }
    });

}

function showAlertSuccessChangePolicy(){
    var modal = document.getElementById("ChangePointsPolicyDiv");
    modal.style.display = "none";
    deleteLeagueSeason();
    deletePolicy();
    alert("Success Change Policy");
}

function deleteLeagueSeason() {
    var select = document.getElementById("leagueSeason");
    var length = select.options.length;
    for (i = length-1; i >= 0; i--) {
        select.options[i] = null;
    }
}

function deletePolicy() {
    var select = document.getElementById("policy");
    var length = select.options.length;
    for (i = length-1; i >= 0; i--) {
        select.options[i] = null;
    }
}

function getLeagueSeason() {
    $.ajax({
        url: server+'getSeasonLeague/',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            setSelectSeasonLeague(data);
        },
        error: function(xhr){
            alert(xhr.responseJSON.message);
        }
    });
}

function getAllPolicy() {
    $.ajax({
        url: server+'getAllPolicy/',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            setAllPolicy(data);
        },
        error: function(xhr){
            alert(xhr.responseJSON.message);
        }
    });
}

function setAllPolicy(data) {
    var select = document.getElementById("policy");
    for (var k in data) {
        var option = document.createElement("option");
        option.text = data[k];
        select.add(option);
    }
}

function setSelectSeasonLeague(data) {
    var select = document.getElementById("leagueSeason");
    for (var k in data) {
        var option = document.createElement("option");
        option.text = data[k];
        select.add(option);
    }
    getAllPolicy();
    changeCalculateLeaguePointsPolicy();
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
            deleteLeagueSeason();
            deletePolicy();
            $('#gamesDetails').hide();
        }
    });
}

function openDivChosenGame(gameID, hostTeam, guestTeam, gameDate, court) {
    // Get the modal
    var modal = document.getElementById("chosenGame");

    document.getElementById("gameID").innerText = gameID;
    document.getElementById("team1").innerText = hostTeam;
    document.getElementById("team2").innerText = guestTeam;
    document.getElementById("date").innerText = gameDate;
    document.getElementById("location").innerText = court;
    modal.style.display = "block";
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeChosenGame")[0];


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

}

function getChosenGameDetails(ev) {
    var x =ev.target ;
    var element = document.getElementsByClassName('selected');
    if(element.length >0){
        element[0].className="";
    }
    ev.target.parentNode.className = 'selected';
    element = document.getElementsByClassName('selected');
    var rowChosen = element[0];
    var gameID = rowChosen.cells[0].innerText;
    var hostTeam =rowChosen.cells[1].innerText;
    var guestTeam = rowChosen.cells[2].innerText;
    var gameDate = rowChosen.cells[3].innerText;
    var court = rowChosen.cells[4].innerText;
    openDivChosenGame(gameID,hostTeam,guestTeam,gameDate,court);
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
            getChosenGameDetails(ev);
        });
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

function deleteGames() {
    var tableDel =document.getElementById("games")
    var lengthTable = tableDel.rows.length;
    for (var i =1 ; i<lengthTable; i++) {
        tableDel.deleteRow(1);
    }

}

function changeGameDate() {

    // Get the modal
    var modal = document.getElementById("changeGameDateDiv");

    // Get the button that opens the modal
    var btn = document.getElementById("changeGameDateBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeChangeGameDate")[0];


    // When the user clicks the button, open the modal
    btn.onclick = function() {
        var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        var tomday = tomorrow.getDate();
        var tommonth = tomorrow.getMonth() + 1;
        var tomyear = tomorrow.getFullYear();
        if(tomday<10){tomday='0'+tomday} if(tommonth<10){tommonth='0'+tommonth} tomorrow = tommonth+'/'+tomday+'/'+tomyear;
        document.getElementById("dateField").min =tomyear +"-"+tommonth+"-"+tomday+"T20:00";

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
            $('#changeGameDateDiv').hide();
        }
    });

}

function changeDate(){
    var date = document.getElementById("dateField").value;
    date =date.split('-');
    try {
        var hower = date[2].split('T');
    }
    catch (e) {
        alert("put valid input date");
        return;
    }

    date=date[0]+"-"+date[1]+"-"+ hower[0]+" "+hower[1];
    var gameId= document.getElementById("gameID").innerText;
    var user = localStorage.getItem("user");

    $.ajax({
        url: server+'changeGameDate/'+user+"/"+date+"/"+gameId,
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            alert("The change was successful");
            document.getElementById("gamesDetails").style.display = "none";
            document.getElementById("chosenGame").style.display = "none";
            document.getElementById("changeGameDateDiv").style.display = "none";
        },
        error: function(xhr){
            alert(xhr.responseJSON.message);
        }
    });

}

function changeGameLocation(){
// Get the modal
    var modal = document.getElementById("changeGameLocationDiv");

    // Get the button that opens the modal
    var btn = document.getElementById("changeGameLocationBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeChangeGameLocation")[0];


    // When the user clicks the button, open the modal
    btn.onclick = function() {
        deleteLocations();
        getLocation();
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function getLocation() {
    $.ajax({
        url: server+'getAllLocation/',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            setLocation(data);
        },
        error: function(xhr){
            alert(xhr.responseJSON.message);
        }
    });
}
function deleteLocations(){
    var select = document.getElementById("locationChoose");
    var length = select.options.length;
    for (i = length-1; i >= 0; i--) {
        select.options[i] = null;
    }
}

function setLocation(data) {
    var select = document.getElementById("locationChoose");
    for (var k in data) {
        var option = document.createElement("option");
        option.text = data[k];
        select.add(option);
    }
}

function changeLocation() {
    var gameId= document.getElementById("gameID").innerText;
    var user = localStorage.getItem("user");
    var newLocationSelect  = document.getElementById("locationChoose");
    var newLocation =newLocationSelect.options[newLocationSelect.selectedIndex].text;
    $.ajax({
        url: server+'changeGameLocation/'+user+"/"+newLocation+"/"+gameId,
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            alert("The change was successful: The location of the game"+gameId +" was changed to: "+newLocation);
            document.getElementById("gamesDetails").style.display = "none";
            document.getElementById("chosenGame").style.display = "none";
            document.getElementById("changeGameLocationDiv").style.display = "none";
        },
        error: function(xhr){
            alert(xhr.responseJSON.message);
        }
    });
}




