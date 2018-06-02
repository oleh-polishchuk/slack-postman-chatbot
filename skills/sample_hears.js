const fs = require('fs');
/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

module.exports = function(controller) {

    controller.hears(['^.*hospital.*$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, fs.readFileSync(__dirname + '/../emails/hospital.txt', 'utf8'))
    });

    controller.hears(['^.*vocation.*$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, fs.readFileSync(__dirname + '/../emails/vocation.txt', 'utf8'))
    });

    controller.hears(['^.*thanks.*$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, 'You are welcome! :grinning:')
    });

    controller.hears(['^.*$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, fs.readFileSync(__dirname + '/../emails/help.txt', 'utf8'))
    });

};
