exports.definition = {
    config: {
        URL: "http://10.255.255.1:3000/videos.json",
        debug: 1,
        adapter: {
            type: "restapi",
            collection_name: "MyVideos",
            idAttribute: "id"
        },
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml"
        },
        parentNode: "videos"
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("MyVideos", exports.definition, []);

collection = Alloy.C("MyVideos", exports.definition, model);

exports.Model = model;

exports.Collection = collection;