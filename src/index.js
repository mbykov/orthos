//

import _ from 'lodash'
import {tobedel, greek, simple} from './lib/data'

let log = console.log

export function comb(wf) {
  if (!wf) return ''
  return wf.split('').map(sym => { return (greek[sym]) ? greek[sym].comb : sym }).join('')
}

export function plain(wf) {
  if (!wf) return ''
  return wf.split('').map(sym => { return (greek[sym]) ? greek[sym].plain : tobedel.includes(sym) ? null : sym }).join('')
}
