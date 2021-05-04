const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What music do you like? ', (music) => {
      rl.question('What\'s your favorite meal? ', (meal) => {
        rl.question('What\'s your favorite sport? ', (sport) => {
          console.log(`Here is your profile: I'm ${name}. I really love ${activity}. My favorite music is ${music}. I love to eat ${meal}. And my favorite sport is ${sport}.`)
          rl.close();
        });
      });
    });
  });
});


