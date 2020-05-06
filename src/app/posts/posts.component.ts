import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { Results } from '../Interfaces/result'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  results:Results;

  constructor(private redditService:RedditService) { }

  ngOnInit(): void {
    this.redditService.getResults().subscribe(
      (data: Results) => this.results = { ...data },
      error => console.error(error)
    );
  }
}
