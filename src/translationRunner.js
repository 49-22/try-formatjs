// translationRunner.js
const manageTranslations = require("react-intl-translations-manager").default;

// es2015 import
// import manageTranslations from 'react-intl-translations-manager';
const en = require("./lang/en.json");

manageTranslations({
  singleMessagesFile: true,
  messagesDirectory: true,
  translationsDirectory: "src/translations/locales/",
  languages: ["ar", "nl", "fr"], // any language you need,
  overrideCoreMethods: {
    provideExtractedMessages: (...args) => {
      console.log(args, "zzzz");
      return [
        {
          descriptors: Object.keys(en).map((key) => ({
            id: key,
            defaultMessage: en[key].defaultMessage,
          })),
        },
      ];
    },
  },
});
