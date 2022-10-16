class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <div class="header">
          <div class="header_logo">
              <img src="../images/icon.png" alt="">
              <a href="/">RestoKuy</a>
          </div>
          <button id="menu_toggle" class="menu_toggle" tabindex="0" aria-label="tombol untuk membuka menu navbar"><i class="fas fa-bars"></i></button>
          <nav id="drawer" class="header_nav">
              <ul class="nav_list">
                  <li class="nav_item"><a href="#/home">Home</a></li>
                  <li class="nav_item"><a href="#/favorite">Favorites</a></li>
                  <li class="nav_item about_us">
                      <a target="_blank" href="https://www.linkedin.com/in/cahya-diantoni-810027235/" rel="noopener noreferrer">
                        About Us
                      </a>
                  </li>
              </ul>
          </nav>  
        </div>
        <section class="hero" id="hero">
            <div class="hero__inner">
                <h1 class="hero__title">RestoKuy</h1>
                <p class="hero__tagline">Cari dan Makan di Resto Kuyy !</p>
            </div>
        </section>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
