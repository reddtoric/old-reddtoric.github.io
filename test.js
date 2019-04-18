$(document).ready(function() {
    console.log("Ready");
    
    $('.fancy-button').on('click', function(event) {
        event.preventDefault();
        console.log("prevented");
    });
});

