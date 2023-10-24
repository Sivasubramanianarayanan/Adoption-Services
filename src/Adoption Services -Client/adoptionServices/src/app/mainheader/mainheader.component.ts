import { Component } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['../own.css']
})
export class MainheaderComponent {
  icon=faPlusSquare;
}
