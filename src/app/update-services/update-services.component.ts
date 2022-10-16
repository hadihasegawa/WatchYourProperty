import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Services } from '../services';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update-services',
  templateUrl: './update-services.component.html',
  styleUrls: ['./update-services.component.css']
})
export class UpdateServicesComponent implements OnInit {

  listOfServices: Services[]=[];
  id:string
  constructor(private fb: FormBuilder,
    private serviceService :ServicesService, private route: ActivatedRoute) { }

    createForm: FormGroup


  ngOnInit(): void {
    this.createForm = this.fb.group({
      _id:"",
      service_type:"",
      describe:""
    });
    this.route.params.subscribe(params => {
      this.id = params["id"]
    })
    
    this.serviceService.getService(this.id).subscribe(value => {
      this.createForm.setValue({_id: value._id, service_type: value.service_type, describe: value.describe})
      // console.log(value)
    });
    
  }
  newService: Services;
  
  onSubmit(){
    this.newService = new Services(this.id, this.createForm.value.service_type, this.createForm.value.describe)
    this.serviceService.updateService(this.id, this.newService).subscribe(results => {
      location.reload();
      });
  }

}
