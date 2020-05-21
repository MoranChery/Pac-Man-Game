function changeCalculateLeaguePointsPolicy(){

    // Get the modal
    var modal = document.getElementById("ChangePointsPolicyDiv");

    // Get the button that opens the modal
    var btn = document.getElementById("btnChangePointsPolicy");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeChangePointsPolicyDiv")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        document.getElementById("ChangePointsPolicyButton").disabled = true;
        modal.style.display = "block";
        getLeagueSeason();
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

function changeGameDate() {
    
}

function changeGameLocation() {

}

function changePolicy(){

}


function getLeagueSeason() {

}