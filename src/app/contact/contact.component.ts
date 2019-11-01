import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://127.0.0.1:9999/contacts';

@Component({
  selector: 'app-contact', 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  contacts: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(apiUrl).subscribe(data =>{
      console.log(data);
      this.contacts=data;
    });
    
  }

}
