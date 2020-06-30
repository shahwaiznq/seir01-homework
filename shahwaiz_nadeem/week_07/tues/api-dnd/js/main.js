const races = [];
const classes = [];

$.ajax('https://www.dnd5eapi.co/api/races').done(function (data) {
    
    data.results.forEach(element => {
        races.push(element);
    });

    races.forEach(race => {
        $button = $('<button>');
        $button.html(race.name);
        $('#race').append($button);
    });
});

$.ajax('https://www.dnd5eapi.co/api/classes').done(function (data) {
    
    data.results.forEach(element => {
        classes.push(element);
    });

    classes.forEach(dndclass => {
        $button = $('<button>');
        $button.html(dndclass.name);
        $('#class').append($button);
    });
});