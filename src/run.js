//


// import orthos from './index';
import {combine, plaine} from './index';

let wf = process.argv.slice(2)[0]
let log = console.log

// let cmb = combine(wf)
let pln = plaine(wf)
let all = plaine(combine(wf))

log('HERE', pln, all)
