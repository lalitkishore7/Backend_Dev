function homePingController(req, res) {
    // collect request and send to the service layer
    // and then process it and send response
    return res.json({ msg: "OK" });
}

module.exports = homePingController;