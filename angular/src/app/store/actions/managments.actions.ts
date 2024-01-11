import { Managments } from '../models';

export class GetManagments {
    static readonly type = '[Managments] Get';
  }

export class CreateUpdateContent {
  static readonly type = '[Managments] Create Update Content';
  constructor(public payload: Managments.CreateUpdateContentInput, public id?: string) {}
}
