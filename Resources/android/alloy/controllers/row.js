function Controller() {
    function playGame() {
        alert("TODO: Play the game");
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
    $.__views.lblTitle = Ti.UI.createLabel({
        id: "lblTitle",
        text: "undefined" != typeof $model.__transform["title"] ? $model.__transform["title"] : $model.get("title")
    });
    $.__views.row.add($.__views.lblTitle);
    playGame ? $.__views.lblTitle.addEventListener("click", playGame) : __defers["$.__views.lblTitle!click!playGame"] = true;
    $.__views.play = Ti.UI.createImageView({
        id: "play"
    });
    $.__views.row.add($.__views.play);
    playGame ? $.__views.play.addEventListener("click", playGame) : __defers["$.__views.play!click!playGame"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Collections.video;
    __defers["$.__views.lblTitle!click!playGame"] && $.__views.lblTitle.addEventListener("click", playGame);
    __defers["$.__views.play!click!playGame"] && $.__views.play.addEventListener("click", playGame);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;