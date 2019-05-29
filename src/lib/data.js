//

export const ac = {
  'oxia': '\u0301',
  'varia_': '\u0060',
  'varia': '\u0300',
  'peris': '\u0342',
  '': '',
  'psili': '\u0313',
  'dasia': '\u0314',
  '': '',
  'dia': '\u0308',
  'dia-not-combined': '\u00A8',
  '': '',
  'ypo': '\u0345',
  'pros': '\u1FBE', // but I use ypo, correct?
  '': ''
}

export const tobedel = [ac.varia, ac.oxia, ac.peris, ac.psili, ac.ypo] // dialitika remains // ac.dasia,

export const simple = {

  'α': {utf: 'U+03B1'}, // small letter alpha
  'β': {utf: 'U+03B2'}, // small letter beta
  'γ': {utf: 'U+03B3'}, // small letter gamma
  'δ': {utf: 'U+03B4'}, // small letter delta
  'ε': {utf: 'U+03B5'}, // small letter epsilon
  'ζ': {utf: 'U+03B6'}, // small letter zeta
  'η': {utf: 'U+03B7'}, // small letter eta
  'θ': {utf: 'U+03B8'}, // small letter theta
  'ι': {utf: 'U+03B9'}, // small letter iota
  'κ': {utf: 'U+03BA'}, // small letter kappa
  'λ': {utf: 'U+03BB'}, // small letter lamda
  'μ': {utf: 'U+03BC'}, // small letter mu
  'ν': {utf: 'U+03BD'}, // small letter nu
  'ξ': {utf: 'U+03BE'}, // small letter xi
  'ο': {utf: 'U+03BF'}, // small letter omicron
  'π': {utf: 'U+03C0'}, // small letter pi
  'ρ': {utf: 'U+03C1'}, // small letter rho
  'ς': {utf: 'U+03C2'}, // small letter final sigma
  'σ': {utf: 'U+03C3'}, // small letter sigma
  'τ': {utf: 'U+03C4'}, // small letter tau
  'υ': {utf: 'U+03C5'}, // small letter upsilon
  'φ': {utf: 'U+03C6'}, // small letter phi
  'χ': {utf: 'U+03C7'}, // small letter chi
  'ψ': {utf: 'U+03C8'}, // small letter psi
  'ω': {utf: 'U+03C9'}, // small letter omega

  'Α': {utf: 'U+0391'}, // capital letter alpha
  'Β': {utf: 'U+0392'}, // capital letter beta
  'Γ': {utf: 'U+0393'}, // capital letter gamma
  'Δ': {utf: 'U+0394'}, // capital letter delta
  'Ε': {utf: 'U+0395'}, // capital letter epsilon
  'Ζ': {utf: 'U+0396'}, // capital letter zeta
  'Η': {utf: 'U+0397'}, // capital letter eta
  'Θ': {utf: 'U+0398'}, // capital letter theta
  'Ι': {utf: 'U+0399'}, // capital letter iota
  'Κ': {utf: 'U+039A'}, // capital letter kappa
  'Λ': {utf: 'U+039B'}, // capital letter lamda
  'Μ': {utf: 'U+039C'}, // capital letter mu
  'Ν': {utf: 'U+039D'}, // capital letter nu
  'Ξ': {utf: 'U+039E'}, // capital letter xi
  'Ο': {utf: 'U+039F'}, // capital letter omicron
  'Π': {utf: 'U+03A0'}, // capital letter pi
  'Ρ': {utf: 'U+03A1'}, // capital letter rho
  'S': {utf: 'U+XXXX'}, // fake capital letter final sigma
  'Σ': {utf: 'U+03A3'}, // capital letter sigma
  'Τ': {utf: 'U+03A4'}, // capital letter tau
  'Υ': {utf: 'U+03A5'}, // capital letter upsilon
  'Φ': {utf: 'U+03A6'}, // capital letter phi
  'Χ': {utf: 'U+03A7'}, // capital letter chi
  'Ψ': {utf: 'U+03A8'}, // capital letter psi
  'Ω': {utf: 'U+03A9'} // capital letter omega
}

export const greek = {
  'ἀ': {plain: 'α', comb: ['α', ac.psili].join(''), utf: 'U+1F00'}, // small alpha with psili
  'ἁ': {plain: 'α', comb: ['α', ac.dasia].join(''), utf: 'U+1F01'}, // small alpha with dasia
  'ἂ': {plain: 'α', comb: ['α', ac.psili, ac.varia].join(''), utf: 'U+1F02'}, // small alpha with psili and varia
  'ἃ': {plain: 'α', comb: ['α', ac.dasia, ac.varia].join(''), utf: 'U+1F03'}, // small alpha with dasia and varia
  'ἄ': {plain: 'α', comb: ['α', ac.psili, ac.oxia].join(''), utf: 'U+1F04'}, // small alpha with psili and oxia
  'ἅ': {plain: 'α', comb: ['α', ac.dasia, ac.oxia].join(''), utf: 'U+1F05'}, // small alpha with dasia and oxia
  'ἆ': {plain: 'α', comb: ['α', ac.psili, ac.peris].join(''), utf: 'U+1F06'}, // small alpha with psili and perispomeni
  'ἇ': {plain: 'α', comb: ['α', ac.dasia, ac.peris].join(''), utf: 'U+1F07'}, // small alpha with dasia and perispomeni
  'Ἀ': {plain: 'α', comb: ['α', ac.psili].join(''), utf: 'U+1F08'}, // capital alpha with psili
  'Ἁ': {plain: 'α', comb: ['α', ac.dasia].join(''), utf: 'U+1F09'}, // capital alpha with dasia
  'Ἂ': {plain: 'α', comb: ['α', ac.psili, ac.varia].join(''), utf: 'U+1F0A'}, // capital alpha with psili and varia
  'Ἃ': {plain: 'α', comb: ['α', ac.dasia, ac.varia].join(''), utf: 'U+1F0B'}, // capital alpha with dasia and varia
  'Ἄ': {plain: 'α', comb: ['α', ac.psili, ac.oxia].join(''), utf: 'U+1F0C'}, // capital alpha with psili and oxia
  'Ἅ': {plain: 'α', comb: ['α', ac.dasia, ac.oxia].join(''), utf: 'U+1F0D'}, // capital alpha with dasia and oxia
  'Ἆ': {plain: 'α', comb: ['α', ac.psili, ac.peris].join(''), utf: 'U+1F0E'}, // capital alpha with psili and perispomeni
  'Ἇ': {plain: 'α', comb: ['α', ac.dasia, ac.peris].join(''), utf: 'U+1F0F'}, // capital alpha with dasia and perispomeni
  'ἐ': {plain: 'ε', comb: ['ε', ac.psili].join(''), utf: 'U+1F10'}, // small epsilon with psili
  'ἑ': {plain: 'ε', comb: ['ε', ac.dasia].join(''), utf: 'U+1F11'}, // small epsilon with dasia
  'ἒ': {plain: 'ε', comb: ['ε', ac.psili, ac.varia].join(''), utf: 'U+1F12'}, // small epsilon with psili and varia
  'ἓ': {plain: 'ε', comb: ['ε', ac.dasia, ac.varia].join(''), utf: 'U+1F13'}, // small epsilon with dasia and varia
  'ἔ': {plain: 'ε', comb: ['ε', ac.psili, ac.oxia].join(''), utf: 'U+1F14'}, // small epsilon with psili and oxia
  'ἕ': {plain: 'ε', comb: ['ε', ac.dasia, ac.oxia].join(''), utf: 'U+1F15'}, // small epsilon with dasia and oxia
  'Ἐ': {plain: 'ε', comb: ['ε', ac.psili].join(''), utf: 'U+1F18'}, // capital epsilon with psili
  'Ἑ': {plain: 'ε', comb: ['ε', ac.dasia].join(''), utf: 'U+1F19'}, // capital epsilon with dasia
  'Ἒ': {plain: 'ε', comb: ['ε', ac.psili, ac.varia].join(''), utf: 'U+1F1A'}, // capital epsilon with psili and varia
  'Ἓ': {plain: 'ε', comb: ['ε', ac.dasia, ac.varia].join(''), utf: 'U+1F1B'}, // capital epsilon with dasia and varia
  'Ἔ': {plain: 'ε', comb: ['ε', ac.psili, ac.oxia].join(''), utf: 'U+1F1C'}, // capital epsilon with psili and oxia
  'Ἕ': {plain: 'ε', comb: ['ε', ac.dasia, ac.oxia].join(''), utf: 'U+1F1D'}, // capital epsilon with dasia and oxia
  'ἠ': {plain: 'η', comb: ['η', ac.psili].join(''), utf: 'U+1F20'}, // small eta with psili
  'ἡ': {plain: 'η', comb: ['η', ac.dasia].join(''), utf: 'U+1F21'}, // small eta with dasia
  'ἢ': {plain: 'η', comb: ['η', ac.psili, ac.varia].join(''), utf: 'U+1F22'}, // small eta with psili and varia
  'ἣ': {plain: 'η', comb: ['η', ac.dasia, ac.varia].join(''), utf: 'U+1F23'}, // small eta with dasia and varia
  'ἤ': {plain: 'η', comb: ['η', ac.psili, ac.oxia].join(''), utf: 'U+1F24'}, // small eta with psili and oxia
  'ἥ': {plain: 'η', comb: ['η', ac.dasia, ac.oxia].join(''), utf: 'U+1F25'}, // small eta with dasia and oxia
  'ἦ': {plain: 'η', comb: ['η', ac.psili, ac.peris].join(''), utf: 'U+1F26'}, // small eta with psili and perispomeni
  'ἧ': {plain: 'η', comb: ['η', ac.dasia, ac.peris].join(''), utf: 'U+1F27'}, // small eta with dasia and perispomeni
  'Ἠ': {plain: 'η', comb: ['η', ac.psili].join(''), utf: 'U+1F28'}, // capital eta with psili
  'Ἡ': {plain: 'η', comb: ['η', ac.dasia].join(''), utf: 'U+1F29'}, // capital eta with dasia
  'Ἢ': {plain: 'η', comb: ['η', ac.psili, ac.varia].join(''), utf: 'U+1F2A'}, // capital eta with psili and varia
  'Ἣ': {plain: 'η', comb: ['η', ac.dasia, ac.varia].join(''), utf: 'U+1F2B'}, // capital eta with dasia and varia
  'Ἤ': {plain: 'η', comb: ['η', ac.psili, ac.oxia].join(''), utf: 'U+1F2C'}, // capital eta with psili and oxia
  'Ἥ': {plain: 'η', comb: ['η', ac.dasia, ac.oxia].join(''), utf: 'U+1F2D'}, // capital eta with dasia and oxia
  'Ἦ': {plain: 'η', comb: ['η', ac.psili, ac.peris].join(''), utf: 'U+1F2E'}, // capital eta with psili and perispomeni
  'Ἧ': {plain: 'η', comb: ['η', ac.dasia, ac.peris].join(''), utf: 'U+1F2F'}, // capital eta with dasia and perispomeni
  'ἰ': {plain: 'ι', comb: ['ι', ac.psili].join(''), utf: 'U+1F30'}, // small iota with psili
  'ἱ': {plain: 'ι', comb: ['ι', ac.dasia].join(''), utf: 'U+1F31'}, // small iota with dasia
  'ἲ': {plain: 'ι', comb: ['ι', ac.psili, ac.varia].join(''), utf: 'U+1F32'}, // small iota with psili and varia
  'ἳ': {plain: 'ι', comb: ['ι', ac.dasia, ac.varia].join(''), utf: 'U+1F33'}, // small iota with dasia and varia
  'ἴ': {plain: 'ι', comb: ['ι', ac.psili, ac.oxia].join(''), utf: 'U+1F34'}, // small iota with psili and oxia
  'ἵ': {plain: 'ι', comb: ['ι', ac.dasia, ac.oxia].join(''), utf: 'U+1F35'}, // small iota with dasia and oxia
  'ἶ': {plain: 'ι', comb: ['ι', ac.psili, ac.peris].join(''), utf: 'U+1F36'}, // small iota with psili and perispomeni
  'ἷ': {plain: 'ι', comb: ['ι', ac.dasia, ac.peris].join(''), utf: 'U+1F37'}, // small iota with dasia and perispomeni
  'Ἰ': {plain: 'ι', comb: ['ι', ac.psili].join(''), utf: 'U+1F38'}, // capital iota with psili
  'Ἱ': {plain: 'ι', comb: ['ι', ac.dasia].join(''), utf: 'U+1F39'}, // capital iota with dasia
  'Ἲ': {plain: 'ι', comb: ['ι', ac.psili, ac.varia].join(''), utf: 'U+1F3A'}, // capital iota with psili and varia
  'Ἳ': {plain: 'ι', comb: ['ι', ac.dasia, ac.varia].join(''), utf: 'U+1F3B'}, // capital iota with dasia and varia
  'Ἴ': {plain: 'ι', comb: ['ι', ac.psili, ac.oxia].join(''), utf: 'U+1F3C'}, // capital iota with psili and oxia
  'Ἵ': {plain: 'ι', comb: ['ι', ac.dasia, ac.oxia].join(''), utf: 'U+1F3D'}, // capital iota with dasia and oxia
  'Ἶ': {plain: 'ι', comb: ['ι', ac.psili, ac.peris].join(''), utf: 'U+1F3E'}, // capital iota with psili and perispomeni
  'Ἷ': {plain: 'ι', comb: ['ι', ac.dasia, ac.peris].join(''), utf: 'U+1F3F'}, // capital iota with dasia and perispomeni
  'ὀ': {plain: 'ο', comb: ['ο', ac.psili].join(''), utf: 'U+1F40'}, // small omicron with psili
  'ὁ': {plain: 'ο', comb: ['ο', ac.dasia].join(''), utf: 'U+1F41'}, // small omicron with dasia
  'ὂ': {plain: 'ο', comb: ['ο', ac.psili, ac.varia].join(''), utf: 'U+1F42'}, // small omicron with psili and varia
  'ὃ': {plain: 'ο', comb: ['ο', ac.dasia, ac.varia].join(''), utf: 'U+1F43'}, // small omicron with dasia and varia
  'ὄ': {plain: 'ο', comb: ['ο', ac.psili, ac.oxia].join(''), utf: 'U+1F44'}, // small omicron with psili and oxia
  'ὅ': {plain: 'ο', comb: ['ο', ac.dasia, ac.oxia].join(''), utf: 'U+1F45'}, // small omicron with dasia and oxia
  'Ὀ': {plain: 'ο', comb: ['ο', ac.psili].join(''), utf: 'U+1F48'}, // capital omicron with psili
  'Ὁ': {plain: 'ο', comb: ['ο', ac.dasia].join(''), utf: 'U+1F49'}, // capital omicron with dasia
  'Ὂ': {plain: 'ο', comb: ['ο', ac.psili, ac.varia].join(''), utf: 'U+1F4A'}, // capital omicron with psili and varia
  'Ὃ': {plain: 'ο', comb: ['ο', ac.dasia, ac.varia].join(''), utf: 'U+1F4B'}, // capital omicron with dasia and varia
  'Ὄ': {plain: 'ο', comb: ['ο', ac.psili, ac.oxia].join(''), utf: 'U+1F4C'}, // capital omicron with psili and oxia
  'Ὅ': {plain: 'ο', comb: ['ο', ac.dasia, ac.oxia].join(''), utf: 'U+1F4D'}, // capital omicron with dasia and oxia
  'ὐ': {plain: 'υ', comb: ['υ', ac.psili].join(''), utf: 'U+1F50'}, // small upsilon with psili
  'ὑ': {plain: 'υ', comb: ['υ', ac.dasia].join(''), utf: 'U+1F51'}, // small upsilon with dasia
  'ὒ': {plain: 'υ', comb: ['υ', ac.psili, ac.varia].join(''), utf: 'U+1F52'}, // small upsilon with psili and varia
  'ὓ': {plain: 'υ', comb: ['υ', ac.dasia, ac.varia].join(''), utf: 'U+1F53'}, // small upsilon with dasia and varia
  'ὔ': {plain: 'υ', comb: ['υ', ac.psili, ac.oxia].join(''), utf: 'U+1F54'}, // small upsilon with psili and oxia
  'ὕ': {plain: 'υ', comb: ['υ', ac.dasia, ac.oxia].join(''), utf: 'U+1F55'}, // small upsilon with dasia and oxia
  'ὖ': {plain: 'υ', comb: ['υ', ac.psili, ac.peris].join(''), utf: 'U+1F56'}, // small upsilon with psili and perispomeni
  'ὗ': {plain: 'υ', comb: ['υ', ac.dasia, ac.peris].join(''), utf: 'U+1F57'}, // small upsilon with dasia and perispomeni
  'Ὑ': {plain: 'υ', comb: ['υ', ac.dasia].join(''), utf: 'U+1F59'}, // capital upsilon with dasia
  'Ὓ': {plain: 'υ', comb: ['υ', ac.dasia, ac.varia].join(''), utf: 'U+1F5B'}, // capital upsilon with dasia and varia
  'Ὕ': {plain: 'υ', comb: ['υ', ac.dasia, ac.oxia].join(''), utf: 'U+1F5D'}, // capital upsilon with dasia and oxia
  'Ὗ': {plain: 'υ', comb: ['υ', ac.dasia, ac.peris].join(''), utf: 'U+1F5F'}, // capital upsilon with dasia and perispomeni
  'ὠ': {plain: 'ω', comb: ['ω', ac.psili].join(''), utf: 'U+1F60'}, // small omega with psili
  'ὡ': {plain: 'ω', comb: ['ω', ac.dasia].join(''), utf: 'U+1F61'}, // small omega with dasia
  'ὢ': {plain: 'ω', comb: ['ω', ac.psili, ac.varia].join(''), utf: 'U+1F62'}, // small omega with psili and varia
  'ὣ': {plain: 'ω', comb: ['ω', ac.dasia, ac.varia].join(''), utf: 'U+1F63'}, // small omega with dasia and varia
  'ὤ': {plain: 'ω', comb: ['ω', ac.psili, ac.oxia].join(''), utf: 'U+1F64'}, // small omega with psili and oxia
  'ὥ': {plain: 'ω', comb: ['ω', ac.dasia, ac.oxia].join(''), utf: 'U+1F65'}, // small omega with dasia and oxia
  'ὦ': {plain: 'ω', comb: ['ω', ac.psili, ac.peris].join(''), utf: 'U+1F66'}, // small omega with psili and perispomeni
  'ὧ': {plain: 'ω', comb: ['ω', ac.dasia, ac.peris].join(''), utf: 'U+1F67'}, // small omega with dasia and perispomeni
  'Ὠ': {plain: 'ω', comb: ['ω', ac.psili].join(''), utf: 'U+1F68'}, // capital omega with psili
  'Ὡ': {plain: 'ω', comb: ['ω', ac.dasia].join(''), utf: 'U+1F69'}, // capital omega with dasia
  'Ὢ': {plain: 'ω', comb: ['ω', ac.psili, ac.varia].join(''), utf: 'U+1F6A'}, // capital omega with psili and varia
  'Ὣ': {plain: 'ω', comb: ['ω', ac.dasia, ac.varia].join(''), utf: 'U+1F6B'}, // capital omega with dasia and varia
  'Ὤ': {plain: 'ω', comb: ['ω', ac.psili, ac.oxia].join(''), utf: 'U+1F6C'}, // capital omega with psili and oxia
  'Ὥ': {plain: 'ω', comb: ['ω', ac.dasia, ac.oxia].join(''), utf: 'U+1F6D'}, // capital omega with dasia and oxia
  'Ὦ': {plain: 'ω', comb: ['ω', ac.psili, ac.peris].join(''), utf: 'U+1F6E'}, // capital omega with psili and perispomeni
  'Ὧ': {plain: 'ω', comb: ['ω', ac.dasia, ac.peris].join(''), utf: 'U+1F6F'}, // capital omega with dasia and perispomeni
  'ὰ': {plain: 'α', comb: ['α', ac.varia].join(''), utf: 'U+1F70'}, // small alpha with varia
  'ά': {plain: 'α', comb: ['α', ac.oxia].join(''), utf: 'U+1F71'}, // small alpha with oxia
  'ὲ': {plain: 'ε', comb: ['ε', ac.varia].join(''), utf: 'U+1F72'}, // small epsilon with varia
  'έ': {plain: 'ε', comb: ['ε', ac.oxia].join(''), utf: 'U+1F73'}, // small epsilon with oxia
  'ὴ': {plain: 'η', comb: ['η', ac.varia].join(''), utf: 'U+1F74'}, // small eta with varia
  'ή': {plain: 'η', comb: ['η', ac.oxia].join(''), utf: 'U+1F75'}, // small eta with oxia
  'ὶ': {plain: 'ι', comb: ['ι', ac.varia].join(''), utf: 'U+1F76'}, // small iota with varia
  'ί': {plain: 'ι', comb: ['ι', ac.oxia].join(''), utf: 'U+1F77'}, // small iota with oxia
  'ὸ': {plain: 'ο', comb: ['ο', ac.varia].join(''), utf: 'U+1F78'}, // small omicron with varia
  'ό': {plain: 'ο', comb: ['ο', ac.oxia].join(''), utf: 'U+1F79'}, // small omicron with oxia
  'ὺ': {plain: 'υ', comb: ['υ', ac.varia].join(''), utf: 'U+1F7A'}, // small upsilon with varia
  'ύ': {plain: 'υ', comb: ['υ', ac.oxia].join(''), utf: 'U+1F7B'}, // small upsilon with oxia
  'ὼ': {plain: 'ω', comb: ['ω', ac.varia].join(''), utf: 'U+1F7C'}, // small omega with varia
  'ώ': {plain: 'ω', comb: ['ω', ac.oxia].join(''), utf: 'U+1F7D'}, // small omega with oxia
  'ᾀ': {plain: 'α', comb: ['α', ac.psili, ac.ypo].join(''), utf: 'U+1F80'}, // small alpha with psili and ypogegrammeni
  'ᾁ': {plain: 'α', comb: ['α', ac.dasia, ac.ypo].join(''), utf: 'U+1F81'}, // small alpha with dasia and ypogegrammeni
  'ᾂ': {plain: 'α', comb: ['α', ac.psili, ac.varia, ac.ypo].join(''), utf: 'U+1F82'}, // small alpha with psili and varia and ypogegrammeni
  'ᾃ': {plain: 'α', comb: ['α', ac.dasia, ac.varia, ac.ypo].join(''), utf: 'U+1F83'}, // small alpha with dasia and varia and ypogegrammeni
  'ᾄ': {plain: 'α', comb: ['α', ac.psili, ac.oxia, ac.ypo].join(''), utf: 'U+1F84'}, // small alpha with psili and oxia and ypogegrammeni
  'ᾅ': {plain: 'α', comb: ['α', ac.dasia, ac.oxia, ac.ypo].join(''), utf: 'U+1F85'}, // small alpha with dasia and oxia and ypogegrammeni
  'ᾆ': {plain: 'α', comb: ['α', ac.psili, ac.peris, ac.ypo].join(''), utf: 'U+1F86'}, // small alpha with psili and perispomeni and ypogegrammeni
  'ᾇ': {plain: 'α', comb: ['α', ac.dasia, ac.peris, ac.ypo].join(''), utf: 'U+1F87'}, // small alpha with dasia and perispomeni and ypogegrammeni
  'ᾈ': {plain: 'α', comb: ['α', ac.psili, ac.pros], utf: 'U+1F88'}, // capital alpha with psili and prosgegrammeni
  'ᾉ': {plain: 'α', comb: ['α', ac.dasia, ac.pros].join(''), utf: 'U+1F89'}, // capital alpha with dasia and prosgegrammeni
  'ᾊ': {plain: 'α', comb: ['α', ac.psili, ac.varia, ac.pros].join(''), utf: 'U+1F8A'}, // capital alpha with psili and varia and prosgegrammeni
  'ᾋ': {plain: 'α', comb: ['α', ac.dasia, ac.varia, ac.pros].join(''), utf: 'U+1F8B'}, // capital alpha with dasia and varia and prosgegrammeni
  'ᾌ': {plain: 'α', comb: ['α', ac.psili, ac.oxia, ac.pros].join(''), utf: 'U+1F8C'}, // capital alpha with psili and oxia and prosgegrammeni
  'ᾍ': {plain: 'α', comb: ['α', ac.dasia, ac.oxia, ac.pros].join(''), utf: 'U+1F8D'}, // capital alpha with dasia and oxia and prosgegrammeni
  'ᾎ': {plain: 'α', comb: ['α', ac.psili, ac.peris, ac.pros].join(''), utf: 'U+1F8E'}, // capital alpha with psili and perispomeni and prosgegrammeni
  'ᾏ': {plain: 'α', comb: ['α', ac.dasia, ac.peris, ac.pros].join(''), utf: 'U+1F8F'}, // capital alpha with dasia and perispomeni and prosgegrammeni
  'ᾐ': {plain: 'η', comb: ['η', ac.psili, ac.ypo].join(''), utf: 'U+1F90'}, // small eta with psili and ypogegrammeni
  'ᾑ': {plain: 'η', comb: ['η', ac.dasia, ac.ypo].join(''), utf: 'U+1F91'}, // small eta with dasia and ypogegrammeni
  'ᾒ': {plain: 'η', comb: ['η', ac.psili, ac.varia, ac.ypo].join(''), utf: 'U+1F92'}, // small eta with psili and varia and ypogegrammeni
  'ᾓ': {plain: 'η', comb: ['η', ac.dasia, ac.varia, ac.ypo].join(''), utf: 'U+1F93'}, // small eta with dasia and varia and ypogegrammeni
  'ᾔ': {plain: 'η', comb: ['η', ac.psili, ac.oxia, ac.ypo].join(''), utf: 'U+1F94'}, // small eta with psili and oxia and ypogegrammeni
  'ᾕ': {plain: 'η', comb: ['η', ac.dasia, ac.oxia, ac.ypo].join(''), utf: 'U+1F95'}, // small eta with dasia and oxia and ypogegrammeni
  'ᾖ': {plain: 'η', comb: ['η', ac.psili, ac.peris, ac.ypo].join(''), utf: 'U+1F96'}, // small eta with psili and perispomeni and ypogegrammeni
  'ᾗ': {plain: 'η', comb: ['η', ac.dasia, ac.peris, ac.ypo].join(''), utf: 'U+1F97'}, // small eta with dasia and perispomeni and ypogegrammeni
  'ᾘ': {plain: 'η', comb: ['η', ac.psili, ac.pros].join(''), utf: 'U+1F98'}, // capital eta with psili and prosgegrammeni
  'ᾙ': {plain: 'η', comb: ['η', ac.dasia, ac.pros].join(''), utf: 'U+1F99'}, // capital eta with dasia and prosgegrammeni
  'ᾚ': {plain: 'η', comb: ['η', ac.psili, ac.varia, ac.pros].join(''), utf: 'U+1F9A'}, // capital eta with psili and varia and prosgegrammeni
  'ᾛ': {plain: 'η', comb: ['η', ac.dasia, ac.varia, ac.pros].join(''), utf: 'U+1F9B'}, // capital eta with dasia and varia and prosgegrammeni
  'ᾜ': {plain: 'η', comb: ['η', ac.psili, ac.oxia, ac.pros].join(''), utf: 'U+1F9C'}, // capital eta with psili and oxia and prosgegrammeni
  'ᾝ': {plain: 'η', comb: ['η', ac.dasia, ac.oxia, ac.pros].join(''), utf: 'U+1F9D'}, // capital eta with dasia and oxia and prosgegrammeni
  'ᾞ': {plain: 'η', comb: ['η', ac.psili, ac.peris, ac.pros].join(''), utf: 'U+1F9E'}, // capital eta with psili and perispomeni and prosgegrammeni
  'ᾟ': {plain: 'η', comb: ['η', ac.dasia, ac.peris, ac.pros].join(''), utf: 'U+1F9F'}, // capital eta with dasia and perispomeni and prosgegrammeni
  'ᾠ': {plain: 'ω', comb: ['ω', ac.psili, ac.ypo].join(''), utf: 'U+1FA0'}, // small omega with psili and ypogegrammeni
  'ᾡ': {plain: 'ω', comb: ['ω', ac.dasia, ac.ypo].join(''), utf: 'U+1FA1'}, // small omega with dasia and ypogegrammeni
  'ᾢ': {plain: 'ω', comb: ['ω', ac.psili, ac.varia, ac.ypo].join(''), utf: 'U+1FA2'}, // small omega with psili and varia and ypogegrammeni
  'ᾣ': {plain: 'ω', comb: ['ω', ac.dasia, ac.varia, ac.ypo].join(''), utf: 'U+1FA3'}, // small omega with dasia and varia and ypogegrammeni
  'ᾤ': {plain: 'ω', comb: ['ω', ac.psili, ac.oxia, ac.ypo].join(''), utf: 'U+1FA4'}, // small omega with psili and oxia and ypogegrammeni
  'ᾥ': {plain: 'ω', comb: ['ω', ac.dasia, ac.oxia, ac.ypo].join(''), utf: 'U+1FA5'}, // small omega with dasia and oxia and ypogegrammeni
  'ᾦ': {plain: 'ω', comb: ['ω', ac.psili, ac.peris, ac.ypo].join(''), utf: 'U+1FA6'}, // small omega with psili and perispomeni and ypogegrammeni
  'ᾧ': {plain: 'ω', comb: ['ω', ac.dasia, ac.peris, ac.ypo].join(''), utf: 'U+1FA7'}, // small omega with dasia and perispomeni and ypogegrammeni
  'ᾨ': {plain: 'ω', comb: ['ω', ac.psili, ac.pros].join(''), utf: 'U+1FA8'}, // capital omega with psili and prosgegrammeni
  'ᾩ': {plain: 'ω', comb: ['ω', ac.dasia, ac.pros].join(''), utf: 'U+1FA9'}, // capital omega with dasia and prosgegrammeni
  'ᾪ': {plain: 'ω', comb: ['ω', ac.psili, ac.varia, ac.pros].join(''), utf: 'U+1FAA'}, // capital omega with psili and varia and prosgegrammeni
  'ᾫ': {plain: 'ω', comb: ['ω', ac.dasia, ac.varia, ac.pros].join(''), utf: 'U+1FAB'}, // capital omega with dasia and varia and prosgegrammeni
  'ᾬ': {plain: 'ω', comb: ['ω', ac.psili, ac.oxia, ac.pros].join(''), utf: 'U+1FAC'}, // capital omega with psili and oxia and prosgegrammeni
  'ᾭ': {plain: 'ω', comb: ['ω', ac.dasia, ac.oxia, ac.pros].join(''), utf: 'U+1FAD'}, // capital omega with dasia and oxia and prosgegrammeni
  'ᾮ': {plain: 'ω', comb: ['ω', ac.psili, ac.peris, ac.pros].join(''), utf: 'U+1FAE'}, // capital omega with psili and perispomeni and prosgegrammeni
  'ᾯ': {plain: 'ω', comb: ['ω', ac.dasia, ac.peris, ac.pros].join(''), utf: 'U+1FAF'}, // capital omega with dasia and perispomeni and prosgegrammeni
  'ᾰ': {plain: 'α', comb: ['α'].join(''), utf: 'U+1FB0'}, // small alpha with vrachy
  'ᾱ': {plain: 'α', comb: ['α'].join(''), utf: 'U+1FB1'}, // small alpha with macron
  'ᾲ': {plain: 'α', comb: ['α', ac.varia, ac.ypo].join(''), utf: 'U+1FB2'}, // small alpha with varia and ypogegrammeni
  'ᾳ': {plain: 'α', comb: ['α', ac.ypo].join(''), utf: 'U+1FB3'}, // small alpha with ypogegrammeni
  'ᾴ': {plain: 'α', comb: ['α', ac.oxia, ac.ypo].join(''), utf: 'U+1FB4'}, // small alpha with oxia and ypogegrammeni
  'ᾶ': {plain: 'α', comb: ['α', ac.peris].join(''), utf: 'U+1FB6'}, // small alpha with perispomeni
  'ᾷ': {plain: 'α', comb: ['α', ac.peris, ac.ypo].join(''), utf: 'U+1FB7'}, // small alpha with perispomeni and ypogegrammeni
'Ᾰ': {plain: 'α', comb: ['α'].join(''), utf: 'U+1FB8'}, // capital alpha with vrachy
'Ᾱ': {plain: 'α', comb: ['α'].join(''), utf: 'U+1FB9'}, // capital alpha with macron
  'Ὰ': {plain: 'α', comb: ['α', ac.varia].join(''), utf: 'U+1FBA'}, // capital alpha with varia
  'Ά': {plain: 'α', comb: ['α', ac.oxia].join(''), utf: 'U+1FBB'}, // capital alpha with oxia
  'ᾼ': {plain: 'α', comb: ['α', ac.pros].join(''), utf: 'U+1FBC'}, // capital alpha with prosgegrammeni
// '᾽': {plain: '', comb: [''].join(''), utf: 'U+1FBD'}, // koronis
// 'ι': {plain: '', comb: ['', ac.pros].join(''), utf: 'U+1FBE'}, // prosgegrammeni
// '᾿': {plain: '', comb: ['', ac.psili].join(''), utf: 'U+1FBF'}, // psili
// '῀': {plain: '', comb: ['', ac.peris].join(''), utf: 'U+1FC0'}, // perispomeni
// '῁': {plain: '', comb: ['', ac.peris].join(''), utf: 'U+1FC1'}, // dialytika and perispomeni
  'ῂ': {plain: 'η', comb: ['η', ac.varia, ac.ypo].join(''), utf: 'U+1FC2'}, // small eta with varia and ypogegrammeni
  'ῃ': {plain: 'η', comb: ['η', ac.ypo].join(''), utf: 'U+1FC3'}, // small eta with ypogegrammeni
  'ῄ': {plain: 'η', comb: ['η', ac.oxia, ac.ypo].join(''), utf: 'U+1FC4'}, // small eta with oxia and ypogegrammeni
  'ῆ': {plain: 'η', comb: ['η', ac.peris].join(''), utf: 'U+1FC6'}, // small eta with perispomeni
  'ῇ': {plain: 'η', comb: ['η', ac.peris, ac.ypo].join(''), utf: 'U+1FC7'}, // small eta with perispomeni and ypogegrammeni
  'Ὲ': {plain: 'ε', comb: ['ε', ac.varia].join(''), utf: 'U+1FC8'}, // capital epsilon with varia
  'Έ': {plain: 'ε', comb: ['ε', ac.oxia].join(''), utf: 'U+1FC9'}, // capital epsilon with oxia
  'Ὴ': {plain: 'η', comb: ['η', ac.varia].join(''), utf: 'U+1FCA'}, // capital eta with varia
  'Ή': {plain: 'η', comb: ['η', ac.oxia].join(''), utf: 'U+1FCB'}, // capital eta with oxia
  'ῌ': {plain: 'η', comb: ['η', ac.pros].join(''), utf: 'U+1FCC'}, // capital eta with prosgegrammeni
// '῍': {plain: '', comb: ['', ac.psili, ac.varia].join(''), utf: 'U+1FCD'}, // psili and varia
// '῎': {plain: '', comb: ['', ac.psili, ac.oxia].join(''), utf: 'U+1FCE'}, // psili and oxia
// '῏': {plain: '', comb: ['', ac.psili, ac.peris].join(''), utf: 'U+1FCF'}, // psili and perispomeni
'ῐ': {plain: 'ι', comb: ['ι'].join(''), utf: 'U+1FD0'}, // small iota with vrachy
'ῑ': {plain: 'ι', comb: ['ι'].join(''), utf: 'U+1FD1'}, // small iota with macron
  'ῒ': {plain: ['ι', ac.dia].join(''), comb: ['ι', ac.dia, ac.varia].join(''), utf: 'U+1FD2'}, // small iota with dialytika and varia
  'ΐ': {plain: ['ι', ac.dia].join(''), comb: ['ι', ac.dia, ac.oxia].join(''), utf: 'U+1FD3'}, // small iota with dialytika and oxia
  'ῖ': {plain: 'ι', comb: ['ι', ac.peris].join(''), utf: 'U+1FD6'}, // small iota with perispomeni
  'ῗ': {plain: ['ι', ac.dia].join(''), comb: ['ι', ac.dia, ac.peris].join(''), utf: 'U+1FD7'}, // small iota with dialytika and perispomeni
'Ῐ': {plain: 'ι', comb: ['ι'].join(''), utf: 'U+1FD8'}, // capital iota with vrachy
'Ῑ': {plain: 'ι', comb: ['ι'].join(''), utf: 'U+1FD9'}, // capital iota with macron
  'Ὶ': {plain: 'ι', comb: ['ι', ac.varia].join(''), utf: 'U+1FDA'}, // capital iota with varia
  'Ί': {plain: 'ι', comb: ['ι', ac.oxia].join(''), utf: 'U+1FDB'}, // capital iota with oxia
// '῝': {plain: '', comb: ['', ac.dasia, ac.varia].join(''), utf: 'U+1FDD'}, // dasia and varia
// '῞': {plain: '', comb: ['', ac.dasia, ac.oxia].join(''), utf: 'U+1FDE'}, // dasia and oxia
// '῟': {plain: '', comb: ['', ac.dasia, ac.peris].join(''), utf: 'U+1FDF'}, // dasia and perispomeni
'ῠ': {plain: 'υ', comb: ['υ'].join(''), utf: 'U+1FE0'}, // small upsilon with vrachy
'ῡ': {plain: 'υ', comb: ['υ'].join(''), utf: 'U+1FE1'}, // small upsilon with macron
  'ῢ': {plain: ['υ', ac.dia].join(''), comb: ['υ', ac.dia, ac.varia].join(''), utf: 'U+1FE2'}, // small upsilon with dialytika and varia
  'ΰ': {plain: ['υ', ac.dia], comb: ['υ', ac.dia, ac.oxia].join(''), utf: 'U+1FE3'}, // small upsilon with dialytika and oxia
  'ῤ': {plain: 'ρ', comb: ['ρ', ac.psili].join(''), utf: 'U+1FE4'}, // small rho with psili
  'ῥ': {plain: 'ρ', comb: ['ρ', ac.dasia].join(''), utf: 'U+1FE5'}, // small rho with dasia
  'ῦ': {plain: 'υ', comb: ['υ', ac.peris].join(''), utf: 'U+1FE6'}, // small upsilon with perispomeni
  'ῧ': {plain: ['υ', ac.dia], comb: ['υ', ac.dia, ac.peris].join(''), utf: 'U+1FE7'}, // small upsilon with dialytika and perispomeni
'Ῠ': {plain: 'υ', comb: ['υ'].join(''), utf: 'U+1FE8'}, // capital upsilon with vrachy
'Ῡ': {plain: 'υ', comb: ['υ'].join(''), utf: 'U+1FE9'}, // capital upsilon with macron
  'Ὺ': {plain: 'υ', comb: ['υ', ac.varia].join(''), utf: 'U+1FEA'}, // capital upsilon with varia
  'Ύ': {plain: 'υ', comb: ['υ', ac.oxia].join(''), utf: 'U+1FEB'}, // capital upsilon with oxia
  'Ῥ': {plain: 'Ρ', comb: ['Ρ', ac.dasia].join(''), utf: 'U+1FEC'}, // capital rho with dasia
// '῭': {plain: '', comb: ['', ac.varia].join(''), utf: 'U+1FED'}, // dialytika and varia
// '΅': {plain: '', comb: ['', ac.oxia].join(''), utf: 'U+1FEE'}, // dialytika and oxia
// '`': {plain: '', comb: ['', ac.varia].join(''), utf: 'U+1FEF'}, // varia
  'ῲ': {plain: 'ω', comb: ['ω', ac.varia, ac.ypo].join(''), utf: 'U+1FF2'}, // small omega with varia and ypogegrammeni
  'ῳ': {plain: 'ω', comb: ['ω', ac.ypo].join(''), utf: 'U+1FF3'}, // small omega with ypogegrammeni
  'ῴ': {plain: 'ω', comb: ['ω', ac.oxia, ac.ypo].join(''), utf: 'U+1FF4'}, // small omega with oxia and ypogegrammeni
  'ῶ': {plain: 'ω', comb: ['ω', ac.peris].join(''), utf: 'U+1FF6'}, // small omega with perispomeni
  'ῷ': {plain: 'ω', comb: ['ω', ac.peris, ac.ypo].join(''), utf: 'U+1FF7'}, // small omega with perispomeni and ypogegrammeni
  'Ὸ': {plain: 'ο', comb: ['ο', ac.varia].join(''), utf: 'U+1FF8'}, // capital omicron with varia
  'Ό': {plain: 'ο', comb: ['ο', ac.oxia].join(''), utf: 'U+1FF9'}, // capital omicron with oxia
  'Ὼ': {plain: 'ω', comb: ['ω', ac.varia].join(''), utf: 'U+1FFA'}, // capital omega with varia
  'Ώ': {plain: 'ω', comb: ['ω', ac.oxia].join(''), utf: 'U+1FFB'}, // capital omega with oxia
  'ῼ': {plain: 'ω', comb: ['ω', ac.pros].join(''), utf: 'U+1FFC'}, // capital omega with prosgegrammeni

  // ========== TONOS ==

  'Ά': {plain: 'α', comb: ['α', ac.oxia].join(''), utf: 'U+0386'}, // capital alpha with tonos
  // '·': {plain: '', comb: [''].join(''), utf: 'U+0387'}, // ano teleia
  'Έ': {plain: 'ε', comb: ['ε', ac.oxia].join(''), utf: 'U+0388'}, // capital epsilon with tonos
  'Ή': {plain: 'η', comb: ['η', ac.oxia].join(''), utf: 'U+0389'}, // capital eta with tonos
  'Ί': {plain: 'ι', comb: ['ι', ac.oxia].join(''), utf: 'U+038A'}, // capital iota with tonos
  'Ό': {plain: 'ο', comb: ['ο', ac.oxia].join(''), utf: 'U+038C'}, // capital omicron with tonos
  'Ύ': {plain: 'υ', comb: ['υ', ac.oxia].join(''), utf: 'U+038E'}, // capital upsilon with tonos
  'Ώ': {plain: 'ω', comb: ['ω', ac.oxia].join(''), utf: 'U+038F'}, // capital omega with tonos
  'ΐ': {plain: ['ι', ac.dia].join(''), comb: ['ι', ac.oxia, ac.dia].join(''), utf: 'ι'}, // small iota with dialytika and tonos

  'Ϊ': {plain: ['ι', ac.dia].join(''), comb: ['ι', ac.dia].join(''), utf: 'U+03AA'}, // capital iota with dialytika
  'Ϋ': {plain: ['υ', ac.dia].join(''), comb: ['υ', ac.dia].join(''), utf: 'U+03AB'}, // capital upsilon with dialytika
  'ά': {plain: 'α', comb: ['α', ac.oxia].join(''), utf: 'U+03AC'}, // small alpha with tonos
  'έ': {plain: 'ε', comb: ['ε', ac.oxia].join(''), utf: 'U+03AD'}, // small epsilon with tonos
  'ή': {plain: 'η', comb: ['η', ac.oxia].join(''), utf: 'U+03AE'}, // small eta with tonos
  'ί': {plain: 'ι', comb: ['ι', ac.oxia].join(''), utf: 'U+03AF'}, // small iota with tonos
  'ΰ': {plain: ['υ', ac.dia].join(''), comb: ['υ', ac.oxia, ac.dia].join(''), utf: 'U+03B0'}, // small upsilon with dialytika and tonos

  'ϊ': {plain: ['ι', ac.dia].join(''), comb: ['ι', ac.dia].join(''), utf: 'U+03CA'}, // small iota with dialytika
  'ϋ': {plain: ['υ', ac.dia].join(''), comb: ['υ', ac.dia].join(''), utf: 'U+03CB'}, // small upsilon with dialytika
  'ό': {plain: 'ο', comb: ['ο', ac.oxia].join(''), utf: 'U+03CC'}, // small omicron with tonos
  'ύ': {plain: 'υ', comb: ['υ', ac.oxia].join(''), utf: 'U+03CD'}, // small upsilon with tonos
  'ώ': {plain: 'ω', comb: ['ω', ac.oxia].join(''), utf: 'U+03CE '}, // small omega with tonos

  // ';': {plain: '', comb: [''].join(''), utf: 'U+037E'}, // question mark

  'Ϊ': {plain: 'ι', comb: ['ι', ac.dia].join(''), utf: 'U+03AA'}, // capital iota with dialytika
  'Ϋ': {plain: 'υ', comb: ['υ', ac.dia].join(''), utf: 'U+03AB'}, // capital upsilon with dialytika

  // non vowels
  'Α': {plain: 'α', comb: 'α', utf: 'U+0391'}, // capital letter alpha
  'Β': {plain: 'β', comb: 'β', utf: 'U+0392'}, // capital letter beta
  'Γ': {plain: 'γ', comb: 'γ', utf: 'U+0393'}, // capital letter gamma
  'Δ': {plain: 'δ', comb: 'δ', utf: 'U+0394'}, // capital letter delta
  'Ε': {plain: 'ε', comb: 'ε', utf: 'U+0395'}, // capital letter epsilon
  'Ζ': {plain: 'ζ', comb: 'ζ', utf: 'U+0396'}, // capital letter zeta
  'Η': {plain: 'η', comb: 'η', utf: 'U+0397'}, // capital letter eta
  'Θ': {plain: 'θ', comb: 'θ', utf: 'U+0398'}, // capital letter theta
  'Ι': {plain: 'ι', comb: 'ι', utf: 'U+0399'}, // capital letter iota
  'Κ': {plain: 'κ', comb: 'κ', utf: 'U+039A'}, // capital letter kappa
  'Λ': {plain: 'λ', comb: 'λ', utf: 'U+039B'}, // capital letter lamda
  'Μ': {plain: 'μ', comb: 'μ', utf: 'U+039C'}, // capital letter mu
  'Ν': {plain: 'ν', comb: 'ν', utf: 'U+039D'}, // capital letter nu
  'Ξ': {plain: 'ξ', comb: 'ξ', utf: 'U+039E'}, // capital letter xi
  'Ο': {plain: 'ο', comb: 'ο', utf: 'U+039F'}, // capital letter omicron
  'Π': {plain: 'π', comb: 'π', utf: 'U+03A0'}, // capital letter pi
  'Ρ': {plain: 'ρ', comb: 'ρ', utf: 'U+03A1'}, // capital letter rho
  'S': {plain: 'S', comb: 'S', utf: 'U+XXXX'}, // fake capital letter final sigma
  'Σ': {plain: 'σ', comb: 'σ', utf: 'U+03A3'}, // capital letter sigma
  'Τ': {plain: 'τ', comb: 'τ', utf: 'U+03A4'}, // capital letter tau
  'Υ': {plain: 'υ', comb: 'υ', utf: 'U+03A5'}, // capital letter upsilon
  'Φ': {plain: 'φ', comb: 'φ', utf: 'U+03A6'}, // capital letter phi
  'Χ': {plain: 'χ', comb: 'χ', utf: 'U+03A7'}, // capital letter chi
  'Ψ': {plain: 'ψ', comb: 'ψ', utf: 'U+03A8'}, // capital letter psi
  'Ω': {plain: 'ω', comb: 'ω', utf: 'U+03A9'} // capital letter omega

}
