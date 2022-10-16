import { Injectable } from '@angular/core';
//import { listOfServices } from './mock-service';
import { Services } from './services';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = "http://localhost:3000/api/services";
  listOfServices: Services[]=[];
  constructor(private http: HttpClient) { }

  getServices(): Observable<Services[]> {
    return this.http.get<any[]>
    (this.url);
    
  }

  getService(id: string) {
    return this.http.get<Services>(this.url + '/' + id);
  }

  insertServices(service_type: string, describe: string) {
      return this.http.post<any[]>(this.url, { 'service_type' : service_type, 'describe': describe  });
      }

  
  deleteServices(id: string) {
    return this.http.delete<any[]>(this.url + "/" + id);
  }
  

  updateService(_id: string, item:Services) {
    return this.http.put<any[]>(this.url + "/" + _id, {
      "service_type": item.service_type,
      "describe": item.describe
    });
  }
  
}
