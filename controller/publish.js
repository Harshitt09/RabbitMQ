var amqp = require('amqplib/callback_api');

exports.publishFunction = (req, res) => {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            var exchange = "logs";
            var msg = "hala Madrid";

            channel.assertExchange(exchange, 'fanout', {
                durable: false
            });

            channel.publish(exchange, '', Buffer.from(msg));
            console.log("[x] Sent %s", msg);
        });

        setTimeout(function () {
            connection.close();
            process.exit(0);
        }, 500);
    });
}