let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^ناتسو بحبك|ناتسو عاوز اتجوزك|بحبك|بموت فيك|نتجوز|ناتسو هنتجوز امتي|ناتسو انت ليا|ناتسو بموت فيك$/i.test(m.text)) { 
     responses = [ 
       '*و أنا أكثر يعمري🫶🏻💗*   ',  
       '*حبتك حية قول آمين!*',  
             '*كتكت جعل م غيرك يحبني🥹*',  
                   '*يلبيي حتنا*💗',  
                         'خلاص لا اتكسف ',  
                               '*مين م يحبني؟*   ',  
                                     '*لو مزاجي مظبوت* '  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام',  
          'وعليكم السلام حبي منور',  
              ' وعليكم السلام كيفك',  
                   'وعليكم السلام ورحمة الله وبركاته' 
     ]; 
   }else if (/^ ناتسو عامل ايه|عامله ايه|عاملين ايه|الدنيا عامله ايه|عاملين ايه يشبب$/i.test(m.text)) { 
     responses = [ 
       '*كويس يبني انت اي اخبارك 😔* ',  
          ' *مش عارفه*  ',  
              ' *الحمد لله ماشي الحال* ',  
                  '*الحمد الله*',                      ' *لو انت كويس انا كويسه*' 
     ]; 
   }else if (/^كل خرا|عرص|خول|متناك|كسمك|علق$/i.test(m.text)) { 
     responses = [ 
       'عيب ',  
          ' اتأدب ',  
              ' الله يسامحك ',  
                  'الله يهديك ',  
                   ' عيب يا طفل' 
     ]; 
 }else if (/^تم تعريب هذا الامر|تم الانتهاء|تمت اضافه|تمت اضافة|تم التعريب|هذا الامر انتهي$/i.test(m.text)) { 
     responses = [ 
       ' عاشت ايدك ✨💜',  
           'تسلم ايدك ✨💜 ',  
                'عاش ✨💜 ',  
                  'عاش ناتسو ✨💜',  
                   'اوكي ✨💜' 
     ]; 
   }else if (/^هههه|ههههه|هههههه|ههههههه|هههههههه|😂😂😂|😂😂😂😂|😂😂|🤣🤣$/i.test(m.text)) { 
     responses = [ 
       '*تدوم افراحك و تختفي احزانك🫶🏻*',  
            ' *يزينك يالي تضحك*',  
                   '*يدوم يدوم🙏🏻*', 
                         '😂😂😂',  
                         '*يزين اللي يضحك🥹*',  
                             'دوم' 
  ]; 
   }else if (/^صباح النور|صباح النعناع الاخضر|صباح الفل|صباح|صباح الخير $/i.test(m.text)) { 
     responses = [ 
       '*ارجع نام بدري*',  
          '*صباحك سعادة 😔✨*',  
              ' *صباح النور ✨🙏🏻*',  
                  '*صباح الدراسة😔*',  
                   '*صباحك شاورما🤍*' 
     ]; 
   }else if (/^شكرا|تسلم|تسلمي$/i.test(m.text)) { 
     responses = [ 
       '*يسلمك و ينجحك🙏🏻*',  
          '*أبشر أبشر في اي وقت💗🫴🏻*',  
              '*يسلمك و ينحفك✨*',  
                   '*يسلمك و يسمنك🙏🏻*' 
  ]; 
   }else if (/^ران|ملاك$/i.test(m.text)) { 
     responses = [ 
       'صديقه ناتسو العزيزه☺️♥',  
]; 
   }else if (/^🧡|💚|💞|💖|💜|💛|🤍 $/i.test(m.text)) { 
     responses = [ 
       'شكرا✨♥',  
          'تسلم✨♥',  
              '✨♥',  
                  'حبيبي✨💜',  
                   '✨💜' 
  ]; 
     }else if (/^كل ده نور|الجروب نور كده ليه|ايه منوره|منورين الجدد|منورين|منور $/i.test(m.text)) { 
     responses = [ 
       '*يهلا يهلا🙏🏻*',  
          '*نورت ي لمبه*✨',  
              '*شعشعت الجروب🥹*',  
                  '*نورت نورت🫶🏻*',  
                   '*نور عيونك🫴🏻*' 
  ]; 
   }else if (/^اسكت|اسكت|هتسكت امتي|يا ابني اسكت$/i.test(m.text)) { 
     responses = [ 
             'ملكش دعوه ', 
              ' لع وانت مالك',  
                 ' مش بمزاجك',  
                 'لا مين انت ال هتسكتني ',  
                   'اسكت انت' 
     ]; 
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
