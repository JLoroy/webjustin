
exports.calendar = function(req, res){
    var calendar = {}
    calendar.calendar = [
        [
            {number:30,
                secret:"Alice s'amuse souvent à manger des pissenlits, accroupie dans l'herbe haute d'un pré"},
            {number:1,
                secret:""},
            {number:2,
                secret:""},
            {number:3,
                secret:""},
            {number:4,
                secret:""},
            {number:5,
                secret:""},
            {number:6}
        ],
        [
            {number:7,
                secret:""},
            {number:8,
                secret:""},
            {number:9,
                secret:""},
            {number:10,
                secret:""},
            {number:11,
                secret:""},
            {number:12,
                secret:""},
            {number:13}
        ],
        [
            {number:14,
                secret:""},
            {number:15,
                secret:""},
            {number:16,
                secret:""},
            {number:17,
                secret:""},
            {number:18,
                secret:""},
            {number:19,
                secret:""},
            {number:20}
        ],
        [
            {number:21,
                secret:""},
            {number:22,
                secret:""},
            {number:23,
                secret:""},
            {number:24,
                secret:""},
            {number:25,
                secret:""},
            {number:26,
                secret:""},
            {number:27}
        ]
    ];

    calendar.calendar[0][0].secret = "Okay let's start this ! ";
    res.send(calendar);
};