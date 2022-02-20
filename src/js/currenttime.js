const CurrentTime = {
  init(el) {
    if(!el) {
      console.warn('elment not found');
      return;
    }
    this.el = el;
    this.$hour = this.el.querySelector('.todo__main-time__hour');
    this.$minute = this.el.querySelector('.todo__main-time__minute');
    this.$seperate = this.el.querySelector('.todo__main-time__seperate');
    this.$greeted = document.querySelector('.greeted');

    setInterval(() => {
      const {hour, minute} = this.getCurrentTime();
      this.setTimeMsg(hour, minute);
      this.setGreetMsg();
    }, 1000)
  },
  getCurrentTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return {hour, minute}
  },
  setTimeMsg(hour, minute) {
    if(this.$hour.innerHTML !== hour.toString()) {
      this.$hour.innerHTML = hour.toString().padStart(2, '0');;
    }
    if(this.$minute.innerHTML !== minute.toString()) {
      this.$minute.innerHTML = minute.toString().padStart(2, '0');
    }
    if(this.$seperate.innerHTML !== ':') {
      this.$seperate.innerHTML = ':';
    } else {
      this.$seperate.innerHTML = '';
    }
  },
  setGreetMsg(hour) {
    const greetList = ['Good Morning', 'Good Evening', 'Good Night'];
    let greeted = '';
    if(hour < 12) {
      greeted = greetList[0];
    } else if(hour < 20) {
      greeted = greetList[1];
    } else {
      greeted = greetList[2];
    }

    if(this.$greeted.innerHTML !== greeted) {
      this.$greeted.innerHTML = greeted;
    }
  }
}

export default CurrentTime;
