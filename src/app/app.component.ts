import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyEmoji';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData()
  }
  
}
