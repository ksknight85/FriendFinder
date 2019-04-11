var friends = require("../data/friends");
var difference = 0;

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends).end();
    })


    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var lDiff = 1000;
        var match = 0;
        for (var i = 0; i < friends.length; i++) {
            difference += Math.abs(parseInt(friends[i].q1) - parseInt(newFriend.q1));
            difference += Math.abs(parseInt(friends[i].q2) - parseInt(newFriend.q2));
            difference += Math.abs(parseInt(friends[i].q3) - parseInt(newFriend.q3));
            difference += Math.abs(parseInt(friends[i].q4) - parseInt(newFriend.q4));
            difference += Math.abs(parseInt(friends[i].q5) - parseInt(newFriend.q5));
            if (difference < lDiff) {


                lDiff = difference;
                match = i;
                difference = 0;
            }
            difference = 0;

        }
        friends.push(req.body);

        res.send(friends[match]);

        // res.send(`You: ${newFriend.name}\n\nFriend match: ${friends[match].name}`).end();

    });

    app.get("/results", function (req, res) {
        res.end();
    });

};

