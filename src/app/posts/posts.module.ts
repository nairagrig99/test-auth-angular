import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PostComponent} from "./post/post.component";
import {PostsComponent} from "./posts.component";
import {PostApiService} from "../services/post-api.service";
import {MatTableModule} from "@angular/material/table";

export const route: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'post/:id',
    component: PostComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    MatTableModule
  ],
  providers: [PostApiService],
  exports: [MatTableModule]
})
export class PostsModule {
}
