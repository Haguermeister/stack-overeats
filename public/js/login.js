const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      //      document.location.replace('/track');
      const userId = (await response.json()).user.id
      localStorage.setItem("userId", userId);
      document.location.replace('/track');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  console.log('test: submit');
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const userId = (await response.json()).user.id
      localStorage.setItem("userId", userId);
      document.location.replace('/track');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('#login-submit')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('#signup-submit')
  .addEventListener('click', signupFormHandler);
