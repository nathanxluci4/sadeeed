/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XD
Support      : wa.me/263714757857
*/



const config = require('../../settings')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
*╭───────────────⪼*
*╏🚀* *ʙᴏᴛ ɴᴀᴍᴇ* : *${config.BOT_NAME}*
*╏🕵* *xᴅ ᴜsᴇʀ* : *${pushname}*
*╏🕒* *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}
*╏🤖* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*╏🔑* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*╏👤* *ᴄʀᴇᴀᴛᴏʀ* : *NATHAN*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*
       sadith 
*╭──┄┄┄┄┄┄┄┄┄┄────*
*┋☞ ➊ • ᴏᴡɴᴇʀ*
*┋☞ ➋ • ᴄᴏɴᴠᴇʀᴛ*
*┋☞ ➌ • ᴀɪ*
*┋☞ ➍ • sᴇᴀʀᴄʜ*
*┋☞ ➎ • ᴅᴏᴡɴʟᴏᴀᴅ*
*┋☞ ➏ • ᴍᴀɪɴ*
*┋☞ ➐ • ɢʀᴏᴜᴘ*
*┋☞ ➑ • ғᴜɴ*
*┋☞ ➒ • ᴏᴛʜᴇʀ*
*╿☞ ➓ • ᴛᴏᴏʟs*
*╰━━┉┉┉━━┉┉━┉┅┅┅┅┅⪼*⁠⁠

*╰┈➤ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴇʟᴇᴄᴛ*

> ${config.DESCRIPTION}`;

        const vv = await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek });
        
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`〘 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 〙

╭───────────────⪼
┋⚉ *.ᴏᴡɴᴇʀ*
┋⚉ *.ʀᴇᴘᴏ*
┋⚉ *ʙᴏᴛ*
┋⚉ *.ꜱʏꜱᴛᴇᴍ*
┋⚉ *.ᴠᴇrsɪᴏɴ*
┋⚉ *.ʙʟᴏᴄᴋ*
┋⚉ *.ᴜɴʙʟᴏᴄᴋ*
┋⚉ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋⚉ *.sᴇᴛᴘᴘ*
┋⚉ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋⚉ *.ᴘɪɴɢ*
┋⚉ *.ᴘɪɴɢ2*
┋⚉ *.ᴊɪᴅ*
┋⚉ *.ɢᴊɪᴅ*
┋⚉ *.ᴊɪᴅ1*
┋⚉ *.ᴊɪᴅ2*
┋⚉ *.ʀᴇꜱᴛᴀʀᴛ*
┋⚉ *.ᴘᴀɪʀ 263xxx*
┋⚉ *.ᴘᴀɪʀ2 263xxx*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *sadith ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴡɴᴇʀ: 19*

> *nathan*`);
                        break;
                    case '2':               
                        repl (`𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨

╭─────────────⪼
┋ ☻ *ᴄᴏɴᴠᴇʀᴛ* 
┋ ☻ *ss* 
┋ ☻ *ᴛʀᴛ*
┋ ☻ *ᴛᴛs*
┋ ☻ *ᴠᴠ*
┋ ☻ *ғᴀɴᴄʏ*
┋ ☻ *sᴛɪᴄᴋᴇʀ*
┋ ☻ *ʟᴏɢᴏ*
┋ ☻ *ʙɪɴᴀʀʏ*
┋ ☻ *ᴅᴇʙɪɴᴀʀʏ*
┋ ☻ *ᴇɴᴄᴏᴅᴇ*
┋ ☻ *ᴅᴇᴄᴏᴅᴇ*
┋ ☻ *ᴜʀʟᴇɴᴄᴏᴅᴇ*
┋ ☻ *ᴜʀʟᴅᴇᴄᴏᴅᴇ*
┋ ☻ *ᴛɪɴʏᴜʀʟ*
┋ ☻ *ᴜʀʟ / ᴛᴏᴜʀʟ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 16*

> *nathan*`);
                        break;
                    case '3':               
                        reply(`〘 𝗔𝗜 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ *ᴀɪ* 
┋ ☻ *ɢᴘᴛ*
┋ ☻ *ᴍᴀʟᴠɪɴ*
┋ ☻ *ɢᴇᴍɪɴɪ*
┋ ☻ *ɢᴘᴛ3*
┋ ☻ *ᴍɪsᴛʀᴀᴀɪ*
┋ ☻ *ʟʟᴀᴍᴀ3*
┋ ☻ *ɢᴘᴛ4o
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɪ: 8*

> *nathan*`);
                        break;
                    case '4':               
                        reply(`〘 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 〙

╭──────── ────⪼
┋ ◉ *.ᴘʟᴀʏ* 
┋ ◉ *sᴏɴɢ*
┋ ◉ *.ᴠɪᴅᴇᴏ* 
┋ ◉ *.ʏᴛ  <ᴛᴇxᴛ>*
┋ ◉ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
┋ ◉ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┋ ◉ *.ɪᴍɢ <ᴛᴇxᴛ>*
┋ ◉ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
┋ ◉ *ʟʏʀɪᴄs*
┋ ◉ *ɢᴏᴏɢʟᴇ*
┋ ◉ *ɴᴇᴡs*
┋ ◉ *ᴡɪᴋɪ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴇᴀʀᴄʜ: 10*

> *nathan*`);
                        break;
                    case '5':               
                        reply(`〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ *ᴀᴘᴋ* 
┋ ☻ *ᴛᴡɪᴛᴛᴇʀ* 
┋ ☻ *ɢᴅʀɪᴠᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇᴘʀᴏ*
┋ ☻ *sᴘᴏᴛɪғʏ*
┋ ☻ *ғʙ*
┋ ☻ *ɪɢ* 
┋ ☻ *ᴍᴏᴠɪᴇ*
┋ ☻ *sᴏɴɢ* 
┋ ☻ *ᴠɪᴅᴇᴏ* 
┋ ☻ *ᴠɪᴅᴇᴏ2*
┋ ☻ *ᴠɪᴅᴇᴏ3*
┋ ☻ *ᴠɪᴅᴇᴏᴛ*
┋ ☻ *ᴠɪᴅᴘʀᴏ*
┋ ☻ *ᴘʟᴀʏ*
┋ ☻ *ᴘʟᴀʏ2*
┋ ☻ *ᴘʟᴀʏ3*
┋ ☻ *ᴘʟᴀʏᴛ*
┋ ☻ *ᴘʟᴀʏᴘʀᴏ*
┋ ☻ *ᴘʟᴀʏᴜʟᴛʀᴀ*
┋ ☻ *ʏᴛ*
┋ ☻ *ʏᴛᴍᴘ3*
┋ ☻ *ʏᴛᴍᴘ4*
┋ ☻ *ᴛɪᴋᴛᴏᴋ* 
┋ ☻ *ᴛɪᴋᴛᴏᴋ2*
┋ ☻ *ɪᴍɢ* 
┋ ☻ *ʙᴀɪsᴄᴏᴘᴇ*
┋ ☻ *sɪɴʜᴀʟᴀsᴜʙ*
┋ ☻ *ɢᴇɴɪsɪsɪʟᴀ*
┋ ☻ *xɴxxᴅᴏᴡɴ*
┋ ☻ *xᴠᴅʟ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴅᴏᴡɴʟᴏᴀᴅ: 17*

> *nathan*`);
                        break;
                    case '6':               
                        reply(`〘 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 〙

╭─────────────
┋ ◕ *ᴀʟɪᴠᴇ* 
┋ ◕ *ʙᴏᴛ*
┋ ◕ *ᴍᴇɴᴜ* 
┋ ◕ *ᴀʟʟᴍᴇɴᴜ* 
┋ ◉ *ʟɪsᴛ*
┋ ◕ *sᴜᴘᴘᴏʀᴛ* 
┋ ◕ *sʏsᴛᴇᴍ* 
┋ ◕ *ᴘɪɴɢ* 
┋ ◕ *ʀᴜɴᴛɪᴍᴇ* 
┋ ◕ *ᴜᴘᴅᴀᴛᴇ*
┋ ◕ *ɪɴғᴏ*
┋ ◕ *ᴀʙᴏᴜᴛ*
┋ ◕ *ᴛɪɴʏᴜʀʟ*
┋ ◕ *ᴏʙғ/ᴏʙғᴜsᴄᴀᴛᴇ*
┋ ◉ *ϙʀᴄᴏᴅᴇ*
┋ ◕ *ʙᴀsᴇ64*
┋ ◕ *ᴅᴇʙᴀsᴇ64*
┋ ◕ *ғᴇᴛᴄʜ / ᴀᴘɪ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴍᴀɪɴ: 18*

> *nathan*`);
                        break;
                    case '7':               
                        reply(`〘 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨〙

╭────────────⪼
┋ ☛ *ᴘʀᴏᴍᴏᴛᴇ* 
┋ ☛ *ᴅᴇᴍᴏᴛᴇ* 
┋ ☛ *ᴅᴇʟᴇᴛᴇ*
┋ ☛ *ᴋɪᴄᴋ* 
┋ ☛ *ᴋɪᴄᴋᴀʟʟ*
┋ ☛ *ᴀᴅᴅ* 
┋ ☛ *ᴀᴅᴍɪɴs* 
┋ ☛ *ɢᴇᴛᴘɪᴄ* 
┋ ☛ *sᴇᴛᴡᴇʟᴄᴏᴍᴇ* 
┋ ☛ *sᴇᴛɢᴏᴏᴅʙʏᴇ* 
┋ ☛ *ᴘᴏʟʟ*
┋ ☛ *ɢɴᴀᴍᴇ* 
┋ ☛ *ᴛᴀɢᴀʟʟ* 
┋ ☛ *ᴛᴀɢᴀᴅᴍɪɴ* 
┋ ☛ *ᴏᴘᴇɴᴛɪᴍᴇ/ᴄʟᴏsᴇᴛɪᴍᴇ* 
┋ ☛ *ɢɪɴғᴏ* 
┋ ☛ *ɢʟɪɴᴋ*
┋ ☛ *ᴜɴʟᴏᴄᴋ*
┋ ☛ *ʟᴏᴄᴋ*
┋ ☛ *ᴍᴜᴛᴇ*
┋ ☛ *ᴜɴᴍᴜᴛᴇ*
┋ ☛ *ɢᴅᴇsᴄ*
┋ ☛ *sᴇᴛsᴜʙᴊᴇᴄᴛ*
┋ ☛ *ɪɴᴠɪᴛᴇ*
┋ ☛ *ᴊᴏɪɴ*join
┋ ☛ *ʀᴇᴠᴏᴋᴇ*
┋ ☛ *ᴜᴘᴅᴀᴛᴇɢᴅsᴇᴄ*
┋ ☛ *ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
┋ ☛ *ᴅᴊ*
┋ ☛ *ᴜɴʟᴏᴄᴋɢs*
┋ ☛ *ʟᴏᴄᴋɢs*
┋ ☛ *sᴇɴᴅᴅᴍ*
┋ ☛ *ᴅɪsᴀᴘᴘᴇᴀʀ*
┋ ☛ *ᴀʟʟʀᴇϙ*
┋ ☛ *ᴊᴏɪɴʀᴇϙᴜᴇsᴛs*
┋ ☛ *ʜɪᴅᴇᴛᴀɢ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ɢʀᴏᴜᴘ: 36*

> *nathan*`);
                       break;
                    case '8':               
                        reply(`〘 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ◉ *ғᴀᴄᴛ* 
┋ ◉ *ʜᴀᴄᴋ*  
┋ ◉ *ʟᴏʟɪ* 
┋ ◉ *ᴡᴀɪғᴜ*
┋ ◉ *ɴᴇᴋᴏ*
┋ ◉ *ᴍᴇɢᴜᴍɪɴ*
┋ ◉ *ᴀᴡᴏᴏ*
┋ ◉ *ᴅᴏɢ*
┋ ◉ *ʀᴡ/ᴡᴀʟʟᴘᴀᴘᴇʀ*
┋ ◉ *ʙɪʙʟᴇ*
┋ ◉ *sʜɪᴘ*
┋ ◉ *ɪɴsᴜʟᴛ*
┋ ◉ *ғᴀɴᴄʏ*
┋ ◉ *ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
┋ ◉ *ᴄʜᴀʀᴀᴄᴛᴇʀ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇs*
┋ ◉ *ʀᴄᴏʟᴏʀ*
┋ ◉ *ʀᴏʟʟ*
┋ ◉ *ᴘɪᴄᴋ*
┋ ◉ *ᴄᴏɪɴғʟɪᴘ*
┋ ◉ *ғʟɪᴘ*
┋ ◉ *ᴅᴀᴛᴇ*
┋ ◉ *ᴛɪᴍᴇɴᴏᴡ*
┋ ◉ *ᴄᴏᴜɴᴛ*
┋ ◉ *ᴄᴏᴜɴᴛx*
┋ ◉ *sʜᴀᴘᴀʀ*
┋ ◉ *ᴄᴀʟᴄᴜʟᴀᴛᴇ*
┋ ◉ *ʀᴀᴛᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─• ─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ғᴜɴ: 29*

> *nathan*`);
                       break;
                    case '9':               
                        repl (`〘 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 〙

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈⪼
┋ ☻ *.ᴍᴏᴠɪᴇ*
┋ ☻ *.ɢꜱᴛᴀʟᴋ*
┋ ☻ *.ɢᴘᴀꜱꜱ*
┋ ☻ *.ɢɪᴛᴄʟᴏɴᴇ*
┋ ☻ *.ʀᴇᴘᴏ*
┋ ☻ *.ᴅᴇғɪɴᴇ*
┋ ☻ *.ᴜʀʟ*
┋ ☻ *.sᴀᴠᴇ*
┋ ☻ *.ϙᴜᴏᴛᴇ*
┋ ☻ *.sᴛᴀᴛᴜs*
┋ ☻ *.sʀᴇᴘᴏ*
┋ ☻ *.ɴᴘᴍ*
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷

⭓*ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 12*

> *nathan*`);
                        break;
                    case '10':               
                        reply(`〘 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ☻ *.ᴋɪss*
┋ ☻ *.ʜᴀɴᴅ*
┋ ☻ *.ʜᴀᴘᴘʏ*
┋ ☻ *.ʜᴇᴀʀᴛ*
┋ ☻ *.ᴀɴɢᴇʀ*
┋ ☻ *.sᴀᴅ*
┋ ☻ *.sʜʏ*
┋ ☻ *.ᴍᴏᴏɴ*
┋ ☻ *.ᴄᴏɴғᴜsᴇᴅ*
┋ ☻ *.ɴɪᴋᴀʟ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

⭓*ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ 10*

> *nathan*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option❗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
