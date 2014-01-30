function Controller() {
    function __alloyId24(e) {
        if (e && e.fromAdapter) return;
        __alloyId24.opts || {};
        var models = whereFunction(__alloyId23);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId20 = models[i];
            __alloyId20.__transform = transformFunction(__alloyId20);
            var __alloyId22 = Alloy.createController("row", {
                $model: __alloyId20,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId22.getViewEx({
                recurse: true
            }));
        }
        $.__views.tblGames.setData(rows);
    }
    function __alloyId40() {
        $.__views.gamesWin.removeEventListener("open", __alloyId40);
        if ($.__views.gamesWin.activity) $.__views.gamesWin.activity.onCreateOptionsMenu = function(e) {
            var __alloyId35 = {
                title: "Current",
                id: "__alloyId34"
            };
            $.__views.__alloyId34 = e.menu.add(_.pick(__alloyId35, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId34.applyProperties(_.omit(__alloyId35, Alloy.Android.menuItemCreateArgs));
            showVideos ? $.__views.__alloyId34.addEventListener("click", showVideos) : __defers["$.__views.__alloyId34!click!showVideos"] = true;
            var __alloyId37 = {
                title: "Upcoming",
                id: "__alloyId36"
            };
            $.__views.__alloyId36 = e.menu.add(_.pick(__alloyId37, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId36.applyProperties(_.omit(__alloyId37, Alloy.Android.menuItemCreateArgs));
            showVideos ? $.__views.__alloyId36.addEventListener("click", showVideos) : __defers["$.__views.__alloyId36!click!showVideos"] = true;
            var __alloyId39 = {
                title: "All",
                id: "__alloyId38"
            };
            $.__views.__alloyId38 = e.menu.add(_.pick(__alloyId39, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId38.applyProperties(_.omit(__alloyId39, Alloy.Android.menuItemCreateArgs));
            showVideos ? $.__views.__alloyId38.addEventListener("click", showVideos) : __defers["$.__views.__alloyId38!click!showVideos"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
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
                color: "#a00",
                offset: 0
            }, {
                color: "#800",
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
    $.__views.tblGames = Ti.UI.createTableView({
        top: "90dp",
        bottom: "46dp",
        id: "tblGames"
    });
    $.__views.gamesWin.add($.__views.tblGames);
    var __alloyId23 = Alloy.Collections["video"] || video;
    __alloyId23.on("fetch destroy change add remove reset", __alloyId24);
    $.__views.gamesWin.addEventListener("open", __alloyId40);
    exports.destroy = function() {
        __alloyId23.off("fetch destroy change add remove reset", __alloyId24);
    };
    _.extend($, $.__views);
    var videos = Alloy.Collections.video;
    var INDEXES = {
        All: 0,
        Active: 1,
        Done: 2
    };
    var whereIndex = INDEXES["All"];
    videos.fetch();
    $.gamesWin.open();
    __defers["$.__views.tabbedbar!click!showGames"] && $.__views.tabbedbar.addEventListener("click", showGames);
    __defers["$.__views.__alloyId34!click!showVideos"] && $.__views.__alloyId34.addEventListener("click", showVideos);
    __defers["$.__views.__alloyId36!click!showVideos"] && $.__views.__alloyId36.addEventListener("click", showVideos);
    __defers["$.__views.__alloyId38!click!showVideos"] && $.__views.__alloyId38.addEventListener("click", showVideos);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;