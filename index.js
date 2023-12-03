let team1;
let team2;

async function getdat() {
  try {
    const response = await fetch("http://localhost:3002/isl");
    const movies = await response.json();
    team1 = movies.teams[0];
    team2 = movies.teams[1];

    console.log("Team 1:", team1.name);

    // Update the UI after getting the data
    updateUI();
  } catch (error) {
    console.error("Error fetching data:", error);
    // Optionally, log more details about the error for debugging purposes
  }
}

function updateUI() {
  var team1Title = document.querySelector('.team-title1');
  var team2Title = document.querySelector('.team-title2');
  var logos = document.getElementsByClassName('logo');
// team title
  team1Title.innerHTML = team1.name;
  team2Title.innerHTML = team2.name;

  // Change logo for each element with the class 'logo'
  var imgUrl1 = 'https://www.indiansuperleague.com/static-assets/images/club/';
  // replace with your second URL

  Array.from(logos).forEach((logo, index) => {
    var imgSrc = index === 0 ? imgUrl1 + team1.id + '.png' : imgUrl1 + team2.id + '.png';
    logo.style.backgroundImage = `url(${imgSrc})`;
  });

  /*stats */
  // get goal
  var goal = document.getElementsByClassName('score')
  goal[0].innerHTML = `<h2>${team1.score}</h2>`
  goal[1].innerHTML = `<h2>${team2.score}</h2>`
  // get passes
 var passes = document.getElementsByClassName('passes')
 passes[0].innerHTML = team1.stats.touches.total_passes
 passes[1].innerHTML = team2.stats.touches.total_passes

}

// Call the function to initiate the data fetching and UI update
setInterval(getdat,5000)
