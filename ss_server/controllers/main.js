/* GET homepage */
module.exports.index = function (req, res) {
    res.render('index', {
        title:'aimlb'
    });
}