import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baseUrl = "https://localhost:5001"

  constructor(private httpClient: HttpClient) { }

  public composeHeader(token: string) {
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return headers;
    }
    return new HttpHeaders().set('Authorization', ``);;
  }

  public getTodayTodos(token: any) {
    return this.httpClient.get(`${this.baseUrl}/v1/todos/undone/today`, { headers: this.composeHeader(token) });
  }

  public getTomorrowTodos(token: any) {
    return this.httpClient.get(`${this.baseUrl}/v1/todos/undone/tomorrow`, { headers: this.composeHeader(token) });
  }

  public getAllTodos(token: any) {
    return this.httpClient.get(`${this.baseUrl}/v1/todos`, { headers: this.composeHeader(token) });
  }

  public postTodo(data: any, token: any) {
    return this.httpClient.post(`${this.baseUrl}/v1/todos`, data, { headers: this.composeHeader(token) });
  }

  public markAsDone(data: any, token: any) {
    return this.httpClient.put(`${this.baseUrl}/v1/todos/mark-as-done`, data, { headers: this.composeHeader(token) });
  }

  public markAsUndone(data: any, token: any) {
    return this.httpClient.put(`${this.baseUrl}/v1/todos/mark-as-undone`, data, { headers: this.composeHeader(token) });
  }


}
