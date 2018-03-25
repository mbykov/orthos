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
  'varia_': '\u0060',
  'varia': '\u0300',
  'peris': '\u0342',
  '': '',
  '': '',
  'psili': '\u0313',
  'dasia': '\u0314',
  '': '',
  'dia': '\u0308',
  'dia-not-combined': '\u00A8',
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
  'ἂ': ['α', ac.psili, ac.oxia].join(''),
  'ἅ': ['α', ac.dasia, ac.oxia].join(''),
  'ἅ': ['α', ac.dasia, ac.oxia].join(''),
  // 'ἃ': ['α', ac.dasia, ac.varia].join(''),
  'ἃ': ['α', ac.dasia, ac.oxia].join(''),

  'ᾳ': ['α', ac.ypo].join(''),
  'ᾄ': ['α', ac.psili, ac.oxia, ac.ypo].join(''),
  'ᾅ': ['α', ac.dasia, ac.oxia, ac.ypo].join(''),
  'ᾁ': ['α', ac.dasia, ac.ypo].join(''),
  'ᾱ': 'α',
  'ᾰ': 'α',
  'ἆ': ['α', ac.psili, ac.peris].join(''),
  'ᾷ': ['α', ac.peris, ac.ypo].join(''),
  'ᾴ': ['α', ac.oxia, ac.ypo].join(''),
  'ἇ': ['α', ac.dasia, ac.peris].join(''),

  'ᾀ': ['α', ac.psili, ac.ypo].join(''),
  'ᾆ': ['α', ac.psili, ac.peris, ac.ypo].join(''),
  '': '',



  'ί': ['ι', ac.oxia].join(''), // tonos
  'ί': ['ι', ac.oxia].join(''),
  'ὶ': ['ι', ac.oxia].join(''), //varia
  'ὶ': ['ι', ac.oxia].join(''), //varia comb
  'ἰ': ['ι', ac.psili].join(''),
  'ἱ': ['ι', ac.dasia].join(''),
  'ἴ': ['ι', ac.psili, ac.oxia].join(''),
  'ἵ': ['ι', ac.dasia, ac.oxia].join(''),
  '': '', // dialitica?
  'ῖ': ['ι', ac.peris].join(''),


  'ἶ': ['ι', ac.psili, ac.peris].join(''),
  'ἷ': ['ι', ac.dasia, ac.peris].join(''),
  'ῑ': 'ι',
  'ῐ': 'ι',
  'ῑ': 'ι',
  '': '',
  'Ϊ': ['ι', ac.dia].join(''), // downcase also
  'ϊ': ['ι', ac.dia].join(''),
  'ΐ':  ['ι', ac.dia, ac.oxia].join(''),
  'ῒ':  ['ι', ac.dia, ac.varia].join(''),
  'ῗ':  ['ι', ac.dia, ac.peris].join(''),
  '': '',
  '': '',
  // ῒΐῗ
  //οἷος

  'έ': ['ε', ac.oxia].join(''), // tonos
  'έ': ['ε', ac.oxia].join(''),
  'ὲ': ['ε', ac.oxia].join(''),
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
  'ὁ': ['ο', ac.dasia].join(''),
  'ὀ': ['ο', ac.psili].join(''),
  'ὄ': ['ο', ac.psili, ac.oxia].join(''),
  'ὂ': ['ο', ac.psili, ac.oxia].join(''),
  'ὅ': ['ο', ac.dasia, ac.oxia].join(''),
  'ὃ': ['ο', ac.dasia, ac.oxia].join(''), // dasia-baria to ox
  '': '',
  '': '',
  '': '',

  'ώ': ['ω', ac.oxia].join(''), // tonos
  'ώ': ['ω', ac.oxia].join(''),
  'ὼ': ['ω', ac.oxia].join(''),
  'ῶ': ['ω', ac.peris].join(''),
  'ῷ': ['ω', ac.peris, ac.ypo].join(''),
  'ὤ': ['ω', ac.psili, ac.oxia].join(''),
  // '': '', ????? dasia-oxia ?
  'ὡ': ['ω', ac.dasia].join(''), //
  'ὠ': ['ω', ac.psili].join(''),
  'ῴ': ['ω', ac.oxia, ac.ypo].join(''),
  'ὦ': ['ω', ac.dasia, ac.peris].join(''),
  'ὧ': ['ω', ac.dasia, ac.peris].join(''),
  'ὥ': ['ω', ac.dasia, ac.oxia].join(''),
  'ῳ': ['ω', ac.ypo].join(''),
  'ᾤ': ['ω', ac.oxia, ac.peris, ac.ypo].join(''),
  'ᾠ': ['ω', ac.peris, ac.ypo].join(''),
  '': '',


  'ή': ['η', ac.oxia].join(''), // tonos
  'ή': ['η', ac.oxia].join(''),
  'ὴ': ['η', ac.oxia].join(''),
  'ὴ': ['η', ac.oxia].join(''), // comb
  'ῆ': ['η', ac.peris].join(''),
  'ἠ': ['η', ac.psili].join(''),
  'ἡ': ['η', ac.dasia].join(''),
  'ἤ': ['η', ac.psili, ac.oxia].join(''), // psili+oxia
  'ἥ': ['η', ac.dasia, ac.oxia].join(''),
  // 'ἢ': ['η', ac.psili, ac.varia].join(''),
  'ἢ': ['η', ac.psili, ac.oxia].join(''),
  '': '',
  'ᾖ': ['η', ac.psili, ac.peris, ac.ypo].join(''),
  'ᾗ': ['η', ac.dasia, ac.peris, ac.ypo].join(''),
  'ῃ': ['η', ac.ypo].join(''),
  'ῇ': ['η', ac.peris, ac.ypo].join(''),

  'ἧ': ['η', ac.dasia, ac.peris].join(''),
  'ἦ': ['η', ac.psili, ac.peris].join(''),
  'ᾔ': ['η', ac.psili, ac.oxia, ac.ypo].join(''),
  'ᾐ': ['η', ac.psili, ac.ypo].join(''),
  'ῄ': ['η', ac.oxia, ac.ypo].join(''),
  'ᾕ': ['η', ac.oxia, ac.dasia, ac.ypo].join(''),
  'ᾑ': ['η', ac.dasia, ac.ypo].join(''),
  '': '',

  '': '',
  'ὗ': ['υ', ac.dasia, ac.peris].join(''),
  'ύ': ['υ', ac.oxia].join(''), // tonos
  'ύ': ['υ', ac.oxia].join(''),

  'ὺ': ['υ', ac.oxia].join(''), // τοὺς <=comb varia
  'ὺ': ['υ', ac.oxia].join(''),
  '': '',
  'ὑ': ['υ', ac.dasia].join(''),
  'ῦ': ['υ', ac.peris].join(''),
  'ὐ': ['υ', ac.psili].join(''),
  'ὑ': ['υ', ac.dasia].join(''),
  'ὕ': ['υ', ac.dasia, ac.oxia].join(''),
  'ὔ': ['υ', ac.psili, ac.oxia].join(''),
  'ὖ': ['υ', ac.psili, ac.peris].join(''),
  'ῡ': 'υ',
  'ῠ': 'υ',
  '': '',
  'Ϋ': ['υ', ac.dia].join(''), // downcase also
  'ϋ': ['υ', ac.dia].join(''),
  'ῢ': ['υ', ac.dia, ac.varia].join(''),
  'ΰ': ['υ', ac.dia, ac.oxia].join(''),
  'ῧ': ['υ', ac.dia, ac.peris].join(''),
  // ῢΰῧ
  '': '',
  '': '',
  '': '',
  '': ''
}



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
  // 'ώ': 'ὠ',
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

  // 'Β': 'β',
  // 'Γ': 'γ',
  // 'Δ': 'δ',
  // 'Ζ': 'ζ',
  // 'Θ': 'θ',
  // 'Κ': 'κ',
  // 'Λ': 'λ',
  // 'Μ': 'μ',
  // 'Ν': 'ν',
  // 'Ξ': 'ξ',
  // 'Π': 'π',
  // 'Ῥ': 'ῥ',
  // 'Σ': 'σ',
  // 'Τ': 'τ',
  // 'Φ': 'φ',
  // 'Χ': 'χ',
  // 'Ψ': 'ψ',
  '': '',
  '': '',
  '': '',

  '': ''

}

var downcase = {
  'Ἀ': 'ἀ',
  'Ἄ': 'ἄ',
  'Ἅ': 'ἅ',
  '': '',
  '': '',
  '': '',
  '': '',
  'Ἐ': 'ἐ',
  '': '',
  '': '',
  'Ἡ': 'ἡ',
  'Ἥ': 'ἥ',
  '': '',
  'Ἔ': 'ἔ',
  'Ἕ': 'ἕ',
  '': '',
  '': '',
  'Ἰ': 'ἰ',
  'Ἱ': 'ἱ',
  '': '',
  '': '',
  'Ο': 'ο',
  'Ὁ': 'ὁ',
  'Ὃ': 'ὅ',
  'Ὅ': 'ὅ',

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

  '': ''

}


module.exports = {
  accents: ac,
  combined: combined,
  downcase: downcase
  // oxia: oxia
}
