var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.registerCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.registerReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.registerUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
 module.exports.registerDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};