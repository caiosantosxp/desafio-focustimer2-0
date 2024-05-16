import * as el from './elements-controls.js'
import * as soundsTheme from './sounds-theme.js'

var stateThemes = [el.btnTree, el.btnRain, el.btnStore, el.btnFire]
var stateClass = ['tree', 'rain', 'store', 'fire']

export function treeTheme(){
  document.documentElement.classList.add('tree')
  el.btnTree.classList.add('active')

  pauseMusic()
  removeActiveIsClass(el.btnTree, 'tree')
  soundsTheme.florestaSound.play()
}

export function rainTheme(){
  document.documentElement.classList.add('rain')
  el.btnRain.classList.add('active')

  pauseMusic()
  removeActiveIsClass(el.btnRain, 'rain')
  soundsTheme.chuvaSound.play()
}

export function storeTheme(){
  document.documentElement.classList.add('store')
  el.btnStore.classList.add('active')

  pauseMusic()
  removeActiveIsClass(el.btnStore, 'store')
  soundsTheme.coffeeSound.play()
}

export function fireTheme(){
  document.documentElement.classList.add('fire')
  el.btnFire.classList.add('active')

  pauseMusic()
  removeActiveIsClass(el.btnFire, 'fire')
  soundsTheme.lareiraSound.play()
}

function removeActiveIsClass(button, nameClass){
  for(let stateTheme of stateThemes){
    if(stateTheme === button){
      continue
    }

    stateTheme.classList.remove('active')
  }

  for(let class_state of stateClass){
    if(class_state === nameClass){
      continue
    }

    document.documentElement.classList.remove(class_state)
  }
}

function pauseMusic(){
  soundsTheme.lareiraSound.pause()
  soundsTheme.coffeeSound.pause()
  soundsTheme.chuvaSound.pause()
  soundsTheme.florestaSound.pause()
}