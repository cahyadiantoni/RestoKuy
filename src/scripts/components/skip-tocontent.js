class SkipToContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#content" class="skip-link">Lewati ke list restaurant</a>
    `;
  }
}

customElements.define('skip-tocontent', SkipToContent);
