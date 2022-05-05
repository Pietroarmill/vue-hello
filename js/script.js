// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


// Vue.config.devtools = true;

// const app = new Vue(
//     {
//         el: '#root',
//         data: {
//             title: 'ciao sono un titolo'
//         }
//     }
// );

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            message: 'Hello World!',
            image: 'https://www.ionos.it/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg'
        }

    }
);