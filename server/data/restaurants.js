let restaurantData = [
    {
        id: 0,
        name: "Teacup",
        phone: "(916) 627-1377",
        address: "8351 Elk Grove Blvd, Elk Grove, CA 95758",
        photo: "/images/teacup.png"
    },
    {
        id: 1,
        name: "Birria Boys",
        phone: "(916) 616-7733",
        address: "9611 Auto Center Dr, Elk Grove, CA 95757",
        photo: "/images/birria_boys.png"
    },
    {
        id: 2,
        name: "Tea 18",
        phone: "(916) 687-3484",
        address: "10043 Bruceville Rd Unit 100, Elk Grove, CA 95757",
        photo: "/images/tea_18.png"
    },
    {
        id: 3,
        name: "Dutch Bros",
        phone: "(877) 899-2767",
        address: "8610 Elk Grove Blvd, Elk Grove, CA 95624",
        photo: "/images/dutch_bros.png"
    },
    {
        id: 4,
        name: "Tea Culture",
        phone: "(916) 688-7177",
        address: "8433 Elk Grove Florin Rd, Elk Grove, CA 95624",
        photo: "/images/tea_culture.png"
    },
    {
        id: 5,
        name: "Bonchon",
        phone: "(916) 684-6105",
        address: "8246 Laguna Blvd #370, Elk Grove, CA 95758",
        photo: "/images/bonchon.png"
    },
    {
        id: 6,
        name: "Ice Dream",
        phone: "(916) 829-5366",
        address: "8775 Center Pkwy Suite E-200, Sacramento, CA 95823",
        photo: "/images/ice_dream.png"
    },
    {
        id: 7,
        name: "Tasty Pot",
        phone: "(916) 896-1916",
        address: "8461 Elk Grove Blvd, Elk Grove, CA 95758",
        photo: "/images/tasty_pot.png"
    },
    {
        id: 8,
        name: "In n Out",
        phone: "(800) 786-1000",
        address: "9188 E Stockton Blvd, Elk Grove, CA 95624",
        photo: "/images/in_n_out.png"
    }
];

export default restaurantData;

let lastId = restaurantData.length - 1;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

const getRestaurants = () => {
    return restaurantData;
};


const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id)
};

const createRestaurant = (newRestaurant) => {
    const restaurant = {
        id: getNextId(),
        ...newRestaurant
    };
    restaurantData.push(restaurant);
    return restaurant;
};

const deleteRestaurant = (id) => {
    restaurantData = restaurantData.filter(restaurant => restaurant.id != id);
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };