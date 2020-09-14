import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BrandPage } from '../brand/brand';
import { ProductPage } from '../product/product';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = BrandPage;
  tab4Root = ContactPage;
  tab5Root = ProductPage;

  constructor() {

  }
}
