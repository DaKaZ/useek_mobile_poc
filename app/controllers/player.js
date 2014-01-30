var videos = Alloy.Collections.video;
var args = arguments[0] || {};
var video = videos.get(args.id);
var activeMovie = Titanium.Media.createVideoPlayer({
        url : video.get('pseudo_streaming_url'),
        mediaControlStyle : Titanium.Media.VIDEO_CONTROL_NONE,
        scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
        fullscreen : false,
        autoplay : true,
        width : 340,
        height : 260,
        top : '40dp'       
        
    });
    
activeMovie.addEventListener('click', function(e) {
	$.lblOutput.text = 'x:' + e.x + ' y:' + e.y;
});
    
$.playerWin.add(activeMovie);

function closePlayer() {
	    activeMovie.hide();
        activeMovie.release();
        activeMovie = null;
        $.playerWin.close();
}

function playVideo() {
	activeMovie.play();
}


