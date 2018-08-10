//


// import orthos from './index';
import {comb, plain} from './index';

let wf = process.argv.slice(2)[0]
let log = console.log

let cmb = comb(wf);
let pln = plain(wf);

log('HERE', cmb, pln)
