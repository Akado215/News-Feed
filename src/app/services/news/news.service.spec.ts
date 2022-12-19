import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { NewsService } from './news.service';
import { INews } from 'src/app/models/news';

describe('NewsService', () => {
  let service: NewsService;
  let httpTestingController: HttpTestingController;
  const API_KEY = '04e1bff7f8d02d465f46f59e2b1f7a42';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [NewsService]
    });
    service = TestBed.inject(NewsService);
    httpTestingController = TestBed.inject(
      HttpTestingController
    )
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', () => {
    const data: INews = {
      "totalArticles": 54904,
      "articles": [
        {
          "title": "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
          "description": "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
          "content": "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
          'publishedAt': new Date,
        }
      ]
    };

    service
      .getAllPosts()
      .subscribe((response) => expect(response).toBe(data))
    const req = httpTestingController.expectOne(`https://gnews.io/api/v4/top-headlines?topic=breaking-new&token=${API_KEY}&lang=en`)
    expect(req.request.method).toBe('GET')
    req.flush(data)
  });

  afterEach(() => httpTestingController.verify())
});
