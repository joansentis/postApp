import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routes/app.routing';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

import { AppComponent } from './app.component';
import { postBoxComponent } from './components/postBox/postBox.component';
import { postCardComponent } from './components/postCard/postCard.component';
import { postsListComponent } from './pages/postsList/postsList.component';

import { AppService } from './services/app.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [
    AppComponent,
    postsListComponent,
    postBoxComponent,
    postCardComponent
  ],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule { }
