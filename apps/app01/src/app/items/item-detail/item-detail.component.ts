import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '@workspace01/core-data';

@Component({
  selector: 'workspace01-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  currentItem: Item;
  originalName;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Output() deleted = new EventEmitter();


  @Input() set item(value) {
    if (value) this.originalName = value.name;
    this.currentItem = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

}
