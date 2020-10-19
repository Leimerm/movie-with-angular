import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewApi: string
  constructor(
    private http: HttpClient
  ) {
    this.reviewApi = `${environment.apiUrl}api/v1/reviews`
   }

   getAllReviews() {
     return this.http.get<any>(`${this.reviewApi}/index`)
   }

   createReviews(params) {
    return this.http.post<any>(`${this.reviewApi}/create`, params)
   }

   updateReviews(params) {
    return this.http.patch<any>(`${this.reviewApi}/update`, params)
   }

   deleteReviews(params) {
    return this.http.delete<any>(`${this.reviewApi}/${params.id}`)
   }

}
