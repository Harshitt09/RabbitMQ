var amqp = require('amqplib/callback_api');

exports.workSenderFunction = (req, res) => {
    amqp.connect('amqp://localhost', function (error0, connection) {

        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var queue = "workQueue";
            var msg = "sup tyagi bruhhhh";
            channel.assertQueue(queue, {
                durable: true
            });

            channel.sendToQueue(queue, Buffer.from(msg), {
                persistent: true
            });
            console.log("[x] Sent:", msg);
        });

        setTimeout(function () {
            connection.close();
            process.exit(0)
        }, 500);
    });
}



