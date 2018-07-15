import { Injectable } from '@angular/core';
import sample from 'lodash/sample';

@Injectable()
export class DatabaseProvider {
    getCategories() {
        return [
            {
                id: 1,
                name: 'Breakfast Foods',
                desc: 'Start the Morning Right With 23 Breakfast Receipes',
                img: 'ketoSausage.jpg'
            },
            {
                id: 2,
                name: 'Lunch',
                desc: 'Name recognition, Sit, Down',
                img: 'ketoPancake.jpg'
            },
            {
                id: 3,
                name: 'Dinner',
                desc: 'Come, Place, Stay, Leave It',
                img: 'jalapenoPopper.jpg'
            },
            {
                id: 4,
                name: 'Snacks',
                desc: 'Touch, Kiss, High Five, Spin',
                img: 'ketoSausage.jpg'
            },
            {
                id: 5,
                name: 'Desserts',
                desc: 'Roll Over, Handshake',
                img: 'ketoPancake.jpg'
            }
        ];
    }

    getCategory(id) {
        return this.getCategories().find(c => c.id === id);
    }

    getLessons() {
        return [
            {
                id: 1,
                category_id: 1,
                name: 'Keto Sausage Breakfast Sandwhich',
                servings: '3',
                prep_time_min: 5,
                total_time_min: 15,
                // desc: `If you just got your pup this guide will help him/her learn to use the restroom outside and not in your home. It does take some dedication at first, but know that after a few weeks it’ll get easier!`,
                // difficulty: 'medium',
                ingredients: [
                    '6 large eggs',
                    '2 tbsp. heavy cream',
                    'Pinch red pepper flakes',
                    'Kosher salt',
                    'Freshly ground black pepper',
                    '1 tbsp. butter',
                    '3 slices cheddar',
                    '6 frozen sausage patties, heated according to package instructions',
                    'Avocado, sliced'
                ],
                img: 'ketoSausage.jpg',
                directions: [
                    `In a small bowl beat eggs, heavy cream, and red pepper flakes together. Season generously with salt and pepper. In a nonstick skillet over medium heat, melt butter. Pour about ⅓ of the eggs into the skillet. Place a slice of cheese in the middle and let sit about 1 minute. Fold the sides of the egg into the middle, covering the cheese. Remove from pan and repeat with remaining eggs.`,
                    `Serve eggs between two sausage patties with avocado. `
                ]
            },
            {
                id: 2,
                category_id: 1,
                name: 'Keto Pancake',
                servings: '10',
                prep_time_min: 5,
                total_time_min: 15,
                // desc: `If you just got your pup this guide will help him/her learn to use the restroom outside and not in your home. It does take some dedication at first, but know that after a few weeks it’ll get easier!`,
                // difficulty: 'medium',
                ingredients: [
                    '1/2 c. almond flour',
                    '4 oz. cream cheese, softened',
                    '4 large eggs',
                    '1 tsp. lemon zest',
                    'Butter, for frying and serving'
                ],
                img: 'ketoPancake.jpg',
                directions: [
                    `In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.`,
                    `In a nonstick skillet over medium heat, melt 1 tablespoon butter. Pour in about 3 tablespoons batter and cook until golden, 2 minutes. Flip and cook 2 minutes more. Transfer to a plate and continue with the rest of the batter.`,
                    `Serve topped with butter.`
                ]
            },
            {
                id: 3,
                category_id: 1,
                name: 'Jalapeño Popper Egg Cups',
                servings: '4 - 6',
                prep_time_min: 15,
                total_time_min: 35,
                // desc: `If you just got your pup this guide will help him/her learn to use the restroom outside and not in your home. It does take some dedication at first, but know that after a few weeks it’ll get easier!`,
                // difficulty: 'medium',
                ingredients: [
                    '12 slices bacon',
                    '10 large eggs',
                    '1/4 c. sour cream',
                    '1/2 c. shredded Cheddar',
                    '1/2 c. shredded mozzarella',
                    '2 jalapeños, 1 minced and 1 thinly sliced',
                    '1 tsp. garlic powder',
                    'kosher salt',
                    'Freshly ground black pepper',
                    'nonstick cooking spray'
                ],
                img: 'jalapenoPopper.jpg',
                directions: [
                    `Preheat oven to 375°.`,
                    `In a large skillet over medium heat, cook bacon until slightly browned but still pliable. Set aside on a paper towel-lined plate to drain.`,
                    `In a large bowl, whisk together eggs, sour cream, cheeses, minced jalapeño and garlic powder. Season with salt and pepper.`,
                    `Using nonstick cooking spray, grease a muffin tin. Line each well with one slice of bacon, then pour egg mixture into each muffin cup until about two-thirds of the way to the top. Top each muffin with a jalapeño slice.`,
                    `Bake for 20 minutes, or until the eggs no longer look wet. Cool slightly before removing from the muffin tin. Serve.`
                ]
            }
        ];
    }

    getLesson(id) {
        return this.getLessons().find(l => l.id === id);
    }

    getLessonsForCategory(id) {
        return this.getLessons().filter(l => l.category_id === id);
    }

    getTips() {
        return [
            {
                id: 1,
                name: `Never Scold`,
                text: `Don’t scold your dog, as he/she will learn to fear you, and probably won’t understand that he/she is doing a command wrong. If your pup is doing a behavior wrong, reset by pulling the treat away or moving your attention away.`
            },
            {
                id: 2,
                name: `Positive Reinforcement`,
                text: `Never scold your dog if he/she gets something wrong. Always give positive reinforcement via a “Good Boy/Girl!” and a treat at event the smallest attempted at the behavior you’re going for.`
            },
            {
                id: 3,
                name: `Treat Timing`,
                text: `Be sure to to time giving treats when training correctly. You should only give treats right after your pup completes the desired behavior or is just completing it. Use a clicker or a verbal praise if you need an extra second to grab the treat.`
            },
            {
                id: 4,
                name: `Naming A Behavior`,
                text: `Only add a verbal cue to the behavior after your pup has performed the desired behavior consistently. This way you won’t repeat the commands too much diluting its effect. `
            },
            {
                id: 5,
                name: `Don’t Repeat Commands`,
                text: `Don’t continually repeat a verbal command if it isn’t being performed. This will reduce how effective your verbal cue is. If you’re having trouble, use a treat in your hand to lure your pup instead.`
            },
            {
                id: 6,
                name: `9 out of 10 Rule`,
                text: `Don’t try to teach your dog too many behaviors/tricks at a time. Your pup should be able to do a command on a verbal cue 9 out of 10 times before you try teaching another behavior. You should also make sure your pup can do the desired behavior with distractions around so you know he/she has truly mastered the behavior.`
            },
            {
                id: 7,
                name: `Hand Signals`,
                text: `Hand signals are a great way to have your dog associate commands. Similar to how you’d lure or teach your dog with a treat in hand, do the same movement with your hand but without the treat. For example, to teach spin you’d spin your hand with a treat in hand. Once it’s mastered, do the hand signal without the treat in hand.`
            },
            {
                id: 8,
                name: `Consistency`,
                text: `Be consistent with giving treats and with verbal cues. If you taught your dog down with the verbal cue “down” don’t switch it to lay or any other verbal cue in the middle of training or any time after.`
            }
        ];
    }

    getTip(id) {}

    get randomText() {
        let data = [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            `cupidatat non proident, sunt in culpa qui`,
            `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque `
        ];

        return sample(data);
    }

    getReviews() {
        return [
            {
                id: 1,
                date: 'Feb 5, 2018',
                rating: '5.0',
                title: 'Puppy Training Made Easy',
                body: `I was so afraid when I first got my puppy. He would wine all night and was pottying all over the house. The Paws app made is so easy and simple to train my dad Baily. Love these wonderful people! 🤗`,
                reviewer: 'Amanda Z.',
                plan: 'Paws Trainer Elite'
            },
            {
                id: 2,
                date: 'Feb 7, 2018',
                rating: '5.0',
                title: 'Calm, Happy Dog',
                body: `My dog is always jumping all over me and everyone else. Paws taught me the basics on how to get Thunder to calm down. Just the down and place command alone are life savers! ❤️❤️`,
                reviewer: 'Tiffany F.',
                plan: 'Paws Trainer Elite'
            },
            {
                id: 3,
                date: 'Feb 7, 2018',
                rating: '5.0',
                title: 'SO CUTE!',
                body: `From Paws, my pup learned how to shake and rollover. INSTANT crowd pleaser and so cute around my friends and family! Thanks Paws! ❤️`,
                reviewer: 'Lauren F.',
                plan: 'Paws Trainer Elite'
            }
        ];
    }

    getFaqData() {
        return [
            {
                question: `Can I cancel at anytime?`,
                answer: `You can absolutely cancel your account any time. If you’re in the trial period and you cancel you won’t be charged for your
                subscription. If you’re not in the trial period and you cancel your subscription you’ll have access to
                your paid account until the end of your subscription.`
            }
        ];
    }
}
