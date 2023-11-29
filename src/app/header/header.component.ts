import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  searchTerm: string = '';
  constructor() {}

  @Input('drawer') drawer: any;

  ngOnInit(): void {}

  toggle() {
    this.drawer.toggle();
    this.showFiller = !this.showFiller;

    if (this.showFiller) {
      (document.getElementById('toggle-btn')! as any).style =
        'margin-left:170px';
    } else
      (document.getElementById('toggle-btn')! as any).style = 'margin-left:0px';
  }

  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    this.searchEvent.emit(this.searchTerm);
  }
}
