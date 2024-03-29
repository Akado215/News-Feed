import { Component, Input } from '@angular/core';
import { IArticle } from '../../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  @Input() article: IArticle
}
