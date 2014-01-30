function Controller() {
    function openMenu() {
        $.menu.getView().animate({
            left: 0,
            duration: 1e3
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mainWin = Ti.UI.createWindow({
        id: "mainWin",
        title: "USeek"
    });
    $.__views.mainWin && $.addTopLevelView($.__views.mainWin);
    $.__views.home = Alloy.createController("home", {
        id: "home",
        __parentSymbol: $.__views.mainWin
    });
    $.__views.home.setParent($.__views.mainWin);
    openMenu ? $.__views.home.on("openMenu", openMenu) : __defers["$.__views.home!openMenu!openMenu"] = true;
    $.__views.menu = Alloy.createController("menu", {
        id: "menu",
        __parentSymbol: $.__views.mainWin
    });
    $.__views.menu.setParent($.__views.mainWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.mainWin.open();
    __defers["$.__views.home!openMenu!openMenu"] && $.__views.home.on("openMenu", openMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;