import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spring Boot with Angular 8';
  notifications=0;
  showSpinner=false;
  opened=false;

  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },5000);
  }

  // results: VideoDetail[];
  // loading: boolean;
  // message = '';
 
  // updateResults(results: VideoDetail[]): void {
  //   this.results = results;
  //   if (this.results.length === 0) {
  //     this.message = 'Not found...';
  //   } else {
  //     this.message = 'Top 10 results:';
  //   }
  // }
}
