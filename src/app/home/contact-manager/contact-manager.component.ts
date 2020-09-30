import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from '../../services/contacts.service';

import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss']
})
export class ContactManagerComponent implements OnInit {

  title = 'Add contact';
  contacts: Contact[] = [];
  contactId = 'new';
  contact: Contact = {
    id: 0,
    name: '',
    email: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
  ) {
    this.activatedRoute.params.subscribe( myRouteParams => {
      this.contactId = myRouteParams['id'];
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.contacts = this.contactsService.getContacts();
    if ( this.contactId !== 'new') {
      this.editInit(this.contactId);
      this.title = 'Edit contact';
    }
  }

  submit() {
    if (this.contactId !== 'new') {
      this.edit();
    } else {
      this.add();
    }
  }

  add() {
    const contact = {
      id: Math.max(...this.contacts.map(o => o.id), 0) + 1,
      name: this.contact.name,
      email: this.contact.email
    };
    this.contacts.push(contact);
    this.contacts = this.contactsService.saveContacts(this.contacts);
    this.router.navigate(['/home']);
  }

  editInit(contactId: string) {
    const index = this.contacts.findIndex(o => o.id === +contactId);
    if (index >= 0) {
      this.contact = {
        id: +contactId,
        name: this.contacts[index].name,
        email: this.contacts[index].email
      };
    } else {
      this.router.navigate(['/home']);
    }
  }

  edit() {
    const index = this.contacts.findIndex(o => o.id === +this.contact.id);
    this.contacts[index] = this.contact;
    this.contacts = this.contactsService.saveContacts(this.contacts);
    this.router.navigate(['/home']);
  }

}
