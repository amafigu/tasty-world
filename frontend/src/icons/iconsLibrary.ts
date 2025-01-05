import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBars,
  faClock,
  faSearch,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faBars, faSearch, faTimes, faClock)

export { FontAwesomeIcon }
