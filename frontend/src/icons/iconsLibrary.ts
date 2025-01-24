import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBars,
  faClock,
  faSearch,
  faTemperatureFull,
  faTemperatureHalf,
  faTemperatureQuarter,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUser,
  faBars,
  faSearch,
  faTimes,
  faClock,
  faTemperatureQuarter,
  faTemperatureHalf,
  faTemperatureFull,
)

export { FontAwesomeIcon }
