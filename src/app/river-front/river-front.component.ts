import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-river-front',
  templateUrl: './river-front.component.html',
  styleUrls: ['./river-front.component.css']
})
export class RiverFrontComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  file:any;
  fileChanged(e) {
    this.file = e.target.files[0];

    console.log('chuj wie 1')
    this.uploadDocument(this.file);
  }
  
  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log('chuj wie 3')
      console.log(fileReader.result);
      this.fileContent = (fileReader.result as string).split('\n');
      this.fileContent = this.fileContent.map((line) => {
        return line.split(', ');
      })
      this.fileContent.splice(-1, 1);
      console.log(this.fileContent)
    }
    fileReader.readAsText(this.file);
    console.log('chuj wie 2')
    let altResponse = this.http.post<any>('https://jajaborysa.route.com/posts', { title: 'Angular POST Request Example', data: this.fileContent }).subscribe(data => {
      this.responseContent = data;
    })

    console.log(altResponse);
  }

  fileContent: any[] = [];
  responseContent: any;
}
