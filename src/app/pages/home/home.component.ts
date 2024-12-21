import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { TrendingProductsComponent } from '../../components/trending-products/trending-products.component';
import { NewProductsComponent } from '../../components/new-products/new-products.component';
import { CategoriesComponent } from '../../components/categories/categories.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    TrendingProductsComponent,
    NewProductsComponent,
    CategoriesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
