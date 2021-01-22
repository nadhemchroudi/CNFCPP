const mongoose = require('mongoose');
const config = require('config');

const mongoURI = config.get('mongoURI');

const connectToDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true, 
                useCreateIndex: true

            });
        console.log('MongoDB connection established...');
    } catch (error) {
        console.error(error);
        process.exit(1);
    };
}

module.exports = connectToDB;