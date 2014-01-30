function Controller() {
    function __alloyId15() {
        __parentSymbol.removeEventListener("open", __alloyId15);
        if (__parentSymbol.activity) __parentSymbol.activity.onCreateOptionsMenu = function(e) {
            var __alloyId10 = {
                title: "Home",
                id: "__alloyId9"
            };
            $.__views.__alloyId9 = e.menu.add(_.pick(__alloyId10, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId9.applyProperties(_.omit(__alloyId10, Alloy.Android.menuItemCreateArgs));
            processTabs ? $.__views.__alloyId9.addEventListener("click", processTabs) : __defers["$.__views.__alloyId9!click!processTabs"] = true;
            var __alloyId12 = {
                title: "Sign In/Up",
                id: "__alloyId11"
            };
            $.__views.__alloyId11 = e.menu.add(_.pick(__alloyId12, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId11.applyProperties(_.omit(__alloyId12, Alloy.Android.menuItemCreateArgs));
            processTabs ? $.__views.__alloyId11.addEventListener("click", processTabs) : __defers["$.__views.__alloyId11!click!processTabs"] = true;
            var __alloyId14 = {
                title: "Learn More",
                id: "__alloyId13"
            };
            $.__views.__alloyId13 = e.menu.add(_.pick(__alloyId14, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId13.applyProperties(_.omit(__alloyId14, Alloy.Android.menuItemCreateArgs));
            processTabs ? $.__views.__alloyId13.addEventListener("click", processTabs) : __defers["$.__views.__alloyId13!click!processTabs"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function openGamesWindow() {
        alert("TODO: Open Games Window");
    }
    function openAccountWindow() {
        alert("TODO: Open Account Window");
    }
    function openFeaturedGame() {
        alert("TODO: Open Featured Game");
    }
    function processTabs(e) {
        whereIndex = "undefined" != typeof e.index && null !== e.index ? e.index : INDEXES[e.source.title];
        alert("Clicked: " + whereIndex);
    }
    function showMenu() {
        $.trigger("openMenu");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.header = Ti.UI.createView({
        top: 0,
        height: "90dp",
        width: Ti.UI.FILL,
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
                color: "#a00",
                offset: 0
            }, {
                color: "#800",
                offset: 1
            } ]
        },
        id: "header"
    });
    $.__views.header && $.addTopLevelView($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        left: "10dp",
        color: "#fff",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "U*Seek",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.lblShowMenu = Ti.UI.createLabel({
        right: "10dp",
        color: "#ddd",
        width: "60dp",
        height: "20dp",
        borderColor: "#ddd",
        borderWidth: 3,
        borderRadius: 5,
        font: {
            fontSize: "10dp"
        },
        backgroundPaddingLeft: 10,
        backgroundPaddingRight: 10,
        backgroundPaddingTop: 5,
        backgroundPaddingBottom: 5,
        text: "Menu",
        id: "lblShowMenu"
    });
    $.__views.header.add($.__views.lblShowMenu);
    showMenu ? $.__views.lblShowMenu.addEventListener("click", showMenu) : __defers["$.__views.lblShowMenu!click!showMenu"] = true;
    $.__views.btnGames = Ti.UI.createView({
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
                color: "#a00",
                offset: 0
            }, {
                color: "#800",
                offset: 1
            } ]
        },
        borderWidth: "4dp",
        borderColor: "#000",
        borderRadius: 10,
        width: "45%",
        height: "30%",
        top: "110dp",
        left: "10dp",
        id: "btnGames"
    });
    $.__views.btnGames && $.addTopLevelView($.__views.btnGames);
    openGamesWindow ? $.__views.btnGames.addEventListener("click", openGamesWindow) : __defers["$.__views.btnGames!click!openGamesWindow"] = true;
    $.__views.lblGames = Ti.UI.createLabel({
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "28dp",
            fontWeight: "bold"
        },
        text: "Games",
        id: "lblGames"
    });
    $.__views.btnGames.add($.__views.lblGames);
    $.__views.btnAccount = Ti.UI.createView({
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
                color: "#a00",
                offset: 0
            }, {
                color: "#800",
                offset: 1
            } ]
        },
        borderWidth: "4dp",
        borderColor: "#000",
        borderRadius: 10,
        width: "45%",
        height: "30%",
        top: "110dp",
        right: "10dp",
        id: "btnAccount"
    });
    $.__views.btnAccount && $.addTopLevelView($.__views.btnAccount);
    openAccountWindow ? $.__views.btnAccount.addEventListener("click", openAccountWindow) : __defers["$.__views.btnAccount!click!openAccountWindow"] = true;
    $.__views.lblAccount = Ti.UI.createLabel({
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "28dp",
            fontWeight: "bold"
        },
        text: "My Account",
        id: "lblAccount"
    });
    $.__views.btnAccount.add($.__views.lblAccount);
    $.__views.btnFeature = Ti.UI.createView({
        borderWidth: "4dp",
        borderColor: "#333",
        borderRadius: 10,
        bottom: "50dp",
        height: "20%",
        id: "btnFeature"
    });
    $.__views.btnFeature && $.addTopLevelView($.__views.btnFeature);
    openFeaturedGame ? $.__views.btnFeature.addEventListener("click", openFeaturedGame) : __defers["$.__views.btnFeature!click!openFeaturedGame"] = true;
    __parentSymbol.addEventListener("open", __alloyId15);
    $.__views.__alloyId8 && $.addTopLevelView($.__views.__alloyId8);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var INDEXES = {
        Home: 0,
        "Sign In/Up": 1,
        "Learn More": 2
    };
    __defers["$.__views.lblShowMenu!click!showMenu"] && $.__views.lblShowMenu.addEventListener("click", showMenu);
    __defers["$.__views.btnGames!click!openGamesWindow"] && $.__views.btnGames.addEventListener("click", openGamesWindow);
    __defers["$.__views.btnAccount!click!openAccountWindow"] && $.__views.btnAccount.addEventListener("click", openAccountWindow);
    __defers["$.__views.btnFeature!click!openFeaturedGame"] && $.__views.btnFeature.addEventListener("click", openFeaturedGame);
    __defers["$.__views.tabbedbar!click!processTabs"] && $.__views.tabbedbar.addEventListener("click", processTabs);
    __defers["$.__views.__alloyId9!click!processTabs"] && $.__views.__alloyId9.addEventListener("click", processTabs);
    __defers["$.__views.__alloyId11!click!processTabs"] && $.__views.__alloyId11.addEventListener("click", processTabs);
    __defers["$.__views.__alloyId13!click!processTabs"] && $.__views.__alloyId13.addEventListener("click", processTabs);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;