//

import {comb, plain, strip} from './index';

let wf = process.argv.slice(2)[0]
let log = console.log

let cmb = comb(wf)
let pln = plain(cmb)
let strp = strip(cmb)

log('ORTHOS:', wf, cmb, pln, strp)
