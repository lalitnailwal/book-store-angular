import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent {

  constructor() { }

  @Output() myData = new EventEmitter<string>();
  public data: number;

  public setData(value: number): void{
    this.data= value;
  }

  public btnClick(): void{
    this.myData.emit('This text is from child component');
  }
}
