import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() set control(value: FormControl) {
    if (this.formControl !== value) {
      this.formControl = value;
    }
  }
  @Input() title: string = '';
  @Input() type: string = 'text';

  formControl: FormControl;


  constructor() { }

  ngOnInit(): void {
  }
}
