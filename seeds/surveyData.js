const { Survey } = require('../models');

const surveydata = [
  {
    name: 'Cardi B',
    ageRange: 29,
    bio: "I'm the queen of hip-hop, fashion, and making money moves! When I'm not busy tearing up the charts, you can catch me sipping on some okurrr coffee, slaying in my designer PJs, or perfecting my iconic nail game. Bronx-born and raised, I bring that New York energy wherever I go!",
    temperature_pref: "65 and below",
    pets: "Has pets, open to living with others",
    sleepWakeHours: "Sporadic",
    parties: "Very social, all my friends have a key",
    cleanlinessLevel: "I clean once a week",
    moveInDate: "Immediately",
    relationshipStatus: "Prefer roommate not having a partner",
    sharingItems: "You do not touch my DARN stuff",
    livingStyle: "We will be friendly",
    drinkingHabits: "All the time",
    smoking: "Every dayyyyyyyyy",
    decorationStyle: "Neutral colors",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Absolutely",
    petPeeves: "If you buy food and don't eat it.",
    timeSpentInApartment: "Go out 3-5 times a week",
    politicalStatus: "left",
    preferredAgeRange: null,
    profilePic: '/images/01-cardib.jpg',
    user_id: 1
  },
  {
    name: 'Obama',
    ageRange: 62,
    bio: "Former Commander-in-Chief turned roommate extraordinare! When I'm not busy making historic speeches or shooting hoops, you can catch me enjoying a good book, perfecting my dad jokes, or attempting to cook up a storm in the kitchen. Born in Hawaii, raised in Chicago, and now looking for the next adventure in our cozy abode.",
    temperature_pref: "65-70",
    pets: "Has pets, open to living with others",
    sleepWakeHours: "Morning person",
    parties: "No parties",
    cleanlinessLevel: "Neat freak",
    moveInDate: "Next two-three months",
    relationshipStatus: "Okay with roommate having a partner",
    sharingItems: "Whatever is mine is yours!",
    livingStyle: "Yes, I would love that",
    drinkingHabits: "No",
    smoking: "Would prefer if my roommate does not smoke",
    decorationStyle: "Neutral colors",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Yes, but I can share if I have to",
    petPeeves: "People who like trump",
    timeSpentInApartment: "Going out on weekends",
    politicalStatus: "left",
    preferredAgeRange: null,
    profilePic: '/images/02-obama.jpg',
    user_id: 2
  },
  {
    name: 'Megan Thee Stallion',
    ageRange: 28,
    bio: "Megan Thee Stallion in the house, y'all! When I'm not dropping chart-topping hits or rocking stages, you can find me unapologetically embracing the Hot Girl Summer lifestyle. H-Town born and raised, I bring that Southern hospitality and a whole lot of sass to the table.",
    temperature_pref: "70-75",
    pets: "Has pets, but can't live with other animals",
    sleepWakeHours: "I like late nights but still get up early",
    parties: "Very social, all my friends have a key",
    cleanlinessLevel: "Fairly clean, occasionally messy",
    moveInDate: "Within the month",
    relationshipStatus: "Okay with roommate having a partner",
    sharingItems: "I would prefer if you ask",
    livingStyle: "We can occasionally talk",
    drinkingHabits: "Occasionally",
    smoking: "Occasionally",
    decorationStyle: "Bright colors (like hot pink bruh)",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Absolutely",
    petPeeves: "Unsolicited advice from Nicki Minaj",
    timeSpentInApartment: "Never in the apartment",
    politicalStatus: "left",
    preferredAgeRange: null,
    profilePic: '/images/03-megan.jpg',
    user_id: 3
  },
  {
    name: 'Gypsy Rose Blanchard',
    ageRange: 32,
    bio: "I'm all about embracing the magic of life! When I'm not lost in the pages of a thrilling mystery novel or experimenting with new makeup looks, you can catch me daydreaming about far-off places or planning my next adventure. Born with a heart full of curiosity, I'm excited to embark on this new chapter with a fabulous roomie by my side.",
    temperature_pref: "75-80",
    pets: "Has pets, open to living with others",
    sleepWakeHours: "Morning person",
    parties: "Maybe once a month a friend will stop by",
    cleanlinessLevel: "Fairly clean, occasionally messy",
    moveInDate: "Immediately",
    relationshipStatus: "Okay with roommate having a partner",
    sharingItems: "I would prefer if you ask",
    livingStyle: "We just live together and that’s it",
    drinkingHabits: "No",
    smoking: "No",
    decorationStyle: "Neutral colors",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Yes, but I can share if I have to",
    petPeeves: "Not having freedom to do what I want",
    timeSpentInApartment: "Going out on weekends",
    politicalStatus: "left",
    preferredAgeRange: null,
    profilePic: '/images/04-gypsy.jpg',
    user_id: 4
  }, 
  {
    name: 'Jonathan Jones',
    ageRange: 19,
    bio: "At 19, I'm rocking the world with my zest for life! Whether I'm strumming my guitar, testing out new recipes in the kitchen, or planning the next road trip, there's never a dull moment with me. Born and raised with a sense of humor and a passion for making every day count, I'm stoked to find a roomie to share in the excitement of this journey called life.",
    temperature_pref: "75-80",
    pets: "Has pets, open to living with others",
    sleepWakeHours: "Morning person",
    parties: "Maybe once a month a friend will stop by",
    cleanlinessLevel: "Fairly clean, occasionally messy",
    moveInDate: "Immediately",
    relationshipStatus: "Okay with roommate having a partner",
    sharingItems: "I would prefer if you ask",
    livingStyle: "We just live together and that’s it",
    drinkingHabits: "No",
    smoking: "No",
    decorationStyle: "Neutral colors",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Yes, but I can share if I have to",
    petPeeves: "when people don't know me as the most famous third-string quarterback in Tallahassee Community College's history",
    timeSpentInApartment: "Going out on weekends",
    politicalStatus: "left",
    preferredAgeRange: null,
    profilePic: '/images/05-jonathan.jpg',
    user_id: 5
  },
  {
    name: 'Emily Anderson',
    ageRange: 24,
    bio: "At 24, I've got a heart full of wanderlust and a passion for soaking up every bit of life. When I'm not plotting my next getaway, you'll find me experimenting with new recipes, doodling in my sketchbook, or binge-watching the latest documentary series. Born with a spontaneous spirit and an appreciation for the little things, I'm thrilled to find a roomie to share in the excitement of this beautiful journey.",
    temperature_pref: "75-80",
    pets: "Has pets, open to living with others",
    sleepWakeHours: "Morning person",
    parties: "Maybe once a month a friend will stop by",
    cleanlinessLevel: "Fairly clean, occasionally messy",
    moveInDate: "Immediately",
    relationshipStatus: "Okay with roommate having a partner",
    sharingItems: "I would prefer if you ask",
    livingStyle: "We just live together and that’s it",
    drinkingHabits: "No",
    smoking: "No",
    decorationStyle: "Neutral colors",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Yes, but I can share if I have to",
    petPeeves: "these low SALARIES",
    timeSpentInApartment: "Going out on weekends",
    politicalStatus: "left",
    preferredAgeRange: null,
    profilePic: '/images/06-emily.jpg',
    user_id: 6
  },
  {
    name: 'Jim Smith',
    ageRange: 28,
    bio: "THE Jim Smith here, hoping to connect with others in sunny Miami! I love the beach, parties, and accounting! Hope to find my Roomeo here!",
    temperature_pref: "75-80",
    pets: "Has pets, open to living with others",
    sleepWakeHours: "Morning person",
    parties: "Maybe once a month a friend will stop by",
    cleanlinessLevel: "Fairly clean, occasionally messy",
    moveInDate: "Immediately",
    relationshipStatus: "Okay with roommate having a partner",
    sharingItems: "I would prefer if you ask",
    livingStyle: "We just live together and that’s it",
    drinkingHabits: "No",
    smoking: "No",
    decorationStyle: "Neutral colors",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Yes, but I can share if I have to",
    petPeeves: "When people call me Jimmy",
    timeSpentInApartment: "Going out on weekends",
    politicalStatus: "left",
    preferredAgeRange: null,
    profilePic: '/images/07-jim.jpg',
    user_id: 7
  },
  {
    name: 'Maria Gonzalez',
    ageRange: 34,
    bio: "Fun, loving, and free personality! I'm moving to Miami really soon, and I'm hoping to have a new friend to go out to all the local bars and clubs with! Can't wait to meet you!!!",
    temperature_pref: "75-80",
    pets: "Has pets, open to living with others",
    sleepWakeHours: "Morning person",
    parties: "Maybe once a month a friend will stop by",
    cleanlinessLevel: "Fairly clean, occasionally messy",
    moveInDate: "Immediately",
    relationshipStatus: "Okay with roommate having a partner",
    sharingItems: "I would prefer if you ask",
    livingStyle: "We just live together and that’s it",
    drinkingHabits: "No",
    smoking: "No",
    decorationStyle: "Neutral colors",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Yes, but I can share if I have to",
    petPeeves: "hialeah",
    timeSpentInApartment: "Going out on weekends",
    politicalStatus: "left",
    preferredAgeRange: null,
    profilePic: '/images/08-maria.jpg',
    user_id: 8
  },
  {
    name: 'Kevin Johnson',
    ageRange: 31,
    bio: "Hard worker, but very friendly! Born and raised in Miami, and this traffic is a nightmare! I hope to meet a fellow roomie who wants to live in Brickell. I just want to be in an area with more walkability, so I don't have to deal with bumper-to-bumper traffic anymore. Also I like pancakes.",
    temperature_pref: "75-80",
    pets: "Has pets, open to living with others",
    sleepWakeHours: "Morning person",
    parties: "Maybe once a month a friend will stop by",
    cleanlinessLevel: "Fairly clean, occasionally messy",
    moveInDate: "Immediately",
    relationshipStatus: "Okay with roommate having a partner",
    sharingItems: "I would prefer if you ask",
    livingStyle: "We just live together and that’s it",
    drinkingHabits: "No",
    smoking: "No",
    decorationStyle: "Neutral colors",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Yes, but I can share if I have to",
    petPeeves: "Miami traffic",
    timeSpentInApartment: "Going out on weekends",
    politicalStatus: "left",
    preferredAgeRange: null,
    profilePic: '/images/09-kevin.jpg',
    user_id: 9
  },
  {
    name: 'Gertrude Walters',
    ageRange: 90,
    bio: "",
    temperature_pref: "65-70",
    pets: "Has pets, open to living with others",
    sleepWakeHours: "Morning person",
    parties: "Maybe once a month a friend will stop by",
    cleanlinessLevel: "Fairly clean, occasionally messy",
    moveInDate: "Immediately",
    relationshipStatus: "Okay with roommate having a partner",
    sharingItems: "I would prefer if you ask",
    livingStyle: "We just live together and that’s it",
    drinkingHabits: "No",
    smoking: "No",
    decorationStyle: "Neutral colors",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Yes, but I can share if I have to",
    petPeeves: "CHILDREN and BABIES and YOUNG PEOPLE IN THE RETIREMENT HOME",
    timeSpentInApartment: "Going out on weekends",
    politicalStatus: "left",
    preferredAgeRange: null,
    profilePic: '/images/10-gertrude.jpg',
    user_id: 10
  },
  {
    name: 'Justin Drew Bieber',
    ageRange: 29,
    bio: "",
    temperature_pref: "75-80",
    pets: "Has pets, open to living with others",
    sleepWakeHours: "Morning person",
    parties: "Maybe once a month a friend will stop by",
    cleanlinessLevel: "Fairly clean, occasionally messy",
    moveInDate: "Immediately",
    relationshipStatus: "Okay with roommate having a partner",
    sharingItems: "I would prefer if you ask",
    livingStyle: "We just live together and that’s it",
    drinkingHabits: "No",
    smoking: "No",
    decorationStyle: "Neutral colors",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Yes, but I can share if I have to",
    petPeeves: "My ex",
    timeSpentInApartment: "Going out on weekends",
    politicalStatus: "left",
    preferredAgeRange: null,
    profilePic: '/images/11-justin.jpg',
    user_id: 11
  },
  {
    name: 'Archibald Cyrus Kennedy VI',
    ageRange: 37,
    bio: "",
    temperature_pref: "75-80",
    pets: "Has pets, open to living with others",
    sleepWakeHours: "Morning person",
    parties: "Maybe once a month a friend will stop by",
    cleanlinessLevel: "Fairly clean, occasionally messy",
    moveInDate: "Immediately",
    relationshipStatus: "Okay with roommate having a partner",
    sharingItems: "I would prefer if you ask",
    livingStyle: "We just live together and that’s it",
    drinkingHabits: "No",
    smoking: "No",
    decorationStyle: "Neutral colors",
    cleaningTasks: "I’ll clean my stuff, you clean yours",
    bathroom: "Yes, but I can share if I have to",
    petPeeves: "Archibald Cyrus Kennedy V",
    timeSpentInApartment: "Going out on weekends",
    politicalStatus: "right",
    preferredAgeRange: null,
    profilePic: '/images/12-archibald.jpg',
    user_id: 12
  },
];

const seedSurvey = () => Survey.bulkCreate(surveydata);

module.exports = seedSurvey;
