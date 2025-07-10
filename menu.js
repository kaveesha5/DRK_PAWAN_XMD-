const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const imageUrl = 'https://files.catbox.moe/fkdb81.jpg';

cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "commands"],
    desc: "Get Bot Menu",
    category: "main",
    use: '.menu',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const selectionMessage = `
╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
      *Hi....🇱🇰DRK PAWAN-XMD*  *${pushname}*
      
    *Command List*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

  *╭────────────●●►*
  *│➢❶. DOWNLOAD MENU*
  *│➢❷. SEARCH MENU* 
  *│➢❸. AI MENU*
  *│➢❹. OWNER MENU*
  *│➢❺. GROUP MENU*
  *│➢❻. INFO MENU*
  *│➢❼. CONVERTER MENU*
  *│➢❽. RANDOM MENU*
  *│➢❾. WALLPAPERS MENU*
  *│➢❿. OTHER MENU*
  *╰────────────●●►*

`;

        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // පරිශීලක ප්‍රතිචාර ලබා ගැනීම
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                let responseText;

                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-MENU 📥* *❒⁠⁠⁠⁠* 
*┋* *Coming Soon*
*╰───────────────────❒*

`;
                        break;
                    case '2': // SEARCH MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-MENU 🔍* *❒⁠⁠⁠⁠* 
*┋* *tiktokstalk*
*┋* *tiktoksearch*
*┋* *movie*
*┋* *Coming Soon*
*╰───────────────────❒*

`;
                        break;
                    case '3': // AI MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🧠 AI-MENU 🧠* *❒⁠⁠⁠⁠* 
*┋* *ai*
*┋* *Coming Soon*
*╰───────────────────❒*

`;
                        break;
                    case '4': // OWNER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-MENU 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *update*
*┋* *restart*
*┋* *Coming Soon*
*╰───────────────────❒*

`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👥 GROUP-MENU 👥* *❒⁠⁠⁠⁠* 
*┋* *kickall*
*┋* *Coming Soon*
*╰───────────────────❒*

`;
                        break;
                    case '6': // INFO MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *💾 INFO-MENU 💾* *❒⁠⁠⁠⁠* 
*┋* *alive*
*┋* *menu*
*┋* *ping*
*┋* *Coming Soon*
*╰───────────────────❒*

`;
                        break;
                    case '7': // CONVERTER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔄 CONVERTER-MENU 🔄* *❒⁠⁠⁠⁠* 
*┋* *tts2*
*┋* *tourl*
*┋* *Coming Soon*
*╰───────────────────❒*

`;
                        break;
                    case '8': // WALLPAPERS MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-MENU ⛱️* *❒⁠⁠⁠⁠* 
*┋* *hack*
*┋* *weather*
*┋* *news*
*┋* *hirucheck*
*┋* *Coming Soon*
*╰───────────────────❒*

`;
                        break;
                    case '9': // WALLPAPER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-MENU 🏜️* *❒⁠⁠⁠⁠* 
*┋* *animegirl1*
*┋* *animegirl2*
*┋* *animegirl3*
*┋* *animegirl4*
*┋* *animegirl5*
*┋* *Coming Soon*
*╰───────────────────❒*

`;
                        break;
                    case '10': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-MENU 🌐* *❒⁠⁠⁠⁠* 
*┋* *pair*
*┋* *Coming Soon*
*╰───────────────────❒*

`;
                        break;
                    default:
                        responseText = "*❌ Invalid option. Please enter a valid number (1-10)*";
                }

                // තෝරාගත් මෙනුව WhatsApp chat එකට යවයි.
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*⚠ An error occurred: ${e.message}*`);
    }
});
