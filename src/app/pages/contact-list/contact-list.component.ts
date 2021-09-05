import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  private contactApiUrl = 'http://localhost:5000/contacts';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Contact[]>(this.contactApiUrl).subscribe(res => {
      this.contacts = res;
    });
  }

}
