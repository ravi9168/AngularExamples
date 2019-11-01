import { Component, OnInit } from '@angular/core';
import { VideoDetail } from '../youtube/video-details.model';

@Component({
  selector: 'app-youtube-component',
  templateUrl: './youtube-component.component.html',
  styleUrls: ['./youtube-component.component.css']
})
export class YoutubeComponentComponent implements OnInit {
  results: VideoDetail[];
  loading: boolean;
  message = '';
 
  constructor() { }

  ngOnInit() {
  }
 
  updateResults(results: VideoDetail[]): void {
    this.results = results;
    if (this.results.length === 0) {
      this.message = 'Not found...';
    } else {
      this.message = 'Top 10 results:';
    }
  }

}
