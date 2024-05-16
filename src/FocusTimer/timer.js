import * as el from './elements.js'
import state from './state.js'
import * as sounds from './sounds.js'

export function countDown(){

  clearTimeout(state.countDownId)

  if(!state.isRunning){
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0){
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    sounds.kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  state.countDownId = setTimeout(() => countDown(), 1000)
}

export function addMinutesTimer(){
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  if(minutes + 5 <= 60){
    minutes = minutes + 5
  }

  updateDisplay(minutes, seconds)
}

export function decreaseMinutesTimer(){
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  if(minutes - 5 >= 0){
    minutes = minutes - 5
  }

  updateDisplay(minutes, seconds)
}

export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes // nullish coalescing operator */
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, '0')
  el.seconds.textContent = String(seconds).padStart(2, '0')
}