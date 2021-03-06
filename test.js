const RobinHood = require('./index.js');

(async () => {
   try{
      let rh = new RobinHood();

      await rh.login({username: process.env.ROBINHOOD_USERNAME, password: process.env.ROBINHOOD_PASSWORD});

      console.log(await rh.getMarkets());
   }catch(e){
      console.log('Error Code ' + e.code);
      console.log(e);
   }
})();
