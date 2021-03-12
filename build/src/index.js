"use strict";
const max = 255;
const min = 0;
let ratio = 0.3;
let objColors = [];
let boolCompa = {
    r: false,
    g: false,
    b: false
};
function changeColor() {
    const value0 = document.getElementsByTagName('input')[0].value;
    const col = {
        r: parseInt(value0.substring(1, 3), 16) / max,
        g: parseInt(value0.substring(3, 5), 16) / max,
        b: parseInt(value0.substring(5, 7), 16) / max,
        o: 0
    };
    return response(col);
}
function training() {
    const value0 = document.getElementsByTagName('input')[0].value;
    const newobjColors = {
        r: (parseInt(value0.substring(1, 3), 16) / max),
        g: (parseInt(value0.substring(3, 5), 16) / max),
        b: (parseInt(value0.substring(5, 7), 16) / max),
        o: 1
    };
    objColors.push(newobjColors);
}
function response(input) {
    let suma = {
        r: 0,
        g: 0,
        b: 0,
        o: 0
    };
    for (const it of objColors) {
        suma.r += it.r;
        suma.g += it.g;
        suma.b += it.b;
    }
    suma.r = compa(input.r, (suma.r / objColors.length), 'r') || compa(input.r, (suma.r / objColors.length), 'r');
    suma.g = compa(input.g, (suma.g / objColors.length), 'g') || compa(input.g, (suma.g / objColors.length), 'g');
    suma.b = compa(input.b, (suma.b / objColors.length), 'b') || compa(input.b, (suma.b / objColors.length), 'b');
    if (boolCompa.r) {
        suma.r = 1;
    }
    if (boolCompa.g) {
        suma.g = 1;
    }
    if (boolCompa.b) {
        suma.b = 1;
    }
    const fin = (suma.r + suma.g + suma.b) / 3;
    console.log(boolCompa);
    boolCompa.r = false;
    boolCompa.g = false;
    boolCompa.b = false;
    if (fin >= 0.5) {
        return 1;
    }
    return 0;
}
function compa(val1, val2, key) {
    let num = 0;
    console.log(val1, val2);
    if ((Math.round(val1) * 10000) / 10000 === (Math.round(val2) * 10000) / 10000) {
        num = 1;
        if (key == 'r') {
            boolCompa.r = true;
        }
        if (key == 'g') {
            boolCompa.g = true;
        }
        if (key == 'b') {
            boolCompa.b = true;
        }
    }
    if (val1 <= val2 + ratio && val1 >= val2 - ratio) {
        num = 1;
    }
    return num;
}
function ver() {
    const value = document.getElementsByTagName('input')[0].value;
    document.getElementById('divv').style.background = `${value}`;
    const res = changeColor();
    if (res) {
        document.getElementById('text').style.color = 'white';
    }
    else {
        document.getElementById('text').style.color = 'black';
    }
}
