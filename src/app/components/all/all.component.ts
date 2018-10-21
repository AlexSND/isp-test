import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})

export class AllComponent implements OnInit {
  title: string = 'Все';
  data: any[] = [];
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.data.subscribe(array => {
      this.data = array.filter(item => !item.hidden)
    })
  }

  addToFavorite(name) {
    this.dataService.addToFavorite(name)
  }

  addToHidden(name) {
    this.dataService.addToHidden(name)
  }
  
}
