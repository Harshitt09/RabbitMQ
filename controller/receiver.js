var amqp = require("amqplib/callback_api");
exports.recieverFunction = (req, res) => {
    amqp.connect("amqp://localhost", function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            channel.assertQueue("queue", { durable: false });
            channel.consume("queue", function (msg) {

                console.log("recieved msg:", msg.content.toString());
            },
                {
                    noAck: true
                }
            );
        });
    });
};
