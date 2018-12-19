import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
@Component({
  templateUrl: 'salonList.component.html'
})
export class SalonListComponent {
form:FormGroup

message: string;

  salondetails :any = [];

  constructor(private http:HttpClient, private router : Router ,private route :ActivatedRoute,private services:AuthService) { }
  ngOnInit(){
   
    this.http.post(`http://127.0.0.1:4003/getUnregisteredSaloons`,{}) .subscribe(data => {
     console.log(data);
      this.salondetails= this.salondetails.concat(data);
    });
  }
 

  salonEdit(id) {
    // this.form.setValue({
    //localStorage.removeItem("editSalonId");
    localStorage.setItem("_id", id);
console.log(id);
this.services.getSalonById(id).subscribe(data => {
  
  //this.form.setValue(data);
  // this.router.navigate([ '../editsalon'], { relativeTo: this.route })
})
  
}

// userDelete(_id): void {
//   this.services.deleteUser(_id)
  
//   .subscribe(result =>{
//     console.log(_id);
//      this.message = "Customer Rejected Successfully!"
//   });
// }
}