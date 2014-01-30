var videos = Alloy.Collections.video;

var INDEXES = {
        'Current': 0,
        'Upcoming': 1,
        'All': 2
};
var whereIndex = INDEXES['All'];

// fetch videos items from restAPI
videos.fetch();

// open the window
$.gamesWin.open();



// Filter the fetched collection before rendering. Don't return the
// collection itself, but instead return an array of models
// that you would like to render.
function whereFunction(collection) {
        // return !whereIndex ?
                // collection.models :
                // collection.where({ done: whereIndex === 1 ? 0 : 1 });
       return collection.models;
}

// Perform transformations on each model as it is processed. Since
// these are only transformations for UI representation, we don't
// actually want to change the model. Instead, return an object
// that contains the fields you want to use in your bindings. The
// easiest way to do that is to clone the model and return its
// attributes with the toJSON() function.
function transformFunction(model) {
        var transform = model.toJSON();
        transform.item = '[' + transform.item + ']';
        return transform;
}



// Show video list based on selected status type
function showVideos(e) {
        if (typeof e.index !== 'undefined' && e.index !== null) {
                whereIndex = e.index; // TabbedBar
        } else {
                whereIndex = INDEXES[e.source.title]; // Android menu
        }
        videos.fetch();
}

function closeWindow(e) {  
	$.gamesWin.close();
}