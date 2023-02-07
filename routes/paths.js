const router = require('express').Router();
const handlers = require('../middleware/razorpay');
const schedule = require('node-schedule')


router.post('/api/razorpay/create-order', (req, res) => handlers.CreateOrder(req,res));

function range(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }


  function cron(ms, fn) {
    function cb() {
        clearTimeout(timeout)
        timeout = setTimeout(cb, ms)
        fn()
    }
    let timeout = setTimeout(cb, ms)
}


function show(res)
{
    var rg = range(0,360);

    console.log("Updatyed");

    res.write("Welcome Random: "+rg);
}

router.get("/api/random",(ress,res)=>{

  console.log("Welcome to Data");

  cron(1000,()=>{

    console.log("Welcome");

    var rg = range(0,360);

    console.log("Updatyed");

    

  });

//   setTimeout(()=>console.log("Done !!"), 1000);

//   schedule.scheduleJob('*/2 * * * * *',()=>{


//     var rg = range(0,360);
//     console.log("Working...:"+rg+" :: ");

//     res.write("Random Number is:"+rg);
   

// });

});

module.exports = router;