function Controller() {
    function hideMenu() {
        $.divMenu.animate({
            left: -300,
            duration: 1e3
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.divMenu = Ti.UI.createView({
        id: "divMenu",
        backgroundColor: "#500",
        height: "100%",
        width: "300",
        left: "-300"
    });
    $.__views.divMenu && $.addTopLevelView($.__views.divMenu);
    $.__views.lblCloseMenu = Ti.UI.createLabel({
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
        id: "lblCloseMenu",
        top: "10dp"
    });
    $.__views.divMenu.add($.__views.lblCloseMenu);
    hideMenu ? $.__views.lblCloseMenu.addEventListener("click", hideMenu) : __defers["$.__views.lblCloseMenu!click!hideMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.lblCloseMenu!click!hideMenu"] && $.__views.lblCloseMenu.addEventListener("click", hideMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;