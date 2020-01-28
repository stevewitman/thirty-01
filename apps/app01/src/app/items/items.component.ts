import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '@workspace01/core-data';

@Component({
  selector: 'workspace01-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items$;
  selectedItem: Item;

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.getItems();
    this.resetItem();
  }

  resetItem() {
    const emptyItem: Item = {
      id: null,
      name: '',
      description: ''
    }
    this.selectItem(emptyItem);
  }

  selectItem(item) {
    this.selectedItem = item;
  }

  getItems() {
    this.items$ = this.itemsService.getItems()
  }

  updateItem(item) {
    this.itemsService.updateItem(item)
      .subscribe(result => {
        this.getItems();
        this.resetItem();
      });
  }

  createItem(item) {
    this.itemsService.createItem(item)
      .subscribe(result => {
        this.getItems();
        this.resetItem();
      });
  }

  deleteItem(item) {
    this.itemsService.deleteItem(item.id)
      .subscribe(result => this.getItems());
  }

  saveItem(item) {
    if (!item.id) {
      this.createItem(item);
    } else {
      this.updateItem(item);
    }
  }

  cancel() {
    this.resetItem();
  }

}
