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
        charImage: list_path + 'meat_pie.webp',
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
        charImage: list_path + 'dried_meat.webp',
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
        charImage: list_path + 'whiskey_bottle.webp',
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
        charImage: list_path + 'cheese.webp',
        charName: 'Сыр',
        charType: 'Предмет', 
        charDesc: 'Старый засохший сыр. Пахнет довольно неприятно.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Может взять с собой в начало пути Кахара и Д'Арс. Иногда выпадает из контейнеров и ящиков.', 
        effects: ['Восстанавливает 7% сытости']
    },
    {
        charId: 'ale',
        charImage: list_path + 'whiskey_bottle.webp',
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
        charImage: list_path + 'carrot.webp',
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
        charImage: list_path + 'cloudy_bottle.webp',
        charName: 'Мутный флакон',
        charType: 'Предмет', 
        charDesc: 'Флакон с мутной легковоспаменяющейся жидкостью внутри.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На противнике', 
        wayToHave: 'Можно изготовить из масла и черного флакона. Редко выпадает из контейнеров и иногда с алхимических стоек.', 
        effects: ['Наносит 80-120 единиц урона.', 'Поджигает противника во время битвы.']
    },
    {
        charId: 'opium',
        charImage: list_path + 'opium.webp',
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
        charImage: list_path + 'herbs_mixture.webp',
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
        charImage: list_path + 'torch.webp',
        charName: 'Факел',
        charType: 'Предмет', 
        charDesc: 'Деревянная палка, обмотанная ветошью, чтобы продлить горение. При использовании замедляются эффекты тьмы.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Иногда попадается в контейнерах, много факелов можно найти в шахтах, можно сделать из огнива, палки и куска одежды.', 
        effects: ['Освещает герою путь во время передвижения по подземелью']
    },
    {
        charId: 'alchemelia1',
        charImage: list_path + 'alchemelia1.webp',
        charName: 'Алхимелия том 1',
        charType: 'Предмет', 
        charDesc: 'Книга, содержащая рецепты основных трав и растений.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Часто выпадает из контейнеров и ящиков. Может взять Кахара в свое путешествие. Может выпасть как дар шишкосвина.', 
        effects: ['Восстанавливает 47-53 единиц разума']
    },
    {
        charId: 'whiskeyBottle',
        charImage: list_path + 'whiskey_bottle.webp',
        charName: 'Бутылка виски',
        charType: 'Предмет', 
        charDesc: 'Бутылка старого виски. Поможет сохранить рассудок в вечно давящей тьме.', 
        charImportance: 'Обычный', 
        charPrice: '0', 
        charReuse: 'Потребляемый', 
        charMechanic: 'На союзнике', 
        wayToHave: 'Часто выпадает из контейнеров и ящиков. Может взять Кахара в свое путешествие. Может выпасть как дар шишкосвина.', 
        effects: ['Восстанавливает 47-53 единиц разума']
    }
]
