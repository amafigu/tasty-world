import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faUser,
  faSearch,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faBars, faSearch, faTimes)

export { FontAwesomeIcon }
