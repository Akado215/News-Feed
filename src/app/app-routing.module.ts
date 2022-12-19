import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsPage } from './pages/news/news.page';

const routes: Routes = [
  {path: '', component: NewsPage },
  {path: 'article/:title', component: NewsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
