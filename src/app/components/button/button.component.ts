import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() variant: string = 'primary';
  @Input() fullWidth: boolean = false;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.onClick.emit();
  }

}
