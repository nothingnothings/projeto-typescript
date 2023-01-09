


export enum ProjectStatus { ///usado para 'ECONOMIZAR CÓDIGO' (passamos 0 e 1 em vez daquelas strings ali)...
    Active, ///0
    Finished ////1
  }
  
  
  
  export class Project { 
  
    constructor( 
      public id: string, 
      public title: string, 
      public description: string, 
      public people: number, 
      public projectStatus: ProjectStatus 
       ) {
  
      }
  
  }
  
   