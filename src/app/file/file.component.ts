import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit, DoCheck {
  text = '';
  partText: any;
  // @Input() changesText;
  @Input() changesText;
  @Output() onChangesCut = new EventEmitter<string>();
  @Output() onText = new EventEmitter<string>();

  cutText(partText: string, text: string) {
    this.partText = window.getSelection();
    console.log('inner', this.partText.baseNode.sourceSpan);
    partText = this.partText;
    text = this.text;
    this.onChangesCut.emit(partText);
    this.onText.emit(text);
    console.log('file', this.partText);
  }

  constructor(private textService: TextService) {
  }

  ngOnInit() {
    this.textService.getMockText().then((result) => this.text = result);
  }

  ngDoCheck() {
    console.log('doCheck', this.changesText);
    if (this.changesText) {
      this.text = this.changesText;
    }
  }

}
