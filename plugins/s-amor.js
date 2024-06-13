import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn }) => {
    try {
        let nombre = '𝑁𝐴𝑇𝑆𝑈';
        let nombre2 = '𝑁𝐴𝑇𝑆𝑈';
        const s = [
            'https://telegra.ph/file/784a05acc195cdb35ca29.jpg',
        ];  

        let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2);
        await conn.sendFile(m.chat, stiker, null, { asSticker: true, quoted: m });
    } catch (e) {
        console.error(e);
        await conn.reply(m.chat, 'حدث خطأ أثناء محاولة إرسال الملصق.', m);
    }
};

handler.customPrefix = /كسمك/i;
handler.command = new RegExp;
handler.exp = 50;

export default handler;