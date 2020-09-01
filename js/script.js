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
    var dataCorrente = moment($("h1.month").attr("data-this-date"));
    days(dataCorrente);
    holidays(dataCorrente);
    $("button#next").click(function() {
        next(dataCorrente)
    });
    $("button#prev").click(function() {
        prev(dataCorrente)
    });
});
// ** FUNZIONI **
function days(data) {
    $("ul.month-list").empty();
    var daysMonth = data.daysInMonth();
    var month = data.format("MMMM");
    var year = data.format("YYYY");
    $("h1.month").html(month + " " + year);
    for (var i = 1; i <= daysMonth; i++) {
        var source = $("#day-template").html();
        var template = Handlebars.compile(source);
        var context = {
            day: addZero(i),
            month: month,
            completeDate: year + "-" + data.format("MM") + "-" + addZero(i),
        };
        var html = template(context);
        $(".month-list").append(html);
    };
};
function addZero(n) {
    if (n < 10) {
        return "0" + n;
    }
    return n;
};
function holidays(data){
    $.ajax(
    {
        url: 'https://flynn.boolean.careers/exercises/api/holidays',
        method: 'GET',
        data:{
            year: data.year(),
            month: data.month()
        },
        success : function(risposta){
            for (var i = 0; i < risposta.response.length; i++) {
              var listItem = $('li[data-completa="'+ risposta.response[i].date + '"]');
              listItem.addClass('holiday');
              listItem.append('-' + risposta.response[i].name);
            }
        },
        error: function (){
            alert('errore')
        }
    }
    );
};
function next(data) {
    if (data.month() == 11) {
        alert("Non puoi proseguire");
    } else {
        data.add(1, "months");
        days(data);
        holidays(data);
    }
};
function prev(data) {
    if (data.month() == 0) {
        alert("Non puoi proseguire");
    } else {
        data.subtract(1, "months");
        days(data);
        holidays(data);
    }
};
