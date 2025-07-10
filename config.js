const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "pzNS0JBQ#Rd3KT2S0Scdp1jLlNX5cRkGVhIdecZeUwIpL9hMi_vo.", // ඔයාගේ session id එක දාන්න
MONGODB: process.env.MONGODB || "Put the mongodb url here.", // ඔයාගේ mongodb url එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/fkdb81.jpg",
BOT_NAME: process.env.BOT_NAME || "MD",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
