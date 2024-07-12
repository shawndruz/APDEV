function handleLogin(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Saving info (temporary lang huhu idk how to retain user info)
    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('isLoggedIn', true);
    } else {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('isLoggedIn', true);
    }

    window.location.href = 'website.html';
}

function handleLogout() {
    // Clears data when logging out
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('isLoggedIn');

    window.location.href = 'login.html';
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') || sessionStorage.getItem('isLoggedIn');
    const authButtonContainer = document.getElementById('authButtonContainer');
    const authButton = document.getElementById('authButton');

    if (isLoggedIn) {
        authButton.innerHTML = '<img src="images/SignOutButton.png" alt="SIGN OUT">';
        authButton.onclick = handleLogout;
    } else {
        authButton.innerHTML = '<img src="images/SignInButton.png" alt="SIGN IN">';
        authButton.onclick = () => window.location.href = 'login.html';
    }
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);
