import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AppService {

  constructor(private http:Http) { }


  createstamp(username,coursename,startdate,enddate,nric){
   console.log("Name",username);
   

 
 const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
 const options = new RequestOptions({ headers: headers }); 
  let body = new URLSearchParams();
  body.set('studentname',username);
  body.set('passportnumber',nric);
  body.set('coursename',coursename);
  body.set('startdate',startdate);
  body.set('enddate',enddate);
 

return this.http.post('http://ec2-35-168-114-210.compute-1.amazonaws.com:3001/sendtx', body.toString(),options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));  





}


}



