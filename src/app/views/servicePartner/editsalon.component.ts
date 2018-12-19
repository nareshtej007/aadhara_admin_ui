import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService} from "../../auth.service";
import { first } from 'rxjs-compat/operator/first';
@Component({
  templateUrl: 'editsalon.component.html',
  //ssstyleUrls: ["./editsalon.component.css"]
})
export class EditSalonComponent {
  category: any;
  services:string;
  qty:Number;
  tasks = [];
  service=[];
  price=[];
  editForm: FormGroup;
  constructor(private http : HttpClient , private router :Router, private formBuilder: FormBuilder, private SalonService :AuthService , private route :ActivatedRoute) { }

  ngOnInit() {
    let salonId = localStorage.getItem("editSalonId");
    if(!salonId) {
      alert("Invalid action.")
      this.router.navigate([ '../salonList', ], { relativeTo: this.route })
      return;
    }
    this.editForm = this.formBuilder.group({
      type: ['', Validators.required],
      salonName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      number: ['', Validators.required],
      address_of_owner: ['', Validators.required],
      address_of_salon: ['', Validators.required],
      email_of_owner: ['', Validators.required],
      email_of_salon: ['', Validators.required],
      city_of_owner: ['', Validators.required],
      city_of_salon: ['', Validators.required],
      country: ['', Validators.required],
      pin_of_owner: ['', Validators.required],
      pin_of_salon: ['', Validators.required],
      gender: ['', Validators.required],
      doj: ['', Validators.required],

      salon_open_time: ['', Validators.required],
      salon_close_time: ['', Validators.required],
      emiratedid: ['', Validators.required],
      image: ['', Validators.required],
      bankName: ['', Validators.required],
      branch: ['', Validators.required],
      accNo: ['', Validators.required],
      holderName: ['', Validators.required],
      ibanNo: ['', Validators.required],
     
      
    });

    this.SalonService.getSalonById(salonId)
    .subscribe( data => {
      this.editForm.setValue(data);
      console.log(data);
    });
  }

 
//   onClick(event){
//    // this.service.length=0;
//     event.preventDefault()
//   console.log(event)
//   const target = event.target
//   const servicecategory=target.querySelector("#servicecategory").value;
//   console.log("==========",servicecategory);
//   //
//   //for(let category of this.service ){
    
//   this.category=this.service;
//   const cat=this.category;
//   console.log("==========",cat);
//   this.service=[];

//   this.http.post('http://127.0.0.1:3007/service',{
//    servicecategory,
//    cat
//  })
//  .subscribe(
//            data => {
               
//                console.log("services Added Successfully ", data);
//           },
//           error => {
//                console.log("error comming",error);
//          });  
//   }
// addservices(){
//   this.service.push({name :this.services,price:this.qty});
//   this.services = '';
  
// }


onSubmit() {
  this.SalonService.updateUser(this.editForm.value)
    .pipe(first)
    .subscribe(
      data => {
        this.router.navigate([ '../salonList', ], { relativeTo: this.route })
      },
      error => {
        alert(error);
      });
}




         }

// 
// }

// }

