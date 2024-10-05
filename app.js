function getWeather() {
    const location = document.getElementById('location').value;
    if (location) {
        document.querySelector('.city').innerText = location;
        // You can integrate an API here to dynamically fetch temperature, humidity, etc.
        alert(`Fetching weather for ${location}...`);
    } else {
        alert('Please enter a city.');
    }
}
