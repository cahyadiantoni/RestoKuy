const assert = require('assert');

Feature('Add Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Menampilkan favorite Restaurant masih kosong', ({ I }) => {
  I.seeElement('#lists');
  I.see('Tidak ada restaurant untuk ditampilkan', '#lists');
});

Scenario('Memfavoritkan satu restaurant', async ({ I }) => {
  I.seeElement('#lists');
  I.see('Tidak ada restaurant untuk ditampilkan', '#lists');

  I.amOnPage('/');

  I.waitForElement('#lists');
  I.seeElement('.list-item a');

  const firstResto = locate('.list-item__title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('#lists');
  const favoritedRestoTitle = await I.grabTextFrom('.list-item__title');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});
