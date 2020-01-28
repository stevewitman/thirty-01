import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '@workspace01/core-data';

@Component({
  selector: 'workspace01-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  @Input() items: Item[];
  @Input() readonly = false;

  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

