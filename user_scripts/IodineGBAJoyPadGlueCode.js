"use strict";
/*
 Copyright (C) 2012-2015 Grant Galitz
 
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var keyZones = [
    //Use this to control the key mapping:
    //A:
    [88, 74],
    //B:
    [90, 81, 89],
    //Select:
    [16],
    //Start:
    [13],
    //Right:
    [39],
    //Left:
    [37],
    //Up:
    [38],
    //Down:
    [40],
    //R:
    [50],
    //L:
    [49]
];


function randomKeyPress() {
    var random_index = Math.floor(Math.random() * Math.floor(keyZones.length));
    Iodine.keyDown(random_index);
    setTimeout(() => {Iodine.keyUp(random_index)}, 100);
    writeRedTemporaryText("Input: " + getKey(random_index));
}

function getKey(index) {
    switch (index) {
        case 0: return "A";
        case 1: return "B";
        case 2: return "SELECT";
        case 3: return "START";
        case 4: return "RIGHT";
        case 5: return "LEFT";
        case 6: return "UP";
        case 7: return "DOWN";
        case 8: return "R";
        case 9: return "L";
        default: return "ERROR";
    }
}

