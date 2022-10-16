/* eslint-disable class-methods-use-this */
import { createRestaurantListTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <div class="loader-container" id="loader-container">
        <div id="loader"></div>
        </div> 
        <section class="content" id="content" tabindex="0">
        <div class="card">
            <h1 class="card__label">Your Favorite Restaurant's</h1>
            <div class="lists" id="lists">
            
            </div>
        </div>
        </section> 
      `;
  }

  runWhenUserIsSearching(callback) {
    document.querySelector('#query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantListTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('lists').innerHTML = html;

    // document.getElementById('resto-list').dispatchEvent(new Event('resto-list:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
    <div class="row" id="resto-item__not__found">
      <p>Tidak ada restaurant untuk ditampilkan</p>
    </div>
    `;
  }
}

export default FavoriteRestaurantSearchView;
