const data = [
    {
        name: 'Milk Moo',
        age: 57,
        gender: 'cow',
        lookingfor: 'farmer',
        location: 'Boston, MA',
        image: 'https://randomuser.me/api/portraits/men/57.jpg'
    },
    {
        name: 'Sarah Earlobeton',
        age: 37,
        gender: 'rich',
        lookingfor: 'fluff',
        location: 'Lynn, MA',
        image: 'https://randomuser.me/api/portraits/women/13.jpg'
    },
    {
        name: 'Thomas DaBossy',
        age: 26,
        gender: 'boiboi',
        lookingfor: 'a mom',
        location: 'Oviedo, FL',
        image: 'https://randomuser.me/api/portraits/men/33.jpg'
    }
]

function profileIterator(profiles) {
    let nextIndex = 0
    return {
        next: () => {
            if (nextIndex < profiles.length) {
                return { value: profiles[nextIndex++], done: false };
            } else {
                nextIndex = 1;
                return { value: profiles[0], done: false }
            }
        }
    }
}

function nextProfile() {
    const currentProfile = profile.next().value

    document.querySelector('#profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
        `

    document.querySelector('#imageDisplay').innerHTML = `
        <img src="${currentProfile.image}" alt="Avatar image of ${currentProfile.name}">
        `

}

const profile = profileIterator(data)

document.querySelector('#next').addEventListener('click', nextProfile)