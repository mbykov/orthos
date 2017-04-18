// convert greek utf-8 to and from tona, oxia, precombined

let comb = require('./lib/comb');
let c = comb.combined;
let ac = comb.accents;
// let plains = comb.plains;
// let oxia = comb.oxia;
let dc = comb.downcase;

// пока что я убираю барию совсем


let stresses = ['́'];

module.exports = orthos();

function orthos() {
    if (!(this instanceof orthos)) return new orthos();
}

orthos.prototype.toComb = function(str) {
    for (let s in c) {
        if (!s) continue
        str = str.split(s).join(c[s])
    }
    return str
}

orthos.prototype.plain = function(str) {
    let plains = []
    str.split('').forEach(function(sym) {
        if ([ac.oxia, ac.peris].includes(sym)) return
        plains.push(sym)
     })
    return plains.join('')
}

orthos.prototype.correctAccent = function(str) {
    let cleans = []
    let exists = false
    str.split('').forEach(function(sym) {
        if (exists && [ac.oxia, ac.peris].includes(sym)) return
        if ([ac.oxia, ac.peris].includes(sym)) exists = true
        cleans.push(sym)
    })
    return cleans.join('')
}

orthos.prototype.run = function(str) {
    for (let s in c) {
        if (!s) continue;
        str = str.replace(s, c[s]);
    }
    return str;
}

// oxia to tonos
// orthos.prototype.oxia2tonos = function(str) {
//     for (let s in oxia) {
//         if (!s) continue;
//         str = str.replace(s, oxia[s]);
//     }
//     log('O', str);
//     return str;
// }

// str without stress symbol(s)
// orthos.prototype.rough = function(str) {
//     let syms = str.split('');
//     let cleans = [];
//     for (let s of syms) {
//         if (stresses.includes(s)) continue;
//         if (c[s]) cleans.push(c[s]);
//         else cleans.push(s);
//     }
//     return cleans.join('');
// }

// downcase
orthos.prototype.dc = function(str) {
    let dcs = []
    str.split('').forEach(function(sym) {
        if (dc[sym]) dcs.push(dc[sym])
        else dcs.push(sym)
    })
    return dcs.join('')
}

orthos.prototype.ac = ac

orthos.prototype.xxx = function(str) {
}


function log() { console.log.apply(console, arguments); }

function inc(arr, item) {
    return (arr.indexOf(item) > -1) ? true : false;
}
