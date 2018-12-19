import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  templateUrl: 'customerList.component.html'
})
export class CustomerListComponent implements OnInit{

  usersdetails :any = [];
  message: String;
  constructor(private http:HttpClient, private router : Router ,private route :ActivatedRoute,private services:AuthService) { }


  ngOnInit(){
   
    this.http.get(`http://127.0.0.1:4008/viewUser`,{}).subscribe(data => {
     //console.log("Check it------>",JSON.stringify(data));
       //let result = data.result;
      //console.log("Result---> ", result);
       this.usersdetails = this.usersdetails.concat(data["result"]);
      console.log("hi hello", this.usersdetails);
    });
  }


//   editUserByAdmin(id) {
//     // this.form.setValue({
//     //localStorage.removeItem("editSalonId");
//     localStorage.setItem("_id", id);
// console.log(id);
// this.services.getSalonById(id).subscribe(data => {
  
//   //this.form.setValue(data);
//   // this.router.navigate([ '../editsalon'], { relativeTo: this.route })
// })
  
// }

deleteUserByAdmin(_id): void {
  console.log("$$$$$$&&&&&&&$$$$$$", _id);
  this.services.deleteUserByAdmin(_id)
  .subscribe(result =>{
    console.log(_id);
    console.log("This is user data",result);
     this.message = "Customer Removed Successfully!"
  });
}

sortUser() {
  
}

}
