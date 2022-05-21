

export interface Step {
    id: number, 
    story: string, 
    choices: {
      one: Options 
      two: Options
    }
    soundEffect? : Sound; 
  }

  export interface Options {
    text: string, 
    path: number
  }

  export interface Sound {
    url: string; 
  }