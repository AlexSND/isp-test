import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() name: string;
  @Input() link: string;
  @Input() favorite: boolean;
  @Input() hidden: boolean;

  @Output() addToHidden = new EventEmitter();
  @Output() removeFromHidden = new EventEmitter();
  @Output() addToFavorite = new EventEmitter();
  @Output() removeFromFavorite = new EventEmitter();

  showAddToHidden = false
  showRemoveFromHidden = false
  showAddToFavorite = false
  showRemoveFromFavorite = false

  constructor() {}
  
  ngOnInit() {
    this.showAddToHidden = this.addToHidden.observers.length > 0
    this.showRemoveFromHidden = this.removeFromHidden.observers.length > 0
    this.showAddToFavorite = this.addToFavorite.observers.length > 0
    this.showRemoveFromFavorite = this.removeFromFavorite.observers.length > 0
  }

}
