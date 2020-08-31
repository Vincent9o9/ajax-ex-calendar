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

    insertDays(dataCorrente);
    insertHolidays(dataCorrente);


});

// **  FUNZIONI  **

function insertHolidays(data) {
    $.ajax(
    {
        url: 'https://flynn.boolean.careers/exercises/api/holidays',
        method: 'GET',
        data: {
            year:,
            month:
        },
        success: function(){

        },
        error: function (){
            alert('errore')
        }
    }
    );
};

function insertDays(data) {
    var month = data.format('MMMM');
    var year = data.format('YYYY');

    $('h1.month').html(month + ' ' + year);

    var daysMonth = data.daysInMonth();

    for (var i = 1; i <= daysMonth; i++) {

        var source = $("#day-template").html();
        var template = Handlebars.compile(source);

        var context = {
            day: addZero(i),
            month: month,
            completeDate : year + '-' + month + '-' + addZero(i)
        };

        var html = template(context);

        $('.month-list').append(html);
    }
};

function addZero(n) {
    if (n<10) {
        return '0' + n;
    }
    return n;
};
