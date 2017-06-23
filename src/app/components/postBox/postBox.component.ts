import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'postBox',
  templateUrl: 'postBox.html',
  styleUrls: ['postBox.scss'],
  host: {
    '(document:click)': 'onClickOutside($event)',
  }
})

export class postBoxComponent {
  @Output() published = new EventEmitter<any>();
  private postMessage: string;
  private expandEditor: boolean = false;
  private postsArray: Array<any> = [];
  public froalaConfig: Object = {
    placeholderText: 'Write your post here...',
    charCounterCount: false,
    toolbarInline: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'fontSize']
  };

  constructor(private eRef: ElementRef) { }

  publishAPost(postMessage) {
    this.published.emit(postMessage);
    this.expandEditor = false;
    this.postMessage = '';
  }

  onClickOutside(event) {
    if (!this.eRef.nativeElement.contains(event.target) && !this.postMessage)
      this.expandEditor = false;
  }

  expandBox() {
    this.expandEditor = true;
  }
}
