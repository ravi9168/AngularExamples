import { Component, OnInit } from '@angular/core';
import { Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-componemt',
  templateUrl: './about-componemt.component.html',
  styleUrls: ['./about-componemt.component.css']
})
export class AboutComponemtComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() {
    this.title.setTitle("About")
  }

}
