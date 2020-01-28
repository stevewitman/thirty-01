import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private URL = 'https://server-30-x-30.herokuapp.com/items'

  constructor(private httpClient: HttpClient) {}

  getItems() {
    return this.httpClient.get(this.URL)
  }

  createItem(item) {
    return this.httpClient.post(this.URL, item);
  }

  updateItem(item) {
    return this.httpClient.patch(this.URL + '/' + item.id, item)
  }

  deleteItem(id) {
    return this.httpClient.delete(this.URL + '/' + id)
  }

}
