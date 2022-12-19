import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    component.article = {
      "title": "Post title",
      "description": "Post short description",
      "content": "Post full content",
      'publishedAt': new Date(19-12-2022)
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component displays title, description and date via input", () => {
    component.article = {
      title: "Some post title",
      description: "Some post short description",
      content: "Some post full content",
      publishedAt: new Date(19-12-2022)
    };
    expect(component.article.title).toBe("Some post title");
    expect(component.article.description).toBe("Some post short description");
    expect(component.article.publishedAt).toEqual(new Date(19-12-2022));
  })
});
