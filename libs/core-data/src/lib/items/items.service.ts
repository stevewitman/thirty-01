import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private URL = 'https://server-30-x-30.herokuapp.com/items'

  constructor(private httpClient: HttpClient) {}

  createItem() {
    console.log('Method - Create Item');
  }

  getItems() {
    console.log('Method - Get Items');
    return this.httpClient.get(this.URL)
  }

  getItem(id) {
    console.log('Method - Get Item', id);
  }

  updateItem() {
    console.log('Method - Update Item');
  }

  deleteItem() {
    console.log('Method - Delete Item');
  }

}
