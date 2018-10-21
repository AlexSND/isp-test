import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private DataStore = new BehaviorSubject([])
  data: Observable<any> = this.DataStore.asObservable()

  constructor(private http: HttpClient) {}

  getData() {
    if(localStorage.length) {
      this.DataStore.next(JSON.parse(localStorage.getItem('lsStore')));
    } else {
      this.http.get('https://api.github.com/emojis')
        .subscribe(response => {
          const fetchedData = Object.entries(response).map(([name, link]) => ({name, link, favorite: false, hidden: false}));
        this.DataStore.next(fetchedData);
      })
    }
  }

  toLocalStorage(newData) {
    localStorage.setItem('lsStore', JSON.stringify(newData))
  }

  addToFavorite(name) {
    const newData = this.DataStore.getValue()
    newData.forEach(item => item.name === name
      ? item.favorite = !item.favorite
      : null)
    this.DataStore.next(newData)
    this.toLocalStorage(newData)
  }

  removeFromFavorite(name) {
    const newData = this.DataStore.getValue()
    newData.forEach(item => item.name === name
      ? item.favorite = false
      : null)
    this.DataStore.next(newData)
    this.toLocalStorage(newData)
  }

  addToHidden(name) {
    const newData = this.DataStore.getValue()
    newData.forEach(item => item.name === name
      ? item.hidden = true
      : null)
    this.DataStore.next(newData)
    this.toLocalStorage(newData)
  }

  removeFromHidden(name) {
    const newData = this.DataStore.getValue()
    newData.forEach(item => item.name === name
      ? item.hidden = false
      : null)
    this.DataStore.next(newData)
    this.toLocalStorage(newData)
  }
}
