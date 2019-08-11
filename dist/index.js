"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class I18nText {
    constructor(msKey) {
        this.msKey = msKey;
    }
    key() {
        return this.msKey;
    }
    value(substitution) {
        return chrome.i18n.getMessage(this.msKey.valueOf(), substitution);
    }
    fromJson(jsonString) {
        return Object.assign(new I18nText(""), JSON.parse(jsonString));
    }
}
exports.I18nText = I18nText;
