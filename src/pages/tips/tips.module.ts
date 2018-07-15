import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipsPage } from './tips';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [TipsPage],
    imports: [ComponentsModule, IonicPageModule.forChild(TipsPage)]
})
export class TipsPageModule {}