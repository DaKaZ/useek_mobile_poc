var videos = Alloy.Collections.video;
var id;

if ($model) {
        id = $model.id;
   }

function playGame(e){
	var video = videos.get(id);
	var contentURL = video.get('pseudo_streaming_url');
	
	Alloy.createController("player", {id: id}).getView().open();

	
	
	
		
}










