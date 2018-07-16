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
                img: 'breakfast-min.jpg'
            },
            {
                id: 2,
                name: 'Snacks',
                desc: 'Never Be Hungry With These Keto Snacks',
                img: 'snacks-min.jpg'
            },
            {
                id: 3,
                name: 'Entres',
                desc: 'Mouthwatering Keto Lunch and Dinners',
                img: 'entres-min.jpg'
            },
            {
                id: 4,
                name: 'Desserts and Fat Bombs',
                desc: 'Because Life Does Need Some Keto Sweetness',
                img: 'desserts-min.jpg'
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
                category_id: [1],
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
                img: 'ketoSausage-min.jpg',
                directions: [
                    `In a small bowl beat eggs, heavy cream, and red pepper flakes together. Season generously with salt and pepper. In a nonstick skillet over medium heat, melt butter. Pour about ⅓ of the eggs into the skillet. Place a slice of cheese in the middle and let sit about 1 minute. Fold the sides of the egg into the middle, covering the cheese. Remove from pan and repeat with remaining eggs.`,
                    `Serve eggs between two sausage patties with avocado. `
                ]
            },
            {
                id: 2,
                category_id: [1],
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
                img: 'ketoPancake-min.jpg',
                directions: [
                    `In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.`,
                    `In a nonstick skillet over medium heat, melt 1 tablespoon butter. Pour in about 3 tablespoons batter and cook until golden, 2 minutes. Flip and cook 2 minutes more. Transfer to a plate and continue with the rest of the batter.`,
                    `Serve topped with butter.`
                ]
            },
            {
                id: 3,
                category_id: [1,2],
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
                img: 'jalapenoPopper-min.jpg',
                directions: [
                    `Preheat oven to 375°.`,
                    `In a large skillet over medium heat, cook bacon until slightly browned but still pliable. Set aside on a paper towel-lined plate to drain.`,
                    `In a large bowl, whisk together eggs, sour cream, cheeses, minced jalapeño and garlic powder. Season with salt and pepper.`,
                    `Using nonstick cooking spray, grease a muffin tin. Line each well with one slice of bacon, then pour egg mixture into each muffin cup until about two-thirds of the way to the top. Top each muffin with a jalapeño slice.`,
                    `Bake for 20 minutes, or until the eggs no longer look wet. Cool slightly before removing from the muffin tin. Serve.`
                ]
            },
            {
                id: 0,
                category_id: [1],
                name: 'Zucchini Egg Cups',
                desc: `12`,
                stars: 5,
                servings: '',
                prep_time_min: 10,
                total_time_min: 40,
                ingredients: [
                    'Cooking spray, for pan',
                    '2 zucchini, peeled into strips',
                    '1/4 lb. ham, chopped',
                    '1/2 c. cherry tomatoes, quartered',
                    '8 eggs',
                    '1/2 c. heavy cream',
                    'Kosher salt',
                    'Freshly ground black pepper',
                    '1/2 tsp. dried oregano',
                    '1 c. Pinch red pepper flakes',
                    '1 c. shredded cheddar'
                ],
                img: 'zucchiniEgg-min.jpg',
                directions: [
                    `Preheat oven to 400° and grease a muffin tin with cooking spray. Line the inside and bottom of the muffin tin with zucchini strips, to form a crust. Sprinkle ham and cherry tomatoes inside each crust. `,
                    `In a medium bowl whisk together eggs, heavy, cream, oregano, and red pepper flakes then season with salt and pepper. Pour egg mixture over ham and tomatoes then top with cheese.`,
                    `Bake until eggs are set, 30 minutes.`
                ]
            },
            {
                id: 4,
                category_id: [1],
                name: 'Brussels Sprouts Hash',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 10,
                total_time_min: 40,
                ingredients: [
                    '6 slices bacon, cut into 1" pieces',
                    '1/2 onion, chopped',
                    '1 lb. brussels sprouts, trimmed and quartered',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '1/4 tsp. red pepper flakes',
                    '3 tbsp. water',
                    '2 garlic cloves, minced',
                    '4 large eggs'
                ],
                img: 'brusselHash-min.jpg',
                directions: [
                    `In a large skillet over medium heat, fry bacon until crispy. Turn off heat and transfer bacon to a paper towel-lined plate. Keep most of bacon fat in skillet, removing any black pieces from the bacon.`,
                    `Turn heat back to medium and add onion and brussels sprouts to the skillet. Cook, stirring occasionally, until the vegetables begin to soften and turn golden. Season with salt, pepper, and red pepper flakes.`,
                    `Add 2 tablespoons of water and cover the skillet. Cook until the Brussels sprouts are tender and the water has evaporated, about 5 minutes. (If all the water evaporates before the Brussels sprouts are tender, add more water to the skillet and cover for a couple minutes more.) Add garlic to skillet and cook until fragrant, 1 minute.`,
                    `Using a wooden spoon, make four holes in the hash to reveal bottom of skillet. Crack an egg into each hole and season each egg with salt and pepper. Replace lid and cook until eggs are cooked to your liking, about 5 minutes for a just runny egg. Sprinkle cooked bacon bits over the entire skillet. Serve warm.`
                ]
            },
            {
                id: 5,
                category_id: [1, 2, 3],
                name: 'Bacon Avocado Bombs',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 10,
                total_time_min: 20,
                ingredients: ['2 avocados', '1/3 c. shredded Cheddar', '8 slices bacon'],
                img: 'baconAvocado-min.jpg',
                directions: [
                    `Heat broiler and line a small baking sheet with foil.`,
                    `Slice each avocado in half and remove the pits. Peel the skin off of each avocado.`,
                    `Fill two of the halves with cheese, then replace with the other avocado halves. Wrap each avocado with 4 slices of bacon.`,
                    `Place bacon-wrapped avocados on the prepared baking sheet and broil until the bacon is crispy on top, about 5 minutes. Very carefully, flip the avocado using tongs and continue to cook until crispy all over, about 5 minutes per side.`,
                    `Cut in half crosswise and serve immediately.`
                ]
            },
            {
                id: 6,
                category_id: [1, 2],
                name: 'Ham & Cheese Egg Cups',
                desc: ``,
                stars: 5,
                servings: '12',
                prep_time_min: 5,
                total_time_min: 25,
                ingredients: [
                    'Cooking spray, for pan',
                    '12 slices ham',
                    '1 c. shredded Cheddar',
                    '12 large eggs',
                    'kosher salt',
                    'Freshly ground black pepper',
                    'Chopped fresh parsley, for garnish'
                ],
                img: 'hamCheeseEgg-min.jpg',
                directions: [
                    `Preheat oven to 400º and spray a 12-cup muffin tin with cooking spray.`,
                    `Line each cup with a slice of ham and sprinkle with cheddar. Crack an egg in each ham cup and season with salt and pepper.`,
                    `Bake until eggs are cooked through, 12 to 15 minutes (depending on how runny you like your yolks).`,
                    `Garnish with parsley and serve.`
                ]
            },
            {
                id: 7,
                category_id: [1],
                name: 'Perfect Hard Boiled Eggs',
                desc: ``,
                stars: 5,
                servings: '12',
                prep_time_min: 5,
                total_time_min: 20,
                ingredients: ['12 large eggs', 'water'],
                img: 'perfectHardBoiled-min.jpg',
                directions: [
                    `Place eggs in a large pot and cover by an inch of cold water. Place pot on stove and bring to a boil. Instantly turn off heat and cover pot. Let sit for 11 minutes.`,
                    `Remove from pan and dunk into ice water. Peel and serve.`
                ]
            },
            {
                id: 8,
                category_id: [1],
                name: 'Paleo Breakfast Stacks',
                desc: ``,
                stars: 5,
                servings: '3',
                prep_time_min: 20,
                total_time_min: 20,
                ingredients: [
                    '3 breakfast sausage patties',
                    '1 avocado, mashed',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '3 large eggs',
                    'chives, for garnish',
                    'Hot sauce, if desired'
                ],
                img: 'paleoBreakfastStacks-min.jpg',
                directions: [
                    `Heat breakfast sausage according to instructions on box.`,
                    `Mash avocado onto breakfast sausage and season with salt and pepper.`,
                    `Spray a medium skillet over medium heat with cooking spray, then spray the inside of a mason jar lid. Place mason jar lid in the center of skillet and crack an egg inside. Season with salt and pepper and let cook 3 minutes until whites are set, then remove lid and continue cooking.`,
                    `Place egg on top of mashed avocado. Garnish with chives, drizzle with your favorite hot sauce and serve.`
                ]
            },
            {
                id: 9,
                category_id: [1],
                name: 'Ham & Cheese Breakfast Roll-Ups',
                desc: ``,
                stars: 5,
                servings: '2',
                prep_time_min: 20,
                total_time_min: 20,
                ingredients: [
                    '4 large eggs',
                    '1/4 c. milk',
                    '2 tbsp. Chopped chives',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '1 tbsp. butter',
                    '1 c. shredded cheddar, divided',
                    '4 slices ham'
                ],
                img: 'hamCheeseRolls-min.jpg',
                directions: [
                    `In a medium bowl, whisk together eggs, milk, and chives. Season with salt and pepper.`,
                    `In a medium skillet over medium heat, melt butter. Pour half of the egg mixture into the skillet, moving to create a thin layer that covers the entire pan.`,
                    `Cook for 2 minutes. Add 1/2 cup cheddar and cover for 2 minutes more, until the cheese is melty. Remove onto plate, place 2 slices of ham, and roll tightly. Repeat with remaining ingredients and serve.`
                ]
            },
            {
                id: 10,
                category_id: [1],
                name: 'Bacon Egg and Cheese Roll-Ups',
                desc: ``,
                stars: 5,
                servings: '6',
                prep_time_min: 20,
                total_time_min: 20,
                ingredients: [
                    '6 large eggs',
                    '2 tbsp. milk',
                    '1/4 tsp. garlic powder',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '1 tbsp. butter',
                    '1 tbsp. chopped fresh chives',
                    '18 slices bacon',
                    '2 c. shredded Cheddar'
                ],
                img: 'baconEggCheese-min.jpg',
                directions: [
                    `In a large bowl, whisk together eggs, milk, and garlic powder and season with salt and pepper.`,
                    `In a nonstick skillet over medium heat, melt butter. Add eggs and scramble, 3 minutes, then stir in chives.`,
                    `On a cutting board, lay out three strips of bacon. Sprinkle the bottom third with cheddar and top with a large spoonful of scrambled eggs. Roll up tightly. Repeat with remaining cheese and eggs.`,
                    `Return skillet to heat and add bacon roll-ups seam-side down. Cook until crispy on all sides, then transfer to a paper towel-lined plate to drain fat. Serve.`
                ]
            },
            {
                id: 11,
                category_id: [1],
                name: 'Bunless Bacon, Egg & Cheese',
                desc: ``,
                stars: 5,
                servings: '1',
                prep_time_min: 10,
                total_time_min: 10,
                ingredients: [
                    '2 eggs',
                    '2 tbsp. water',
                    '1/2 avocado, lightly mashed',
                    '2 slices cooked bacon',
                    '1/4 c. shredded Cheddar cheese'
                ],
                img: 'bunlessBaconEgg-min.jpg',
                directions: [
                    `In a medium nonstick pan, place two mason jar lids (centers removed). Spray the entire pan with cooking spray and heat over medium heat. Crack eggs into the centers of the lids and lightly whisk with a fork to break up yolk.`,
                    `Pour water around the lids and cover the pan. Cook, letting the eggs steam, until the whites are cooked through, about 3 minutes. Remove lid and top one eggs with cheddar. Cook until the cheese is slightly melty, about 1 minute more.`,
                    `Invert the egg bun without the cheese onto the plate. Top with mashed avocado and cooked bacon. Top with the cheesy egg bun, cheese side-down. Eat with fork and knife.`
                ]
            },
            {
                id: 12,
                category_id: [1],
                name: 'Cloud Eggs',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 15,
                total_time_min: 20,
                ingredients: [
                    '4 large eggs',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '1/2 c. freshly grated Parmesan',
                    '1/4 lb. deli ham, chopped',
                    '3 tbsp. finely chopped fresh chives, for garnish'
                ],
                img: 'cloudEggs-min.jpg',
                directions: [
                    `Preheat oven to 450° and line a large baking sheet with parchment paper.`,
                    `Separate egg whites and egg yolks, placing the egg whites in a large bowl and the yolks in a small bowl.`,
                    `Season the egg whites with salt and pepper. Using a whisk or a hand mixer, beat the egg whites until stiff peaks form. Gently fold in Parmesan, ham, and chives. Create 4 mounds of egg whites on the prepared baking sheet and indent the centers of each to look like nests. Bake until slightly golden, about 3 minutes.`,
                    `Carefully add an egg yolk to the center of each egg white cloud. Season yolk with salt and pepper. Bake until the yolks are just set, about 3 minutes more`
                ]
            },
            {
                id: 13,
                category_id: [1],
                name: 'Avocado Egg Boats',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 10,
                total_time_min: 30,
                ingredients: [
                    '2 ripe avocados, pitted and halved',
                    '4 large eggs',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '3 slices bacon',
                    'Freshly chopped chives, for garnish'
                ],
                img: 'avocadoEggBoats-min.jpg',
                directions: [
                    `Preheat oven to 350°. Place avocados in a baking dish, then crack eggs into a bowl. Using a spoon, transfer yolks to each avocado half, then spoon in as much egg white as you can fit without spilling over.`,
                    `Season with salt and pepper and bake until whites are set and yolks are no longer runny, about 20 minutes. (Cover with foil if avocados are beginning to brown.)`,
                    `Meanwhile, in a large skillet over medium heat, cook bacon until crisp, 8 minutes, then transfer to a paper towel-lined plate and chop.`,
                    `Top avocados with bacon and chives and serve with a spoon`
                ]
            },
            {
                id: 14,
                category_id: [1],
                name: 'Low-Carb Breakfast Hash',
                desc: ``,
                stars: 5,
                servings: '4 - 6',
                prep_time_min: 10,
                total_time_min: 50,
                ingredients: [
                    '6 slices bacon, cut into 1" pieces',
                    '1 onion, chopped',
                    '1 red bell pepper, chopped',
                    '1 large head of cauliflower, chopped',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '1/4 tsp. smoked paprika',
                    '3 tbsp. water',
                    '2 cloves garlic, minced',
                    '2 tbsp. finely chopped chives',
                    '4 eggs',
                    '1 c. shredded Cheddar cheese'
                ],
                img: 'lowCarBreakfastHash-min.jpg',
                directions: [
                    `In a large nonstick skillet over medium heat, fry bacon until crispy. Turn off heat and transfer bacon to a paper towel-lined plate. Keep most of bacon fat in skillet, removing any black pieces from the bacon.`,
                    `Turn heat back to medium and add onion, bell pepper, and cauliflower to the skillet. Cook, stirring occasionally, until the vegetables begin to soften and turn golden. Season with salt, pepper, and paprika`,
                    `Add 2 tablespoons of water and cover the skillet. Cook until the cauliflower is tender and the water has evaporated, about 5 minutes. (If all the water evaporates before the cauliflower is tender, add more water to the skillet and cover for a couple minutes more.)`,
                    `Take off the lid, then stir in the garlic and chives and cook until the garlic is fragrant, about 30 seconds. Using a wooden spoon, make four holes in the hash to reveal bottom of skillet. Crack an egg into each hole and season each egg with salt and pepper. Sprinkle cheese and cooked bacon bits over the entire skillet. Replace lid and cook until eggs are cooked to your liking, about 5 minutes for a just runny egg. Serve warm.`
                ]
            },
            {
                id: 15,
                category_id: [1],
                name: 'Mason Jar Omelets',
                desc: ``,
                stars: 5,
                servings: '2',
                prep_time_min: 10,
                total_time_min: 15,
                ingredients: [
                    'nonstick cooking spray',
                    '4 large eggs',
                    '2/3 c. shredded Cheddar',
                    '1/2 Onion, finely chopped',
                    '1/2 c. ham, diced',
                    '1 red bell pepper, chopped',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '1 tbsp. freshly chopped chives'
                ],
                img: '-min.jpg',
                directions: [
                    `If baking, preheat oven to 350°`,
                    `Grease two 16-ounce mason jars with nonstick cooking spray.`,
                    `Crack two eggs into each jar. Divide cheese, onion, ham, and bell pepper between the two jars and season with salt and pepper.`,
                    `Place lids on jars and shake until eggs are scrambled and ingredients are combined.`,
                    `Remove lids and place in the microwave. Microwave on high for 2 minutes, checking every 30 seconds. Garnish with chives and serve`
                ]
            },
            {
                id: 16,
                category_id: [1],
                name: 'Loaded Cauliflower Breakfast Bake',
                desc: ``,
                stars: 5,
                servings: '6',
                prep_time_min: 15,
                total_time_min: 55,
                ingredients: [
                    '1 large head cauliflower',
                    '8 slices bacon, chopped',
                    '10 large eggs',
                    '1 c. whole milk',
                    '2 cloves garlic, minced',
                    '2 tsp. paprika',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '2 c. shredded Cheddar',
                    '2 green onions, thinly sliced, plus more for garnish',
                    'Hot sauce, for serving'
                ],
                img: 'loadedCauliflowerBreakfastBake-min.jpg',
                directions: [
                    `Preheat oven to 350º. Grate cauliflower head on a box grater and transfer to a baking dish.`,
                    `In a large skillet over medium heat, cook bacon. Transfer to a paper towel-lined plate to drain fat.`,
                    `In a large bowl, whisk together eggs, milk, garlic, and paprika and season with salt and pepper.`,
                    `Top cauliflower with cheddar, cooked bacon, and green onions, and pour over egg mixture.`,
                    `Bake until eggs are set and top is golden, 35 to 40 minutes.`,
                    `Garnish with more hot sauce and green onions and serve.`
                ]
            },
            {
                id: 17,
                category_id: [1],
                name: 'Bacon Weave Breakfast Tacos',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 25,
                total_time_min: 45,
                ingredients: [
                    '16 slices bacon, halved',
                    'Freshly ground black pepper',
                    '6 large eggs',
                    '1 tbsp. whole milk',
                    '1 tbsp. unsalted butter',
                    'kosher salt',
                    '2 tbsp. Chopped chives',
                    '1/4 c. Shredded Monterey Jack',
                    '1 avocado, sliced',
                    'Hot sauce, for serving'
                ],
                img: 'baconWeaveTacos-min.jpg',
                directions: [
                    `Preheat oven to 400° and line a large, rimmed baking sheet with foil. In one corner, make a bacon weave with 8 halves of bacon each, creating a square. Repeat to make next three weaves. Season with pepper. Place an inverted baking rack on top to make sure bacon lays flat.`,
                    `Bake until bacon is crispy, 18 to 20 minutes. Working quickly, trim each square with a paring knife or kitchen shears to make a round shape.`,
                    `Meanwhile, make scrambled eggs. In a medium bowl, whisk together eggs with milk until well incorporated.`,
                    `In a medium, nonstick skillet over medium-low heat, melt butter. Pour egg mixture into the pan. Gently move the eggs around with a spatula, creating large curds. When the eggs are almost cooked to your liking, season with salt and pepper. Fold in chives and remove from heat.`,
                    `Assemble tacos: On a serving platter, fill the bacon taco shells with eggs. Sprinkle each with cheese, nestle in a few slices of avocado, and top with hot sauce.`
                ]
            },
            {
                id: 18,
                category_id: [1],
                name: 'Cauliflower Toast',
                desc: ``,
                stars: 5,
                servings: '4 - 6',
                prep_time_min: 15,
                total_time_min: 45,
                ingredients: [
                    '1 medium head cauliflower',
                    '1 large egg',
                    '1/2 c. shredded Cheddar',
                    '1 tsp. garlic powder',
                    'kosher salt',
                    'Freshly ground black pepper'
                ],
                img: 'cauliflowerToast-min.jpg',
                directions: [
                    `Preheat oven to 425º and line a baking sheet with parchment paper. Finely grate cauliflower and transfer to a large bowl. Microwave on high, 8 minutes. Drain thoroughly with paper towels or a cheesecloth until mixture is dry.`,
                    `Add egg, cheddar, and garlic powder to cauliflower bowl and season with salt and pepper. Mix until combined.`,
                    `Form cauliflower into toast shapes on prepared baking sheet and bake until golden, 18 to 20 minutes.`,
                    `Transfer to a plate and top with desired toppings, like mashed avocado, a fried egg, or bacon, lettuce and tomato.`
                ]
            },
            {
                id: 19,
                category_id: [2],
                name: 'Bacon Asparagus Bites',
                desc: ``,
                stars: 5,
                servings: '6',
                prep_time_min: 10,
                total_time_min: 30,
                ingredients: [
                    '6 slices bacon, cut into thirds',
                    '5 oz. cream cheese, softened to room temperature',
                    '1 garlic clove, minced',
                    'Freshly ground black pepper',
                    'Kosher salt',
                    '9 asparagus spears, blanched'
                ],
                img: 'baconAsparagusBites-min.jpg',
                directions: [
                    `Preheat oven to 400° and line 1 medium baking sheet with parchment paper.`,
                    `Cook bacon: In a large skillet over medium heat, cook bacon until most of the fat is cooked out, but is not crisp. Remove from pan and drain on a paper towel lined plate.`,
                    `In a small bowl, combine cream cheese with garlic and season with salt and pepper. Stir until combined.`,
                    `Assemble bites: Spread about 1/2 tablespoon cream cheese onto each strip of bacon. Place asparagus in the center and roll bacon until bacon ends meet. Once all bites are made, place on prepared baking sheet and bake 5 minutes, until bacon is crisp and cream cheese is warmed through. Serve.`
                ]
            },
            {
                id: 20,
                category_id: [2],
                name: 'Keto Taquitos',
                desc: ``,
                stars: 5,
                servings: '6',
                prep_time_min: 5,
                total_time_min: 20,
                ingredients: [
                    '1 tbsp. extra-virgin olive oil',
                    '1/4 onion, finely chopped',
                    '2 garlic cloves, minced',
                    '1/2 tsp. cumin',
                    '1/2 tsp. chili powder',
                    '1 1/2 c. shredded chicken',
                    '1/3 c. red enchilada sauce',
                    '2 tbsp. freshly chopped cilantro, plus more for garnish',
                    'Kosher salt',
                    '1 c. shredded cheddar',
                    '1 c. shredded monterey jack',
                    'Sour cream, for serving (optional)'
                ],
                img: 'ketoTaquitos-min.jpg',
                directions: [
                    `Preheat oven to 375° and line a small baking sheet with parchment paper. In a medium skillet over medium heat, heat oil. Add onion and cook until slightly soft, 3 minutes. Add garlic and spices and cook until fragrant, 1 to 2 minutes more. Add chicken and enchilada sauce, then bring mixture to a simmer. Stir in cilantro, season with salt, and remove from heat.`,
                    `Make taquito shells: In a medium bowl, mix together cheeses. Divide mixture into 6 piles on prepared baking sheet. Bake 8 to 10 minutes, or until cheese is melted and slightly golden around the edges. Let cool 2 to 4 minutes, then add a small pile of chicken and roll tightly. Repeat until all taquitos are made.`,
                    `Garnish with cilantro and serve with sour cream, for dipping.`
                ]
            },
            {
                id: 21,
                category_id: [2],
                name: 'Cucumber Sushi',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 15,
                total_time_min: 20,
                ingredients: [
                    '2 medium cucumbers, halved',
                    '1/4 avocado, thinly sliced',
                    '1/2 red bell pepper, thinly sliced',
                    '1/2 yellow bell pepper, thinly sliced',
                    '2 small carrots, thinly sliced',
                    '1/3 c. mayonnaise',
                    '1 tbsp. sriracha',
                    '1 tsp. soy sauce'
                ],
                img: 'cucumberSushi-min.jpg',
                directions: [
                    `Using a small spoon, remove seeds from center of cucumbers until they are completely hollow.`,
                    `Press avocado into the center of cucumber, using a butter knife to press inside the cucumber. Next, slide in bell peppers and carrots until the cucumber is completely full of veggies.`,
                    `Make dipping sauce: combine mayo, sriracha, and soy sauce in a small bowl. Whisk to combine.`,
                    `Slice cucumber rounds into 1” thick pieces and serve with sauce on the side.`
                ]
            },
            {
                id: 22,
                category_id: [2],
                name: 'Creamy Avocado Dip',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 5,
                total_time_min: 5,
                ingredients: [
                    '2 ripe avocados, pitted',
                    '1/2 c. plain Greek yogurt',
                    '2 cloves garlic, minced',
                    'Juice of 1 lime',
                    'kosher salt',
                    'Freshly ground black pepper'
                ],
                img: 'avocadoDip-min.jpg',
                directions: [
                    `In a large bowl, mash avocados.`,
                    `Add yogurt, garlic, and lime juice and season with salt and pepper. Serve.`
                ]
            },
            {
                id: 23,
                category_id: [2],
                name: 'Turkey Club Cups',
                desc: ``,
                stars: 5,
                servings: '12',
                prep_time_min: 10,
                total_time_min: 20,
                ingredients: [
                    '12 slices roasted deli turkey',
                    '12 slices sharp cheddar',
                    '1/4 c. mayonnaise',
                    '2 tbsp. Dijon mustard',
                    '1/2 head iceberg lettuce, shredded',
                    '1 pt. cherry tomatoes, chopped',
                    '1 avocado, chopped',
                    '8 slices bacon, cooked and chopped'
                ],
                img: 'turkeyClubCups-min.jpg',
                directions: [
                    `Preheat oven to 400° and lightly grease muffin tin with cooking spray.`,
                    `Place a slice of turkey into each muffin cup. Add a slice of cheddar, then bake until turkey is sturdy and cheese is melted, about 10 minutes. Let cool slightly.`,
                    `Meanwhile, in a small bowl, mix together mayo and Dijon. Add a dollop to the bottom of each turkey cup and spread around. Fill with lettuce, cherry tomatoes, avocado, and bacon.`,
                    `Meanwhile, in a small bowl, mix together mayo and Dijon. Add a dollop to the bottom of each turkey cup and spread around. Fill with lettuce, cherry tomatoes, avocado, and bacon.`
                ]
            },
            {
                id: 24,
                category_id: [2],
                name: 'Buffalo Chicken Celery Boats',
                desc: ``,
                stars: 5,
                servings: '2 - 4',
                prep_time_min: 15,
                total_time_min: 15,
                ingredients: [
                    '1/3 c. Franks hot sauce',
                    '2 tbsp. mayonnaise',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '2 c. shredded rotisserie chicken',
                    '4 stalks celery, cut into 3" pieces',
                    '1/3 c. crumbled blue cheese',
                    'Ranch, for drizzling',
                    'chives, for garnish'
                ],
                img: 'buffaloChickenCelery-min.jpg',
                directions: [
                    `In a medium bowl, whisk together hot sauce and mayo and season with salt and pepper. Pour over shredded chicken and mix to combine.`,
                    `Spoon chicken mixture into celery boats.`,
                    `Top with blue cheese, drizzle with ranch and garnish with chives.`
                ]
            },
            {
                id: 25,
                category_id: [2],
                name: 'Bell Pepper Nachos',
                desc: ``,
                stars: 5,
                servings: '',
                prep_time_min: 15,
                total_time_min: 35,
                ingredients: [
                    '4 bell peppers, cut into small wedges',
                    '2 tbsp. extra-virgin olive oil',
                    '1/2 tsp. ground cumin',
                    '1/2 tsp. chili powder',
                    '1/4 tsp. garlic powder',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '1 1/2 c. Shredded Monterey Jack',
                    '1 1/2 c. shredded Cheddar',
                    '1 c. guacamole',
                    '1/2 c. pickled jalapeños',
                    '1 c. Pico de Gallo',
                    '1/2 c. sour cream',
                    '1 tbsp. milk (or water)',
                    'Chopped fresh cilantro, for garnish',
                    'Lime wedges, for serving'
                ],
                img: 'bellPepperNachos-min.jpg',
                directions: [
                    `Preheat oven to 425° and line two small baking sheets with foil.`,
                    `Divide bell peppers between baking sheets. Toss wedges on both sheets with olive oil, cumin, chili powder and garlic powder. Season generously with salt and pepper. Lay the wedges on the baking sheets in single layers, cut-side up. Bake until the peppers are crisp-tender.`,
                    `Top one baking sheet full of peppers with about half each of the Monterey Jack and cheddar. Top with bell peppers from the second sheet, then top with the rest of the cheese. Bake until cheese is bubbly, about 10 minutes.`,
                    `Top bell peppers with guacamole, pickled jalapeños and salsa. In a small bowl, whisk sour cream and milk together and drizzle over bell peppers.`,
                    `Garnish with cilantro and serve warm with lime wedges.`
                ]
            },
            {
                id: 26,
                category_id: [2],
                name: 'Greek Yogurt Onion Dip',
                desc: ``,
                stars: 5,
                servings: '8',
                prep_time_min: 20,
                total_time_min: 40,
                ingredients: [
                    '2 onion, thinly sliced',
                    '2 tbsp. olive oil',
                    '2 tsp. fresh thyme leaves',
                    'kosher salt',
                    'Freshly ground pepper',
                    '1 tbsp. apple cider vinegar',
                    '2 c. Greek yogurt',
                    'Carrot sticks, for serving',
                    'Crackers, for serving'
                ],
                img: 'greekYogurtOnionDip-min.jpg',
                directions: [
                    `Cook the Onions: Heat olive oil in a medium skillet over medium heat. Add onions and thyme. Season to taste with salt and pepper. Turn down the heat to medium-low and cook, stirring occasionally, until soft and caramelized—about 20 minutes. If the onions are browning too quickly, turn down the heat and add a splash of water. When the onions are caramelized and jammy, add the vinegar. Reduce the vinegar slightly, about 1 minute and remove from heat.`,
                    `In a medium serving bowl, combine caramelized onions and Greek yogurt.`,
                    `Serve cold or at room temperature with carrot sticks and crackers.`
                ]
            },
            {
                id: 27,
                category_id: [3],
                name: 'Creamy Tuscan Chicken',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 5,
                total_time_min: 40,
                ingredients: [
                    '1 tbsp. extra-virgin olive oil',
                    '4 boneless skinless chicken breasts',
                    'Kosher salt',
                    'Freshly ground black pepper',
                    '1 tsp. dried oregano',
                    '3 tbsp. unsalted butter',
                    '3 cloves garlic, minced',
                    '1 1/2 c. cherry tomatoes',
                    '2 c. baby spinach',
                    '1/2 c. heavy cream',
                    '1/4 c. freshly grated Parmesan',
                    'Lemon wedges, for serving'
                ],
                img: 'creamyTuscanChicken-min.jpg',
                directions: [
                    `In a skillet over medium heat, heat olive oil. Add chicken and season with salt, pepper, and oregano. Cook until golden and no longer pink, 8 minutes per side. Remove from skillet and set aside. `,
                    `In the same skillet over medium heat, melt butter. Stir in garlic and cook until fragrant, about 1 minute. Add cherry tomatoes and season with salt and pepper. Cook until tomatoes are beginning to burst then add spinach and cook until spinach is beginning to wilt. `,
                    `Stir in heavy cream and parmesan and bring mixture to a simmer. Reduce heat to low and simmer until sauce is slightly reduced, about 3 minutes. Return chicken to skillet and cook until heated through, 5 to 7 minutes. Remove from heat, squeeze with lemon and serve.`
                ]
            },
            {
                id: 28,
                category_id: [3],
                name: 'Grilled Chicken Breast',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 15,
                total_time_min: 45,
                ingredients: [
                    '1/4 c. balsamic vinegar',
                    '3 tbsp. extra-virgin olive oil',
                    '2 tbsp. brown sugar',
                    '3 cloves garlic, minced',
                    '1 tsp. dried thyme',
                    '1 tsp. dried rosemary',
                    '4 chicken breasts',
                    'Kosher salt',
                    'Freshly ground black pepper',
                    'Freshly chopped parsley, for garnish'
                ],
                img: 'grilledChickenBreast-min.jpg',
                directions: [
                    `In a medium bowl, whisk together balsamic vinegar, olive oil, brown sugar, garlic, and dried herbs, and season generously with salt and pepper. Reserve ¼ cup.`,
                    `Add chicken to the bowl and toss to combine. Let marinate at least 20 minutes and up to overnight. `,
                    `Preheat grill to medium high. Add chicken and grill, basting with reserved marinade, until cooked through, 6 minutes per side. `,
                    `Garnish with parsley before serving`
                ]
            },
            {
                id: 29,
                category_id: [1],
                name: 'Keto Burger Buns',
                desc: ``,
                stars: 5,
                servings: '6',
                prep_time_min: 5,
                total_time_min: 20,
                ingredients: [
                    '2 c. shredded mozzarella',
                    '4 oz. cream cheese',
                    '3 large eggs',
                    '3 c. almond flour',
                    '2 tsp. baking powder',
                    '1 tsp. kosher salt',
                    '4 tbsp. butter, melted',
                    'sesame seeds Sesame',
                    'dried parsley'
                ],
                img: 'ketoBurgerBuns-min.jpg',
                directions: [
                    `Preheat oven to 400° and line a baking sheet with parchment paper. In a large microwave-safe bowl, melt together mozzarella and cream cheese. `,
                    `Add eggs and stir to combine then add almond flour, baking powder and salt. Form dough into 6 balls and flatten slightly then place on prepared baking sheet. `,
                    `Brush with butter and sprinkle with sesame seeds and parsley. Bake until golden, 10-12 minutes.`
                ]
            },
            {
                id: 30,
                category_id: [3],
                name: 'Garlic Shrimp Zucchini Pasta',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 5,
                total_time_min: 25,
                ingredients: [
                    '3 tbsp. butter, divided',
                    '1 lb. medium or large shrimp, peeled and deveined',
                    'Kosher salt',
                    'Freshly ground black pepper',
                    '3 cloves garlic, minced',
                    '3/4 c. heavy cream',
                    '1/2 c. grated Parmesan',
                    '1 c. halved cherry tomatoes',
                    '3 tbsp. freshly chopped parsley',
                    '3 tbsp. large zucchini, spiralized (or about 4 cups zoodles)'
                ],
                img: 'garlicShrimpZucchini-min.jpg',
                directions: [
                    `In a large skillet over medium heat, melt 1 tablespoon butter. Add shrimp and season with salt and pepper. Cook until shrimp is pink and opaque, about 2 minutes per side. Transfer shrimp to a plate. (Keep juices in skillet.)`,
                    `Melt remaining butter in skillet then stir in garlic. Cook until fragrant, about 1 minute, then whisk in heavy cream. Bring to simmer, then stir in Parmesan, tomatoes, and parsley. Simmer until tomatoes have softened and mixture has thickened slightly, about 3 minutes. `,
                    `Return shrimp to skillet and add zucchini noodles. Toss to combine and serve immediately.`
                ]
            },
            {
                id: 31,
                category_id: [3],
                name: 'BLT Burgers',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 25,
                total_time_min: 35,
                ingredients: [
                    '1 lb. bacon slices, halved',
                    '1 lb. ground beef',
                    'kosher salt',
                    'fresh ground black pepper',
                    '1/2 c. mayonnaise',
                    'Juice of 1/2 lemon',
                    '3 tbsp. finely chopped chives',
                    'Butterhead lettuce, for serving',
                    '2 tomatoes, sliced'
                ],
                img: 'bltBurgers-min.jpg',
                directions: [
                    `Preheat oven to 400º and place a baking rack inside of a baking sheet (to help catch grease).`,
                    `Make a bacon weave: On the baking rack, line 3 bacon halves side-by-side. Lift one end of the middle bacon slice and place a fourth bacon half on top of the side pieces and underneath the middle slice. Lay the middle slice back down.`,
                    `Next, lift the two side strips of bacon and place a 5th bacon half on top of the middle piece and underneath the sides. Lay the side slices back down.`,
                    `Finally, lift the other end of the middle slice and place a 6th slice on top of the side pieces and underneath the middle slice. Repeat to make a second weave.`,
                    `Season with pepper and bake until bacon is crispy, 25 minutes. Transfer to a paper towel-lined plate to blot grease. Let cool for at least 10 minutes.`,
                    `Meanwhile, make burgers: Preheat a grill (or grill pan) to medium-high heat. Shape ground beef into large patties and season both sides with salt and pepper. Grill until cooked to your liking, about 4 minutes per side for medium.`,
                    `Make herb mayo: In a small bowl, whisk together mayonnaise, lemon juice, and chives.`,
                    `Assemble burgers: For each burger, place a bacon weave on the bottom then spread it with some herb mayo. Top with burger, lettuce, tomato and remaining bacon weave. Serve immediately.`
                ]
            },
            {
                id: 32,
                category_id: [3],
                name: 'Keto Taco Cups',
                desc: ``,
                stars: 5,
                servings: '8',
                prep_time_min: 10,
                total_time_min: 30,
                ingredients: [
                    '3 1/2 c. shredded cheddar',
                    '1 tbsp. extra-virgin olive oil',
                    '1 onion, chopped',
                    '3 cloves garlic, minced',
                    '1 lb. ground beef',
                    '1 tsp. chili powder',
                    '1/2 tsp. ground cumin',
                    '1/2 tsp. paprika',
                    'Kosher salt',
                    'Freshly ground black pepper',
                    'Sour cream, for serving',
                    'Diced avocado, for serving',
                    'Chopped cilantro, for serving',
                    'Chopped tomatoes, for serving'
                ],
                img: 'ketoTacoCups-min.jpg',
                directions: [
                    `Preheat oven to 375° and line a large baking sheet with parchment paper. Spoon about a tablespoon of cheese a few inches apart. Bake until bubbly and edges are beginning to turn golden, about 6 minutes. Let cool on baking sheet for a minute.`,
                    `Meanwhile, grease bottom of a muffin tin with cooking spray, then carefully pick up melted cheese slices and place on bottom of muffin tin. Let cool 10 minutes.`,
                    `In a large skillet over medium heat, heat olive oil. Add onion and cook, stirring occasionally, until soft, about 5 minutes. Stir in garlic then add ground beef, breaking up the meat with a wooden spoon. Cook until beef is no longer pink, about 6 minutes, then drain fat. Season with chili powder, cumin, paprika, salt, and pepper.`,
                    `Transfer cheese cups to a serving platter. Fill with cooked ground beef then top with sour cream, avocado, cilantro, and tomatoes.`
                ]
            },
            {
                id: 33,
                category_id: [3],
                name: 'Bacon Wrapped Stuffed Zucchini',
                desc: ``,
                stars: 5,
                servings: '6',
                prep_time_min: 10,
                total_time_min: 60,
                ingredients: [
                    '3 medium zucchini, halved lengthwise',
                    '8 oz. cream cheese, softened',
                    '1/2 c. finely chopped artichoke hearts',
                    '1/2 c. frozen spinach, defrosted, drained, and chopped',
                    '1 c. shredded mozzarella',
                    '1/2 c. freshly grated Parmesan',
                    '1 Garlic clove, minced',
                    '1/2 tsp. red pepper flakes, plus more for garnish',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '12 slices bacon'
                ],
                img: 'baconWrappedZucchini-min.jpg',
                directions: [
                    `Preheat oven to 350°. Line a baking sheet with parchment paper and fit with a cooling rack. Using a spoon, remove the seedy centers of each zucchini.`,
                    `In a large bowl, combine cream cheese, artichoke hearts, spinach, mozzarella, parmesan, garlic and red pepper flakes. Season with salt and pepper and stir to combine.`,
                    `Scoop cream cheese mixture into zucchini boats, then wrap each boat with 2 slices bacon. Place on prepared cooling rack and place in oven to bake, 35 to 40 minutes, or until zucchini is tender and bacon is crisp. Let cool slightly and serve.`
                ]
            },
            {
                id: 34,
                category_id: [3],
                name: 'Cheesy Bacon Butternut Squash',
                desc: ``,
                stars: 5,
                servings: '6',
                prep_time_min: 10,
                total_time_min: 35,
                ingredients: [
                    '2 lb. butternut squash, peeled and cut into 1" pieces',
                    '2 tbsp. olive oil',
                    '2 cloves garlic, minced',
                    '2 tbsp. chopped thyme',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '1/2 lb. bacon, chopped',
                    '1 1/2 c. shredded mozzarella',
                    '1/2 c. freshly grated Parmesan',
                    'Chopped fresh parsley, for garnish'
                ],
                img: 'cheesyBaconButternutSquash-min.jpg',
                directions: [
                    `Preheat oven to to 425°. In a large ovenproof skillet (or in a large baking dish), toss butternut squash with olive oil, garlic and thyme. Season with salt and pepper, then scatter bacon on top.`,
                    `Bake until the squash is tender and the bacon is cooked through, 20 to 25 minutes.`,
                    `Remove skillet from oven and top with mozzarella and Parmesan. Bake for another 5 to 10 minutes, or until the cheese is melty.`,
                    `Garnish with parsley and serve warm.`
                ]
            },
            {
                id: 35,
                category_id: [3],
                name: 'Beef Tenderloin',
                desc: ``,
                stars: 5,
                servings: '4 - 6',
                prep_time_min: 10,
                total_time_min: 45,
                ingredients: [
                    'Canola oil, for beef',
                    '3 lb. beef tenderloin roast',
                    '1 tbsp. Seasoning salt',
                    'Freshly ground black pepper',
                    '6 tbsp. butter, cut into slices',
                    '6 sprigs fresh rosemary'
                ],
                img: 'beefTenderloin-min.jpg',
                directions: [
                    `Preheat oven to 475º. Rub beef tenderloin all over with oil and season generously with seasoning salt and pepper. Heat a large skillet over medium-high heat. Sear tenderloin on all sides until golden, 2 minutes per side.`,
                    `Transfer to a baking dish and top all over with butter and rosemary sprigs.`,
                    `Roast until a meat thermometer reaches 140º, 25 minutes.`,
                    `Let stand 15 minutes, then slice and serve.`
                ]
            },
            {
                id: 36,
                category_id: [3],
                name: 'Lemon Garlic Shrimp',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 5,
                total_time_min: 15,
                ingredients: [
                    '2 tbsp. butter, divided',
                    '1 tbsp. extra-virgin olive oil',
                    '1 lb. medium shrimp, peeled and deveined',
                    '3 cloves garlic, minced',
                    '1 tsp. crushed red pepper flakes',
                    'Juice of 1 lemon',
                    '2 tbsp. dry white wine (or water)',
                    'Freshly chopped parsley, for garnish'
                ],
                img: 'lemonGarlicShrimp-min.jpg',
                directions: [
                    `In a large skillet over medium heat, melt 1 tablespoon butter and olive oil. Add shrimp, garlic, and crushed red pepper flakes and cook until shrimp is pink, 3 minutes.`,
                    `Remove from heat and stir in remaining tablespoon butter, lemon juice, white wine, and parsley.`,
                    `Serve.`
                ]
            },
            {
                id: 37,
                category_id: [3],
                name: 'Jerk Chicken',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 10,
                total_time_min: 60,
                ingredients: [
                    '1/4 c. lime juice',
                    '1/3 c. low-sodium soy sauce',
                    '1 tbsp. extra-virgin olive oil',
                    '3 cloves garlic, minced',
                    '1 piece fresh ginger, peeled and minced',
                    '4 green onions, thinly sliced',
                    '1 tsp. ground allspice',
                    '1/2 tsp. ground cinnamon',
                    '1/4 tsp. ground nutmeg',
                    'Freshly ground black pepper',
                    '1 1/2 lb. bone-in chicken drumsticks and thighs',
                    'Lime slices, for serving',
                    'Sliced green onions, for garnish'
                ],
                img: 'jerkChicken-min.jpg',
                directions: [
                    `Make marinade: In a large bowl, combine all ingredients and whisk until combined.`,
                    `Add chicken and toss to coat. Transfer to the refrigerator and marinate at least 30 minutes and up to overnight.`,
                    `Heat grill to high. Grill chicken until charred and cooked through, 20 to 25 minutes.`,
                    `Serve with lime slices and green onions.`
                ]
            },
            {
                id: 38,
                category_id: [3],
                name: 'Lemon Grilled Salmon',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 10,
                total_time_min: 20,
                ingredients: [
                    '4 6-oz. skin-on salmon fillets',
                    'Extra-virgin olive oil, for brushing',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '2 lemons, sliced',
                    '2 tbsp. butter'
                ],
                img: 'lemonGrilledSalmon-min.jpg',
                directions: [
                    `Heat grill to high. Brush salmon with oil and season with salt and pepper. Add salmon and lemon slices and grill until salmon is cooked through and lemons are charred, 5 minutes per side.`,
                    `Add a pat of butter to salmon right when it’s off the grill and top with grilled lemons. Serve.`
                ]
            },
            {
                id: 39,
                category_id: [3],
                name: 'Tuscan Butter Salmon',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 10,
                total_time_min: 45,
                ingredients: [
                    '2 tbsp. extra-virgin olive oil',
                    '4 (6-oz) salmon fillets, patted dry with paper towels',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '3 tbsp. unsalted butter',
                    '3 cloves garlic, minced',
                    '1 1/2 c. halved cherry tomatoes',
                    '2 c. baby spinach',
                    '1/2 c. heavy cream',
                    '1/4 c. Parmesan',
                    '1/4 c. chopped herbs (such as basil and parsley), plus more for garnish',
                    'Lemon wedges, for serving (optional)'
                ],
                img: 'tuscanButterSalmon-min.jpg',
                directions: [
                    `In a large skillet over medium-high heat, heat oil. Season salmon all over with salt and pepper. When oil is shimmering but not smoking, add salmon skin-side up and cook until deeply golden, about 6 minutes. Flip over and cook 2 minutes more. Transfer to a plate.`,
                    `Reduce heat to medium and add butter. When butter has melted, stir in garlic and cook until fragrant, about 1 minute. Add cherry tomatoes and season with salt and pepper. Cook until tomatoes are beginning to burst then add spinach and cook until spinach is beginning to wilt.`,
                    `Stir in heavy cream, parmesan and herbs and bring mixture to a simmer. Reduce heat to low and simmer until sauce is slightly reduced, about 3 minutes.`,
                    `Return salmon back to skillet and spoon over sauce. Simmer until salmon is cooked through, about 3 minutes more.`,
                    `Garnish with more herbs and squeeze lemon on top before serving.`
                ]
            },
            {
                id: 40,
                category_id: [3],
                name: 'Garlic Rosemary Pork Chops',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 10,
                total_time_min: 30,
                ingredients: [
                    '4 pork loin chops',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '1 tbsp. freshly minced roseary',
                    '2 cloves garlic, minced',
                    '1/2 c. (1 stick) butter, melted',
                    '1 tbsp. olive oil'
                ],
                img: 'rosemaryPorkChops-min.jpg',
                directions: [
                    `Preheat oven to 375°. Season pork chops with salt and pepper.`,
                    `In a small bowl mix together butter, rosemary, and garlic. Set aside.`,
                    `In an oven safe skillet over medium heat, heat olive oil then add pork chops. Sear until golden, 4 minutes, flip and cook 4 minutes more. Brush pork chops generously with garlic butter.`,
                    `Place skillet in oven and cook until cooked through, 10-12 minutes. Serve with more garlic butter.`
                ]
            },
            {
                id: 41,
                category_id: [3],
                name: 'Iceburgers',
                desc: ``,
                stars: 5,
                servings: '4',
                prep_time_min: 30,
                total_time_min: 30,
                ingredients: [
                    '1 large head iceberg lettuce',
                    '4 slices bacon',
                    '1 red onion, sliced',
                    '1 lb. ground beef',
                    'kosher salt',
                    'Freshly ground black pepper',
                    '4 slices cheddar',
                    '1 tomato, sliced',
                    'Ranch dressing, for serving'
                ],
                img: 'iceburgers-min.jpg',
                directions: [
                    `Slice 8 large rounds from the edges of the head of iceberg to create buns.`,
                    `In a large skillet over medium heat, cook bacon until crispy. Transfer bacon to a paper towel-lined plate to drain, reserving bacon fat in pan.`,
                    `Add onion slices and cook until tender, about 3 minutes per side. Set aside red onions and wipe skillet clean.`,
                    `Reheat skillet over medium-high heat. Shape ground beef into 4 large burger patties. Season both sides of patties with salt and pepper and add to skillet. Cook until seared on both sides and cooked to your liking, about 4 minutes per side for medium. Top each burger with a slice of cheese then cover skillet with a lid and cook until the cheese has melted, about 1 minute. Remove from heat.`,
                    `To build each burger, top one iceberg round with the cooked cheeseburger, a slice of bacon, and a tomato slice, then drizzle with ranch. Top with second iceberg round. Repeat with remaining ingredients and serve.`
                ]
            },
            {
                id: 42,
                category_id: [2, 4],
                name: 'Chocolate Walnut Fat Bomb',
                desc: ``,
                stars: 5,
                servings: '30',
                prep_time_min: 5,
                total_time_min: 30,
                ingredients: [
                    '100 g 3.5 ounces dark chocolate, min. 85% cocoa solids (I used 90%)',
                    '55 g 1/4 cup coconut oil',
                    '50 g 1/3 cup small walnut pieces',
                    '1 tsp cinnamon',
                    '8 drops stevia'
                ],
                img: 'chocolateWalnutFatBomb-min.jpg',
                directions: [
                    `Melt chocolate and coconut oil. You can do this in a water bath like the pros do it, in a coated pot on the stove (gentle heat! ) or in the microwave. If you can get hold of sugar free chocolate such as Lily's in the USA, go for it. I used 90% Lindt, but I have come across unsweetened (100% cocoa solids) chocolate as well, here in the UK there is a brand called Montezuma, for example. If you use unsweetened chocolate, adjust the amount of sweetener accordingly.`,
                    `Crush your walnuts - I used a food processor - until you have small pieces. Keep a few larger ones to decorate the fat bombs.`,
                    `Add the crushed walnuts, cinnamon and stevia to the melted chocolate/coconut oil mix.`,
                    `Pour into silicone moulds or ice cube tray and freeze for ca 5 minutes until the tops are just set.`,
                    `Remove from freezer and press the larger walnut pieces on top.`,
                    `Place in the fridge for another 20 minutes or so until the fat bombs have set.`
                ]
            },
            {
                id: 43,
                category_id: [2, 4],
                name: 'Everything Bagel and Lox Keto Fat Bombs',
                desc: ``,
                stars: 5,
                servings: '36',
                prep_time_min: 5,
                total_time_min: 35,
                ingredients: [
                    '8 ounces Organic Cultured Cream Cheese',
                    '4 ounces wild caught smoked salmon',
                    '2 medium scallions, sliced thinly',
                    'Homemade Everything Bagel Seasoning'
                ],
                img: 'everythingBagelFatBomb-min.jpg',
                directions: [
                    `Using a hand or stand mixer, beat cream cheese until fluffy.`,
                    `Add chopped smoked salmon and thinly sliced scallions.`,
                    `Beat until well incorporated.`,
                    `Roll into bite sized balls then lightly coat in Everything Bagel Seasoning.`,
                    `Chill 2-3 hours before enjoying for the flavors to come together.These will keep for up to a week in the fridge or may be frozen for longer storage. Allow to thaw in the fridge before eating.`
                ]
            },
            {
                id: 44,
                category_id: [2, 4],
                name: 'Fat Bomb Ice Cream',
                desc: ``,
                stars: 5,
                servings: '5',
                prep_time_min: 10,
                total_time_min: 70,
                ingredients: [
                    '4 whole pastured eggs',
                    '4 yolks from pastured eggs',
                    '⅓ cup (50 grams) melted cacao butter',
                    '⅓ cup melted coconut oil',
                    '⅓ cup xylitol or 15-20 drops of alcohol-free stevia',
                    '⅓ cup flavor variation *see notes for options',
                    '¼ cup MCT oil',
                    '2 tsp vanilla bean powder',
                    '8-10 ice cubes'
                ],
                img: 'fatBombIceCream-min.jpg',
                directions: [
                    `Add all ingredients but ice cubes into the jug of your high powered blender. Blend on high for 2 minutes, until creamy.`,
                    `While the blender is still running, remove the top portion of the lid and drop in 1 ice cube at a time, allowing the blender to run about 10 seconds between each ice cube. The goal here is to dilute the mixture just a bit and make it cold so it will run through the ice cream maker easier. If you have a Vitamix, there is a small space at the top, just big enough to drop in the ice cube. If you don’t have a hole in your lid, turn off the blender each time as you add an ice cube, one at a time.`,
                    `Once all of the ice has been added, pour the cold mixture into your ice cream maker and churn on high for 20-30 minutes, depending on your ice cream maker. If you do not have an ice cream maker, transfer the mixture to 9x5 loaf pan and place in the freezer. Set the timer for 30 minutes before taking out to stir. Repeat for 2-3 hours, until desired consistency is met.`,
                    `Serve immediately as soft-serve or scoop into a 9x5 loaf pan and freeze for 45 minutes or so. Store covered in the freezer for up to a week.`
                ]
            },
            {
                id: 45,
                category_id: [2, 4],
                name: 'Chocolate Chip Cookie Dough Fat Bomb',
                desc: ``,
                stars: 5,
                servings: '24',
                prep_time_min: 10,
                total_time_min: 90,
                ingredients: [
                    '8 oz cream cheese, softened',
                    '1 stick unsalted butter, softened',
                    '1/2 cup crunchy almond butter or, for nut-free, No-Sugar-Added SunButter Sunflower Butter',
                    '1/2 cup golden monk fruit sweetener',
                    '2 oz 100% cacao Baker’s chocolate bar'
                ],
                img: 'chocolateChipCookieDoughFatBomb-min.jpg',
                directions: [
                    `In a mixing bowl, using an electric mixer, mix all ingredients excluding chocolate until well-combined.`,
                    `Refrigerate mixture for 30 minutes.`,
                    `In a food processor, pulse chocolate until broken into small pieces.`,
                    `Remove mixing bowl from refrigerator, fold in chocolate pieces, and form mixture into balls or scoop and flatten into silicone mold. (If forming fat bombs into balls, line plate with parchment paper and set fat bombs atop parchment paper.)`,
                    `Harden fat bombs in freezer for 45 minutes.`
                ]
            },
            {
                id: 46,
                category_id: [2, 4],
                name: 'Pumpkin Spice Fat Bombs',
                desc: ``,
                stars: 5,
                servings: '24',
                prep_time_min: 10,
                total_time_min: 250,
                ingredients: [
                    'Avocado oil cooking spray',
                    '1/2 cup pecans',
                    '1/2 cup coconut oil',
                    '4 oz. cream cheese, softened',
                    '1/2 cup pumpkin puree',
                    '1/4 cup golden monk fruit sweetener',
                    '2 tsp pumpkin pie spice',
                    '1/4 tsp cinnamon'
                ],
                img: 'pumpkinSpiceFatBombs-min.jpg',
                directions: [
                    `In a small pan over medium heat, spray avocado oil cooking spray and toast pecans until fragrant. Remove from heat and set aside to cool.`,
                    `In a medium-sized pot over medium-low heat, melt coconut oil and cream cheese until combined.`,
                    `Pour coconut oil and cream cheese mixture into medium-sized bowl and add pumpkin puree, monk fruit sweetener, and pumpkin pie spice. Mix together using electric hand mixer.`,
                    `Scoop mixture into silicone mold, top with toasted pecans, and sprinkle with cinnamon.`,
                    `Place silicone mold in freezer and freeze until solid, about 4 hours.`,
                    `Pop fat bombs out of silicone mold and enjoy!`
                ]
            },
            {
                id: 47,
                category_id: [2, 4],
                name: 'White Chocolate Raspberry Fat Bombs',
                desc: ``,
                stars: 5,
                servings: '10 - 12',
                prep_time_min: 5,
                total_time_min: 65,
                ingredients: [
                    '1/2 cup coconut oil',
                    '2 ounces cacao butter',
                    '1/2 cup freeze-dried raspberries',
                    '1/4 cup powdered erythritol sweetener (like Swerve)'
                ],
                img: 'whiteChocolateRaspberry-min.jpg',
                directions: [
                    `Line a 12-cup muffin pan with paper liners. Or use a silicone muffin pan.`,
                    `Heat the coconut oil and cacao butter in a small saucepan over low heat until completely melted. Remove the pan from the heat.`,
                    `Grind the freeze-dried raspberries in a food processor, blender, or a coffee grinder.`,
                    `Add the pulverized berries and sweetener to the saucepan. Stir until the sweetener is mostly dissolved.`,
                    `Divide the mixture among the muffin cups. The raspberry powder will sink to the bottom — no worries. Just keep the mixture stirred as you pour them into each mold so each one has some of the raspberry powder.`,
                    `Chill for an hour or until firm.`
                ]
            },
            {
                id: 48,
                category_id: [2, 4],
                name: 'Chocolate Coconut Almond Fat Bombs',
                desc: ``,
                stars: 5,
                servings: '10',
                prep_time_min: 10,
                total_time_min: 60,
                ingredients: [
                    '1/2 cup coconut oil, melted',
                    '1/2 cup  coconut butter, melted',
                    '1/4 cup cacao powder (or cocoa powder)',
                    '1 teaspoon almond extract',
                    '1/2 teaspoon vanilla extract',
                    '10 drops stevia  (or 1/2 teaspoon erythritol)',
                    '1/4 cup crushed sliced almonds',
                    '1/4 cup unsweetened finely shredded coconut',
                    '1/4 cup cacao nibs'
                ],
                img: 'chocolateCoconutAlmondFatBombs-min.jpg',
                directions: [
                    `Mix coconut oil, coconut butter, cacao powder, almond extract, vanilla extract, and stevia or erythritol together. If using erythritol: heat in microwave or on stove for 1-2 minutes until erythritol is dissolved. You may want to taste to check that there are no crunchy erythritol crystals.`,
                    `Add in crushed slivered almonds, coconut flakes, and cacao nibs. With a tablespoon, fill mini cupcake liners or an ice cube tray, putting 1 tablespoonful in each. Store in fridge.`
                ]
            },
            {
                id: 49,
                category_id: [2, 4],
                name: 'Pecan Pie Fat Bombs',
                desc: ``,
                stars: 5,
                servings: '18',
                prep_time_min: 15,
                total_time_min: 15,
                ingredients: [
                    '1½ cups pecans or nut of choice',
                    '½ cup shredded coconut',
                    '¼ cup coconut butter I used homemade toasted coconut butter',
                    '2 tablespoons pecan butter or nut butter of choice',
                    '2 tablespoons chia seeds',
                    '2 tablespoons flax meal',
                    '2 tablespoons hemp seeds',
                    '1 date optional - skip to keep keto',
                    '1 teaspoon vanilla bean ghee OR coconut oil use coconut oil to keep vegan',
                    '1½ teaspoons cinnamon',
                    '½ teaspoon vanilla bean powder or vanilla extract',
                    '¼ teaspoon kosher salt'
                ],
                img: 'pecanPieFatBombs-min.jpg',
                directions: [
                    `In the bowl of a food processor, combine all of the ingredients. Pulse for about 1-2 minutes, until the mixture starts to break down. It will first become powdery and will stick together, but still be crumbly.`,
                    `Keep processing until the oils start to release a bit and the mixture sticks together easily - just be careful not to over process or you’ll have nut butter.`,
                    `Use a small cookie scoop (I use this one) or a tablespoon scoop to divide the mixture into equal pieces. Use your hands to roll into balls and place on a plate or baking sheet and place in the fridge to firm up for about 30 minutes.`,
                    `Store in an airtight container zip-top bag in the refrigerator or freezer.`
                ]
            }
        ];
    }

    getMeal(id) {
        return this.getMeals().find(l => l.id === id);
    }

    getMealsForCategory(id) {
        return this.getMeals().filter(l => l.category_id.includes(id));
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
                        desc:
                            '<span class="highlight">This is especially important if you have any known HEALTH ISSUES such as:</span>'
                    },
                    {
                        desc: `Diabetes<br> Thyroid Issues<br> Autoimmune Conditions<br> Gut / Stomach Issues<br> Vitamin or Mineral Deficiencies`
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
                title: 'YUMMY WEIGHT LOSS',
                body: `These recipes are not only delicious but they've actually helped me lose weight. I'm down 15 pounds by just following the recipes in this app. LOVE LOVE LOVE and reocmmend 🤗`,
                reviewer: 'Nicole Z.'
            },
            {
                id: 2,
                date: 'Feb 7, 2018',
                rating: '5.0',
                title: 'More Energy, Less Belly',
                body: `I was tired all day every day and I had a huge belly. I've been on these receipes for 3 weeks now and I'm actually lose my stomach and feeling energized day and night. ❤️❤️`,
                reviewer: 'Henry F.'
            },
            {
                id: 3,
                date: 'Feb 7, 2018',
                rating: '5.0',
                title: 'The Snacks Are To Die For',
                body: `The snacks are what make doing Keto possible. These recipes and fat bombs are crazy delicous. I even make them for my kids and they LOVE THEM. ❤️`,
                reviewer: 'Bethany D.'
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
