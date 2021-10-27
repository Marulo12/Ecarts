import { Injectable } from '@angular/core';
import { interval, Observable, Subject, timer } from 'rxjs';


@Injectable({providedIn: 'root'})
export class NewsService {
    
    newsModal$: Observable<any>;
    newsModalSubject: Subject<any>;
    constructor() {
        this.newsModal$ = new Observable();
        this.newsModalSubject = new Subject();
     }

     loadNewsModal(){
         this.newsModal$ = interval(1800000);
        this.newsModal$.subscribe(this.newsModalSubject);        
     }
    
}