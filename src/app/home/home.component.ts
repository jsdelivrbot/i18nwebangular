import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http/src/headers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  viewProviders:[HttpClient]
})
export class HomeComponent implements OnInit {
  private results: string[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://localhost:8080/myemployee"; // site that doesn’t send Access-Control-*
    fetch(url)
    .then(response => response.text())
    .then(contents => console.log( contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

   
    console.log(this.results);
  }
 
  
}
