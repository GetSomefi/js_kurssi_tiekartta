const htmlconsole = document.getElementById("html-konsoli");
async function getData() {
    try{
        //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        const url = "https://tie.digitraffic.fi/api/weathercam/v1/stations";

        const tiedataResponse = await fetch(url); //odota vastausta
        const tiedata = await tiedataResponse.json(); //data on nyt objektimuotoinen
        console.log(tiedata);

        htmlconsole.innerHTML = "Haku onnistui. Löydettiin " + tiedata.features.length + " sijaintia.<br>";

        tiedata.features.forEach((element,i) => {
            if(i<10)
                htmlconsole.innerHTML += element.properties.name + "<br>";
        });
    }
    catch(error){
        console.log("Error: " + error);
        htmlconsole.innerHTML = "Virhe!";
    }
}
getData();

// async function getData() {
//     //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//     const url = "https://tie.digitraffic.fi/api/weathercam/v1/stations";
//     const tiedataResponse = await fetch(url); //odota vastausta
//     const tiedata = await tiedataResponse.json(); //data on nyt objektimuotoinen
//     console.log(tiedata);
// }
// getData();

// function getData() {
//     //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//     const url = "https://tie.digitraffic.fi/api/weathercam/v1/stations";
//     const tiedataResponse = fetch(url) //kysele jotain
//                             .then(response => { //kun vastaus saatiin
//                                 return response.json();
//                             })
//                             .then(tiedata => { //data on nyt objektimuotoinen
//                                 console.log(tiedata);
//                             })
//                             .catch(error => { //jos vastaus on virheellinen
//                                 console.log("virhe: " + error);
//                             }); 
    
// }
// getData();