interface AnimeInfo {
  character: string; //Interface code is reused
  //seasons: number,
  //ongoing: boolean,
  summary(): string;
}

const haikyu = {
  character: "Hinata",
  seasons: 5,
  ongoing: true,
  summary(): string {
    return `Name is ${this.character}`;
  },
};

const fairytail = {
  character: "Natsu",
  summary(): string {
    return `Name is ${this.character}`;
  },
};

const printCharacter = (specs: AnimeInfo) => {
  /*
    console.log(`Character is ${specs.character}`);
    console.log(`Seasons: ${specs.seasons}`);
    console.log(`Ongoing:${specs.ongoing}`);
    */
  console.log(specs.summary());
};

printCharacter(haikyu);
printCharacter(fairytail); //reusing the same interface as fairytail object satisfies the condition
