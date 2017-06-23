import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Post } from '../../models/post';

@Component({
    moduleId: module.id,
    selector: 'postCard',
    templateUrl: 'postCard.html',
    styleUrls: ['postCard.scss'],
    host: {
        '(document:click)': 'onClickOutside($event)',
    }
})

export class postCardComponent {
    @Input() postContent: Array<any>;
    @Output() commentPublished = new EventEmitter<any>();
    @Output() postDeleted = new EventEmitter<any>();    
    private currentPost: any;
    private commentMessage: string;
    private postSelected: any;
    private openCommentBox: boolean = false;
    public froalaConfig: Object = {
        placeholderText: 'Write your comment here...',
        charCounterCount: false,
        toolbarInline: true,
        toolbarButtons: ['bold', 'italic', 'underline']
    };

    constructor(private eRef: ElementRef, private appService: AppService) {}

    onClickOutside(event) {
        if (!this.eRef.nativeElement.contains(event.target) && !this.commentMessage)
            this.openCommentBox = false;
    }

    showOpenBox(ind, post) {
        this.postSelected = ind;
        this.openCommentBox = true;
    }

    addComment(post, comment) {
        this.commentPublished.emit({post: post, comment: comment});
        this.commentMessage = '';
        this.openCommentBox = false;
    }

    deletePost(idReferal: string) {
        this.postDeleted.emit(idReferal);
    }
}
