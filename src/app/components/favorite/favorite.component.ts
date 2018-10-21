import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {
  title: string = 'Любимые';
  data: any[];
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.data.subscribe(array => {
      this.data = array.filter(item => item.favorite)
    })
  }

  removeFromFavorite(name) {
    this.dataService.removeFromFavorite(name)
  }
}
