# RS Clone
**RS Clone** - это командное задание, в ходе выполнения которого вам необходимо разработать клон игры или приложения. Команда сама выбирает тематику проекта. Это может быть как точная, так и упрощённая копия существующего проекта, или ваше собственное приложение*.

## Backend (+160):
- Создана БД ***+10***
- БД подключена к серверу ***+10***
- Back-end задеплоен и отвечает на запросы POSTman ***+30***
    https://rscloneserver.onrender.com
    ***Примеры*** запросов:
     - Информация про тесты - /tests
     - Информация про сыгранные конкретные тесты /played/:test_id
     - Все сыгранные тесты конкретным юзером /users/:id/played
     - Конкретные сыгранные тесты конкретным юзером /users/:id/played/:test_id

- Сервер возвращает правильные ответы, возвращает ошибки HTTP с body, по которым можно понять, что произошло ***+10***
   ***Example***: if registration fails, json is returned in the following format:
    ```
    {
       denyReasons: ["reason1","reason2"]
    }
    ```
- Реализована регистрация пользователей ***+20***
- Реализована аутентификация пользователей ***+20***
- Реализована авторизация пользователей ***+20***
- Приложение отображает данные, которые получает от бекенда.***+20***
- Использован nodejs и express ***+20***

# Frontend
#### Общие требования (+120):
  - Должны присутствовать компоненты: "Main", "Dashboard", "Sign up", "Login" ***+10***
  - Блок header содержит кнопку смены языка, при нажатии на которую происходит изменение языка приложения ***+20***
  - Блок footer содержит ссылку на RSS и сслыки на github-страницы авторов ***+10***
  - Элементы имею hover-эффекты при наведении ***+10***
  - Приложение SPA ***+20***
  - Весь HTML-контент генерируется JS ***+20***
  - Используется Webpack для сборки приложения ***+10***
  - Использвуется Eslint с Airbnb style guide ***+10***
  - Код разбит на модули ***+10***
  - Приложение адаптивное, работает на разрешениях от 320px и выше ***+20***
  



#### Main page (+30):

  - "Main" должен содержать блок приветствия с кнопкой перехода к тесту Reaction Time ***+10***
  - "Main" должен содержать список доступных тестов, при нажатии на которые пользователь переходит к тесту ***+10***
  - Блок каждого теста должен содержать картинку, название, краткое описание теста ***+10***
  
#### Dashboard page (+50)

 - "Dashboard" содержит блок информации о пользователе (никнейм, дата регистрации, ссылка на профиль), (если пользователь не авторизирован, информация о госте) ***+15***
 - "Dashboard" содержит блок изображения всех тестов, по нажатию на которые осуществляется переход к соответсвующему тесту ***+10***
 - "Dashboard" содержит блок статистики пользователя ***+15***:
    - если кнопки перехода к тесту, к его подробной статистике
    - среднее значение результатов за последнии 5 тестов пользователя
    - значение percentile, по результатам последних 5 игр
- "Dashboard" содержит блок с историей последних тестов поьзователя, содержащий дату теста и результат ***+10***

### Login and Registarion (+30)

- Реализована проверка валидности email +10
- Реализована проверка валидности пароля (минимум 6 символов) и проверка совпадения введенных паролей +10
- После регистрации открывается старница Dashboard с уже авторизованным пользователем +10
- Все поля на страницах Login/Registaration выводят сообщения о ошибках, если таковые есть +10

#### Test page (+50)

- Содержит блок приветсвия с логотипом теста, его названием и кратким описанием, кнопкой старта. При нажатии на кнопку осуществляется старт теста ***+10***
- Содержит блок статистики. Представляет собой график средних результатов всех пользователей и текущего ***+30***
- Содержит блок подробного описания теста ***+10***
- По окончании теста появляется окно результатов, содержащее  кнопки сохранения результата и попробовать снова. После сохранения открывается страница Dashboard
 
 ### Tests (+180):
#### Reaction test (+30)

- Красное окно длиться случайное кол-во времени ***+10***
- При нажатии на красное окно, появляется надпись о слишком раннем нажатии и возможностью запустить попытку заного ***+10***
- Красное окно внезапно сменяется зеленым с надписью, чтобы кликнуть. Зеленое окно должно реагировать только на клик мыши. При клике, окно сменяется на окно с результатом текущей попытки ***+10***

#### Sequence Memory test (+30)

- Логика теста реализована правильно ***+20***
- При совершении ошибки в последовательно нажатий, тест завершается, открывается окно с результатами ***+ 10***

#### Aim Trainer Test (+30)

- Логика теста реализована правильно ***+20***
- При клике на 30ю мишень, выводится окно результатов теста с результатом ***+10***

#### Number Memory Test (+30)

- Логика теста реализована правильно ***+20***
- При совершении ошибки в последовательно нажатий, тест завершается, открывается окно с результатами ***+ 10***

#### Verbal memory test (+30)

- Логика теста реализована правильно ***+20***
- Когда очки жизней пользователя достигнут 0, тест завершается, открывается окно с результатами ***+ 10***

#### Typing test 

- Логика теста реализована правильно ***+30***
- Когда время или текст заканчивается, открывается окно с результатами ***+ 10***




# ENGLISH
## Backend
- Created a database
- the database is connected to the server
- Back-end is deployed and responds to POSTman requests 
    https://rscloneserver.onrender.com
     ***Examples*** requests:
    - Information about tests - /tests
     - Information about specific tests played /played/:test_id
     - All tests played by a specific user /users/:id/played
     - Specific tests played by a specific user /users/:id/played/:test_id
  
- Implemented user registration
- Implemented user authentication
- Implemented user authorization
- The application displays the data that it receives from the back end.
- Implemented nodejs and express
  
# Front end
#### General requirements (+120):
 - Should be frequent components: "Home", "Dashboard", "Registration", "Login" ***+10*** 
 - The block header contains the language change setting, while we observe that the application language is changing ****+20***
 - The footer block contains a link to the RSS and links to the github pages of the authors ***+10***
 - Elements have hover effects on hover ***+10***
 - SPA application ***+20***
 - All HTML content is implemented by JS ***+20***
 - Used by Webpack to build apps ***+10***
 - Used by Eslint with Airbnb Style Guide ***+10***
 - The code is divided into modules ***+10***
 - The application is adaptive, works on resolutions from 320px and above ***+20***
  



#### Main page (+30):

 - "Main" should block the reception of the greeting with the transition to the test Reaction time ***+10***
 - "Main" should be collected a list of available tests, among which there are users who collect ***+10*** for the test
 - The block of each test should receive a picture, a title, a brief description of the test ***+10***
  
#### Dashboard Page (+50)

 - "Dashboard" contains a block of information about the user (nickname, date of registration, link to the profile), (if the user is not authorized, information about the guest) ***+15***
 - "Dashboard" contains a block of images of all tests, by clicking on which you go to the corresponding test ***+10***
 - "Control Panel" contains a block of user statistics ***+15***:
      - if the button goes to the test, to its detailed statistics
      - average result after 5 user tests
      - percentile value, based on the results of the last 5 games
- "Dashboard" contains a block with the latest pathogen tests, infected with the test and the result ***+10***

### Login and Register (+30)

- Implemented email validation +10
- Implemented checking the correctness of the password (minimum 6 characters) and checking the coincidence of the entered passwords +10
- After registration, the Dashboard page opens with an already authorized user +10
- All fields on the Login / Register pages display error messages, if any +10

#### Test page (+50)

- Contains a block with the logo of the test, its name and a brief description, the start button. When organizing the start of the test ***+10***
- Contains a block of statistics. Represents a graph of average results among users and users ***+30***
- Contains a block of detailed test description ***+10***
- In the course of the protocol After opening, open the page
 
### Tests (+180):
#### Reflex Test (+30)

- Red window lasted a random amount of time ***+10***
- When spawning on a red box, the spawn spawn is too common and may spawn outside of ***+10***
- The red window of surprise is replaced with a green inscription to click. The green window should only respond to mouse clicks. When clicked, the window changes to a window with a visible view ***+10***

#### Serial memory test (+30)

- Test logic implemented correctly ***+20***
- If you make a mistake in successive pressing, the test ends, a window with the results opens ***+ 10***

#### Aim Trainer Test (+30)

- Test logic implemented correctly ***+20***
- When you click on the 30th target, the test result is displayed with the result *** + 10 ***

#### Number memory test (+30)

- Test logic implemented correctly ***+20***
- If you make a mistake in successive pressing, the test ends, a window with the results opens ***+ 10***

#### Verbal Memory Test (+30)

- Test logic implemented correctly ***+20***
- When the user's hitpoints reach 0, the test ends, a window opens with the results ***+ 10***

#### Typing test

- Test logic implemented correctly ***+30***
- When the time or text ends, a window opens with the results ***+ 10***