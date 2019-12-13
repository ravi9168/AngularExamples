
import { Component, OnInit } from '@angular/core';
import { Title} from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home-componemt',
  templateUrl: './home-componemt.component.html',
  styleUrls: ['./home-componemt.component.css']
})
export class HomeComponemtComponent implements OnInit {

  constructor(private title:Title,private meta:Meta) { }

  ngOnInit() {
    this.title.setTitle("Home");
    this.meta.updateTag({name:"description",content:"This is home page"})
  }

}
