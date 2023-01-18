const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\s your name? ', (answer1) => {
  
  rl.question('What is an activity you like doing? ', (answer2) => {
    
    rl.question('Which meal is your favourite between dinner or brunch? ', (answer3) => {
      
      rl.question('What is your favourite thing to eat for that meal? ', (answer4) => {
        
        rl.question('Which sport is your favourite? ', (answer5) => {
          
          rl.question('What is your superpower? ', (answer6) => {
            
            console.log(`${answer1} loves ${answer2}.  Their favourite meal is ${answer3} in which ${answer4} is served. Their superpower is ${answer6}`);
            
            rl.close()
            
          });
          
          
        });
        
        
      });
      
      
    });
    
    
  });
  
  
});


