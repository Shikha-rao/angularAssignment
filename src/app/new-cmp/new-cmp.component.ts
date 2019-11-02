import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import{SearchPipe} from '../search.pipe';
@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css'],
})
export class NewCmpComponent implements OnInit {
  emails = [];
  val = 'email';
  index;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  searchText = new FormControl('');
  transform(items: any[],
    search: string): any[] {
    if (!items) {
      return [];
    }
    if (!this.searchText.value) {
      return items;
    }
    search = this.searchText.value.toLowerCase();
    return items.filter(it => {
      return it.toLowerCase().includes(search);
    });
  }
  constructor() { }

  ngOnInit() {

  }


  add() {
    if (this.emailFormControl.value) {
      this.emails.push(this.emailFormControl.value);
      this.emails[this.index] = this.emailFormControl.value;
    }

  }
  delete(email) {
    this.index = this.emails.indexOf(email);
    this.emails.splice(this.index, 1);
  }
}
