import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _https:HttpClient) { }

  addEmployee(data:any): Observable<any> {
    return this._https.post('https://angular-crud-app-lyart.vercel.app/employees', data, {responseType: 'json'})
  }
  updateEmployee(id: number , data:any): Observable<any> {
    return this._https.put(`https://angular-crud-app-lyart.vercel.app/employees/${id}`, data, {responseType: 'json'})
  }
  getEmployeeList(): Observable<any> {
    return this._https.get('https://angular-crud-app-lyart.vercel.app/employees',{responseType: 'json'})
  }

  deleteEmployee(id:number): Observable<any>{
    return this._https.delete(`https://angular-crud-app-lyart.vercel.app/${id}`, {responseType: 'json'});
  }
  
}
