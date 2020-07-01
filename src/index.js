'use strict'

const log = console.log
import {ac, tobedel, greek, simple} from './lib/data'

export function comb(wf) {
  return wf.split('').map(sym => { return (greek[sym]) ? greek[sym].comb : sym }).join('')
}

export function plain(wf) {
  return wf.split('').map(sym => { return (greek[sym]) ? greek[sym].plain : tobedel.includes(sym) ? null : sym }).join('')
}

export function strip(wf) {
  return wf.split('').filter(sym=> { return simple[sym] }).join('')
}

export function oxia(wf) {
  return wf.split(ac.varia).join(ac.oxia).split(ac.varia_).join(ac.oxia)
}

export const accents = ac
