import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Chapter } from '../models/chapter';

@Injectable()
export class ChapterListService {
    private url:string;
    constructor(private http: Http) {
        this.url="http://localhost:3000/api";
     }
    getChapters():Observable<Chapter[]>{
        return this.http.get(this.url+"/chapter").map((res)=>res.json())
        .catch((err)=>Observable.throw(err));
    }
}