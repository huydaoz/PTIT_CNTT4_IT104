function groupAnagrams(words) {
  const map = new Map();

  words.forEach((word) => {
    const key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  });

  return Array.from(map.values());
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);
