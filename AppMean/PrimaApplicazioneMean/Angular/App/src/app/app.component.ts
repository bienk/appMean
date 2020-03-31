import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from './unit.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obsUnit: Observable<Unit[]>;
  data: Unit[];
  constructor(private http: HttpClient) { }
  getUnitList(): void {

    this.obsUnit = this.http.get<Unit[]>('http://localhost:3000/users');
    this.obsUnit.subscribe((data: Unit[]) => {this.data = data;});
  }


postObserver : Observable<Object>;
postData : Object;

addUnit(newUnit: HTMLInputElement, newCost: HTMLInputElement, newHitSpeed: HTMLInputElement): boolean {
    let newData: Unit = new Unit();
    newData.Unit = newUnit.value;
    newData.Cost = newCost.value;
    newData.Hit_Speed = newHitSpeed.value;
    let headers =  {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    this.postObserver = this.http.post('http://localhost:3000/users', JSON.stringify(newData),headers)
    this.postObserver.subscribe(data => this.postData = data);
    return false;
  }

}
