import { v4 } from 'uuid';

class Uuid {
  constructor() {
    this.uuid = v4();
  }

  private uuid: string;

  toString() {
    return this.uuid;
  }
}

export default Uuid;