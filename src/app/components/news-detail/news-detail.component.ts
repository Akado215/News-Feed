import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService} from '../../services/news/news.service'

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit{
  article: any;

  constructor(
    private newsService: NewsService, 
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.newsService.getAllPosts().subscribe((data) => {
      this.article = data.articles.find(pub => pub.title === this.route.snapshot.params['title'])
    });
  }
}
