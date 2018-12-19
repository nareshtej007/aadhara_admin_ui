import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AuthService} from "../../auth.service";

@Component({
  templateUrl: 'salon.component.html',
  styleUrls: ["./salon.component.css"]
})
export class SalonComponent {
  category: any;
  services:string;
  qty:Number;
  tasks = [];
  service=[];
  price=[];
  salonRegister: FormGroup;
  submitted = false;
  message:String;
    
  constructor(private router :Router ,private route:ActivatedRoute,private fb:FormBuilder,private SalonService:AuthService) { }

addservices(){
  this.service.push({name :this.services,price:this.qty});
  this.services = '';

}

ngOnInit() {
  this.salonRegister = this.fb.group({
    user_type: ['admin', Validators.required],
    name_of_salon: ['', Validators.required],
    type_of_salon: ['', Validators.required],
    first_name_salon_owner: ['', Validators.required],
    last_name_salon_owner: ['', Validators.required],
    salon_owner_phone: ['', [Validators.required, Validators.minLength(10)]],
    address_of_owner: ['', Validators.required],
    address_of_salon: ['', Validators.required],
    city_of_owner: ['', Validators.required],
    city_of_salon:['', Validators.required],
    country_of_salon:['', Validators.required],
    emirates_id_of_owner:['', Validators.required],
    email_of_owner: ['', [Validators.required, Validators.email]],
    email_of_salon: ['', [Validators.required,Validators.email]],
    
   
    pin_of_owner:['', Validators.required],
    pin_of_salon:['', Validators.required],
    gender_of_owner:['', Validators.required],
    image_of_salon:['', Validators.required],
    salon_open_time:['', Validators.required],
    salon_close_time:['', Validators.required],
    bank_name:['', Validators.required],
    branch_of_bank:['', Validators.required],
    bank_account_number:['',[Validators.required, Validators.minLength(15)]],
    account_holder_name:['', Validators.required],
    iban_number:['', [Validators.required, Validators.minLength(11)]],
    ServicCategory:['', Validators.required],
    Services:[this.service]
   
  });
}

get f() { return this.salonRegister.controls; }


addSalon(){
 
  this.submitted = true;

   //stop here if form is invalid
        if (this.salonRegister.invalid) {
            return;
        }
  console.log("===================>",this.salonRegister.value)
 //this.router.navigate([ '../salonList', ], { relativeTo: this.route })
  this.
  SalonService.registerSalon(this.salonRegister.value).subscribe(data => {
  this.message=this.salonRegister.value.message
    this.router.navigate([ '../salonList', ], { relativeTo: this.route })
  })
  
            

             
            
            }
          }


