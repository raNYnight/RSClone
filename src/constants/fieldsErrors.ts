export const fieldsErrors = {
  ru: {
    email: {
      name: 'Email',
      req: 'Required',
      invalid: 'invalid email address',
    },
    username: {
      name: 'Username',
      req: 'Required',
    },
    password: {
      name: 'Password',
      req: 'Required',
      invalid: 'Must be at least 6 characters long',
    },
    passConf: {
      name: 'Password confirmation',
      req: 'Required',
      invalid: 'Passwords must match',
    },
  },
  en: {
    email: {
      name: 'Электронная почта',
      req: 'Обязательное поле',
      invalid: 'Некорректный адрес эл. почты',
    },
    username: {
      name: 'Имя',
      req: 'Обязательное поле',
    },
    password: {
      name: 'Пароль',
      req: 'Обязательное поле',
      invalid: 'Не менее 6 символов',
    },
    passConf: {
      name: 'Подтверждение пароля',
      req: 'Обязательное поле',
      invalid: 'Пароли должны совпадать',
    },
  },
};
