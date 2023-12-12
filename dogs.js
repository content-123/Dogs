const fetchRandomDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        document.getElementById('randomDogImage').src = data.message;
      })
      .catch(error => console.error('Error fetching random dog image:', error));
  };

  // Trigger fetch on button click
  document.getElementById('fetchRandomDog').addEventListener('click', fetchRandomDogImage);

  // Fetch random dog image on page load
  fetchRandomDogImage();

