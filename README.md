[![Build Status](https://app.travis-ci.com/kabeleced77/webext-i1https://app.travis-ci.com/kabeleced77/webext-i18n)

# webext-i18n
Encapsulates the access to i18n localised text resources for WebExtensions.

## Installation 
```sh
npm install @kabeleced/webext-i18n
```

## Usage

Assume you have following `message.json`file in your WebExtension folder `_locales/en/messages.json`:

```json
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
}
```

### Javascript
```javascript
const I18Text = require('@kabeleced/webext-i18n').I18nText;

const text = new I18nText('text').value();
const textWithSubstitution = new I18nText('text_substitution').value("World");

console.log('Text: ' + text);
console.log('Text with substituion: ' + textWithSubstitution);
```

The output should be
```sh
Text: Hello!
Text with substitution: Hello World!
```

### TypeScript

With TypeScript the usage of the interface `II18nText` is possible:

```typescript
import { II18nText, I18nText } from '@kabeleced/webext-i18n';

function printText(text: II18nText, textWithSubstitution: II18nText) {
  console.log('Text: ' + text.value());
  console.log('Text with substituion: ' + textWithSubstitution.value("World"));    
}

printText(new I18nText('text'), new I18nText('text_substitution'));
```
Output should be
```sh
Text: Hello!
Text with substitution: Hello World!
```

## Test 
```sh
npm run test
```
