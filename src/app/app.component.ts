import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Text Editor';
  partText: string;
  text: string;
  newText: string;

  onChangesCut(partText: string){
    this.partText = partText;
  }
  onText(text: string) {
    this.text = text;
    console.log('onTex', this.text);
  }
  updateTextHandle(changesText: string) {
    this.newText = changesText;
    console.log('app', this.newText);
  }
}
