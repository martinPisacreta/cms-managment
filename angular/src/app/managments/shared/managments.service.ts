import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import { Managments } from '../../store/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagmentsService {
  constructor(private restService: RestService) {}

  get(): Observable<Managments.Response> {
    return this.restService.request<void, Managments.Response>({
      method: 'GET',
      url: '/api/app/cms-content'
    });
  }

  create(createContentInput: Managments.CreateUpdateContentInput): Observable<Managments.Managment> {
    return this.restService.request<Managments.CreateUpdateContentInput, Managments.Managment>({
      method: 'POST',
      url: '/api/app/cms-content',
      body: createContentInput
    });
  }

  getById(id: string): Observable<Managments.Managment> {
    return this.restService.request<void, Managments.Managment>({
      method: 'GET',
      url: `/api/app/cms-content/${id}`
    });
  }
  
  update(updateContentInput: Managments.CreateUpdateContentInput, id: string): Observable<Managments.Managment> {
    return this.restService.request<Managments.CreateUpdateContentInput, Managments.Managment>({
      method: 'PUT',
      url: `/api/app/cms-content/${id}`,
      body: updateContentInput
    });
  }
}
