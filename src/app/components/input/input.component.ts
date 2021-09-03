import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() title: string = '';
  @Input() type: string = 'text';
  @Input() value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
