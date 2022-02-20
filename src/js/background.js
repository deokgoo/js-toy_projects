const Background = {
  init(el) {
    if(!el) {
      console.warn('elment not found');
      return;
    }
    this.el = el;
    this.setRandomBackground();
  },
  getListGallery() {
    const url = `https://picsum.photos/v2/list?page=2&limit=100`;

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
  getRandNumber() {
    return Math.floor(Math.random() * 100);
  },
  async setRandomBackground() {
    const fetchGalleryList = await this.getListGallery();
    const {download_url: backgroundUrl} = fetchGalleryList[this.getRandNumber()];
    this.el.style.background = `url(${backgroundUrl})`;
    this.el.style.backgroundRepeat = 'no-repeat';
    this.el.style.backgroundSize = 'cover';
  }
}

export default Background;
