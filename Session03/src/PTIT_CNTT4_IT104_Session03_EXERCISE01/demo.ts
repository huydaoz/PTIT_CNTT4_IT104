let usernames: string = "huy";
let age: number = 18;
let job: string = "student";

let profile = (username: string, age: number, job: string) => {
  console.log(`username: ${username}, age: ${age}, job: ${job}`);
};

profile(usernames, age, job);
