import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../Interfaces/result'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() redditPost:Result;

  constructor() { }

  ngOnInit(): void {

  }

}
