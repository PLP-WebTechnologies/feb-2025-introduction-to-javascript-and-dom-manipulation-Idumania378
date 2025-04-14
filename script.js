// Array of content messages to cycle through
const contentMessages = [
    'We build tailored digital experiences for startups, brands, and businesses looking to make an impact online.',
    'Our team handles everything — from stunning user interfaces to robust backend systems. Let’s make your vision a reality.',
    'We can’t generate more new content at the moment.'
  ];
  
  let clickCount = 0; // Counter to track button clicks
  
  // Get the content paragraph element
  const contentParagraph = document.getElementById('mainText');
  
  // Event listener to handle button click
  document.getElementById('changeContentButton').addEventListener('click', () => {
    // Change the text content based on the click count
    contentParagraph.textContent = contentMessages[clickCount];
  
    // Change the text color to a random color on each click
    contentParagraph.style.color = getRandomColor();
  
    // Increment the click count
    clickCount++;
  
    // If we reach the end, disable the button or stop changing content
    if (clickCount >= contentMessages.length) {
      clickCount = 0; // Reset click count to loop through messages again
      // Optionally disable the button after the last click
      document.getElementById('changeContentButton').disabled = true;
    }
  });
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  