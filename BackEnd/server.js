require('dotenv').config()

const app=require('./src/app')


//way to write callback
app.listen(3000,()=>{
  console.log('Server is running on https://localhost:3000')
})
