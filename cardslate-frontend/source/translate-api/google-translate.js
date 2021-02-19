const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});


const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

translateText('Gracias marc', 'fr')
    .then((newText) => {
        console.log(newText);
})

function hello(){

    console.log('it works')

}























    // .catch((err) => {
    //     console.log(err);
    // });


















    // const detectLanguage = async (text) => {

//     try {
//         let response = await translate.detect(text);
//         return response[0].language;
//     } catch (error) {
//         console.log(`Error at detectLanguage --> ${error}`);
//         return 0;
//     }
// }

// // detectLanguage('Oggi è lunedì')
// //     .then((res) => {
// //         console.log(res);
// //     })
// //     .catch((err) => {
// //         console.log(error);
// //     });