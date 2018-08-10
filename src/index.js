//

import {ac, tobedel, greek} from './lib/data'

let log = console.log

export function combine(wf) {
  return wf.split('').map(sym => { return (greek[sym]) ? greek[sym].comb : sym }).join('')
}

export function plaine(wf) {
  return wf.split('').map(sym => { return (greek[sym]) ? greek[sym].plain : tobedel.includes(sym) ? null : sym }).join('')
}
