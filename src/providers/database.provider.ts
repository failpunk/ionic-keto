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
                img: 'advanced-basics.jpg'
            },
            {
                id: 2,
                name: 'Lunch',
                desc: 'Name recognition, Sit, Down',
                img: 'advanced-tricks.jpg'
            },
            {
                id: 3,
                name: 'Dinner',
                desc: 'Come, Place, Stay, Leave It',
                img: 'basics.jpg'
            },
            {
                id: 4,
                name: 'Snacks',
                desc: 'Touch, Kiss, High Five, Spin',
                img: 'fun-tricks.jpg'
            },
            {
                id: 5,
                name: 'Desserts',
                desc: 'Roll Over, Handshake',
                img: 'house-training.jpg'
            }
        ];
    }

    getCategory(id) {
        return this.getCategories().find(c => c.id === id);
    }

    getMeals() {
        return [
            {
                id: 1,
                category_id: 1,
                name: 'Keto Sausage Breakfast Sandwhich',
                desc: `Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.`,
                stars: 5,
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
                desc: `Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.`,
                stars: 4,
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
                desc: `Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.`,
                stars: 5,
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

    getMeal(id) {
        return this.getMeals().find(l => l.id === id);
    }

    getMealsForCategory(id) {
        return this.getMeals().filter(l => l.category_id === id);
    }

    getTips() {
        return [
            {
                id: 0,
                icon: 'warning',
                title: 'Before You Begin',
                sections: [
                    {
                        desc: `If you are unsure about any health issues, we strongly recommend you get a checkup and see your doctor before starting Keto or any other diet.`
                    },
                    {
                        desc: '<span class="highlight">This is especially important if you have any known HEALTH ISSUES such as:</span>',
                    },
                    {
                        desc: `Diabetes<br> Thyroid Issues<br> Autoimmune Conditions<br> Gut / Stomach Issues<br> Vitamin or Mineral Deficiencies`,
                    },
                    {
                        heading: 'or if you are PREGNANT or NURSING'
                    }
                ]
            },
            {
                id: 1,
                icon: 'geometric',
                title: 'Keto Overview',
                sections: [
                    {
                        title: 'The Keto Diet',
                        desc: `The Keto Diet is a form of a low-carb diet. People who follow this diet usually do it longer-term.  The main benefits include weight loss & lowered blood sugar.`
                    },
                    {
                        title: 'Keto Diet Goals',
                        desc: `The goal of the keto diet is to reach ketosis. A state of metabolism where you body's preferential fuel source is shifted form carbs to fat.`
                    }
                ]
            },
            {
                id: 2,
                icon: 'geometric',
                title: 'Keto Overview',
                sections: [
                    {
                        desc: `On keto, you focus on eating foods with:<br><br> Very few carbs<br> moderate amounts of protein<br> a fair amount of fats`
                    },
                    {
                        title: 'Macros',
                        desc: `Recommended daily intake in % of total calories:<br><br> <span class="highlight">Carbs: 5-10%</span><br> <span class="highlight">Protein: 20-25%</span><br> <span class="highlight">Fats: 70-75%</span>`
                    }
                ]
            },
            {
                id: 3,
                icon: 'bread',
                title: 'Carbohydrate Intake',
                sections: [
                    {
                        desc: `Your carb intake on the keto diet should be<br> <em class="highlight">5-10% of your total calories.</em>`
                    },
                    {
                        desc: `On the standard ketogenic diet (SKD), this means that you should reduce your carb intake to<br><br> <em class="highlight">20-30 grams of net carbs per day..</em><br><br> Staying below 30 grams of net carbs per day is usually key to getting into ketosis (depending on individual needs).`
                    }
                ]
            },
            {
                id: 4,
                icon: 'bread',
                title: 'Total vs Net Carbs',
                sections: [
                    {
                        desc: `Practicing Keto, you'll often ask the question:<br> Should I focus on <span class="highlight">carbs</span> or <span class="highlight">net carbs</span>.`
                    },
                    {
                        title: 'What are Net Carbs?',
                        desc: `Net carbs are what is left when you subtract grams of fiber from the total amount of carbohydrates per serving. Put simply as:<br><br> <span class="highlight">net carbs</span> = grams of total carbs - fiber`
                    }
                ]
            },
            {
                id: 5,
                icon: 'meat',
                title: 'Protein Intake',
                sections: [
                    {
                        desc: `Your protein intake on the keto diet should be <br> <span class="highlight">20-25% of total calories.</span>`
                    },
                    {
                        desc: `Protein is a macronutrient that is both filling and essential for the human body. If you have too much your body may turn it into sugar. Therefore it is essential to moderate the amount of protein when on Keto.`
                    },
                    {
                        heading: 'Too Much Protein',
                        desc: `Can kick you out of ketosis`
                    },
                    {
                        heading: 'Too Little Protein',
                        desc: `May cause muscle loss and increased hunger`
                    }
                ]
            },
            {
                id: 6,
                icon: 'doughnut',
                title: 'Fat Intake',
                sections: [
                    {
                        desc: `Your fat intake on the keto diet should be<br><span class="highlight">70-75% of total calories.</span>`
                    },
                    {
                        desc: `Fat is extremely important durin ketosis as you want your body to switch its primary source of energy <span class="highlight">from carbs to fat.</span>`
                    },
                    {
                        heading: 'Basic Tip:',
                        desc: `You need to eat fat to burn fat!`
                    },
                    {
                        desc: `Most importantly, to get started, avoid foods that contain trans fats (mostly processed foods)`
                    }
                ]
            },
            {
                id: 7,
                icon: 'plate',
                title: 'Example Diet: Day 1',
                sections: [
                    {
                        desc: `<small>A day of the keto diet.<br> Totals may vary depending on individual needs.</small>`
                    },
                    {
                        heading: 'Breakfast',
                        desc: `4 creamy scrambled eggs with bacon & flaxseeds`
                    },
                    {
                        heading: 'Lunch',
                        desc: `Avocado, bacon & spinach salad`
                    },
                    {
                        heading: 'Dinner',
                        desc: `Pan-fried pork-chops with asparagus`
                    },
                    {
                        desc: `<span class="highlight">13g Carbs | 75g Protein | 144g Total Fat</span>`
                    }
                ]
            },
            {
                id: 8,
                icon: 'plate',
                title: 'Example Diet: Day 2',
                sections: [
                    {
                        desc: `<small>A day of the keto diet.<br> Totals may vary depending on individual needs.</small>`
                    },
                    {
                        heading: 'Breakfast',
                        desc: `Coconut raspberry chia pudding`
                    },
                    {
                        heading: 'Lunch',
                        desc: `Creamy zucchini soup with bacon strips`
                    },
                    {
                        heading: 'Dinner',
                        desc: `Chorizo & blue cheese omelette`
                    },
                    {
                        desc: `<span class="highlight">18g Carbs | 78g Protein | 148g Total Fat</span>`
                    }
                ]
            },
            {
                id: 9,
                icon: 'scale',
                title: 'Bonus Tips',
                sections: [
                    {
                        title: 'Motivation',
                        desc: `Keto can be really tough in the beginning as your body adapts to burn fat instead of glucose:`
                    },
                    {
                        desc: `To stay motivated, it helps to formulate a clear goal and/or find a diet buddy!`
                    },
                    {
                        title: 'Healthy Lifestyle',
                        desc: `Food is important, but it isn't everything: Make sure to get enough sleep, exercise & manage your stress levels.`
                    }
                ]
            }
        ];
    }

    getTip(id) {
        return this.getTips().find(t => t.id === id);
    }

    get randomText() {
        let data = [
            `Pirate blow the man down hulk no prey, no pay pinnace jury mast carouser man-of-war lateen sail lookout.`,
            `Spanish Main Pirate Round barkadeer shrouds log. Sea Legs`,
            `Scourge of the seven seas bilge water heave down hornswaggle mutiny warp Spanish Main ahoy avast list. American Main bilged on her anchor.`,
            `Bring a spring upon her cable Shiver me timbers come about rope's end fire ship loot chase poop deck sheet carouser.`
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
