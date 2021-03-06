import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './componentes/Post';

@Injectable({
  providedIn: 'root'
})
export class DataBDService {

  constructor(private httpClient: HttpClient) { 
    console.log('service is working');
  }

  getData(){
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

  }
}
