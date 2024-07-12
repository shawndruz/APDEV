document.addEventListener('DOMContentLoaded', function() {
    // Event listeners 
    document.getElementById('HomeButton').addEventListener('click', () => redirectTo('website.html'));
    document.getElementById('EditProfileButton').addEventListener('click', () => redirectTo('editprofile.html'));
    document.getElementById('SignOutButton').addEventListener('click', handleLogout);
    
    function redirectTo(url) {
        window.location.href = url;
    }

    // Logout function
    function handleLogout() {
        localStorage.removeItem('username');
        localStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('isLoggedIn');

        // Redirect to login page
        redirectTo('login.html');
    }

    // Sample posts on profile page only (not same as main page)
    const postContainer = document.getElementById('PostContainer');

    const posts = [
        {
            header: "Reasons I think Mary Grace is a Cult",
            author: "Username",
            body: "Mary Grace Restaurants? More like Mary Grace Cult! I mean, have you seen their devoted followers lining up like zombies for their ensaymadas and pasta? It's like they've been brainwashed into thinking that these dishes are the pinnacle of culinary achievement. And don't even get me started on their signature whipped butter—people practically worship it! It's as if they believe consuming it will grant them eternal happiness or something. Plus, have you noticed how everyone who eats there suddenly starts speaking in hushed tones about the Mary Grace Experience, as if it's some kind of religious awakening? It's all just a ploy to lure unsuspecting souls into their carb-filled lair, where they'll be forever ensnared in the clutches of their cultish cuisine. Wake up, people! There's more to life than blindly following the breadcrumbs of a glorified bakery!"
        },
        {
            header: "Bistro Group of Restaurants Yay or Nay",
            author: "Username",
            body: "The Bistro Group of Restaurants, a mixed bag of culinary delights or a recipe for disappointment? It depends on who you ask. Some rave about the diverse array of dining options, from Italian classics at Italiannis to modern Asian fusion at Modern Shanghai. They applaud the consistency in quality and the inviting ambiance that draws them back time and again. Others, however, lament the inflated prices for dishes that often fall short of expectations. They argue that the novelty wears off quickly, leaving behind a sense of culinary déjà vu. Despite the mixed reviews, one thing is certain: the Bistro Group has carved out a significant niche in the restaurant scene, appealing to both adventurous foodies and those seeking familiarity in their dining experiences. Ultimately, whether it's a yay or nay depends on your palate and your tolerance for culinary adventures."
        },
        {
            header: "Jollibee Sopas",
            author: "Username",
            body: "Jollibee's Macaroni Soup—a hidden gem on their menu that often gets overshadowed by their more famous offerings, but deserving of much more attention. This warm and comforting bowl of goodness is like a hug in a bowl, especially perfect for rainy days or when feeling under the weather. The combination of hearty macaroni, flavorful broth, and tender bits of chicken or beef is just what the doctor ordered for soothing both body and soul. Yet, it's often overlooked in favor of Jollibee's iconic fried chicken or sweet spaghetti. However, those in the know understand the magic of this simple yet satisfying dish, turning to it for its warmth and nostalgia. So next time you're at Jollibee, don't pass up the chance to cozy up with a bowl of their Macaroni Soup—it might just become your new favorite comfort food."
        }
    ];

    posts.forEach(post => {
        const postBox = document.createElement('div');
        postBox.className = 'PostBox';

        postBox.innerHTML = `
            <div class="PostTop">
                <img src="images/Logo.png" alt="ChiVOGUE">
                <div class="PostAuthor">${post.author}</div>
            </div>
            <div class="PostHeader">${post.header}</div>
            <div class="PostBody">${post.body}</div>
        `;

        postContainer.appendChild(postBox);
    });
});
