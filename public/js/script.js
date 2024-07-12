document.addEventListener('DOMContentLoaded', function() {
    const createPostButton = document.getElementById('CreatePostButton');
    const searchbar = document.getElementById('Searchbar');
    const signInButton = document.getElementById('authButton'); 
    const postContainer = document.getElementById('PostContainer');
    const userDisplayContainer = document.getElementById('UserDisplay');
    const topicsList = document.getElementById('TopicsList'); // New line to get TopicsList (not working pa -nina)
    const homeButton = document.querySelector('.HomeButton');

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');

    // Login 
    if (isLoggedIn) {
        signInButton.style.display = 'none';
        const userDisplay = document.createElement('div');
        userDisplay.innerHTML = `
            <a href="userpage.html" class="UserLink">
                <img src="images/Avatar.png" alt="Avatar" class="Avatar">
                <span class="Username">${username}</span>
            </a>`;
        userDisplayContainer.appendChild(userDisplay);
        console.log("User display updated with username:", username);
    }

    // Sign in
    signInButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'login.html';
    });

    // Home button
    homeButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'website.html';
    });
    
    // Create Post
    createPostButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'createpost.html';
    });

    /* this dont work idfk why T_T -n
    
        // Create Post
        const createPostButton = document.getElementById('CreatePostButton');
        createPostButton.addEventListener('click', function(event) {
            event.preventDefault(); 
    
            if (isLoggedIn) {
                const newPostTopic = prompt("Enter post topic (no spaces allowed):");
                const newPostTitle = prompt("Enter post title:");
                const newPostContent = prompt("Enter post content:");
    
                if (newPostTopic && newPostTitle && newPostContent) {
                    addPost(newPostTopic, username, newPostTitle, newPostContent);
                } else {
                    alert("Please fill in all fields.");
                }
            } else {
                window.location.href = 'login.html';
            }
        });


      */

    // Searchbar
    searchbar.addEventListener('input', function() {
        const keyword = searchbar.value.trim().toLowerCase();
        const posts = document.querySelectorAll('.PostBox');
        
        posts.forEach(post => {
            const postContent = post.textContent.toLowerCase();
            if (postContent.includes(keyword)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });

    // To make the posts appear 
    function addPost(topic, author, title, content) {
        const postBox = document.createElement('div');
        postBox.classList.add('PostBox');
        
        postBox.innerHTML = `
            <div class="PostTop">
                <img src="images/Logo.png" alt="ChiVOGUE">
                ${topic}
            </div>
            <div class="PostHeader">${title}</div>
            <div class="PostAuthor">Written by ${author}</div>
            <div class="PostBody">${content}</div>
            <div class="PostFooter">
                <button class="UpcastButton"><img src="images/Upcast.png" alt="Upcast"></button>
                <button class="DowncastButton"><img src="images/Downcast.png" alt="Downcast"></button>
                <button class="CommentButton"><img src="images/CommentButton.png" alt="Comment"></button>
            </div>`;
        
        postContainer.insertBefore(postBox, postContainer.firstChild); // Newest posts go on top (so most recent)
    }

    // Sample posts (feel free to add if yw -nina)
    const posts = [
        {
            topic: '- DTF-Enthusiasts',
            author: 'NinaLovesCalamari',
            title: 'DTF?',
            content: "Din Tai Fung, the love of my life FR! This gem of a restaurant has me hooked with their delicate and flavorful soup dumplings. The first bite is like a warm hug from the inside out. Each dumpling bursts with savory goodness, and the broth is like liquid gold. You can't help but slurp it up, even if it's not the most graceful thing to do in public. Trust me, it's worth the occasional side-eye from fellow diners. Now, onto the salted egg squid. Just the thought of it makes my mouth water. The crispy coating gives way to tender squid, and that salted egg yolk sauce? It's like a dance party in your mouth. The richness of the salted egg perfectly complements the subtle sweetness of the squid. It's a flavor explosion that leaves me craving more with every bite. And let's not forget about the garlic scallions fried rice – simple yet oh-so-satisfying. Each grain of rice is coated in fragrant garlic and tossed with fresh scallions, resulting in a dish that's both comforting and addictive. Din Tai Fung, you've stolen a piece of my heart (and stomach)."
        },
        {
            topic: '- Rockwell-Eats',
            author: 'RockwellRunClub',
            title: 'MarudoriSlut4L',
            content: "Marudori Ramen Place is an absolute game-changer in the ramen world, turning the traditional pork broth on its head with their revolutionary chicken-based broth. From the first sip, it's clear that this isn't your average bowl of ramen. The broth is rich and flavorful, yet lighter and cleaner than its pork counterpart, making each spoonful a refreshing delight. It's the kind of soup that makes you feel like you're indulging in something both hearty and health-conscious. The tender chicken pieces and perfectly cooked noodles only add to the magic, creating a bowl of comfort that's hard to beat. And let's talk about their gyoza oh my gyawd, these aren't your typical dumplings. Shaped like xiao long bao, they immediately catch your eye, but it's the taste that really hooks you. Juicy and bursting with flavor, each gyoza is a mini explosion of deliciousness. The unique shape not only makes them fun to eat but also ensures that every bite is packed with savory goodness. Marudori Ramen Place has truly mastered the art of combining tradition with innovation, making it my go-to spot for a ramen experience that's both familiar and refreshingly new."
        },
        {
            topic: '- WagKakainD2',
            author: 'FastFoodEnthusiast',
            title: 'McDonalds Crispy Rat',
            content: "Grabe, hindi ko inakala na mangyayari ito sa McDonald's. Pumunta ako para sa quick lunch, pero pagkuha ko ng chicken, napansin ko na parang rat ang shape! Akala ko joke lang, pero seryoso pala. Sobrang off-putting, parang wala nang gana kumain after that. Hindi lang yun, parang luma na rin yung chicken, dry at walang lasa. Ang hirap pa makahanap ng maayos na upuan, ang dumi ng paligid. Dati rati, McDonald's was my go-to for fast food, pero after this experience, never na ako babalik. Wag kau kakain d2!!!!"
        },
        {
            topic: '- QuezonCity-Eats',
            author: 'LukeOng1738',
            title: 'Yushoken On Top',
            content: "Ramen Yushoken stands out as the premier ramen chain in the Philippines, unmatched by competitors like Ippudo, Ramen Nagi, and Marudori. Each Yushoken branch exudes a cozy yet modern ambiance, complemented by friendly and attentive staff. While the menu is limited to small bites, ramen, and drinks, the superb quality of the food more than compensates. My favorite order is the Super Chashu Ramen with Sola Lemon Iced Tea. The Super Chashu Ramen features standard ramen toppings, a generous slice of chashu, and an exceptionally flavorful smoky shoyu-based broth. The chashu is tender, juicy, and rich in flavor. Since discovering this chain, Yushoken has become my go to spot for comfort food, offering a warm and inviting atmosphere."
        },
        {
            topic: '- SanJuanCity-Eats',
            author: 'KenGaGo',
            title: 'Xiuu Fine Cantonese Dining: The Premier Family Dining Experience',
            content: "Xiuu Fine Cantonese Dining is a hidden gem that truly embodies the essence of Cantonese cuisine. From the moment you step through the door, you're greeted with elegance and warmth, setting the stage for an unforgettable dining experience. The menu is a culinary journey through the flavors of Canton, with each dish meticulously crafted to perfection. One standout dish is their signature roast duck. The skin is crisp and glistening with flavor, while the meat is tender and succulent. It's a true testament to the chef's skill and attention to detail. Another must try is their dim sum selection, which boasts a variety of dumplings and buns bursting with flavor. Whether it's the delicate har gow or the savory char siu bao, each bite is a taste of perfection. But what truly sets Xiuu apart is their commitment to quality and service. The staff goes above and beyond to ensure that every guest feels welcomed and pampered. From the attentive servers to the stylish decor, every aspect of the dining experience is topnotch. Xiuu Fine Cantonese Dining is more than just a restaurant; it's a culinary journey that leaves you craving more."
        },
        {
            topic: '- QuezonCity-Eats',
            author: 'UrMummyy',
            title: 'Oedo Japanese Restaurant Remains',
            content: "Oedo Japanese Restaurant in Sto. Domingo, Quezon City, has undergone a remarkable transformation, both in its ambiance and its menu. The newly renovated space exudes a modern yet cozy vibe, setting the perfect backdrop for a delightful dining experience. As soon as you step inside, you're greeted with warm hospitality and an inviting atmosphere that makes you feel right at home. Now, let's talk about the food, it is definitely a feast for the senses! First up, the Gyudon. Tender slices of beef simmered in a savory sauce, served atop a bed of fluffy rice—each bite is a symphony of flavors that leaves you craving for more. And the Salmon Sashimi? It's like tasting the ocean itself. Fresh, buttery slices of salmon that practically melt in your mouth, leaving behind a burst of umami goodness. Arguably, the crown jewel of Oedo's menu is their Oedo Maki. This maki, topped with eel and fish eggs, is a true showstopper. The combination of flavors and textures is simply divine—the sweetness of the eel, the brininess of the fish eggs, and the crunch of the rice all come together in perfect harmony. It's a dish that not only satisfies your taste buds but also leaves you in awe of the culinary craftsmanship behind it. Oedo Japanese Restaurant is a must visit for any sushi lover in Quezon City. Trust me, you won't be disappointed!"
        }
    ];

    // This will add the sample posts to the page * this is manual & hardcoded lng -n
    posts.forEach(post => addPost(post.topic, post.author, post.title, post.content));

    // Function to add topics to the "Topics" section
    function addTopics(topics) {
    const topicsList = document.getElementById('TopicsList'); // Get the correct element by ID
    topicsList.innerHTML = '';
    //`<div class="PostTop"><img src="images/Logo.png" alt="ChiVOGUE"></div>`; <- idea is dapat may logo before each topic hehe pero tsaka na un -n
    topics.forEach(topic => {
        const topicItem = document.createElement('li');
        topicItem.textContent = topic;
        topicsList.appendChild(topicItem);
    });
}

    // Sample topics (feel free to add more if needed)
    const topics = [
        'QuezonCity-Eats',
        'DTF-Enthusiasts',
        'Rockwell-Eats',
        'WagKakainD2',
        'SanJuanCity-Eats'
    ];

    // Add topics to the list (AYAW GUMANA AMP)
    addTopics(topics);


});
