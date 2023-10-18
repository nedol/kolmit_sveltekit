import 'md5';
import 'os';
import { C as CreatePool, G as GetUsers } from './db-53d6f8c0.js';
import ipc from '@achrinza/node-ipc';
import 'moment';
import 'lodash';
import '@vercel/postgres';
import './index-2b68e648.js';
import 'nodemailer';

const prerender = false;
const ssr = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  prerender: prerender,
  ssr: ssr
});

const ice_conf = {
  stun: {
    urls: [
      "stun:stun1.l.google.com:19302",
      "stun:stun2.l.google.com:19302",
      "stun:stun3.l.google.com:19302",
      "stun:stun4.l.google.com:19302"
    ]
  },
  turn: {
    urls: [
      "turn:delivery-angels.com:3478?transport=udp",
      "turn:delivery-angels.com:3478?transport=tcp",
      "turn:delivery-angels.com:5349?transport=udp",
      "turn:delivery-angels.com:5349?transport=tcp"
    ],
    username: "guest",
    credential: "password"
  },
  lifetimeDuration: "86400s"
};
const dict = [
  {
    Menu: {
      en: "Menu",
      ru: "Меню",
      fr: "Menu"
    },
    "Transmit File": {
      en: "Transmit File",
      ru: "Передать файл",
      fr: "Transfert du fichier"
    },
    "Launch Call Center": {
      en: "Launch Call Center",
      ru: "Запустить колл-центр",
      fr: "Editer le centre d'appel"
    },
    "Edit Call Center": {
      en: "Edit Call Center",
      ru: "Редактировать колл-центр",
      fr: "Editer le centre d'appel"
    },
    "Cancel Edit Call Center": {
      en: "Cancel Edit Call Center",
      ru: "Завершить редактировать колл-центр",
      fr: "Terminer l'édition du centre d'appels"
    },
    "Language Select": {
      en: "Language Select",
      ru: "Выбор языка",
      fr: "Sélection de langue"
    },
    "New Dep": {
      en: "New Dep",
      ru: "Новый отдел",
      fr: "Nouveau tronçon"
    },
    Admin: {
      en: "Admin",
      ru: "Админ",
      fr: "Nouveau tronçon"
    },
    Dep: {
      en: "Dep",
      ru: "Отдела",
      fr: "Division"
    },
    Desc: {
      en: "Desc",
      ru: "Админ отдела",
      fr: "Département Admin"
    },
    "invalid password": {
      en: "Invalid password. Please try again.",
      ru: "Неверный пароль. Попробуйте ввод еще раз.",
      fr: "Mot de passe incorrect. Essayez de le saisir à nouveau."
    },
    "input admin name": {
      en: "input admin name",
      ru: "введите имя администратора",
      fr: "entrer l'adresse e-mail *"
    },
    "input operator name": {
      en: "input operator name",
      ru: "введите имя оператора",
      fr: "entrer l'adresse e-mail"
    },
    "input admin email": {
      en: "input admin email *",
      ru: "введите email администратора *",
      fr: "entrer l'adresse"
    },
    "input operator email": {
      en: "input operator email *",
      ru: "введите email оператора *",
      fr: "entrer e-mail"
    },
    "input user name *": {
      en: "input user name *",
      ru: "введите имя пользователя *",
      fr: "entrer l'adresse e-mail *"
    },
    "input email address": {
      en: "input email address",
      ru: "введите email пользователя",
      fr: "entrer e-mail"
    },
    "input description": {
      en: "input description",
      ru: "введите описание",
      fr: "entrer une description"
    },
    "Download Call Center": {
      en: "Download Call Center",
      ru: "Загрузить колл-центр",
      fr: "Télécharger Call Center"
    },
    "Choose Tarif": {
      en: "Choose Tarif",
      ru: "Выбрать тариф",
      fr: "Choisir le tarif"
    },
    "Our Pricing": {
      en: "Our Pricing",
      ru: "Наши тарифы",
      fr: "Nos tarifs"
    },
    TRIAL: {
      en: "TRIAL",
      ru: "Пробный",
      fr: "TRIAL"
    },
    "Try and Buy": {
      en: "Try and Buy",
      ru: "Попробовать и купить",
      fr: "Essayez et achetez"
    },
    Duration: {
      en: "Duration",
      ru: "Период",
      fr: "Durée"
    },
    "Waiting Mode": {
      en: "Waiting Mode For Operator",
      ru: "Режим ожидания оператора",
      fr: "Mode d'attente pour l'opérateur"
    },
    "Multi-Operator Mode": {
      en: "Multi-Operator Mode",
      ru: "Режим нескольких операторов",
      fr: "Mode multi-opérateurs"
    },
    "Total Depts": {
      en: "Total Depts",
      ru: "Кол-во отделов",
      fr: "Nombre de divisions"
    },
    "Dedicated Servers": {
      en: "Dedicated Servers",
      ru: "Выделенные серверы",
      fr: "Serveurs dédiés"
    },
    "Full Support": {
      en: "Full Support",
      ru: "Служба поддержки",
      fr: "Soutien complet"
    },
    Days: {
      en: "Days",
      ru: "дней",
      fr: "jours"
    },
    month: {
      en: "month",
      ru: "месяц",
      fr: "mois"
    },
    "up to": {
      en: "up to",
      ru: "до",
      fr: "jusqu'à"
    },
    no: {
      en: "no",
      ru: "нет",
      fr: "non"
    },
    yes: {
      en: "yes",
      ru: "да",
      fr: "oui"
    },
    "Best Value": {
      en: "Best Value",
      ru: "Лучшая цена",
      fr: "Meilleure valeur"
    },
    BASIC: {
      en: "BASIC",
      ru: "БАЗОВЫЙ",
      fr: "BASIC"
    },
    "BUY NOW": {
      en: "BUY NOW",
      ru: "КУПИТЬ",
      fr: "BUY"
    },
    Choose: {
      en: "CHOOSE",
      ru: "ВЫБРАТЬ",
      fr: "CHOISIR"
    },
    unlim: {
      en: "UNLIM",
      ru: "Неогр",
      fr: "Illimité"
    },
    "Save and Close": {
      en: "Save and Close",
      ru: "Сохранить и закрыть",
      fr: "Sauver et fermer"
    },
    "How to introduce you?": {
      en: "How to introduce you?",
      ru: "Как вас представить?",
      fr: "Comment puis-je vous présenter?"
    },
    "Create my own net": {
      en: "Create my own net",
      ru: "Создать свою подсеть",
      fr: "Comment puis-je vous présenter?"
    },
    CLASS: {
      en: "CLASS",
      ru: "КЛАСС",
      fr: "CLASS"
    },
    LESSON: {
      en: "LESSON",
      ru: "УРОК",
      fr: "LEÇON"
    }
  }
];
global.rtcPull = { user: {}, operator: {} };
let kolmit;
async function load({ fetch, cookies, route, url, stuff }) {
  let abonent = url.searchParams.get("abonent");
  let prom = new Promise((resolve, reject) => {
    CreatePool(resolve);
  });
  await prom;
  let host = url.origin;
  console.log();
  let res;
  let resp = {
    dict,
    ice_conf
  };
  try {
    res = cookies.get("abonent:" + abonent);
    if (res) {
      kolmit = JSON.parse(res);
    } else {
      resp.check = false;
      resp.abonent = abonent;
      resp.users = "{}";
      resp.host = host;
      return resp;
    }
  } catch (ex) {
    console.log();
  }
  let params = {
    operator: kolmit.operator,
    abonent,
    psw: kolmit.psw
  };
  res = await GetUsers(params);
  ipc.config.id = "abonent";
  ipc.config.retry = 1500;
  ipc.config.silent = true;
  ipc.serve(
    () => ipc.server.on("a-unique-message-name", (message) => {
    })
  );
  ipc.server.start();
  return {
    check: true,
    host,
    operator: kolmit.operator,
    abonent,
    lang: kolmit.lang,
    dict,
    users: res.users || "",
    tarif: res.tarif || "",
    ice_conf
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a091a294.js')).default;
const universal_id = "src/routes/+page.js";
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/3.9178578e.js","_app/immutable/chunks/scheduler.96a9d009.js","_app/immutable/chunks/index.ee48a681.js","_app/immutable/chunks/paths.a9cae6bb.js","_app/immutable/chunks/stores.0a25b4ea.js"];
const stylesheets = ["_app/immutable/assets/3.b2dd6054.css"];
const fonts = ["_app/immutable/assets/icofont.242e5428.woff2","_app/immutable/assets/icofont.53bbbda5.woff"];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-9ca6ec39.js.map
