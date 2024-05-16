import { controlsTheme } from "./elements-controls.js"
import * as themes from './action-theme.js'

export function handleTradeTheme(){
  controlsTheme.addEventListener('click', (events) => {
    const theme = events.target.dataset.theme

    if(typeof themes[theme] !== 'function'){
      return
    }

    themes[theme]()
  })
}
