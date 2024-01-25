//Josh added this document to extract survey data from the form and send it to the database

const surveyFormHandler = async (event) => {
  event.preventDefault(); // Add this line to prevent the default form submission
  const temperature_pref = document.querySelector('#temperature').value.trim();
  const pets = document.querySelector('#pets').value.trim();
  const sleepWakeHours = document.querySelector('#sleep-wake-hours').value.trim();
  const parties = document.querySelector('#parties').value.trim();
  const cleanlinessLevel = document.querySelector('#cleanliness-level').value.trim();
  const moveInDate = document.querySelector('#move-in-date').value.trim();
  const relationshipStatus = document.querySelector('#relationship-status').value.trim();
  const sharingItems = document.querySelector('#sharing-items').value.trim();
  const livingStyle = document.querySelector('#living-style').value.trim();
  const drinkingHabits = document.querySelector('#drinking-habits').value.trim();
  const smoking = document.querySelector('#smoking-habits').value.trim();
  const decorationStyle = document.querySelector('#decoration-style').value.trim();
  const cleaningTasks = document.querySelector('#cleaning-tasks').value.trim();
  const bathroom = document.querySelector('#bathroom').value.trim();
  const petPeeves = document.querySelector('#pet-peeves').value.trim();
  const timeSpentInApartment = document.querySelector('#time-spent-in-apartment').value.trim();
  const politicalStatus = document.querySelector('#political-status').value.trim();
  //const preferredAgeRange = document.querySelector('#preferred-age-range').value.trim();
  //const name = document.querySelector('#First-Last').value.trim();
  //const age = document.querySelector('#age-range').value.trim();
  const profilePic = document.querySelector('#file-input').value.trim();
  console.log(profilePic)

  const response1 = await fetch('/image-upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "image": "/Users/jalland/Desktop/Picture1.png" }),
  });

  

  const response = await fetch('/api/surveys', {
    method: 'POST',
    body: JSON.stringify({     
      temperature_pref,
      pets,
      sleepWakeHours,
      parties,
      cleanlinessLevel,
      moveInDate,
      relationshipStatus,
      sharingItems,
      livingStyle,
      drinkingHabits,
      smoking,
      decorationStyle,
      cleaningTasks,
      bathroom,
      petPeeves,
      timeSpentInApartment,
      politicalStatus,
      preferredAgeRange,
      name,
      age
     }),
    headers: { 'Content-Type': 'application/json' },
  });


  };

  document
  .querySelector('.roommate-survey')
  .addEventListener('submit', surveyFormHandler);