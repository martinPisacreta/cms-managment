export namespace Managments {
    export interface State {
      managments: Response;
    }
  
    export interface Response {
      items: Managment[];
      totalCount: number;
    }
  
    export interface Managment {
      title: string;
      htmlContent: string,
      id: string;
    }

    export interface CreateUpdateContentInput {
      title: string;
      htmlContent: string;
    }
  }