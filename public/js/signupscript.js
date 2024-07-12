document.addEventListener('DOMContentLoaded', () => {

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const signInButton = document.getElementById('signInButton');
    const signOutButton = document.getElementById('signOutButton');

    if (isLoggedIn) {
        signInButton.style.display = 'none';
        signOutButton.style.display = 'block';
    } else {
        signInButton.style.display = 'block';
        signOutButton.style.display = 'none';
    }

    signOutButton.addEventListener('click', handleSignOut);
});

function handleSignUp(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const user = {
        email: email,
        username: username,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));

    localStorage.setItem('username', username);
    localStorage.setItem('isLoggedIn', true);

    alert("Sign up successful!");

    // Replace sign-in button with sign-out button
    document.getElementById('signInButton').style.display = 'none';
    document.getElementById('signOutButton').style.display = 'block';

    // Back to the main website page
    window.location.href = 'website.html';
}

//ayaw gumana yoqna -n
function handleSignOut() {
    localStorage.removeItem('username');
    localStorage.setItem('isLoggedIn', false);
    alert("You have been signed out.");

    // Replace sign-out button with sign-in button
    document.getElementById('signOutButton').style.display = 'none';
    document.getElementById('signInButton').style.display = 'block';

    // Redirect to the login page
    window.location.href = 'login.html';
}
