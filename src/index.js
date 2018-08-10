//

import {ac, greek} from './lib/data'

let log = console.log

export default function orthos(wf) {
  log('DATA', greek['ἀ'].plain)
  return `hello, ${wf}`
}

export function comb(wf) {
  return wf.split('').map(sym => { return (greek[sym]) ? greek[sym].comb : sym }).join('')
}

export function plain(wf) {
  return wf.split('').map(sym => { return (greek[sym]) ? greek[sym].plain : sym }).join('')
}
