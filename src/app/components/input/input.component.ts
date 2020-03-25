import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.styl'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent implements OnInit {

  @Input() description: string = 'BÇA';
  @Input() teste: string= 'bla';
  @Input() type: string = 'text';
  @Input() invalidMessage: string = 'erro';
  @Input() isInvalid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
