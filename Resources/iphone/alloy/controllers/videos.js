function Controller() {
    function __alloyId8(e) {
        if (e && e.fromAdapter) return;
        __alloyId8.opts || {};
        var models = whereFunction(__alloyId7);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId4 = models[i];
            __alloyId4.__transform = transformFunction(__alloyId4);
            var __alloyId6 = Alloy.createController("row", {
                $model: __alloyId4,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId6.getViewEx({
                recurse: true
            }));
        }
        $.__views.tblGames.setData(rows);
    }
    function whereFunction(collection) {
        return collection.models;
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        transform.item = "[" + transform.item + "]";
        return transform;
    }
    function showVideos(e) {
        whereIndex = "undefined" != typeof e.index && null !== e.index ? e.index : INDEXES[e.source.title];
        videos.fetch();
    }
    function closeWindow() {
        $.gamesWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "videos";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("video");
    $.__views.gamesWin = Ti.UI.createWindow({
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        id: "gamesWin",
        title: "Games"
    });
    $.__views.gamesWin && $.addTopLevelView($.__views.gamesWin);
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
                color: "#00a",
                offset: 0
            }, {
                color: "#000",
                offset: 1
            } ]
        },
        id: "header"
    });
    $.__views.gamesWin.add($.__views.header);
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
    $.__views.lblCloseWindow = Ti.UI.createLabel({
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
        text: "Home",
        id: "lblCloseWindow",
        top: "10dp"
    });
    $.__views.header.add($.__views.lblCloseWindow);
    closeWindow ? $.__views.lblCloseWindow.addEventListener("click", closeWindow) : __defers["$.__views.lblCloseWindow!click!closeWindow"] = true;
    $.__views.tblGames = Ti.UI.createTableView({
        top: "90dp",
        bottom: "46dp",
        id: "tblGames"
    });
    $.__views.gamesWin.add($.__views.tblGames);
    var __alloyId7 = Alloy.Collections["video"] || video;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    $.__views.footer = Ti.UI.createView({
        bottom: 0,
        height: "46dp",
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
                color: "#00a",
                offset: 0
            }, {
                color: "#000",
                offset: 1
            } ]
        },
        id: "footer"
    });
    $.__views.gamesWin.add($.__views.footer);
    var __alloyId10 = [];
    var __alloyId14 = {
        title: "Current",
        ns: "Alloy.Abstract"
    };
    __alloyId10.push(__alloyId14);
    var __alloyId15 = {
        title: "Upcoming",
        ns: "Alloy.Abstract"
    };
    __alloyId10.push(__alloyId15);
    var __alloyId16 = {
        title: "All",
        ns: "Alloy.Abstract"
    };
    __alloyId10.push(__alloyId16);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        backgroundColor: "#fff",
        index: 0,
        height: 40,
        left: 20,
        right: 20,
        labels: __alloyId10,
        id: "tabbedbar"
    });
    $.__views.footer.add($.__views.tabbedbar);
    showVideos ? $.__views.tabbedbar.addEventListener("click", showVideos) : __defers["$.__views.tabbedbar!click!showVideos"] = true;
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    var videos = Alloy.Collections.video;
    var INDEXES = {
        Current: 0,
        Upcoming: 1,
        All: 2
    };
    var whereIndex = INDEXES["All"];
    videos.fetch();
    $.gamesWin.open();
    __defers["$.__views.lblCloseWindow!click!closeWindow"] && $.__views.lblCloseWindow.addEventListener("click", closeWindow);
    __defers["$.__views.tabbedbar!click!showVideos"] && $.__views.tabbedbar.addEventListener("click", showVideos);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;