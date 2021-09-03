import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../../contact';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = CONTACTS;

  constructor() { }

  ngOnInit(): void {
  }

}
