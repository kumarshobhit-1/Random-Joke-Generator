let url = "https://official-joke-api.appspot.com/random_joke";
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    try {
        fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            let catagory = data.type;
            let setup = data.setup;
            let punchline = data.punchline;
            // console.log(data);
            // console.log(catagory);
            // console.log(setup);
            // console.log(punchline);
            document.querySelector("h2").innerText = `Catagory : `+catagory;
            document.querySelector("#list1").innerText = setup;
            document.querySelector("#list2").innerText = punchline;
        })
        .catch((error) => {
            document.querySelector("h1").innerText = `Please wait 1 minute and try again!`, error;
            document.querySelector("h2").innerText = `I am sorry!🙏🏻, I am unable to fetch the data! because of too many requests!` , error;
        });
    } catch(error){
        document.querySelector("h1").innerText = `Please wait 1 minute and try again!`, error;
        document.querySelector("h2").innerText = `I am sorry!🙏🏻, I am unable to fetch the data! because too many requests!`, error;
        // console.log("error : " ,error);
    }
});