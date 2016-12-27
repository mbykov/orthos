// hash
// oxia, varia. perispomeni, psili, dasia, ypogegrammeni,dialitica
//
// ox, vr, pr
// ps, ds
// ps-ox, ps-vr, ps-pr
// ds-ox, ds-vr, ds-pr
// yp, dia?


var ac = {
    'oxia': '\u0301',
    'varia': '\u0060',
    'peris': '\u0342',
    '': '',
    '': '',
    'psili': '\u0313',
    'dasia': '\u0314',
    '': '',
    '': '',
    'ypo': '\u0345',
    '': ''
}
// ox, vr, pr
// ps, ds
// ps-ox, ps-vr, ps-pr
// ds-ox, ds-vr, ds-pr
// yp, dia?

// oxia should be both - β 'ά' ρβαρος
var combined = {
    'ά': ['α', ac.oxia].join(''), // tonos
    'ά': ['α', ac.oxia].join(''), // oxia
    'ὰ': ['α', ac.oxia].join(''), // varia
    'ὰ': ['α', ac.oxia].join(''), // varia comb
    'ἀ': ['α', ac.psili].join(''),
    'ἁ': ['α', ac.dasia].join(''),
    'ᾶ': ['α', ac.peris].join(''),
    'ἄ': ['α', ac.psili, ac.oxia].join(''),
    'ἅ': ['α', ac.dasia, ac.oxia].join(''),
    'ἅ': ['α', ac.dasia, ac.oxia].join(''),
    'ἃ': ['α', ac.dasia, ac.varia].join(''),
    'ᾳ': ['α', ac.ypo].join(''),
    'ᾄ': ['α', ac.psili, ac.oxia, ac.ypo].join(''),
    'ᾅ': ['α', ac.dasia, ac.oxia, ac.ypo].join(''),
    '': '',
    'ί': ['ι', ac.oxia].join(''), // tonos
    'ί': ['ι', ac.oxia].join(''),
    'ὶ': ['ι', ac.oxia].join(''), //varia
    'ὶ': ['ι', ac.oxia].join(''), //varia comb
    'ἰ': ['ι', ac.psili].join(''),
    'ἱ': ['ι', ac.dasia].join(''),
    'ἴ': ['ι', ac.psili, ac.oxia].join(''),
    'ἴ': ['ι', ac.dasia, ac.oxia].join(''),
    '': '', // dialitica?
    'ῖ': ['ι', ac.peris].join(''),

    'ἶ': ['ι', ac.psili, ac.peris].join(''),
    '': '',
    'έ': ['ε', ac.oxia].join(''), // tonos
    'έ': ['ε', ac.oxia].join(''),
    '': '', // e varia?
    'ὲ': ['ε', ac.oxia].join(''), // varia comb
    'ἐ': ['ε', ac.psili].join(''),
    'ἑ': ['ε', ac.dasia].join(''),
    'ἔ': ['ε', ac.psili, ac.oxia].join(''),
    'ἕ': ['ε', ac.dasia, ac.oxia].join(''),
    '': '',
    'ό': ['ο', ac.oxia].join(''), // tonos
    'ό': ['ο', ac.oxia].join(''),
    'ὸ': ['ο', ac.oxia].join(''),
    'ὸ': ['ο', ac.oxia].join(''), // varia comb
    'ὁ': ['ο', ac.psili].join(''),
    'ὀ': ['ο', ac.dasia].join(''),
    'ὄ': ['ο', ac.psili, ac.oxia].join(''),
    'ὅ': ['ο', ac.dasia, ac.oxia].join(''),
    '': '',
    'ώ': ['ω', ac.oxia].join(''), // tonos
    'ώ': ['ω', ac.oxia].join(''),
    'ὼ': ['ω', ac.oxia].join(''),
    'ῶ': ['ω', ac.peris].join(''),
    'ῷ': ['ω', ac.peris, ac.ypo].join(''),
    '': '',
    'ή': ['η', ac.oxia].join(''), // tonos

    'ή': ['η', ac.oxia].join(''),
    'ὴ': ['η', ac.oxia].join(''),
    'ὴ': ['η', ac.oxia].join(''), // comb
    'ῆ': ['η', ac.peris].join(''),
    'ἠ': ['η', ac.psili].join(''),
    'ἡ': ['η', ac.dasia].join(''),
    'ἤ': ['η', ac.psili, ac.oxia].join(''), // psili+oxia
    'ἢ': ['η', ac.psili, ac.varia].join(''),
    '': '', // peris
    'ᾖ': ['η', ac.psili, ac.peris, ac.ypo].join(''),
    'ᾗ': ['η', ac.dasia, ac.peris, ac.ypo].join(''),
    'ῃ': ['η', ac.ypo].join(''),
    'ῇ': ['η', ac.peris, ac.ypo].join(''),
    '': '',
    'ύ': ['υ', ac.oxia].join(''), // tonos
    'ύ': ['υ', ac.oxia].join(''),

    'ὺ': ['υ', ac.oxia].join(''), // τοὺς <=comb varia
    'ὺ': ['υ', ac.oxia].join(''),
    '': '',
    'ὑ': ['υ', ac.dasia].join(''),
    'ῦ': ['υ', ac.peris].join(''),
    'ὑ': ['υ', ac.psili].join(''),
    'ὐ': ['υ', ac.dasia].join(''), // dasia?
    'ὕ': ['υ', ac.dasia, ac.oxia].join(''),
    'ὔ': ['υ', ac.psili, ac.oxia].join(''), // psili+ oxia?
    'ὖ': ['υ', ac.psili, ac.peris].join(''),
    '': ''
}

/*    ΐ/ ϊ dialitic code?   no dasia+peris
*/


var c = {
    'ἅ': 'ἅ',
    'ἀ': 'ἀ',
    'ὰ': 'ά', // не в ту сторону - как быть - сначала цикл по бариям?
    'ἄ': 'ἄ',
    'ὰ': 'ὰ',
    'ἂ': 'ἄ',
    '': '',
    '': '',
    // i
    'ί': 'ί',
    'ἰ': 'ἰ',
    'ἶ': 'ἶ',
    'ὶ': 'ί', // baria
    'ἱ': 'ἱ',
    '': '',
    '': '',
    // e
    'ὲ': 'ὲ', // \
    'ἐ': 'ἐ', // )
    'ἑ': 'ἑ', // (
    'ἔ': 'ἔ',
    'έ': 'έ', // /
    '': '',
    '': '',
    '': '',
    // u
    'ὖ': 'ὖ',
    'ὐ': 'ὐ',
    'ῦ': 'ῦ',
    'ὑ': 'ὑ',
    'ύ': 'ύ',
    '': '',

    // 'ὑ': 'ὑ', // неясно, какой знак
    'ὺ': 'ὺ',
    // i
    'ῖ': 'ῖ',
    '': '',
    '': '',
    '': '',
    // h
    'ὴ': 'ὴ',
    'ῆ': 'ῆ',
    'ἡ': 'ἡ',
    'ἤ': 'ἤ',
    'ἢ': 'ἢ',
    'ή': 'ή',
    '': '',
    '': '',
    '': '',
    '': '',
    // O
    'Ὅ': 'ὅ',
    'ό': 'ὸ',
    'ὅ': 'ὅ',
    'ὸ': 'ό',
    'ὁ': 'ὁ',
    'ό': 'ό',
    '': '',
    '': '',
    '': '',
    '': '',
    // w
    'ὡ': 'ὡ',
    'ῶ': 'ῶ',
    'ῷ': 'ῷ',
    // 'ῷ': 'ῳ',
    'ὥ': 'ὥ',
    '': '',
    '': '',
    '': '',
    '': '',
    '': ''
};

var oxia = {
    'ά': 'ά',
    '': '',
    '': '',
    '': '',
    'ί': 'ί',
    '': '',
    '': '',
    '': '',
    'ό': 'ό',
    '': '',
    '': '',
    'ώ': 'ὠ',
    '': '',
    '': '',

    'έ': 'έ',
    '': '',
    '': '',
    '': '',
    'ύ': 'ύ',
    '': '',

    'ὴ': 'ἠ',
    'ή': 'ἠ',
    '': '',

    'Β': 'β',
    'Γ': 'γ',
    'Δ': 'δ',
    'Ζ': 'ζ',
    'Θ': 'θ',
    'Κ': 'κ',
    'Λ': 'λ',
    'Μ': 'μ',
    'Ν': 'ν',
    'Ξ': 'ξ',
    'Π': 'π',
    'Ῥ': 'ῥ',
    'Σ': 'σ',
    'Τ': 'τ',
    'Φ': 'φ',
    'Χ': 'χ',
    'Ψ': 'ψ',
    '': '',
    '': '',
    '': '',

    '': ''

}


module.exports = {
    accents: ac,
    combined: combined,
    oxia: oxia
}
