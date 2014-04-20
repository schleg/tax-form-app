describe('Signing up', function () {

  var ptor = protractor.getInstance();

  it('should navigate to the sign-up form', function () {
    browser.get('/#/signup').then(function () {
      browser.getCurrentUrl().then(function (url) {
        expect(url).toContain('/#/signup');
      });
    });
  });

  var checkValidationMessage = function(messageId, message) {
    var el = element(by.id(messageId));
    el.getText().then(function (text) {
      expect(text).toContain(message);
    });
  };

  var visitSignUp = function () {
    return browser.get('/#/signup')
  };

  var clickSignUpButton = function () {
    return element(by.id('sign-up-button')).click();
  };

  it('should show required message for name if missing', function () {
    visitSignUp().then(function () {
      clickSignUpButton().then(function () {
        checkValidationMessage('name-required-message', 'Required');
      });
    })
  });

  it('should not show required message for name if not missing', function () {
    visitSignUp().then(function () {
      element(by.id('name')).sendKeys('John Doe');
      clickSignUpButton().then(function () {
        checkValidationMessage('name-required-message', '');
      });
    })
  });
});
