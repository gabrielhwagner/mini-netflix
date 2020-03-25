import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ButtonStyle } from './button.constants';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.styl'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {

  @Input() description: string;
  @Input() type = 'button';
  @Input() appearance: ButtonStyle = ButtonStyle.PRIMARY;
  @Input() loading = false;

  ButtonStyle = ButtonStyle;
  constructor() { }

  ngOnInit(): void {
  }

}
