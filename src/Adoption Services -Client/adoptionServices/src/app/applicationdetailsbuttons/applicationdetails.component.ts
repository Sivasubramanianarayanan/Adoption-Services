import { Component } from '@angular/core';
import { faBackward } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-applicationdetails',
  templateUrl: './applicationdetails.component.html',
  styleUrls: ['../own.css']
})
export class ApplicationdetailsComponent {
  isbuttonclick: boolean = true;
  icon = faBackward;
}
