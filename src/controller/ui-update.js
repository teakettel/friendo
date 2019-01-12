/**
 * Functions for updating the UI
 */

import $ from 'jquery'
import { save } from '../game/game-util'
import { STATS } from '../friendo/constants'

export const setName = (name) => {
  $('#name-display').html(name)
}

export const setLevel = (level) => {
  $('#level-display').html(level.toString().padEnd(4))
}

export const setZodiac = (zodiac, color = 'black') => {
  $('#zodiac-display')
    .html(zodiac.symbol)
    .css('color', color)
    .popover({ content: '?', trigger: 'hover' })
  // separately set content so that the popover will be updated every time this function
  $('#zodiac-display')
    .data('bs.popover').config.content = `${zodiac.getAge()} old- born ${zodiac.birthday.toLocaleDateString()} (${zodiac.sign})`
}

// sets and triggers tutorial content
const showTutorial = () => {
  $('#egg-display')
    .popover({
      trigger: 'manual',
      content: 'Click on a stat to train your Friendo.',
      title: 'Click me!',
    })
    .click(() => {
      $('#egg-display').popover('hide')
    })

  $('#egg-display').popover('show')
}

/**
 * Updates a stat display bar
 * @param stat - id of the stat
 * @param exp - % exp to next level (0.0-0.1)
 * @param lvl - current stat level
 */
export const setStat = (stat, exp, lvl) => {
  $(`#${stat}-prog`).css('width', `${Math.floor(exp * 100)}%`)
  $(`#${stat}-num`).html(lvl.toString().padStart(4))
}
export const setAllStats = (friendo) => {
  Object.values(STATS).forEach((s) => {
    setStat(s, friendo.getExpPercent(s), friendo.getStat(s))
  })
}

/**
 * Updates energy bar
 * @param energy - % energy friendo has left
 */
export const setEnergy = (energy) => {
  $('#energybar').css('width', `${Math.floor(energy * 100)}%`)
}

// bulk-set all UI elements from friendo
export const initialize = (friendo) => {
  setName(friendo.name)
  setLevel(friendo.level)
  setZodiac(friendo.zodiac)
  setAllStats(friendo)
  setEnergy(friendo.getEnergyLeft())

  // show tutorial if egg level is 0
  if (friendo.getStat(STATS.EGG) === 1) showTutorial()
}

// enable/disable all friendo interaction buttons to prevent the
// player from breaking the entire game state
export const enableButtons = () => {
  $('#pet-button').prop('disabled', '')
  $('#feed-button').prop('disabled', '')
  Object.values(STATS).forEach((s) => {
    $(`#start-${s}`).prop('disabled', '')
  })
}
export const disableButtons = () => {
  $('#pet-button').prop('disabled', 'disabled')
  $('#feed-button').prop('disabled', 'disabled')
  Object.values(STATS).forEach((s) => {
    $(`#start-${s}`).prop('disabled', 'disabled')
  })
}

// generalized action peforming routine for the buttons
export const performAction = (friendo, action, reps = 1) => {
  disableButtons()
  friendo.startExercise(
    action,
    reps,
    // function to call on every rep
    (f) => {
      // save
      save(JSON.stringify(f))
      // update energy bar
      setEnergy(f.getEnergyLeft())
      // update stat displays
      const stat = action.split('_')[1] || ''
      setStat(stat, f.getExpPercent(stat), f.getStat(stat))
    },
    // function to call at end
    () => {
      enableButtons()
    },
  )
}
