const user = {
    name: "Kishan",
    age: 20,
    country: "India",
};

export const Greeting = (obj) => {
    return `Hello, ${obj.name}!`;
};


export const {city = "visnagar" } = user;

export default user;