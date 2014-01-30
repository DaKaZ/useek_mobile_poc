function openMenu() {
    $.menu.getView().animate({left:0,duration:1000});
}

function closeMenu() {
	alert('here');
    $.menu.getView().animate({left:-300,duration:1000});
}

$.mainWin.open();
 

