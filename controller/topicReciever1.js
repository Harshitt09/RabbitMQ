var amqp = require('amqplib/callback_api');

// var args = process.argv.slice(2);
// if (args.length == 0) {
//     console.log("Usage: receive_logs");
//     process.exit(1);
// }
exports.topicReciever1Function = (req, res) => {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            var exchange = 'topic_logs';

            channel.assertExchange(exchange, 'topic', {
                durable: false
            });
            channel.assertQueue('', {
                exclusive: true
            }, function (error2, q) {
                if (error2) {
                    throw error2;
                }
                channel.bindQueue(q.queue, exchange, "#.green.#");
                channel.consume(q.queue, function (msg) {
                    console.log("receiver msg:", msg.fields.routingKey, msg.content.toString());
                }, {
                    noAck: true
                });
            });
        });
    });
}