import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { WorkoutBlockComponent } from './workout-block/workout-block';
import { IonicModule } from 'ionic-angular';
import { RatingStarsComponent } from './rating-stars/rating-stars';
import { TipsLinkComponent } from './navbar/tips-link';

@NgModule({
    declarations: [
        // WorkoutBlockComponent,
        RatingStarsComponent,
        TipsLinkComponent
    ],
    imports: [
        CommonModule,
        IonicModule.forRoot(TipsLinkComponent),
    ],
    exports: [
        // WorkoutBlockComponent,
        RatingStarsComponent,
        TipsLinkComponent
    ]
})
export class ComponentsModule {}
