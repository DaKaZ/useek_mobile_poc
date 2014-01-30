function Controller() {
    function openGamesWindow() {
        Alloy.createController("videos").getView().open();
    }
    function openAccountWindow() {
        alert("TODO: Open Account Window");
    }
    function openFeaturedGame() {
        alert("TODO: Open Featured Game");
    }
    function showMenu() {
        $.trigger("openMenu");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
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
                color: "#33a",
                offset: 0
            }, {
                color: "#000",
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
        borderWidth: 1,
        borderRadius: 5,
        font: {
            fontSize: "10dp"
        },
        textAlign: "center",
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
                color: "#00a",
                offset: 0
            }, {
                color: "#008",
                offset: 1
            } ]
        },
        borderWidth: "4dp",
        borderColor: "#333",
        borderRadius: 10,
        bottom: "5dp",
        width: "90%",
        height: "30%",
        id: "btnFeature"
    });
    $.__views.btnFeature && $.addTopLevelView($.__views.btnFeature);
    openFeaturedGame ? $.__views.btnFeature.addEventListener("click", openFeaturedGame) : __defers["$.__views.btnFeature!click!openFeaturedGame"] = true;
    $.__views.lblFeatures = Ti.UI.createLabel({
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "28dp",
            fontWeight: "bold"
        },
        text: "Featured Game",
        id: "lblFeatures"
    });
    $.__views.btnFeature.add($.__views.lblFeatures);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.UI.FILL;
    __defers["$.__views.lblShowMenu!click!showMenu"] && $.__views.lblShowMenu.addEventListener("click", showMenu);
    __defers["$.__views.btnGames!click!openGamesWindow"] && $.__views.btnGames.addEventListener("click", openGamesWindow);
    __defers["$.__views.btnAccount!click!openAccountWindow"] && $.__views.btnAccount.addEventListener("click", openAccountWindow);
    __defers["$.__views.btnFeature!click!openFeaturedGame"] && $.__views.btnFeature.addEventListener("click", openFeaturedGame);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;