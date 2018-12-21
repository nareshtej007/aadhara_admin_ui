import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  salondetails :any=[];
  constructor(private http:HttpClient) { }

  registerSalon(salondetails){
   return this.http.post('http://127.0.0.1:4003/request',salondetails);
  }

   getSalonById(_id: String) {
    console.log(_id);
    return this.http.post(`http://127.0.0.1:4003/requestResponse/` ,{_id});
  }
 

  updateUser(salondetails) {
    return this.http.post(`http://127.0.0.1:4003/updateDetail`+ '/' + salondetails.id, salondetails);
  }

  // deleteUser(_id: String) {
  //   console.log("this_____",_id);
  //   return this.http.post(`http://127.0.0.1:4003/rejectRequest/`, {_id});
   
  // }

  editUserByAdmin(userdetails) {
  //   return this.http.post(`http://127.0.0.1:4003/updateDetail`)
  }

  deleteUserByAdmin(_id) {
    console.log("++++++++++",_id);
    console.log("rejected...........");
    return this.http.post(`http://127.0.0.1:4008/removeUser/`, {_id})
 
  }
  sortUser() {
    return this.http.get(`http://127.0.0.1:4008/sortName`,{})
  
  }

  searchByAdmin(usersdetails) {
    return this.http.post('http://127.0.0.1:4008/filterUser',usersdetails, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
      
    })

  }


  
}
