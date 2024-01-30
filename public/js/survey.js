//Get Cloudinary image URL from survey.handlebars
function handleCloudinaryUpload(url) {
  cloudinary_url = url;
}
const surveyFormHandler = async (event) => {
  console.log(cloudinary_url)
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
  const name = document.querySelector('#First-Last').value.trim();
  const ageRange= document.querySelector('#age-range').value.trim();
  const bio= document.querySelector('#bio').value.trim();


  const profilePic = cloudinary_url
 
// collect survey response 
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
      name,
      ageRange,
      profilePic,
      bio,
     }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/');

  };

  document
  .querySelector('.roommate-survey')
  .addEventListener('submit', surveyFormHandler);
