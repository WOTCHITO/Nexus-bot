import fs from "fs" 
 let handler = m => m 
 handler.all = async function (m) { 
 let bot = `*🚀 Hola soy Bot*\nEn que te puedo ayudar?` 
 let vn = [Pepon1, Pepon2 img1].getRandom() 
 let chat = global.db.data.chats[m.chat] 
 if (/^Pepon$/i.test(m.text) && !chat.isBanned) {  
 conn.sendPresenceUpdate('recording', m.chat)     
 conn.sendFile(m.chat, vn, 'bot.jpg', bot, m, true, { type: 'conversation', ptt: true, sendEphemeral: true, quoted: estilo })} 
 return !0 
 } 
 export default handler