// fetch = Function used for making HTTP request to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options or method: "POST" or "GET" or "PUT" or "DELETE"})

// to see if an API is working you can console.log(response => console.log(response)) with it you will search for the values "ok" and "status"
// if "ok = true" and "status = 200" it is working
// but if "ok = false" and "status = 404" it is not working

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//    // .then(response => {


//    //    if (!response.ok) {
//    //       throw new Error("Could not fetch resource");
//    //    }
//    //    return response.json();



//    // })
//    // .then(data => console.log(data.id))
//    // .catch(error => console.error(error));



async function fetchData(){

   try{

      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

      if(!response.ok){
         throw new Error("Could not fetch resource");
      }

      const data = await response.json();
      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonSprite");

      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";

   } catch(error){
      console.error(error);
   }



}


