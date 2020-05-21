var userEmail;

function changeCalculateLeaguePointsPolicy(){

    // Get the modal
    var modal = document.getElementById("ChangePointsPolicyDiv");

    // Get the button that opens the modal
    var btn = document.getElementById("btnChangePointsPolicy");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeChangePointsPolicyDiv")[0];

    var changePolicyBtn = document.getElementById("ChangePointsPolicyButton");

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
        getLeagueSeason();
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        deleteLeageSeason();
        deletePolicy();
    }

    // When the user clicks on the policy change
    changePolicyBtn.onclick = function () {
        changePolicy();
        modal.style.display = "none";
        alert("The change was successful");
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            deleteLeageSeason();
            deletePolicy();
        }
    }
    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            deleteLeageSeason();
            deletePolicy();
            $('#LogInDiv').hide();
        }
    });
}

function changePolicy(){
    userEmail = document.getElementById("user").value;
    var changeLeagueSeason = document.getElementById("leagueSeason").value;
    var policyChosen = document.getElementById("policy").value;
    userEmail = localStorage.getItem("user");
    $.ajax({
        url: server+'changeCalculateLeaguePointsPolicy/'+userEmail+"/"+changeLeagueSeason+"/"+policyChosen+"/",
        type: 'GET',
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
    deleteLeageSeason();
    deletePolicy();
}

function deleteLeageSeason() {
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

function changeGameDate() {

    // Get the modal
    var modal = document.getElementById("changeGameDateDiv");

    // Get the button that opens the modal
    var btn = document.getElementById("btnChangeGameDate");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeChangePointsPolicyDiv")[0];

    var changePolicyBtn = document.getElementById("changeGameDateDivButton");

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        var datePickerId = document.getElementById("dateField")
        var today = new Date();
        var dd = today.getDate()+1;
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        }
        if(dd>30){
            mm++;
            dd='01';
        }
        if(mm<10){
            mm='0'+mm
        }
        if(mm>13){
            mm='01';
            yyyy++;
        }

        today = yyyy+'-'+mm+'-'+dd;
        datePickerId.setAttribute("min", today);
        modal.style.display = "block";

    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks on the policy change
    changePolicyBtn.onclick = function () {
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

function changeDate(){

}

function changeGameLocation() {

}


