import { Itranslate } from './translateInterfase';
import { signUpFields } from '../../constants/signupFields';

export const lang: Itranslate = {
  en: {
    'main': {
      'benchmark': 'HUMAN BENCHMARK',
      'main': 'MAIN',
      'dashboard': 'DASHBOARD',
      'sign': 'SIGN UP',
      'login': 'LOGIN',
      'logout': 'LOGOUT',
      'mainDiscr': 'Measure your abilities with brain games and cognitive tests.',
      'getStarted': 'Get Started',
      'new': 'New',
      'reaction': 'Reaction Time',
      'reactionDiscr': 'Test your visual reflexes.',
      'sequence': 'Sequence Memory',
      'sequenceDiscr': 'Remember an increasingly long pattern of button presses.',
      'aim': 'Aim Trainer',
      'aimDiscr': 'How quickly can you hit all the targets?',
      'number': 'Number Memory',
      'numberDiscr': 'Remember the longest number you can.',
      'verbal': 'Verbal Memory',
      'verbalDiscr': 'Keep as many words in short term memory as possible.',
      'chimp': 'Chimp Test',
      'chimpDiscr': 'Are you smarter than a chimpanzee?',
      'visual': 'Visual Memory',
      'visualDiscr': 'Remember an increasingly large board of squares.',
      'typing': 'Typing',
      'typingDiscr': 'How many words per minute can you type?',
    },
    'dashboard': {
      'username': 'Username',
      'guest': 'Guest',
      'joined': 'Joined',
      'or': 'or',
      'save': 'to save your results',
      'permalink': 'Permalink',
      'test': 'Test',
      'actions': 'Actions',
      'score': 'Score',
      'percentile': 'Percentile',
      'play': 'Play',
      'stats': 'Stats',
      'points': 'points',
      'activityFeed': 'Activity feed',
      'date': 'Date',
    },
    'signUp': {
      'signUp': 'Sign up',
      'haveAcc': 'Already have an account?',
      'login': 'Log in',
      'email': 'Email',
      'username': 'Username',
      'password': 'Password',
      'passwordConfirm': 'Password confirmation',
      'error': 'Error',
      'title': 'Sign up',
      'fields': signUpFields.en,
    },
    'login': {
      'login': 'Log in',
      'haveAcc': 'Need an account?',
      'signUp': 'Sign up',
      'username': 'Username',
      'password': 'Password',
      'forgotPas': 'Forgot password?',
      'resetPas': 'Reset password',
      'error': 'Error',
    },
    'common': {
      'start': 'Start',
      'statistics': 'Statistics',
      'about': 'About the test',
      'submit': 'Submit',
      'next': 'Next',
      'ms': 'ms',
      'pts': 'pts',
      'saveDiscr': 'Save your score to see how you compare.',
      'saveScore': 'Save score',
      'tryAgain': 'Try again',
      'level': 'Level',
    },
    'reaction': {
      'title': 'Reaction Time Test',
      'subTitle': 'When the red box turns green, click as quickly as you can.',
      'discr': 'This is a simple tool to measure your reaction time.<br>The average (median) reaction time is 273 milliseconds, according to the data collected so far.<br>In addition to measuring your reaction time, this test is affected by the latency of your computer and monitor. Using a fast computer and low latency / high framerate monitor will improve your score.<br>Scores in this test are faster than the aim trainer test, because you can react instantly without moving the cursor.<br>This is discussed in further detail on the the statistics page. While an average human reaction time may fall between 200-250ms, your computer could be adding 10-50ms on top. Some modern TVs add as much as 150ms!<br>If you want, you can keep track of your scores, and see your full history of reaction times.<br>Just perform at least 5 clicks and then save.',
      'wait': 'Wait for green',
      'soon': 'Too soon',
      'click': 'Click',
      'tryAgain': 'Click to try again',
      'going': 'Click to keep going',
      'endGameDiscr': 'Reaction time',
    },
    'sequence': {
      'title': 'Sequence Memory Test',
      'subTitle': 'Memorize the pattern.',
      'discr': 'Memorize the sequence of buttons that light up, then press them in order.<br>Every time you finish the pattern, it gets longer.<br>Make a mistake, and the test is over.',
    },
    'aim': {
      'title': 'Aim Trainer',
      'subTitle': 'Hit 30 targets as quickly as you can.',
      'discr': "Click the targets as quickly and accurately as you can.<br>This tests reflexes and hand-eye coordination.<br>Once you've clicked 30 targets, your score and average time per target will be displayed.<br>Scores in this test are slower than the simple reaction time test, because you must react and then move the cursor.<br>This test is best taken with a mouse or tablet screen. Trackpads are difficult to score well with.",
      'remaining': 'Remaining',
      'endGameDiscr': 'Average time per target',
    },
    'number': {
      'title': 'Number Memory',
      'subTitle': 'The average person can remember 7 numbers at once. Can you do more?',
      'discr': "The average person can only remember 7 digit numbers reliably, but it's possible to do much better using mnemonic techniques.",
      'num': 'Number',
      'answer': 'You answer',
    },
    'visual': {
      'title': 'Visual Memory Test',
      'subTitle': 'Memorize the squares.',
      'discr': 'Every level, a number of tiles will flash white. Memorize them, and pick them again after the tiles are reset!<br>Levels get progressively more difficult, to challenge your skills.<br>If you miss 3 tiles on a level, you lose one life.<br>You have three lives.<br>Make it as far as you can!',
      'lives': 'Lives',
    },
    'verbal': {
      'title': 'Verbal Memory Test',
      'subTitle': "You will be shown words, one at a time. If you've seen a word during the test, click SEEN. If it's a new word, click NEW",
      'discr': "This test measures how many words you can keep in short term memory at once.<br>The number of words you need to remember grows continually, until you can't keep them in your head anymore.<br>Go as long as you can. You have 3 strikes until game over.<br>Your score is how many turns you lasted.",
      'lives': 'Lives',
      'seen': 'Seen',
      'new': 'New',
    },
    'typing': {
      'title': 'Typing Test',
      'subTitle': 'How many words per minute can you type?',
      'discr': 'This is a simple test of typing speed, measuring words per minute, or WPM.<br>The standard measure of WPM is 50. The recorded score is WPM .',
      'typingText': "The sun, spring, the delight of the new—fangled blue with white buttons miracle, the upcoming trip - all this in a hundredfold refraction, as if thrown under the feet of a warming May ray, fill the child's heart with the splendor of Life. And even parting with the jackdaw, almost tame, who eats on the kitchen windowsill every morning, and thoughts about his near orphan future do not overshadow expectations of a Miracle — expectations of Life, the Sun, the highest radiant Faith in the goodness of the world, so truthfully and keenly presented at this memorable moment. Faith in the indisputability of some deep, natural Justice of earthly and human laws",
      'startTyping': 'Start typing to begin',
    },
  },
  ru: {
    'main': {
      'benchmark': 'ЭТАЛОН ЧЕЛОВЕКА',
      'main': 'ГЛАВНАЯ',
      'dashboard': 'РЕЗУЛЬТАТЫ',
      'sign': 'РЕГИСТРАЦИЯ',
      'login': 'ВХОД',
      'logout': 'ВЫХОД',
      'mainDiscr': 'Измерьте свои способности c помощью игр для мозга и когнитивных тестов.',
      'getStarted': 'Начать',
      'new': 'Новинка',
      'reaction': 'Время реакции',
      'reactionDiscr': 'Проверьте свои зрительные рефлексы.',
      'sequence': 'Запоминание последовательности',
      'sequenceDiscr': 'Запомните самую длинную последовательность нажатий кнопок.',
      'aim': 'Тренеровка прицеливания',
      'aimDiscr': 'Как быстро вы можете поразить все цели?',
      'number': 'Запоминание цифр',
      'numberDiscr': 'Запомните самое длинное число, которое сможете.',
      'verbal': 'Вербальная память',
      'verbalDiscr': 'Запомните как можно больше слов.',
      'chimp': 'Шимпанзе тест',
      'chimpDiscr': 'Вы умнее шимпанзе?',
      'visual': 'Зрительная память',
      'visualDiscr': 'Запомните расположение квадратов',
      'typing': 'Скорость печати',
      'typingDiscr': 'Сколько слов в минуту вы можете напечатать?',
    },
    'dashboard': {
      'username': 'Имя',
      'guest': 'Гость',
      'joined': 'присоединился',
      'or': 'или',
      'save': 'для сохранения результатов',
      'permalink': 'Ссылка',
      'test': 'Тест',
      'actions': 'Действия',
      'score': 'Счет',
      'percentile': 'Процентиль',
      'play': 'Играть',
      'stats': 'Статистика',
      'points': 'очки',
      'activityFeed': 'Лента активности',
      'date': 'Дата',
    },
    'signUp': {
      'signUp': 'Зарегистрироваться',
      'haveAcc': 'Уже есть аккаунт?',
      'login': 'Авторизоваться',
      'email': 'Электронная почта',
      'username': 'Имя',
      'password': 'Пароль',
      'passwordConfirm': 'Подтверждение пароля',
      'error': 'ошибка ввода',
      'title': 'Регистрация',
      'fields': signUpFields.ru,
    },
    'login': {
      'login': 'Авторизоваться',
      'haveAcc': 'Нужен аккаунт?',
      'signUp': 'Зарегистрироваться',
      'username': 'Имя',
      'password': 'Пароль',
      'forgotPas': 'Забыли пароль?',
      'resetPas': 'Сбросить пароль',
      'error': 'ошибка',
    },
    'common': {
      'start': 'Начать',
      'statistics': 'Статистика',
      'about': 'Описание теста',
      'submit': 'Подтвердить',
      'next': 'Следующий',
      'ms': 'мс',
      'pts': 'балл',
      'saveDiscr': 'Сохранить свой результат.',
      'saveScore': 'Сохранить',
      'tryAgain': 'Попробовать снова',
      'level': 'Уровень',
    },
    'reaction': {
      'title': 'Тест на скорость реакции',
      'subTitle': 'Когда красный прямоугольник станет зеленым, нажмите на него как можно быстрее.',
      'discr': 'Это простой инструмент для измерения времени вашей реакции.<br>Согласно собранным данным, среднее (медианное) время реакции составляет 273 миллисекунды.<br>Помимо измерения времени вашей реакции, на этот тест влияет задержка вашего компьютера и монитора. Использование быстрого компьютера и монитора с низкой задержкой и высокой частотой кадров улучшит ваш результат.<br>Оценки в этом тесте выше, чем в тесте тренера по прицеливанию, потому что вы можете реагировать мгновенно, не перемещая курсор.<br>Это обсуждается более подробно. на странице статистики. В то время как среднее время реакции человека может составлять от 200 до 250 мс, ваш компьютер может добавить 10-50 мс к этому времени. Некоторые современные телевизоры добавляют до 150 мс!<br>Если хотите, вы можете отслеживать свои баллы и просматривать полную историю времени реакции.<br>Просто выполните не менее 5 кликов, затем сохраните',
      'wait': 'Подождите, пока загорится зеленый',
      'soon': 'Слишком рано',
      'click': 'Нажмите',
      'tryAgain': 'Нажмите, чтобы повторить попытку',
      'going': 'Нажмите для продолжения',
      'endGameDiscr': 'Время реакции',
    },
    'sequence': {
      'title': 'Тест запоминания последовательности',
      'subTitle': 'Запомните последовательность',
      'discr': 'Запомните последовательность загорающихся кнопок, и затем нажимайте их по порядку.<br>Каждый раз, когда вы заканчиваете рисунок, он становится длиннее.<br>Сделаете ошибку, и тест окончен.',
    },
    'aim': {
      'title': 'Тренеровка прицеливания',
      'subTitle': 'Поразите 30 целей как можно быстрее.',
      'discr': 'Щелкайте по мишеням как можно быстрее и точнее.<br>Это проверка рефлексов и зрительно-моторной координации.<br>После того как вы нажмете 30 мишеней, отобразится ваш счет и среднее время на каждую мишень.<br>Очки в этот тест медленнее, чем простой тест на время реакции, потому что вы должны отреагировать, a затем переместить курсор.<br>Этот тест лучше всего выполнять c помощью мыши или экрана планшета. C трекпадами сложно добиться хороших результатов.',
      'remaining': 'Осталось',
      'endGameDiscr': 'Среднее время на цель',
    },
    'number': {
      'title': 'Запоминание цифр',
      'subTitle': 'Среднестатистический человек может запомнить 7 цифр одновременно. Можете ли вы сделать больше?',
      'discr': 'Среднестатистический человек может надежно запомнить только семизначные числа, но c помощью мнемонических методов можно добиться большего успеха.',
      'num': 'Цифры',
      'answer': 'Ваш ответ',
    },
    'visual': {
      'title': 'Зрительная память',
      'subTitle': 'Запомните расположение квадратов',
      'discr': 'На каждом уровне ряд плиток будет мигать белым. Запомните их и выберите снова после того, как плитки будут сброшены!<br>Уровни постепенно усложняются, чтобы испытать свои навыки.<br>Если вы пропустите 3 плитки на уровне, вы потеряете одну жизнь.<br>У вас есть три жизней.<br>Держитесь как можно дольше!',
      'lives': 'Жизни',
    },
    'verbal': {
      'title': 'Вербальная память',
      'subTitle': 'Вам будут показаны слова, по одному за раз. Если вы видели слово во время теста, нажмите "БЫЛО". Если это новое слово, нажмите "НОВОЕ"',
      'discr': 'Этот тест измеряет, сколько слов вы можете сохранить в кратковременной памяти одновременно.<br> Количество слов, которые вам нужно запомнить, постоянно растет, пока вы больше не сможете удерживать их в своей голове.<br> Иди так долго, как сможешь. У вас есть 3 жизни до окончания игры.<br> Ваш счет - это то, сколько ходов вы продержались.',
      'lives': 'Lives',
      'seen': 'Было>',
      'new': 'Новое',
    },
    'typing': {
      'title': 'Скорость печати',
      'subTitle': 'Сколько слов в минуту вы сможете напечатать?',
      'discr': 'Это простой тест скорости набора текста, измеряющий количество слов в минуту.<br> Стандартный показатель - 50 слов в минуту. Записанный балл равен количеству слов.',
      'typingText': 'Солнце, весна, восторг от новомодного синего с белыми пуговичками чуда, предстоящая поездка — всё это в стократном преломлении будто брошенного под ноги согревающего майского луча наполняют детское сердечко великолепием Жизни. И даже расставание с галчонком, почти ручным, который каждое утро лакомится на кухонном подоконнике, и мысли о его ближайшем сиротском будущем не омрачают ожидания Чуда — ожидания Жизни, Солнца, наивысшую лучезарную Веру в доброту мира, так правдиво и обострённо представляющуюся в эту памятную минуту. Веру в непререкаемость некой глубинной, природной Справедливости земных и человеческих законов',
      'startTyping': 'Начните печатать как будете готовы',
    },
  },
};
