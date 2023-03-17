import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent implements OnInit, OnChanges {

  @Input() data: number;
  @Input() data2: boolean;

  constructor() {
    console.log('Hello from Child constructor');
  }

  ngOnInit(): void {
    console.log('Hello from Child ngOn init');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }
}
