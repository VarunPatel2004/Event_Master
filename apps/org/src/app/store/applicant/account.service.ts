import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountData } from './applicant.state';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = '/api/accountsList';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<AccountData[]> {
    return this.http.get<AccountData[]>(this.apiUrl);
  }
}
