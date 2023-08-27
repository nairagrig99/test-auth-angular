import {Component, OnInit} from '@angular/core';
import {PostApiService} from "../services/post-api.service";
import {Observable, of} from "rxjs";
import {PostInterface} from "../interface/post.interface";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})


export class PostsComponent implements OnInit {

  public postList$: Observable<PostInterface[]> = of([]);
  public postList!: PostInterface[];
  public displayedColumns: string[] = ['id', 'title', 'body'];

  constructor(private postService: PostApiService, private route: Router) {
  }


  ngOnInit(): void {
    this.postList$ = this.postService.getAllPost();
    this.postList$.subscribe((postsList) => this.postList = postsList)
  }


  public getPost(index: any): void {
    const url = `posts/post/${this.postList[index].id}`
    this.route.navigate([url])
  }

  public logOut(): void {
    localStorage.removeItem('registeredUser');
    this.route.navigate(['signIn'])
  }

}
