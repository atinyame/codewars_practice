export function howMuchILoveYou(petals: number): string {
  switch (petals % 6) {
    case 1:
      return "I love you";
    case 2:
      return "a little";
    case 3:
      return "a lot";
    case 4:
      return "passionately";
    case 5:
      return "madly";
    case 0:
      return "not at all";
    default:
      throw new Error("unreachable");
  }
}