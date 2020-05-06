import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results, Result } from './Interfaces/result'

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  apiUrl = 'https://www.reddit.com/r/aww/.json';
  constructor(private http:HttpClient) { }

  getResults() {
    return this.http.get<Results>(`${this.apiUrl}`);
  }

}
