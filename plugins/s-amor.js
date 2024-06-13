import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn }) => {
    let nombre = '𝑁𝐴𝑇𝑆𝑈';
    let nombre2 = '𝑁𝐴𝑇𝑆𝑈';
    const s = [
        'https://telegra.ph/file/784a05acc195cdb35ca29.jpg',
    ];  

    let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2);
    await conn.sendFile(m.chat, stiker, null, { asSticker: true, quoted: m });
};

handler.customPrefix = /كسمك/i;
handler.command = new RegExp;
handler.exp = 50;

export default handler;