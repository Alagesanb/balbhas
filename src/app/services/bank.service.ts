import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class Account {
  account_holder: String;
  accounttype: String;
  fathers_name: String;
}

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }


  // Add account
  AddAccount(Account){      
    console.log(Account);
    return this.http.post('http://localhost:8080/api/addAccount/', Account)    
    // .pipe(map(resp => resp.json()))
    .pipe(
      catchError(this.errorMgmt)
    )                      
  }

  GetAccount(){       
    return this.http.get('http://localhost:8080/api/getAccount/') 
    // catchError((err: Response) => {
    //   let obj = err.json();
    //  let  status = err.status;
    //   this.Log.Error(status.Error);
    //   return observableThrowError(obj);
    // })
    // map(res => res.json()),
                        
  }  
 deleteAccount(id){   
    return this.http.post('http://localhost:8080/api/deleteAccount/',{'id': id})  
    .pipe(
      catchError(this.errorMgmt)
    ) 
                
  } 

  //User API

  saveUser(user){      
    return this.http.post('http://localhost:8080/api/SaveUser/', user)  
    .pipe(
      catchError(this.errorMgmt)
    ) 
                       
  }  
  
  GetUser(){       
    return this.http.get('http://localhost:8080/api/getUser/')  
    .pipe(
      catchError(this.errorMgmt)
    ) 
                     
  }  
 deleteUser(id){   
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id}) 
    .pipe(
      catchError(this.errorMgmt)
    )  
                          
  } 



  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
 
}
