import { Component, OnInit } from '@angular/core';
import { Contact } from '@app/interfaces/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  isLoading = false;

  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  delete(id: number) {
    this.contacts = this.contactsService.deleteContact(id);
  }

}
