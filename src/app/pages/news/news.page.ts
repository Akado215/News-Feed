import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IArticle } from '../../models/news';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-page',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss']
})
export class NewsPage implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<IArticle>; 
  title = 'News feed'

  loading = false

  articles: IArticle[];
  observable: Observable<any>

  totalPosts = 10;
  postPerPage = 2;
  pageSizeOption = [2, 5, 10];

  constructor(
    public newsService: NewsService,
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.newsService.getAllPosts().subscribe(data => {
      this.loading = false;
      this.articles = data.articles;
      this.dataSource = new MatTableDataSource<IArticle>(this.articles); 
      this.dataSource.paginator = this.paginator;
      this.observable = this.dataSource.connect();
    });
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
}
