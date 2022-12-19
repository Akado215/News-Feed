import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INews } from '../../models/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  API_KEY = '04e1bff7f8d02d465f46f59e2b1f7a42';

  constructor(private http: HttpClient){
  }

   getAllPosts(): Observable<INews>{
    return this.http.get<INews>(`https://gnews.io/api/v4/top-headlines?topic=breaking-new&token=${this.API_KEY}&lang=en`)
  }
}