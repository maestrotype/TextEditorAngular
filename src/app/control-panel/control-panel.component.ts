import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  newText: string;
  @Input() partText;
  @Input() text;
  @Output('updateText') onUpdateText = new EventEmitter<string>();
  changeItalic(changesText: any) {
    this.newText = this.text.replace(this.partText, '<i>' + this.partText + '</i>');
    changesText = this.newText;
    this.onUpdateText.emit(changesText);
  }
  changeUnderline(changesText: any) {
    this.newText = this.text.replace(this.partText, '<u>' + this.partText + '</u>');
    changesText = this.newText;
    this.onUpdateText.emit(changesText);
  }
  changeBold(changesText: any) {
    console.log('control-panel', this.partText);
    // if (!this.partText.outerHTML) {
      this.newText = this.text.replace(this.partText, '<b>' + this.partText + '</b>');
    // } else {
    //   console.log(2);
    //   this.newText = this.text.replace(this.partText, this.partText.outerHTML.replace(/(<([^>]+)>)/ig , ""));
    // }
    changesText = this.newText;
    this.onUpdateText.emit(changesText);
    console.log('newText cp', changesText);
  }
  constructor() {
  }

  ngOnInit() {

  }
}
