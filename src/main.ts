

import './style.css'
import { nextStep } from './styles/types';
import { gameDataList } from './gameData';


const textElement = document.querySelector(".text") as HTMLElement | null | undefined
const optionButtonsElement = document.querySelector('#options') as HTMLInputElement | null | undefined

console.log(gameDataList); 
console.log(gameDataList[1].story)




for(let i=0; i < gameDataList.length; i++){
  console.log(gameDataList[i].id)
  if(gameDataList[i]. id == 1){
    textElement!.innerHTML = gameDataList[i].story
 
    }
    optionButtonsElement!.innerHTML = gameDataList[i].story
  }



/* function helloWorld() {
  const element= document.getElementById("options");
  
  if (optionButtonsElement) {
  optionButtonsElement.innerHTML = "Hello, World!";
  }
}
helloWorld();

 */


/* 
  console.log(nextSteps[0].story)

  if(optionButtonsElement){
  optionButtonsElement!.innerHTML = nextSteps[0].story;
  } */

/* 
  abstract class Person {
    constructor(firstName:string, lastName:string) {

      this.firstName = firstName
      this.lastName = lastName
      //this.SSN = SSN 
    }
    protected firstName: string
    protected lastName: string 
    //private SSN: number

    abstract getDateOfBith: () => string
   
    }

  class Student extends Person {
    constructor(firstName: string, lastName: string, SSN:string)
    super(firstName, lastName)
    this.SSN = SSN; 
  }
    private SSN: string
    getDateOfBirth: () => string = () => {
      return this.SSN.toString().split("-")[0];
    }

  const newPerson = new Person('hanna', 'nymåne', '233244'); 
  
  newPerson.getDateOfBirth();  */