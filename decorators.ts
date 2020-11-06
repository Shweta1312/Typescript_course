class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError('Oops, the boat was sunk!')
  pilot(): void {
    throw new Error();
    console.log('Swish');
  }

  
  anotherFunction(): void {
    console.log('Just a trial');
  }
}

//Decorator factory
function logError(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(message);
      }
    };
  };
}

new Boat().pilot();
