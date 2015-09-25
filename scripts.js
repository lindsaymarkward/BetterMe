/**
 * Created by sci-lmw1 on 17/09/2015.
 */

// jQuery 'ready' function - runs when page loads and is ready
$(function () {
    // console.log("jQuery is ready.");
    //$('h2').css('color', 'yellow');

    var startButton = $('#startButton');
    startButton.css('display', 'none');
    startButton.fadeIn('slow');
    startButton.mouseenter(buttonEffect);
    startButton.mouseout(buttonEffectOut);
    startButton.click(startClicked);
//        $('.branding p').click(buttonEffect); // just to show reuse of function...

    var images = $('.col img');
    images.css('opacity', 0.75);
    images.on('mouseenter', fadeIn);
    images.on('mouseout', fadeOut);
    images.css('top', 50);
    images.animate({top: 0}, 1200);

    var footer = $('footer');
//        footer.child()
    footer.animate({paddingLeft: 400}, 5000);
});

function fadeIn(e) {
    $(e.target).animate({opacity: 1});
}

function fadeOut(e) {
    $(e.target).animate({opacity: 0.75});
}

function buttonEffect(e) {
    $(e.target).animate({padding: '1.5em', borderRadius: 10, backgroundColor: "#EF7D07", color: "white"});
}

function buttonEffectOut(e) {
    $(e.target).animate({padding: '1.2em', borderRadius: 0, backgroundColor: "#0B2C3F", color: "#EF7D07"});
}

function startClicked() {
//        $('#signup').show();
    $('#signup').slideDown();
}


button = document.getElementById('startButton');
button.addEventListener("click", function () {
    console.log("Hello World!");
});
