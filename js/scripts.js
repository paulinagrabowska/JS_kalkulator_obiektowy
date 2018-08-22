'use strict';

(function(){
    function Calc(pushed, result) {
        this._pushed = document.querySelectorAll(pushed);
        this._resPlace = document.querySelector(result);
        this._assignEvents(this._pushed);
    }
    Calc.prototype._assignEvents = function(pushed){ 
        pushed.forEach(this._addClick, this);
    }

    Calc.prototype._addClick = function(pushed){
        pushed.addEventListener('click', this._resCalc.bind(this));
    }
    Calc.prototype._resCalc = function(pushed){
        var pushedValue = pushed.target.value;
        if (pushedValue === 'C') {
            this._resPlace.value = '';
        }
        else if (pushedValue === '=') {
            this._resPlace.value = eval(this._resPlace.value);
        }
        else {
            this._resPlace.value += pushedValue;
        }
        return this._resPlace.value;   
    } 
    new Calc ("input[type ='button']", "#res");
})();






