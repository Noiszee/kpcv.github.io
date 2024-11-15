const logotext = "Polia";
const meta = {
    title: "Krysevych",
    description: "",
};

const introdata = {
    title: "I’m Polina Krysevych",
    animated: {
        first: "Я студентка КНЕУ",
        second: "Я українська спортсменка",
        third: "Я просто класна і хороша людина :)",
    },
    description: "Метою цього сайту є презентація моєї освіти, досвіду та особистих досягнень, а також демонстрація мого прагнення до розвитку в економічній сфері. Вона створена для того, щоб  викладачі (та роботодавці ¯\\_(ツ)_/¯)  могли краще зрозуміти мої сильні сторони та професійні цілі.",
    your_img_url: "https://cdn.assets.lomography.com/a6/92e429d4033b14e213de082f00bbd5474f797a/1463x2075x2.jpg?auth=04e5613a1dfa41900a838b85d871bea69e3f235b",
};

const dataabout = {
    title: "Трохи про мене",
    aboutme: "Мене звати Крисевич Поліна Миколаївна. Я — студентка Київського Національного Економічного Університету (КНЕУ), першокурсниця за спеціальністю 'Економічний аналітик'. Активна й цілеспрямована, я прагну досягти високих результатів як у кар'єрі аналітика, так і у спорті. Також є Майстром Спорту України з Таеквондо і чемпіонкою світу з Кікбоксингу. Крім того, маю впевнене володіння кількома мовами, що допомагає мені ефективно комунікувати та працювати в міжнародному середовищі.",
};
const worktimeline = [{
        jobtitle: "МС України (Taekwondo)",
        where: "Kyiv",
        date: "2021",
    },
    {
        jobtitle: "KMC України (Kick-Boxing)",
        where: "Kyiv",
        date: "2022",
    },
    {
        jobtitle: "WAKO World Champion ( Kick-Boxing )",
        where: "Hungary",
        date: "2024",
    },
    {
        jobtitle: "World Championship x3🥇; x1🥉",
        where: "Last updated at: ",
        date: "2024",
    },
    {
        jobtitle: "European Championship x4🥇; x2🥈; x2🥉",
        where: "Last updated at: ",
        date: "2024",
    },
];

const skills = [{
        name: "Українська",
        value: 97,
    },
    {
        name: "English",
        value: 69,
    },
    {
        name: "Español - Despacito",
        value: 2,
    },
    {
        name: "russian - ERROR 404: language not found",
        value: 0,
    },
];

const services = [{
        title: "Аналіз даних та робота з Excel",
        description: "Маю досвід роботи з разними типами даних, використовуючи Excel для їх обробки, аналізу та візуалізації., це включає використання функцій. Також працюю з графіками та діаграмами для наочного представлення даних, що дозволяє зробити складну інформацію зрозумілою для будь-якої аудиторії.",
    },
    {
        title: "Презентувальні навички",
        description: "Також маю досвід створення презентацій для різних цілей. Застосовую візуальні елементи, щоб зробити презентацію не тільки інформативною, але й цікавою для аудиторії. Використовую такі інструменти, як PowerPoint та Google Slides, для створення більш продвинутих презентацій, що включають графіки, таблиці та інші візуальні елементи для покращення сприйняття інформації. ",
    },
    {
        title: "Написання звітів",
        description: "Маю навички написання чітких і структурованих звітів, що містять аналіз даних, рекомендації та висновки. Вмію адаптувати стиль і форматування звітів відповідно до вимог аудиторії — чи то для керівництва, чи для колег. Застосовую логічну структуру для забезпечення зрозумілості та послідовності: вступ, аналіз даних, висновки та рекомендації.",
    },
];

const dataportfolio = [{
        img: "https://i.imgur.com/6Z5ZTAw.png",
        description: "Місце: 1. Чемпіонат України серед юнаків, юніорів та дорослих: Командний спаринг",
        link: "#",
    },
    {
        img: "https://i.imgur.com/w5VFQpi.jpeg",
        description: "Місце: 1. Чемпіонат України серед юнаків, юніорів та дорослих: Спаринг",
        link: "#",
    },
    {
        img: "https://unn.ua/img/2024/04/24/1713921124-3984-large.webp",
        description: "Місце: 2. Чемпіонат м.Києва Taekwondo: Командний спаринг",
        link: "#",
    },
    {
        img: "https://i.imgur.com/CmJ26qG.jpeg",
        description: "Місце: 1. WAKO World Kickboxing Championship",
        link: "#",
    },
    {
        img: "https://i.imgur.com/RqOA7kX.jpeg",
        description: "Місце: 1. Кубок України серед юнаків, юніорів та дорослих: Спецтехніка",
        link: "#",
    },
    {
        img: "https://i.imgur.com/gp7fpXC.jpeg",
        description: "Місце: 3. Кубок України серед старших юнаків, юніорів, дорослих та ветеранів",
        link: "#",
    },

    {
        img: "https://i.imgur.com/4qqVezq.jpeg",
        description: "Місце: 1. WORLD CHAMPIONSHIP 2023: female special technique",
        link: "#",
    },
    {
        img: "https://i.imgur.com/MZQNy9Y.jpeg",
        description: "Місце: 1. WORLD CHAMPIONSHIP 2023: female junior sparring",
        link: "#",
    },
    {
        img: "https://i.imgur.com/Zkklucv.jpeg",
        description: "Місце: 1. Відкритий Чемпіонат Київської області з кікбоксингу WAKO серед всіх вікових категорій",
        link: "#",
    },
    {
        img: "https://i.imgur.com/7Fs532U.jpeg",
        description: "Місце: 1. Чемпіонат України з кікбоксингу WAKO серед юніорів, юнаків та дітей",
        link: "#",
    },
    {
        img: "https://i.imgur.com/RPv9zVL.png",
        description: "Місце: 1. Турнір з Таеквон-до ІТФ клубу «Максимус» серед юнаків, юніорів та дорослих: Спаринг",
        link: "#",
    },
    {
        img: "https://i.imgur.com/ycxRZNQ.jpeg",
        description: "Місце: 3. WAKO Youth World Kickboxing Championships - Budapest 2024",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "krysevych_ne_analitik@gmail.com",
    YOUR_FONE: "+380 013 1337",
    description: "На разі менеджер не відповідає, по причині його відсутності. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    telegram: "https://t.me/poliishk",
    instagram: "https://www.instagram.com/krysevych_p/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
