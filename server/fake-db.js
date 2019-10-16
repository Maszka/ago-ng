const Workshop = require('./models/workshop');
const User = require('./models/user');

class FakeDb {

    constructor() {
        this.workshops = [{

            title: "Guitar workshops in the city center",
            city: "Kraków",
            street: "Floriańska",
            category: "Music",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/workshop/image/5/image.jpeg",
            maxNumberOfAtendees: 5,
            description: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.",
            price: 200,
            duration: "5h",
        },
        {

            title: "Create your own ceramics!",
            city: "Warszawa",
            street: "Marszałkowska",
            category: "Applied arts",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/workshop/image/5/image.jpeg",
            maxNumberOfAtendees: 10,
            description: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.",
            price: 100,
            duration: "6h",
        },
        {

            title: "Art Machine - paintings and more",
            city: "Kraków",
            street: "Nowohucka",
            category: "Paintings",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/workshop/image/5/image.jpeg",
            maxNumberOfAtendees: 5,
            description: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.",
            price: 50,
            duration: "5h",
        },
        {

            title: "Around the World - Madagaskar",
            city: "Gdańsk",
            street: "św. Bronisławy",
            category: "Travels",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/workshop/image/5/image.jpeg",
            maxNumberOfAtendees: 5,
            description: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.",
            price: 0,
            duration: "2h",
        },
        {

            title: "Create your own DIY wooden table!",
            city: "Warszawa",
            street: "Marszałkowska",
            category: "Applied arts",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/workshop/image/5/image.jpeg",
            maxNumberOfAtendees: 10,
            description: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.",
            price: 500,
            duration: "10h",
        },
            ];
    
    this.users = [{
        username: "TestUser",
        email: "test@gmail.com",
        password: "testtest"
    }]
}

    async cleanDb(){
        await User.deleteMany({});
        await Workshop.deleteMany({});
    }

    pushDataToDb(){

        const user = new User(this.users[0]);

        this.workshops.forEach((workshop) => {
            const newWorkshop = new Workshop(workshop);
            newWorkshop.user = user;

            user.workshops.push(newWorkshop);

            newWorkshop.save();
        })

        user.save();
    }

    async seedDb() {
        await this.cleanDb();
        this.pushDataToDb();
    }
}


module.exports = FakeDb;