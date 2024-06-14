import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn }) => {
    try {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
        let nombre = '𝑁𝐴𝑇𝑆𝑈';
        let nombre2 = '𝑁𝐴𝑇𝑆𝑈';
        const s = [
            'https://telegra.ph/file/784a05acc195cdb35ca29.jpg',
        ];  

        // تحقق مما إذا كانت الرسالة تحتوي على النص "كسمك"
        if (m.text && m.text.includes('كسمك')) {
            let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2);
            await conn.sendFile(m.chat, stiker, null, { asSticker: true, quoted: m });
        } else {
            // لا تفعل شيئًا إذا لم تحتوي الرسالة على "كسمك"
            return; // يمكنك إضافة رد أو إجراءات إضافية هنا إذا لزم الأمر
        }
        
    } catch (e) {
        console.error(e);
        await conn.reply(m.chat, 'حدث خطأ أثناء محاولة إرسال الملصق.', m);
    }
};

handler.customPrefix = /كسمك/i;
handler.command = new RegExp;
handler.exp = 50;

export default handler;