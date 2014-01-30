function Controller() {
    function hideMenu() {
        alert("hide menu");
        $.trigger("closeMenu");
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
    $.__views.__alloyId17 = Ti.UI.createLabel({
        text: "Close",
        right: "10dp",
        top: "10dp",
        width: "60dp",
        height: "20dp",
        id: "__alloyId17"
    });
    $.__views.divMenu.add($.__views.__alloyId17);
    hideMenu ? $.__views.__alloyId17.addEventListener("click", hideMenu) : __defers["$.__views.__alloyId17!click!hideMenu"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId17!click!hideMenu"] && $.__views.__alloyId17.addEventListener("click", hideMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;