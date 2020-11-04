class Boat {
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  pilot(): void {
    console.log('Swish');
  }

  anotherFunction(): void {
    console.log('Just a trial');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target: ', target);
  console.log('Key: ', key);
}
