

export interface nextStep {
    id: number, 
    story: string, 
    choices: {
      one: {text: string, path: number}, 
      two?: {text: string, path: number}
    }
  }