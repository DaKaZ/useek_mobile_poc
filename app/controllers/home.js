
function openGamesWindow(e){
	// alert('TODO: Open Games Window');
	Alloy.createController("videos").getView().open();
}

function openAccountWindow(e){
	alert('TODO: Open Account Window');
}

function openFeaturedGame(e){
	alert('TODO: Open Featured Game');
}


function openSignIn(e){
	alert('TODO: Open Sign In Window');
}

function openSignUp(e){
	alert('TODO: Open Sign Up Window');
}

function openLearnMore(e){
	alert('TODO: Open Learn More Window');
}

function showMenu(e) {  
    $.trigger('openMenu');
}

var max_width = Ti.UI.FILL;