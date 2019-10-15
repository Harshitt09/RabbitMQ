var amqp = require('amqplib/callback_api');

exports.topicSenderFunction = (req, res) => {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var exchange = "topic_logs";
            var msg = "Vamos! hala Madrid";
            channel.assertExchange(exchange, 'topic', {
                durable: false
            });
            channel.publish(exchange, "red.green.blue", Buffer.from(msg));
            console.log("[x] Sent %s", msg);
        });
        setTimeout(function () {
            connection.close();
            process.exit(0);
        }, 500);
    });
}