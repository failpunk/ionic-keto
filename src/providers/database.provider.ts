import { Injectable } from '@angular/core';
import sample from 'lodash/sample';

@Injectable()
export class DatabaseProvider {
    getCategories() {
        return [
            {
                id: 1,
                name: 'House Training',
                desc: 'Potty Training, Crate Training',
                img_class: 'bg bg--house-training'
            },
            {
                id: 2,
                name: 'Basics',
                desc: 'Name Recognition, Sit, Down',
                img_class: 'bg bg--basics'
            },
            {
                id: 3,
                name: 'Advanced Basics',
                desc: 'Come, Place, Stay, Leave It',
                img_class: 'bg bg--advanced-basics'
            },
            {
                id: 4,
                name: 'Fun Tricks',
                desc: 'Touch, Kiss, Jump, Spin',
                img_class: 'bg bg--fun-tricks'
            },
            {
                id: 5,
                name: 'Advanced Tricks',
                desc: 'Roll Over, Handshake, Load',
                img_class: 'bg bg--advanced-tricks'
            },
            {
                id: 6,
                name: 'Party Tricks',
                desc: 'Backstall, Handstand, Penguin, Look Backwards',
                img_class: 'bg bg--party-tricks'
            },
            {
                id: 6,
                name: 'Useful Tricks',
                desc: 'Close Door, Ring Bell, Speak, Put Toys Away',
                img_class: 'bg bg--useful-tricks'
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
                name: 'Potty Training',
                desc: `If you just got your pup this guide will help him/her learn to use the restroom outside and not in your home. It does take some dedication at first, but know that after a few weeks it’ll get easier!`,
                difficulty: 'medium',
                items_needed: ['leash', 'wipes (for accidents)', 'positive attitude'],
                img: 'potty_training.jpg',
                steps: [
                    {
                        text: `Never scold your dog if he/she has an accident. Even if you scold your dog right after the accident, he/she will associate the scolding with you and not the actual accident.`,
                        img: ''
                    },
                    {
                        text: `If you just got your dog, take him/her out on walks frequently, say every 2 - 3 hours. This will prevent accidents and get your dog used to going outside.`,
                        img: ''
                    },
                    {
                        text: `Try catching him/her in act of pooping or peeing. Stop your dog right away and take him/her outside to do his/her business.`,
                        img: ''
                    },
                    {
                        text: `When your dog is relieving himself/herself outside, give praise by saying “Good Boy/Girl!”, in a very happy and uplifting voice and give treats.`,
                        img: ''
                    }
                ]
            },
            {
                id: 2,
                category_id: 1,
                name: 'Crate Training',
                desc: `Crates are a great way for dogs to become house trained. Because a dog’s natural instinct is to find contained shelter it will help your dog sleep and feel safe. Your dog will be reluctant to relieve himself/herself in his/her sleeping area so this will help with potty training`,
                difficulty: 'easy',
                items_needed: ['crate', 'treats', 'dog food'],
                img: 'crate_training.jpg',
                steps: [
                    {
                        text: `Never use the crate to punish your dog and never force it upon him/her. You want to build a positive association with the crate and let your dog feel inclined towards it.`,
                        img: ''
                    },
                    {
                        text: `Introduce the crate to your dog by leaving it in a place where you or your family spend a lot of time. Make it comfortable by adding toys or treats inside and leave the door open.`,
                        img: ''
                    },
                    {
                        text: `For the next few days feed your dog near the crate to increase this positive association. `,
                        img: ''
                    },
                    {
                        text: `Put a few treats next to the door of the crate. If your dog takes to them slowly start putting treats further and further into the crate. `,
                        img: ''
                    },
                    {
                        text: `When your dog starts entering the crate by himself/herself starting putting his/her food inside the crate, but keep the door open. `,
                        img: ''
                    },
                    {
                        text: `Once comfortable inside, close the door for short period of time. Be sure to stay next to the crate to make your dog feel comfortable and reward him/her with treats before entering and while in the crate. Over the next few days increase the amount of time your dog is in his/her crate.`,
                        img: ''
                    },
                    {
                        text: `When your dog feels comfortable with the previous steps start putting him/her in the crate and leaving the room. Start with 30 seconds and gradually increase the time as your dog gets comfortable.`,
                        img: ''
                    },
                    {
                        text: `Only give treats when your dog enters the crate, not when leaving, as you don’t want to rewards leaving the crate. `,
                        img: ''
                    },
                    {
                        text: `When your dog can stay in his/her crate (door closed) for more than 30 - 40 minutes you can start leaving him/her in the crate while living the house for short periods of time. `,
                        img: ''
                    }
                ]
            },
            {
                id: 3,
                category_id: 2,
                name: 'Name Recognition',
                desc: `If your dog names his/her name it’s a great way to get your pups attention and steer him/her away from distractions.`,
                difficulty: 'easy',
                items_needed: ['treats', 'dog', 'positive attitude'],
                img: 'name_recognition.jpg',
                steps: [
                    {
                        text: `Hold a treat in your hand, but not so it’s obvious to your pup. Say your dog’s name once and if he/she looks at you reward with a treat, if you have a clicker, use it when your dog does the command correctly. Make sure your tone is happy and uplifting to create a positive association with the name.`,
                        img: ''
                    },
                    {
                        text: `Wait for your dog to look away before repeating the exercise as you want to only reward when your dog is doing something else, then respond to his/her name.`,
                        img: ''
                    },
                    {
                        text: ` Repeat this exercise and over the next few days your dog will start to know his/her name. Be sure to always keep a happy tone. As your dog improves, practice around more distractions, say around family members or outside.`,
                        img: ''
                    }
                ]
            },
            {
                id: 4,
                category_id: 2,
                name: 'Sit',
                desc: `Sit is one of the most important and easiest skills for your dog to learn. It’s a foundation for self control and a great way to work with your dog.`,
                difficulty: 'easy',
                items_needed: ['treats', 'dog', 'positive attitude'],
                img: 'sit.jpg',
                steps: [
                    {
                        text: `Hold a treat out in front of your dog at a level about around his/her nose.`,
                        img: 'sit-1.svg'
                    },
                    {
                        text: `Say “sit” while moving the treat back along your dog’s head. If your dog starts backing up train him/her against a wall. You can also use a hand signal with your other hand to reinforce the command. Use a first for sit.`,
                        img: 'sit-2.svg'
                    },
                    {
                        text: `As your dog follows the treat, his/her head will move upwards brining his/her back slightly down into a sitting position.`,
                        img: 'sit-3.svg'
                    },
                    {
                        text: `Reward your dog with treats as he/she makes slight improvements. Once he/she sits reward with a verbal “Good Boy/Girl!” and treats. If you have a clicker, also click every time your dog sits on command to associate the clicking with a job well down.`,
                        img: 'sit-4.svg'
                    }
                ]
            },
            {
                id: 5,
                category_id: 2,
                name: 'Down',
                desc: `Down is a great building block for many other skills. It's also a great way to get your dog to calm down and stay well mannered. It'll be easier to teach down, once your dog knows how to sit.`,
                difficulty: 'easy',
                items_needed: ['treats', 'dog', 'positive attitude'],
                img: 'down.jpg',
                steps: [
                    {
                        text: `Get your dog to come to you and have him/her get into the sit position. `,
                        img: ''
                    },
                    {
                        text: `Place a treat near his/her nose. Now slowly move the treat towards the ground in between his paws.`,
                        img: ''
                    },
                    {
                        text: `If your dog tries to get up, you can put your other hand on his shoulder, but only gently. If your dog gets up, restart the training from the original sit position. Do not treat if you have to restart the training.`,
                        img: ''
                    },
                    {
                        text: `Once your dog completes the move on command, correctly reward him/her with a treat and an uplifting "Good Boy/Girl"`,
                        img: ''
                    }
                ]
            },
            {
                id: 6,
                category_id: 3,
                name: 'Come',
                desc: `Come is one of the most useful commands that you can use anywhere or anytime to get your dog to come to you.`,
                difficulty: 'easy',
                items_needed: ['treats', 'dog', 'positive attitude'],
                img: 'come.jpg',
                steps: [
                    {
                        text: `Position your dog in front of you, facing you, then slowly take a 2 - 3 steps back. Your dog should slowly start moving towards you. If he/she isn't moving towards you hold a treat out in front of you as you move back.`,
                        img: ''
                    },
                    {
                        text: `Once you get your dog moving, add a "come" command each time you start moving back. If you have a clicker, you can click each time your pup does this command correctly as well`,
                        img: ''
                    },
                    {
                        text: `Continue to reward with treats and verbal praise as your dog moves to you. Gradually increase the amount of time between treats as your dog gets better at this command.`,
                        img: ''
                    },
                    {
                        text: `Eventually you won't need the treats at all!`,
                        img: ''
                    }
                ]
            },
            {
                id: 7,
                category_id: 3,
                name: 'Place',
                desc: `Training your dog to go to his/her place is a great way to get him/her to settle down or get out from under your feet. Your pup should know the “down” command before learning this trick.`,
                difficulty: 'medium',
                items_needed: ['treats', 'mat', 'dog', 'positive attitude'],
                img: 'place.jpg',
                steps: [
                    {
                        text: `Find a bed or mat that you want to use as your dog’s place. Say “place” and use a treat to lure your pup to the spot.`,
                        img: ''
                    },
                    {
                        text: `Once all of your pup’s paws are on the mat, give a treat and verbal praise, if you’re using a clicker, “click”.`,
                        img: ''
                    },
                    {
                        text: `Repeat this a few times until your dog knows to go to the mat when you say “place”.`,
                        img: ''
                    },
                    {
                        text: `Once your dog is comfortable getting onto his matt when you say “place”, once he/she is on the matt give the down command and treat. Be sure to do the command immediately after “place”. Only treat if your pup does both the “place” and “down” command.`,
                        img: ''
                    },
                    {
                        text: `Now to increase the time your pup stays “placed” start increasing the time between when he/she goes “down” and you treat and give praise. This will teach your dog to be patient when you say “place”.`,
                        img: ''
                    },
                    {
                        text: `After a bit of practice your pup will know place!`,
                        img: ''
                    }
                ]
            },
            {
                id: 8,
                category_id: 3,
                name: 'Stay',
                desc: `Stay is an advanced version of down in that your dog will get in the lay position and stay until you release him.`,
                difficulty: 'medium',
                items_needed: ['treats', 'dog', 'positive attitude'],
                img: 'stay.jpg',
                steps: [
                    {
                        text: `Get your dog into the "Down" position.`,
                        img: ''
                    },
                    {
                        text: `Put your hand in front of you with your palm facing your dog. In a neutral tone, say "stay".`,
                        img: ''
                    },
                    {
                        text: `If your dog "stays" for a few second, reward him/her with a treat and a verbal praise. If he gets up, start over without treating.`,
                        img: ''
                    },
                    {
                        text: `While in the stay position with your palm facing your dog, reward him/her every few seconds. Increase the time between treat reward and praise gradually.`,
                        img: ''
                    },
                    {
                        text: `Release your pup by saying "Break" or "Free" and motioning your hand away from the position. No need to treat for this command.`,
                        img: ''
                    }
                ]
            },
            {
                id: 9,
                category_id: 3,
                name: 'Leave It',
                desc: `Leave it is a great command to get your dog to leave something alone. It’s especially good when you’re walking your dog as they tend to try to eat foreign, unsafe objects.`,
                difficulty: 'medium',
                items_needed: ['treats', 'dog', 'positive attitude'],
                img: 'leave_it.jpg',
                steps: [
                    {
                        text: `Sit down on the floor, with your dog sitting down in front of you. `,
                        img: ''
                    },
                    {
                        text: `Take a few treats in your hand and show it to your dog, but do not give it to him/her. Close your palm and wait until your dog leaves your hand alone. When he/she does this treat your pup, and give verbal praise. If you have a clicker, use it as soon as your dog looks away from your palm.`,
                        img: ''
                    },
                    {
                        text: `Repeat this until your dog is comfortable and used to looking away when your palm is closed. It this point, add the verbal cue “leave it”. Once your pup masters this you can start leaving your palm open so your dog gets used to leaving an object he/she can see.`,
                        img: ''
                    }
                ]
            },
            {
                id: 10,
                category_id: 4,
                name: 'Touch',
                desc: `This is a great trick to get your dog to come to you or to a certain spot. It's also great to direct your dog's attention away from any distractions.`,
                difficulty: 'easy',
                items_needed: ['treats', 'dog', 'positive attitude'],
                img: 'touch.jpg',
                steps: [
                    {
                        text: `Sit on the floor with your dog with your dog sitting in front of you. Place your hand up with your palm facing your dog at around the height of his nose, but about 6 inches - 1 foot form your dog.`,
                        img: ''
                    },
                    {
                        text: `Every time your dog touches your palm with his face reward him/her with a treat and a verbal praise. If you have a clicker, click every time your dog does this correctly.`,
                        img: ''
                    },
                    {
                        text: `Add a "Touch" verbal cue and every time your dog completes the trick correctly verbal praise and treat.`,
                        img: ''
                    },
                    {
                        text: `Over time your dog will associate your outstretched palm in any position as a "touch".`,
                        img: ''
                    }
                ]
            },
            {
                id: 11,
                category_id: 4,
                name: 'Kiss',
                desc: `Kiss is a cute and fun way to share love with your dog!`,
                difficulty: 'easy',
                items_needed: ['peanut butter or cream cheese', 'dog', 'positive attitude'],
                img: 'kiss.jpg',
                steps: [
                    {
                        text: `Take a small portion of peanut butter or cream cheese and place it on the spot where you’d like your dog to kiss (cheek is most common).`,
                        img: ''
                    },
                    {
                        text: `Now give the verbal cue “kiss” and lean the spot where you’ve put the peanut butter or cream cheese towards your pup. He/She should be eager to taste!`,
                        img: ''
                    },
                    {
                        text: `Practice this trick a few times a day and start to use less and less peanut butter or cream cheese until you don’t need any! `,
                        img: ''
                    },
                    {
                        text: `Always give verbal praise when your dog completes the action correctly. `,
                        img: ''
                    }
                ]
            },
            {
                id: 12,
                category_id: 4,
                name: 'Jump',
                desc: `A fun and cute way to get your dog airborne and moving!`,
                difficulty: 'medium',
                items_needed: ['treats', 'dog', 'positive attitude'],
                img: 'jump.jpg',
                steps: [
                    {
                        text: `Hold a treat or bully stick high in the air so that your dog has to jump up to touch it. As soon as your dog’s legs come off the ground, click and treat and give verbal praise. If your pup is having trouble, start out with just having your dog touch the stick, treat, or toy close to the ground, then gradually getting higher.`,
                        img: ''
                    },
                    {
                        text: `As your dog gets used to this motion add the verbal command “jump” and only treat when the action is completed correctly.`,
                        img: ''
                    },
                    {
                        text: `Keep doing this until your pup  jumps at your command. Gradually stop using treats or sticks and use your command instead. Click and treat whenever he/she does this.`,
                        img: ''
                    }
                ]
            },
            {
                id: 13,
                category_id: 4,
                name: 'Spin',
                desc: `A cute and fun circus trick to get your dog to spin in a circle..`,
                difficulty: 'easy',
                items_needed: ['treats', 'dog', 'positive attitude'],
                img: 'spin.jpg',
                steps: [
                    {
                        text: `Take a treat and put it on your dog’s nose. Ideally, we want them to be able to smell and even lick the treat, but not actually get it.`,
                        img: ''
                    },
                    {
                        text: `Slowly move your hand in the direction you want your dog to spin (teaching one direction at a time will be easier on your dog).`,
                        img: ''
                    },
                    {
                        text: `Once you have done a full circle, click or use your marker word and give your dog the cookie. Only praise and treat once your dog has done a full circle. Overtime your dog will associate your spinning hand as the command as well`,
                        img: ''
                    }
                ]
            },
            {
                id: 14,
                category_id: 5,
                name: 'Roll Over',
                desc: `Roll over is a fine and playful trick that is sure to be a show around friends and family.`,
                difficulty: 'medium',
                items_needed: ['treats', 'dog', 'positive attitude'],
                img: 'roll_over.jpg',
                steps: [
                    {
                        text: `Sit down on the floor and have your dog in the down position in front of you, facing you.`,
                        img: ''
                    },
                    {
                        text: `Using your hand lure your dog’s head to his shoulder. Try not to use treats to lure your dog as this will only distract.`,
                        img: ''
                    },
                    {
                        text: `Keeping your hand by his shoulder should encourage your pup to roll onto his/her side. Once your dog transitions to his/her side reward your dog and if you have a clicker, click it. Continue this step until your dog is comfortable getting onto and staying on his/her side.`,
                        img: ''
                    },
                    {
                        text: `Once your dog is comfortable with the above step, use your hand to lure your dog all the way to his/her other side, completing a roll. Click and reward once the full motion is done.`,
                        img: ''
                    }
                ]
            },
            {
                id: 15,
                category_id: 5,
                name: 'Handshake',
                desc: `A friendly and dapper way to shake your pup’s paw!`,
                difficulty: 'medium',
                items_needed: ['treats', 'dog', 'positive attitude'],
                img: 'shake.jpg',
                steps: [
                    {
                        text: `Have your dog sit in front of you and place your hand out in front of your dog.`,
                        img: ''
                    },
                    {
                        text: `Wait until your dog lifts his/her paw to touch your hand. Reward with a treat and verbal praise. If you have a clicker, click. If your pup doesn’t raise his hand, quickly and softly touch his paw, to encourage him/her to lift.`,
                        img: ''
                    },
                    {
                        text: `Continue to encourage your dog to lift his/her paw and reward when the trick is done correctly. Be sure to add the verbal cue “shake” once your pup gets comfortable with the trick.`,
                        img: ''
                    }
                ]
            },
            {
                id: 16,
                category_id: 5,
                name: 'Load',
                desc: `Load is a cute and useful tool to help get your pup get into a car, wagon or any other place.`,
                difficulty: 'hard',
                items_needed: ['treats', 'dog', 'pillow', 'blanket', 'raised surfaces', 'positive attitude'],
                img: 'load.jpg',
                steps: [
                    {
                        text: `Use a blanket or mat as a target. Place the blanket or mat on the floor and click and treat your dog for interacting with it. It’s best if you use an empty room where your dog won’t get easily distracted. Initially, click and treat for just looking at the blanket, sniffing it and then walking on it.`,
                        img: ''
                    },
                    {
                        text: `Place the blanket higher say on top of a few books of blocks. Praise, treat, and click for your dog walking over to the blanket.`,
                        img: ''
                    },
                    {
                        text: `Place the blanket on some large pillows and click and treat for walk on top it. If your dog doesn’t walk onto it, you can lure him/her with a treat.`,
                        img: ''
                    },
                    {
                        text: `Once your dog masters the previous steps, place the blanket on a couch or any other raised surface. Click, treat and give verbal praise when your dog completes the action. Give the verbal cue “load” or “jump” (totally up to you) to prompt your dog to do the action. (Note, if you dog doesn’t jump onto the couch or surface you can lure him/her with a treat).`,
                        img: ''
                    },
                    {
                        text: `Once your dog masters the above steps, now put the blanket in your car or wherever you want your dog to jump or load into. Follow the same steps to encourage your dog onto the surface. Once he/she masters the move you can take away the blanket.`,
                        img: ''
                    }
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

    getReveiews() {
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
