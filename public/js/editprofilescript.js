document.addEventListener('DOMContentLoaded', function () {
    const usernameElement = document.querySelector('.Username');
    const bioElement = document.querySelector('.Bio');
    const backButton = document.getElementById('BackButton');
    const homeButton = document.getElementById('HomeButton');
    const signOutButton = document.querySelector('.SignOutButton');

    const editUsernameButton = document.querySelector('.EditUsernameButton');
    const editBioButton = document.querySelector('.EditBioButton');

    editUsernameButton.addEventListener('click', function () {
        const currentUsername = usernameElement.textContent;
        const newUsername = prompt('Edit your username:', currentUsername);
        if (newUsername !== null && newUsername.trim() !== '') {
            usernameElement.textContent = newUsername.trim();
        }
    });

    editBioButton.addEventListener('click', function () {
        const currentBio = bioElement.textContent;
        const newBio = prompt('Edit your bio:', currentBio);
        if (newBio !== null && newBio.trim() !== '') {
            bioElement.textContent = newBio.trim();
        }
    });

    backButton.addEventListener('click', function () {
        window.history.back();
    });

    if (homeButton) {
        console.log('HomeButton found');
        homeButton.addEventListener('click', function () {
            console.log('HomeButton clicked');
            window.location.href = 'website.html';
        });
    } else {
        console.error('HomeButton not found');
    }

    signOutButton.addEventListener('click', function () {
        localStorage.removeItem('username');
        localStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    });
});
