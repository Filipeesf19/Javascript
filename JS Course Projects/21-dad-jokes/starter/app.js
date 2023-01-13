const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");


btn.addEventListener("click", () => {
    fetchDadJoke();
})

const fetchDadJoke = async () => {
    result.textContent = "Loading...";
    try{
        const resp = await fetch(url, {
            headers:{
                Accept:'application/json',
                'User-Agent':'learning app'
            },
        });

        if (!resp.ok) {
            throw new Error('there was an error');
        };

        const data = await resp.json();
        result.textContent = data.joke;
    }
    catch (error){
        result.textContent = "There was an error...";
    }
}

fetchDadJoke();
