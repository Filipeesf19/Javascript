const url = 'https://randomuser.me/api/';

const getUser = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    // destructure
    const person = data.results[0];
    const {phone,email} = person;
    const {large:image} = person.picture;
    const {password} = person.login;
    const {age} = person.dob;
    const {street :{number, name}} = person.location;
    const {first, last} = person.name;
    return {
        // these are the person object properties
        phone,
        email,
        image,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`
    }
}

export default getUser;