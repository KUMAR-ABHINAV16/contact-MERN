const mongoose= require('mongoose')
 
const uri = 'mongodb+srv://abhinav69596959:123321@cluster0.dg1z1mt.mongodb.net/contactlist?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);


mongoose.connect(uri, {
  useNewUrlParser: true,
    
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Your code here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });