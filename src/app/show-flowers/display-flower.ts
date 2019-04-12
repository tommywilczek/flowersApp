export class DisplayFlower<T> {
    options: {key: T, value: T}[] = [];
  
    constructor(options: {} = {}) {
      this.options = options['options'] || [];
    }
}
