import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title} from '@angular/platform-browser';
const apiUrl = 'http://127.0.0.1:9999/contacts';

@Component({
  selector: 'app-contact', 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  contacts: any;
  constructor(private http: HttpClient,private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Contact");
    this.http.get<any>(apiUrl).subscribe(data =>{
      console.log(data);
      this.contacts=data;
    });
    
  }

}
