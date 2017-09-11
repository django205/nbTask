import { Component, OnInit } from '@angular/core';
import { Chapter } from '../models/chapter';
import { ChapterListService } from '../services/services';

@Component({
  selector: 'app-chapterlist',
  templateUrl: './chapterlist.component.html',
  styleUrls: ['./chapterlist.component.css']
})
export class ChapterlistComponent implements OnInit {
chapters:Chapter[];
  constructor(private chapterListService:ChapterListService) { }

  ngOnInit() {
    this.chapterListService.getChapters().subscribe((res)=>this.chapters=res);

    console.log(this.chapters);
  }

}
