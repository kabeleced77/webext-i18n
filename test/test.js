const expect = require('chai').expect;
const I18nText = require('../dist/index.js').I18nText;

describe('Ressource function test', () => {

  before(function () {
    const chrome = require('sinon-chrome/extensions');
    const I18nPlugin = require('sinon-chrome/plugins').I18nPlugin;

    // localised messages for this test
    const locales =
    {
      "text": {
        "message": "Hello!"
      },
      "text_substitution": {
        "message": "Hello $substitution$!",
        "placeholders": {
          "substitution": { "content": "$1" }
        }
      }
    };
    chrome.registerPlugin(new I18nPlugin(locales));

    global.chrome = chrome;
  });

  it('should return encapsulated key', () => {
    const testKey = "text"
    var result = new I18nText(testKey).key();
    expect(result).to.equal(testKey);
  });

  it('should return localised value', () => {
    var result = new I18nText("text").value();
    expect(result).to.equal('Hello!');
  });

  it('should return localised value with substitution', () => {
    var result = new I18nText("text_substitution").value("World");
    expect(result).to.equal('Hello World!');
  });

  it('should return object from stringified object', () => {
    const testKey = "text"
    const resource = new I18nText(testKey);
    var resultKey = resource.fromJson(JSON.stringify(resource)).key();
    var resultValue = resource.fromJson(JSON.stringify(resource)).value();

    expect(resultKey).to.equal(testKey);
    expect(resultValue).to.equal("Hello!");
  });

  it('should return object from JSON string', () => {
    const testKey = "text"
    const jsongString = `{ "msKey" : "${testKey}" }`;
    const resource = new I18nText(testKey);
    var resultKey = resource.fromJson(jsongString).key();
    var resultValue = resource.fromJson(jsongString).value();

    expect(resultKey).to.equal(testKey);
    expect(resultValue).to.equal("Hello!");
  });
});
