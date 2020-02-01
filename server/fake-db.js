const Rental = require('./models/rental');
const User = require('./models/user');

const fakeDbdata = require('./data.json')

class FakeDb {

    constructor() {
        this.rentals = fakeDbdata.rentals;
        this.users = fakeDbdata.users;
    }

    async cleanDb(){
        await User.deleteMany({});
        await Rental.deleteMany({});
    }

    pushDataToDb(){

        const user = new User(this.users[0]);

        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental);
            newRental.user = user;

            user.rentals.push(newRental);

            newRental.save();
        })

        user.save();
    }

    async seedDb() {
        await this.cleanDb();
        this.pushDataToDb();
    }
}


module.exports = FakeDb;