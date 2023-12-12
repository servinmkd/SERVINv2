import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  searchTerm: string = '';
  constructor(private router: Router) {}

  @Input('drawer') drawer: any;

  ngOnInit(): void {}

  toggle() {
    this.drawer.toggle();
    this.showFiller = !this.showFiller;

    if (this.showFiller) {
      (document.getElementById('toggle-btn')! as any).style =
        'margin-left:200px';
    } else
      (document.getElementById('toggle-btn')! as any).style = 'margin-left:0px';
  }

  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    this.searchEvent.emit(this.searchTerm);
  }

  gotoHome() {
    this.router.navigate(['']);
  }
}
