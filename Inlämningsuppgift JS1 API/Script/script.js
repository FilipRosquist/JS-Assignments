document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-button');
    const userDataContainer = document.getElementById('user-data-container');

    fetchButton.addEventListener('click', () => {
        fetchUserData();
    });

    function fetchUserData() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                displayUserData(data.results[0]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                userDataContainer.innerHTML = '<p>Error loading data.</p>';
            });
    }

    function FirstLetterGender(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function displayUserData(user) {
        const gender = FirstLetterGender(user.gender);
        updateBackgroundImage(user.gender);
        updateContentColor(user.gender);
        userDataContainer.innerHTML = `
            <div class="user-data-item">
                <img src="${user.picture.large}" alt="Profile Picture">
                <div>
                    <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                </div>
            </div>
        `;
    }

    function updateBackgroundImage(gender) {
        let imgLarge;
        if (gender === 'male') {
            imgLarge = '../IMG/boy.png';
        } else if (gender === 'female') {
            imgLarge = '../IMG/girl.png';
        } else if (gender === 'unknown'){
            imgLarge = '../IMG/defaultwallpaper.png';
        }

        const img = new Image();
        img.src = imgLarge;
        img.onload = () => {
            document.body.style.backgroundImage = `url('${imgLarge}')`;
        };
    }

    function updateContentColor(gender) {
        content.classList.remove('male', 'female', 'unknown');
        if (gender.toLowerCase() === 'male') {
            content.classList.add('male');
        } else if (gender.toLowerCase() === 'female') {
            content.classList.add('female');
        } else {
            content.classList.add('unknown');
        }
    }

    
});
