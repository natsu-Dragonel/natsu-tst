let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*⌘──〘 ♥📃القوائم📃♥ 〙── ⌘*'
            },
            body: {
              text: '*⌘──〘 ♥يرجى عدم الاسبام♥ 〙── ⌘*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط هنا',
                    sections: [
                      {
                        title: 'اوامر البوت',
                        highlight_label: 'اختار الامر',
                        rows: [
                          {
                            header: 'للتسجيل في البوت',
                            title: '.تسجيل',
                            description: '',
                            id: '.تسجيل'
                          },
                          {
                            header: 'لي الغاء التسجيل في البوت',
                            title: '.الغاء-التسجيل',
                            description: '',
                            id: '.الغاء-تسجيل'
                          },
                          {
                            header: 'للتعدين',
                            title: '.تعدين',
                            description: '',
                            id: '.تعدين'
                          },
                          {
                            header: 'لمعرفه لفلك',
                            title: '.لفل',
                            description: '',
                            id: '.لفل'
                          },
                          {
                            header: 'لتجميع الراتب الشهري',
                            title: '.الشهري',
                            description: '',
                            id: '.الشهري'
                          },
                          {
                            header: 'لتجميع الراتب اليومي',
                            title: '.يومي',
                            description: '',
                            id: '.يومي'
                          },
                          {
                            header: 'لمعرفه صحتك',
                            title: '.صحتي',
                            description: '',
                            id: '.صحتي'
                          },
                          {
                            header: 'لمعرفه المصنفين المصنفين في البوت',
                            title: '.تصنيف',
                            description: '',
                            id: '.تصنيف'
                          },
                          {
                            header: 'لطرد احد الاعضاء',
                            title: '.طرد',
                            description: '',
                            id: '.طرد'
                          },
                          {
                            header: 'لفتح الجروب',
                            title: '.فتح الجروب',
                            description: '',
                            id: '.فتح الجروب'
                          },
                          {
                            header: 'لقفل الجروب',
                            title: '.قفل الجروب',
                            description: '',
                            id: '.قفل الجروب'
                          },
                          {
                            header: 'لمعرفه المشرفين الموجودين',
                            title: '.المشرفين',
                            description: '',
                            id: '.المشرفين'
                          },
                          {
                            header: 'لتحذير شخص',
                            title: '.تحذير',
                            description: '',
                            id: '.تحذير'
                          },
                          {
                            header: 'لمنشن الجروب',
                            title: '.منشن',
                            description: '',
                            id: '.منشن'
                          },
                          {
                            header: 'لحذف تحذير شخص',
                            title: '.حذف_تحذير',
                            description: '',
                            id: '.حذف_تحذير'
                          },
                          {
                            header: 'لارسال لينك الجروب',
                            title: '.لينك',
                            description: '',
                            id: '.لينك'
                          },
                          {
                            header: 'للعبه تاج',
                            title: '.تاج',
                            description: '',
                            id:'.تاج'
                          },
                          {
                            header: 'لمعرفه الطقس',
                            title: '.الطقس',
                            description: '',
                            id: '.الطقس'
                          },
                          {
                            header: 'لمعلومات الجروب',
                            title: '.الجروب',
                            description: '',
                            id: '.الجروب'
                          },
                          {
                            header: 'لجلب حلفيه عشواءيه',
                            title: '.خلفيه',
                            description: '',
                            id: '.خلفيه'
                          },
                          {
                            header: 'لفيديو ايدت عشواءي',
                            title: '.ايدت',
                            description: '',
                            id: '.ايدت'
                          },
                          {
                            header: 'للتحميل من جوجل كروم',
                            title: '.تحميل',
                            description: '',
                            id: '.تحميل'
                          },
                          {
                            header: 'لجلب صوره من جوجل',
                            title: '.صورة',
                            description: '',
                            id: '.صورة'
                          },
                          {
                            header: 'للبحث في يوتيوب',
                            title: '.بحث',
                            description: '',
                            id: '.بحث'
                          },
                          {
                            header: 'لتشغيل اغنيه او فيديو mp3',
                            title: '.شغل',
                            description: '',
                            id: '.شغل'
                          },
                          {
                            header: 'لرسم بالذكاء الاصطناعي',
                            title: '.ارسم',
                            description: '',
                            id: '.ارسم'
                          },
                          {
                            header: 'للتحميل من فيسبوك',
                            title: '.فيسبوك',
                            description: '',
                            id: '.فيسبوك'
                          },
                          {
                            header: 'للتحميل من يوتيوب',
                            title: '.يوتيوب',
                            description: '',
                            id: '.يوتيوب'
                          },
                          {
                            header: 'للتنزيل من انتسجرام',
                            title: '.انستا',
                            description: '',
                            id: '.انستا'
                          },
                          {
                            header: 'للعبه عين',
                            title: '.عين',
                            description: '',
                            id: '.عين'
                          },
                          {
                            header: 'للعبه احزر',
                            title: '.احزر',
                            description: '',
                            id: '.احزر'
                          },
                          {
                            header: 'للعبه فعاليه',
                            title: '.فعاليه',
                            description: '',
                            id: '.فعاليه'
                          },
                          {
                            header: 'لوضع تعليق في تويتر',
                            title: '.تويت',
                            description: '',
                            id: '.تويت'
                          },
                          {
                            header: 'لتحويل صوره بروفايل شخص لشاذ',
                            title: '.شاذ',
                            description: '',
                            id: '.شاذ'
                          },
                          {
                            header: 'لوضع تعليق في اليوتيوب',
                            title: '.تعليق',
                            description: '',
                            id: '.تعليق'
                          },
                          {
                            header: 'للعبه لو خيروك',
                            title: '.لو',
                            description: '',
                            id: '.لو'
                          },
                          {
                            header: 'للعبه علم',
                            title: '.علم',
                            description: '',
                            id: '.علم'
                          },
                          {
                            header: 'للعبه فكك',
                            title: '.فكك',
                            description: '',
                            id: '.فكك'
                          },
                          {
                            header: 'للعبه X/O',
                            title: '.اكس',
                            description: '',
                            id: '.اكس'
                          },
                          {
                            header: 'لعبه حجر ورق مقص',
                            title: '.تحدي',
                            description: '',
                            id: '.تحدي'
                          },
                          {
                            header: 'للعبه كت',
                            title: '.كت',
                            description: '',
                            id: '.كت'
                          },
                          {
                            header: 'للعبه اموجي',
                            title: '.اموجي',
                            description: '',
                            id: '.اموجي'
                          },
                          {
                            header: 'للاسئله الدينيه',
                            title: '.دين',
                            description: '',
                            id: '.دين'
                          },
                          {
                            header: 'للاسئله الحسابيه',
                            title: '.حساب',
                            description: '',
                            id: '.حساب'
                          },
                          {
                            header: 'للعبه هل',
                            title: '.هل',
                            description: '',
                            id: '.هل'
                          },
                          {
                            header: 'لجلب نرد عشواءي',
                            title: '.نرد',
                            description: '',
                            id: '.نرد'
                          },
                          {
                            header: 'للعبه طلاق',
                            title: '.طلاق',
                            description: '',
                            id: '.طلاق'
                          },
                          {
                            header: 'لمنشن اثنين عشواءي صداقه',
                            title: '.صداقه',
                            description: '',
                            id: '.صداقه'
                          },
                          {
                            header: 'توب 10 عشواءي',
                            title: '.توب',
                            description: '',
                            id: '.توب'                        
                 },
                          {
                            header: 'للزواج منشن 2 عشواءي',
                            title: '.زواج',
                            description: '',
                            id: '.زواج'

                          },
                          {
                            header: 'للعبه حظ',
                            title: '.حظ',
                            description: '',
                            id: '.حظ'
                          },
                          {
                            header: 'لتحويل الملصق او الصوره لجيف',
                            title: '.لجيف',
                            description: '',
                            id: '.لجيف'
                          },
                          {
                            header: 'لتحويل ملصق متحرك لفيديو',
                            title: '.لفيديو',
                            description: '',
                            id: '.لفيديو'
                          },
                          {
                            header: 'لتحويل ملصق ثابت لصوره',
                            title: '.لصوره',
                            description: '',
                            id:'.لصوره'
                          },
                          {
                            header: 'لتحويل صوره (شخص) لكرتون',
                            title: '.لكرتون',
                            description: '',
                            id: '.لكرتون'
                          },
                          {
                            header: 'لتحويل اي فيديو او صوره لملصق طويل',
                            title: '.كامل',
                            description: '',
                            id: '.كامل'
                          },
                          {
                            header: 'لزغرفه النصوص الانجليزيه',
                            title: '.زغرفه',
                            description: '',
                            id: '.زغرفه'
                          },
                          {
                            header: 'لتحويل فيديو او صوره لملصق قصير',
                            title: '.ملصق',
                            description: '',
                            id: '.ملصق'
                          },
                          {
                            header: 'لوضع حقوقق على ملصق',
                            title: '.سرقه',
                            description: '',
                            id: '.سرقه'
                          },
                          {
                            header: 'لتحويل فيديو او صوره لرابط',
                            title: '.تليجراف',
                            description: '',
                            id: '.تليجراف'
                          },
                          {
                            header: 'لجلب الكود الخاص بك في البوت',
                            title: '.رقمي',
                            description: '',
                            id: '.رقمي'
                          },
                          {
                            header: 'لجلب معلوماتك',
                            title: '.بروفايل',
                            description: '',
                            id: '.بروفايل'
                          },
                          {
                            header: 'لجلب ميمز انمي مضحك',
                            title: '.ميمز',
                            description: '',
                            id: '.ميمز'
                          },
                          {
                            header: 'للتطقيم اولاد',
                            title: '.تطقيم_اولاد',
                            description: '',
                            id: '.تطقيم_اولاد'
                          },
                          {
                            header: 'للتطقيم للبنات',
                            title: '.تطقيم_بنات',
                            description: '',
                            id: '.تطقيم_بنات'
                          },
                          {
                            header: 'للتطقيم ولد وبنت',
                            title: '.تطقيم',
                            description: '',
                            id: '.تطقيم'
                          },
                          {
                            header: 'لمعرفه المميزين في البوت',
                            title: '.المميزين',
                            description: '',
                            id: '.المميزين'
                          },
                          {
                            header: 'لجلب صور قطه عشواءي',
                            title: '.قطه',
                            description: '',
                            id: '.قطه'
                          },
                          {
                            header: 'لتحويل اي نص لباركود',
                            title: '.باركود',
                            description: '',
                            id: '.باركود'
                          },
                          {
                            header: 'لمعرفه عدد مستخدمين البوت في الوقت الحالي',
                            title: '.المستخدمين',
                            description: '',
                            id: '.المستخدمين'
                          },
                          {
                            header: 'لتصميم لوجو بسيط',
                            title: '.تصميم',
                            description: '',
                            id: '.تصميم'
                          },
                          {
                            header: 'لابلاغ المطور بمشكله',
                            title: '.بلاغ',
                            description: '',
                            id: '.بلاغ'
                          },
                          {
                            header: 'للعبه بنك',
                            title: '.بنك',
                            description: '',
                            id: '.البنك'
                          },
                          {
                            header: 'لمعرفه عدد الماسك',
                            title: '.الماس',
                            description: '',
                            id: '.الماس'
                          },
                          {
                            header: 'لمعرفه عدد الماسك',
                            title: '.الماس',
                            description: '',
                            id: '.الماس'
                          },
                          {
                            header: 'لوضع شخص مشرف',
                            title: '.ترقيه',
                            description: '',
                            id: '.ترقيه'
                          },
                          {
                            header: 'للذكاء الاصطناعي',
                            title: '.بوت',
                            description: '',
                            id: '.بوت'
                          },
                         {
                            header: 'لازاله شخص من المشرف',
                            title: '.اععفاء',
                            description: '',
                            id: '.اعفاء'
                         },
                        {
                            header: 'لحذف لقب موجود',
                            title: '.حذف_اللقب',
                            description: '',
                            id: '.حذف_اللقب'
                          },
                          {
                            header: 'لمعرفه الالقاب الموجوده',
                            title: '.الالقاب',
                            description: '',
                            id: '.الالقاب'
                          },
                         {
                            header: 'لاضافه لقبك في البوت',
                            title: '.لقبني',
                            description: '',
                            id: '.لقبني'
                          },
                         {
                            header: 'لحذف جميع الالقاب الموجوده',
                            title: '.حذف_الالقاب',
                            description: '',
                            id: '.حذف_الالقاب'
                          }, 
                         {
                            header: 'لمسابقه الصور',
                            title: '.مسابقه-الصور',
                            description: '',
                            id: '.مسابقه-صور'
                          }, 
                         {
                            header: 'لرساله وهميه',
                            title: '.وهمي',
                            description: '',
                            id: '.وهمي'    
                          }, 
                         {
                            header: 'لتشفير رساله',
                            title: '.تشفير',
                            description: '',
                            id: '.تشفير'
                         }, 
                         {
                            header: 'لفك تشفير رساله',
                            title: '.فك-التشفير',
                            description: '',
                            id: '.فك-التشفير'
                          }, 
                         {
                            header: 'لتنزيل من تيكتوك',
                            title: '.تيك',
                            description: '',
                            id: '.تيك'                
                          }, 
                         {
                            header: 'لتشغيل صوت او فيديو من يوتيوب',
                            title: '.شغل',
                            description: '',
                            id: '.شغل'
                   }, 
                         {
                            header: 'للعبه متفجرات',
                            title: '.متفجرات',
                            description: '',
                            id: '.متفجرات'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''

                },
{
               name: "cta_url",
               buttonParamsJson: '{"display_text":"🔥قـنـاتـي💕","url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01","merchant_url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01"}'
             },
     { 
      name: "quick_reply",
              buttonParamsJson: '{"display_text":".التفعيلات","id":"message"}'
            },
     {
        name: "quick_reply",
              buttonParamsJson: '{"display_text":".المطور","id":"message"}'
           },
     {
                 name: "quick_reply",
              buttonParamsJson: '{"display_text":".معلومات","id":"message"}'
               }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['المهام','menu','اوامر','مهام','الاوامر']

export default handler

