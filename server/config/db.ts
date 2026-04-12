import mongoose from 'mongoose';


const dbConnection = mongoose.connect(process.env.MONGOOSE_URI || 'mongodb://localhost:27017/unistack')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

export default dbConnection;