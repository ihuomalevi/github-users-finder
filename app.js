// Init GitHub
const github = new Github;

// Init uI
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
   github.getUser(userText)
   .then(data => {

    if(data.profile.message === 'Not Found') {
      // Show alert
     ui.showAlert('User not found', 'alert alert-danger');

    }else{
     // Show profile
    ui.showProfile(data.profile);
    ui.showRepos(data.repos);
    }

   })
  }else{
    // clear profile
    ui.clearProfile();
  }
});