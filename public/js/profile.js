const emailChangeHandler = async (event) => {
    event.preventDefault();

    let email = document.querySelector('#email-change').value.trim();
    let userId = localStorage.getItem("userId");

    if (email) {
        const response = await fetch(`/api/users/${userId}`, {
            method: "PUT",
            body: JSON.stringify({
                email: email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to update.');
        }
    }
};
const usernameChangeHandler = async (event) => {
    event.preventDefault();

    let username = document.querySelector('#username-change').value.trim();
    let userId = localStorage.getItem("userId");

    if (username) {
        const response = await fetch(`/api/users/${userId}`, {
            method: "PUT",
            body: JSON.stringify({
                username: username
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to update.');
        }
    }
};
const passwordChangeHandler = async (event) => {
    event.preventDefault();

    let password = document.querySelector('#password-change').value.trim();
    let userId = localStorage.getItem("userId");

    if (password) {
        const response = await fetch(`/api/users/${userId}`, {
            method: "PUT",
            body: JSON.stringify({
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to update.');
        }
    }
};
const consumedChangeHandler = async (event) => {
    event.preventDefault();

    let consumed = document.querySelector('#consumed-change').value.trim();
    let userId = localStorage.getItem("userId");

    if (consumed) {
        const response = await fetch(`/api/caloriesconsumed/${userId}`, {
            method: "PUT",
            body: JSON.stringify({
                goal: consumed
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to update.');
        }
    }
};
const burnedChangeHandler = async (event) => {
    event.preventDefault();

    let burned = document.querySelector('#burned-change').value.trim();
    let userId = localStorage.getItem("userId");

    if (burned) {
        const response = await fetch(`/api/caloriesburned/${userId}`, {
            method: "PUT",
            body: JSON.stringify({
                goal: burned
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to update.');
        }
    }
};
document
    .querySelector('#email-submit')
    .addEventListener('click', emailChangeHandler);
document
    .querySelector('#username-submit')
    .addEventListener('click', usernameChangeHandler);
document
    .querySelector('#password-submit')
    .addEventListener('click', passwordChangeHandler);
document
    .querySelector('#consumed-submit')
    .addEventListener('click', consumedChangeHandler);
document
    .querySelector('#burned-submit')
    .addEventListener('click', burnedChangeHandler);
