import {Component, OnInit} from '@angular/core';
import {PostApiService} from "../../services/post-api.service";
import {Router} from "@angular/router";
import {PostInterface} from "../../interface/post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public postList!: PostInterface;
  private getPostId!: number;

  constructor(
    private postService: PostApiService,
    private route: Router) {
    const splitUrl = this.route.url.split('/');

    this.getPostId = +splitUrl[splitUrl.length - 1]
  }

  ngOnInit(): void {
    this.postService.getPostById(this.getPostId)
      .subscribe((request) => this.postList = request)
  }

  public back(): void {
    this.route.navigate(['posts'])
  }
}
