import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { BottomBarComponent } from "./shared/components/bottom-bar/bottom-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent, NavBarComponent, FooterComponent, BottomBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('aadidess-web-frontend');
}
