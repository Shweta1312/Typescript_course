class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
    console.log('Swish');
  }

  anotherFunction(): void {
    console.log('Just a trial');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Oops, the boat was sunk!');
    }
  };
}

new Boat().pilot();