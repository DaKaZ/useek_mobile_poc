function Controller() {
    function closePlayer() {
        activeMovie.hide();
        activeMovie.release();
        activeMovie = null;
        $.playerWin.close();
    }
    function playVideo() {
        activeMovie.play();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "player";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.playerWin = Ti.UI.createWindow({
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#33a",
                offset: 0
            }, {
                color: "#000",
                offset: 1
            } ]
        },
        id: "playerWin",
        title: "USeek Player",
        backgroundColor: "#fff"
    });
    $.__views.playerWin && $.addTopLevelView($.__views.playerWin);
    $.__views.lblClose = Ti.UI.createLabel({
        right: "10dp",
        color: "#ddd",
        width: "60dp",
        height: "20dp",
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 5,
        font: {
            fontSize: "10dp"
        },
        textAlign: "center",
        text: "Close",
        id: "lblClose",
        top: "10dp"
    });
    $.__views.playerWin.add($.__views.lblClose);
    closePlayer ? $.__views.lblClose.addEventListener("click", closePlayer) : __defers["$.__views.lblClose!click!closePlayer"] = true;
    $.__views.lblOutput = Ti.UI.createLabel({
        bottom: "60dp",
        color: "#ddd",
        width: "100%",
        height: "40dp",
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 5,
        font: {
            fontSize: "10dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        id: "lblOutput"
    });
    $.__views.playerWin.add($.__views.lblOutput);
    $.__views.lblPlay = Ti.UI.createLabel({
        bottom: "30dp",
        color: "#ddd",
        width: "100%",
        height: "20dp",
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 5,
        font: {
            fontSize: "10dp"
        },
        textAlign: "center",
        text: "Play",
        id: "lblPlay"
    });
    $.__views.playerWin.add($.__views.lblPlay);
    playVideo ? $.__views.lblPlay.addEventListener("click", playVideo) : __defers["$.__views.lblPlay!click!playVideo"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var videos = Alloy.Collections.video;
    var args = arguments[0] || {};
    var video = videos.get(args.id);
    var activeMovie = Titanium.Media.createVideoPlayer({
        url: video.get("pseudo_streaming_url"),
        mediaControlStyle: Titanium.Media.VIDEO_CONTROL_NONE,
        scalingMode: Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
        fullscreen: false,
        autoplay: true,
        width: 340,
        height: 260,
        top: "40dp"
    });
    activeMovie.addEventListener("click", function(e) {
        $.lblOutput.text = "x:" + e.x + " y:" + e.y;
    });
    $.playerWin.add(activeMovie);
    __defers["$.__views.lblClose!click!closePlayer"] && $.__views.lblClose.addEventListener("click", closePlayer);
    __defers["$.__views.lblPlay!click!playVideo"] && $.__views.lblPlay.addEventListener("click", playVideo);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;