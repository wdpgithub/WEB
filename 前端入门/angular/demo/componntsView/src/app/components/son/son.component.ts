import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  @Input() msg: string;
  @Input() run: any;
  constructor() { }

  ngOnInit() {
    this.msg="我现在是儿子改改的了";
  }

}
