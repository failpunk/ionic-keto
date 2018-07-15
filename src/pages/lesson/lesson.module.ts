import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {LessonPage } from './lesson';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
   LessonPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LessonPage),
  ],
})
export class LessonPageModule {}
