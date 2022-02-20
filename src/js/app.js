import Auth from './auth.js';
import Background from './background.js';
import CurrentTime from './currenttime.js';
import Weather from './weather.js';

class App {
  setUp() {
    const $body = document.body;
    const $time = document.querySelector('.todo__main-time');
    const $weather = document.querySelector('.todo__main-weather');

    Background.init($body);
    CurrentTime.init($time);
    Weather.init($weather);
  }
}

const app = new App();

app.setUp();
