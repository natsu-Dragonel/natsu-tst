let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `احتين علي احتك 🐦🥹`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^الحمدلله$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `ادام الله حمدك`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^منور$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `بنوري طبعا`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^يورتشي|يوريتشي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*صديق زيريف الروح بالروح🫶❤*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `ننورت ارجع تاني بقا`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^اخرس$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `انت مالك اخرس ولا لا`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^حرامي|سارق$/i.test(m.text) ) { //sem prefixo 
 
  
 } 
  
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `عارفين ف اسكت`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^السلام عليكم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `وعليكم السلام`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^تصبح علي خير|تصبحوا علي خير/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `وانت من اهل الخير 🫶❤`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }  
  
 if (/^احبك ناتسو$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `انا اكتر ✨🥹💜`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^🐦$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `😑انظر بعيد`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/باي^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `باي`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/هلا^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `هلا`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^كيفك|عامل ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `الحمد لله و انت عامل اي`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
 return !0 } 
 export default handler