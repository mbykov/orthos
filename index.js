// convert greek utf-8 to and from tonos and oxia, precombined

let comb = require('./lib/comb');
let c = comb.combined;
let ac = comb.accents;
let dc = comb.downcase;

// barias replaced complitely

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
    if ([ac.oxia, ac.peris, ac.psili, ac.dasia].includes(sym)) return // убраны ударения и придыхания, .dia и .ypo остаются
    plains.push(sym)
  })
  return plains.join('')
}

orthos.prototype.woStress = function(str) {
  let plains = []
  str.split('').forEach(function(sym) {
    if ([ac.oxia, ac.peris].includes(sym)) return //  убраны только ударения
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

// orthos.prototype.run = function(str) {
//     for (let s in c) {
//         if (!s) continue;
//         str = str.replace(s, c[s]);
//     }
//     return str;
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



function log() { console.log.apply(console, arguments); }
