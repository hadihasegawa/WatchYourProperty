import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Services } from '../services';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {



  constructor(private fb: FormBuilder,
    private serviceService :ServicesService , ) { }

    myForm: FormGroup

  ngOnInit(): void {
    this.myForm = this.fb.group({
  
      service_type:"",
      describe:""
    });
  }
  

  onSubmit(){
    this.serviceService.insertServices(this.myForm.value.service_type,
      this.myForm.value.describe).subscribe(results => {
      location.reload();
      });
  }

}
