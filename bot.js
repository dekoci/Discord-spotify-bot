const Discord = require('discord.js');
const bot = new Discord.Client();

var SpotifyWebHelper = require('spotify-web-helper');
var helper = SpotifyWebHelper();
var config = require('./config.json');

helper.player.on('error', err => {
    if (error.message.match(/No user logged in/)) {
        console.log('No user logged in');
        // also fires when Spotify client quits
    } else {
        console.log('Cannot start spotify or spotify is not installed');
        // other errors: /Cannot start Spotify/ and /Spotify is not installed/
    }
});

let curr_playing = '';

bot.login(config.token);

bot.on('ready', function() {
    console.log('bot is ready');

    helper.player.on('ready', () => {
        helper.player.on('play', () => {
            bot.user.setPresence({
                game: {
                    name: curr_playing,
                    type: 0
                }
            });
        });
        helper.player.on('pause', () => {
            bot.user.setPresence({
                game: {
                    name: "Paused",
                    type: 0
                }
            });
        });
        helper.player.on('track-will-change', track => {
            if(typeof track !== 'undefined') {
                var artist = track.artist_resource.name,
                    song = track.track_resource.name;

                curr_playing = "♪ "+artist+' - '+song;
                console.log(curr_playing);

                bot.user.setPresence({
                    game: {
                        name: curr_playing,
                        type: 0
                    }
                });
            }
        });
    });
});
