const listItems = document.querySelectorAll('.menu-list-items');
const toggleTagsBtn = document.getElementById('toggleTags');
const pauseplay = document.getElementById('play-pause-button');
const startNewChat = document.getElementById('start-new-chat');
const userProfile = document.getElementById('user-profile')
const onlineUsers = document.getElementById('online-users');

const languages = [
    'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic', 'Russian',
    'Portuguese', 'Italian', 'Korean', 'Dutch', 'Swedish', 'Turkish', 'Polish', 'Indonesian',
    'Norwegian', 'Danish', 'Finnish', 'Thai', 'Czech'
];

listItems.forEach(item => {
    item.addEventListener('click', function () {
        listItems.forEach(item => {
            item.classList.remove('font-bold');
        });

        this.classList.add('font-bold');
    });
});


let tagsAdded = false;
let addedTags = [];
let languageIndex = 0;

// Function to add more tags
function addMoreTags() {
    const tagsContainer = document.querySelector('.lang-opt-content');

    for (let i = 0; i < 20; i++) {
        const newTag = document.createElement('span');
        newTag.classList.add('tag', 'font-semi-bold', 'rounded-4', 'text-capitalize', 'text-white');
        newTag.textContent = `${languages[languageIndex]} voice chat`;

        tagsContainer.insertBefore(newTag, toggleTagsBtn);
        addedTags.push(newTag);

        languageIndex = (languageIndex + 1) % languages.length;
    }

    tagsAdded = true;
    toggleTagsBtn.classList.remove('fa-plus-circle');
    toggleTagsBtn.classList.add('fa-minus-circle');
}

// Function to remove added tags
function removeAddedTags() {
    addedTags.forEach(tag => {
        tag.remove();
    });

    addedTags = [];
    tagsAdded = false;
    toggleTagsBtn.classList.remove('fa-minus-circle');
    toggleTagsBtn.classList.add('fa-plus-circle');
}

toggleTagsBtn.addEventListener('click', function () {
    if (!tagsAdded) {
        addMoreTags();
    } else {
        removeAddedTags();
    }
});

function togglePlayPause() {
    var video = document.getElementById('video-element');

    if (video.paused || video.ended) {
        video.play();
        document.getElementById('play-pause-button').classList.remove('fa-play-circle');
        document.getElementById('play-pause-button').classList.add('fa-pause-circle');
    } else {
        video.pause();
        document.getElementById('play-pause-button').classList.remove('fa-pause-circle');
        document.getElementById('play-pause-button').classList.add('fa-play-circle');
    }
}

pauseplay.addEventListener('click', togglePlayPause)
function startChat() {
    const loadingIcon = document.querySelector('.loading-icon');
    loadingIcon.style.display = 'block';
    userProfile.style.display = 'none';
    onlineUsers.style.display = 'none';
    setTimeout(() => {
        loadingIcon.style.display = 'none';
        userProfile.style.display = 'block';

    }, 2000);
    const startNewChatBtn = document.getElementById('start-new-chat');
    startNewChatBtn.innerText = "Next";

    startNewChatBtn.addEventListener('click', () => {
        const newButtonsContainer = document.querySelector('.new-buttons');
        newButtonsContainer.style.display = newButtonsContainer.style.display === 'none' ? 'block' : 'none';
    });
}

const startNewChatBtn = document.getElementById('start-new-chat');
startNewChatBtn.addEventListener('click', startChat);