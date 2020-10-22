class Anime {
  constructor(public name: string) {}

  public mainCharacter(): void {
    console.log(this.name);
  }

  public supportingCharacter(): void {
    this.mainCharacter();
    console.log("Suga");
  }
}

class Summary extends Anime {
  //Inheritance

  constructor(anime_name: string, public another: string) {
    super(anime_name);
  }
  public anotherMainCharacter(): void {
    //Overriding
    console.log(this.another);
  }
}

const anime = new Summary("Hinata", "Kageyama");

anime.mainCharacter();
anime.anotherMainCharacter();
