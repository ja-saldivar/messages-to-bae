const messages = {
  memoriesFragments: ['when you said "Increibla"?', 'when we first danced?', 'our first kiss?'],
  loveFragments: ['how smart you are', 'your smile', 'the way you walk'],
  datesFragments: ['go snowboarding', 'take a dancing class', 'go to a the beach'],
  randomSelection(a) {
    return Math.floor(Math.random()* a.length);
  },
  createMemory() {
    const randomIndex = this.randomSelection(this.memoriesFragments);
    const data = this.memoriesFragments[randomIndex];
    console.log(`Do you remember ${data}`);
  },
  createIlu() {
    const randomIndex = this.randomSelection(this.loveFragments);
    const data = this.loveFragments[randomIndex];
    console.log(`I love ${data}`);
  },
  createDate() {
    const randomIndex = this.randomSelection(this.datesFragments);
    const data = this.datesFragments[randomIndex];
    console.log(`We should ${data}`);
  },
  callElements() {
    this.createMemory(),
    this.createIlu(),
    this.createDate()
  }
}

messages.callElements();