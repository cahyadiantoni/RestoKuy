const assert = require('assert');

Feature('Menghapus Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Menghapus satu restaurant favorite', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '#lists');
  I.amOnPage('/');

  I.waitForElement('#lists');
  I.seeElement('.list-item a');
  const firstResto = locate('.list-item a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('#lists a');
  const firstRestolike = locate('.list-item a').first();
  const favoritedRestoTitle = await I.grabTextFrom(firstRestolike);
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
  I.click(firstRestolike);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('#lists');
  const onFav = await I.grabTextFrom('#lists');
  assert.strictEqual(onFav, 'Tidak ada restaurant untuk ditampilkan');
});
