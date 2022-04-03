const { Thought } = require("../models");

Thought.deleteMany({}, function (error, deletedThoughts) {
  if (error) {
    return console.log(error);
  }
  Thought.insertMany(
    [
      {
        content: "The asteroid that ended the dinosaurs was technically the highest ratio of killing birds to one stone in Earth's history.",
        thinker: "cubosh",
        nsfw: false,
      },
      {
        content: "A different version of you exists in the minds of everyone who knows you.",
        thinker: "Mauveinex",
        nsfw: false,
      },
      {
        content: "As an identical triplet, you are simultaneously one of the rarest and most common people on the planet.",
        thinker: "ItsHerox",
        nsfw: false,
      },
      {
        content: "Making a typo in an online argument is the equivalent of [your] voice cracking in a verbal argument.",
        thinker: "Metamight123",
        nsfw: false,
      },
      {
        content: "Once we have self-driving cars, wipers will no longer be essential, because the car doesn't need a clean windshield to drive. Only humans do.",
        thinker: "telumv",
        nsfw: false,
      },
      {
        content: "There could be a viral video of you doing something random with millions of views, and you have no idea because you haven't seen it.",
        thinker: "P0RKYM0LE",
        nsfw: false,
      },
      {
        content: "Someone out there vividly remembers something you said, which you have completely forgotten.",
        thinker: "beanstalkandthejack",
        nsfw: false,
      },
      {
        content: "When we switch to electric vehicles, everything is going to become quieter.",
        thinker: "AVengefulChicken",
        nsfw: false,
      },
      {
        content: "It won't be long before people use 'the '20s, the '30s, and the '40s' to describe the 2020s, the 2030s, and the 2040s.",
        thinker: "PlankLengthisNull",
        nsfw: false,
      },
      {
        content: "We advocate not judging a book by its cover, but also glorify 'love at first sight.'",
        thinker: "Lovheim",
        nsfw: false,
      },
      {
        content: "All adults were children, but not all children will become adults.",
        thinker: "sepientr34",
        nsfw: false,
      },
      {
        content: "It's likely that over 99% of trees that you look at will be still here when you're dead.",
        thinker: "Dashover",
        nsfw: false,
      },
      {
        content: "The posted speed limit is the legally accepted maximum limit, but the socially accepted minimum limit.",
        thinker: "Hard_as_it_looks",
        nsfw: false,
      },
      {
        content: "We're closer to the year The Jetsons took place (2062) than the year The Jetsons first aired (1962).",
        thinker: "FictionVent",
        nsfw: false,
      },
      {
        content: "Most people aren't scared of being alone in the dark — they're scared of not being alone in the dark.",
        thinker: "Defourthkitten",
        nsfw: false,
      },
      {
        content: "One day your parents put you down and never picked you up again.",
        thinker: "schneida_04",
        nsfw: false,
      },
      {
        content: "An everything bagel is proof that you can seemingly have it all and still have a hole inside you.",
        thinker: "KENTAD1GGIT",
        nsfw: false,
      },
      {
        content: "We go to work by cars each day, taking the same route, but almost never encounter the same cars along the way.",
        thinker: "mishagelka",
        nsfw: false,
      },
      {
        content: "If heaven exists, it's probably going back and doing your life over, but fixing all your mistakes.",
        thinker: "Uglyman414",
        nsfw: false,
      },
      {
        content: "The 10 years between 25 and 35 are far shorter than the four years between 14 and 18.",
        thinker: "BandaidPuppet",
        nsfw: false,
      },
      {
        content: "Painkillers are the 'Mute Notifications' option for the body.",
        thinker: "EndTimeEchoes",
        nsfw: false,
      },
      {
        content: "Humans are afraid of being bitten by spiders even though they have more teeth. Spiders are afraid of being stepped on by humans even though they have more legs.",
        thinker: "Nanabobo567",
        nsfw: false,
      },
      {
        content: "There are sidewalks in the Cars movies, but they are all cars.",
        thinker: "K-pop-Unicorn",
        nsfw: false,
      },
      {
        content: "4 a.m. is the hour where you're either up really late or really early.",
        thinker: "WaterBottleManWithHi",
        nsfw: false,
      },
      {
        content: "Being 'on your phone all day' went from sounding very sociable to very unsociable within the span of a decade.",
        thinker: "DrAwkward404",
        nsfw: false,
      },
      {
        content: "Pressing the 'lock' button on your car key fob multiple times is the grown-up version of saving your game twice.",
        thinker: "Joba_Fett",
        nsfw: false,
      },
      {
        content: "If you're still pretty young, chances are you still haven't met the majority of people who will attend your funeral.",
        thinker: "Deusque",
        nsfw: false,
      },
      {
        content: "The richest person on Earth is technically also the richest person in the universe, since our definition of rich is owning a lot of Earth money, and there's no way for extraterrestrial life to obtain it.",
        thinker: "SamTheGang",
        nsfw: false,
      },
      {
        content: "Whenever you eat canned pieces of fruit, you are more than likely sharing one whole fruit with someone hundreds of miles away.",
        thinker: "SinisterLemons",
        nsfw: false,
      },
      {
        content: "Extra fries in your bag is going to become a thing of the past once fast-food workers are 100% replaced by robots.",
        thinker: "LisiPieces",
        nsfw: false,
      },
      {
        content: "You probably know more Latin, a dead language, than you do Mandarin, the most common native tongue.",
        thinker: "iGotEDfromAComercial",
        nsfw: false,
      },
      {
        content: "Your belly button is just your old mouth.",
        thinker: "Ryskill",
        nsfw: false,
      },
      {
        content: "A successful marriage ends with watching the other person die.",
        thinker: "WhiteVanilla69",
        nsfw: false,
      },
      {
        content: "Accidentally liking someone's post while snooping through their profile is the digital equivalent of stepping on a twig while sneaking through the forest.",
        thinker: "DragonBrigade",
        nsfw: false,
      },
    ],
    function (error, createdThoughts) {
      if (error) {
        return console.log(error);
      }
      console.log("=== Seeded Data ===");
      console.log(createdThoughts);
    }
  );
});