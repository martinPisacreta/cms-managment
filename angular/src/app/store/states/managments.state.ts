import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CreateUpdateContent, GetManagments } from '../actions/managments.actions';
import { Managments } from '../models/managments';
import { ManagmentsService } from '../../managments/shared/managments.service';
import { tap , switchMap  } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@State<Managments.State>({
  name: 'ManagmentsState',
  defaults: { managments: {} } as Managments.State,
})

@Injectable() // add this line
export class ManagmentsState {
  @Selector()
  static getManagments(state: Managments.State) {
    return state.managments.items || [];
  }

  constructor(private managmentsService: ManagmentsService) {}

  @Action(GetManagments)
  get(ctx: StateContext<Managments.State>) {
    return this.managmentsService.get().pipe(
      tap(managmentsResponse => {
        ctx.patchState({
          managments: managmentsResponse,
        });
      }),
    );
  }

  @Action(CreateUpdateContent)
  save(ctx: StateContext<Managments.State>, action: CreateUpdateContent) {
    let request;

    if (action.id) {
      request = this.managmentsService.update(action.payload, action.id);
    } else {
      request = this.managmentsService.create(action.payload);
    }

    return request.pipe(switchMap(() => ctx.dispatch(new GetManagments())));
  }
  
}
