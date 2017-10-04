# Discord-spotify-bot
A selfbot that automatically change your playing status to your current song playing in spotify. Pull request are very welcome.

# Requirement
* Nodejs https://nodejs.org/en/download/current/
  
# Installation
  * Clone this repository ```git clone https://github.com/dekoci/Discord-spotify-bot.git```
  * Change directory after finished clone ```cd Discord-spotify-bot```
  * Install packages by using ```npm install``` Wait until all packages successfully installed.
  * Now it's time to get your token
    * Open discord app, and **if Mac** press <kbd>Command</kbd> + <kbd>Option</kbd> + <kbd>I</kbd>, **if Windows** <kbd>Control</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>, If success **inspect element** will appear (see image below).
    * [<img width="400" alt="User token" src="https://imgur.com/a/Qwfn7">](https://imgur.com/a/Qwfn7)
    * Click **Application** tab, click **Local Storage**, **https://discordapp.com** will shown, and then click on it.
    * List key with value will shown, we just need to take token value, and copy token value.
  * Paste the token to **config.json**
    ```json
    {
      "token": "paste here"
    }
    ```
  * Back to your terminal and type ```node bot.js```, if success it will return ```bot is ready```.
