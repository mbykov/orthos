//


// import orthos from './index';
import {comb, plain, downcase} from './index';

let wf = process.argv.slice(2)[0]
let log = console.log

let cmb = comb(wf)
let pln = plain(wf)
let all = plain(comb(wf))

log('HERE', cmb, pln, all)
