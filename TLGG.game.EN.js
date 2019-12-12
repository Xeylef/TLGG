/* global undum, npcloc, newvol */
// ---------------------------------------------------------------------------
// This file defines the game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init. MANY more have been added
// ---------------------------------------------------------------------------


/*
 TODO
 
 
 
 
 
 
 */





ImageArray = ["media/img/Green.png", "media/img/Red.png", "media/img/Purple.png", "media/img/Blue.png"];

function getRandomImage() {
    var num = Math.floor(Math.random() * 4);
    var img = ImageArray[num];
    document.getElementById("title2").src = img;
}



getRandomImage();
var globalaccesscharacter;
fusidy = true;
gfrom = "work/firstday";
fastmode = false;
curhost = "";
nightfun = false;
spark = false; //set to false after every transer
headingholder = "";
headingholder2 = "";

alt = "";
alt2 = "";
blargery = "#place";
/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "diaperxeylef";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "0.05";
/*
 undum.game.beforeAction = function (character, system, situation, action) {
 system.write("");
 };
 */
/* The situations that the game can be in. Each has a unique ID. */

//<img src='media/img/giftest.gif' class='float_right'>
undum.game.situations = {

    nowfemale: new undum.SimpleSituation(
            "",
            {
                heading: function () {
                    return "";
                },
                actions: {
                    "explore": function (character, system, action) {
                        transer();
                        parer("Just the thought of touching yourself down there sends shivers down your spine. The actual act of it turns out to\
                        be surprisingly difficult. You manage to find a good spot but end up just getting yourself worked up. And even worse its\
                        getting late in the morning. </p><p> Pulling your diaper back into place gives you a surprise though, it feels REALLY good pressed against your new pussy!\
                        Rubbing and pushing against the front of the diaper sends real waves of excitement through you. If only you had a vibrator...");
                        oper(system, "./find", "Go find the googirl");
                    }, //function close
                    "find": function (character, system, action) {
                        transer();
                        parer("The googirl has a very special breakfast ready. Fruit and buttered toast with bananas and cinnamon... its the\
                       most girly breakfast you have ever seen. The googirl also looks extra pleased with herself, gesturing to your body as if to ask what you think!\
                       </p><p> She seems confused when you don't immediately thank for for doing this to you. She gets something from upstairs and returns holding the packaging for your pink\
                       diapers. She points to a single sentence on the package.");

                        parer("Feminine diapers, for those that want to feel like a girl again!");
                        parer("Its hard to argue against her logic. Even explaining they are meant for females to feel young.\
                        You did pick them and there were other choices. ");

                        oper(system, "./dealwith", "Accept your fate", "./demand", "Demand her to change you back", "./thank", "Thank her");
                    }, //function close
                    "demand": function (character, system, action) {
                        transer();
                        parer("You strongly encourage her to change you back but she seems confused. A few more times pointing to the pink diaper,\
                         which you are still wearing. Her arms wave around as the soundlessly words things as she tries to explain something but\
                        you just can't follow it. Eventually she gives up and sighs.");
                        oper(system, "./dealwith", "Accept your fate");
                    }, //function close
                    "dealwith": function (character, system, action) {
                        transer();
                        parer("You get your phone and make call into work explaining your situation to your boss. Unsurprisingly she doesn't believe you\
                        but after revealing a few company secrets she is willing to accept this for now. Its a world with odd creatures and strange things\
                        have been known to happen. She says to come to the office so you and she can work this out. She doesn't sound happy.");
                        oper(system, "morning/breakfastdiaper", "Finally get to breakfast");
                    }, //function close
                    "thank": function (character, system, action) {
                        transer();
                        parer("She raises her arms and cheers, so happy she did something you liked! Still this is a huge change to get use to\
                       but at least this is not completely unwelcome. It might even be fun. She gives you a hug completely covering your new breasts\
                       in goo, the feeling is strangely pleasing as it caresses your nipples. However you hear a giggle from her as a bit of slime\
                        purposefully flows into your diaper to play with your clit teasingly only to pull away with a wink. If only\
                        you didn't have to work today");
                        oper(system, "./dealwith", "Call up work and sort this out");
                    } //function close
                }//actions close
            }//options close
    ),
    //1 5 9 13
    ////////////////////////////////////////////////////////////////////
    //		 DAILY LOOP                                           //
    ////////////////////////////////////////////////////////////////////
    //////// PART 1 Morning       
    
    //////// PART 2 work/noon

//////////////// PART 3 Evening at home
    eveninghome: new undum.SimpleSituation(
            "", {
                heading: function () {
                    return "Home";
                },
                actions: {
                    "first": function (character, system, action) {
                        transer();
                        //ambi("idle");
                        system.setQuality("desperation", character.qualities.desperation + character.sandbox.despmod);
                        system.setQuality("timeofday", 3);
                        character.sandbox.emergdiaper = character.sandbox.diaperowned[0];
                        parer("You arrive home in the evening, it has been a long weird day but its over now. With any luck the rest of the\
                        week will go more smoothly. Besides dealing with diapers for a few days can't be that hard. A few of the diapers get\
                        stashing in case of an emergancy later.\
                        </p><p>You get something to eat and relax for a bit, though no sign of the googirl.\
                        It isn't until you get ready for bed that you find her. While brushing your teeth you discover her sleeping in\
                        the bathtub. Only about half her form has liquefied into a puddle. Her chest up is resting against the back of the tub\
                        as if she were just sitting and leaning back.\
                        ");
                        oper(system, "./bedtime", "Quietly head to bed");
                    }, //function close
                    "start": function (character, system, action) {
                        transer();
                        system.setQuality("timeofday", 3);

                        //ambi("idle");

                        //CHance of googirl asking to join player in bed after 1 week.
                        //diaper events 
                        //
                        eveningevents = (rnd());
                        console.log("testing " + eveningevents);
                        gfrom = "eveninghome/eveningreturn";
                        //system.doLink("usediaper/wear");
                        /* 
                         if (character.qualities.desperation>90){
                         character.sandbox.fails+=1;
                         system.setQuality("desperation", 0);
                         
                         // THIS CANT HAPPEN
                         system.doLink("usediaper/accident");
                         }else{
                         system.setQuality("desperation", character.qualities.desperation +10+ character.sandbox.despmod);
                         oper(system,"./relax","Relax","usediaper/diapercheckhome","Manage your diaper situation");
                         
                         }
                         oper(system, "./relax", "Relax", "usediaper/diapercheckhome", "Manage your diaper situation");
                         */
                        character.sandbox.operex = false;
                        oper(system, "./relax", "Relax");
                        spark = true;
                        if (character.qualities.desperation > 50 && character.sandbox.continent) {

                            //continent
                            if (character.sandbox.diaper.name == "none") {
                                //no diaper heh
                                oper(system, "usediaper/wear", "Put on a diaper", "usediaper/bathroom", "Use the bathroom");
                            } else {
                                //ok they are wearing
                                if (character.sandbox.filled == 0) {
                                    //diaper is clean
                                    oper(system, "usediaper/remove", "Remove your diaper", "usediaper/fill", "Use the diaper");
                                } else {
                                    //wearing a used diaper
                                    oper(system, "usediaper/ask", "Ask the googirl to help change your diaper");
                                    spark = true;
                                    oper(system, "usediaper/remove", "Attempt to remove the diaper", "usediaper/fill", "Use the diaper again");
                                }//diaper used or not close
                            }//wearing diaper or not close

                        } else if (character.qualities.desperation > 90) {
                        } else {
                            //below 50 desperation incontinent or not. good to go
                            if (character.sandbox.diaper.name == "none") {//diaper on or off
                                alt = false;
                                oper(system, "usediaper/wear", "Put on a diaper");
                            } else {
                                oper(system, "usediaper/remove", "Remove the diaper", "usediaper/ask", "Ask the googirl to check your diaper");

                            }
                        }




                    }, //function close
                    "eveningreturn": function (character, system, action) {
                        transer();
                        //ambi("idle");

                        character.sandbox.clothed = false;
                        clother();


                        oper(system, "./sleep", "Get some sleep");


                    }, //function close
                    "bedtime": function (character, system, action) {







                        system.doLink("./bedtime2");

                    }, //function close
                    "bedtime2": function (character, system, action) {
                        transer();
                        //TONS of plans here....
                        if (character.sandbox.plot > 6) {// Plot hook
                            //start of bedtime
                            // Could be wearing or not.

                            parer("You head to bed and glance over at your supply of diapers. You might need one in the night, or you could\
                            hope for the best and risk it");


                            //  parer(character.sandbox.diaper.stuck);
                            //oper(system,"","");


                            oper(system, "./wear", "Put on a diaper", "./sleep", "Sleep undiapered");

                        } else { /// Beginning of Plot area

                            //("idle");
                            character.sandbox.clothed = false;
                            clother();
                            parer("You head to bed and glance over at your supply of diapers. You might need one in the night, or you could\
                            hope for the best and risk it");
                            oper(system, "./wear", "Put on a diaper", "./sleep", "Sleep undiapered");
                        }

                    }, //function close
                    "wear": function (character, system, action) {
                        transer();
                        gfrom = "eveninghome/eveningreturn";
                        //shopping will resupply diapers.
                        // random forced diaperings will pull from diaper owned list.
                        alt = true;
                        system.doLink("usediaper/wear");
                        /*
                         character.sandbox.diaper=diapers[character.sandbox.diaperowned[0]];
                         parer(character.sandbox.diaper.puton);
                         character.sandbox.clothed=false;
                         clother();
                         */
                        //oper(system,"./sleep","Get some sleep");
                    }, //function close
                    "sleep": function (character, system, action) {
                        transer();
                        character.sandbox.sleepevent = "";
                        ////// Possibility of googirl asking to join the player in bed


                        //console.log("in evening code 1 "+character.sandbox.sleepevent);



                        if (rnd() > 5 && character.sandbox.sleepwith == false) {
                            system.write(character.sandbox.img.gg);
                            parer("Just as you get into bed you hear a knocking at the bedroom door. The googirl\
                            stick her head around the corner, she doesn't say anything of course. You ask if everything is alright\
                            and she kind of shrugs. Pointing at your bed and looking looking adorable she then points to herself.\
                            You realize she is asking to sleep with you!");


                            console.log("in evening code2" + character.sandbox.sleepevent);
                            oper(system, "./allow", "Let her stay", "./no", "Tell her not tonight");
                        } else if (character.sandbox.sleepwith && (rnd() > 5)) {
                            system.write(character.sandbox.img.gg);
                            parer("You are starting to fall asleep when you suddenly feel an extra weight on the bed.\
                            There isn't much you can do as the googirl snuggles up against you. She feels feels so nice against you\
                            its hard to consider argueing with her");
                            console.log("in evening code 3" + character.sandbox.sleepevent);
                            character.sandbox.sleepevent = "googirl";
                            oper(system, "./beeep", "Snuggle into the googirl and fall asleep");
                        } else {

                            console.log("in evening code 5" + character.sandbox.sleepevent);

                            oper(system, "morning/start", "BEEEEP BEEEP BEEEP");
                        }



                    }, //function close
                    "relax": function (character, system, action) {
                        transer();
                        ////////// NEED MORE STUFF HERE
                        system.write(character.sandbox.img.gg);
                        parer("You spend the evening at home. The googirl is both attentive and surprisingly good company! She finds\
                  most of what you say funny or at least you hope thats what she is laughing at. Still when it comes to having someone who listens she can't be beat.");






                        oper(system, "./eveningreturn", "Enjoy the evening");
                    }, //function close
                    "no": function (character, system, action) {
                        transer();

                        parer("With a sad nod she leaves and heads back downstairs letting you sleep alone. After some time you finally manage to drift off to sleep.");
                        oper(system, "./beeep", "Finally get some sleep");
                    }, //function close
                    "allow": function (character, system, action) {
                        transer();
                        character.sandbox.sleepwith = true;
                        character.sandbox.sleepevent = "googirl";
                        system.write(character.sandbox.img.gg);
                        parer("She lets out a happy squeak and rather literally dives onto the bed!! You are suddenly engulfed in goo as she sloshes around on the bed\
                    cuddling around you. Its hard to believe how comfortable floating slightly off the bed suspended in goo can feel! You managed to fall asleep in this\
                    strange snuggle surprisingly easy");
                        oper(system, "./beeep", "Sleep well enjoying the googirls cuddles");
                    }, //function close
                    "beeep": function (character, system, action) {
                        transer();


                        console.log("in evening code" + character.sandbox.sleepevent);


                        oper(system, "morning/start", "BEEEEP BEEEP BEEEP");
                    } //function close
                }//actions close
            }//options close
    ),

  
    dayhome: new undum.SimpleSituation(
            "", {
                heading: function () {
                    return "";
                },

                actions: {
                    "start": function (character, system, action) {
                        //transer();
                        character.sandbox.operex = true;
                        gfrom = "eveninghome/eveningreturn";
                        testye = rnd();
                        var testye2 = rnd();
                        if (testye2 > 5) {
                            testye = 1;

                        }
                        console.log("ok which scene is broken" + testye);
                        system.write(character.sandbox.img.gg);
                        switch (testye) {

                            case 10:
                                parer("You open the door to discover a very strange sight. The googirl has snagged one of your spare diapers and has put it on! Much of her goo\
                            has absorbed into it causing it to be comically inflated around her. She wiggles her diapered butt at you teasingly. Rather amusingly\
                            it turns into a bit of a chase to retrieve your stolen diaper.");
                                oper(system, "eveninghome/start", "Think about getting ready for bed");
                                break;
                            case 1:
                                parer("You get home and relax for the day. Trying to spend some not not worrying about diapers");
                                oper(system, "eveninghome/start", "Think about getting ready for bed");
                                break;
                            case 2:
                                parer("Walking into the living room you find the googirl who seems rather excited about something. She grabs your hand and\
                        guides you to the backyard. Before you is a little picnic! She has set out a blanket under a tree on the grass. A small sandwich\
                        and pitcher of what is hopefully lemonade. </p><p>You end up spending most of the day with her just enjoying each others company.");
                                oper(system, "eveninghome/start", "Think about getting ready for bed");
                                break;
                            case 3:
                                parer("Its mid day and you don't feel like doing anything productive. You start to look for something to do when the googirl peeks out\
                        from behind a corner holding something. Thankfully its nothing weird, just two dvds. She waves them at you obviously wanting\
                        you to pick one.");
                                oper(system, "./scare", "The scary one", "./romantic", "The romantic one");
                                break;
                            case 4:
                                parer("Being home during the day allows you to take care of a few odds and ends, mostly paying bills and such.");
                                oper(system, "eveninghome/start", "Think about getting ready for bed");
                                break;
                            case 5:
                                parer("When you open the door a surprise awaits you, on the floor are rose petals! Clearly the work of a rouge googirl.\
                                Following their path leads outside where you find her kneeling down planting a bush. Somehow and from somewhere she\
                                managed to get a hold of a small rose bush! She smiles at you and waves at the bush and you seeming to ask if you like it.\
                                Apparently she is a rather good gardener as well. She gives you a hug and lets you do your own thing for the rest of the day.");
                                oper(system, "eveninghome/start", "Think about getting ready for bed");
                                break;
                            case 6:
                                parer("There is a loud bang from somewhere in the house! Rather concerned you\
                                search around only to discover the googirl is in BATTLE!..... With a mouse, which scurries behind the fridge. Unlike a stereotypical scared\
                                female on a stool.... she is rather actively trying to chase it down! There is goo EVERYWHERE And several\
                                objects have hit the floor. She puts on the best innocent face she can as you pass though to the living room\
                                pretending like you didn't see anything.");

                                oper(system, "eveninghome/start", "Think about getting ready for bed after she has cleaned up");
                                break;
                            case 7:
                                parer("You spend some time sitting down browsing on the net to catch up with current events.\
                                You are surprised when you wet globs of goo land on your shoulders, and begin giving you the BEST massage you have ever experienced!\
                                Suddenly the whole diaper thing is starting to seem like not a bad trade off.");

                                oper(system, "eveninghome/start", "Think about getting ready for bed");
                                break;
                            case 8:
                                parer("The googirl catches your attention obviously planning something, she seems to have that look in her eye. The one that you know\
                        means trouble! However what greets you is a warm bath filled with bubbles! She has made you a bubble bath! Its kind of a silly thing\
                            but it turns out bubble baths can be really nice, even if they are kinda girly. ");


                                oper(system, "eveninghome/start", "The day passes as its soon time for bed");
                                break;
                            case 9:
                                if (character.sandbox.diaper.name == "none") {

                                    parer("You start relaxing and end up dozing off on the couch. You awaken to find\
                                        an absolutely massive diaper strapped around your bottom! Its even overfilled with slime!\
                                Nearby you hear the googirl giggling in her cute squeaky way at the prank she has pulled!\
                                You end up spending a good hour trapped in the diaper so filled with goo you cant even walk!");
                                    oper(system, "eveninghome/start", "It is getting late by the time you are freed");


                                } else {

                                    parer("You start relaxing and end up dozing off on the couch. You awaken to find\
                                        your diaper is absolutely overfilled with slime! Even worse the slime isn't leaking like normal its actually making the diaper BIGGER!\
                                Nearby you hear the googirl giggling in her cute squeaky way at the prank she has pulled!\
                                You end up spending a good hour trapped in the diaper so filled with goo you cant even walk!");
                                    oper(system, "eveninghome/start", "It is getting late by the time you are freed");

                                }



                                break;
                            default:
                        }

                        //oper(system,"dayhome/start","DEGUG");

                        //oper(system,"","");
                    }, //function close
                    "romantic": function (character, system, action) {
                        transer();
                        parer("The story is sappy and a bit boring but still comedic enough to hold your interest. Meanwhile the googirl\
                       is absolutely enthralled even seeming to cry at the really touching ending! Afterwards she snuggles into you on the\
                       couch just enjoying being with you.");
                        oper(system, "eveninghome/start", "Think about getting ready for bed");
                    }, //function close
                    "scare": function (character, system, action) {
                        transer();
                        parer("As expected the googirl may be an unusual creature, but she is still susceptible to clinging to a\
                       loved one during scary movies! Although she is better at it than humans are... Nearly engulfing you during\
                       a particularly startling part. Still in the end she seemed to enjoy it, if the long kiss at the end is anything\
                       to judge by.");
                        oper(system, "eveninghome/start", "Think about getting ready for bed");
                    }, //function close
                    "returnhome": function (character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } //function close
                }//actions close
            }//options close
    ),

    /////////////////////////////////////////////////////////////////////
    //		 SITUATION TEMPLATES                                    //
    /////////////////////////////////////////////////////////////////////
    simpler: new undum.SimpleSituation(
            "", {
                heading: function () {
                    return "";
                },
                actions: {
                    "simple": function (character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    }, //function close

                    "r1": function (character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } //function close
                }//actions close
            }//options close
    ),
    complex: new undum.SimpleSituation(
            /* "<p>\
             </p><p>\
             <table class=transient border='1' style='width:100%'><tr>\
             <td style='text-align:center;'><a href=./morning  class=transient> Get up and finish your morning routine </a></td>\
             </tr></p> "
             */
            "", {
                heading: function () {
                    return (((headingholder == "Your") ? headingholder : (curhost + "'s")) + " Living Room");
                },
                enter: function (character, system, action) {
                    if (headingholder == "Your") {
                        system.doLink("./move");
                    } else {
                        system.doLink("./move");
                    }
                }, //function/enter close 
                actions: {
                    "simple": function (character, system, action) {
                        transer();
                        parer("" + alt);
                        oper(system, "", ""); //"./discuss"
                    }, //function close
                    "r1": function (character, system, action) {
                        transer();

                        /*
                         alt=(true)?"":"";
                         alt2="";
                         parer(""+alt);
                         //</p><p>
                         //</p><br><p style='text-align:center'>
                         
                         oper(system,"",""); //"./discuss"
                         ((headingholder == "Your")? headingholder : (curhost + "'s"))
                         if(!knower("cocked")){
                         knower("cocked",true);
                         }else{}rgb(255, 233, 255)
                         parer("<p  class='transient' style='rgb(255, 233, 255);'>LEARNED:(TT) Thought Transfer");
                         system.doLink("transformation");
                         system.setQuality("timeofday", character.qualities.timeofday + 1);
                         //system.write("<p></p>");
                         parer("<p  class='transient' style='color:rgb(255, 14, 100);'>LEARNED:(TT) Thought Transfer");
                         headingholder="";
                         system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                         system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
                         
                         
                         if (undum.isInteractive()){
                         
                         
                         
                         
                         } else {
                         
                         ****=system.xeyvars[character.sandbox.xeyvarnum];
                         character.sandbox.xeyvarnum++;
                         console.log("name is but non interactive " + *****);
                         }
                         system.xeyvarcall(*****);
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         switch (character.sandbox.host.host){
                         case "keagen":
                         
                         break;
                         case "bret":
                         
                         break;
                         case "mark":
                         
                         break;
                         default:
                         }
                         character.sandbox.control=true;
                         */

                    } //function close
                }//actions close
            }//options close
    ),
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////// REQUEST MATRIX/////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////d////

    reqmatrix: new undum.SimpleSituation(
            "",
            {
                //displayOrder: 1,
                choices: "#choice",
                enter: function (character, system, from) {
                    parer("<h1><p class=transient>Choose a Request</p><h1>");
                }//exit close
            }//options close
    ),
    // CHOICES BEGIN HERE
    nothingatmoment: new undum.SimpleSituation(
            "",
            {
                // CHOICE #1                   
                heading: "Nothing at the moment", //Choice text displayed
                tags: ["choice"],
                canView:
                        function (character, system, host) {
                            return true; //true or false to see if option available
                        },
                displayOrder: 2,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix

                            system.doLink("morning/morningreturn");
                        }
            }
    ),
    googirlchat: new undum.SimpleSituation(
            "",
            {
                //Primary option                   
                heading: "Just spend some time with her", //Choice text displayed
                tags: ["choice"],
                canView:
                        function (character, system, host) {
                            return true; //true or false to see if option available
                        },
                displayOrder: 1,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix
                            
                            system.doLink("googirlchatsit/first");
                        }
            }
    ),
    goototalkamount: new undum.SimpleSituation(
            "",
            {
                // CHOICE for checking progress                   
                heading: "Ask how close to being able to talk she is", //Choice text displayed
                tags: ["choice"],
                canView:
                        function (character, system, host) {
                            return true; //true or false to see if option available
                        },
                displayOrder: 3,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix

                            system.doLink("./asky");
                        },
                actions: {
                    "asky": function (character, system, action) {
                        transer();

                        var fff = Math.round(((character.sandbox.goototalk) / character.sandbox.gooneeded) * 4);


                        switch (fff) {

                            case 0:
                                system.write(character.sandbox.img.ggpout);
                                parer("The googirl seems confused when you ask about it, gesturing to her still mostly translucent body.\
                                       You really havent managed to produce much goo for her yet. But it does seem to indicate this will take\
                                   much more time than you expected.");

                                break;
                            case 1:

                                system.write(character.sandbox.img.ggunamused);
                                parer("You ask about how much more goo she will need and she takes a moment to think about it. You can kinda\
                                   tell that she less translucent than before, but not by much. All she can do is give you a shrug and gives you a cute\
                                   kiss on the cheek.");



                                break;
                            case 2:
                                system.write(character.sandbox.img.gg);
                                parer("When you ask her about the whole talking thing she seems rather excited. Holding up one of her hands she\
                                    concentrates on it draining the color from her body into the hand. Soon you can't see through it but it doesnt last\n\
                                    very long. She sighs but still looks hopefull and happy! Just from how diffrent her color is now, you still have a ways to go.");


                                break;
                            case 3:
                                system.write(character.sandbox.img.ggunamused);
                                parer("Before you even ask its pretty obvious significant progress has been made. She is getting very close to no longer being translucent!\
                                   When you do ask her about it, a smile and soft blush is about all you get out of her. Still from how happy she looks its pretty\
                                   clear you are doing really well.");


                                break;
                            case 4:
                                system.write(character.sandbox.img.ggunamused);
                                parer("You ask her about how much more goo she needs and how much longer it will take. With all the goo you have managed to provide her with..... it can't\
                                be much longer. Her body is hardly translucent at all. She doesn't even try to concentrate the goo in one spot this time. Just looks at you and\
                                leans forward giving you a deep kiss. Pulling back she makes a gesture with her hand as if to say 'just a little bit more!'. Her expression\
                                is one of such hope. Its clear she has been dreaming of this for a long time and now it's almost here.");


                                break;
                            default:
                                parer("alright there is an error.... code" + fff);

                        }
                        system.animateQuality("suspicion", 0, {xeycolor: "linear-gradient(to right, #33ccff 0%, #ff99cc " + 100 + "%)",
                            title: "",
                            displayValue: false,
                            animatey: false,
                            from: (character.sandbox.goototalk / character.sandbox.gooneeded),
                            to: (character.sandbox.goototalk / character.sandbox.gooneeded)});


                        oper(system, "morning/morningreturn", "Continue on with the day");
                    }, //function close
                    "r1": function (character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } //function close
                }
            }
    ),
    diapersuitremove: new undum.SimpleSituation(
            "",
            {
                // CHOICE #1                   
                heading: "Spend the day trying to remove the suit", //Choice text displayed
                tags: ["choice"],
                canView:
                        function (character, system, host) {
                            return character.sandbox.wanttoremove; //true or false to see if option available
                        },
                displayOrder: 1,
                enter:
                        function (character, system, from) {

                            character.sandbox.wanttoremove = false;
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix
                            character.sandbox.goototalk += character.sandbox.filled;
                            system.animateQuality("diapercap", (character.sandbox.filled / character.sandbox.diaper.cap) * 100, {displayValue: false, from: character.qualities.diapercap / 100, to: 0});

                            character.sandbox.filled = 0;
                            system.setQuality("timeofday", 3);
                            system.setQuality("desperation", character.qualities.desperation + character.sandbox.despmod);
                            character.sandbox.clothed = false;

                            character.sandbox.diaper = diapers["none"];
                            clother();
                            system.write(character.sandbox.img.gg);
                            parer("You and she both set aside the day to focus on getting you out of the diapersuit!\
                                 It takes all morning struggling with it to get the diapersuit open.\
                                   Your mitted hands make it even harder, unable to grip at any of its surfaces to pull on.\
                                   There is no doubt in your mind that the suit is really meant to be worn for days at a time. Even worse than the googirls slime\
                                   the suits edges seem almost fused with your skin! It is noon before you manage to finally peel the last parts of it off your body.\
                                   The process leaves you exausted. Almost like an addiction, you already feel desperate to get back into it's warm comfy embrace.");


                            oper(system, "eveninghome/start", "Relax for a while finally free of the suit");
                        }
            }
    ),
    reqaskforchange: new undum.SimpleSituation(
            "",
            {// CHOICE #1    

                heading: "Ask her to change your diaper", //Choice text displayed
                tags: ["choice"],
                canView:
                        function (character, system, host) {
                            return (character.sandbox.diaper.name != "none"); //true or false to see if option available
                        },
                displayOrder: 1,
                enter:
                        function (character, system, from) {


                            gfrom = "morning/afterbreakfast";
                            system.doLink("usediaper/ask");
                        }
            }
    ),

    /////////////////////////////////////////////////////////////////////
    //						 LOCATIONS             //
    /////////////////////////////////////////////////////////////////////
    locations: new undum.SimpleSituation(
            "",
            {//  "<h1><p class=transient>Choose a location</p><h1>",
                //displayOrder: 1,

                enter: function (character, system, from) {
                    character.sandbox.operex = false;
                    character.sandbox.stalltyped = false;
                    if (character.sandbox.foodramen) {
                        parer("You are feeling a bit weak and tired from only eating ramen"); //true or false to see if option avalible

                    }
                    gfrom = "locations";
                    alt2 = "";
                    system.setQuality("timeofday", character.qualities.timeofday + 1);
                    system.setQuality("desperation", character.qualities.desperation + character.sandbox.despmod);
                    if (character.qualities.desperation > 90 && character.sandbox.continent) {
                        // CHARACTER HAS TO USE BATHROOM!
                        // parer("Your stomach gurgles insistently at you as the slime beings to build pressure. You know this feeling by now\
                        // and that you won't have long");
                        system.doLink("locationsbathroomy");
                    } else if (character.qualities.desperation > 90) {
                        character.sandbox.filled += 25;
                        system.setQuality("desperation", 0);
                        system.animateQuality("diapercap", (character.sandbox.filled / character.sandbox.diaper.cap) * 100, {displayValue: false,
                            from: character.qualities.diapercap / 100,
                            to: (character.sandbox.filled / character.sandbox.diaper.cap)});

                        parer("You hardly even notice as your diaper expands slightly and grows heavier.\
                                Even as you check, the diaper is still filling! It actually takes concentration to feel the goo\
                                coming out! Not even a twinge of warning that you had to go. It feels even squishier\
                                now as the goo spreads through the diaper.");

                        //choices: ((character.qualities.desperation>90&&character.sandbox.continent)?"#bathroomy":"#choice") "#bathroomy",


                    }
                    if (character.sandbox.filled >= character.sandbox.diaper.cap) {




                        parer("All your plans come to a grinding halt as you feel the weight of your diaper. You give it a poke \
                 finding it completely full. Another accident could cause it to leak or worse. Since the goo also prevents\
                 you from removing the it, asking the googirl to change your diaper is your best bet. You remember the warning about over filling your diaper, they couldn't possibly know.");
                        gfrom = "locationsplace";
                        character.sandbox.punishnum += 1;
                        if (character.sandbox.punishnum > 2 && character.sandbox.punish < 2) {
                            character.sandbox.punishnum = 0;
                            character.sandbox.punish += 1;
                            character.sandbox.punishday = (character.sandbox.daynum);
                            system.write("<p style='color:rgb(219, 48, 199)'>You have over filled your diaper so many times you will really need\
                                                                to start wearing larger diapers!</p>");

                        }



                        oper(system, "usediaper/diaperfullhelp", "Head home and get your diaper changed");

                    } else {
                        system.doLink("locationsplace");

                    }
                }//exit close

            }//options close
    ),
    locationsbathroomy: new undum.SimpleSituation(
            "<p class=transient>Your stomach gurgles insistently at you as the slime beings to build pressure. You know this feeling by now\
                            and that you won't have long</p>", //  "<h1><p class=transient>Choose a location</p><h1>",

            {//displayOrder: 1,
                choices: "#bathroomy"

            }//options close
    ),

    locationsplace: new undum.SimpleSituation(
            "<h1><p class=transient>Choose a location</p><h1>",
            {//displayOrder: 1,

                choices: "#place"

            }//options close
    ),
    // LOCATIONS START HERE
    findbathroom: new undum.SimpleSituation(
            "",
            {
                // CHOICE #1                   
                heading: '<img src="media/img/Restroomart.png" alt="Trulli" width="100%">',
                tags: ["bathroomy"],
                canChoose:
                        function (character, system, host) {
                            return true; //true or false to see if option available
                        },
                xeycanImage:
                        function (character, system, host) {
                            return false; //true or false to see if option available
                        },
                canView:
                        function (character, system, host) {
                            return true; //true or false to see if option available
                        },
                displayOrder: 1,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix


                            system.doLink("usediaper/diapercheckout");
                        }
            }
    ),
    ignore: new undum.SimpleSituation(
            "",
            {
                // CHOICE #1                   
                heading: "Don't worry about it", //Choice text displayed
                tags: ["bathroomy"],
                canChoose:
                        function (character, system, host) {
                            return character.sandbox.diaper.name != "none"; //true or false to see if option available
                        },
                canView:
                        function (character, system, host) {
                            return true; //true or false to see if option available
                        },
                displayOrder: 3,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix


                            system.doLink("usediaper/accident");
                        }
            }
    ),
    useit: new undum.SimpleSituation(
            "",
            {
                // CHOICE #1                   
                heading: "Use your diaper", //Choice text displayed
                tags: ["bathroomy"],
                canChoose:
                        function (character, system, host) {
                            return true; //true or false to see if option available
                        },
                canView:
                        function (character, system, host) {
                            return character.sandbox.diaper.name != "none"; //true or false to see if option available
                        },
                displayOrder: 2,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix


                            system.doLink("usediaper/fill");
                        }
            }
    ),
    themall: new undum.SimpleSituation(
            "",
            {
                heading: '<img src="media/img/Mallart.png" alt="Trulli" width="100%">',
                tags: ["place"],
                xeycanImage:
                        function (character, system, host) {
                            return false; //true or false to see if option available
                        },
                canChoose:
                        function (character, system, host) {
                            return (character.qualities.timeofday < 3 && character.qualities.money >= 1); //true or false to see if option available
                        },
                canView:
                        function (character, system, host) {
                            return true; //true or false to see if option available
                        },
                displayOrder: 2,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix

                            system.doLink("mall/entry");
                        }
            }
    ),

    theoffice: new undum.SimpleSituation(
            "",
            {
                // CHOICE #1                   
                heading: '<img src="media/img/Officeart.png" alt="Trulli" width="100%">',
                tags: ["place"],
                canChoose:
                        function (character, system, host) {
                            if (character.sandbox.foodramen == true) {
                                return character.qualities.timeofday < 2;
                            } else {
                                return character.qualities.timeofday < 3; //true or false to see if option available
                            }
                        },
                xeycanImage:
                        function (character, system, host) {
                            return false; //true or false to see if option available
                        },

                canView:
                        function (character, system, host) {
                            return true; //true or false to see if option available
                        },
                displayOrder: 2,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix


                            system.doLink("worknew/arrive");
                        }
            }
    ),
    headhome: new undum.SimpleSituation(
            "",
            {

                heading: '<img src="media/img/Homeart.png" alt="Trulli" width="100%">',
                tags: ["place"],
                canChoose:
                        function (character, system, host) {
                            return true; //true or false to see if option available
                        },
                xeycanImage:
                        function (character, system, host) {
                            return false; //true or false to see if option available
                        },
                canView:
                        function (character, system, host) {
                            return character.qualities.timeofday != 0; //true or false to see if option available
                        },
                displayOrder: 1,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix
                            //ambi("idle");
                            gfrom = "eveninghome/eveningreturn";
                            if (character.qualities.timeofday < 4) {

                                system.doLink("dayhome/start");
                            } else {
                                system.doLink("eveninghome/start");
                            }
                        }//"eveninghome/start""eveninghome/eveningreturn"
            }
    ),
    servicejob: new undum.SimpleSituation(
            "",
            {
                heading: "Service Call Location",
                tags: ["place"],
                canChoose:
                        function (character, system, host) {
                            return character.sandbox.fssupplies; //true or false to see if option available
                        },
                canView:
                        function (character, system, host) {
                            return (character.sandbox.fssupplies && (character.qualities.timeofday < 4)); //true or false to see if option available
                        },
                displayOrder: 2,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix

                            character.sandbox.dnpay += 2;
                            system.doLink("fullservice/stalltyper");
                        }
            }
    ),
    fullservicestall: new undum.SimpleSituation(
            "",
            {
                heading: '<img src="media/img/Restroomart.png" alt="Trulli" width="100%">',
                tags: ["place"],
                canChoose:
                        function (character, system, host) {
                            return character.qualities.timeofday <= 3; //true or false to see if option available
                        },
                xeycanImage:
                        function (character, system, host) {
                            return false; //true or false to see if option available
                        },
                canView:
                        function (character, system, host) {
                            return true; //true or false to see if option available
                        },
                displayOrder: 2,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix


                            system.doLink("fullservice/restroom");
                        }
            }
    ),
    mall: new undum.SimpleSituation(
            "", {
                actions: {
                    "entry": function (character, system, action) {
                        transer();
                        // will need mutliple versions of this opening for diaper exposure
                        //
                        character.sandbox.operex = true;
                        var compi = "";
                        var outwego = false;
                        switch (character.sandbox.diaper.type) {
                            case "none":
                                //ambi("idle");
                                compi = "Its a larger mall with a few major stores around the edges.</p><p> Thankfully you don't have a diaper to hide under your clothing, however you do now find yourself\
                                worrying about what happens if you suddenly NEED a diaper.";
                                break;

                            case "normal":
                                compi = "You can't help but wonder if people notice the buldge of your diaper under your clothing. \
                                    Either you find yourself walking with a distinct waddle or you walk normally causing loud crinkle sounds!\
                                    ";

                                if (!character.sandbox.clothed) {
                                    var outwego = true;
                                    compi = "";

                                }

                                break;

                            case "huge":

                                compi = "You can almost feel the eyes of\
                                of mall security on you deciding if they should ask you to leave. One of them gets a call on\
                                their radio, he smiles but doesn't approach you. However all the security cameras seem to turn and focus on you for\
                                the rest of the shopping trip.";

                                break;

                            case "suit":

                                compi = "People rather openly stare in your direction as you make your way through the mall, \
                                most with a grin at how cute you look. Your diaper tail tends to bump into\
                                merchandise stands, sometimes knocking an item or two down. It makes you feel like a toddler as you fumble\
                                with the items due to your mitted hands.";

                                break;
                            default:
                                parer("BIG HUGE ERROR in the compi switch menu. in the mall" + character.sandbox.diaper.type);
                        }
                        if (!outwego) {
                            parer("You walk into the local mall ready to spend some time browsing the stores. \
                                " + compi);

                            oper(system, "./items", "Browse for a while", "./locationshop", "Leave the mall");


                        } else {
                            // UH OH the player is naked except for the normal diaper.

                            parer("You walk into the local mall and spend some time just browsing the stores. \
                            Its connected to a few larger stores around the edges, including a grocery store.\
                            " + compi);
                            oper(system, "", "");


                        }
                    }, //function close
                    "food": function (character, system, action) {

                        // NO LONGER IN USE
                        transer();
                        //ambi("noticed");
                        if (character.qualities.money >= 200) {
                            parer("The grocerey section of the store gives you a good selection of food and supplies\
                           you need for the house. Plus a few ingredients just to see what the googirl ends up making with them!\
                           All in all it comes out to about $200");
                            system.setQuality("money", character.qualities.money - 200);
                        } else {
                            parer("The grocerey section of the store gives you a good selection of food and supplies\
                           you need for the house. Plus a few ingredients just to see what the googirl ends up making with them!\
                           All in all it comes out to about $300 Which is a bit more than you have at the moment... Regardless\
                           you need the food for the week so it has to go on your emergency credit card. It should be easy enough to pay off\
                           with next weeks paycheck, though it still counts as negetive till then");
                            system.setQuality("money", character.qualities.money - 200);
                        }


                        oper(system, "./items", "Browse around for a bit", "locations", "Leave the mall");
                    }, //function close
                    "items": function (character, system, action) {
                        transer();
                        character.sandbox.shopmenu = [];
                        parer("Many of the smaller stores seem to be closed, most of them having a sign saying COMING SOON!");
                        //  [     0               1           2       3    4     5]     
                        //  [ OWNED OR not, PLACE to get it, PRICE, ICON, Uses, Description]
                        var loopnum = 0;
                        var xo2;
                        var mallloc = "mall";
                        for (xo2 in character.sandbox.items) {

                            if (!character.sandbox.items[xo2][0] && character.sandbox.items[xo2][1] == mallloc) {

                                character.sandbox.shopmenu.push(xo2);
                                var tabler = ("<td style='text-align:center;' id='hovicli'><a href=./buy" + loopnum + " class='once'> " + "BUY" + " </a></td>" +
                                        "<td style='text-align:center;color: green;'>$" + character.sandbox.items[xo2][2] + "</td>" +
                                        "<td style='text-align:center;'>" + character.sandbox.items[xo2][5] + "</td>");
                                console.log("testing 0" + (character.sandbox.items[character.sandbox.shopmenu[0]][2]));
                                system.write("<p class:transient ><table class='transient unstick' border='1' style='width:100%;opacity:.15'><tr>\
                            " + tabler +
                                        "</tr></p>");
                                loopnum += 1;
                            }
                        }



                        oper(system, "./shoppingfin", "Finish shopping");
                    }, //function close
                    // YES I COULD HAVE DONE THIS BETTER!
                    "buy0": function (character, system, action) {
                        console.log("testing 1" + (character.sandbox.items[character.sandbox.shopmenu[0]][2]));
                        console.log("testing 2" + (character.sandbox.items[character.sandbox.shopmenu[0]][2]));
                        console.log("testing 3" + (character.sandbox.shopmenu[0]));

                        if ((character.sandbox.items[character.sandbox.shopmenu[0]][2]) <= character.qualities.money) {
                            system.setQuality("money", character.qualities.money - character.sandbox.items[character.sandbox.shopmenu[0]][2]);
                            character.sandbox.items[character.sandbox.shopmenu[0]][0] = true;
                            coinsound();
                        } else {
                            system.doLink("./moneylow");
                        }
                    }, //function close
                    "buy1": function (character, system, action) {
                        if (character.sandbox.items[character.sandbox.shopmenu[1]][2] <= character.qualities.money) {
                            system.setQuality("money", character.qualities.money - character.sandbox.items[character.sandbox.shopmenu[1]][2]);
                            character.sandbox.items[character.sandbox.shopmenu[1]][0] = true;
                            coinsound();
                        } else {
                            system.doLink("./moneylow");
                        }
                    }, //function close
                    "buy2": function (character, system, action) {
                        if (character.sandbox.items[character.sandbox.shopmenu[2]][2] <= character.qualities.money) {
                            system.setQuality("money", character.qualities.money - character.sandbox.items[character.sandbox.shopmenu[2]][2]);
                            character.sandbox.items[character.sandbox.shopmenu[2]][0] = true;
                            coinsound();
                        } else {
                            system.doLink("./moneylow");
                        }
                    }, //function close
                    "buy3": function (character, system, action) {
                        if (character.sandbox.items[character.sandbox.shopmenu[3]][2] <= character.qualities.money) {
                            system.setQuality("money", character.qualities.money - character.sandbox.items[character.sandbox.shopmenu[3]][2]);
                            character.sandbox.items[character.sandbox.shopmenu[3]][0] = true;
                            coinsound();
                        } else {
                            system.doLink("./moneylow");
                        }
                    }, //function close
                    "buy4": function (character, system, action) {
                        if (character.sandbox.items[character.sandbox.shopmenu[4]][2] <= character.qualities.money) {
                            system.setQuality("money", character.qualities.money - character.sandbox.items[character.sandbox.shopmenu[4]][2]);
                            character.sandbox.items[character.sandbox.shopmenu[4]][0] = true;
                            coinsound();
                        } else {
                            system.doLink("./moneylow");
                        }
                    }, //function close
                    "buy5": function (character, system, action) {
                        if (character.sandbox.items[character.sandbox.shopmenu[5]][2] <= character.qualities.money) {
                            system.setQuality("money", character.qualities.money - character.sandbox.items[character.sandbox.shopmenu[5]][2]);
                            character.sandbox.items[character.sandbox.shopmenu[5]][0] = true;
                            coinsound();
                        } else {
                            system.doLink("./moneylow");
                        }
                    }, //function close
                    "buy6": function (character, system, action) {
                        if (character.sandbox.items[character.sandbox.shopmenu[6]][2] <= character.qualities.money) {
                            system.setQuality("money", character.qualities.money - character.sandbox.items[character.sandbox.shopmenu[6]][2]);
                            character.sandbox.items[character.sandbox.shopmenu[6]][0] = true;
                            coinsound();
                        } else {
                            system.doLink("./moneylow");
                        }
                    }, //function close
                    "buy7": function (character, system, action) {
                        if (character.sandbox.items[character.sandbox.shopmenu[7]][2] <= character.qualities.money) {
                            system.setQuality("money", character.qualities.money - character.sandbox.items[character.sandbox.shopmenu[7]][2]);
                            character.sandbox.items[character.sandbox.shopmenu[7]][0] = true;
                            coinsound();
                        } else {
                            system.doLink("./moneylow");
                        }
                    }, //function close
                    "buy8": function (character, system, action) {
                        if (character.sandbox.items[character.sandbox.shopmenu[8]][2] <= character.qualities.money) {
                            system.setQuality("money", character.qualities.money - character.sandbox.items[character.sandbox.shopmenu[8]][2]);
                            character.sandbox.items[character.sandbox.shopmenu[8]][0] = true;
                            coinsound();
                        } else {
                            system.doLink("./moneylow");
                        }
                    }, //function close
                    "buy9": function (character, system, action) {
                        if (character.sandbox.items[character.sandbox.shopmenu[9]][2] <= character.qualities.money) {
                            system.setQuality("money", character.qualities.money - character.sandbox.items[character.sandbox.shopmenu[9]][2]);
                            character.sandbox.items[character.sandbox.shopmenu[9]][0] = true;
                            coinsound();
                        } else {
                            system.doLink("./moneylow");
                        }
                    }, //function close
                    "moneylow": function (character, system, action) {
                        //testing out this version of time advacment
                        parer("Just as you are about to pay for your items the sudden realization that you can't currently\
                    afford. Trying to be discrete you quickly leave that store to look around as you decide what to do next.");
                        oper(system, "./items", "Keep shoping", "./locationshop", "Leave the mall");
                    }, //function close
                    "shoppingfin": function (character, system, action) {
                        //testing out this version of time advacment
                        transer();

                        switch (character.sandbox.diaper.type) {
                            case "suit":
                                parer("You struggle with the items as you place them onto the counter. You almost start falling into the mindset\
                               of your diapersuit as you fumble with things. The clerk giggles and pats you on head as he helps you with the items.\
                               ");

                                break;
                            case "huge":


                                parer("You bring the items to the checkout counter and pay for each of them. \
                               The clerk seems rather distracted looking at your diaper. Meanwhile the security camera behind him\
                               still is focused on you, you can almost feel somone is enjoying your perdicament far to much.");

                                break;
                            case "normal":
                                parer("You bring the items to the checkout counter and pay for each of them. The clerk gives knowing smile as\
                               he scans the items. The occasional crinkle from your diaper only adds to his smile as you walk away");


                                break;
                            default:
                                parer("You bring the items to the checkout counter and pay for each of them. ");

                        }

                        oper(system, "locations", "Leave the mall");
                    }, //function close
                    "locationshop": function (character, system, action) {
                        //testing out this version of time advacment
                        //system.setQuality("timeofday", character.qualities.timeofday + 1);
                        system.doLink("locations");
                    } //function close
                }//actions close
            }//options close
    ),
    park: new undum.SimpleSituation(
            "",
            {
                heading: '<img src="media/img/Parkart.png" alt="Trulli" width="100%">',
                tags: ["place"],
                displayOrder: 4,
                canChoose:
                        function (character, system, host) {
                            if (character.sandbox.foodramen) {
                                return character.qualities.timeofday <= 2; //true or false to see if option avalible
                            } else {

                                return character.qualities.timeofday <= 3; //true or false to see if option avalible

                            }

                        },
                xeycanImage:
                        function (character, system, host) {
                            return false; //true or false to see if option available
                        },
                canView:
                        function (character, system, host) {
                            return true; //true or false to see if option avalible
                        },
                enter:
                        function (character, system, from) {
                            //ambi("idle");
                            character.sandbox.operex = true;
                            //system.setQuality("timeofday", character.qualities.timeofday + 1);
                            //system.setQuality("desperation", character.qualities.desperation + character.sandbox.despmod);
                            parer("Sounds of animals and rustling leaves dominates the area as you enter the park. There are a few trails here and there and a general picnic table area\
                                . Often students at the nearby college will come here to study when the weather permits. \
                                Just spending time near nature leaves you feeling inspired and productive!");


                            if (character.sandbox.diaper.name == "none") {



                            } else {
                                var testy = rnd();
                                var testy2 = rnd();
                                if (testy2 > 5) {
                                    testy = 10;

                                }
                                switch (testy) {
                                    case 10:
                                        parer("It's a bit less embarrassing wearing your diaper out in the park, not as many people around.\
                        You take the time to relax.");
                                        break;
                                    case 1:
                                        parer("While walking along you trip over a root in the ground and land on your well padded butt. This might have\
                                    hurt before but the diaper made it much softer off a fall.");

                                        break;
                                    case 2:
                                    case 3:
                                    case 4:

                                        parer("You pass by a family as they are playing in the a game of hacky sack. You are idley watching until one of the youngsters\
                                point to you asking their mome why that person is wearing a big diaper? And if they would have to wear one when they grew up too!");

                                        break;
                                    case 5:

                                        parer("You can't help but feel a bit more comfortable in the park knowing you won't need to find a bathroom any time soon");
                                        break;
                                        break;
                                    case 6:
                                        parer("You catch a rare sight of a naga slither through the park, it would be surprising if not for the even more rediculus\
                                    amount of HAT they are wearing. Two feathers and a wide wicker part on the back... you are not even sure what to call it but its enough to almost forget it was a naga wearing it.");
                                        break;
                                    case 7:

                                        parer("You hear some giggling off in the distance, and discover its actually 3 ladies getting into a car all chatting. However two of them\
                are wearing what is undeniably diapersuits! A sugur glider and kangaroo suits more specifically. Before you you have a chance to say anything they have\
                gotten into the car and left");
                                        break;
                                    case 8:


                                        parer("A few dogs roaming the park seem to take an interest in you. They have a good time sniffing you all over especially the diaper.\
                            eventually one knocks you over and begins humping your padded backside! Thanks to the diaper its just harmless silly mischief, but you still end up rather embaressed after you have shooed them away.");
                                        break;
                                    case 9:
                                        break;
                                    default:
                                }
                            }





                            /*
                             var derp = whoer(startlocations.parknpc);
                             if (derp != undefined) {
                             system.write("<p>Also here you see " + derp + "</p>");
                             }
                             ;
                             */
                            oper(system, "locations", "Leave the park");

                        }
            }
    ),
    dailyneeds: new undum.SimpleSituation(
            "",
            {

                heading: '<img src="media/img/Dailyneedsart.png" alt="Trulli" width="100%">',
                tags: ["place"],
                canChoose:
                        function (character, system, host) {
                            if (character.sandbox.foodramen) {
                                return character.qualities.timeofday <= 2; //true or false to see if option avalible
                            } else {

                                return character.qualities.timeofday <= 3; //true or false to see if option avalible

                            }
                        },
                xeycanImage:
                        function (character, system, host) {
                            return false; //true or false to see if option available
                        },
                canView:
                        function (character, system, host) {
                            return true; //true or false to see if option avalible
                        },
                displayOrder: 5,
                enter:
                        function (character, system, from) {
                            //Actual start of the choice, recommended to lead into different situation 
                            //to avoid cluttering request matrix

                            //system.setQuality("timeofday", character.qualities.timeofday + 1);
                            system.doLink("diaperstore/first");
                            //system.setQuality("desperation", character.qualities.desperation + character.sandbox.despmod);


                        }
            }
    ),
    //////////////////////////////////////////////////////////////////////
    // OMEGA DIAPERFICATION SUPER OBJECT ORIENTER!                      //
    //////////////////////////////////////////////////////////////////////
    // WE MEET AGAIN MORTAL! BEHOLD MY DIAPERIFI... THIS THING!
    // FIDDLING WITH PRESET VARIABLES IS SILLY! THESE EVENTS LOAD THEM FOR ME!
    // NOO! THIS ISN"T ME BEING LAZY AND NOT SETTING VARIABLES LIKE ANY NOMRAL PROGRAMMER WOULD!
    // AND I don't CARE IF THIS IS IN THE MIDDLE OF NOWHERE IN THE  CODE!
    //
    diaperchoicer: new undum.SimpleSituation(
            "", {
                actions: {
                    "simple": function (character, system, action) {


                        // <a  href=./intro2 class=transient>






                    }, //function close
                    "newdiaper": function (character, system, action) {

                        var xyz;
                        var zyx;
                        var assembler = "";
                        for (xyz in diapers) {
                            zyx = diapers[xyz];
                            //if (xyz.location==character.sandbox.store&&(xyz.owned!=true)){
                            if (zyx["location"] == character.sandbox.store) {
                                var costy;
                                switch (zyx.type) {
                                    case "normal":
                                        costy = 30;
                                        break;
                                    case "suit":
                                        costy = 200;
                                        break;
                                    case "huge":
                                        costy = 50;
                                        break;
                                    default:
                                }


                                if (costy < (character.qualities.money - 1)) {

                                    if (xyz.cap < (character.sandbox.punish * 200)) {
                                        assembler = assembler + "<li>" + zyx.description + " (Below minimum allowed size)</li>";

                                    } else {
                                        assembler = assembler + "<li><a href=./" + zyx.name + ">" + zyx.description + " $" + costy + "</a></li>";
                                    }
                                } else {
                                    assembler = assembler + "<li>" + zyx.description + " (Can not afford)</li>";
                                }
                            }
                        }
                        if (character.sandbox.dnjob && character.sandbox.store == "dailyneeds") {

                            parer("<ul class='options'>" + assembler +
                                    "<li><a href=./suitlist>Check out the diapersuits</a></li>+\
                                    <li><a href=./cancel>Don't buy anything</a></li>\
                                    </ul>");

                        } else if (character.sandbox.store == "dailyneedssuits") {
                            parer("<ul class='options'>" + assembler +
                                    "<li><a href=./normallist>Retrn to the normal diapers</a></li>+\
                                    <li><a href=./cancel>Don't buy anything</a></li>\
                                    </ul>");
                            diapers.orca.description = "Large Orca Diapersuit";
                        } else {
                            parer("<ul class='options'>" + assembler + "<li><a href=./cancel>Don't buy anything</a></li></ul>");

                        }


                    }, //function close
                    "suitlist": function (character, system, action) {
                        transer();
                        character.sandbox.store = "dailyneedssuits";
                        system.doLink("./newdiaper");
                    }, //function close
                    "normallist": function (character, system, action) {
                        transer();
                        character.sandbox.store = "dailyneeds";
                        system.doLink("./newdiaper");
                    }, //function close
                    "cancel": function (character, system, action) {
                        parer("You decide against buying a new diaper right now. Maybe another time.");
                        system.doLink("diaperstore/canceled");
                    }, //function close
                    "white": function (character, system, action) {
                        character.sandbox.shopchoice = "white";
                        system.doLink("diaperstore/buy");
                    }, //function close
                    "pink": function (character, system, action) {
                        character.sandbox.shopchoice = "pink";
                        system.doLink("diaperstore/buy");
                    }, //function close
                    "blue": function (character, system, action) {
                        character.sandbox.shopchoice = "blue";
                        system.doLink("diaperstore/buy");
                    }, //function close
                    "huge": function (character, system, action) {
                        character.sandbox.shopchoice = "huge";
                        system.doLink("diaperstore/buy");
                    }, //function close
                    "high": function (character, system, action) {
                        character.sandbox.shopchoice = "high";
                        system.doLink("diaperstore/buy");
                    }, //function close
                    "orca": function (character, system, action) {
                        character.sandbox.shopchoice = "orca";
                        system.doLink("diaperstore/buy");
                    }, //function close
                    "pony": function (character, system, action) {
                        character.sandbox.shopchoice = "pony";
                        system.doLink("diaperstore/buy");
                    }, //function close
                    "dragon": function (character, system, action) {
                        character.sandbox.shopchoice = "dragon";
                        system.doLink("diaperstore/buy");
                    }, //function close
                    "penguin": function (character, system, action) {
                        character.sandbox.shopchoice = "penguin";
                        system.doLink("diaperstore/buy");
                    } //function close
                }//actions close
            }//options close
    ),
    diaperstore: new undum.SimpleSituation(
            "", {
                heading: function () {
                    return "";
                },
                actions: {
                    "first": function (character, system, action) {
                        character.sandbox.operex = true;
                        character.sandbox.store = "dailyneeds";
                        if (character.sandbox.storevisit) {
                            //ambi("noticed");
                            transer();
                            character.sandbox.storevisit = false;
                            parer("You head to the 'specialty' diaper store the clerk in the mall told you about\
                        It is surprisingly out of the way on the edge of the warehouse district. It gives a bit of\
                        privacy to the buying of diapers which is comforting<p></p>\
                        The inside decor looks unexpectedly industrial, no baby motif or anything of that sort. In fact you\
                        might even call it unfinished. There are many boxes with labels on them, plus one\
                        overworked looking employee with strange fur covered legs.");
                            character.sandbox.frontroom = "You head to the 'specialty' diaper store on edge of the warehouse district. \
                        Inside is surprisingly industrial looking. No baby motif or that sort of thing. In fact you\
                        might even call it unfinished. There are many boxes with labels on them and a few signs here and there. They have only\
                        been open a month at most.";
                            oper(system, "./talk", "Talk to the satyr", "./contract", "Wander around browsing the diapers");
                        } else if (character.sandbox.dntraining == false) {

                            parer("You head to the 'specialty' diaper store on edge of the warehouse district. \
                        Inside is surprisingly industrial looking. No baby motif or that sort of thing. In fact you\
                        might even call it unfinished. There are many boxes with labels on them and a few signs here and there. They have only\
                        been open a month at most.");
                            oper(system, "./talk", "Find Anton", "./contract", "Wander around browsing the diapers", "locations", "Leave");


                        } else {
                            parer(character.sandbox.frontroom);

                            if (character.sandbox.dnjob) {
                                oper(system, "jobdailyneeds/work", "Enter the employees only door", "./contract", "Buy a diaper", "locations", "Leave");

                            } else {
                                oper(system, "jobdailyneeds/entry", "Enter the employees only door", "./contract", "Buy a diaper", "locations", "Leave");


                            }


                        }

                    }, //function close
                    "contract": function (character, system, action) {
                        transer();
                        if (character.sandbox.signedform) {
                            system.doLink("diaperchoicer/newdiaper");
                        } else {
                            parer("Anton pulls out a stack of papers from under the front desk, they seem rather messy as he has to line them up first.\
                                                                    <p>'Since this is your first time here ya gonna have to sign the voluntary wearers agreement. Its kinda silly I know\
                                                                   but we are selling these as medical items rather than novlety. There is a much bigger contract for the suits but you either\
                                                                   have to work here or be a long time customer to access them. Basically says you wont sue us if they leak or cause others\
                                                                   to treat you diffrently. An aggrement to only wear diapers of correct absorbitive amount, basicly if you over fill the diapers we will only sell ones\
                                                                   of larger capacities, and other legal bits");
                            character.sandbox.signedform = true;
                            oper(system, "diaperchoicer/newdiaper", "Shrug and sign the forms");
                        }


                    }, //function close
                    "talk": function (character, system, action) {
                        transer();
                        parer("Approaching the guy you see his legs are not only furry but also they don't bend right.\
                       That along with the tiny horns on his head confirm he is one of the nonhumans, a satyr. Its not too uncommon\
                       seeing other races but still can be a bit jarring. Noticing you he stops sweeping the floor and fixes his\
                       blue uniform vest.");

                        parer('"Welcome to daily needs, your one stop for personal care no matter the species.\
                         You can call me Anton... How might I help you today?" He asks, in a dull monotone voice.\
                         ');

                        oper(system, "diaperchoicer/newdiaper", "Ask to check the diapers", "./him", "Ask is he is ok");
                    }, //function close


                    "him": function (character, system, action) {
                        transer();
                        parer('"I would be ok if we had more staff! We are not set up to be a local display type store\
                        . This was supposed to be a distrabution center, but then a last minute change and we are open\
                        for the public to walk right in. We don\'t even have staff to model the diapers for customers!" \
                        He exclaims obviously venting some frustration.');



                        oper(system, "diaperchoicer/newdiaper", "Ask to check the diapers", "./offer", "Offer to help");
                    }, //function close




                    "offer": function (character, system, action) {
                        transer();
                        parer("You mention to him that you would be willing to help him out. He seems surprised but still cautious 'You really willing to help out?'\
                             he asks but sees that you are serious.</p><p>\
                            'The biggest thing we need is a model for the diapers, it would be a parttime job.'");

                        oper(system, "diaperchoicer/newdiaper", "Ask to check the diapers", "jobdailyneeds/jobaccept", "Accept the job");
                    }, //function close
                    "buy": function (character, system, action) {
                        transer();
                        coinsound();
                        //ambi("idle");
                        //ambi("noticed");
                        var diaptype = diapers[character.sandbox.shopchoice];
                        var indexery = character.sandbox.diaperowned.indexOf(character.sandbox.shopchoice);
                        // returns the index of the diaper chosen. -1 is new purchase, 0 is first item
                        var diapnum;

                        switch (diaptype.type) {
                            case "normal":
                                diapnum = 8;
                                system.setQuality("money", character.qualities.money - 30);
                                break;
                            case "suit":
                                diapnum = 1;
                                system.setQuality("money", character.qualities.money - 200);
                                break;
                            case "huge":
                                diapnum = 3;
                                system.setQuality("money", character.qualities.money - 50);
                                break;
                        }

                        if (indexery == -1) {
                            //new diaper type none owned
                            character.sandbox.diaperowned.unshift(character.sandbox.shopchoice);
                            character.sandbox.diaperleft.unshift(diapnum);


                        } else {
                            character.sandbox.diaperleft[indexery] += diapnum;

                        }
                        console.log("diaperleft of purchase" + (character.sandbox.diaperleft[diapnum]));






                        if (character.sandbox.dnjob) {
                            if (diaptype.type == "suit") {
                                parer("'Glad to see you have taken a liking to the diapersuit, though honestly they are kind of addicting.\
                            Anyway would you like to have Maya help you into the new diaper? ' anton asks with a knowing grin as you bring over the large package.\
                            You have seen how easy it is to put on, and it probobly comes with that diaper cream. The googirl could help you into it if you\
                            Wanted to take it home.");
                                oper(system, "locations", "Decline his offer and head home with it", "./mayanewsuit", "Ask for help from maya");
                            } else {
                                parer("You bring the large box over to the counter. It doesn't really have much on the outside other\
                       than the name. Anton comes over and scans it giving you a strange look.\
                        </p><p>\
                        'You won't be able to work here unless you are wearing a Diapersuit (or we get the service jobs ready). So think carefully about changing into these.' he warns");
                                oper(system, "locations", "Grab your purchase and head out", "jobdailyneeds/work", "Enter the employees only door");
                            }


                        } else {
                            parer("You bring the large box over to the counter. It doesn't really have much on the outside other\
                       than the name. The satyr comes over and scans it reluctantly. The name tag 'Anton' on his shirt is tilted to the side haphazardly.");
                            parer("\"Normally there are supposed to be someone modeling the diapers but we are a bit understaffed at the moment.\
                         We apologize for the inconvenience\" He says with a tired sigh");
                            oper(system, "locations", "Grab your purchase and head out", "./offer", "Offer to help");
                        }


                        if (character.qualities.money <= 0) {

                            parer("You sigh as you pay for the rather expensive diaper, placing it on credit till your next pay check");
                        }



                    }, //function close
                    "canceled": function (character, system, action) {
                        transer();
                        parer("You decide not to pick up anything right now.");


                        oper(system, "locations", "Head out");
                    }, //function close
                    "mayanewsuit": function (character, system, action) {
                        transer();
                        parer("Maya has the day off (Expect her to return in a version soon, for now the googirl can still help you put it on.)");


                        oper(system, "locations", "Head out");
                    }, //function close
                    "newjob": function (character, system, action) {
                        transer();
                        parer("He nods and tells you to come back later. MUCH later. Maybe in the next 'version' whatever that means");


                        oper(system, "locations", "Head out");
                    } //function close
                }//actions close
            }//options close
    ),
    workdailyneeds: new undum.SimpleSituation(
            "", {
                heading: function () {
                    return "";
                },
                actions: {
                    "enter": function (character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    }, //function close
                    "r1": function (character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } //function close
                }//actions close
            }//options close
    ),

    /* diaper: {
     name: "",
     type: "",
     size: "",
     description: "",
     puton: "",
     sleep: "",
     work: "",
     noticed: "",
     stuck:""
     },
     */

    //////////////////////////////////////////////////////////////////////
    // PROTOTYPE EVENT HANDLER                                          //
    //////////////////////////////////////////////////////////////////////

    /// BEHOLD MORTAL, THE MEIGHTY EVENTHANDLER! 
    //NO MORTAL I DID NOT MISPELL MIGHTY! FOR THIS THE MEIGHTY EVENTHANDLER!
    // I DO NOT CARE IF IT IS JUST MORE SITUATIONS, I CAN CALL A GROUP OF SITUATIONS ANYTHING I WANT
    eventbasic: new undum.SimpleSituation(
            "", {
                //heading:"Inside a sheath"
                enter: function (character, system, from) {


                }, //enter close 
                actions: {
                    "plan": function (character, system, action) {
                        transer();

                        parer("");

                        oper(system, "");
                    } //function close
                }//actions close
            }//options close
    ),
    //MEIGHTY EVENT HANDLER CLOSE



    endgame: new undum.SimpleSituation(
            "", {
                heading: function () {
                    return "";
                },
                actions: {
                    "end": function (character, system, action) {
                        transer();
                        parer("The room is dark when you wake up, something woke you. The googirl is kneeling at\
                    the side of the bed just looking at you. You start to ask if everything is ok but she puts a finger to your lips.\
                    And then in the softest most lovely voice....");

                        parer("</p><p style='text-align:center'><a href='./thankyou'>\"I love you.\"</a></p><br></p><br>");


                    }, //function close
                    "thankyou": function (character, system, action) {
                        transer();
                        parer("Thankyou for playing! this is only the begining of development. Please click the names below\
                      to support the expanding of this game!");

                    } //function close
                }//actions close
            }//options close
    ),
    //        /////////////////////////////////////////////////////////////////////
    //                     NPCs                                      //
    /////////////////////////////////////////////////////////////////////

    // heading: '<table class=stickish border="1" style="width:100%"><tr>\
    //                                        <td><a href=./desc class=stickish>Mark</a></td>\
    //                                        </tr>',


    /////////////////////////////////////////////////////////////////////
    //	    TUTORIAL                                    //
    /////////////////////////////////////////////////////////////////////

    qualities: new undum.SimpleSituation(
            "<p>Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./skill-boost'>this action</a> as many\
        times as you like.</p>",
            {
                heading: "Qualities and the Character",
                tags: ["topic"],
                displayOrder: 4,
                actions: {
                    "skill-boost": function (character, system, action) {
                        system.setQuality("skill", character.qualities.skill + 1);
                    }
                },
                exit: function (character, system, to) {
                    system.setQuality("stamina", character.qualities.stamina + 1);
                }
            }
    ),
    INCOMPLETE: new undum.SimpleSituation(
            "", {
                //heading:"",
                enter: function (character, system, from) {
                    parer("CURRENTLY INCOMPLETE but you did find out how to transform back!\
                    in the future this will open the possibility to choose a new host with far more characters to choose from.");

                }, //enter close 
                actions: {
                    "plan": function (character, system, action) {
                        transer();

                        parer("");

                        oper(system, "");
                    } //function close
                }//actions close
            }//options close
    ),
    "character-text": new undum.SimpleSituation(
            "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
            {
                exit: function (character, system, to) {
                    system.setCharacterText(
                            "<p>We're nearing the end of the road.</p>"
                            );
                }
            }
    )
};
$.extend(undum.game.situations, undum.game.intro, undum.game.dailyneedsjob,
        undum.game.park, undum.game.usediaper, undum.game.officework,
        undum.game.dating, undum.game.fullservice, undum.game.work, undum.game.work,
        undum.game.morning);


// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */


/////////////////////////////////////////////////////////////////////
//	  SANDBOX INIT                             //
/////////////////////////////////////////////////////////////////////
var diapers;
diapers = undum.game.diapers;
var diaperdistract = undum.game.distractions;

var DAMN = "";

/*
 BarQuality: new undum.QualityDefinition('<div class="progress_bar">\
 <span class="name" data-attr="name">Quality Name</span>\
 <span class="value" data-attr="value">24</span>\
 <div class="progress_bar_track">\
 <div class="progress_bar_color" data-attr="width" style="width:24%">\
 </div>\
 </div>\
 <span class="left_label" data-attr="left_label">Left Label</span>\
 <span class="right_label" data-attr="right_label">Right Label</span>\
 </div>');
 BarQuality.inherits(QualityDefinition);
 */
undum.game.qualities = {
    /*
     energybar: new undum.BarQuality('<div class="progress_bar">\
     <span class="name" data-attr="name">Quality Name</span>\
     <span class="value" data-attr="value">24</span>\
     <div class="progress_bar_track">\
     <div class="progress_bar_color" data-attr="width" style="width:24%">\
     </div>\
     </div>\
     <span class="left_label" data-attr="left_label">Left Label</span>\
     <span class="right_label" data-attr="right_label">Right Label</span>\
     </div>'),
     */
    // energy: new undum.IntegerQuality(
    //     "<div class=progress_bar>energy</div>", {priority:"01", group:'stats'}
    //),
    progress: new undum.BarQuality(
            "Work Quota", {priority: "0001", group: 'stats'}
    ),
    desperation: new undum.BarQuality2(
            "Urgency",["rgb(142, 236, 194)", "rgb(147, 197, 231)",  "rgb(224, 196, 99)", "rgb(184, 80, 91)"], {priority: "0002", group: 'stats'}
    ),
    diapercap: new undum.BarQuality(
            "Diaper Capacity", {priority: "0002", group: 'stats'}
    ),
    suspicion: new undum.BarQuality(
            null, {priority: "0002", group: 'stats'}
    ),
    // fname: new undum.WordScaleQuality(
    //   "Name","David", {group:'stats'}
//				),
    luck: new undum.FudgeAdjectivesQuality(// Fudge as in the FUDGE RPG
            "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks.).'>Luck</span>",
            {priority: "0003", group: 'stats'}
    ),
    timeofday: new undum.WordScaleQuality(
            "", ["<span style='float:none'>Morning</span>", "Noon", "Afternoon", "Evening"], {priority: "001", group: 'tod'}
    ),
    dayofweek: new undum.WordScaleQuality(
            "", ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], {priority: "0001", group: 'tod'}),
    progress2: new undum.WordScaleQuality(
            "Work Quota", ["", "", "", ""], {priority: "00001", group: 'tfstate'}
    ),
    inspiration: new undum.NonZeroIntegerQuality(
            "Inspiration", {priority: "0001", group: 'progress'}
    ),
    money: new undum.IntegerQuality(
            "Money:", {priority: "00001", group: 'stats'}
    ),
    novice: new undum.OnOffQuality(
            "Novice", {priority: "0002", group: 'progress', onDisplay: "&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority: "0001"}),
    progress: new undum.QualityGroup('progress', {priority: "0002"}),
    tfstate: new undum.QualityGroup('Transformation', {priority: "01"}),
    tod: new undum.QualityGroup('Time', {priority: "0000001"}, {extraClasses: "style=float:none"})

};

function backto(from) {
    var htback = "<p class=transient><a href=" + from + "> Finish and head back. </a>";
    return htback;
}
;
function descer(character, system) {
    console.log("Well we made it in");

    var sectionone = "Currently you are a simple college student, HEIGHT ish feet tall anthro XX \
       .";
    var sectionzero = "";
    var sectionthree = "";
    if (character.qualities.progress != 0) {
        switch ((Math.floor((character.qualities.progress + 3) / 4) * 20)) {
            case 20:
                sectionzero = "You are " + character.sandbox.fname + ".";
                sectionone = "<p>Your body feels squishy and sensetive.\
                        ";

                break;
            case 40:

                break;
            case 60:

                break;
            case 80:

                break;
            case 100:

                break;
        }//switch close

    } else {
        //Fully humanoid
        console.log("Characther is clear");
        sectionzero = "You are " + character.sandbox.fname + ". You work at an office in town and currently have a googirl living with you.";
        sectionone = "";
        sectionthree = "";
    } //if close
    //assembler
    console.log("about to hit assembler");
    var uplerd = "<p>" + sectionzero + sectionone + sectionthree + "<p/>";

    //system.setCharacterText(uplerd);
    console.log("really?");


    return uplerd;
}
;
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
;
function transer() {
    spark = false;
    //$(".ex_link").animate({opacity: 0.1}, 1500);

    //$(".unstick").delay(1500).replaceWith("<p><br></p>");
    //$(".unstick").animate({opacity: "0"}, '4000');
    $('#content a').each(function (index, element) {
        var a = $(element);


        if (a.hasClass('stickish') || a.attr("href").match(/[?&]sticky[=&]?/))
            return;
        a.replaceWith($("<span>").addClass("ex_link").html(a.html()));
    });
    var contentToHide = $('#content .transient, #content ul.options');
    contentToHide.add($("#content a").filter(function () {
        return $(this).attr("href").match(/[?&]transient[=&]?/);
    }));
    var interactive = true;
    if (interactive) {
        var mobile = function () {
            return (navigator.userAgent.toLowerCase().search(
                    /iphone|ipad|palm|blackberry|android/
                    ) >= 0 || $("html").width() <= 640);
        };
        if (mobile) {
            contentToHide.fadeOut(2000);
        } else {
            //contentToHide.fadeOut(2000);

            contentToHide.
                    animate({opacity: 0}, 1500).
                    slideUp(500, function () {
                        $(this).remove();
                    });

        }
    } else {
        contentToHide.remove();
    }
    $(".ex_link").removeClass("unstick");
    $(".ex_link").animate({opacity: 0.01}, 1500);
}
;
//$(".unstick").css("opacity", ".0"); 
var globalonclick;
function clickerizer(toset) {
    console.log("Clickerizer activated! " + toset);
    globalonclick = toset;

}


var rndprop = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
;
function strip(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}
;
function whoer(derp) {
    var whohere = "";

    switch (derp.length) {
        case 1:
            var whohere = derp[0];
            return whohere;
        case 2:
            whohere = derp[0] + " and " + derp[1];
            return whohere;
        case 3:
            whohere = derp[0] + ", " + derp[2] + " and " + derp[1];
            return whohere;
        case 0:
    }


}

function coinsound() {
    if (undum.isInteractive()) {
        //
        var vidy;
        vidy = document.getElementById("coiner" + rnd(5));
        vidy.volume = newvol / 100;
        vidy.play();
        //return ("<div><audio id='coiner1'><source src='media/audio/coin"++".mp3' ></audio></div>");
    }

}
function sfxpls(soundy) {
    if (undum.isInteractive()) {
        //
        var vidy;
        vidy = document.getElementById(soundy);
        vidy.volume = newvol / 100;
        vidy.play();
        //return ("<div><audio id='coiner1'><source src='media/audio/coin"++".mp3' ></audio></div>");
    }

}
