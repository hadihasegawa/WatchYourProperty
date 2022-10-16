import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from "./services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'watchyourpropertypart2';
  services: any = [];
  myForm!: FormGroup;

  constructor(private servicesService: ServicesService, private fb: FormBuilder) {
    servicesService.getServices().subscribe(services => {
      this.services = services;
      console.log(this.services);
    });
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      service_type: '',
      describe: ''
    });
  }
  onSubmit() {
    this.servicesService.insertServices(this.myForm.value.name,
      this.myForm.value.post).subscribe(results => {
        location.reload();
      });
  }
}
