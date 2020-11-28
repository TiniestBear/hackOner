import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
      console.log(fileReader.result);
      this.fileContent = (fileReader.result as string).split('\n');
      this.fileContent = this.fileContent.map((line) => {
        return line.split(', ');
      })
      this.fileContent.splice(-1, 1);
      console.log(this.fileContent);

      let bodyObj = {'gupiDebil': this.fileContent};
      console.log(bodyObj);

      this.http.post<any>('http://localhost:3000/river', bodyObj, {'headers': headers} ).subscribe(data => {
        this.responseContent = data.msg.gupiDebil;  
      })
    }
    fileReader.readAsText(this.file);
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
  }

  fileContent: any[] = [];
  responseContent: any;
}
