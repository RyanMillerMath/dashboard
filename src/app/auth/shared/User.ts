export class User {
  email = '';
  password = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}