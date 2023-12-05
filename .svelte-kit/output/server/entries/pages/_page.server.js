import md5 from "md5";
import "os";
import { c as CreatePool, d as GetUsers, a as CreateOperator } from "../../chunks/db.js";
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
      fr: "Menu",
      de: "Menü",
      uk: "Меню",
      nl: "Menu"
    },
    Email: {
      en: "EMAIL",
      ru: "EMAIL",
      fr: "EMAIL",
      de: "E-Mail",
      uk: "EMAIL",
      nl: "E-mail"
    },
    Имя: {
      en: "Name",
      ru: "Имя",
      fr: "Nom",
      uk: "Ім'я",
      nl: "Naam",
      de: "Name"
    },
    Пароль: {
      en: "Password",
      ru: "Пароль",
      fr: "Mot de passe",
      uk: "Пароль",
      nl: "Wachtwoord",
      de: "Passwort"
    },
    "Повторить пароль": {
      en: "Confirm Password",
      ru: "Повторить пароль",
      fr: "Confirmer le mot de passe",
      uk: "Підтвердити пароль",
      nl: "Bevestig wachtwoord",
      de: "Passwort bestätigen"
    },
    Зарегистрироваться: {
      en: "Register",
      ru: "Зарегистрироваться",
      fr: "S'inscrire",
      uk: "Зареєструватися",
      nl: "Registreren",
      de: "Registrieren"
    },
    "Фотография профиля": {
      en: "Profile Picture",
      ru: "Фотография профиля",
      fr: "Image de profil",
      uk: "Фото профілю",
      nl: "Profielfoto",
      de: "Profilbild"
    },
    "Пароли не совпадают": {
      en: "Passwords do not match",
      ru: "Пароли не совпадают",
      fr: "Les mots de passe ne correspondent pas",
      uk: "Паролі не співпадають",
      nl: "Wachtwoorden komen niet overeen",
      de: "Passwörter stimmen nicht überein"
    },
    "Ошибка загрузки изображения": {
      en: "Image upload error",
      ru: "Ошибка загрузки изображения",
      fr: "Erreur de téléchargement de l'image",
      uk: "Помилка завантаження зображення",
      nl: "Fout bij het uploaden van de afbeelding",
      de: "Fehler beim Hochladen des Bildes"
    },
    "Transmit File": {
      en: "Transmit File",
      ru: "Передать файл",
      fr: "Transfert du fichier",
      de: "Datei übertragen",
      uk: "Передача файлу",
      nl: "Bestand verzenden"
    },
    "Launch Call Center": {
      en: "Launch Call Center",
      ru: "Запустить колл-центр",
      fr: "Editer le centre d'appel",
      de: "Call Center starten",
      uk: "Запустити колл-центр",
      nl: "Belcentrum starten"
    },
    "Edit Call Center": {
      en: "Edit Call Center",
      ru: "Редактировать колл-центр",
      fr: "Editer le centre d'appel",
      de: "Call Center bearbeiten",
      uk: "Редагувати колл-центр",
      nl: "Belcentrum bewerken"
    },
    "Cancel Edit Call Center": {
      en: "Cancel Edit Call Center",
      ru: "Завершить редактировать колл-центр",
      fr: "Terminer l'édition du centre d'appels",
      de: "Bearbeitung des Call Centers abbrechen",
      uk: "Скасувати редагування колл-центру",
      nl: "Bewerking van het belcentrum annuleren"
    },
    "Language Select": {
      en: "Language Select",
      ru: "Выбор языка",
      fr: "Sélection de langue",
      de: "Sprachauswahl",
      uk: "Вибір мови",
      nl: "Taal selecteren"
    },
    "New Dep": {
      en: "New Dep",
      ru: "Новый отдел",
      fr: "Nouveau tronçon",
      de: "Neue Abteilung",
      uk: "Новий відділ",
      nl: "Nieuwe afdeling"
    },
    Admin: {
      en: "Admin",
      ru: "Админ",
      fr: "Nouveau tronçon",
      de: "Administrator",
      uk: "Адміністратор",
      nl: "Beheerder"
    },
    Dep: {
      en: "Dep",
      ru: "Отдела",
      fr: "Division",
      de: "Abteilung",
      uk: "Відділ",
      nl: "Afdeling"
    },
    Desc: {
      en: "Desc",
      ru: "Админ отдела",
      fr: "Département Admin",
      de: "Beschreibung",
      uk: "Опис",
      nl: "Beschrijving"
    },
    "invalid password": {
      en: "Invalid password. Please try again.",
      ru: "Неверный пароль. Попробуйте ввод еще раз.",
      fr: "Mot de passe incorrect. Essayez de le saisir à nouveau.",
      de: "Ungültiges Passwort. Bitte versuchen Sie es erneut.",
      uk: "Неправильний пароль. Спробуйте ще раз.",
      nl: "Ongeldig wachtwoord. Probeer het opnieuw."
    },
    "input admin name": {
      en: "input admin name",
      ru: "введите имя администратора",
      fr: "entrer l'adresse e-mail *",
      de: "Geben Sie den Administratornamen ein",
      uk: "Введіть ім'я адміністратора",
      nl: "Voer de beheerdersnaam in"
    },
    "input operator name": {
      en: "input operator name",
      ru: "введите имя оператора",
      fr: "entrer l'adresse e-mail",
      de: "Geben Sie den Operatornamen ein",
      uk: "Введіть ім'я оператора",
      nl: "Voer de operatornaam in"
    },
    "input admin email": {
      en: "input admin email *",
      ru: "введите email администратора *",
      fr: "entrer l'adresse",
      de: "Geben Sie die Administrator-E-Mail-Adresse ein *",
      uk: "Введіть електронну адресу адміністратора *",
      nl: "Voer de e-mail van de beheerder in *"
    },
    "input operator email": {
      en: "input operator email *",
      ru: "введите email оператора *",
      fr: "entrer e-mail",
      de: "Geben Sie die E-Mail-Adresse des Operators ein *",
      uk: "Введіть електронну адресу оператора *",
      nl: "Voer de e-mail van de operator in *"
    },
    "input user name *": {
      en: "input user name *",
      ru: "введите имя пользователя *",
      fr: "entrer l'adresse e-mail *",
      de: "Geben Sie den Benutzernamen ein *",
      uk: "Введіть ім'я користувача *",
      nl: "Voer de gebruikersnaam in *"
    },
    "input email address": {
      en: "input email address",
      ru: "введите email пользователя",
      fr: "entrer e-mail",
      de: "Geben Sie die E-Mail-Adresse ein",
      uk: "Введіть електронну адресу",
      nl: "Voer het e-mailadres in"
    },
    "input description": {
      en: "input description",
      ru: "введите описание",
      fr: "entrer une description",
      de: "Beschreibung eingeben",
      uk: "Введіть опис",
      nl: "Voer een beschrijving in"
    },
    "Download Call Center": {
      en: "Download Call Center",
      ru: "Загрузить колл-центр",
      fr: "Télécharger Call Center",
      de: "Call Center herunterladen",
      uk: "Завантажити колл-центр",
      nl: "Belcentrum downloaden"
    },
    "Choose Tarif": {
      en: "Choose Tarif",
      ru: "Выбрать тариф",
      fr: "Choisir le tarif",
      de: "Tarif auswählen",
      uk: "Виберіть тариф",
      nl: "Kies tarief"
    },
    "Our Pricing": {
      en: "Our Pricing",
      ru: "Наши тарифы",
      fr: "Nos tarifs",
      de: "Unsere Preise",
      uk: "Наші тарифи",
      nl: "Onze prijzen"
    },
    TRIAL: {
      en: "TRIAL",
      ru: "Пробный",
      fr: "TRIAL",
      de: "TEST",
      uk: "ПРОБНИЙ",
      nl: "PROEF"
    },
    "Try and Buy": {
      en: "Try and Buy",
      ru: "Попробовать и купить",
      fr: "Essayez et achetez",
      de: "Probieren Sie es aus und kaufen Sie",
      uk: "Спробуйте і купуйте",
      nl: "Probeer en koop"
    },
    Duration: {
      en: "Duration",
      ru: "Период",
      fr: "Durée",
      de: "Dauer",
      uk: "Тривалість",
      nl: "Duur"
    },
    "Waiting Mode": {
      en: "Waiting Mode For Operator",
      ru: "Режим ожидания оператора",
      fr: "Mode d'attente pour l'opérateur",
      de: "Wartemodus für den Operator",
      uk: "Режим очікування для оператора",
      nl: "Wachtmodus voor de operator"
    },
    "Multi-Operator Mode": {
      en: "Multi-Operator Mode",
      ru: "Режим нескольких операторов",
      fr: "Mode multi-opérateurs",
      de: "Multi-Operator-Modus",
      uk: "Режим багатьох операторів",
      nl: "Multi-operator modus"
    },
    "Total Depts": {
      en: "Total Depts",
      ru: "Кол-во отделов",
      fr: "Nombre de divisions",
      de: "Gesamtabteilungen",
      uk: "Загальна кількість відділень",
      nl: "Totaal aantal afdelingen"
    },
    "Dedicated Servers": {
      en: "Dedicated Servers",
      ru: "Выделенные серверы",
      fr: "Serveurs dédiés",
      de: "Dedizierte Server",
      uk: "Відділені сервери",
      nl: "Dedicated servers"
    },
    "Full Support": {
      en: "Full Support",
      ru: "Служба поддержки",
      fr: "Soutien complet",
      de: "Voller Support",
      uk: "Повна підтримка",
      nl: "Volledige ondersteuning"
    },
    Days: {
      en: "Days",
      ru: "дней",
      fr: "jours",
      de: "Tage",
      uk: "днів",
      nl: "Dagen"
    },
    month: {
      en: "month",
      ru: "месяц",
      fr: "mois",
      de: "Monat",
      uk: "місяць",
      nl: "Maand"
    },
    "up to": {
      en: "up to",
      ru: "до",
      fr: "jusqu'à",
      de: "bis zu",
      uk: "до",
      nl: "tot aan"
    },
    no: {
      en: "no",
      ru: "нет",
      fr: "non",
      de: "nein",
      uk: "ні",
      nl: "nee"
    },
    yes: {
      en: "yes",
      ru: "да",
      fr: "oui",
      de: "ja",
      uk: "так",
      nl: "ja"
    },
    "Best Value": {
      en: "Best Value",
      ru: "Лучшая цена",
      fr: "Meilleure valeur",
      de: "Bestes Preis-Leistungs-Verhältnis",
      uk: "Найкраща вартість",
      nl: "Beste waarde"
    },
    BASIC: {
      en: "BASIC",
      ru: "БАЗОВЫЙ",
      fr: "BASIC",
      de: "BASIS",
      uk: "БАЗОВИЙ",
      nl: "BASIS"
    },
    "BUY NOW": {
      en: "BUY NOW",
      ru: "КУПИТЬ",
      fr: "BUY",
      de: "JETZT KAUFEN",
      uk: "КУПИТИ",
      nl: "KOOP NU"
    },
    Choose: {
      en: "CHOOSE",
      ru: "ВЫБРАТЬ",
      fr: "CHOISIR",
      de: "AUSWÄHLEN",
      uk: "ВИБРАТИ",
      nl: "KIES"
    },
    unlim: {
      en: "UNLIM",
      ru: "Неогр",
      fr: "Illimité",
      de: "Unbegrenzt",
      uk: "Необмеж",
      nl: "Onbeperkt"
    },
    "Save and Close": {
      en: "Save and Close",
      ru: "Сохранить и закрыть",
      fr: "Sauver et fermer",
      de: "Speichern und schließen",
      uk: "Зберегти та закрити",
      nl: "Opslaan en sluiten"
    },
    "How to introduce you?": {
      en: "How to introduce you?",
      ru: "Как вас представить?",
      fr: "Comment puis-je vous présenter?",
      de: "Wie kann ich dich vorstellen?",
      uk: "Як тебе представить"
    },
    "Create my own net": {
      en: "Create my own net",
      ru: "Создать свою подсеть",
      fr: "Créer mon propre réseau",
      uk: "Створіть свою власну мережу",
      nl: "Mijn eigen netwerk maken",
      de: "Erstelle mein eigenes Netzwerk"
    },
    CLASS: {
      en: "CLASS",
      ru: "КЛАСС",
      fr: "CLASSE",
      uk: "КЛАС",
      nl: "KLASSE",
      de: "KLASSE"
    },
    LESSON: {
      en: "LESSON",
      ru: "УРОК",
      fr: "LEÇON",
      uk: "УРОК",
      nl: "LES",
      de: "UNTERRICHT"
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
  return {
    check: true,
    host,
    operator: kolmit.operator,
    name: kolmit.name,
    abonent,
    lang: kolmit.lang,
    dict,
    users: res && res.users ? res.users : "",
    ice_conf
  };
}
const actions = {
  default: async ({ cookies, request, url }) => {
    const abonent = url.searchParams.get("abonent");
    const data = await request.formData();
    if (data.get("psw") !== data.get("confirmPassword"))
      return;
    let q = {
      abonent,
      img: data.get("oper_pic_text"),
      name: data.get("name"),
      email: data.get("email"),
      psw: md5(data.get("psw")),
      lang: data.get("lang")
    };
    cookies.set(
      "abonent:" + q.abonent,
      JSON.stringify({
        name: q.name,
        operator: q.email,
        abonent: q.abonent,
        psw: q.psw,
        lang: q.lang
      }),
      { maxAge: 60 * 60 * 24 * 30 * 1e3 }
    );
    await CreateOperator(q);
  }
};
export {
  actions,
  load
};
