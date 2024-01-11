import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ManagmentsState } from '../../store/states';
import { Observable } from 'rxjs';
import { Managments } from '../../store/models';
import { CreateUpdateContent, GetManagments } from '../../store/actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ManagmentsService } from '../shared/managments.service';

@Component({
  selector: 'app-managment-list',
  templateUrl: './managment-list.component.html',
  styleUrls: ['./managment-list.component.scss'],
})
export class ManagmentListComponent implements OnInit {
  @Select(ManagmentsState.getManagments)
  managments$: Observable<Managments.Managment[]>;

  loading = false;
  isModalOpenCreateEdit = false;
  isModalOpenView = false;
  form: FormGroup;
  selectedRow = {} as Managments.Managment;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private managmentsService: ManagmentsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.store.dispatch(new GetManagments()).subscribe(() => {
      this.loading = false;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      title: [this.selectedRow.title || '', Validators.required],
      htmlContent: [this.selectedRow.htmlContent || '', Validators.required],
    });
  }

//------------------------------------ CREATE - EDIT - SAVE - VIEW  ------------------------------------
  createContent() {
    this.selectedRow = {} as Managments.Managment;
    this.buildForm();
    this.isModalOpenCreateEdit = true;
  }

  editContent(id: string) {
    this.managmentsService.getById(id).subscribe(row => {
      this.selectedRow = row;
      this.buildForm();
      this.isModalOpenCreateEdit = true;
    });
  }

  save() {
    if (this.form.invalid) {
      return false;
    }
  
    this.store.dispatch(new CreateUpdateContent(this.form.value, this.selectedRow.id))
      .subscribe(() => {
        this.isModalOpenCreateEdit = false;
        this.form.reset();
      });
  }

  viewContent(id: string) {
    this.managmentsService.getById(id).subscribe(row => {
      this.selectedRow = row;
      this.isModalOpenView = true;
    });
  }

  //------------------------------------ CLOSE MODALS ------------------------------------
  closeModalView(){
    this.isModalOpenView = false;
  }

  closeModalCreateEdit(){
    this.isModalOpenCreateEdit = false;
  }

}
