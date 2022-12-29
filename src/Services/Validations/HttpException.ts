export default class HttpException extends Error {
  constructor(public name: string, message: string) {
    super();
    this.name = name;
    this.message = message;
  }
}