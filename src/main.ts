

import './style.css'
//import { nextStep } from './styles/types';
import { gameDataList } from './gameData';


const textElement = document.querySelector(".text") as HTMLElement | null | undefined
const choiceOne = document.getElementById('left') as HTMLElement
const choiceTwo = document.querySelector('#right') as HTMLElement 



let gameStep = gameDataList[0]
//console.log(gameStep)

function game(this: HTMLElement, event: MouseEvent) : void {
  let step: number = 1; 
  if(this.id == 'left') {
    //console.log('hej')
    step = gameStep.choices.one.path
    //console.log(step)
  }else if(this.id == 'right') {
    //console.log('howdy')
    step = gameStep.choices.two.path
    //console.log(step)
  }else{
    console.log('error'); 
  }

  const foundPath = gameDataList.find( function (nextStep) {
    return nextStep.id == step;  

  })

  if(foundPath){
   gameStep = foundPath; 
   render(); 
  
}
}

function render() {
  if(gameStep.story){
    textElement!.innerText = gameStep.story;
  }
  if(gameStep.choices.one){
    choiceOne.innerText = gameStep.choices.one.text;

  }
  if(gameStep.choices.two){
    choiceTwo.innerText = gameStep.choices.two.text
  }
}


// buttons to click
choiceOne.addEventListener("click", game)  
choiceTwo.addEventListener("click", game) 



function init(): void {
  
  render()
}



init()

