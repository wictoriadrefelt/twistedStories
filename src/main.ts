

import './style.css'
//import { nextStep } from './styles/types';
import { gameDataList } from './gameData';
import { AudioPlay } from './gameLogicFunctions';


const textElement = document.querySelector(".text") as HTMLElement | null | undefined
const choiceOne = document.getElementById('left') as HTMLElement
const choiceTwo = document.querySelector('#right') as HTMLElement 
const scareNoise = new Audio('./src/scare.wav') as HTMLAudioElement
const doorCreek = new Audio('./src/creakingDoorSound.mp3') as HTMLAudioElement




function test(){
 let buttonForInput = document.getElementById('ja')  
 buttonForInput?.addEventListener('click', addInput)
}

function addInput(){  
  let input = (<HTMLInputElement> document.getElementById("input")).value;console.log(input)}
  

let gameStep = gameDataList[0]
//console.log(gameStep)
const imageToShow = document.querySelector<HTMLImageElement>(".scare")!

function game(this: HTMLElement, event: MouseEvent) : void {
  let step: number = 1; 
  if(this.id == 'left') {
  
    step = gameStep.choices.one.path

  }else if(this.id == 'right') {
   
    step = gameStep.choices.two.path

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
  let image = document.querySelector<HTMLImageElement>('.stag');
  image?.classList.add('hidden')
  let container = document.querySelector<HTMLElement>('.container')
  
  if(gameStep.story){
    textElement!.innerText = gameStep.story;
  }
  if(gameStep.choices.one){
    choiceOne.innerText = gameStep.choices.one.text;

  }
  if(gameStep.choices.two){
    choiceTwo.innerText = gameStep.choices.two.text
    
  }
  if(gameStep.soundEffect){
    AudioPlay('scare.wav');
    
  }
  if(gameStep.soundEffect2){
    AudioPlay('creakingDoorSound.mp3');
  }

  if(gameStep.id == 2 ||
     gameStep.id == 5 
     || gameStep.id == 9 
     || gameStep.id == 8) 
    {
    choiceTwo.classList.add('hidden')
  }
  else{
    choiceTwo.classList.remove('hidden')}

  if(gameStep.id == 7) {
    image!.classList.remove('hidden')
    
  }else{
    image!.classList.add('hidden')
    
  }
  
  
}


enum deadEnds{

first = 1,
second = 2,
third = 5

}


// buttons to click
choiceOne.addEventListener("click", game)  
choiceTwo.addEventListener("click", game) 



function init(): void {
  render()
}



init()

