import { Component } from '@angular/core';
import { HttpComServiceService} from './http-com-service/http-com-service.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpComServiceService]
})
export class AppComponent {
  title = 'app works!';
}
