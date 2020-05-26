var server = 'http://localhost:9000/';
var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function getCreateTeamDiv() {
    // Get the modal
    var modal = document.getElementById("CreateNewTeamDiv");
    // Get the button that opens the modal
    var btn = document.getElementById("btnCreateNewTeam");
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
            $('#CreateNewTeamDiv').hide();
        }
    });
}

function getAddPlayerDiv() {
    // Get the modal
    var modal = document.getElementById("AddPlayerDiv");
    // Get the button that opens the modal
    var btn = document.getElementById("btnAddPlayer");
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
            $('#AddPlayerDiv').hide();
        }
    });
}

function getAddCoachDiv() {
    // Get the modal
    var modal = document.getElementById("AddCoachDiv");
    // Get the button that opens the modal
    var btn = document.getElementById("btnAddCoach");
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
            $('#AddCoachDiv').hide();
        }
    });
}

function getAddTeamManagerDiv() {
    // Get the modal
    var modal = document.getElementById("AddTeamManagerDiv");
    // Get the button that opens the modal
    var btn = document.getElementById("btnAddTeamManager");
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
            $('#AddTeamManagerDiv').hide();
        }
    });
}

function submitNewPlayer() {
    var emptyCell = false;
    var teamName = document.getElementById("teamNameP").value;
    var emailP = document.getElementById("emailP").value;
    var playerEmail = document.getElementById("playerEmail").value;
    var playerId = document.getElementById("playerId").value;
    var playerFName = document.getElementById("playerFName").value;
    var playerLName = document.getElementById("playerLName").value;
    var playerBD = document.getElementById("playerBD").value;
    var playerRole = document.getElementById("playerRole").value;
    if (teamName == "" || emailP == "" || playerEmail == "" || playerId == "" || playerFName == "" || playerLName == "" || playerBD == "" || playerRole == "" || !emailTest(emailP) || !emailTest(playerEmail)) {
        emptyCell = true;
    }
    if (!emptyCell) {
        try {
            console.log("addPlayer/" + teamName + "/" + emailP + "/" + playerEmail + "/" + playerId + "/" + playerFName + "/" + playerLName + "/" + playerBD + "/" + playerRole + "/");
            $.ajax({
                url: server + "addPlayer/" + teamName + "/" + emailP + "/" + playerEmail + "/" + playerId + "/" + playerFName + "/" + playerLName + "/" + playerBD + "/" + playerRole + "/",
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {
                    alert("Players added to the Team ");
                },
                error: function (xhr) {
                    alert(xhr.responseJSON.message);
                }
            });
        } catch (error) {
            alert(error);
        }
    } else {
        alert("error: Some player details are not filled appropriately");
    }
    var frm = document.getElementById("AddPlayerForm");
    frm.reset();
}

function submitNewCoach() {
    var emptyCell = false;
    var teamName = document.getElementById("teamNameC").value;
    var emailC = document.getElementById("emailC").value;
    var coachEmail = document.getElementById("coachEmail").value;
    var coachId = document.getElementById("coachId").value;
    var coachFName = document.getElementById("coachFName").value;
    var coachLName = document.getElementById("coachLName").value;
    var coachRole = document.getElementById("coachRole").value;
    var qualificationCoach = document.getElementById("qualificationCoach").value;
    if(teamName==""||emailC==""||coachEmail==""||coachId==""||coachFName==""||coachLName==""||coachRole==""||qualificationCoach==""||!emailTest(emailC)||!emailTest(coachEmail)){
        emptyCell=true;
    }
    if (!emptyCell) {
        try {
            console.log("addCoach/" + teamName + "/" + emailC + "/" + coachEmail + "/" + coachId + "/" + coachFName + "/" + coachLName + "/" + coachRole + "/" + qualificationCoach + "/");
            $.ajax({
                url: server + "addCoach/" + teamName + "/" + emailC + "/" + coachEmail+ "/" + coachId + "/" + coachFName + "/" + coachLName + "/" + coachRole+ "/" + qualificationCoach + "/",
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {
                    alert("Coaches added successfully to the team!");
                },
                error: function (xhr) {
                    alert(xhr.responseJSON.message);
                }
            });
        } catch (error) {
            alert(error);
        }
    } else {
        alert("error: Some coach details are not filled appropriately");
    }
    var frm = document.getElementById("AddCoachForm");
    frm.reset();
}

function submitNewTeamManager() {
    var emptyCell = false;
    var teamName = document.getElementById("teamNameT").value;
    var teamManagerEmail = document.getElementById("teamManagerEmail").value;
    var teamManagerId = document.getElementById("teamManagerId").value;
    var teamManagerFName = document.getElementById("teamManagerFName").value;
    var teamManagerLName = document.getElementById("teamManagerLName").value;
    var permissionsString = getPermissions();
    var ownedByEmail = document.getElementById("ownedByEmail").value;
    if(teamName==""||teamManagerEmail==""||teamManagerId==""||teamManagerFName==""||teamManagerLName==""||ownedByEmail==""||!emailTest(teamManagerEmail)||!emailTest(ownedByEmail)){
        emptyCell=true;
    }
    if (!emptyCell) {
        try {
            console.log("addTeamManager/" + teamName + "/" +teamManagerEmail  + "/" + teamManagerId + "/" + teamManagerFName + "/" + teamManagerLName + "/" + permissionsString+ "/" + ownedByEmail + "/");
            $.ajax({
                url: server + "addTeamManager/" + teamName + "/" +teamManagerEmail  + "/" + teamManagerId + "/" + teamManagerFName + "/" + teamManagerLName + "/" + permissionsString+ "/" + ownedByEmail + "/",
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {
                    alert("Team Managers added successfully to the team!");
                },
                error: function (xhr) {
                    alert(xhr.responseJSON.message);
                }
            });
        } catch (error) {
            alert(error);
        }
    } else {
        alert("error: Some team manager details are not filled appropriately");
    }
    var frm = document.getElementById("AddTeamManagerForm");
    frm.reset();
}
//todo: court name court city
function submitNewTeam() {
    var emptyCell = false;
    var teamName = document.getElementById("teamName").value;
    var ownerEmail= document.getElementById("email").value;
    var budget = document.getElementById("budget").value;
    var courtName = document.getElementById("courtName").value;
    if (teamName == "" ||ownerEmail==""  || budget == "" || courtName == "" || !emailTest(ownerEmail))
        emptyCell = true;
    if (!emptyCell) {
        try {
            console.log("createNewTeam/" + teamName + "/" + ownerEmail + "/" + budget + "/" + courtName + "/");
            $.ajax({
                url: server + "createNewTeam/" + teamName + "/" + ownerEmail + "/" + budget + "/" + courtName + "/",
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {
                    alert("new team added successfully!");
                },
                error: function (xhr) {
                    alert(xhr.responseJSON.message);
                }
            });
        } catch (error) {
            alert(error);
        }
        // $.ajax({
        //     url: server + "createNewTeam/" + teamName + "/" + owner + "/" + budget + "/" +  courtName + '/',
        //     type: 'GET',
        //     contentType: 'application/json',
        //     success: function (data) {
        //         alert("Team Created!");
        //     },
        //     error: function (xhr) {
        //         alert(xhr.responseJSON.message);
        //     }
        // });
    }else {
        alert("error: Some team details are not filled appropriately");
    }
    var frm = document.getElementById("CreateNewTeamForm");
    frm.reset();
}


function getPermissions() {
    var permissions = "";

    var $boxes = $('input[name=ADD_PLAYER]');
    if ($boxes[0].checked) {
        permissions += "ADD_PLAYER,";
    }
    $boxes = $('input[name=ADD_TEAM_MANAGER]');
    if ($boxes[0].checked) {
        permissions += "ADD_TEAM_MANAGER,";
    }
    $boxes = $('input[name=ADD_COACH]');
    if ($boxes[0].checked) {
        permissions +="ADD_COACH,";
    }
    $boxes = $('input[name=ADD_COURT]');
    if ($boxes[0].checked) {
        permissions += "ADD_COURT,";
    }
    $boxes = $('input[name=ADD_FINANCIAL]');
    if ($boxes[0].checked) {
        permissions += "ADD_FINANCIAL,";
    }
    $boxes = $('input[name=CHANGE_STATUS]');
    if ($boxes[0].checked) {
        permissions += "CHANGE_STATUS,";
    }
    $boxes = $('input[name=REMOVE_PLAYER]');
    if ($boxes[0].checked) {
        permissions += "REMOVE_PLAYER,";
    }
    $boxes = $('input[name=REMOVE_TEAM_MANAGER]');
    if ($boxes[0].checked) {
        permissions += "REMOVE_TEAM_MANAGER,";
    }
    $boxes = $('input[name=REMOVE_COACH]');
    if ($boxes[0].checked) {
        permissions += "REMOVE_COACH,";
    }
    $boxes = $('input[name=REMOVE_COURT]');
    if ($boxes[0].checked) {
        permissions += "REMOVE_COURT,";
    }
    $boxes = $('input[name=CREATE_NEW_TEAM]');
    if ($boxes[0].checked) {
        permissions += "CREATE_NEW_TEAM,";
    }
    $boxes = $('input[name=UPDATE_COACH]');
    if ($boxes[0].checked) {
        permissions += "UPDATE_COACH,";
    }
    $boxes = $('input[name=UPDATE_PLAYER]');
    if ($boxes[0].checked) {
        permissions += "UPDATE_PLAYER,";
    }
    $boxes = $('input[name=UPDATE_COURT]');
    if ($boxes[0].checked) {
        permissions += "UPDATE_COURT,";
    }
    $boxes = $('input[name=UPDATE_TEAM_MANAGER]');
    if ($boxes[0].checked) {
        permissions += "UPDATE_TEAM_MANAGER,";
    }
    return permissions;
}


function emailTest(input) {
    if (emailReg.test(input)) {
        return true;
    } else {
        return false;
    }
}