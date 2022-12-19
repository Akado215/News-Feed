import { Component, Input } from '@angular/core';
import { IArticle } from '../../models/news';
import { NewsService} from '../../services/news/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  @Input() article: IArticle
}
