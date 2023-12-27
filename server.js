//write server code
const express=require('express');
const app=express();

const Port= process.env.PORT || 3000;

app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
  });
