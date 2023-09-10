interface ICelebrity {
  autograph(name: string): void;
}

class Celebrity implements ICelebrity {
  public async autograph(name: string): Promise<void> {
    // It's hard to sign albums, await for 4 second.
    await Bun.sleep(200);
    console.log(`With love to ${name}, Jeresoft!`);
  }
}

class Bodyguard implements ICelebrity {
  private celebrity: Celebrity;
  fans: number = 0;
  fansLimit: number = 3;
  sadFans: number = 0;
  happyFans: number = 0;

  constructor(celebrity: Celebrity) {
    this.celebrity = celebrity;
  }

  async autograph(name: string): Promise<void> {
    if (this.checkAccess(name)) {
      this.celebrity.autograph(name).then(() => {
        this.logAccess();
      });
    }
  }

  private checkAccess(name: string): boolean {
    this.fans++;
    if (this.fans > this.fansLimit) {
      console.log(
        `Bodyguard: I'm sorry ${name}, there  ${this.fans} fans waiting!`,
      );
      this.fans--;
      this.sadFans++;
      return false;
    }
    console.log(`Bodyguard: ${name} you're lucky, you'll get your autograph.`);
    return true;
  }

  private logAccess(): void {
    this.fans--;
    this.happyFans++;
  }
}

console.log('Ask a celebrity for a autograph!');
const celebrity = new Celebrity();
await celebrity.autograph('Picachu');
console.log('');

const fans = [
  'Joel',
  'Ben',
  'Amalia',
  'Maia',
  'Gigi',
  'Tania',
  'Nadia',
  'Issac',
];
console.log('Ask a bodyguard if the celebrity can sign an autograph for you!');

const bodyguard = new Bodyguard(celebrity);
for (const fan of fans) {
  await Bun.sleep(50);
  bodyguard.autograph(fan);
}
