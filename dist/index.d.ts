export interface II18nText {
    key(): string;
    value(substitution?: string): string;
    fromJson(jsonString: string): II18nText;
}
export declare class I18nText implements II18nText {
    private msKey;
    constructor(msKey: string);
    key(): string;
    value(substitution?: string): string;
    fromJson(jsonString: string): II18nText;
}
