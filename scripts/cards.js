list_path = './components/'

const cards_list = [
    {
        charImage: list_path + 'characters/Albedo_Icon.PNG', //картинка
        charName: 'Albedo', //имя
        charType: 'Игровой' //тип
        //краткое описание
        //пол
        //вид
        //место рождения
        //душа
        //история персонажа
        //
    },
    {
        charImage: list_path +  'characters/Alhaitham_Icon.PNG',
        charName: 'Alhaitham',
        charType: 'Не игровой'
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
