const express = require("express");
const router = express.Router();

const sender = require("../controller/send");
const receiver = require("../controller/receiver");
const workReciever = require("../controller/workQueueReciever");
const workSender = require("../controller/workQueueSender");
const directReciever = require("../controller/directReciever");
const directSender = require("../controller/directSender");
const publish = require("../controller/publish");
const subscribe = require("../controller/subscribe");
const topicSender = require("../controller/topicSender");
const topicReciever = require("../controller/topicReciever");
const topicReciever1 = require("../controller/topicReciever1");
const topicReciever2 = require("../controller/topicReciever2");
const remoteClient = require("../controller/remoteClient");
const remoteServer = require("../controller/remoteServer");
router.post("/send", (req, res) => {
    sender.senderFunction(req, res);
});
router.post("/recieve", (req, res) => {
    receiver.recieverFunction(req, res);
});
router.post("/workRecieverFunction", (req, res) => {
    workReciever.workRecieverFunction(req, res);
});
router.post("/workSenderFunction", (req, res) => {
    workSender.workSenderFunction(req, res);
});
router.post("/directRecieverFunction", (req, res) => {
    directReciever.directRecieverFunction(req, res);
});
router.post("/directSenderFunction", (req, res) => {
    directSender.directSenderFunction(req, res);
});
router.post("/publish", (req, res) => {
    publish.publishFunction(req, res);
});
router.post("/subscribe", (req, res) => {
    subscribe.subscribeFunction(req, res);
});
router.post("/topicSender", (req, res) => {
    topicSender.topicSenderFunction(req, res);
});
router.post("/topicReciever", (req, res) => {
    topicReciever.topicRecieverFunction(req, res);
});
router.post("/topicReciever1", (req, res) => {
    topicReciever1.topicReciever1Function(req, res);
});
router.post("/topicReciever2", (req, res) => {
    topicReciever2.topicReciever2Function(req, res);
});
router.post("/remoteClient", (req, res) => {
    remoteClient.remoteClientFunction(req, res);
});
router.post("/remoteServer", (req, res) => {
    remoteServer.remoteServerFunction(req, res);
});

module.exports = router;
