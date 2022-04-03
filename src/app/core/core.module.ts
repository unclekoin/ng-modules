import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedService } from '@core/services/feed.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [FeedService],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {
}
