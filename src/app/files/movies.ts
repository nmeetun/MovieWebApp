export default class Movie {
    private _title: string;
    private _year: string;
    private _genres: string[];
    private _contentRating: string;
    constructor() {
    }
    get title(): string {
      return this._title;
    }
    set title(value: string) {
      this._title = value;
    }
    get year(): string {
      return this._year;
    }
    set year(value: string) {
      this._year = value;
    }
    get genres(): string[] {
      return this._genres;
    }
    set genres(value: string[]) {
      this._genres = value;
    }
    get contentRating(): string {
      return this._contentRating;
    }
    set contentRating(value: string) {
      this._contentRating = value;
    }
  }
  