import { STATS } from './constants'

/**
 * Defines functions that calculate limb sizes and positions
 */

export const thighGap = () => 13
export const armGirth = friendo => friendo.stats[STATS.ARM] * 2
export const armLength = friendo => Math.floor(((friendo.stats[STATS.ARM] - 1) * 6) + 10)
export const legGirth = friendo => friendo.stats[STATS.LEG] * 2
export const legHeight = friendo => ((friendo.stats[STATS.LEG] - 1) * 6) + 10
export const footLength = friendo => Math.floor(legGirth(friendo) * 1.3) + 3
export const footHeight = friendo => legHeight(friendo) / 4