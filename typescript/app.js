"use strict";
(function () {
    function getAge() {
        return 100 + 100 + 300;
    }
    var NAME = "Vanesa";
    var LASTNAME = "Gomez";
    var AGE = 30;
    var person = "\n  " + NAME + " \n  " + LASTNAME + " \n  (" + getAge() + ")";
    //Vanesa Gomez (Age: 30);
    console.log(person);
})();
