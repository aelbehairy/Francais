var vocabularyGroups = [
  {title:'1. Les sentiments et les sensations', subtitle:'Feelings and Sensations', rows:[
    ['avoir chaud','to feel hot','يشعر بالحرارة'],['avoir faim','to be hungry','يشعر بالجوع'],['avoir froid','to feel cold','يشعر بالبرد'],['avoir hâte','to look forward to','يتطلع بشوق'],['avoir peur','to be afraid','يشعر بالخوف'],['avoir raison','to be right','على حق'],['avoir soif','to be thirsty','يشعر بالعطش'],['avoir sommeil','to be sleepy','يشعر بالنعاس'],['être amoureux','to be in love','أن يكون عاشقًا'],['être content','to be happy','أن يكون مسرورًا'],['être fâché','to be angry','أن يكون غاضبًا'],['être fatigué','to be tired','أن يكون متعبًا'],['être heureux','to be happy','أن يكون سعيدًا'],['être malade','to be sick','أن يكون مريضًا'],['être timide','to be shy','أن يكون خجولًا'],['être triste','to be sad','أن يكون حزينًا'],["Comment te sens-tu aujourd'hui ?",'How do you feel today?','كيف تشعر اليوم؟'],["Aujourd'hui, je me sens amoureux !",'Today, I feel in love!','اليوم أشعر أنني عاشق!']
  ]},
  {title:'2. Le temps', subtitle:'Time, Days, and Months', rows:[
    ['le matin','morning','الصباح'],["l'après-midi",'afternoon','بعد الظهر'],['le soir','evening','المساء'],['la nuit','night','الليل'],['hier','yesterday','أمس'],["aujourd'hui",'today','اليوم'],['demain','tomorrow','غدًا'],['lundi','Monday','الاثنين'],['mardi','Tuesday','الثلاثاء'],['mercredi','Wednesday','الأربعاء'],['jeudi','Thursday','الخميس'],['vendredi','Friday','الجمعة'],['samedi','Saturday','السبت'],['dimanche','Sunday','الأحد'],['janvier','January','يناير'],['février','February','فبراير'],['mars','March','مارس'],['avril','April','أبريل'],['mai','May','مايو'],['juin','June','يونيو'],['juillet','July','يوليو'],['août','August','أغسطس'],['septembre','September','سبتمبر'],['octobre','October','أكتوبر'],['novembre','November','نوفمبر'],['décembre','December','ديسمبر']
  ]},
  {title:'3. Le corps', subtitle:'The Body', rows:[
    ["l'œil",'eye','العين'],['le nez','nose','الأنف'],['la joue','cheek','الخد'],['la langue','tongue','اللسان'],["l'épaule",'shoulder','الكتف'],['le bras','arm','الذراع'],['la main','hand','اليد'],['la jambe','leg','الساق'],['le doigt','finger','الإصبع'],['le pied','foot','القدم'],["l'orteil",'toe','إصبع القدم'],['les cheveux','hair','الشعر'],['le sourcil','eyebrow','الحاجب'],["l'oreille",'ear','الأذن'],['la bouche','mouth','الفم'],['le ventre','belly','البطن'],['le coude','elbow','الكوع'],['le genou','knee','الركبة'],['le talon','heel','الكعب'],['le pouce','thumb','الإبهام'],["l'index",'index finger','السبابة'],['le majeur','middle finger','الإصبع الوسطى'],["l'annulaire",'ring finger','البنصر'],["l'auriculaire",'little finger','الخنصر']
  ]},
  {title:'4. Ma famille', subtitle:'My Family', rows:[
    ['mon grand-père','my grandfather','جدي'],['ma grand-mère','my grandmother','جدتي'],['mon père','my father','أبي'],['ma mère','my mother','أمي'],['mon oncle','my uncle','عمي / خالي'],['ma tante','my aunt','عمتي / خالتي'],['mon frère','my brother','أخي'],['moi','me / I','أنا'],['ma sœur','my sister','أختي'],['mon cousin','my male cousin','ابن عمي / ابن خالي'],['ma cousine','my female cousin','ابنة عمي / ابنة خالي'],["Comment s'appellent tes parents ?","What are your parents' names?",'ما أسماء والديك؟'],["Ma mère s'appelle Isabelle et mon père s'appelle Martin.","My mother's name is Isabelle and my father's name is Martin.",'أمي تدعى إيزابيل وأبي يدعى مارتن.']
  ]},
  {title:'5. Les couleurs', subtitle:'Colours', rows:[
    ['beige','beige','بيج'],['blanc','white','أبيض'],['bleu','blue','أزرق'],['brun','brown','بني'],['gris','grey','رمادي'],['jaune','yellow','أصفر'],['noir','black','أسود'],['orange','orange','برتقالي'],['rose','pink','وردي'],['rouge','red','أحمر'],['turquoise','turquoise','فيروزي'],['vert','green','أخضر'],['violet','purple','بنفسجي'],['argent','silver','فضي'],['or','gold','ذهبي'],['bronze','bronze','برونزي']
  ]},
  {title:'6. Les moyens de transport', subtitle:'Means of Transport', rows:[
    ['une ambulance','ambulance','سيارة إسعاف'],['une auto','car','سيارة'],['un autobus','bus','حافلة'],['une auto-patrouille','patrol car','سيارة دورية'],['un avion','airplane','طائرة'],['un bateau','boat','قارب'],['une bicyclette','bicycle','دراجة هوائية'],['un camion','truck','شاحنة'],['un camion de pompiers','fire truck','سيارة إطفاء'],['une fourgonnette','van','شاحنة صغيرة / فان'],['une fusée','rocket','صاروخ'],['un hélicoptère','helicopter','مروحية'],['une limousine','limousine','ليموزين'],['un métro','metro / subway','مترو'],['une motocyclette','motorcycle','دراجة نارية'],['un taxi','taxi','سيارة أجرة'],['un tracteur','tractor','جرار'],['un train','train','قطار'],['un traversier','ferry','عبّارة'],['une trottinette','kick scooter','سكوتر ركل']
  ]},
  {title:'7. Les lieux dans la ville', subtitle:'Places in the City', rows:[
    ["l'aéroport",'airport','المطار'],["l'arrêt d'autobus",'bus stop','موقف الحافلة'],['la banque','bank','البنك'],['la boulangerie','bakery','المخبز'],['la boutique','shop','المتجر'],['le bureau de poste','post office','مكتب البريد'],['la caserne de pompiers','fire station','محطة الإطفاء'],['le centre commercial','shopping centre','المركز التجاري'],['le cinéma','cinema','السينما'],['le dépanneur','convenience store','متجر بقالة صغير'],["l'école",'school','المدرسة'],["l'épicerie",'grocery store','البقالة'],['le garage','garage / repair shop','المرآب / ورشة التصليح'],['la gare de train','train station','محطة القطار'],["l'hôpital",'hospital','المستشفى'],["l'hôtel",'hotel','الفندق'],['la librairie','bookstore','مكتبة لبيع الكتب'],['la maison','house','المنزل'],['le musée','museum','المتحف'],['le parc','park','المنتزه'],['la pharmacie','pharmacy','الصيدلية'],['le poste de police','police station','مركز الشرطة'],['le restaurant','restaurant','المطعم'],["la station d'essence",'gas station','محطة الوقود'],['le terrain de jeux','playground','الملعب / منطقة ألعاب']
  ]},
  {title:'8. Les métiers', subtitle:'Professions', rows:[
    ['un ou une architecte','architect','مهندس / مهندسة معماري'],['un acteur / une actrice','actor / actress','ممثل / ممثلة'],['un agriculteur / une agricultrice','farmer','مزارع / مزارعة'],["un chauffeur d'autobus / une chauffeuse d'autobus",'bus driver','سائق / سائقة حافلة'],['un chauffeur de taxi / une chauffeuse de taxi','taxi driver','سائق / سائقة سيارة أجرة'],['un coiffeur / une coiffeuse','hairdresser','حلاق / مصففة شعر'],['un cuisinier / une cuisinière','cook','طباخ / طباخة'],['un ou une dentiste','dentist','طبيب / طبيبة أسنان'],['un dessinateur / une dessinatrice','designer / illustrator','رسام / رسامة'],['un facteur / une factrice','mail carrier','ساعي / ساعية بريد'],['un ingénieur / une ingénieure','engineer','مهندس / مهندسة'],['un mécanicien / une mécanicienne','mechanic','ميكانيكي / ميكانيكية'],['un ou une médecin','doctor','طبيب / طبيبة'],['un ouvrier du bâtiment / une ouvrière du bâtiment','construction worker','عامل / عاملة بناء'],['un ou une pilote','pilot','طيار / طيارة'],['un policier / une policière','police officer','شرطي / شرطية'],['un pompier / une pompière','firefighter','رجل / امرأة إطفاء'],['un serveur / une serveuse','waiter / waitress','نادل / نادلة'],['un vendeur / une vendeuse','seller / salesperson','بائع / بائعة'],['un ou une vétérinaire','veterinarian','طبيب / طبيبة بيطري']
  ]},
  {title:'9. Les passe-temps et les verbes', subtitle:'Hobbies and Verbs', rows:[
    ['collectionner des objets','to collect objects','جمع الأشياء'],['cuisiner','to cook','الطبخ'],['danser','to dance','الرقص'],['écouter de la musique','to listen to music','الاستماع للموسيقى'],['faire du sport','to play sports','ممارسة الرياضة'],['faire un casse-tête','to do a puzzle','حل لغز / بازل'],['faire un modèle réduit','to make a scale model','صنع نموذج مصغر'],['jardiner','to garden','أعمال البستنة'],['jouer à un jeu vidéo','to play a video game','لعب لعبة فيديو'],['jouer dehors','to play outside','اللعب في الخارج'],["jouer d'un instrument",'to play an instrument','العزف على آلة'],['lire un livre','to read a book','قراءة كتاب'],['naviguer sur Internet','to browse the Internet','تصفح الإنترنت'],['peindre','to paint','الرسم بالألوان'],['photographier','to photograph','التصوير الفوتوغرافي'],['regarder la télévision','to watch television','مشاهدة التلفاز'],['pleurer','to cry','البكاء'],['rire','to laugh','الضحك'],['chanter','to sing','الغناء'],['dormir','to sleep','النوم'],['écrire','to write','الكتابة'],['lire','to read','القراءة'],['dessiner','to draw','الرسم'],['jouer','to play','اللعب'],['découper','to cut out','القص'],['boire','to drink','الشرب'],['manger','to eat','الأكل'],['marcher','to walk','المشي'],['courir','to run','الجري'],['sauter','to jump','القفز'],['nager','to swim','السباحة'],['laver','to wash','الغسل']
  ]},
  {title:'10. Les actions de la journée', subtitle:'Daily Routine', rows:[
    ['Elle se réveille.','She wakes up.','هي تستيقظ.'],['Elle va à la salle de bain.','She goes to the bathroom.','هي تذهب إلى الحمام.'],['Elle se lave le visage.','She washes her face.','هي تغسل وجهها.'],['Elle fait son lit.','She makes her bed.','هي ترتب سريرها.'],['Elle déjeune.','She eats breakfast.','هي تتناول الفطور.'],['Elle met la table.','She sets the table.','هي تجهز الطاولة.'],['Elle retourne à la maison.','She returns home.','هي تعود إلى المنزل.'],['Elle fait ses devoirs.','She does her homework.','هي تؤدي واجباتها.'],['Elle soupe.','She eats supper.','هي تتناول العشاء.'],['Elle se brosse les dents.','She brushes her teeth.','هي تنظف أسنانها.'],["Elle s'habille.",'She gets dressed.','هي ترتدي ملابسها.'],["Elle va à l'école.",'She goes to school.','هي تذهب إلى المدرسة.'],['Elle va en classe.','She goes to class.','هي تذهب إلى الفصل.'],['Elle dîne.','She eats lunch / dinner.','هي تتناول الغداء.'],['Elle prend sa douche.','She takes a shower.','هي تأخذ حمامًا.'],['Elle se couche.','She goes to bed.','هي تذهب للنوم.']
  ]},
  {title:'11. Les pays', subtitle:'Countries', rows:[
    ['le Canada','Canada','كندا'],["l'Allemagne",'Germany','ألمانيا'],["l'Angleterre",'England','إنجلترا'],["l'Argentine",'Argentina','الأرجنتين'],['le Brésil','Brazil','البرازيل'],['la Chine','China','الصين'],["l'Espagne",'Spain','إسبانيا'],['les États-Unis','United States','الولايات المتحدة'],['la France','France','فرنسا'],["l'Italie",'Italy','إيطاليا'],['le Japon','Japan','اليابان'],['le Mexique','Mexico','المكسيك'],['la Russie','Russia','روسيا']
  ]},
  {title:"12. L'alimentation", subtitle:'Food and Drink', rows:[
    ['Les fruits','fruits','الفواكه'],['un ananas','pineapple','أناناس'],['une banane','banana','موزة'],['des bleuets','blueberries','توت أزرق'],['une cerise','cherry','كرز'],['un citron','lemon','ليمون'],['une fraise','strawberry','فراولة'],['une framboise','raspberry','توت العليق'],['un kiwi','kiwi','كيوي'],["un melon d'eau",'watermelon','بطيخ أحمر'],['une orange','orange','برتقالة'],['un pamplemousse','grapefruit','جريب فروت'],['une pêche','peach','خوخ'],['une poire','pear','إجاص'],['une pomme','apple','تفاحة'],['des raisins','grapes','عنب'],['Les légumes','vegetables','الخضروات'],['une betterave','beetroot','شمندر'],['un brocoli','broccoli','بروكلي'],['une carotte','carrot','جزرة'],['pain','bread','خبز'],['eau','water','ماء'],['lait','milk','حليب'],['café','coffee','قهوة'],['thé','tea','شاي']
  ]},
  {title:'13. Les appareils électroniques', subtitle:'Electronic Devices', rows:[
    ['un cellulaire','mobile phone','هاتف محمول'],['une console de jeu','game console','منصة ألعاب'],['des écouteurs','earphones','سماعات أذن'],['une imprimante','printer','طابعة'],['un ordinateur','computer','حاسوب'],['un ordinateur portable','laptop','حاسوب محمول'],['une tablette numérique','tablet','جهاز لوحي'],['une télévision','television','تلفاز'],['As-tu une tablette numérique ?','Do you have a tablet?','هل لديك جهاز لوحي؟'],["Non, je n'en ai pas.","No, I don't have one.",'لا، ليس لدي.'],["Oui, j'en ai une. Et toi ?",'Yes, I have one. And you?','نعم، لدي واحد. وأنت؟']
  ]},
  {title:'14. Les vêtements', subtitle:'Clothing', rows:[
    ['un bermuda','Bermuda shorts','شورت برمودا'],['un blouson court','short jacket','سترة قصيرة'],['une camisole','tank top','قميص داخلي / علاق'],['un chandail','sweater','سترة'],['un chandail à capuchon','hoodie','سترة بقلنسوة'],['un chapeau','hat','قبعة'],['des chaussettes','socks','جوارب'],['une chemise','shirt','قميص'],['un chemisier','blouse','بلوزة'],['un complet','suit','بدلة كاملة'],['des gants','gloves','قفازات'],['un imperméable','raincoat','معطف واق من المطر'],['un jean','jeans','بنطال جينز'],['une jupe','skirt','تنورة'],['un maillot de bain','swimsuit','ملابس سباحة'],['un manteau','coat','معطف'],['des mitaines','mittens','قفازات بدون أصابع'],['un pantalon','trousers / pants','بنطال'],['un pyjama','pyjamas','بيجاما'],['une robe','dress','فستان'],['une robe de chambre','bathrobe / dressing gown','روب حمام / ثوب نوم'],['une salopette','overalls','سالوبت / مريلة'],['un sous-vêtement','underwear','ملابس داخلية'],['un tee-shirt','T-shirt','قميص تي شيرت'],["Qu'est-ce que tu portes ?",'What are you wearing?','ماذا ترتدي؟'],['Je porte un chapeau orange et un imperméable jaune.','I am wearing an orange hat and a yellow raincoat.','أرتدي قبعة برتقالية ومعطفًا أصفر واقيًا من المطر.']
  ]},
  {title:'15. Salutations, personnes et nombres', subtitle:'Extra A1 Summary Groups', rows:[
    ['Bonjour','Hello / good morning','مرحبًا'],['Salut','Hi','أهلًا'],['Bonsoir','Good evening','مساء الخير'],['Au revoir','Goodbye','مع السلامة'],['Bonne nuit','Good night','تصبح على خير'],['Merci','Thank you','شكرًا'],["S'il vous plaît",'Please','من فضلك'],['Excusez-moi','Excuse me','عذرًا'],['Oui','Yes','نعم'],['Non','No','لا'],['homme','man','رجل'],['femme','woman','امرأة'],['garçon','boy','ولد'],['fille','girl','بنت'],['ami(e)','friend','صديق / صديقة'],['famille','family','عائلة'],['un, deux, trois, quatre, cinq','one, two, three, four, five','واحد، اثنان، ثلاثة، أربعة، خمسة'],['six, sept, huit, neuf, dix','six, seven, eight, nine, ten','ستة، سبعة، ثمانية، تسعة، عشرة']
  ]},
  {title:'16. Maison, école, animaux, lieux, météo', subtitle:'Home, School, Animals, Places, Weather', rows:[
    ['maison','house','منزل'],['cuisine','kitchen','مطبخ'],['salon','living room','صالة'],['lit','bed','سرير'],['table','table','طاولة'],['école','school','مدرسة'],['professeur','teacher','معلم'],['élève','student / pupil','طالب'],['travail','work','عمل'],['ordinateur','computer','كمبيوتر'],['chemise','shirt','قميص'],['pantalon','trousers / pants','بنطلون'],['robe','dress','فستان'],['chaussures','shoes','حذاء'],['chien','dog','كلب'],['chat','cat','قط'],['oiseau','bird','طائر'],['poisson','fish','سمك'],['ville','city','مدينة'],['rue','street','شارع'],['parc','park','حديقة'],['hôpital','hospital','مستشفى'],['gare','station','محطة'],['soleil','sun','شمس'],['pluie','rain','مطر'],['neige','snow','ثلج'],['chaud','hot','حار'],['froid','cold','بارد']
  ]},
  {title:'17. Se présenter', subtitle:'Introducing Yourself', rows:[
    ['prénom','first name','الاسم الأول'],['nom','last name','اسم العائلة'],['nationalité','nationality','الجنسية'],['langue','language','اللغة'],['étudiant','student','طالب'],['employé(e)','employee','موظف / موظفة'],['informaticien','IT specialist','متخصص معلوماتية'],['fonctionnaire','civil servant','موظف حكومي'],['secteur bancaire','banking sector','القطاع المصرفي'],["Je m'appelle Lina.",'My name is Lina.','اسمي لينا.'],['Je suis étudiant.','I am a student.','أنا طالب.'],["J'habite à Paris.",'I live in Paris.','أسكن في باريس.'],['Je suis français / égyptien.','I am French / Egyptian.','أنا فرنسي / مصري.'],["J'ai 40 ans.",'I am 40 years old.','عمري 40 سنة.'],['Je suis âgé de 34 ans.','I am 34 years old.','عمري 34 سنة.'],['Je suis né en 2005.','I was born in 2005.','وُلدت سنة 2005.'],['Je suis né le 10 juin 2004.','I was born on June 10, 2004.','وُلدت في 10 يونيو 2004.'],['Ma date de naissance, c’est le 14 mars 1987.','My date of birth is March 14, 1987.','تاريخ ميلادي هو 14 مارس 1987.'],['Je travaille chez moi.','I work from home.','أعمل في المنزل.'],['Je travaille dans le secteur bancaire.','I work in the banking sector.','أعمل في القطاع المصرفي.']
  ]},
  {title:'18. Grammaire utile du fichier', subtitle:'Useful Grammar Vocabulary', rows:[
    ['être','to be','يكون'],['avoir','to have','يملك'],['aller','to go','يذهب'],['faire','to do / make','يفعل'],['il','he','هو'],['elle','she','هي'],['ils','they','هم'],['on','one / we','نحن / المرء'],['le','the, masculine singular','أداة تعريف للمذكر'],['la','the, feminine singular','أداة تعريف للمؤنث'],["l'",'the, before vowel','أداة تعريف قبل حرف علة'],['les','the, plural','أداة تعريف للجمع'],['un','a / an, masculine','أداة نكرة للمذكر'],['une','a / an, feminine','أداة نكرة للمؤنث'],['des','some / plural indefinite article','أداة نكرة للجمع'],['du','of the / some, masculine','من الـ / بعض للمذكر'],['au','to the, masculine','إلى الـ للمذكر'],['aux','to the, plural','إلى الـ للجمع'],['mon / ma / mes','my','ملكي'],['ton / ta / tes','your','ملكك'],['son / sa / ses','his / her','ملكه / ملكها'],['souvent','often','غالبًا'],['quelquefois','sometimes','أحيانًا'],['habituellement','usually','عادة'],['le week-end','the weekend','عطلة نهاية الأسبوع'],['football','football / soccer','كرة قدم'],['voyager','to travel','يسافر'],['club','club','النادي'],['marché','market','السوق'],['français','French','الفرنسية / فرنسي'],['médecin','doctor','طبيب'],['Paris','Paris','باريس'],['Lille','Lille','ليل']
  ]},
  {title:'19. Phrases utiles du fichier', subtitle:'Useful Sentences from the PDF', rows:[
    ['Bonjour ! Comment ça va ?','Hello! How are you?','مرحبًا! كيف حالك؟'],['Merci pour votre aide.','Thank you for your help.','شكرًا على مساعدتك.'],['Mon père et ma mère sont à la maison.','My father and my mother are at home.','والدي ووالدتي في المنزل.'],["Aujourd'hui, il fait beau.",'Today, the weather is nice.','اليوم الجو جميل.'],['Je bois un café.','I drink a coffee.','أشرب قهوة.'],['Je vais au club.','I go to the club.','أذهب إلى النادي.'],['Nous avons une maison.','We have a house.','لدينا منزل.'],['Il est étudiant.','He is a student.','هو طالب.'],['Il a un livre.','He has a book.','لديه كتاب.'],["Il n'a pas de livre.",'He does not have a book.','ليس لديه كتاب.'],['Je mange une pomme.','I eat an apple.','آكل تفاحة.'],['Je ne mange pas de pomme.','I do not eat an apple.','لا آكل تفاحة.'],['Je vais en France.','I go to France.','أذهب إلى فرنسا.'],['Je suis égyptien.','I am Egyptian.','أنا مصري.'],['Nous allons au marché.','We go to the market.','نذهب إلى السوق.'],['Ils font du sport.','They play sports.','يمارسون الرياضة.'],['Elle parle français.','She speaks French.','هي تتكلم الفرنسية.']
  ]}
  ,
  {title:'20. Fiche de vocabulaire 3 — Relations sociales', subtitle:'Social Relationships', rows:[
    ['rencontrer','to meet','يقابل / يلتقي'],
    ['de nouvelles personnes','new people','أشخاص جدد'],
    ['seul','alone / lonely','وحيد'],
    ['davantage de gens','more people','عدد أكبر من الناس'],
    ['connaître plus de monde','to know more people','يتعرف على ناس أكثر'],
    ['le monde','people / the world','الناس / العالم']
  ]},
  {title:'21. Fiche de vocabulaire 3 — Vie professionnelle', subtitle:'Professional Life', rows:[
    ['travailler','to work','يعمل'],
    ['un magasin','a shop / store','متجر / محل'],
    ['les clients','customers','الزبائن / العملاء'],
    ['sympathiques','friendly / nice','لطفاء / ودودون'],
    ['des défis','challenges','تحديات'],
    ['les collègues','colleagues','الزملاء'],
    ['les efforts','efforts','المجهودات']
  ]},
  {title:'22. Fiche de vocabulaire 3 — Expressions utiles', subtitle:'Useful Expressions', rows:[
    ['Ne perds pas ton courage !',"Don’t lose your courage!",'لا تفقد شجاعتك!'],
    ['Continue !','Keep going!','استمر!'],
    ['perdre courage','to lose courage','يفقد الشجاعة / يفقد الحماس'],
    ['continuer','to continue / to keep going','يستمر / يواصل'],
    ['une phrase de motivation','a motivational sentence','جملة تحفيزية']
  ]},
  {title:'23. Fiche de vocabulaire 3 — Phrases et exercices', subtitle:'Practice Sentences', rows:[
    ['Je rencontre de nouvelles personnes.','I meet new people.','أقابل أشخاصا جددا.'],
    ['Parfois, je me sens seul.','Sometimes, I feel lonely.','أحيانا أشعر بالوحدة.'],
    ['Je travaille dans un magasin.','I work in a shop.','أعمل في متجر.'],
    ['Les clients sont sympathiques.','The customers are friendly.','الزبائن لطفاء.'],
    ['Ne perds pas ton courage !',"Don’t lose your courage!",'لا تفقد شجاعتك!'],
    ["Aujourd'hui, je travaille dans un petit magasin.",'Today, I work in a small shop.','اليوم أعمل في متجر صغير.'],
    ["J'aimerais connaître plus de monde.",'I would like to know more people.','أود أن أتعرف على ناس أكثر.'],
    ['Il y a toujours des défis au travail.','There are always challenges at work.','هناك دائما تحديات في العمل.'],
    ['Je rencontre de nouvelles personnes à ...','I meet new people at ...','أقابل أشخاصا جددا في ...'],
    ["Aujourd'hui, je travaille / j'aimerais travailler ...","Today, I work / I would like to work ...",'اليوم أعمل / أود أن أعمل ...']
  ]}
  ,
  {title:'24. Fiche de vocabulaire 4 — Projets et objectifs', subtitle:'Projects and Goals', rows:[
    ["l'avenir",'the future','المستقبل'],
    ['projets','projects / plans','مشاريع / خطط'],
    ['obtenir la citoyenneté','to obtain citizenship','يحصل على الجنسية'],
    ["étudier à l'université",'to study at university','يدرس في الجامعة'],
    ['un objectif','a goal / objective','هدف'],
    ['un rêve','a dream','حلم'],
    ['la citoyenneté canadienne','Canadian citizenship','الجنسية الكندية']
  ]},
  {title:'25. Fiche de vocabulaire 4 — Voyages et destinations', subtitle:'Travel and Destinations', rows:[
    ['voyager','to travel','يسافر'],
    ['le pays','the country','البلد'],
    ['visiter','to visit','يزور'],
    ['Vancouver','Vancouver','فانكوفر'],
    ['dans tout le pays','throughout the whole country','في كل أنحاء البلد'],
    ["l'année prochaine",'next year','السنة القادمة'],
    ['au Canada','in / to Canada','في كندا / إلى كندا']
  ]},
  {title:'26. Fiche de vocabulaire 4 — Expressions utiles', subtitle:'Useful Conditionnel Expressions', rows:[
    ['Je voudrais...','I would like...','أود / أريد بلطف...'],
    ["Si j'avais plus d'argent...",'If I had more money...','لو كان لدي مال أكثر...'],
    ['Peut-être...','Maybe / Perhaps','ربما'],
    ['Peut-être que je visiterai Vancouver.','Maybe I will visit Vancouver.','ربما سأزور فانكوفر.'],
    ['Si j’avais plus d’argent, je voyagerais dans tout le pays.','If I had more money, I would travel throughout the country.','لو كان لدي مال أكثر، لسافرت في كل أنحاء البلد.']
  ]},
  {title:'27. Fiche de vocabulaire 4 — Adjectifs et phrases', subtitle:'Dream Adjectives and Practice Sentences', rows:[
    ['facile','easy','سهل'],
    ['difficile','difficult','صعب'],
    ['magnifique','beautiful / wonderful','رائع / جميل جدا'],
    ['important','important','مهم'],
    ['intéressant','interesting','مثير للاهتمام'],
    ['incroyable','incredible','مذهل / لا يصدق'],
    ["Pour l'avenir, j'ai beaucoup de projets.",'For the future, I have many plans.','بالنسبة للمستقبل، لدي الكثير من الخطط.'],
    ["Je voudrais étudier à l'université.",'I would like to study at university.','أود أن أدرس في الجامعة.'],
    ['Obtenir la citoyenneté est important.','Obtaining citizenship is important.','الحصول على الجنسية مهم.'],
    ['Voyager au Canada serait magnifique.','Traveling in Canada would be wonderful.','السفر في كندا سيكون رائعا.'],
    ['Mon rêve est difficile, mais très important.','My dream is difficult, but very important.','حلمي صعب، لكنه مهم جدا.']
  ]}
];

var newVocabularyGroups = [
  {title:'Nouveaux mots — TCF Expliquer', subtitle:'Opening a message', rows:[
    ['un message','a message','رسالة'],
    ['une manière','a way / manner','طريقة'],
    ['poli / polie','polite','مهذب / مهذبة'],
    ['engageant / engageante','engaging','جذاب / تفاعلي'],
    ["une formule d'ouverture",'opening formula','عبارة افتتاح'],
    ['les nouvelles','news / updates','الأخبار'],
    ['Quoi de neuf ?','What’s new?','ما الجديد؟'],
    ['au sujet de','about / regarding','بخصوص'],
    ['prendre de vos nouvelles','to check on you','الاطمئنان عليك'],
    ["l'heure de l'examen",'the exam time','موعد الامتحان'],
    ['le cours','the course / class','الدرس / الدورة'],
    ['libre','free / available','متاح / غير مشغول']
  ]},
  {title:'Nouveaux mots — Demandes', subtitle:'Making polite requests', rows:[
    ['une demande','a request','طلب'],
    ['direct / directe','direct','مباشر / مباشرة'],
    ['doux / douce','gentle / soft','لطيف / ألطف'],
    ['élégant / élégante','elegant','راقي / أنيق'],
    ['le cinéma','the cinema','السينما'],
    ['le parc','the park','الحديقة'],
    ['un moment','a moment / time','وقت / لحظة'],
    ['ensemble','together','معًا'],
    ['la maison','the house','المنزل'],
    ['s’il vous plaît','please','من فضلك / من فضلكم'],
    ['ça te convient','it suits you','هذا يناسبك'],
    ["ça t'irait",'would that suit you?','هل سيكون ذلك مناسبًا لك؟']
  ]},
  {title:'Nouveaux mots — Détails', subtitle:'Clarifying a request', rows:[
    ['un détail','a detail','تفصيل'],
    ['clarifier','to clarify','يوضح'],
    ['Quoi ?','What?','ماذا؟'],
    ['Où ?','Where?','أين؟'],
    ['Quand ?','When?','متى؟'],
    ['Pourquoi ?','Why?','لماذا؟'],
    ['un ticket','a ticket','تذكرة'],
    ['deux tickets','two tickets','تذكرتان'],
    ['samedi prochain','next Saturday','السبت القادم'],
    ['demain matin','tomorrow morning','غدًا صباحًا'],
    ['demain soir','tomorrow evening','غدًا مساءً'],
    ['à 18 h','at 6 p.m.','الساعة السادسة مساءً'],
    ['à 20 h','at 8 p.m.','الساعة الثامنة مساءً'],
    ['au gym','at the gym','في النادي الرياضي'],
    ['quelques meubles','some furniture','بعض الأثاث']
  ]},
  {title:'Nouveaux mots — TCF Oral', subtitle:'Speaking practice words', rows:[
    ['un ingénieur logiciel','a software engineer','مهندس برمجيات'],
    ['le domaine informatique','the IT field','مجال المعلوماتية'],
    ['un projet futur','a future project','مشروع مستقبلي'],
    ['une expérience professionnelle','professional experience','خبرة مهنية'],
    ['la mer Rouge','the Red Sea','البحر الأحمر'],
    ['la concentration','concentration','التركيز'],
    ['la logique','logic','المنطق'],
    ['la motivation','motivation','الدافع / الحافز'],
    ["l'équilibre",'balance','التوازن'],
    ['les loisirs','hobbies','الهوايات'],
    ['enrichissant / enrichissante','enriching','مفيد / مُثرٍ'],
    ['stable','stable','مستقر']
  ]}
];

var verbVocabularyGroups = [
  {title:'Verbes — Irréguliers', subtitle:'Most common irregular verbs', rows:[
    ['être','to be','يكون'],['avoir','to have','يمتلك / عنده'],['aller','to go','يذهب'],['faire','to do / make','يفعل / يقوم بـ'],['pouvoir','can / to be able to','يستطيع'],['vouloir','to want','يريد'],['devoir','must / to have to','يجب / ينبغي'],['savoir','to know information','يعرف معلومة'],['connaître','to know a person/place','يعرف شخصًا / مكانًا'],['dire','to say','يقول'],['prendre','to take','يأخذ'],['venir','to come','يأتي'],['voir','to see','يرى'],['mettre','to put','يضع'],['lire','to read','يقرأ'],['écrire','to write','يكتب'],['sortir','to go out','يخرج'],['partir','to leave','يغادر'],['dormir','to sleep','ينام'],['sentir','to feel / smell','يشعر / يشم'],['servir','to serve','يخدم / يقدم'],['offrir','to offer / give a gift','يقدم هدية'],['ouvrir','to open','يفتح'],['couvrir','to cover','يغطي'],['courir','to run','يجري'],['recevoir','to receive','يستقبل / يتلقى'],['apercevoir','to glimpse','يلمح'],['boire','to drink','يشرب'],['croire','to believe','يعتقد'],['vivre','to live','يعيش'],['suivre','to follow','يتبع'],['conduire','to drive','يقود'],['traduire','to translate','يترجم'],['construire','to build','يبني'],['produire','to produce','ينتج'],['rire','to laugh','يضحك'],['sourire','to smile','يبتسم'],['naître','to be born','يولد'],['mourir','to die','يموت'],['falloir','to be necessary','يجب - غير شخصي'],['pleuvoir','to rain','تمطر']
  ]},
  {title:'Verbes — Groupe 1 (-ER)', subtitle:'Most common regular -ER verbs', rows:[
    ['parler','to speak','يتحدث'],['travailler','to work','يعمل'],['habiter','to live','يسكن'],['aimer','to like / love','يحب'],['étudier','to study','يدرس'],['écouter','to listen','يستمع'],['regarder','to watch','يشاهد'],['demander','to ask / request','يسأل / يطلب'],['chercher','to look for','يبحث'],['trouver','to find','يجد'],['donner','to give','يعطي'],['acheter','to buy','يشتري'],['manger','to eat','يأكل'],['commencer','to begin','يبدأ'],['continuer','to continue','يستمر'],['arriver','to arrive','يصل'],['rester','to stay','يبقى'],['entrer','to enter','يدخل'],['retourner','to return','يعود'],['visiter','to visit','يزور'],['jouer','to play','يلعب'],['voyager','to travel','يسافر'],['gagner','to win / earn','يفوز / يكسب'],['payer','to pay','يدفع'],['appeler','to call','يتصل'],['aider','to help','يساعد'],['expliquer','to explain','يشرح'],['montrer','to show','يُظهر'],['oublier','to forget','ينسى'],['porter','to wear / carry','يرتدي / يحمل']
  ]},
  {title:'Verbes — Groupe 2 (-IR)', subtitle:'Regular -IR verbs', rows:[
    ['finir','to finish','ينهي'],['choisir','to choose','يختار'],['réussir','to succeed','ينجح'],['grandir','to grow','يكبر'],['réfléchir','to think / reflect','يفكر'],['remplir','to fill','يملأ'],['obéir','to obey','يطيع'],['punir','to punish','يعاقب'],['applaudir','to applaud','يصفق'],['grossir','to gain weight','يزيد وزنه']
  ]},
  {title:'Verbes — Nouveaux des leçons', subtitle:'Verbs from TCF Expliquer and new examples', rows:[
    ['formuler','to formulate','يصيغ'],
    ['commencer','to begin / start','يبدأ'],
    ['contextualiser','to contextualize','يضع في سياق'],
    ['répondre','to answer','يجيب'],
    ['tenir','to hold','يمسك'],
    ['attendre','to wait','ينتظر'],
    ['entendre','to hear','يسمع'],
    ['rendre','to return / give back','يعيد / يرجع'],
    ['accompagner','to accompany','يرافق'],
    ['convenir à','to suit','يناسب'],
    ['décorer','to decorate','يزين'],
    ['clarifier','to clarify','يوضح'],
    ['se trouver','to be located','يقع / يوجد'],
    ['passer du temps','to spend time','يقضي وقتًا'],
    ['déplacer','to move / relocate','ينقل / يحرك'],
    ['pratiquer','to practice','يمارس / يتدرب'],
    ['réviser','to review','يراجع'],
    ["s'occuper de",'to take care of','يعتني بـ'],
    ['progresser','to progress','يتقدم'],
    ['résoudre','to solve','يحل'],
    ['développer','to develop','يطور'],
    ['confirmer','to confirm','يؤكد'],
    ["s'organiser",'to organize oneself','ينظم نفسه'],
    ['participer','to participate','يشارك']
  ]}
];

function renderVocabularyGroups(gridId, groups){
  var grid = document.getElementById(gridId);
  if(!grid) return;
  grid.innerHTML = '';
  groups.forEach(function(group){
    var card = document.createElement('div');
    card.className = 'card visible-anim';

    var label = document.createElement('span');
    label.className = 'card-label';
    label.textContent = group.title + ' — ' + group.subtitle;

    var count = document.createElement('span');
    count.className = 'vocab-count';
    count.textContent = group.rows.length + ' words';
    label.appendChild(count);
    card.appendChild(label);

    var wrap = document.createElement('div');
    wrap.className = 'tbl-wrap';
    var table = document.createElement('table');
    table.className = 'tbl';
    var head = document.createElement('tr');
    ['Review','Français','English','العربية'].forEach(function(title){
      var th = document.createElement('th');
      th.textContent = title;
      head.appendChild(th);
    });
    table.appendChild(head);

    group.rows.forEach(function(row){
      var tr = document.createElement('tr');
      var isProfessionGroup = group.title.indexOf('Les métiers') > -1;
      var isStatement = isProfessionGroup || row.some(function(value){
        return String(value).length > 34 || /[.?!]/.test(String(value));
      });
      if(isStatement){
        tr.className = 'vocab-statement-row';
        var stacked = document.createElement('td');
        stacked.colSpan = 4;
        stacked.className = 'vocab-statement';
        stacked.appendChild(makeVocabularyReviewTools(gridId, group.title, row, tr));
        ['vocab-fr','vocab-en','vocab-ar'].forEach(function(className, index){
          var line = document.createElement('div');
          line.className = className;
          line.textContent = row[index];
          stacked.appendChild(line);
        });
        tr.appendChild(stacked);
        table.appendChild(tr);
        return;
      }
      var reviewCell = document.createElement('td');
      reviewCell.className = 'vocab-review-cell';
      reviewCell.appendChild(makeVocabularyReviewTools(gridId, group.title, row, tr));
      tr.appendChild(reviewCell);
      row.forEach(function(value){
        var td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    wrap.appendChild(table);
    card.appendChild(wrap);
    grid.appendChild(card);
  });
}

function getVocabularyReviewMarks(){
  try{
    return JSON.parse(localStorage.getItem('vocabularyReviewMarks') || '{}');
  } catch(err){
    return {};
  }
}

function saveVocabularyReviewMarks(marks){
  try{
    localStorage.setItem('vocabularyReviewMarks', JSON.stringify(marks));
  } catch(err){
    // Keep vocabulary usable if local storage is unavailable.
  }
}

function getVocabularyReviewKey(gridId, groupTitle, row){
  return [gridId, groupTitle].concat(row).join('::');
}

function makeVocabularyReviewTools(gridId, groupTitle, row, tr){
  var marks = getVocabularyReviewMarks();
  var key = getVocabularyReviewKey(gridId, groupTitle, row);
  var wrap = document.createElement('div');
  wrap.className = 'vocab-review-tools';

  var label = document.createElement('label');
  label.className = 'tcf-review-check';
  label.title = 'Mark this word to review again';

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = !!marks[key];
  checkbox.setAttribute('aria-label', 'Mark this word to review again');

  var visual = document.createElement('span');
  visual.setAttribute('aria-hidden', 'true');

  var marker = document.createElement('em');
  marker.className = 'tcf-review-marker';
  marker.textContent = '↺';
  marker.setAttribute('aria-hidden', 'true');

  label.appendChild(checkbox);
  label.appendChild(visual);
  wrap.appendChild(label);
  wrap.appendChild(marker);
  tr.classList.toggle('needs-review', checkbox.checked);

  checkbox.addEventListener('change', function(){
    var latestMarks = getVocabularyReviewMarks();
    tr.classList.toggle('needs-review', checkbox.checked);
    if(checkbox.checked){
      latestMarks[key] = true;
    } else {
      delete latestMarks[key];
    }
    saveVocabularyReviewMarks(latestMarks);
  });

  return wrap;
}

function showVocabularySub(id, btn){
  document.querySelectorAll('#panel-vocabulary .vocab-subview').forEach(function(view){
    view.classList.remove('visible');
  });
  document.querySelectorAll('#panel-vocabulary .vocab-subtabs .pill').forEach(function(pill){
    pill.classList.remove('active');
  });
  var view = document.getElementById('vocab-sub-' + id);
  if(view) view.classList.add('visible');
  if(btn) btn.classList.add('active');
}

function printCheckedVocabulary(event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }

  var groups = [];
  document.querySelectorAll('#panel-vocabulary .card').forEach(function(card){
    var checkedRows = Array.prototype.filter.call(card.querySelectorAll('tr'), function(row){
      var checkbox = row.querySelector('.vocab-review-tools input[type="checkbox"]');
      return checkbox && checkbox.checked;
    });
    if(!checkedRows.length) return;

    var title = card.querySelector('.card-label');
    groups.push({
      title: title ? title.textContent.trim() : 'Vocabulary',
      rows: checkedRows.map(function(row){
        var statement = row.querySelector('.vocab-statement');
        if(statement){
          return [
            statement.querySelector('.vocab-fr'),
            statement.querySelector('.vocab-en'),
            statement.querySelector('.vocab-ar')
          ].map(function(node){ return node ? node.textContent.trim() : ''; });
        }
        return Array.prototype.map.call(row.querySelectorAll('td'), function(cell){
          return cell.textContent.trim();
        }).slice(1);
      })
    });
  });

  if(!groups.length){
    window.alert('No checked vocabulary items yet.');
    return;
  }

  var printWindow = window.open('', '_blank');
  if(!printWindow) return;

  var content = groups.map(function(group){
    var rows = group.rows.map(function(row){
      return '<tr><td>'+escapeVocabularyHtml(row[0])+'</td><td>'+escapeVocabularyHtml(row[1])+'</td><td>'+escapeVocabularyHtml(row[2])+'</td></tr>';
    }).join('');
    return '<section><h2>'+escapeVocabularyHtml(group.title)+'</h2><table><thead><tr><th>Français</th><th>English</th><th>العربية</th></tr></thead><tbody>'+rows+'</tbody></table></section>';
  }).join('');

  printWindow.document.open();
  printWindow.document.write('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Checked Vocabulary</title><style>body{font-family:Arial,sans-serif;color:#111827;margin:28px}h1{font-size:24px;margin:0 0 20px}h2{font-size:16px;margin:24px 0 10px;color:#0f766e}section{break-inside:avoid;margin-bottom:18px}table{width:100%;border-collapse:collapse;font-size:14px}th,td{padding:9px 10px;border:1px solid #d1d5db;text-align:left}th{background:#f0fdfa}td:last-child,th:last-child{direction:rtl;text-align:right}@page{size:A4;margin:12mm}</style></head><body><h1>Checked Vocabulary</h1>'+content+'</body></html>');
  printWindow.document.close();
  printWindow.focus();
  setTimeout(function(){ printWindow.print(); }, 300);
}

function escapeVocabularyHtml(value){
  return String(value || '').replace(/[&<>"']/g, function(char){
    return {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&#39;'
    }[char];
  });
}

function renderVocabulary(){
  renderVocabularyGroups('vocabGrid', vocabularyGroups);
  renderVocabularyGroups('vocabNewGrid', newVocabularyGroups);
  renderVocabularyGroups('vocabVerbGrid', verbVocabularyGroups);
}

document.addEventListener('DOMContentLoaded', renderVocabulary);
