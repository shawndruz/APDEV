document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('createPostForm');
    const homeButton = document.querySelector('.HomeButton');
    const backButton = document.getElementById('BackButton');

    // Home button 
    homeButton.addEventListener('click', function () {
        window.location.href = 'website.html';
    });

    // Back button 
    backButton.addEventListener('click', function () {
        window.history.back();
    });

    // Post box (creating a post mismo)
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const topicInput = document.getElementById('topic');
        const headerInput = document.getElementById('header');
        const contentInput = document.getElementById('content');

        const topic = topicInput.value.trim();
        const header = headerInput.value.trim();
        const content = contentInput.value.trim();

        if (!/^\S+$/.test(topic)) {
            alert('Topic must not contain spaces.');
            return;
        }

        if (header === '' || content === '') {
            alert('Header and content cannot be empty.');
            return;
        }

        createPost(topic, header, content);
    });

    function createPost(topic, header, content) {
        console.log('Post created with topic:', topic, 'header:', header, 'content:', content);
        alert('Post created successfully!');
        
        document.getElementById('createPostForm').reset();

        window.location.href = 'website.html';
    }
});
