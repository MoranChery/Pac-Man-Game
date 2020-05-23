var server = 'http://localhost:9000/';
var ownerEmail;
var teamName;
var errorInDetails = false;
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
            $('#TeamOwnerDiv').hide();
        }
    });
}

var arrHeadPlayer = new Array();	// array for header.
arrHeadPlayer = ['', 'Email Address', 'Player Id', 'First Name', 'Last Name', 'Birth Date', 'Player Role'];
var arrHeadCoach = new Array();	// array for header.
arrHeadCoach = ['', 'Email Address', 'Coach Id', 'First Name', 'Last Name', 'Coach Role', 'Qualification Coach'];
var arrHeadTeamManager = new Array();	// array for header.
arrHeadTeamManager = ['', 'Email Address', 'Team Manager Id', 'First Name', 'Last Name', 'Permissions', 'Owned By Id'];

// first create TABLE structure with the headers.
function createTables() {
    createPlayerTable();
    createCoachTable();
    createTeamManagerTable();
}

function createPlayerTable() {
    var playerTable = document.createElement('table');
    playerTable.setAttribute('id', 'playerTable'); // table id.

    var tr = playerTable.insertRow(-1);
    for (var h = 0; h < arrHeadPlayer.length; h++) {
        var th = document.createElement('th'); // create table headers
        th.innerHTML = arrHeadPlayer[h];
        tr.appendChild(th);
    }

    var div = document.getElementById('playersDiv');
    div.appendChild(playerTable);  // add the TABLE to the container.
}

function createCoachTable() {
    var coachTable = document.createElement('table');
    coachTable.setAttribute('id', 'coachTable'); // table id.

    var tr = coachTable.insertRow(-1);
    for (var h = 0; h < arrHeadCoach.length; h++) {
        var th = document.createElement('th'); // create table headers
        th.innerHTML = arrHeadCoach[h];
        tr.appendChild(th);
    }

    var div = document.getElementById('coachesDiv');
    div.appendChild(coachTable);  // add the TABLE to the container.
}

function createTeamManagerTable() {
    var TeamManagerTable = document.createElement('table');
    TeamManagerTable.setAttribute('id', 'TeamManagerTable'); // table id.

    var tr = TeamManagerTable.insertRow(-1);
    for (var h = 0; h < arrHeadTeamManager.length; h++) {
        var th = document.createElement('th'); // create table headers
        th.innerHTML = arrHeadTeamManager[h];
        tr.appendChild(th);
    }

    var div = document.getElementById('teamManagersDiv');
    div.appendChild(TeamManagerTable);  // add the TABLE to the container.
}


// now, add a new to the TABLE.
function addPlayer() {
    var playerTab = document.getElementById('playerTable');

    var rowCnt = playerTab.rows.length;   // table row count.
    var tr = playerTab.insertRow(rowCnt); // the table row.
    tr = playerTab.insertRow(rowCnt);

    for (var c = 0; c < arrHeadPlayer.length; c++) {
        var td = document.createElement('td'); // table definition.
        td = tr.insertCell(c);

        if (c == 0) {      // the first column.
            // add a button in every new row in the first column.
            var button = document.createElement('input');

            // set input attributes.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            // add button's 'onclick' event.
            button.setAttribute('onclick', 'removePlayer(this)');

            td.appendChild(button);
        } else if (c == 5) {
            // add a date in every new row
            var date = document.createElement('input');
            // set input attributes.
            date.setAttribute('type', 'date');
            date.setAttribute('value', '');
            td.appendChild(date);
        } else {
            // 2nd, 3rd and 4th column, will have textbox.
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');

            td.appendChild(ele);
        }
    }
}

function addCoach() {
    var coachTab = document.getElementById('coachTable');

    var rowCnt = coachTab.rows.length;   // table row count.
    var tr = coachTab.insertRow(rowCnt); // the table row.
    tr = coachTab.insertRow(rowCnt);

    for (var c = 0; c < arrHeadCoach.length; c++) {
        var td = document.createElement('td'); // table definition.
        td = tr.insertCell(c);

        if (c == 0) {      // the first column.
            // add a button in every new row in the first column.
            var button = document.createElement('input');

            // set input attributes.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            // add button's 'onclick' event.
            button.setAttribute('onclick', 'removeCoach(this)');

            td.appendChild(button);
        } else {
            // 2nd, 3rd and 4th column, will have textbox.
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');

            td.appendChild(ele);
        }
    }
}

function createCheckBoxesElements(td) {
    var checkBox1 = document.createElement('input');
    var label1 = document.createElement('label');
    var br = document.createElement('br');
    checkBox1.type = "checkbox";
    checkBox1.name = "ADD_PLAYER";
    checkBox1.value = "ADD_PLAYER";
    label1.for = 'ADD_PLAYER';
    label1.innerText = 'ADD_PLAYER';
    td.appendChild(checkBox1);
    td.appendChild(label1);
    td.appendChild(br);

    var checkBox2 = document.createElement('input');
    var label2 = document.createElement('label');
    var br = document.createElement('br');
    checkBox2.type = "checkbox";
    checkBox2.name = "ADD_TEAM_MANAGER";
    checkBox2.value = "ADD_TEAM_MANAGER";
    label2.for = 'ADD_TEAM_MANAGER';
    label2.innerText = 'ADD_TEAM_MANAGER';
    td.appendChild(checkBox2);
    td.appendChild(label2);
    td.appendChild(br);

    var checkBox3 = document.createElement('input');
    var label3 = document.createElement('label');
    var br = document.createElement('br');
    checkBox3.type = "checkbox";
    checkBox3.name = "ADD_COACH";
    checkBox3.value = "ADD_COACH";
    label3.for = 'ADD_COACH';
    label3.innerText = 'ADD_COACH';
    td.appendChild(checkBox3);
    td.appendChild(label3);
    td.appendChild(br);

    var checkBox4 = document.createElement('input');
    var label4 = document.createElement('label');
    var br = document.createElement('br');
    checkBox4.type = "checkbox";
    checkBox4.name = "ADD_COURT";
    checkBox4.value = "ADD_COURT";
    label4.for = 'ADD_COURT';
    label4.innerText = 'ADD_COURT';
    td.appendChild(checkBox4);
    td.appendChild(label4);
    td.appendChild(br);

    var checkBox5 = document.createElement('input');
    var label5 = document.createElement('label');
    var br = document.createElement('br');
    checkBox5.type = "checkbox";
    checkBox5.name = "ADD_FINANCIAL";
    checkBox5.value = "ADD_FINANCIAL";
    label5.for = 'ADD_FINANCIAL';
    label5.innerText = 'ADD_FINANCIAL';
    td.appendChild(checkBox5);
    td.appendChild(label5);
    td.appendChild(br);

    var checkBox6 = document.createElement('input');
    var label6 = document.createElement('label');
    var br = document.createElement('br');
    checkBox6.type = "checkbox";
    checkBox6.name = "CHANGE_STATUS";
    checkBox6.value = "CHANGE_STATUS";
    label6.for = 'CHANGE_STATUS';
    label6.innerText = 'CHANGE_STATUS';
    td.appendChild(checkBox6);
    td.appendChild(label6);
    td.appendChild(br);

    var checkBox7 = document.createElement('input');
    var label7 = document.createElement('label');
    var br = document.createElement('br');
    checkBox7.type = "checkbox";
    checkBox7.name = "REMOVE_PLAYER";
    checkBox7.value = "REMOVE_PLAYER";
    label7.for = 'REMOVE_PLAYER';
    label7.innerText = 'REMOVE_PLAYER';
    td.appendChild(checkBox7);
    td.appendChild(label7);
    td.appendChild(br);

    var checkBox8 = document.createElement('input');
    var label8 = document.createElement('label');
    var br = document.createElement('br');
    checkBox8.type = "checkbox";
    checkBox8.name = "REMOVE_TEAM_MANAGER";
    checkBox8.value = "REMOVE_TEAM_MANAGER";
    label8.for = 'REMOVE_TEAM_MANAGER';
    label8.innerText = 'REMOVE_TEAM_MANAGER';
    td.appendChild(checkBox8);
    td.appendChild(label8);
    td.appendChild(br);

    var checkBox9 = document.createElement('input');
    var label9 = document.createElement('label');
    var br = document.createElement('br');
    checkBox9.type = "checkbox";
    checkBox9.name = "REMOVE_COACH";
    checkBox9.value = "REMOVE_COACH";
    label9.for = 'REMOVE_COACH';
    label9.innerText = 'REMOVE_COACH';
    td.appendChild(checkBox9);
    td.appendChild(label9);
    td.appendChild(br);

    var checkBox10 = document.createElement('input');
    var label10 = document.createElement('label');
    var br = document.createElement('br');
    checkBox10.type = "checkbox";
    checkBox10.name = "REMOVE_COURT";
    checkBox10.value = "REMOVE_COURT";
    label10.for = 'REMOVE_COURT';
    label10.innerText = 'REMOVE_COURT';
    td.appendChild(checkBox10);
    td.appendChild(label10);
    td.appendChild(br);

    var checkBox11 = document.createElement('input');
    var label11 = document.createElement('label');
    var br = document.createElement('br');
    checkBox11.type = "checkbox";
    checkBox11.name = "OWNER";
    checkBox11.value = "OWNER";
    label11.for = 'OWNER';
    label11.innerText = 'OWNER';
    td.appendChild(checkBox11);
    td.appendChild(label11);
    td.appendChild(br);

    var checkBox12 = document.createElement('input');
    var label12 = document.createElement('label');
    var br = document.createElement('br');
    checkBox12.type = "checkbox";
    checkBox12.name = "CREATE_NEW_TEAM";
    checkBox12.value = "CREATE_NEW_TEAM";
    label12.for = 'CREATE_NEW_TEAM';
    label12.innerText = 'CREATE_NEW_TEAM';
    td.appendChild(checkBox12);
    td.appendChild(label12);
    td.appendChild(br);

    var checkBox13 = document.createElement('input');
    var label13 = document.createElement('label');
    var br = document.createElement('br');
    checkBox13.type = "checkbox";
    checkBox13.name = "UPDATE_COACH";
    checkBox13.value = "UPDATE_COACH";
    label13.for = 'UPDATE_COACH';
    label13.innerText = 'UPDATE_COACH';
    td.appendChild(checkBox13);
    td.appendChild(label13);
    td.appendChild(br);

    var checkBox14 = document.createElement('input');
    var label14 = document.createElement('label');
    var br = document.createElement('br');
    checkBox14.type = "checkbox";
    checkBox14.name = "UPDATE_PLAYER";
    checkBox14.value = "UPDATE_PLAYER";
    label14.for = 'UPDATE_PLAYER';
    label14.innerText = 'UPDATE_PLAYER';
    td.appendChild(checkBox14);
    td.appendChild(label14);
    td.appendChild(br);

    var checkBox15 = document.createElement('input');
    var label15 = document.createElement('label');
    var br = document.createElement('br');
    checkBox15.type = "checkbox";
    checkBox15.name = "UPDATE_COURT";
    checkBox15.value = "UPDATE_COURT";
    label15.for = 'UPDATE_COURT';
    label15.innerText = 'UPDATE_COURT';
    td.appendChild(checkBox15);
    td.appendChild(label15);
    td.appendChild(br);

    var checkBox16 = document.createElement('input');
    var label16 = document.createElement('label');
    var br = document.createElement('br');
    checkBox16.type = "checkbox";
    checkBox16.name = "UPDATE_TEAM_MANAGER";
    checkBox16.value = "UPDATE_TEAM_MANAGER";
    label16.for = 'UPDATE_TEAM_MANAGER';
    label16.innerText = 'UPDATE_TEAM_MANAGER';
    td.appendChild(checkBox16);
    td.appendChild(label16);
    td.appendChild(br);
}

function addTeamManager() {
    var TeamManagerTab = document.getElementById('TeamManagerTable');

    var rowCnt = TeamManagerTab.rows.length;   // table row count.
    var tr = TeamManagerTab.insertRow(rowCnt); // the table row.
    tr = TeamManagerTab.insertRow(rowCnt);

    for (var c = 0; c < arrHeadTeamManager.length; c++) {
        var td = document.createElement('td'); // table definition.
        td = tr.insertCell(c);

        if (c == 0) {      // the first column.
            // add a button in every new row in the first column.
            var button = document.createElement('input');

            // set input attributes.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            // add button's 'onclick' event.
            button.setAttribute('onclick', 'removeTeamManager(this)');

            td.appendChild(button);
        } else if (c == 5) {
            createCheckBoxesElements(td);

        } else {
            // 2nd, 3rd and 4th column, will have textbox.
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');

            td.appendChild(ele);
        }
    }
}

// delete TABLE row function.
function removePlayer(oButton) {
    var playerTab = document.getElementById('playerTable');
    playerTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
}

// delete TABLE row function.
function removeCoach(oButton) {
    var coachTab = document.getElementById('coachTable');
    coachTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
}

// delete TABLE row function.
function removeTeamManager(oButton) {
    var TeamManagerTab = document.getElementById('TeamManagerTable');
    TeamManagerTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
}

function addPlayersToServer() {
    var playerTab = document.getElementById('playerTable');
    // loop through each row of the table.
    for (var row = 1; row < playerTab.rows.length - 1; row=row+2) {
        var arrValues = new Array();
        var emptyCell = false;
        // loop through each cell in a row.
        for (c = 0; c < playerTab.rows[row].cells.length && !emptyCell &&!errorInDetails; c++) {
            var element = playerTab.rows.item(row).cells[c];

            if (element.childNodes[0].getAttribute('type') == 'text') {
                if (element.childNodes[0].value != '') {
                    if (c == 1) {
                        if (emailTest(element.childNodes[0].value)) {//if the email is from email pattern
                            arrValues.push(element.childNodes[0].value);
                        } else {
                            errorInDetails = true;
                        }
                    } else arrValues.push(element.childNodes[0].value);
                } else {
                    emptyCell = true;
                }
            } else if (element.childNodes[0].getAttribute('type') == 'date') {
                if (element.childNodes[0].value != '') {
                    arrValues.push(element.childNodes[0].value);
                } else {
                    emptyCell = true;
                }
            }
        }
        if (!emptyCell&& !errorInDetails) {
            try {
                console.log("addPlayer/" + teamName + "/" + ownerEmail + "/" + arrValues[0] + "/" + arrValues[1] + "/" + arrValues[2] + "/" + arrValues[3] + "/" + arrValues[4] + "/" + arrValues[5] + "/");
            } catch (error) {
                alert(error);
                errorInDetails = true;
            }
            // $.ajax({
            //     url: server + "addPlayer/" + teamName + "/" + ownerEmail + "/" + arrValues[0] + "/" + arrValues[1] + "/" + arrValues[2] + "/" + arrValues[3] + "/" + arrValues[4] + "/"+arrValues[5] + "/",
            //     type: 'GET',
            //     contentType: 'application/json',
            //     success: function (data) {
            //         alert("Players added to the Team ");
            //     },
            //     error: function (xhr) {
            //         alert(xhr.responseJSON.message);
            //     }
            // });
        } else {
            alert("Some details in row number: " + (row*0.5+0.5) + " in table Players are not filled");
            errorInDetails = true;
        }
    }

}

function addCoachesToServer() {
    var coachTab = document.getElementById('coachTable');
    // loop through each row of the table.
    for (var row = 1; row < coachTab.rows.length - 1; row=row+2) {
        var arrValues = new Array();
        var emptyCell = false;
        // loop through each cell in a row.
        for (c = 0; c < coachTab.rows[row].cells.length && !emptyCell &&!errorInDetails; c++) {
            var element = coachTab.rows.item(row).cells[c];
            if (element.childNodes[0].getAttribute('type') == 'text') {
                if (element.childNodes[0].value != '') {
                    if (c == 1) {
                        if (emailTest(element.childNodes[0].value)) {//if the email is from email pattern
                            arrValues.push(element.childNodes[0].value);
                        } else {
                            errorInDetails = true;
                        }
                    } else arrValues.push(element.childNodes[0].value);
                } else {
                    emptyCell = true;
                }
            }
        }
        if (!emptyCell&& !errorInDetails) {
            try {
                console.log("addCoach/" + teamName + "/" + ownerEmail + "/" + arrValues[0] + "/" + arrValues[1] + "/" + arrValues[2] + "/" + arrValues[3] + "/" + arrValues[4] + "/" + arrValues[5] + "/");
            } catch (error) {
                alert(error);
            }
            // $.ajax({
            //     url: server + "addCoach/"+teamName+"/"+ownerEmail+"/"+arrValues[0] + "/" + arrValues[1] + "/" + arrValues[2] + "/" + arrValues[3] + "/" + arrValues[4] + "/"+arrValues[5] + "/",
            //     type: 'GET',
            //     contentType: 'application/json',
            //     success: function (data) {
            //         alert("Coaches added successfully to the team!");
            //     },
            //     error: function (xhr) {
            //         alert(xhr.responseJSON.message);
            //     }
            // });
        } else {
            alert("Some details in row number: " + (row*0.5+0.5) + "in table: Coaches are not filled");
            errorInDetails = true;
        }
    }
}

function addTeamManagersToServer() {
    var TeamManagerTab = document.getElementById('TeamManagerTable');
    // loop through each row of the table.
    for (var row = 1; row < TeamManagerTab.rows.length - 1; row=row+2) {
        var arrValues = new Array();
        var emptyCell = false;
        // loop through each cell in a row.
        for (c = 0; c < TeamManagerTab.rows[row].cells.length && !emptyCell &&!errorInDetails; c++) {
            var element = TeamManagerTab.rows.item(row).cells[c];
            if (element.childNodes[0].getAttribute('type') == 'text') {
                if (element.childNodes[0].value != '') {
                    if (c == 1) {
                        if (emailTest(element.childNodes[0].value)) {//if the email is from email pattern
                            arrValues.push(element.childNodes[0].value);
                        } else {
                            errorInDetails = true;
                        }
                    } else arrValues.push(element.childNodes[0].value);
                } else {
                    emptyCell = true;
                }
            } else if (c == 5) {
                var permissionsString = getPermissions(row*0.5-0.5);
                arrValues.push(permissionsString);
            }
        }
        if (!emptyCell && !errorInDetails) {
            try {
                console.log("addTeamManager/" + teamName + "/" + ownerEmail + "/" + arrValues[0] + "/" + arrValues[1] + "/" + arrValues[2] + "/" + arrValues[3] + "/" + arrValues[4] + "/" + arrValues[5] + "/");
            } catch (error) {
                alert(error);
            }
            // $.ajax({
            //     url: server + "addTeamManager/" + teamName + "/" + ownerEmail + "/" + arrValues[0] + "/" + arrValues[1] + "/" + arrValues[2] + "/" + arrValues[3] + "/" + arrValues[4] + "/"+arrValues[5] + "/",
            //     type: 'GET',
            //     contentType: 'application/json',
            //     success: function (data) {
            //         alert("Team Managers added successfully to the team!");
            //     },
            //     error: function (xhr) {
            //         alert(xhr.responseJSON.message);
            //     }
            // });
        }
        else {
            alert("error in row number: " + (row*0.5+0.5) + " in table: Team Managers");
            errorInDetails = true;
        }
    }
}

function getPermissions(row) {
    var permissions = "";

    var $boxes = $('input[name=ADD_PLAYER]');
    if ($boxes[row ].checked) {
        permissions += "ADD_PLAYER,";
    }
    $boxes = $('input[name=ADD_TEAM_MANAGER]');
    if ($boxes[row].checked) {
        permissions += "ADD_TEAM_MANAGER,";
    }
    $boxes = $('input[name=ADD_COACH]');
    if ($boxes[row].checked) {
        permissions = +"ADD_COACH,";
    }
    $boxes = $('input[name=ADD_COURT]');
    if ($boxes[row].checked) {
        permissions += "ADD_COURT,";
    }
    $boxes = $('input[name=ADD_FINANCIAL]');
    if ($boxes[row ].checked) {
        permissions += "ADD_FINANCIAL,";
    }
    $boxes = $('input[name=CHANGE_STATUS]');
    if ($boxes[row ].checked) {
        permissions += "CHANGE_STATUS,";
    }
    $boxes = $('input[name=REMOVE_PLAYER]');
    if ($boxes[row ].checked) {
        permissions += "REMOVE_PLAYER,";
    }
    $boxes = $('input[name=REMOVE_TEAM_MANAGER]');
    if ($boxes[row ].checked) {
        permissions += "REMOVE_TEAM_MANAGER,";
    }
    $boxes = $('input[name=REMOVE_COACH]');
    if ($boxes[row ].checked) {
        permissions += "REMOVE_COACH,";
    }
    $boxes = $('input[name=REMOVE_COURT]');
    if ($boxes[row ].checked) {
        permissions += "REMOVE_COURT,";
    }
    $boxes = $('input[name=OWNER]');
    if ($boxes[row ].checked) {
        permissions += "OWNER,";
    }
    $boxes = $('input[name=CREATE_NEW_TEAM]');
    if ($boxes[row ].checked) {
        permissions += "CREATE_NEW_TEAM,";
    }
    $boxes = $('input[name=UPDATE_COACH]');
    if ($boxes[row ].checked) {
        permissions += "UPDATE_COACH,";
    }
    $boxes = $('input[name=UPDATE_PLAYER]');
    if ($boxes[row ].checked) {
        permissions += "UPDATE_PLAYER,";
    }
    $boxes = $('input[name=UPDATE_COURT]');
    if ($boxes[row].checked) {
        permissions += "UPDATE_COURT,";
    }
    $boxes = $('input[name=UPDATE_TEAM_MANAGER]');
    if ($boxes[row ].checked) {
        permissions += "UPDATE_TEAM_MANAGER,";
    }
    return permissions;
}

function createEmptyTeam() {
    teamName = document.getElementById("teamName").value;
    ownerEmail = document.getElementById("email").value;
    var budget = document.getElementById("budget").value;
    var courtName = document.getElementById("courtName").value;
    var courtCity = document.getElementById("courtCity").value;
    if (teamName == "" || ownerEmail == "" || budget == "" || courtName == "" || courtCity == "" || !emailTest(ownerEmail))
        errorInDetails = true;
    if (!errorInDetails) {
        try {
            console.log("createNewTeam/" + teamName + "/" + ownerEmail + "/" + budget + "/" + courtName + '/' + courtCity + '/');
        } catch (error) {
            alert(error);
            errorInDetails = true;
        }
        // $.ajax({
        //     url: server + "createNewTeam/" + teamName + "/" + owner + "/" + budget + "/" +  courtName + '/'+courtCity+'/',
        //     type: 'GET',
        //     contentType: 'application/json',
        //     success: function (data) {
        //         alert("Team Created!");
        //     },
        //     error: function (xhr) {
        //         alert(xhr.responseJSON.message);
        //     }
        // });
    }
}

// function to extract and submit table data.
function submit() {
    errorInDetails = false;
    createEmptyTeam();
    if (!errorInDetails) {
        addPlayersToServer();
    }
    if (!errorInDetails) {
        addCoachesToServer();
    }
    if (!errorInDetails) {
        addTeamManagersToServer();
    }
    if (!errorInDetails) {
        alert("The team: " + teamName + " has created successfully!");
    } else {
        alert("Try to enter details again");
    }

}

function emailTest(input) {
    if (emailReg.test(input)) {
        return true;
    } else {
        return false;
    }
}


