var amqp = require('amqplib/callback_api');

exports.directSenderFunction = (req, res) => {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var exchange = 'direct_logs';
            var msg = "hello world!";
            channel.assertExchange(exchange, 'direct', {
                durable: false
            });
            channel.publish(exchange, "red", Buffer.from(msg));
            console.log(" [x] Sent %s: '%s'", "red", msg);
        });

        setTimeout(function () {
            connection.close();
            process.exit(0)
        }, 500);
    });
}