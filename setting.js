const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")

cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "settings the bot",
    category: "owner",
    react: "⚙",
    filename: __filename


},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    try {
        let desc = `* 𝘿𝙍𝙆 𝙋𝘼𝙒𝘼𝙉-𝙓𝙈𝘿_𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝙎_


╭══════════════════════○
┣━ *𝗪𝗢𝗥𝗞 𝗠𝗢𝗗𝗘 ⚡*
> *❶.❶  Public Work*
> *❷.❷  Private Work*
> *❶.❸  Group Only*
> *❶.❹  Inbox Only*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗩𝗢𝗜𝗖𝗘 ⚡*
> *❷.❶ Auto Voice On*
> *❷.❷ Auto Voice Off*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗦𝗘𝗘𝗡 ⚡*
> *❸.❶ Auto Read Status On*
> *❸.❷ Auto Read Status Off*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 ⚡*
> *❹.❶ Auto sticker On*
> *❹.❷ Auto sticker Off*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗥𝗘𝗣𝗟𝗬 ⚡*
> *❺.❶ Auto reply On*
> *❺.❷ Auto reply Off*
╭══════════════════════○
┣━ *𝗕𝗢𝗧 𝗢𝗡𝗟𝗜𝗡𝗘 𝗢𝗙𝗙𝗟𝗜𝗡𝗘 ⚡*
> *❻.❶ Online On*
> *❻.❷ Online Off*
╭══════════════════════○
┣━ *𝗠𝗦𝗚 𝗥𝗘𝗔𝗗 ⚡*
> *❼.❶ Read Msg On*
> *❼.❷ Read Msg Off*
╭══════════════════════○
┣━ *𝗠𝗦𝗚 𝗥𝗘𝗔𝗖𝗧 ⚡*
> *❽.❶ Auto React On*
> *❽.❷ Auto React Off*
╭══════════════════════○
┣━ *𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 ⚡*
> *❾.❶ Anti Link On*
> *❾.❷ Anti Link Off*
> *❾.❸ Anti Link Remove*
╰═══════════════════════○


* *🔢 Reply Below This Number Change To Bot Change Setting*

> *🄿🄾🅆🄴🅁🄳 🅱🆈 DRK PAWAN-XMD*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://files.catbox.moe/fkdb81.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".update MODE:public" );
                        break;
                    case '1.2':               
                        reply(".update MODE:private");
                        break;
                    case '1.3':               
                          reply(".update MODE:group");
                      break;
                    case '1.4':     
                        reply(".update MODE:inbox");
                      break;
                    case '2.1':     
                        reply(".update AUTO_VOICE:true");
                        break;
                    case '2.2':     
                        reply(".update AUTO_VOICE:false");
                    break;
                    case '3.1':    
                        reply(".update AUTO_READ_STATUS:true");
                    break;
                    case '3.2':    
                        reply(".update AUTO_READ_STATUS:false");
                    break;                    
                    case '4.1':    
                        reply(".update AUTO_STICKER:true");
                    break;
                    case '4.2':    
                        reply(".update AUTO_STICKER:false");
                    break;                                        
                    case '5.1':    
                        reply(".update AUTO_REPLY:true");
                    break;
                    case '5.2':    
                        reply(".update AUTO_REPLY:false");
                    break;                        
                    case '6.1':    
                        reply(".update ALLWAYS_OFFLINE:true");
                    break; 
                    case '6.2':    
                        reply(".update ALLWAYS_OFFLINE:false");
                    break;                       
                    case '7.1':    
                        reply(".update READ_MESSAGE:true");
                    break;
                    case '7.2':    
                        reply(".update READ_MESSAGE:false");
                    break;
                    case '8.1':    
                        reply(".update config.AUTO_REACT:true");
                    break;
                    case '8.2':    
                        reply(".update config.AUTO_REACT:false");
                    break;
                    case '9.1':    
                        reply(".update ANTI_LINK:true");
                        reply(".update ANTI_LINKK:false");
                    break;
                    case '9.2':    
                        reply(".update ANTI_LINKK:true");
                        reply(".update ANTI_LINK:false");
                    break;
                    case '9.3':    
                        reply(".update ANTI_LINK:false");
                        reply(".update ANTI_LINKK:false");
                    break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
