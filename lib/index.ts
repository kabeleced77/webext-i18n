export interface II18nText {
  key(): string;
  value(substitution?: string): string;
  fromJson(jsonString: string): II18nText;
}

export class I18nText implements II18nText {
  constructor(
    private msKey: string,
  ) { }

  public key(): string {
    return this.msKey;
  }
  public value(substitution?: string): string {
    return chrome.i18n.getMessage(this.msKey.valueOf(), substitution);
  }
  public fromJson(jsonString: string): II18nText {
    return Object.assign(new I18nText(""), JSON.parse(jsonString));
  }
}
