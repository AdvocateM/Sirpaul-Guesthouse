
const mongoose = require('mongoose');
const logger = require('../middleware/winston.logger');

const connectionString = process.env.MONGO_URI;
mongoose.set('strictQuery', false);

const connectDatabase = async () => {
  try {
    await mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true, // for mongoose 6.x
        // useFindAndModify: false, // for mongoose 6.x
      })
      .then(() => {
        logger.info('Connection establish to MongoDB database successful!');
      })
      .catch((error) => {
        logger.error('Error connecting to MongoDB: ', error);
      });
  } catch (error) {
    logger.error('Database connection error: ', error);
  }
};


const Users = require('../models/user.model'); // Adjust the path accordingly

// async function createUser() {
//   try {
//     // Connect to your MongoDB database
//     await mongoose.connect(`${connectionString}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });

//     // Define the new user data
//     const newUser = new Users({
//       userName: 'Advocates', // Will get formatted to 'john-doe' due to pre-save hook
//       fullName: 'Marogas',
//       email: 'advocatemaroga@mrmaroga.co.za',
//       phone: '0714418154',
//       password: 'Maroga7277.com',
//       avatar: 'avatar1.png',
//       gender: 'male',
//       dob: '2002-01-19',
//       address: '124 Main St, Townsville',
//       role: 'admin', // default is 'user', but you can specify it if needed
//       verified: true,
//       status: 'login' // Example status for the user
//     });

//     // Save the user to the database
//     const savedUser = await newUser.save();

//     console.log('User created successfully:', savedUser);
//   } catch (error) {
//     console.error('Error creating user:', error);
//   } finally {
//     mongoose.connection.close(); // Close the connection when done
//   }
// }

// // Call the function to insert the user
// createUser();

module.exports = connectDatabase;
