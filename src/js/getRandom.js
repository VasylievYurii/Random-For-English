export function getRandom(array) {
    if (array.length === 0) {
      return null;
    } else {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }
  }