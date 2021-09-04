import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/Contact';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  id: string;
  isLoading: boolean = true;
  contact: Contact = {
    name: '',
    email: '',
    tel: '',
    age: 0
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.http.get<Contact>(`http://localhost:5000/contacts/${this.id}`).subscribe(res => {
      this.contact = res;
      this.isLoading = false;
      return;
    }, () => {
      this.router.navigate(['/contacts']);
    });
  }
}
