import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { Comment } from '../../models/comment';
import { AppService } from '../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'postsList',
    templateUrl: 'postsList.html',
    styleUrls: ['postsList.scss']
})
export class postsListComponent implements OnInit {

    private postsArray: Array<Post> = [];

    constructor(private appService: AppService) { }

    ngOnInit() {
        this.getPostList();
    }

    getPostList() {
        this.appService.getPosts().subscribe(postList => {
            postList.map((post: any) => {
                this.postsArray.push(new Post(post._id, post.publishedAt, post.content, post.idReferal, post.comments));
            });
        });
    }

    publishPost(postMessage) {
        const date = new Date()
        const id = date.getTime();
        const idReferal = date.getTime() + date.getMilliseconds();
        const postAux = new Post(id, date, postMessage, idReferal, []);
        this.postsArray.push(postAux);
        this.appService.publishAPost(postAux).subscribe();
    }

    publishComment(postObject) {
        const date = new Date()
        const id = date.getTime();
        const commentAux = new Comment(id, date, postObject.comment, postObject.post.idReferal);
        this.postsArray.map((post: any) => {
            if (post.idReferal === postObject.post.idReferal) {
                post.comments.push(commentAux);
                this.appService.updatePost(post.idReferal, post).subscribe();
            }
        });
    }

    deletePost(idReferal) {
        this.postsArray.map((post: any, index) => {
            if (post.idReferal === idReferal) {
                this.appService.deletePost(idReferal).subscribe();
                this.postsArray.splice(index, 1);
            }
        });
    }

}
