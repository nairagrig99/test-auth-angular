import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {PostInterface} from "../interface/post.interface";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class PostApiService {

  constructor(private http: HttpClient) {
  }

  public getAllPost(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(environment.baseUrl);
  }

  public getPostById(id: number): Observable<PostInterface> {
    return this.http.get<PostInterface>(`${environment.baseUrl}/${id}`);
  }
}
