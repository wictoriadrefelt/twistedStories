
import { Step } from "./styles/types";

export const gameDataList: Step[] = [{
    id: 1, 
    story: 'The quietness is overwhelming \n Your mouth is dry. \n Your head hurts. \n What happened? \n Has is always been this quiet? \n Was it always this quiet? \n You look around you and all you see is nothing. Dark wood? \n There is a faint smell of something that you recognize, but what is it? Have you been here before? \n After a moment of adjusting your eyes to the dim-light you make out a door at the very far end of the room you appear to find yourself in \n Room? No, cabin. Yes, you know that is it a cabin. But how? Have I been here before? \n The hairs on your neck stand up and you dont know what it is, but you know that you have to leave. \n Now.',
    choices: {
        one: {text: 'Look around some more before leaving.', path: 3},
        two: {text: 'Exit through the door. ', path: 2}
    }
}, {
id: 2, 
    story: "You walk through the busted up, old wooden door. You're surprised that it was in any condition to hold anything out in the first place \n It is darker out here somehow. Like someone has compressed the darkness and it now sits like a heavy, blanket over your eyes. \n It's no longer quiet. Thousands of sounds that you can not comprehend. It feels like your head is about to explode. \n And now you can not see. Anything. \n You fall down to the ground and you feel moss underneath your fingers. Or is it moss? At this point your head is too far gone. The darkness consumes you. " ,
    choices: {
        one: {text: 'Start over', path: 1},
        two: {text: '', path: 1}
    }
},
{
    id: 3, 
        story: "To the left of you, you notice something lying on the ground. If you would not have looked closer you would have never seen it, but now that you have locked eyes on it you see clearly what it is. It seems to be a tiny flashlight. Very convenient amongst all this darkness. ",
        choices: {
            one: {text: 'Pick up flashlight', path: 4},
            two: {text: 'Leave the flashlight and exit through the door', path: 2}
        }
    },
    {
        id: 4, 
            story: "You feel safer now that you have a source of light. \n The darkness is heavy within the cabin but somehow when you open the busted up, old wooden door, the darkness apears to be heavier outside of the cabin. Like someone has thrown a dark blanket over your eyes. \n You quickly press the on-button on the flash-light and every fiber of your being is begging that it will work. \n Light. \n Not as strong as you would have liked it. But strong enough to pierce through at least some of the overwhelming darkness. There are trees everywhere you look. You are in a forest. Familiar to you somehow. \n The forest grows thick everywhere you look but to your left the trees seem to be slightly less stacked together. \n You feel as if this hold significance. Go left or go right? ",
             choices: {
                one: {text: 'Go left', path: 5},
                two: {text: 'Go right', path: 6}
            }
            
        },
        {
            id: 5, 
                story: "At first it seems like you can squeeze through the first line of trees. But the further you get, you feel yourself somehow getting more and more stuck. Is it the branches? Is the ground? \n You can't feel where you stop and the forest begins. Your flash-light gets lost in what is now a hybrid of you and forest.\n The quitness is no longer there. Your head fills with sounds. Thousands of sounds that you can not understand. Your head feels like it's about to explode. \n And you can't see. Anything. \n You fall down to the ground and you feel moss underneath your fingers. Or is it moss? It feels more organic, like flesh or skin. \n At this point your head is too far gone. The darkness consumes you. ",
                               choices: {
                    one: {text: 'Start over', path: 1},
                    two: {text: '', path: 1}
                }
            },
            {
                id: 6, 
                    story: "It's a struggle to get through the thick line of trees. Thorns and branches tear at your clothes and your skin, it almost like the trees are violently trying to fight you. The cuts go deeper, and the trees feel more violent and aggressive for every passing minute. \n Just as you think you won't be able to last a minute longer the trees thin out. You step out in to what you can only discribe as a glade, but the darkness still remains. \n You wonder how there is no more light out here than within the trees. It must be night? But when was night ever this dark? ",
                                 choices: {
                        one: {text: 'Continue further', path: 7},
                        two: {text: '', path: 7}
                    }
                },
                {
                    id: 7, 
                        story: "Suddenly there is a sound.  \n From a place without any sound it's earpiercing, although it's probably no more than a whisper really. \n You look up and you see the contours of something. An animal? You make out horns, like on a stag? But this is not a stag, this much you know. \n When you try and make out what it is your facing the unknown creature vanishes in to the trees facing you. As soon as the creature disapears the silence is back again", 
                            choices: {
                            one: {text: 'Follow the creature', path: 8},
                            two: {text: 'Stay in the glade ', path: 9}
                        }
                    },
                    {
                        id: 8, 
                            story: "Woods will consume you. ",
                                                      choices: {
                                one: {text: 'Start over', path: 1},
                                two: {text: '', path: 1}
                            }
                        },
    
                    {
                        id: 9, 
                            story: "The sight of the creature moving away made you earie. \n You decide to not follow it as you watch it leave. \n You look towards the ground where the creature just stood. Something lies there.  ",
                                choices: {
                                one: {text: 'investigate object', path: 10},
                                two: {text: 'leave it', path: 1}
                            }
                        },
                        {
                            id: 10, 
                                story: "Where the creature stood lies some form of compass. \n You remember. Something. But it wont spin as you move? Is it broken? Or is the fault not with the compass, rather than with this place? \n Somehow it feels like nothing normal would be as it would be here. You start walking towards where the arrow points although you don't see the point. But what else is there? \n What now. Nothing.", 
                                      choices: {
                                    one: {text: 'Continue', path: 11},
                                    two: {text: '', path: 11}
                                }
                            },
                            {
                                id: 11, 
                                    story: "The quietness is overwhelming. \n Your mouth is dry. \n Your head hurts. \n What happened? \n Has is always been this quiet? Was it always this quiet?",
                                        choices: {
                                        one: {text: 'You made it out alive? Or did you? It seems like everything just starts again here. Would you like to continue the loop?', path: 1},
                                        two: {text: '', path: 1}
                                    }
                                },

]