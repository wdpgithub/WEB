import { Component,ViewChild } from '@angular/core';
import { Platform , MenuController, Nav,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider} from '../providers/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage} from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = TabsPage;
  selectedTheme: string;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, 
    public menu: MenuController,
    private settings: SettingsProvider,
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
      this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: '关于我们', component: AboutPage },
      { title: '联系我们', component: ContactPage },
      { title: 'bak', component: TabsPage }
    ];
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
  

}
