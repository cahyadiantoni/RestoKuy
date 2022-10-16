import FavoriteRestaurantDB from '../src/scripts/data/favoriteRestaurant-idb';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-show-presenter';

describe('Menampilkan semua favorite restaurant', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('Ketika tidak ada restaurant favorit', () => {
    it('harus bertanya tentang favorit restaurant', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('Harus memunculkan informasi tidak ada restaurant', (done) => {
      document.getElementById('resto-list').addEventListener('resto-list:updated', () => {
        expect(document.querySelectorAll('#resto-item__not__found').length)
          .toEqual(1);

        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('saat favorit restaurant ada', () => {
    it('Harus menampilkan restaurant favorit', (done) => {
      document.getElementById('resto-list').addEventListener('resto-list:updated', () => {
        expect(document.querySelectorAll('#resto-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11, name: 'A', vote_average: 3, overview: 'Sebuah resto A',
        },
        {
          id: 22, name: 'B', vote_average: 4, overview: 'Sebuah resto B',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
