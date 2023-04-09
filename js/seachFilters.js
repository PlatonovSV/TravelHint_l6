let cityList = [];

fetch('json/russianSities.json')
  .then(response => response.json())
  .then(name => {
    cityList = name;

    const cityInput = document.getElementById('cityInput');
    cityInput.addEventListener('input', () => {
      const searchTerm = cityInput.value.trim().toLowerCase();
      const matchingCities = cityList.filter(city => city.name.toLowerCase().includes(searchTerm));
      const resultsContainer = document.getElementById('resultsContainer');
      resultsContainer.innerHTML = '';


      matchingCities.forEach(city => {
        const cityElement = document.createElement('div');
        cityElement.innerText = city.name;
        cityElement.classList.add('city'); // добавляем класс 'city' к блоку
        resultsContainer.appendChild(cityElement);

        // добавляем обработчик клика для каждого элемента с городом
        cityElement.addEventListener('click', () => {
          cityInput.value = city.name; // вводим название города в поле ввода
          resultsContainer.innerHTML = ''; // очищаем список городов
        });
      });
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
