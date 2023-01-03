Feature('Liking and Unliking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('Liking and UnLiking Resto', async ({ I }) => {
    // Liking Resto
    I.amOnPage('/');
    I.seeElement('#rows');
    I.waitForElement('.row-item__title a',20);
    I.seeElement('.row-item__title a');
    I.click(locate('.row-item__title a').first());
    I.waitForElement('#likeButton',20);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/like');

    // UnLiking Resto
    I.seeElement('#rows');
    I.waitForElement('.row-item__title a',20);
    I.seeElement('.row-item__title a');
    I.click(locate('.row-item__title a').first());
    I.waitForElement('#likeButton',20);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/like');
    I.see('','#rows');
    pause();

});
