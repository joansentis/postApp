import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { APP_CONFIG } from '../config/app.config';

@Injectable()
export class AppService {
    private postsListUrl: string;
    private updatePostUrl: string;    
    private deletePostUrl: string;
    constructor(private http: Http) {
        this.postsListUrl = APP_CONFIG.baseApiUrl + 'posts';
    }

    getPosts(): Observable<any> {
        return new Observable<any>((observer: any) => {
            this.http.get(this.postsListUrl).subscribe(data => {
                observer.next(data.json());
            }, error => {
                observer.error(error);
            });
        });
    }

    publishAPost(obj): Observable<any> {
        return new Observable<any>((observer: any) => {
            this.http.post(this.postsListUrl, obj).subscribe(data => {
                observer.next(data.json());
            }, error => {
                observer.error(error);
            });
        });
    }

    updatePost(idReferal, postItem) {
        this.updatePostUrl = this.postsListUrl + '/' + idReferal;
        return new Observable<any>((observer => {
            this.http.put(this.updatePostUrl, postItem).subscribe(data => {
                    observer.next(data.json());
                }, error => {
                    observer.error(error);
                });
        }));
    }

    deletePost(idReferal) {
        this.deletePostUrl = this.postsListUrl + '/' + idReferal;
        return new Observable<any>((observer => {
            this.http.delete(this.deletePostUrl).subscribe(data => {
                    observer.next(data.json());
                }, error => {
                    observer.error(error);
                });
        }));
    }

}
