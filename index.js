const axios = require("axios")
const urls = ["https://lilybot-music.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 80 * 1000);
