function Controller() {
    function playGame() {
        var video = videos.get(id);
        video.get("pseudo_streaming_url");
        Alloy.createController("player", {
            id: id
        }).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "row",
        backgroundImage: "http://10.255.255.1:3000{thumbnail_url}"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "undefined" != typeof $model.__transform["title"] ? $model.__transform["title"] : $model.get("title"),
        id: "__alloyId1"
    });
    $.__views.row.add($.__views.__alloyId1);
    playGame ? $.__views.__alloyId1.addEventListener("click", playGame) : __defers["$.__views.__alloyId1!click!playGame"] = true;
    $.__views.play = Ti.UI.createImageView({
        id: "play"
    });
    $.__views.row.add($.__views.play);
    playGame ? $.__views.play.addEventListener("click", playGame) : __defers["$.__views.play!click!playGame"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var videos = Alloy.Collections.video;
    var id;
    $model && (id = $model.id);
    __defers["$.__views.__alloyId1!click!playGame"] && $.__views.__alloyId1.addEventListener("click", playGame);
    __defers["$.__views.play!click!playGame"] && $.__views.play.addEventListener("click", playGame);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;