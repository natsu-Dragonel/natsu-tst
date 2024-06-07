let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '⌘──〘 *♥📃القوائم📃♥* 〙── ⌘'
            },
            body: {
              text: '**\n╰──────────⳹'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '🔥قـائـمــه الـاوامـر🔥',
                    sections: [
                      {
                        title:'🔥الـاوامـر💕',
                        highlight_label: 'اوامر البوت',
                        rows: [
   {
                            header: 'محرج😳',
                            title: 'الامر',
                            description: '.محرج',
                            id: '.محرج'
                          },
                          {
                            header: 'شبيهي🗿',
                            title: 'الامر',
                            description: '.شبيهي',
                            id: '.شبيهي'
                          },
                            {
                            header: 'تفكيك🐔',
                            title: 'الامر',
                            description: '.تفكيك',
                            id: '.تفكيك'
                          },
                            {
                            header: 'تركيب👘',
                            title: 'الامر',
                            description: '.تركيب',
                            id: '.تركيب'
                          },
                          {
                            header: 'هل🤔',
                            title: 'الامر',
                            description: '.هل',
                            id: '.هل'
                          },
                          {
                            header: 'صوت📢',
                            title: 'الامر صوت انمي جديد',
                            description: '.صوت',
                            id: '.صوت'
                          },
                          {
                            header: '💌ايموجي',
                            title: 'الامر',
                            description: '.ايموجي',
                            id: '.ايموجي'
                          },
                            {
                            header: 'تركيب🌔',
                            title: 'الامر',
                            description: '.تركيب',
                            id: '.تركيب'
                          },
                          {
                            header: 'رجولتي👨🏻‍🚀',
                            title: 'الامر',
                            description: '.رجولتي',
                            id: '.رجولتي'
                          },
                          {
                            header: 'كذبتي🤥',
                            title: 'الامر',
                            description: '.كذبتي',
                            id: '.كذبتي'
                          },
                          {
                            header: 'فزوره🧚🏻',
                            title: 'الامر',
                            description: '.فزوره',
                            id: '.فزوره'
                          },
                          {
                            header: 'كت👾',
                            title: 'الامر',
                            description: '.كت',
                            id: '.كت'
                          },
                          {
                            header: 'احسب♨️',
                            title: 'الامر',
                            description: '.احسب',
                            id: '.احسب'
                          },
                          {
                            header: 'فلاج🏳️',
                            title: 'الامر',
                            description: '.فلاج',
                            id: '.فلاج'
                          },
                          {
                            header: 'دين🕌',
                            title: 'الامر للسؤال الديني وليس لعبه',
                            description: '.دين',
                            id: '.دين'
                          },
                          {
                            description: '.خمن',
                            id: '.خمن'
                          },  
                          {
                            header: 'علم🏁',
                            title: 'الامر',
                            description: '.علم',
                            id: '.علم'
                          },
                          {
                            header: 'قلوب♥️',
                            title: 'الامر',
                            description: '.قلوب',
                            id: '.قلوب'
                          },
                          {
                            header: 'سؤال🌨️',
                            title: 'الامر',
                            description: '.سؤال',
                            id: '.سؤال'
                          }, 
                          {
                            header: 'احزر🗣️',
                            title: 'الامر',
                            description: '.احزر',
                            id: '.احزر'
                          },
      {
                            header: 'شخصيه🐦‍🔥',
                            title: 'الامر',
                            description: '.شخصيه',
                            id: '.شخصيه'
                          },
                            {
                            header: 'حرب🗽',
                            title: 'الامر',
                            description: '.حرب',
                            id: '.حرب'
                          },
                          {
                            header: 'عين👁️',
                            title: 'الامر',
                            description: '.عين',
                            id: '.عين'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                },
{
              name: "quick_reply",
              buttonParamsJson: '{"display_text":".𝛩𝐵𝐼𝑇𝛩","id":"message"}'
            },
     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"🔥قـنـاتـي💕","url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01","merchant_url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01"}'
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
handler.command = ['menu','اوامر','المهام','مهام','الاوامر']

export default handler

