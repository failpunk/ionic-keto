import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealPage } from './meal';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [MealPage],
    imports: [ComponentsModule, IonicPageModule.forChild(MealPage)]
})
export class MealPageModule {}
