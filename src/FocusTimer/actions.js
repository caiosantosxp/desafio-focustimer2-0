import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()

  sounds.buttonPress.play()
}

export function toggleReset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  sounds.buttonPress.play()
}

export function addMinutes(){
  timer.addMinutesTimer()

  sounds.buttonPress.play()
}

export function decreaseMinutes(){
  timer.decreaseMinutesTimer()

  sounds.buttonPress.play()
}