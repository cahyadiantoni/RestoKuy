import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantDB from '../src/scripts/data/favoriteRestaurant-idb';

describe('Implementasi Idb Favorite Restaurant', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDB.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantDB.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantDB);
});
