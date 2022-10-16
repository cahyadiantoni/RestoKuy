/* eslint-disable no-undef */
import FavoriteRestaurantDB from '../src/scripts/data/favoriteRestaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

beforeEach(() => {
  addLikeButtonContainer();
});

describe('Favoriting Restaurant', () => {
  it('Harus menunjukkan tombol suka ketika restoran belum disukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('Tidak Boleh menampilkan tombol suka ketika restoran belum pernah disukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });

  it('Harus bisa menyukai restoran', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestaurantDB.getRestaurant(1);

    expect(resto).toEqual({ id: 1 });

    FavoriteRestaurantDB.deleteRestaurant(1);
  });

  it('sebaiknya tidak menambahkan restoran lagi ketika sudah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantDB.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantDB.getAllRestaurant()).toEqual([{ id: 1 }]);

    FavoriteRestaurantDB.deleteRestaurant(1);
  });

  it('Seharusnya tidak menambahkan film ketika tidak memiliki id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantDB.getAllRestaurant()).toEqual([]);
  });
});
