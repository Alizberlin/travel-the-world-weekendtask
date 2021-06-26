var bars = [
    'Frankfurt',
    'Berlin',
    'London',
    'Paris',
    'Milan',
    'Lisbon',
    'Hamburg'
];

var friends = [
    'Amsterdam',
    'Ankara',
    'Athens',
    'Bangkok',
    'Belgrade',
    'Bucharest',
    'Budapest',
    'Cairo',
    'Copenhagen',
    'Dublin',
    'Gibraltar',
    'Havana',
    'Helsinki',
    'Madrid',
    'Moscow',
    'Oslo',
    'Ottawa',
    'Rome',
    'Stockholm',
    'New York'
];

var randomNumber = Math.floor(Math.random()*bars.length);
var randomCity = Math.floor(Math.random()*friends.length);

var barname = bars[randomNumber];
var friendname = friends[randomCity];

var meraput = document.getElementById("sme");
meraput.addEventListener("click", function(e){

    e.preventDefault();
    document.getElementById("from").value = barname;
    document.getElementById("to").value = friendname;
    
});





