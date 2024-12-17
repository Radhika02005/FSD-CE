function getData() {
  const token = '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';

  fetch("https://api.github.com/users/Radhika02005", {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((user) => {
      // Elements to display the user data
      const usernameEl = document.getElementById("username");
      const bioEl = document.getElementById("bio");
      const publicRepoEl = document.getElementById("publicRepo");
      const numRepoEl = document.getElementById("numRepo");
      const avatarEl = document.getElementById("avatar");

      // Check if all elements are present
      if (usernameEl && bioEl && publicRepoEl && numRepoEl && avatarEl) {
        // Update the elements with fetched data
        usernameEl.innerHTML = `Username: ${user.login}`;
        bioEl.innerHTML = `Bio: ${user.bio || "No bio available"}`;
        publicRepoEl.innerHTML = `Public Repos: ${user.public_repos}`;
        numRepoEl.innerHTML = `No. of Repos: ${user.public_repos}`;
        avatarEl.src = user.avatar_url; // Set the avatar image source
        avatarEl.alt = `${user.login}'s avatar`; // Set the alt text for the image
      } else {
        console.error("One or more elements were not found in the HTML.");
      }
    })
    .catch(error => console.error('Error:', error));
}

// Event listener to call getData on button click
document.getElementById("getButton").addEventListener("click", getData);
