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
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
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
    const positionHandler = ({coords}) => {
      const {latitude, longitude} = coords;
      console.log(this.callApi(latitude, longitude));
    }
    navigator.geolocation.getCurrentPosition(
      positionHandler, 
      () => {console.warn('geolocation not allow')})
  }
}

export default Weather;
