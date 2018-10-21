import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.css']
})

export class HiddenComponent implements OnInit {
  title: string = 'Удаленные'
  data: any[] = []

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.data.subscribe(array => {
      this.data = array.filter(item => item.hidden)
    })
  }

  removeFromHidden(name) {
    this.dataService.removeFromHidden(name)
  }
}
