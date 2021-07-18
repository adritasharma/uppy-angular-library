import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UppyAngularModule } from 'projects/uppy-angular/src/lib/uppy-angular.module';
//import { UppyAngularModule } from 'uppy-angular';
import { TestComponent } from './test/test.component';
import { HumanCasePipe } from './pipes/human-case.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [	
    AppComponent,
    TestComponent,
    HumanCasePipe,
      DemoComponent
   ],
  imports: [
    BrowserModule,
    UppyAngularModule,
    FormsModule,
    NgSelectModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
