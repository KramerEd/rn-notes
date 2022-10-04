import { assign, createMachine, Machine } from 'xstate'
import light from '@/themes/light'
import Dark from '@/themes/dark'
import nord from '@/themes/nord'
import solarizedDark from '@/themes/solarized-dark'

type ThemeContext = {}

type ThemeStates =
  | { value: 'light'; context: undefined }
  | { value: 'dark'; context: undefined }
  | { value: 'nord'; context: undefined }
  | { value: 'solarizedDark'; context: undefined }

const themeMachine = createMachine(
  {
    id: 'theme',
    initial: 'dark',
    states: {
      dark: {},
      light: {},
      nord: {},
      solarizedDark: {}
    },
    on: {
      DARK: 'dark',
      LIGHT: 'light',
      NORD: 'nord',
      SOLARIZEDDARK: 'solarizedDark'
    }
  },
  { devTools: true }
)

export default themeMachine
