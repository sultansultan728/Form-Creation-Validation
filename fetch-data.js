// Function to fetch and display user data
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the "Loading..." message
    dataContainer.innerHTML = '';

    // Create the list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching users:', error);
  }
}

// Wait until the DOM is fully loaded before running the function
document.addEventListener('DOMContentLoaded', fetchUserData);

