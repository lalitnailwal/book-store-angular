import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent {
  @Input()
  get data(){
    return this._data;
  }

  set data(value: number){
    this._data = ++value;
  }

  private _data: number;
  @Input() showAuthors: boolean;
}
