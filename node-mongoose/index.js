const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = 'mongodb://localhost:27017/nucampsite';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {

    console.log('Connect correctly to server');

    const newCampstie = new Campsite({
        new: 'React Lake Campground',
        description: 'test'
    });

    newCampstie.save()
        .then(campsite => {
            console.log(campsite);
            return Campsite.find();
        })
        .then(campsite => {
            console.log(campsite);
            return Campsite.deleteMany();
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch(err => {
            console.log(err);
            mongoose.connection.close();
        });
});