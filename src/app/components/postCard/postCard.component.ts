import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { AppService } from '../../services/app.service';
import { Post } from '../../models/post';

@Component({
    moduleId: module.id,
    selector: 'postCard',
    templateUrl: 'postCard.html',
    styleUrls: ['postCard.scss'],
    host: {
        '(document:click)': 'onClickOutside($event)',
    },
    animations: [
        trigger('openCommentBox', [
            state('show', style({
                height: '120px',
                visibility: 'visible',
                opacity: '1'
            })),
            state('hide', style({
                height: '0',
                visibility: 'hidden',
                opacity: '0'
            })),
            transition('show <=> hide', animate('200ms ease-in-out')),
        ]),
    ]
})

export class postCardComponent {
    @Input() postContent: Array<any>;
    @Output() commentPublished = new EventEmitter<any>();
    @Output() postDeleted = new EventEmitter<any>();
    private currentPost: any;
    private commentMessage: string;
    private postSelected: any;
    private state: string = 'hide';
    public froalaConfig: Object = {
        placeholderText: 'Write your comment here...',
        charCounterCount: false,
        toolbarInline: true,
        toolbarButtons: ['bold', 'italic', 'underline']
    };

    constructor(private eRef: ElementRef, private appService: AppService) { }


    onClickOutside(event) {
        if (!this.eRef.nativeElement.contains(event.target) && !this.commentMessage)
            this.state = 'hide';
    }

    showOpenBox(ind, post) {
        this.postSelected = ind;
        this.state = (this.state === 'show' ? 'hide' : 'show');
        if (this.eRef.nativeElement.contains(event.target)) {
            this.state = 'show';
            this.commentMessage = '';
        }
    }

    addComment(post, comment) {
        this.commentPublished.emit({ post: post, comment: comment });
        this.commentMessage = '';
        this.state = 'hide';
    }

    deletePost(idReferal: string) {
        this.postDeleted.emit(idReferal);
    }
}
