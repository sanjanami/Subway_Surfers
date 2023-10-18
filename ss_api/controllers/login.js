var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.loginCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.loginReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.loginUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    
};
 module.exports.loginDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};