import { Component, OnInit } from '@angular/core';

import { ItemsService, Item } from '@workspace01/core-data';

@Component({
  selector: 'workspace01-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items$;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items$ = this.itemsService.getItems();
  }

}
