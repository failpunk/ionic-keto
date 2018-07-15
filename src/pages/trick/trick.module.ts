import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrickPage } from './trick';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [TrickPage],
    imports: [ComponentsModule, IonicPageModule.forChild(TrickPage)]
})
export class TrickPageModule {}
