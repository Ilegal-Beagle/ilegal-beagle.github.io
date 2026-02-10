function createProjectCard(title, image, description, features) {
    const card = document.createElement('div');
    card.className = 'projectCard';

    const titleElement = document.createElement('h2');
    titleElement.className = 'projectTitle';
    titleElement.textContent = title;

    const imageElement = document.createElement('img');
    imageElement.className = 'projectImage';
    imageElement.src = image;
    imageElement.alt = 'Project Image';

    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'projectDescription';
    descriptionElement.textContent = description;

    const featuresTitle = document.createElement('h3');
    featuresTitle.className = 'featuresTitle';
    featuresTitle.textContent = 'Features';

    const featuresList = document.createElement('ul');
    featuresList.className = 'featuresList';
    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    card.appendChild(titleElement);
    card.appendChild(imageElement);
    card.appendChild(descriptionElement);
    card.appendChild(featuresTitle);
    card.appendChild(featuresList);

    return card;
}

const projectContainer = document.getElementById('projectContainer');
projectContainer.appendChild(
    createProjectCard(
        'Korean Chess',
        'assets/dog.jpg',
        'Used Python and the Pygame library to create a chess variant called Janggi.',
        [
            'Mostly functional pieces',
            'Resizable UI'
        ]
    )
);
projectContainer.appendChild(
    createProjectCard(
        'Music Player',
        'assets/dog.jpg',
        'Lead a team to make a music playing app using Dart and Flutter',
        [
            'Load a music library from your local files',
            'play and queue music from your library',
            "basic LastFM API functionality, allowing you to look at album covers from lastFM",
        ]
    )
);

projectContainer.appendChild(
    createProjectCard(
        'Chat Room',
        'assets/dog.jpg',
        'Used Rsut to make a multithredded TCP chat room',
        [
            'Chat between two machines on the same network',
            'supports two or more clients at once',
            "Supports sending images in the chatroom",
            "Tenor API gif support",
        ]
    )
);
