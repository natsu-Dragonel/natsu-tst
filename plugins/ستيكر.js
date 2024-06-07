//متبخلش عليا بتفاعل قلب ♥️ 
//لعيونكم يغوالي يوصل 20 برضو عشان اكمل نشر اكواد
//Itachi XVI
//Itachi XVI
//Itachi XVI
\\استدعاء مكتبه الاستيكر
import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
    //صوره الاستيكر
    const xvi = [
        "https://telegra.ph/file/8b86c631e27a76910ea1c.jpg",
        "https://telegra.ph/file/8b86c631e27a76910ea1c.jpg",
        "https://telegra.ph/file/8b86c631e27a76910ea1c.jpg",
        "https://telegra.ph/file/8b86c631e27a76910ea1c.jpg",
        "https://telegra.ph/file/8b86c631e27a76910ea1c.jpg"
    ];  
    //اختيار صوره عشوائي لتحويلها استيكر
    let stiker = await sticker(null, xvi[Math.floor(Math.random() * xvi.length)])
    if (stiker) {
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    }
}
//الأمر يعمل عندما يتم ذكر الرقم @201554824764
handler.customPrefix = /@201554824764/i 
handler.command = new RegExp
export default handler
//لو سرقتو ونشرتو فقناتك وغيرت المصدر هتزعل
//بصيغه رد تلقائي استيكر.js
