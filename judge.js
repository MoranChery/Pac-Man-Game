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
            $('#JudgeDiv').hide();
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
            $('#JudgeDiv').hide();
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
            $('#JudgeDiv').hide();
        }
    });
}

function submitAddEvent() {
    var emptyCell = false;
    var email = document.getElementById("email").value;
    var gameId= document.getElementById("gameId").value;
    var eventTime = document.getElementById("eventTime").value;
    var eventMinute = document.getElementById("eventMinute").value;
    var gameEventType = document.getElementById("gameEventType").value;
    var description = document.getElementById("description").value;
    if (email == "" ||gameId==""  || eventTime == "" || eventMinute == "" ||gameEventType==""||description==""|| !emailTest(email))
        emptyCell = true;
    if (!emptyCell) {
        try {
            console.log("addEventToGame/"+email+"/"+gameId+"/"+eventTime+"/"+eventMinute+"/"+gameEventType+"/"+description+"/");
        } catch (error) {
            alert(error);
        }
        // $.ajax({
        //     url: server + "addEventToGame/"+email+"/"+gameId+"/"+eventTime+"/"+eventMinute+"/"+gameEventType+"/"+description+"/",
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
        alert("error: Some event details are not filled appropriately");
    }
    var frm = document.getElementById("AddEventToGameForm");
    frm.reset();
}

function submitUpdateGameEventAfterEnd() {
    var emptyCell = false;
    var judgeMail = document.getElementById("judgeMail").value;
    var gameIdU= document.getElementById("gameIdU").value;
    var eventId = document.getElementById("eventId").value;
    var eventTimeU = document.getElementById("eventTimeU").value;
    var eventMinuteU = document.getElementById("eventMinuteU").value;
    var gameEventTypeU = document.getElementById("gameEventTypeU").value;
    var descriptionU = document.getElementById("descriptionU").value;
    if (judgeMail == "" ||gameIdU==""  || eventId == "" || eventTimeU == "" ||eventMinuteU==""||gameEventTypeU==""||descriptionU==""||!emailTest(judgeMail))
        emptyCell = true;
    if (!emptyCell) {
        try {
            console.log("updateGameEventAfterEnd/"+judgeMail+"/"+gameIdU+"/"+eventId+"/"+eventTimeU+"/"+eventMinuteU+"/"+gameEventTypeU+"/"+descriptionU+"/");
        } catch (error) {
            alert(error);
        }
        // $.ajax({
        //     url: server + "updateGameEventAfterEnd/"+judgeMail+"/"+gameIdU+"/"+eventId+"/"+eventTimeU+"/"+eventMinuteU+"/"+gameEventTypeU+"/"+descriptionU+"/",
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
        alert("error: Some event details are not filled appropriately");
    }
    var frm = document.getElementById("UpdateGameEventAfterEndForm");
    frm.reset();
}

function submitCreateReportForGame() {
    var emptyCell = false;
    var i_file = document.getElementById("i_file").value;
    var judgeMailC = document.getElementById("judgeMailC").value;
    var gameIdC = document.getElementById("gameIdC").value;
    if ( i_file == "" ||judgeMailC==""||gameIdC=="")
        emptyCell = true;
    if (!emptyCell) {
        try {
            console.log("createReportForGame/"+i_file+"/"+judgeMailC+"/"+gameIdC+"/");
        } catch (error) {
            alert(error);
        }
        // $.ajax({
        //     url: server + "createReportForGame/"+i_file+"/"+judgeMailC+"/"+gameIdC+"/",
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
        alert("error: Some report details are not filled appropriately");
    }
    var frm = document.getElementById("CreateReportForGameForm");
    frm.reset();
}

$('#i_file').change( function(event) {
    var tmppath = URL.createObjectURL(event.target.files[0]);
    $("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));

    $("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>["+tmppath+"]</strong>");
});

function emailTest(input) {
    if (emailReg.test(input)) {
        return true;
    } else {
        return false;
    }
}