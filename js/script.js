// Descrizione:
// Creiamo un calendario dinamico con le festività.
// Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018
// (unici dati disponibili sull’API).
// Milestone 1
// Creiamo il mese di Gennaio, e con la chiamata all'API inseriamo le festività.
// Milestone 2
// Diamo la possibilità di cambiare mese, gestendo il caso in cui l’API non possa
// ritornare festività.

// Link API: https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0

// "response": [
//        {
//            "name": "Capodanno",
//            "date": "2018-01-01"
//        },
//        {
//            "name": "Epifania",
//            "date": "2018-01-06"
//        }
//    ]

$(document).ready(function() {
    var dataCorrente = moment('2018-01-01');
    $('h1.month').html(dataCorrente.format('MMMM' + ' ' + 'YYYY'));
});
