var amqp = require('amqplib/callback_api');

exports.directRecieverFunction = (req, res) => {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var exchange = 'direct_logs';
            channel.assertExchange(exchange, 'direct', {
                durable: false
            });
            channel.assertQueue('', {
                exclusive: true
            }, function (error2, q) {
                if (error2) {
                    throw error2;
                }
                channel.bindQueue(q.queue, exchange, "red");
                channel.consume(q.queue, function (msg) {
                    console.log("Reciever msg", msg.fields.routingKey, msg.content.toString());
                }, {
                    noAck: true
                });
            });
        });
    });
}