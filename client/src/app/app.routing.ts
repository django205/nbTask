import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterlistComponent } from './chapterlist/chapterlist.component';

const routes: Routes = [
  { path: '', component: ChapterlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [ChapterlistComponent];