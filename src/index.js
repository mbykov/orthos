//

import _ from 'lodash'
import {ac, tobedel, greek, simple} from './lib/data'

let log = console.log

export function comb(wf) {
  // if (!wf) return ''
  return wf.split('').map(sym => { return (greek[sym]) ? greek[sym].comb : sym }).join('')
}

export function plain(wf) {
  // if (!wf) return ''
  return wf.split('').map(sym => { return (greek[sym]) ? greek[sym].plain : tobedel.includes(sym) ? null : sym }).join('')
}

export function strip(wf) {
  // if (!wf) return ''
  return _.filter(wf.split(''), sym=> { return simple[sym] }).join('')
}

export function oxia(wf) {
  return wf.split(ac.varia).join(ac.oxia).split(ac.varia_).join(ac.oxia)
}

export const accents = ac
