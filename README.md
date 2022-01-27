1. `npm run extract`
generates only one file which is en.json

2. Make copies of `<Interested_langs>.json`
    ex: `nl.json`, fr.json --> just by copying en.json

    --> manageTranslations (here the issue as its expectation is a folder with files)
3. Now send 2nd step translations to some vendow (here its, `update-locales` package)
    --> this will update `fr.json` etc with translations

4. `npm run compile` 
    (input: translation file updated in step-3)
    output: `compiled-lang/fr.json`

------
side note:
if you are using managetranslations to generate the translations then the out of manageTranslations itself can be used as input to component as messages 
for ex: look at the index.js of the app (loadLocaleData method, line: 10) - directly loading the translation into the app - no need of any formatjs compile command