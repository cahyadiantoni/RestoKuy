const assert = require('assert');

Feature('Review Resto');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Menambahkan review pada restaurant', async ({ I }) => {
  const reviewText = 'Test Review Untuk E2E';
  I.amOnPage('/');
  I.seeElement('.list-item a');
  I.click(locate('.list-item a').first());

  I.seeElement('#customerReviewFormContainer form');
  I.fillField('#inputName', 'Cahya Tester');
  I.fillField('#inputReview', reviewText);
  I.click('#submitReview');

  const lastReview = locate('.review-comment p').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});
