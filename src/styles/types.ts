

export interface Step {
    id: number, 
    story: string, 
    choices: {
      one: Options 
      two: Options,
    },
    soundEffect?: {
      pathToUrl: string;
      //ifSet: boolean
    },
    soundEffect2?: {
      pathToUrl: string;
    
  }
  img?: string;
}

  export interface Options {
    text: string, 
    path: number;
  }

  export interface Sound {
    pathToUrl: string; 
  }