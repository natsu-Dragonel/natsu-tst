let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 50   
if (/تستتتت$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/ناتسو.mp3'
this.sendPresenceUpdate('recording', m.chat)   
  this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


      
if (/^تستتت$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/ناتسو.mp3'
this.sendPresenceUpdate('recording', m.chat)   
  this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
