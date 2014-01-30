exports.definition = {
    config: {
        URL: "http://10.255.255.1:3000/videos.json",
        debug: 1,
        columns: {
            allow_playback_control: "BOOLEAN",
            color: "TEXT",
            description: "TEXT",
            earnable_coupons: "INTEGER",
            earnable_points: "INTEGER",
            height: "INTEGER",
            id: "INTEGER NOT NULL",
            length: "INTEGER",
            prize_id: "INTEGER",
            protocol: "TEXT",
            provider: "TEXT",
            share_offer_id: "INTEGER",
            share_points: "INTEGER",
            sponsor_id: "INTEGER",
            thumbnail_content_type: "TEXT",
            thumbnail_file_name: "TEXT",
            thumbnail_file_size: "INTEGER",
            thumbnail_updated_at: "TEXT",
            title: "TEXT",
            url: "TEXT",
            width: "INTEGER",
            thumbnail_url: "TEXT",
            pseudo_streaming_url: "TEXT"
        },
        adapter: {
            type: "sqlrest",
            collection_name: "videos",
            idAttribute: "id"
        },
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml"
        },
        parentNode: function(data) {
            var entries = [];
            for (var i in data.videos) entries.push(data.videos[i].video);
            return entries;
        }
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

model = Alloy.M("video", exports.definition, []);

collection = Alloy.C("video", exports.definition, model);

exports.Model = model;

exports.Collection = collection;