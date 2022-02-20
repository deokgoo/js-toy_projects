const WEATHER_API_KEY = '53fafa63d4cc9554e3f37b372e59e3ae';
const Weather = {
  init(el) {
    if(!el) {
      console.warn('elment not found');
      return;
    }
    this.getCuurrentGPS();
  },
  callApi(lat, lon) {
    const url = `https://weather-apideok.herokuapp.com/api/${lat}/${lon}`;
    return fetch(url, {
      method: 'GET',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
    }).then(x => x.json());
  },
  getCuurrentGPS() {
    const positionHandler = async ({coords}) => {
      const {latitude, longitude} = coords;
      const fetchData = await this.callApi(latitude, longitude);
      const weather = fetchData.weather[0];

      const render = (icon, desc) => {
        const $icon = document.querySelector('.todo__main-weather>img');
        const $desc = document.querySelector('.todo__main-weather>.desc');
        const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        
        $icon.src = url;
        $desc.innerHTML = desc;
      }

      render(weather.icon, weather.description);
      
    }
    navigator.geolocation.getCurrentPosition(
      positionHandler, 
      () => {console.warn('geolocation not allow')})
  },
}

export default Weather;
