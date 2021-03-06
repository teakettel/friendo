/**
 * Factory method to properly load a state from json
 */

import Idle, { ID as idleID } from './idle/idle'
import Sleep, { ID as sleepID } from './fitness/sleep'
import Pet, { ID as petID } from './fitness/pet'
import Core, { ID as coreID } from './fitness/situp'
import Leg, { ID as legID } from './fitness/squat'
import Arm, { ID as armID } from './fitness/curl'
import Sight, { ID as sightID } from './fitness/read'
import Hair, { ID as hairID } from './fitness/groom'
import Feed, { ID as feedID } from './fitness/feed'
import Taste, { ID as tasteID } from './fitness/munch'
import Dog, { ID as dogID } from './fitness/dog-cuddle'
import Meme, { ID as memeID } from './fitness/surf-web'
import Egg, { ID as eggID } from './idle/egg'
import Incubate, { ID as incubateID } from './fitness/incubate'

export default (savedState, id) => {
  switch (id) {
    case idleID:
      /* eslint-disable-next-line no-console */
      console.log('Loading idle state')
      return new Idle(savedState)
    case sleepID:
      /* eslint-disable-next-line no-console */
      console.log('Loading sleep state')
      return new Sleep(savedState)
    case petID:
      /* eslint-disable-next-line no-console */
      console.log('Loading pet state')
      return new Pet(savedState)
    case feedID:
      /* eslint-disable-next-line no-console */
      console.log('Loading feeding state')
      return new Feed(savedState)

    case coreID:
      /* eslint-disable-next-line no-console */
      console.log('Loading core training state')
      return new Core(savedState)
    case legID:
      /* eslint-disable-next-line no-console */
      console.log('Loading leg training state')
      return new Leg(savedState)
    case armID:
      /* eslint-disable-next-line no-console */
      console.log('Loading arm training state')
      return new Arm(savedState)
    case sightID:
      /* eslint-disable-next-line no-console */
      console.log('Loading sight training state')
      return new Sight(savedState)
    case hairID:
      /* eslint-disable-next-line no-console */
      console.log('Loading hair training state')
      return new Hair(savedState)
    case tasteID:
      /* eslint-disable-next-line no-console */
      console.log('Loading taste training state')
      return new Taste(savedState)
    case dogID:
      /* eslint-disable-next-line no-console */
      console.log('Loading dog training state')
      return new Dog(savedState)
    case memeID:
      /* eslint-disable-next-line no-console */
      console.log('Loading meme training state')
      return new Meme(savedState)
    case eggID:
      /* eslint-disable-next-line no-console */
      console.log('Loading egg state')
      return new Egg(savedState)
    case incubateID:
      /* eslint-disable-next-line no-console */
      console.log('Loading incubation state')
      return new Incubate(savedState)
    default:
      throw new Error(`Attempted to load invalid state '${id}'`)
  }
}
