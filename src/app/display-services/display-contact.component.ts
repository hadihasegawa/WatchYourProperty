import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services.service';
import { Services } from '../services';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent implements OnInit {

  listOfServices: Services[]=[];
  constructor(private serviceService: ServicesService, private router:Router, private authService: AuthService) {
    this.serviceService.getServices().subscribe(services =>{
      this.listOfServices = services;
      this.serviceService.listOfServices = services;
    });
   }

  ngOnInit() :void {
  }
  
  delete(id: string) {
    
    if (this.authService.isLoggedIn() && this.authService.isUser()){
      this.serviceService.deleteServices(id).subscribe(results => {
            location.reload();
          });
    }
    return false
  }

  update(id: string){
    this.router.navigate(["/updateService",id])
  }

}
