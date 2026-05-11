// ── Wrap tables for mobile horizontal scroll ──
document.querySelectorAll('.tbl').forEach(function(t){
  if(!t.parentElement.classList.contains('tbl-wrap')){
    var wrap = document.createElement('div');
    wrap.className = 'tbl-wrap';
    t.parentNode.insertBefore(wrap, t);
    wrap.appendChild(t);
  }
});

// ── Stars ──
var sc = document.getElementById('starCanvas');
function drawStars(){
  sc.width = window.innerWidth;
  sc.height = sc.parentElement.offsetHeight;
  var ctx = sc.getContext('2d');
  for(var i=0; i<180; i++){
    ctx.beginPath();
    ctx.arc(Math.random()*sc.width, Math.random()*sc.height, Math.random()*1.4, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(255,255,255,'+(Math.random()*.6+.1)+')';
    ctx.fill();
  }
}
window.addEventListener('resize', drawStars);
drawStars();

// ── Lire facile page links ──
var lirePages = [
  {title:'Paris', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/paris-texte-francais-facile.html'},
  {title:'Mont Saint-Michel', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/mont-saint-michel-texte-fle.html'},
  {title:"La ville d'Antibes", group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/ville-antibes-texte-fle.html'},
  {title:'La Rochelle', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/la-rochelle.html'},
  {title:'Ville de Tours', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/ville-de-tours-texte-francais-facile.html'},
  {title:'Lyon', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/lyon.html'},
  {title:'Une journée en Bourgogne', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/une-journee-en-bourgogne-2.html'},
  {title:'Morbihan', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/morbihan.html'},
  {title:'Tours', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/tours.html'},
  {title:'Saint-Malo', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/saint-malo.html'},
  {title:'Le Val de Loire', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/le_val_de_loire.html'},
  {title:'Le Médoc', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/le-medoc.html'},
  {title:'Villes françaises', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/villes-francaises.html'},
  {title:'Les régions françaises', group:'facile', url:'https://www.podcastfrancaisfacile.com/culture-societe/les-regions-francaises-1.html'},
  {title:'La Louisiane et la Nouvelle-Orléans', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/la-louisiane-et-la-nouvelle-orleans.html'},
  {title:'La Sologne', group:'facile', url:'https://www.podcastfrancaisfacile.com/texte/la-sologne.html'}
];

function renderLireLinks(){
  var grid = document.getElementById('lireLinkGrid');
  if(!grid) return;
  grid.innerHTML = '';
  lirePages.forEach(function(page){
    var link = document.createElement('a');
    link.className = 'lire-link';
    link.href = page.url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.innerHTML = '<span class="lire-link-icon">🎧</span>' +
      '<span class="lire-link-title">'+escapeHtml(page.title)+'</span>' +
      '<span class="lire-link-meta">'+escapeHtml(page.group)+'</span>';
    grid.appendChild(link);
  });
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, function(ch){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
  });
}

function cleanLireTitle(title){
  return String(title).replace(/\s+-\s+Texte.*$/i, '').trim();
}

// ── Devoirs Marianne ──
var marianneDevoirs = [
  {
    "date": "Samedi 14/2",
    "question": [
      "Mettez ces mots dans une phrase (une phrase pour chaque mot) : le, la, les, je, tu, nous."
    ],
    "devoir": [
      "le → Le résultat de cette analyse scientifique est indéniablement remarquable.",
      "la → La complexité de la situation nous oblige à reconsidérer nos priorités.",
      "les → Les décisions prises lors de cette réunion auront des répercussions durables.",
      "je → Je m'efforce quotidiennement d'approfondir mes connaissances en linguistique.",
      "tu → Tu as démontré une capacité remarquable à surmonter les obstacles.",
      "nous → Nous sommes collectivement responsables de l'avenir de notre société."
    ],
    "shortDevoir": [
      "le → Le directeur a pris une décision importante.",
      "la → La réunion commence à neuf heures.",
      "les → Les résultats sont excellents cette année.",
      "je → Je travaille dans une grande entreprise.",
      "tu → Tu parles français avec beaucoup d'aisance.",
      "nous → Nous partageons les mêmes valeurs professionnelles."
    ]
  },
  {
    "date": "Dimanche 15/2",
    "question": [
      "Répondez à ces questions : Comment vous appelez-vous ? / Quel âge avez-vous ? / Quelle est votre nationalité ? / Quelle est votre profession ?"
    ],
    "devoir": [
      "Comment vous appelez-vous ? → Je me permets de me présenter : je m'appelle Marie Dupont, bien que mes collègues m'appellent affectueusement « Marie D ».",
      "Quel âge avez-vous ? → J'ai trente-cinq ans, un âge où l'expérience commence à se conjuguer harmonieusement avec l'ambition.",
      "Quelle est votre nationalité ? → Je suis française, bien qu'ayant vécu à l'étranger pendant près d'une décennie, ce qui m'a forgé une identité culturelle plurielle.",
      "Quelle est votre profession ? → J'exerce la profession d'ingénieure en systèmes d'information, une discipline à la croisée de la technologie et de la gestion de projets complexes."
    ],
    "shortDevoir": [
      "Comment vous appelez-vous ? → Je m'appelle Sophie Martin.",
      "Quel âge avez-vous ? → J'ai trente-deux ans.",
      "Quelle est votre nationalité ? → Je suis française.",
      "Quelle est votre profession ? → Je suis ingénieure en informatique."
    ]
  },
  {
    "date": "Lundi 16/2",
    "question": [
      "Mettez ces mots dans une phrase (une phrase pour chaque mot) : un, une, des, vous, ils."
    ],
    "devoir": [
      "un → Un bouleversement aussi profond que celui-là ne saurait laisser indifférent quiconque s'intéresse aux enjeux contemporains.",
      "une → Une telle opportunité ne se présente qu'une seule fois dans une carrière, il serait imprudent de la négliger.",
      "des → Des recherches approfondies ont démontré que le bilinguisme renforce considérablement les capacités cognitives.",
      "vous → Vous avez su, avec une élégance rare, concilier rigueur professionnelle et empathie humaine.",
      "ils → Ils ont collectivement contribué à l'élaboration d'une stratégie dont les effets bénéfiques se font déjà sentir."
    ],
    "shortDevoir": [
      "un → Un bon livre change souvent notre façon de penser.",
      "une → Une solution efficace a été trouvée rapidement.",
      "des → Des progrès remarquables ont été réalisés cette année.",
      "vous → Vous avez accompli un travail de grande qualité.",
      "ils → Ils voyagent régulièrement pour des raisons professionnelles."
    ]
  },
  {
    "date": "Jeudi 19/2",
    "question": [
      "Composez des phrases avec les adjectifs possessifs suivants (une phrase pour chaque mot) : mon, tes, sa, notre, vos, leurs."
    ],
    "devoir": [
      "mon → Mon engagement envers ce projet dépasse largement le cadre de mes obligations contractuelles.",
      "tes → Tes arguments, bien qu'audacieux, reposent sur une logique dont on ne saurait contester la cohérence.",
      "sa → Sa maîtrise exceptionnelle du sujet lui confère une autorité naturelle que nul ne songea jamais à remettre en question.",
      "notre → Notre responsabilité collective est d'œuvrer sans relâche à la préservation d'un environnement viable pour les générations futures.",
      "vos → Vos contributions ont indéniablement enrichi la réflexion collective et orienté nos décisions dans la bonne direction.",
      "leurs → Leurs efforts conjugués ont permis d'aboutir à un accord dont la portée historique ne fait aucun doute."
    ],
    "shortDevoir": [
      "mon → Mon collègue présente le projet ce matin.",
      "tes → Tes idées sont toujours pertinentes et bien argumentées.",
      "sa → Sa maîtrise du sujet impressionne tous ses collègues.",
      "notre → Notre objectif est d'améliorer la qualité des services.",
      "vos → Vos efforts ont largement contribué au succès du projet.",
      "leurs → Leurs décisions ont eu un impact positif sur l'équipe."
    ]
  },
  {
    "date": "Dimanche 22/2",
    "question": [
      "Écrivez 4 phrases en utilisant les expressions de salutations."
    ],
    "devoir": [
      "Bonjour, permettez-moi de vous souhaiter une excellente journée et de vous exprimer toute ma gratitude pour votre accueil chaleureux.",
      "Bonsoir, je suis ravi de vous retrouver ce soir dans un cadre aussi propice aux échanges fructueux.",
      "Salut ! Ça fait une éternité qu'on ne s'est pas vus — comment tu vas, vraiment ?",
      "Au revoir et prenez bien soin de vous ; j'espère sincèrement que nous aurons l'occasion de nous revoir prochainement."
    ],
    "shortDevoir": [
      "Bonjour, je suis ravi de vous rencontrer enfin.",
      "Bonsoir, j'espère que votre journée s'est bien passée.",
      "Salut, ça fait longtemps qu'on ne s'est pas vus !",
      "Au revoir et bonne continuation dans vos projets."
    ]
  },
  {
    "date": "Lundi 23/2",
    "question": [
      "Mettez ces verbes dans une phrase (conjuguez au présent) : travailler, manger, faire, changer, louer, penser, voyager, commencer (avec nous)."
    ],
    "devoir": [
      "travailler → Je travaille dans un environnement intellectuellement stimulant qui me pousse à me surpasser en permanence.",
      "manger → Elle mange avec discernement, privilégiant une alimentation équilibrée qui reflète ses convictions écologiques.",
      "faire → Il fait preuve d'une détermination sans faille face aux obstacles qui jalonnent son parcours.",
      "changer → Le monde change à une vitesse vertigineuse, ce qui exige une capacité d'adaptation constante.",
      "louer → Nous louons les mérites d'une approche collaborative qui favorise l'émergence de solutions innovantes.",
      "penser → Je pense qu'une réflexion approfondie est indispensable avant de prendre une décision aussi lourde de conséquences.",
      "voyager → Voyager permet d'élargir considérablement ses horizons et de remettre en perspective ses propres certitudes.",
      "commencer → Nous commençons à percevoir les premiers signes encourageants d'une transformation profonde de nos pratiques."
    ],
    "shortDevoir": [
      "travailler → Je travaille dans le secteur de la finance depuis cinq ans.",
      "manger → Elle mange équilibré pour maintenir une bonne santé.",
      "faire → Il fait preuve d'une grande rigueur dans son travail.",
      "changer → Le marché change rapidement et exige une grande adaptabilité.",
      "louer → Nous louons un appartement en plein centre-ville.",
      "penser → Je pense que cette solution est la plus appropriée.",
      "voyager → Elle voyage souvent en Europe pour ses missions professionnelles.",
      "commencer → Nous commençons la réunion à l'heure prévue."
    ]
  },
  {
    "date": "Mardi 24/2",
    "question": [
      "Mettez ces verbes dans une phrase (conjuguez au présent) : venir, aller, prendre, être, avoir, faire, finir, réussir, grandir."
    ],
    "devoir": [
      "venir → Je viens de réaliser à quel point la persévérance constitue le fondement de toute réussite durable.",
      "aller → Elle va au-delà des attentes, dépassant systématiquement les objectifs qui lui sont assignés.",
      "prendre → Il prend soin de peser chaque mot avant de s'exprimer, conscient de l'impact que ses paroles peuvent avoir.",
      "être → Nous sommes convaincus que la diversité des points de vue enrichit inévitablement la qualité des décisions collectives.",
      "avoir → J'ai la certitude que l'éducation demeure le levier le plus puissant de transformation sociale.",
      "faire → Faire preuve de créativité dans l'adversité est une compétence que peu de personnes possèdent naturellement.",
      "finir → Elle finit toujours ce qu'elle commence, une qualité rare qui force le respect de tous ses collaborateurs.",
      "réussir → Il réussit là où beaucoup échouent, non par chance, mais grâce à une discipline exemplaire.",
      "grandir → On grandit véritablement non pas dans les moments de confort, mais dans ceux qui nous confrontent à nos limites."
    ],
    "shortDevoir": [
      "venir → Je viens de terminer une formation très enrichissante.",
      "aller → Elle va au bureau à pied chaque matin.",
      "prendre → Il prend le temps d'analyser chaque situation avec soin.",
      "être → Nous sommes convaincus que ce projet va réussir.",
      "avoir → J'ai confiance en la capacité de mon équipe.",
      "faire → Elle fait du sport trois fois par semaine.",
      "finir → Il finit toujours ses tâches avant la date limite.",
      "réussir → Elle réussit grâce à sa discipline et sa persévérance.",
      "grandir → On grandit en affrontant ses difficultés avec courage."
    ]
  },
  {
    "date": "Jeudi 26/2",
    "question": [
      "Mettez ces verbes dans une phrase (conjuguez au présent) : saisir, agir, boire, sortir, croire, choisir."
    ],
    "devoir": [
      "saisir → Elle saisit chaque opportunité avec une acuité remarquable, transformant les circonstances les plus anodines en tremplins vers la réussite.",
      "agir → Il est impératif d'agir avec discernement lorsque les enjeux dépassent le seul cadre personnel.",
      "boire → Elle boit ses paroles avec une avidité qui témoigne de sa soif insatiable de connaissance.",
      "sortir → Il sort des sentiers battus avec une audace qui force l'admiration, même de ses détracteurs les plus acharnés.",
      "croire → Je crois fermement que la solidarité constitue l'une des valeurs cardinales d'une société épanouie.",
      "choisir → Choisir, c'est renoncer ; or, c'est précisément dans ce renoncement que réside la véritable liberté."
    ],
    "shortDevoir": [
      "saisir → Elle saisit chaque opportunité qui se présente à elle.",
      "agir → Il agit toujours avec prudence et discernement.",
      "boire → Elle boit du café chaque matin avant de commencer à travailler.",
      "sortir → Il sort des idées originales lors de chaque réunion créative.",
      "croire → Je crois fermement en la valeur du travail d'équipe.",
      "choisir → Elle choisit ses mots avec soin pour éviter tout malentendu."
    ]
  },
  {
    "date": "Samedi 28/2",
    "question": [
      "Mettez ces verbes dans une phrase (conjuguez au présent) : attendre, mettre, conduire, partir, vouloir."
    ],
    "devoir": [
      "attendre → J'attends avec une impatience mêlée d'appréhension les résultats de cette évaluation déterminante.",
      "mettre → Elle met un soin particulier à rédiger ses rapports, consciente que la forme conditionne souvent la réception du fond.",
      "conduire → Il conduit ses équipes avec une vision claire et une autorité bienveillante qui suscitent un engagement sincère.",
      "partir → Partir à l'aventure sans filet de sécurité requiert un courage que seuls les esprits vraiment libres sont capables de mobiliser.",
      "vouloir → Je veux croire que les efforts consentis aujourd'hui porteront leurs fruits dans un avenir que j'espère proche."
    ],
    "shortDevoir": [
      "attendre → J'attends les résultats de l'analyse avec impatience.",
      "mettre → Elle met beaucoup de soin dans la rédaction de ses rapports.",
      "conduire → Il conduit son équipe vers des objectifs ambitieux.",
      "partir → Elle part en mission à l'étranger la semaine prochaine.",
      "vouloir → Je veux améliorer mon niveau de français de façon significative."
    ]
  },
  {
    "date": "Mardi 3 mars",
    "question": [
      "Mettez ces verbes dans une phrase (conjuguez au présent) : se réveiller, se brosser, se préparer, s'habiller, se lever, se dépêcher, se laver."
    ],
    "devoir": [
      "se réveiller → Je me réveille chaque matin avec la conviction renouvelée que la journée qui commence recèle des possibilités infinies.",
      "se brosser → Elle se brosse les dents avec une minutie qui reflète l'attention qu'elle porte à chaque détail de son quotidien.",
      "se préparer → Il se prépare mentalement pendant des heures avant chaque intervention publique d'envergure.",
      "s'habiller → Elle s'habille avec un sens de l'élégance qui trahit une connaissance approfondie des codes vestimentaires.",
      "se lever → Je me lève à l'aube, persuadé que ces heures de silence sont les plus propices à la réflexion créatrice.",
      "se dépêcher → Il se dépêche sans jamais donner l'impression de précipitation, une aptitude qui force l'admiration.",
      "se laver → Se laver les mains avant de cuisiner est un geste aussi simple qu'indispensable à la préservation de la santé collective."
    ],
    "shortDevoir": [
      "se réveiller → Je me réveille à six heures chaque matin sans réveil.",
      "se brosser → Elle se brosse les dents après chaque repas.",
      "se préparer → Il se prépare la veille pour ne rien oublier le lendemain.",
      "s'habiller → Elle s'habille avec élégance pour chaque réunion importante.",
      "se lever → Je me lève tôt pour profiter du calme du matin.",
      "se dépêcher → Il se dépêche pour ne pas manquer son train.",
      "se laver → Je me lave les mains avant chaque repas."
    ]
  },
  {
    "date": "Samedi 7/3",
    "question": [
      "Écrivez 4 phrases avec : « Ne… Pas »."
    ],
    "devoir": [
      "Je ne suis pas de ceux qui capitulent face à l'adversité, aussi redoutable soit-elle.",
      "Elle ne dissimule pas ses convictions derrière un vernis de conformisme qui trahirait son intégrité.",
      "Il ne faut pas sous-estimer la capacité de l'être humain à se réinventer face aux bouleversements les plus profonds.",
      "Nous ne pouvons pas rester indifférents aux inégalités structurelles qui compromettent la cohésion de notre société."
    ],
    "shortDevoir": [
      "Je ne accepte pas les compromis qui nuisent à la qualité du travail.",
      "Elle ne révèle pas ses stratégies avant le moment opportun.",
      "Il ne faut pas négliger les détails dans un projet de cette envergure.",
      "Nous ne pouvons pas ignorer les signaux d'alerte que nous observons."
    ]
  },
  {
    "date": "Dimanche 8/3",
    "question": [
      "Écrivez 2 phrases avec un COD et 2 phrases avec un COI."
    ],
    "devoir": [
      "COD 1 → Elle rédige un rapport exhaustif qui fera office de référence pour l'ensemble des équipes impliquées dans le projet.",
      "COD 2 → Il contemple les conséquences de sa décision avec une lucidité qui témoigne d'une maturité intellectuelle peu commune.",
      "COI 1 → Je parle à mes collaborateurs avec une franchise tempérée par le respect que je leur dois en toutes circonstances.",
      "COI 2 → Elle répond à toutes les objections avec une argumentation si rigoureuse qu'elle laisse ses interlocuteurs sans voix."
    ],
    "shortDevoir": [
      "COD 1 → Elle rédige un rapport détaillé sur les résultats du trimestre.",
      "COD 2 → Il analyse les données avec une grande précision.",
      "COI 1 → Je parle à mon responsable de ce projet chaque semaine.",
      "COI 2 → Elle répond à toutes les questions avec clarté et concision."
    ]
  },
  {
    "date": "Mardi 10/3",
    "question": [
      "Écrivez 6 phrases avec les articles contractés : de, au, des, aux, de la, à la, du, à l', de l'."
    ],
    "devoir": [
      "de → La qualité de son travail dépasse largement les attentes formulées lors de sa prise de poste.",
      "au → Il s'adresse au directeur général avec une assurance tranquille qui témoigne de sa parfaite maîtrise du sujet.",
      "des → Elle tire des conclusions d'une finesse analytique remarquable à partir de données qui auraient échappé à d'autres.",
      "aux → Elle s'adresse aux membres du jury avec une éloquence naturelle qui capte instantanément leur attention.",
      "de la → Il fait preuve de la patience nécessaire pour accompagner ses équipes dans les périodes de transition les plus difficiles.",
      "à la → Elle aspire à la reconnaissance non par vanité, mais parce qu'elle y voit une validation de ses efforts constants.",
      "du → La profondeur du débat suscité par cette proposition témoigne de sa pertinence et de son caractère novateur.",
      "à l' → Elle consacre une grande partie de son temps à l'élaboration de stratégies innovantes pour les défis à venir.",
      "de l' → La qualité de l'environnement de travail influe considérablement sur la productivité et le bien-être des employés."
    ],
    "shortDevoir": [
      "de → La qualité de son travail est reconnue par tous.",
      "au → Il s'adresse au directeur avec assurance.",
      "des → Elle tire des conclusions pertinentes de ses recherches.",
      "aux → Elle parle aux membres de l'équipe avec respect.",
      "de la → Il fait preuve de la patience nécessaire dans ce rôle.",
      "à la → Elle aspire à la réussite par le mérite et l'effort.",
      "du → La profondeur du débat révèle la richesse des points de vue.",
      "à l' → Elle consacre son énergie à l'amélioration continue.",
      "de l' → La qualité de l'environnement de travail influence la productivité."
    ]
  },
  {
    "date": "Jeudi 12/3",
    "question": [
      "Écrivez 6 phrases avec : ce, cet, cette, ces."
    ],
    "devoir": [
      "ce → Ce projet ambitieux requiert une coordination sans faille entre des équipes aux compétences complémentaires.",
      "cet → Cet homme d'exception a consacré l'intégralité de sa carrière à la défense des causes les plus nobles.",
      "cette → Cette analyse rigoureuse met en lumière des failles structurelles que personne n'avait osé pointer auparavant.",
      "ces → Ces découvertes scientifiques majeures ouvrent des perspectives insoupçonnées pour la médecine de demain.",
      "ce → Ce qu'il accomplit chaque jour avec une discrétion exemplaire mérite bien davantage que la simple reconnaissance de ses pairs.",
      "cette → Cette décision, bien qu'impopulaire à court terme, s'avérera déterminante pour la pérennité de l'organisation."
    ],
    "shortDevoir": [
      "ce → Ce projet exige une coordination rigoureuse entre toutes les équipes.",
      "cet → Cet homme a consacré sa carrière au service de l'intérêt général.",
      "cette → Cette analyse révèle des tendances que peu avaient anticipées.",
      "ces → Ces résultats confirment la pertinence de notre approche.",
      "ce → Ce choix s'avérera déterminant pour l'avenir de l'entreprise.",
      "cette → Cette décision a été prise après une réflexion approfondie."
    ]
  },
  {
    "date": "Vendredi 13/3",
    "question": [
      "Écrivez des phrases avec ces verbes : savoir, conduire, pouvoir, se souvenir, se taire, s'évanouir, aimer, adorer, préférer."
    ],
    "devoir": [
      "savoir → Elle sait naviguer avec une aisance déconcertante dans les eaux troubles de la politique institutionnelle.",
      "conduire → Il conduit ses négociations avec une habileté diplomatique qui force l'admiration de ses adversaires eux-mêmes.",
      "pouvoir → La faculté de pouvoir reconnaître ses erreurs est l'une des marques les plus sûres d'une véritable maturité.",
      "se souvenir → Elle se souvient avec une précision troublante de chaque détail des conversations qui ont jalonné sa carrière.",
      "se taire → Savoir se taire au bon moment est un art que peu de personnes maîtrisent avec autant de grâce qu'elle.",
      "s'évanouir → Ses certitudes s'évanouissent progressivement au contact d'une réalité bien plus complexe qu'il ne l'avait imaginé.",
      "aimer → J'aime profondément cette langue qui me révèle chaque jour de nouvelles nuances de la pensée humaine.",
      "adorer → Elle adore les défis qui semblent insurmontables, car c'est précisément dans ces moments qu'elle se surpasse.",
      "préférer → Il préfère la sobriété à l'ostentation, convaincu que l'élégance véritable réside dans la retenue."
    ],
    "shortDevoir": [
      "savoir → Elle sait gérer les situations difficiles avec sang-froid.",
      "conduire → Il conduit ses négociations avec habileté et diplomatie.",
      "pouvoir → Je peux vous assurer que les résultats seront au rendez-vous.",
      "se souvenir → Elle se souvient de chaque détail important des réunions.",
      "se taire → Il sait se taire au bon moment, ce qui est une vraie qualité.",
      "s'évanouir → Ses doutes s'évanouissent dès qu'elle se met au travail.",
      "aimer → J'aime les défis qui poussent à se surpasser.",
      "adorer → Elle adore les projets innovants qui sortent de l'ordinaire.",
      "préférer → Il préfère la clarté à la complexité inutile."
    ]
  },
  {
    "date": "Samedi 14/3",
    "question": [
      "Conjuguez chaque verbe au futur simple ensuite mettez-le dans une phrase : savoir, venir, pleuvoir, avoir, être, aller, faire."
    ],
    "devoir": [
      "savoir (saura) → Elle saura tirer parti de chaque expérience, si éprouvante soit-elle, pour en faire une source de croissance personnelle.",
      "venir (viendra) → Il viendra le moment où nos efforts patients porteront enfin les fruits que nous espérons depuis si longtemps.",
      "pleuvoir (pleuvra) → Il pleuvra sans doute sur nos projets des critiques acerbes, mais rien ne nous détournera de notre objectif.",
      "avoir (aura) → Elle aura toujours la sagesse de consulter ceux dont l'expérience dépasse la sienne avant de trancher.",
      "être (sera) → Ce sera une épreuve redoutable, mais je suis convaincu que nous en sortirons grandis et plus solidaires.",
      "aller (ira) → Il ira jusqu'au bout de ses convictions, quels que soient les obstacles qui se dresseront sur son chemin.",
      "faire (fera) → Elle fera de ce défi apparemment insurmontable une vitrine de sa créativité et de sa résilience."
    ],
    "shortDevoir": [
      "savoir (saura) → Elle saura trouver la meilleure solution en temps voulu.",
      "venir (viendra) → Le moment viendra où nos efforts seront récompensés.",
      "pleuvoir (pleuvra) → Il pleuvra sans doute des critiques, mais notre position est solide.",
      "avoir (aura) → Elle aura toujours l'appui de son équipe dans les moments difficiles.",
      "être (sera) → Ce sera une étape décisive dans notre développement.",
      "aller (ira) → Il ira jusqu'au bout de ses engagements, quoi qu'il arrive.",
      "faire (fera) → Elle fera de ce défi une opportunité de croissance."
    ]
  },
  {
    "date": "Dimanche 15/3",
    "question": [
      "Conjuguez chaque verbe au futur simple ensuite mettez-le dans une phrase : finir, venir, tenir, devoir, voyager, pouvoir, prendre."
    ],
    "devoir": [
      "finir (finira) → Elle finira ce projet avec le même soin méticuleux qu'elle a consacré à chacune de ses étapes.",
      "venir (viendrons) → Nous viendrons à bout de ces difficultés à condition de maintenir une cohésion sans faille au sein de l'équipe.",
      "tenir (tiendra) → Il tiendra sa promesse envers et contre tout, car sa parole constitue le socle de sa crédibilité.",
      "devoir (devra) → Elle devra faire preuve d'une diplomatie exceptionnelle pour concilier des intérêts aussi divergents.",
      "voyager (voyagerons) → Nous voyagerons à travers des contrées inexplorées de la connaissance humaine au fil de cette formation remarquable.",
      "pouvoir (pourra) → Il ne pourra atteindre ses objectifs ambitieux qu'en s'entourant des compétences complémentaires aux siennes.",
      "prendre (prendront) → Ils prendront conscience, trop tardivement peut-être, de l'ampleur des conséquences de leur inaction."
    ],
    "shortDevoir": [
      "finir (finira) → Elle finira ce dossier avec le même sérieux qu'à son habitude.",
      "venir (viendrons) → Nous viendrons à bout de ces obstacles en travaillant ensemble.",
      "tenir (tiendra) → Il tiendra parole, c'est une certitude pour tous ceux qui le connaissent.",
      "devoir (devra) → Elle devra faire preuve de diplomatie dans cette négociation délicate.",
      "voyager (voyagerons) → Nous voyagerons à travers plusieurs pays lors de cette mission.",
      "pouvoir (pourra) → Il ne pourra réussir qu'en s'appuyant sur des compétences complémentaires.",
      "prendre (prendront) → Ils prendront conscience des enjeux lorsque les résultats arriveront."
    ]
  },
  {
    "date": "Mardi 17/3",
    "question": [
      "Conjuguez chaque verbe au futur proche ensuite mettez-le dans une phrase : sortir, manger, changer, aller, rencontrer."
    ],
    "devoir": [
      "sortir → Elle va sortir de sa zone de confort avec la détermination de celle qui sait que la vraie croissance exige l'inconfort.",
      "manger → Nous allons manger ensemble pour célébrer dignement la conclusion d'un partenariat qui nous tient tous à cœur.",
      "changer → Ce tournant décisif va changer la trajectoire de l'entreprise d'une manière que peu auraient osé anticiper.",
      "aller → Il va aller de l'avant, porté par une vision claire et une volonté que rien ne semble en mesure d'entamer.",
      "rencontrer → Je vais rencontrer des personnalités dont l'influence sur mon parcours sera, j'en suis persuadé, considérable."
    ],
    "shortDevoir": [
      "sortir → Elle va sortir de sa zone de confort pour développer de nouvelles compétences.",
      "manger → Nous allons manger ensemble pour fêter la fin du projet.",
      "changer → Ce plan va changer notre façon de travailler de manière positive.",
      "aller → Il va aller de l'avant avec détermination malgré les obstacles.",
      "rencontrer → Je vais rencontrer des partenaires stratégiques lors de ce salon."
    ]
  },
  {
    "date": "Lundi 23/3",
    "question": [
      "Conjuguez chaque verbe au passé composé ensuite mettez-le dans une phrase : manger, nager, changer, aller, rentrer, finir, prendre, faire."
    ],
    "devoir": [
      "manger (a mangé) → Il a mangé avec une lenteur délibérée, savourant chaque bouchée comme si c'était la dernière d'un festin mémorable.",
      "nager (a nagé) → Elle a nagé contre le courant toute sa vie, et c'est précisément ce qui l'a conduite là où elle se trouve aujourd'hui.",
      "changer (a changé) → Cette expérience fondatrice a changé sa façon d'appréhender le monde de manière irréversible.",
      "aller (est allé) → Il est allé au-delà de ce que quiconque aurait pu raisonnablement espérer de lui dans ces circonstances.",
      "rentrer (est rentrée) → Elle est rentrée transformée d'un voyage qui a bouleversé ses certitudes les plus ancrées.",
      "finir (a fini) → Il a fini par comprendre que la persévérance, bien plus que le talent brut, est le véritable moteur du succès.",
      "prendre (a pris) → Elle a pris la mesure des enjeux avec une acuité qui a impressionné jusqu'à ses interlocuteurs les plus exigeants.",
      "faire (a fait) → Il a fait preuve d'une intégrité exemplaire dans une situation où la compromission aurait été si aisée."
    ],
    "shortDevoir": [
      "manger (a mangé) → Il a mangé rapidement avant de reprendre le travail.",
      "nager (a nagé) → Elle a nagé contre le courant toute sa vie professionnelle.",
      "changer (a changé) → Cette expérience a changé sa vision du management.",
      "aller (est allé) → Il est allé au-delà des attentes lors de ce projet.",
      "rentrer (est rentrée) → Elle est rentrée transformée de ce voyage professionnel.",
      "finir (a fini) → Il a fini par trouver la solution après de longues recherches.",
      "prendre (a pris) → Elle a pris les bonnes décisions dans un contexte très difficile.",
      "faire (a fait) → Il a fait preuve d'une intégrité exemplaire tout au long du projet."
    ]
  },
  {
    "date": "Lundi 13/4",
    "question": [
      "Racontez ce que vous avez fait la semaine dernière en utilisant (4 ou 5 phrases) : le passé composé + imparfait."
    ],
    "devoir": [
      "La semaine dernière a été particulièrement riche en émotions et en apprentissages de toutes sortes.",
      "Lundi, alors que je me préparais pour une réunion cruciale, j'ai reçu une nouvelle qui a bouleversé l'ordre de mes priorités.",
      "Mercredi, j'ai assisté à une conférence sur l'intelligence artificielle qui m'a ouvert des perspectives auxquelles je n'avais jamais osé penser.",
      "Pendant que je prenais des notes, je réalisais combien notre domaine évoluait à une vitesse qui rendait toute certitude précaire.",
      "Vendredi, épuisé mais profondément enrichi, j'ai décidé de consigner toutes ces réflexions dans un carnet qui deviendra peut-être un jour la matière d'un essai."
    ],
    "shortDevoir": [
      "La semaine dernière a été très productive sur le plan professionnel.",
      "Lundi, alors que je préparais une présentation importante, j'ai reçu de très bonnes nouvelles.",
      "Mercredi, j'ai assisté à une conférence passionnante sur les nouvelles technologies.",
      "Pendant que j'écoutais les intervenants, je réalisais combien le domaine évoluait rapidement.",
      "Vendredi, j'ai décidé de noter toutes mes réflexions pour m'en inspirer dans mes prochains projets."
    ]
  },
  {
    "date": "Mercredi 15/4",
    "question": [
      "Écrivez 6 phrases au présent avec : ne… plus, ne… jamais, ne… personne, ne… rien, ne… aucun, ne… pas."
    ],
    "devoir": [
      "ne… plus → Je ne me laisse plus influencer par des opinions superficielles qui ne reposent sur aucun fondement solide.",
      "ne… jamais → Elle ne trahit jamais la confiance que ses collaborateurs ont placée en elle, quelle que soit la pression exercée.",
      "ne… personne → Dans ce vaste projet, il ne consulte personne sans s'être d'abord forgé une opinion documentée sur la question.",
      "ne… rien → Il ne laisse rien au hasard, orchestrant chaque détail avec une précision qui confine au perfectionnisme.",
      "ne… aucun → Elle n'éprouve aucune difficulté à s'adapter à des environnements radicalement différents de celui où elle a évolué.",
      "ne… pas → Nous ne saurions pas tolérer des comportements qui compromettent la cohésion et l'intégrité de notre collectif."
    ],
    "shortDevoir": [
      "ne… plus → Je ne me laisse plus influencer par des opinions sans fondement.",
      "ne… jamais → Elle ne trahit jamais la confiance que ses collègues lui accordent.",
      "ne… personne → Il ne consulte personne sans s'être d'abord bien documenté.",
      "ne… rien → Elle ne laisse rien au hasard dans l'organisation de ses projets.",
      "ne… aucun → Il n'éprouve aucune difficulté à s'adapter à de nouveaux environnements.",
      "ne… pas → Nous ne saurions pas tolérer des comportements contraires à nos valeurs."
    ]
  },
  {
    "date": "Jeudi 16/4",
    "question": [
      "Écrivez 6 phrases avec : précisément, depuis, lentement, alors, partout, tellement."
    ],
    "devoir": [
      "précisément → C'est précisément cette capacité à identifier les leviers de changement qui distingue les vrais leaders des simples gestionnaires.",
      "depuis → Depuis qu'elle a intégré cette organisation, elle n'a cessé d'insuffler une dynamique nouvelle qui a revitalisé l'ensemble des équipes.",
      "lentement → La confiance se construit lentement, au fil d'actes concrets et cohérents, et se perd en un instant d'imprudence.",
      "alors → Alors que le monde s'accélérait autour de lui, il choisissait délibérément de ralentir pour mieux appréhender l'essentiel.",
      "partout → Son influence se fait sentir partout où des décisions stratégiques sont prises, bien qu'il reste lui-même dans l'ombre.",
      "tellement → L'enjeu est tellement crucial qu'aucune approximation ne saurait être tolérée à quelque stade du processus que ce soit."
    ],
    "shortDevoir": [
      "précisément → C'est précisément cette qualité qui distingue les bons managers des grands leaders.",
      "depuis → Depuis son arrivée, elle a insufflé une nouvelle dynamique à toute l'équipe.",
      "lentement → La confiance se construit lentement mais se perd très rapidement.",
      "alors → Alors que tout semblait compromis, il a trouvé une solution inattendue.",
      "partout → Son influence positive se fait sentir partout dans l'organisation.",
      "tellement → L'enjeu est tellement crucial qu'aucune erreur ne peut être tolérée."
    ]
  },
  {
    "date": "Dimanche 19/4",
    "question": [
      "Écrivez 6 phrases avec : sérieusement, rapidement, toutefois, maintenant, fortement, totalement."
    ],
    "devoir": [
      "sérieusement → Il prend sérieusement en considération chaque objection formulée, y voyant une opportunité d'affiner sa propre réflexion.",
      "rapidement → Elle a rapidement saisi que la clé du succès résidait non dans la vitesse d'exécution, mais dans la pertinence des choix effectués.",
      "toutefois → La proposition est séduisante ; toutefois, elle mérite d'être soumise à un examen critique rigoureux avant toute validation.",
      "maintenant → Maintenant que les bases solides ont été posées, il est temps de passer à une phase d'expansion ambitieuse et maîtrisée.",
      "fortement → Je suis fortement convaincu que l'investissement dans la formation constitue le meilleur levier de performance à long terme.",
      "totalement → Elle s'est totalement réinventée au contact d'expériences qui ont radicalement transformé sa vision du monde et d'elle-même."
    ],
    "shortDevoir": [
      "sérieusement → Il prend sérieusement en compte chaque retour de ses clients.",
      "rapidement → Elle a rapidement identifié les points faibles de la stratégie.",
      "toutefois → La proposition est intéressante ; toutefois, elle nécessite un examen approfondi.",
      "maintenant → Maintenant que les bases sont posées, nous pouvons passer à l'action.",
      "fortement → Je suis fortement convaincu que la formation est un investissement essentiel.",
      "totalement → Elle s'est totalement investie dans ce projet depuis le premier jour."
    ]
  },
  {
    "date": "Mercredi 22/4",
    "question": [
      "Écrivez 5 phrases en utilisant les articles partitifs : de la, de l', du."
    ],
    "devoir": [
      "de la → Elle fait preuve de la plus grande discrétion lorsqu'il s'agit de sujets qui touchent à la sphère privée de ses collaborateurs.",
      "de la → Il faut de la persévérance, certes, mais aussi de la lucidité pour distinguer l'obstination stérile de la ténacité productive.",
      "de l' → Il dégage de l'assurance sans jamais sombrer dans l'arrogance, un équilibre subtil que peu parviennent à maintenir durablement.",
      "du → Elle a du caractère, une qualité précieuse dans un univers professionnel qui valorise trop souvent la conformité au détriment de l'authenticité.",
      "du → Il tire du sens de chacune de ses expériences, même les plus douloureuses, les transformant en socle de sa sagesse personnelle."
    ],
    "shortDevoir": [
      "de la → Elle fait preuve de la rigueur nécessaire dans chacune de ses missions.",
      "de la → Il faut de la patience pour obtenir des résultats durables.",
      "de l' → Il dégage de l'assurance sans jamais tomber dans l'arrogance.",
      "du → Elle a du talent et sait le mettre au service de son équipe.",
      "du → Il tire du sens de chaque expérience, même des plus difficiles."
    ]
  },
  {
    "date": "Jeudi 23/4",
    "question": [
      "Écrivez 5 phrases avec : propre, grand, jolie, intelligent, rouge."
    ],
    "devoir": [
      "propre → Sa réputation, longtemps ternie par des malentendus, est désormais propre de toute ambiguïté grâce à ses actes exemplaires.",
      "grand → Il nourrit de grandes ambitions, non par démesure, mais parce qu'il croit profondément en la capacité humaine à se transcender.",
      "jolie → Cette jolie formule masque une pensée d'une complexité et d'une profondeur qui ne se révèlent qu'à la relecture attentive.",
      "intelligent → Un discours intelligent ne cherche pas à éblouir mais à éclairer, à convaincre par la force de la raison plutôt que par l'éclat des mots.",
      "rouge → Son visage vira au rouge sous l'effet d'une émotion qu'il s'efforçait visiblement de contenir derrière une façade de sérénité."
    ],
    "shortDevoir": [
      "propre → Sa réputation est désormais propre de toute ambiguïté.",
      "grand → Il a de grandes ambitions et les moyens de les réaliser.",
      "jolie → Cette jolie formule résume parfaitement notre vision stratégique.",
      "intelligent → Un discours intelligent convainc par la logique, pas par l'émotion.",
      "rouge → Son visage est devenu rouge sous l'effet d'une émotion sincère."
    ]
  },
  {
    "date": "Dimanche 25/4",
    "question": [
      "Écrivez 5 phrases en utilisant 5 adjectifs de votre choix."
    ],
    "devoir": [
      "remarquable → Son parcours est remarquable à plus d'un titre, illustrant à merveille ce que la volonté peut accomplir face à l'adversité.",
      "complexe → La situation est d'une complexité telle qu'elle exige une analyse pluridisciplinaire avant toute tentative de résolution.",
      "indispensable → La confiance mutuelle est indispensable à la construction d'une collaboration durable et véritablement productive.",
      "subtil → Le message qu'il cherche à transmettre est subtil, et seuls ceux qui savent lire entre les lignes en saisissent toute la portée.",
      "déterminant → Ce choix apparemment anodin s'avérera déterminant dans la trajectoire professionnelle qui s'ouvre devant elle."
    ],
    "shortDevoir": [
      "remarquable → Son parcours est remarquable et inspire tous ses collègues.",
      "complexe → La situation est complexe et exige une analyse pluridisciplinaire.",
      "indispensable → La confiance est indispensable à toute collaboration réussie.",
      "subtil → Son message est subtil mais très efficace.",
      "déterminant → Ce choix sera déterminant pour l'avenir de l'équipe."
    ]
  },
  {
    "date": "Lundi 27/4",
    "question": [
      "Écrivez 6 phrases au passé composé avec : ne… plus, ne… nulle part, ne… personne, ne… rien, ne… aucun."
    ],
    "devoir": [
      "ne… plus → Elle n'a plus accepté les compromis qui auraient jadis sacrifié ses convictions sur l'autel de la tranquillité.",
      "ne… nulle part → Il n'a trouvé nulle part ailleurs la sérénité qu'il avait pourtant cherchée dans des contrées lointaines et méconnues.",
      "ne… personne → Pendant toute la durée de la crise, elle n'a consulté personne sans au préalable s'être assurée de la confidentialité requise.",
      "ne… rien → Il n'a rien laissé transparaître de ses doutes intérieurs, maintenant une façade impénétrable face à ses équipes désemparées.",
      "ne… aucun → Elle n'a éprouvé aucun regret face à une décision dont elle avait, en son for intérieur, mesuré toutes les implications.",
      "ne… aucun → Il n'a accordé aucun crédit aux rumeurs malveillantes qui cherchaient à ternir une réputation durement bâtie."
    ],
    "shortDevoir": [
      "ne… plus → Elle n'a plus accepté les compromis contraires à ses valeurs.",
      "ne… nulle part → Il n'a trouvé nulle part la sérénité qu'il recherchait.",
      "ne… personne → Elle n'a consulté personne sans garantir la confidentialité requise.",
      "ne… rien → Il n'a rien laissé transparaître de ses doutes face à son équipe.",
      "ne… aucun → Elle n'a éprouvé aucun regret après cette décision difficile.",
      "ne… aucun → Il n'a accordé aucun crédit aux rumeurs qui circulaient."
    ]
  },
  {
    "date": "Mercredi 29/4",
    "question": [
      "Qu'est-ce que vous comptez faire le week-end prochain ? Écrivez un petit paragraphe en utilisant le futur simple et le futur proche."
    ],
    "devoir": [
      "Le week-end prochain s'annonce comme une parenthèse bien méritée après des semaines d'une intensité remarquable.",
      "Samedi matin, je vais consacrer quelques heures à la lecture d'un essai philosophique qui me tient à cœur depuis longtemps.",
      "L'après-midi, je retrouverai des amis que je n'ai pas vus depuis des semaines et nous débattrons, comme à notre habitude, de sujets qui dépassent largement le cadre du quotidien.",
      "Dimanche, je vais profiter du silence de l'aube pour rédiger les premières lignes d'un projet d'écriture qui germait en moi depuis des mois.",
      "Ce week-end sera, je l'espère, à la hauteur de cette aspiration profonde à la reconquête de soi que le tourbillon du quotidien rend si difficile à satisfaire."
    ],
    "shortDevoir": [
      "Le week-end prochain sera une vraie pause bien méritée.",
      "Samedi matin, je vais lire un essai qui m'intéresse depuis longtemps.",
      "L'après-midi, je retrouverai des amis pour un déjeuner convivial.",
      "Dimanche, je vais profiter du calme pour avancer sur mon projet d'écriture.",
      "Ce week-end me permettra de recharger mes batteries avant la semaine suivante."
    ]
  },
  {
    "date": "Jeudi 30/4",
    "question": [
      "Donnez-moi 2 phrases avec le conditionnel présent et 2 phrases avec le conditionnel passé en exprimant une condition, un souhait, un reproche et un regret."
    ],
    "devoir": [
      "Conditionnel présent — condition → Si l'on investissait davantage dans la formation continue, les entreprises verraient leur compétitivité s'améliorer de façon spectaculaire.",
      "Conditionnel présent — souhait → Je voudrais pouvoir consacrer davantage de temps à ces échanges qui nourrissent mon intelligence autant qu'ils enrichissent mon âme.",
      "Conditionnel passé — reproche → Tu aurais dû m'informer de cette évolution bien plus tôt, ce qui nous aurait évité des semaines de malentendus coûteux.",
      "Conditionnel passé — regret → J'aurais souhaité avoir eu l'occasion de lui exprimer ma gratitude avant que les circonstances ne nous séparent définitivement."
    ],
    "shortDevoir": [
      "Conditionnel présent — condition → Si l'on investissait davantage en formation, les résultats s'amélioreraient nettement.",
      "Conditionnel présent — souhait → Je voudrais consacrer plus de temps à ces échanges si enrichissants.",
      "Conditionnel passé — reproche → Tu aurais dû m'informer plus tôt pour éviter ces semaines de malentendu.",
      "Conditionnel passé — regret → J'aurais aimé lui exprimer ma gratitude avant que nos chemins se séparent."
    ]
  },
  {
    "date": "Samedi 2/5",
    "question": [
      "Écrivez des phrases avec le pronom COD (le, la, les) et le pronom COI (lui, leur)."
    ],
    "devoir": [
      "COD — le → Ce roman, je le lis avec une lenteur volontaire, pour en savourer chaque nuance stylistique sans me laisser emporter par l'intrigue.",
      "COD — la → Cette opportunité, saisissons-la avec intelligence, car elle ne se représentera pas de sitôt dans des conditions aussi favorables.",
      "COD — les → Ces arguments, il les a pesés longuement avant de les intégrer à une démonstration dont la rigueur ne souffre aucune contestation.",
      "COI — lui → Je lui ai transmis mes observations avec toute la diplomatie requise, conscient de la sensibilité du sujet pour lui.",
      "COI — leur → Elle leur a expliqué, avec une pédagogie remarquable, des concepts que beaucoup auraient jugés inaccessibles à ce stade."
    ],
    "shortDevoir": [
      "COD — le → Ce roman, je le lis avec beaucoup de plaisir et d'attention.",
      "COD — la → Cette opportunité, saisissons-la sans hésiter.",
      "COD — les → Ces arguments, il les a bien pesés avant de les présenter.",
      "COI — lui → Je lui ai transmis mes observations avec toute la tact nécessaire.",
      "COI — leur → Elle leur a expliqué les concepts avec une grande clarté."
    ]
  },
  {
    "date": "Lundi 4/5",
    "question": [
      "Écrivez 2 phrases avec le pronom Y / 2 phrases avec le pronom EN / 2 phrases en utilisant EN et Y dans la même phrase."
    ],
    "devoir": [
      "Y — 1 → J'y pense avec une intensité qui me surprend moi-même, comme si cette idée avait pris racine dans les couches les plus profondes de ma réflexion.",
      "Y — 2 → Elle y retourne chaque année, attirée par une atmosphère qui lui rappelle les instants les plus précieux de son enfance.",
      "EN — 1 → Il en parle avec une passion communicative qui finit invariablement par convaincre même les plus sceptiques de ses interlocuteurs.",
      "EN — 2 → J'en ai tiré des enseignements qui ont durablement réorienté ma façon d'aborder les défis professionnels les plus complexes.",
      "EN + Y — 1 → Au musée, j'y ai découvert une exposition temporaire et j'en suis ressorti profondément bouleversé par la force des œuvres présentées.",
      "EN + Y — 2 → Dans cette bibliothèque où j'y passe des heures entières, j'en extrais chaque fois la matière d'une réflexion nouvelle et enrichissante."
    ],
    "shortDevoir": [
      "Y — 1 → J'y pense souvent, tant cette idée m'a marqué.",
      "Y — 2 → Elle y retourne chaque année avec le même enthousiasme.",
      "EN — 1 → Il en parle avec une passion qui convainc son entourage.",
      "EN — 2 → J'en ai tiré des leçons précieuses pour ma carrière.",
      "EN + Y — 1 → Au musée, j'y ai vu une belle exposition et j'en suis ressorti inspiré.",
      "EN + Y — 2 → Dans cette bibliothèque, j'y passe des heures et j'en rapporte toujours de bonnes idées."
    ]
  },
  {
    "date": "Mercredi 6/5",
    "question": [
      "Posez-moi des questions dans le registre formel et courant, ouvert et fermé."
    ],
    "devoir": [
      "Formel + ouvert → Pourriez-vous nous exposer les fondements théoriques sur lesquels repose votre approche pédagogique ?",
      "Formel + fermé → Avez-vous eu l'occasion de confronter vos méthodes à d'autres systèmes éducatifs au cours de votre carrière ?",
      "Courant + ouvert → Qu'est-ce qui vous a donné envie d'enseigner le français à des apprenants de niveaux si différents ?",
      "Courant + fermé → Est-ce que tu penses que la pratique orale est plus importante que la grammaire pour progresser rapidement ?"
    ],
    "shortDevoir": [
      "Formel + ouvert → Pourriez-vous nous exposer les fondements de votre approche pédagogique ?",
      "Formel + fermé → Avez-vous eu l'occasion de confronter vos méthodes à d'autres systèmes éducatifs ?",
      "Courant + ouvert → Qu'est-ce qui vous a donné envie d'enseigner le français ?",
      "Courant + fermé → Est-ce que tu penses que la pratique orale est plus importante que la grammaire ?"
    ]
  },
  {
    "date": "Vendredi 8/5",
    "question": [
      "Posez des questions avec : 1. Quel 2. Comment 3. Quand 4. Où 5. Quelle 6. De quoi 7. Qui 8. Que"
    ],
    "devoir": [
      "Quel → Quel impact les mutations technologiques auront-elles sur les métiers de demain, et comment nous y préparer dès aujourd'hui ?",
      "Comment → Comment parvient-on à maintenir une cohérence entre ses valeurs profondes et les exigences d'un environnement professionnel en perpétuelle mutation ?",
      "Quand → Quand cesserons-nous de traiter les symptômes pour enfin nous attaquer aux causes structurelles des inégalités persistantes ?",
      "Où → Où se situe la frontière entre une exigence légitime de transparence et une intrusion inacceptable dans la vie privée des individus ?",
      "Quelle → Quelle est, selon vous, la qualité la plus déterminante pour réussir dans un monde où les certitudes d'hier deviennent les illusions d'aujourd'hui ?",
      "De quoi → De quoi avons-nous véritablement besoin pour construire une société dans laquelle chacun puisse se réaliser pleinement ?",
      "Qui → Qui, parmi les penseurs contemporains, vous semble le mieux armé pour décrypter les enjeux de notre époque ?",
      "Que → Que nous révèle notre rapport au langage sur la façon dont nous construisons notre identité et notre rapport au monde ?"
    ],
    "shortDevoir": [
      "Quel → Quel impact les nouvelles technologies auront-elles sur nos métiers ?",
      "Comment → Comment maintient-on un équilibre entre ambition et bien-être au travail ?",
      "Quand → Quand cesserons-nous de traiter les symptômes plutôt que les causes ?",
      "Où → Où se situe la frontière entre exigence de performance et respect de la personne ?",
      "Quelle → Quelle est la qualité la plus importante pour réussir dans ce domaine ?",
      "De quoi → De quoi avons-nous réellement besoin pour travailler efficacement ensemble ?",
      "Qui → Qui, selon vous, incarne le mieux le leadership moderne et bienveillant ?",
      "Que → Que révèle notre façon de communiquer sur notre culture d'entreprise ?"
    ]
  },
  {
    "date": "Dimanche 10/5",
    "question": [
      "Écrivez 5 phrases au mode impératif (ordre ou conseil)."
    ],
    "devoir": [
      "Cultivez votre curiosité intellectuelle comme vous cultiveriez un jardin rare : avec patience, constance et une attention bienveillante à chaque signe de croissance.",
      "Ne renoncez jamais à questionner les évidences, car c'est précisément dans ce doute méthodique que réside la véritable pensée critique.",
      "Prenez le temps d'écouter vraiment, non pour répondre, mais pour comprendre ; c'est là l'un des actes les plus généreux que l'on puisse offrir à autrui.",
      "Osez exprimer vos convictions avec clarté et humilité, sans jamais confondre la fermeté de vos idées avec l'inflexibilité de votre jugement.",
      "Gardez toujours à l'esprit que chaque effort consenti aujourd'hui est une graine dont la germination, bien qu'invisible, n'en est pas moins certaine."
    ],
    "shortDevoir": [
      "Cultivez votre curiosité intellectuelle chaque jour sans exception.",
      "Ne renoncez jamais à questionner les évidences que l'on vous présente.",
      "Prenez le temps d'écouter vraiment avant de répondre.",
      "Osez exprimer vos convictions avec clarté et respect.",
      "Gardez toujours à l'esprit que la persévérance mène toujours à la réussite."
    ]
  }
];

var devoirAnswerMode = 'long';

function getDevoirAnswerLines(item){
  if(devoirAnswerMode === 'short') return item.shortDevoir || item.devoir;
  return item.devoir;
}

function setDevoirAnswerMode(mode, btn){
  devoirAnswerMode = mode === 'short' ? 'short' : 'long';
  document.querySelectorAll('.devoir-level-tabs .pill').forEach(function(pill){
    pill.classList.remove('active');
  });
  if(btn) btn.classList.add('active');
  updateDevoirAnswerPanels();
}

function buildDevoirCards(mode){
  return marianneDevoirs.map(function(item, index){
    var questionLines = item.question.map(function(line){
      return '<div class="fr-line">'+escapeHtml(line)+'</div>';
    }).join('');
    var previousMode = devoirAnswerMode;
    devoirAnswerMode = mode;
    var devoirLines = getDevoirAnswerLines(item).map(function(line){
      return '<div class="fr-line">'+escapeHtml(line)+'</div>';
    }).join('');
    devoirAnswerMode = previousMode;
    var num = String(index + 1).padStart(2, '0');
    return '<div class="q-card devoir-card open visible-anim">' +
      '<div class="q-header" onclick="toggleQ(this)">' +
        '<span class="q-num">'+num+'</span>' +
        '<div><div class="q-label">'+escapeHtml(item.date)+'</div><div class="q-text">Devoir '+(index + 1)+' · C1 '+(mode === 'short' ? 'Short' : 'Long')+'</div></div>' +
        '<button class="devoir-share-btn" type="button" onclick="shareDevoirWhatsApp('+index+', event, \''+mode+'\')" aria-label="Partager sur WhatsApp">WhatsApp</button>' +
        '<span class="q-arrow">▾</span>' +
      '</div>' +
      '<div class="q-body">' +
        '<div class="devoir-block-label">Question</div>' +
        '<div class="fr-text devoir-prompt">'+questionLines+'</div>' +
        '<div class="devoir-block-label">Réponse</div>' +
        '<div class="fr-text devoir-answer">'+devoirLines+'</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderDevoirs(){
  var mount = document.getElementById('marianne-devoirs');
  if(!mount) return;
  mount.innerHTML =
    '<div class="devoir-answer-panel" data-answer-mode="long">'+buildDevoirCards('long')+'</div>' +
    '<div class="devoir-answer-panel" data-answer-mode="short" hidden>'+buildDevoirCards('short')+'</div>';
  updateDevoirAnswerPanels();
}

function makeHeaderAction(label, icon, open, selector){
  return '<button class="sec-tool-btn" type="button" onclick="setQCardsOpen(\''+selector+'\', '+open+', event)" aria-label="'+label+'">' +
    '<span>'+icon+'</span>' +
    '<strong>'+label+'</strong>' +
  '</button>';
}

function initSecHeaderControls(){
  document.querySelectorAll('#panel-oral .sec').forEach(function(sec){
    var header = sec.querySelector('.sec-header');
    if(!header || sec.querySelector(':scope > .sec-header-actions')) return;
    var selector = sec.id === 'o-devoirs'
      ? '#marianne-devoirs .devoir-answer-panel:not([hidden]) .q-card'
      : '#'+sec.id+' .q-card';
    var actions = document.createElement('div');
    actions.className = 'sec-header-actions';
    actions.innerHTML =
      makeHeaderAction('Expand', '⤢', true, selector) +
      makeHeaderAction('Collapse', '⤡', false, selector);
    header.insertAdjacentElement('afterend', actions);
  });
}

function updateDevoirAnswerPanels(){
  document.querySelectorAll('.devoir-answer-panel').forEach(function(panel){
    panel.hidden = panel.getAttribute('data-answer-mode') !== devoirAnswerMode;
  });
}

function shareDevoirWhatsApp(index, event, mode){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  var item = marianneDevoirs[index];
  if(!item) return;
  var previousMode = devoirAnswerMode;
  devoirAnswerMode = mode === 'short' ? 'short' : 'long';
  var lines = getDevoirAnswerLines(item);
  devoirAnswerMode = previousMode;
  var text = [
    'Devoir '+(index + 1)+' - '+item.date+' - C1 '+(mode === 'short' ? 'Short' : 'Long'),
    '',
    'Question :',
    item.question.join('\n'),
    '',
    'Réponse :',
    lines.join('\n')
  ].join('\n');
  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank', 'noopener');
}

// ── iPad / iOS: ensure buttons respond to touch ──
function updateRoute(panel, section){
  if(!window.history || !window.URLSearchParams) return;
  var url = new URL(window.location.href);
  if(panel) url.searchParams.set('panel', panel);
  else url.searchParams.delete('panel');
  if(section) url.searchParams.set('section', section);
  else url.searchParams.delete('section');
  var query = url.searchParams.toString();
  window.history.replaceState({}, '', url.pathname + (query ? '?' + query : '') + url.hash);
}

function getRoute(){
  if(!window.URLSearchParams) return {panel:null, section:null};
  var params = new URLSearchParams(window.location.search);
  return {
    panel: params.get('panel'),
    section: params.get('section')
  };
}

function restoreRoute(){
  var route = getRoute();
  if(!route.panel) return;
  var topBtn = document.querySelector(".top-tab[onclick*=\"" + route.panel + "\"]");
  if(!document.getElementById('panel-' + route.panel)) return;

  if(route.panel === 'temps'){
    showGrammarChild('temps', topBtn);
    if(route.section) showSec(route.section, document.querySelector("#pills-temps .pill[onclick*=\"'" + route.section + "'\"]"), 'temps');
  } else if(route.panel === 'grammaire'){
    switchTop('grammaire', topBtn);
    if(route.section) showSec(route.section, document.querySelector("#pills-grammaire .pill[onclick*=\"'" + route.section + "'\"]"), 'grammaire');
  } else if(route.panel === 'oral'){
    switchTop('oral', topBtn);
    if(route.section) showOral(route.section, document.querySelector("#pills-mariane .pill[onclick*=\"'" + route.section + "'\"]") || document.querySelector("#pills-oral .pill[onclick*=\"'" + route.section + "'\"]"));
  } else if(route.panel === 'phonetique'){
    switchTop('phonetique', topBtn);
    if(route.section) showPhon(route.section, document.querySelector("#pills-phonetique .pill[onclick*=\"'" + route.section + "'\"]"));
  } else {
    switchTop(route.panel, topBtn);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  renderDevoirs();
  initSecHeaderControls();
  // Top tabs touch
  document.querySelectorAll('.top-tab').forEach(function(btn){
    btn.addEventListener('touchend', function(e){
      e.preventDefault();
      btn.click();
    }, {passive:false});
  });
  // Nav pills touch
  document.querySelectorAll('.pill').forEach(function(btn){
    btn.addEventListener('touchend', function(e){
      e.preventDefault();
      btn.click();
    }, {passive:false});
  });
  // Q-headers touch
  document.querySelectorAll('.q-header').forEach(function(hdr){
    hdr.addEventListener('touchend', function(e){
      e.preventDefault();
      toggleQ(hdr);
    }, {passive:false});
  });
  renderLireLinks();
  restoreRoute();
});

// ── Dashboard Sidebar ──
var sidebar = document.getElementById('dashboard-sidebar');
var sidebarToggle = document.getElementById('sidebar-toggle');
var sidebarPin = document.getElementById('sidebar-pin');
var sidebarSearch = document.getElementById('sidebar-search');
var isPinned = false;
var mobileSidebarQuery = window.matchMedia('(max-width: 640px)');

function setSidebarActive(target){
  if(!sidebar || !target) return;
  sidebar.querySelectorAll('[data-sidebar-target]').forEach(function(item){
    item.classList.toggle('active', item.getAttribute('data-sidebar-target') === target);
  });
}

function closeSidebar(){
  if(!sidebar) return;
  sidebar.classList.remove('open');
  if(sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'false');
}

function openSidebar(){
  if(!sidebar) return;
  sidebar.classList.add('open');
  if(sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'true');
}

if(sidebar && sidebarToggle && sidebarPin){
  sidebar.querySelectorAll('.sidebar-link').forEach(function(item){
    var text = item.querySelector('.sidebar-text');
    if(text) item.setAttribute('data-label', text.textContent.trim());
  });

  sidebarToggle.addEventListener('click', function() {
    if(mobileSidebarQuery.matches){
      if(sidebar.classList.contains('open')) closeSidebar();
      else openSidebar();
      return;
    }
    isPinned = !isPinned;
    if(isPinned) openSidebar();
    else closeSidebar();
  });

  sidebarPin.addEventListener('click', function() {
    isPinned = !isPinned;
    if(isPinned) openSidebar();
    else closeSidebar();
    sidebarPin.classList.toggle('active', isPinned);
  });

  sidebar.addEventListener('mouseleave', function() {
    if(!isPinned && !mobileSidebarQuery.matches) closeSidebar();
  });

  sidebar.querySelectorAll('[data-sidebar-target]').forEach(function(item){
    item.addEventListener('click', function(){
      if(mobileSidebarQuery.matches) closeSidebar();
    });
  });

  document.addEventListener('pointerdown', function(event){
    if(!mobileSidebarQuery.matches || !sidebar.classList.contains('open')) return;
    if(!sidebar.contains(event.target)) closeSidebar();
  });

  if(sidebarSearch){
    sidebarSearch.addEventListener('input', function(){
      var term = sidebarSearch.value.trim().toLowerCase();
      sidebar.querySelectorAll('.sidebar-resources .sidebar-link').forEach(function(link){
        var text = link.textContent.toLowerCase();
        link.style.display = text.indexOf(term) > -1 ? '' : 'none';
      });
    });
  }
}

// ── Scroll to nav ──
function scrollToNav(panelId){
  var nav = document.querySelector('#'+panelId+' .nav-wrap');
  if(nav){ window.scrollTo({top: nav.offsetTop - 10, behavior:'smooth'}); }
}

// ── Activate first section in a panel ──
function activateFirstSec(panelId, prefix){
  var secs = document.querySelectorAll('#'+panelId+' .sec');
  var panelKey = panelId.replace('panel-','');
  var scopedPills = document.getElementById('pills-'+panelKey);
  var pills = scopedPills ? scopedPills.querySelectorAll('.pill') : document.querySelectorAll('#'+panelId+' .pill');
  secs.forEach(function(s){ s.classList.remove('visible'); });
  pills.forEach(function(b){ b.classList.remove('active'); });
  if(secs.length > 0) secs[0].classList.add('visible');
  if(pills.length > 0) pills[0].classList.add('active');
}

// ── Top Tab switch ──
function switchTop(tab, btn){
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.top-tab').forEach(function(b){ b.classList.remove('active'); });
  var panel = document.getElementById('panel-'+tab);
  if(panel){ panel.classList.add('active'); }
  if(btn) btn.classList.add('active');
  setSidebarActive(tab);
  if(tab === 'grammaire') activateFirstSec('panel-grammaire','g-');
  else if(tab === 'oral') {
    var activeOralPill = document.querySelector('#pills-oral .pill.active') || document.querySelector('#pills-oral .pill');
    if(activeOralPill && activeOralPill.getAttribute('onclick') && activeOralPill.getAttribute('onclick').indexOf("showOral('devoirs'") !== -1){
      showOral('devoirs', activeOralPill);
    } else {
      showMariane(activeOralPill);
    }
  }
  else if(tab === 'phonetique') activateFirstSec('panel-phonetique','p-');
  if(tab !== 'oral') updateRoute(tab, null);
  setTimeout(function(){ scrollToNav('panel-'+tab); }, 50);
}

// ── Grammaire child panels ──
function showGrammarChild(panelName, btn){
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.top-tab').forEach(function(b){ b.classList.remove('active'); });
  document.querySelectorAll('#pills-grammaire .pill').forEach(function(b){ b.classList.remove('active'); });
  var grammarTop = document.querySelector('.top-tab[onclick*="grammaire"]');
  if(grammarTop) grammarTop.classList.add('active');
  if(btn) btn.classList.add('active');
  setSidebarActive(panelName);
  var panel = document.getElementById('panel-'+panelName);
  if(panel) panel.classList.add('active');
  if(panel){
    panel.querySelectorAll('.first-child-tabs .pill').forEach(function(b){ b.classList.remove('active'); });
    var activeChild = panel.querySelector(".first-child-tabs .pill[onclick*=\""+panelName+"\"]");
    if(activeChild) activeChild.classList.add('active');
  }
  if(panelName === 'temps') activateFirstSec('panel-temps','t-');
  updateRoute(panelName, panelName === 'temps' ? 'present' : null);
  setTimeout(function(){ scrollToNav('panel-'+panelName); }, 50);
}

// ── Grammaire / Temps section switch ──
function showSec(id, btn, panel){
  var pre = panel === 'grammaire' ? 'g-' : 't-';
  document.querySelectorAll('#panel-'+panel+' .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-'+panel+' .pill').forEach(function(b){ b.classList.remove('active'); });
  var sec = document.getElementById(pre+id);
  if(sec) sec.classList.add('visible');
  if(btn) btn.classList.add('active');
  updateRoute(panel, id);
  scrollToNav('panel-'+panel);
}

// ── Oral section switch ──
function showOral(id, btn){
  document.querySelectorAll('#panel-oral .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-mariane .pill').forEach(function(b){ b.classList.remove('active'); });
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  var oralPanel = document.getElementById('panel-oral');
  if(oralPanel) oralPanel.classList.add('active');
  var marianeQuestionNav = document.getElementById('mariane-question-nav');
  if(marianeQuestionNav) marianeQuestionNav.hidden = id === 'devoirs';
  document.querySelectorAll('#pills-oral .pill').forEach(function(b){ b.classList.remove('active'); });
  var isTopOralPill = btn && btn.closest && btn.closest('#pills-oral');
  var marianeTab = document.querySelector('#pills-oral .pill');
  if(isTopOralPill) btn.classList.add('active');
  else if(marianeTab) marianeTab.classList.add('active');
  var sec = document.getElementById('o-'+id);
  if(sec) sec.classList.add('visible');
  if(btn && !isTopOralPill) btn.classList.add('active');
  updateRoute('oral', id);
  scrollToNav('panel-oral');
}

function showMariane(btn){
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('#pills-oral .pill').forEach(function(b){ b.classList.remove('active'); });
  document.querySelectorAll('#panel-oral .sec').forEach(function(s){ s.classList.remove('visible'); });
  var oralPanel = document.getElementById('panel-oral');
  if(oralPanel) oralPanel.classList.add('active');
  var marianeQuestionNav = document.getElementById('mariane-question-nav');
  if(marianeQuestionNav) marianeQuestionNav.hidden = false;
  var marianeMainTab = document.querySelector('#pills-oral .pill');
  if(marianeMainTab) marianeMainTab.classList.add('active');
  if(btn && !btn.closest('#pills-oral')) btn.classList.add('active');
  var firstQuestion = document.querySelector('#pills-mariane .pill');
  document.querySelectorAll('#pills-mariane .pill').forEach(function(b){ b.classList.remove('active'); });
  if(firstQuestion) firstQuestion.classList.add('active');
  var firstSec = document.getElementById('o-routine');
  if(firstSec) firstSec.classList.add('visible');
  updateRoute('oral', 'routine');
  scrollToNav('panel-oral');
}

// ── Phonétique section switch ──
function showPhon(id, btn){
  document.querySelectorAll('#panel-phonetique .sec').forEach(function(s){ s.classList.remove('visible'); });
  document.querySelectorAll('#pills-phonetique .pill').forEach(function(b){ b.classList.remove('active'); });
  var sec = document.getElementById('p-'+id);
  if(sec) sec.classList.add('visible');
  if(btn) btn.classList.add('active');
  updateRoute('phonetique', id);
  scrollToNav('panel-phonetique');
}

// ── Q-Card toggle ──
function toggleQ(hdr){
  hdr.closest('.q-card').classList.toggle('open');
}

function setQCardsOpen(selector, open, event){
  if(event){
    event.preventDefault();
    event.stopPropagation();
  }
  document.querySelectorAll(selector).forEach(function(card){
    card.classList.toggle('open', open);
  });
}

// ── Card fade-in on scroll ──
if('IntersectionObserver' in window){
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('visible-anim');
        observer.unobserve(e.target);
      }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.card, .q-card, .article-card').forEach(function(el){
    observer.observe(el);
  });
} else {
  // Fallback for older browsers
  document.querySelectorAll('.card, .q-card, .article-card').forEach(function(el){
    el.classList.add('visible-anim');
  });
}
