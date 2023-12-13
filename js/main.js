const listItems = document.querySelectorAll('.menu-list-items');
const toggleTagsBtn = document.getElementById('toggleTags');

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
