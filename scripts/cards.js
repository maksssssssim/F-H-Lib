list_path = './components/'

const cards_list = [
    {
        charImage: list_path + 'characters/Albedo_Icon.PNG',
        charId: 'Kahara',
        charName: 'Кахара', //имя
        charType: 'Игровой', //тип
        charDesc: 'Кахара — один из четырёх главных игровых персонажей вселенной «Fear & Hunger». Будучи наёмником, известным своей беспринципной тактикой в бою и изощренными методами получения преимущества, он делает всё возможное, чтобы заполучить коммерческую выгоду.', 
        charGender: 'Мужской', 
        charSpecies: 'Человек', 
        birthLoc: 'Джеттайя', 
        charSoul: 'Бесконечная душа', 
        charHistory: "Кахара родился и вскоре был брошен в городе Джеттайе, столице Восточных Святилищ, где с юных лет вынужден был бороться за выживания на суровых улицах. Повзрослев Кахара участвовал в компаниях различных наемных армий, где изучил самые грязные уловки. В какой-то момент его завербовал печально известный 'ветеран с большой дороги' в небольшую банду, состоящую из преступников и бывших солдат. Так Кахара и путешествовал с ними, зарабатывая грабежами и набегами, пока, в конце концов, дорога не привела его в Королевство Рондон, где серебро текло рекой в карман тех, кто не брезгует замарать свой клинок. В Рондоне Кахара завёл отношения с женщиной по имени Селеста, работающей в борделе. Беременность Селесты, отсутствие денег и ощущение несостоятельности за то, что он не может обеспечить себя и свою жену, подстегнуло Кахару искать новые пути заработка. И на его удачу он получил задание от королевских чиновников: вызволить из темниц капитана легендарной наемной армии Рыцарей Полуночного Солнца - Ле'Гарда. Наёмник согласился, ведь за эту работёнку обещали щедро отплатить серебром. Хотя он и ощущал, что с этой миссией явно что-то не так.",
        characteristics: {'Атака': [30, '#7D2E2B'], 'Защита': [16, '#542C2B'], 'Магическая атака': [16, '#AF8965'], 'Магическая защита': [16, '#71522F'], 'Ловкость': [10, '#858585'], 'Удача': [32, '#71522F']},
        equipment: ['Скимитар (+27 к Атаке, 30% шанс навесить кровотечение)', 'Кожаные доспехи (-40% урона от огня, -8% от рубящего урона, -8% от колющего, -8% от дробящего, +20 к Защите)'], 
        comandAdd: ['Кахару можно найти в верхней левой камере на 3 уровне в тюрьме. Он скомкано объясняет, как туда угодил и что у него есть задание на поиск некого человека в глубинах подземелий. Следом за этим Кахара просит присоединиться к вашей партии, и если игрок отказывает ему, или не имеет свободного места в отряде - Кахара уйдёт сам и более не будет замечен в игре. Его просьба вступить в партию подозрительно похожа на уловку. И так и есть: как только игрок перейдет в новую область, Кахара сбежит, прихватив с собой некоторое количество припасов.', 'После встречи в Тюрьме он объявится в проходе между шахтами и катакомбами 7-го уровня. Игрок может либо обвинить его в очередной подставе, чтобы напасть, либо позволить ему присоединиться к партии навсегда. Если мест нет, то он покинет сцену и вскоре будет убит неизвестным существом неподалёку.'], 
        charSkills: ['Взлом – возможность вскрывать простые замки отмычками.', 'Украсть – украсть у врага предмет во время боя.', 'Ан гард – подготовьтесь к бою, зажав [SHIFT], чтобы получить преимущество (Даёт вам один дополнительный ход в начале боя).', 'Рывок – скорость передвижения сильно увеличивается']
    },
    {
        
        charImage: list_path + 'characters/Albedo_Icon.PNG',
        charId: 'dArce',
        charName: "Д'Арс", //имя
        charType: 'Игровой', //тип
        charDesc: "Д'Арс — одна из четырёх главных игровых персонажей вселенной «Fear & Hunger».  Будучи рыцарем с чистыми и праведными манерами воина, она с детства обучалась боевым искусствам и преуспела в ближнем бою с использованием различного оружия.", 
        charGender: 'Женский', 
        charSpecies: 'Человек', 
        birthLoc: 'Королевство Рондон', 
        charSoul: 'Господствующая душа', 
        charHistory: "Д'Арс посчастливилось родиться в благородной богатой семье. С ранних лет ее отослали в учение, дабы она могла стать святым рыцарем Рондона. Учеба была суровой – в не щадили никого, неважно, был ли новобранец знатного происхождения или нет. И вместе с тем Королевство Рондон устремилось к большему господство, оправдывая это тем, что следует воле богов. При этом все почести и награды попадали в руки элиты и знати, удобно засевших за крепостными стенами замка. Королевство безжалостно расширяло свои границы, сминая хилые цитадели в пепел и лужи крови. Порабощало женщин, вырезая всё мужское население под корень, щадя лишь одного или двух детей, чтобы ширилась молва о королевстве. Преданность Д'Арс пошатнулась. Она уже была готова уйти из армии, но ее родня потребовала, чтоб она осталась на посту святого рыцаря. Вскоре Д'Арс повстречала капитана небольшого войска наемников, Ле'Гарда, что питал похожие обиды и ненависть к нынешней политике Кролевства. Ле'Гард распознал в Д'Арс потенциал и чуть ли не сооблазнил вступить в ряды наемников. Благодаря строгой дисциплине и навыкам девушка заняла высокую должность в их рядах. Армия быстро росла не только в размерах, но во влиянии на западных регионах. И хотя поначалу Королевство Рондон использовало эту армию наёмников в своих интересах, однако постепенно его отношение начало меняться. Власти начали видеть в Ле'Гарде серьёзную угрозу своему нынешнему положению. Да и сам Ле'Гард изменился. Он всё больше замыкался в себе, изучая древние тексты и оккультизм. Он стал одержим реликвиями и артефактами. Всё окончательно покатилось в тартарары, когда Ле'Гард внезапно решил совершить вероломный набег на северную столицу Ольдегард. Без предупреждения и переговоров Ле'Гард убил всех, кто встал на пути между ним и загадочным древним артефактом. Именно выпад послужил достаточным поводом для Королевства Рондон, чтобы настроить простых людей против Ле'Гарда и объявить его вне закона. Подавляющее войско Рондонской армии двинулось на Рыцарей Полуночного Солнца и, разбив их, взяло в плен капитана Ле'Гарда. Несмотря на то, что большинство товарищей Д'Арс погибли, ей удалось спастись с поля битвы. Осознавая, что капитана вот-вот приговорят к смертной казни, она решилась на самоубийственную миссию: вызволить Ле'Гарда из тюрьмы, чего бы ей это не стоило.",
        characteristics: {'Атака': 30, 'Защита': 16, 'Магическая атака': 16, 'Магическая защита': 16, 'Ловкость': 10, 'Удача': 32},
        equipment: ['Длинный меч (+35 к Атаке, 10% шанс наложить Кровотечение)', 'Щит с орлом (-20% урона от рубящих атак, -20% от колющих, -20% от дробящих, +20 к Защите)', 'Латные доспехи (-35% урона от рубящих атак, -30% от колющих, -20% от дробящих, +40 к Защите)', 'Копьё (+42 к Атаке, 10% шанс наложить Кровотечение)', 'Кираса (-32% урона от рубящих атак, -20% от колющих, -12% от дробящих, +30 к Защите)', 'Латные наручи (-10% урона от рубящих атак, -10% от колющих, -10% от дробящих, +10 к Защите)'], 
        comandAdd: ["Д'Арс можно найти в деревне пещерных жителей. Свернув от входа влево и пройдя чуть выше, вы увидите, что её избивает местный житель из-за ее проповедей об Алл-Мере. Если решите вмешаться и спасти её, то это настроит остальных обитателей пещер против вас. Д'Арс расскажет свою историю и попросит присоединится к игроку, чтобы найти Ле'Гарда."], 
        charSkills: ['Защитная стойка – специальная боевая стойка для предотвращения тяжелых физических травм. Этому навыку обучали всех оруженосцев в Рондонской армии.', 'Быстрая стойка – стремительными движениями получаете дополнительный ход.', 'Контратака – будьте внимательны к атакам противника, чтобы парировать их в момент приземления. Так же возможно выучить и прочитав книгу забытых воспоминаний.', 'Подсечка – ловкая атака высокой точности, которая может быть выполнена только с легким холодным оружием.']
    },
    {
        charImage: list_path +  'characters/Aloy_Icon.PNG',
        charName: 'Aloy',
        charType: 'Враг',
        charHP: {'Голова': 200, 'Тело': 100, 'Правая рука': 100, 'Левая рука': 300, 'Правая нога': 400, 'Левая нога': 400, 'Хвост': 10}
    },
    {
        charImage: list_path +  'characters/Amber_Icon.PNG',
        charName: 'Amber',
        charType: 'Игровой'
    },
    {
        charImage: list_path +  'characters/Arataki_Itto_Icon.PNG',
        charName: 'Arataki Itto',
        charType: 'Игровой'
    },
    {
        charImage: list_path + 'characters/Baizhu_Icon.PNG',
        charName: 'Baizhu',
        charType: 'Игровой'
    },
    {
        charImage: list_path + 'characters/Barbara_Icon.PNG',
        charName: 'Barbara',
        charType: 'Игровой'
    },
    {
        charImage: list_path + 'characters/Beidou_Icon.PNG',
        charName: 'Beidou',
        charType: 'Игровой'
    },
    {
        charImage: list_path + 'characters/Bennett_Icon.PNG',
        charName: 'Bennett',
        charType: 'Игровой'
    },
    {
        charImage: list_path + 'characters/Candace_Icon.PNG',
        charName: 'Candace',
        charType: 'Игровой'
    },
    {
        charImage: list_path + 'characters/Chongyun_Icon.PNG',
        charName: 'Chongyun',
        charType: 'Игровой'
    },
    {
        charImage: list_path + 'characters/Collei_Icon.PNG',
        charName: 'Collei',
        charType: 'Игровой'
    }
]

const items_list = [
    {
        charId: 'meatPie',
        charName: 'Мясной пирог',
        charType: 'Предмет', 
        charDesc: 'Старомодный мясной пирог. Довольно прост в приготовлении.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Можно сделать из яйца, муки и сушеного мяса, зная рецепт. Редко выпадает из контейнеров.', 
        effects: ['Восстанавливает 90% сытости']
    },
    {
        charId: 'driedMeat',
        charName: 'Вяленое мясо',
        charType: 'Предмет', 
        charDesc: 'Высушенные во избежание порчи, полоски мяса.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Его получают герои в начале пути, если предпочтут взять еду. Часто выпадает из ящиков и контейнеров.', 
        effects: ['Восстанавливает 30% сытости', 'Нужно для изготовления мясного блюд']
    },
    {
        charId: 'whiskeyBottle',
        charName: 'Бутылка виски',
        charType: 'Предмет', 
        charDesc: 'Бутылка старого виски. Поможет сохранить рассудок в вечно давящей тьме.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Часто выпадает из контейнеров и ящиков. Может взять Кахара в свое путешествие. Может выпасть как дар шишкосвина.', 
        effects: ['Восстанавливает 47-53 единиц разума']
    },
    {
        charId: 'cheese',
        charName: 'Сыр',
        charType: 'Предмет', 
        charDesc: 'Старый засохший сыр. Пахнет довольно неприятно.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: "Может взять с собой в начало пути Кахара и Д'Арс. Иногда выпадает из контейнеров и ящиков.", 
        effects: ['Восстанавливает 7% сытости']
    },
    {
        charId: 'ale',
        charName: 'Эль',
        charType: 'Предмет', 
        charDesc: 'Бутылка эля. Эль внутри мутный. Помогает вам сохранить рассудок в вечно давящей тьме.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Может взять Кахара в начале своего путешествия. Иногда выпадает из ящиков и контейнеров. Можно купить у пещерных жителей.', 
        effects: ['Восстанавливает 28-32 единиц разума']
    },
    {
        charId: 'carrot',
        charName: 'Морковь',
        charType: 'Предмет', 
        charDesc: 'Вполне съедобная морковь.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Несколько штук может взять Рагнвальдр в начале путешествия. Иногда выпадает из контейнеров и ящиков.', 
        effects: ['Восстанавливает 7% сытости.']
    },
    {
        charId: 'cloudyBottle',
        charName: 'Мутный флакон',
        charType: 'Предмет', 
        charDesc: 'Флакон с мутной легковоспаменяющейся жидкостью внутри.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На противнике', 
        wayToHave: 'Можно изготовить из масла и черного флакона. Редко выпадает из контейнеров и иногда с алхимических стоек.', 
        effects: ['Наносит 80-120 единиц урона.', '100% вероятности наложить статус горения']
    },
    {
        charId: 'opium',
        charName: 'Опиум',
        charType: 'Предмет', 
        charDesc: 'Если у вас есть трубка, вы можете его покурить. Обладает успокаивающим эффектом, снижает страх.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Редко выпадает из ящиков и контейнеров. Может взять Энки в начале путешествия. Может выпасть как дар шишкосвина.', 
        effects: ['Восстанавливает 100 единиц разума.', 'Для курения нужна трубка.']
    },
    {
        charId: 'herbsMixture',
        charName: 'Смесь красной и зеленой травы',
        charType: 'Предмет', 
        charDesc: 'Смесь трав, обладающая особенно сильным действием.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Можно изготовить из красной и зеленой травы, если прочитать первый том алхимелии.', 
        effects: ['Лечит от инфекции, отравления и токсичности']
    },
    {
        charId: 'torch',
        charName: 'Факел',
        charType: 'Предмет', 
        charDesc: 'Деревянная палка, обмотанная ветошью, чтобы продлить горение. При использовании замедляются эффекты тьмы.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'Ни на ком', 
        wayToHave: 'Иногда попадается в контейнерах, много факелов можно найти в шахтах, можно сделать из огнива, палки и куска одежды.', 
        effects: ['Освещает герою путь во время передвижения по подземелью']
    },
    {
        charId: 'alchemelia1',
        charName: 'Алхимелия том 1',
        charType: 'Предмет', 
        charDesc: 'Книга, содержащая рецепты основных трав и растений.', 
        charImportance: 'Важный', 
        charPrice: '0', 
        charReuse: 'Не потребляемый', 
        charMechanic: 'Ни на ком', 
        wayToHave: 'Может упасть при изучении книжной полки. Чаще всего при получении требует бросить монетку.', 
        effects: ['Рецепт смеси красной и синей травы', 'Смесь красной и зеленой травы', 'Рецепт синего флакона']
    },
    {
        charId: 'shortSword',
        charName: 'Короткий меч',
        charType: 'Предмет', 
        charDesc: 'Короткий железный меч. Лезвие немного изношено, но сам меч легок и быстр в обращении.', 
        charImportance: 'Обычный', 
        charPrice: '500', 
        charReuse: 'Не потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Начальное оружие Энки и Кахары. Может быть найден на теле Серил в Древнем городе.', 
        effects: ['+10 атаки', '10% вероятности навесить на противника кровотечение']
    }
]
