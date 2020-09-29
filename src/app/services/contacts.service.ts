import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    {
      id: 1,
      name: 'Francisco Oseguera',
      email: 'francisco@oseguera.dev'
    },
    {
      id: 2,
      name: 'Zaira Rojas',
      email: 'zaira.rojas@ust-global.com'
    },
    {
      id: 3,
      name: 'Bill Gates',
      email: 'bill-gates@microsoft.com'
    }
  ];

  constructor() { }

  /**
   * Delete contact by id
   *
   * @param id Contact identifier
   */
  deleteContact(id: number) {
    this.contacts = this.contacts.filter(obj => obj.id !== id);
    this.saveContacts(this.contacts);
    return this.contacts;
  }

  /**
   * Save a contact list
   *
   * @param contacts Contact array
   */
  saveContacts(contacts: Contact[]) {
    this.contacts = contacts;
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    return this.contacts;
  }

  /**
   * Get all contacts in localstorage or the defaul list
   */
  getContacts() {
    const contacts = localStorage.getItem('contacts');
    if ( !!contacts ) {
      this.contacts = JSON.parse(contacts);
    }
    return this.contacts;
  }

}
