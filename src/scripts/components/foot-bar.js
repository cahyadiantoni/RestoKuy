class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>Created with <i class="fas fa-heart"> </i> by <span>Cahya Diantoni</span></p>
        <p>Copyright © 2022 - <span class="footer_logo">RestoKuy</span> </p>
      </footer>          
    `;
  }
}

customElements.define('foot-bar', FooterBar);
