const hotelsContainer = document.getElementById('hotelsContainer');
const filterButton = document.getElementById('filterButton');
const cityInput = document.getElementById('cityInput');

let hotelsData;

fetch('js/public/hotels.json')
  .then(response => response.json())
  .then(data => {
    hotelsData = data;
    showHotels(hotelsData);
  });

function showHotels(data) {
  hotelsContainer.innerHTML = '';
  data.forEach(hotel => {
    const hotelElement = document.createElement('a');
    hotelElement.href = 'detailed.html';
    hotelElement.classList.add('hotel');

    const hotelImg = document.createElement('img');
    hotelImg.classList.add('hotelImg');
    hotelImg.src = hotel.image;
    hotelImg.alt = hotel.name;

    const hotelName = document.createElement('p');
    hotelName.classList.add('hotelName');
    hotelName.textContent = hotel.name;

    const hotelDescription = document.createElement('p');
    hotelDescription.classList.add('hotelDescription');
    hotelDescription.innerHTML = hotel.description;

    const hotelCity = document.createElement('p');
    hotelCity.classList.add('hotelCity');
    hotelCity.textContent = hotel.city;

    const hotelDate = document.createElement('div');
    hotelDate.classList.add('hotelDate');

    hotelDate.appendChild(hotelName);
    hotelDate.appendChild(hotelDescription);
    hotelDate.appendChild(hotelCity);

    hotelElement.appendChild(hotelImg);
    hotelElement.appendChild(hotelDate);
    hotelsContainer.appendChild(hotelElement);
  });
}

function filterHotels() {
  const city = cityInput.value.toLowerCase().trim();
  const filteredHotels = hotelsData.filter(hotel => hotel.city.toLowerCase().includes(city));
  showHotels(filteredHotels);
}

filterButton.addEventListener('click', filterHotels);
