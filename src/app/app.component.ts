import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ANGquest7';
  onomatopiaList: string[] = [];

  onReceiveOnomatopia(onomatopia: string): void {
    this.onomatopiaList.push(onomatopia);
  }
}
