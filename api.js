async function FetchData(name) {
    name=name.toLowerCase();
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${(name)}`);
        if(!response.ok){
            throw new Error("couldn't fetch pokemon data");
        }
        const data = await response.json();
        const lidata=[data.name,(data.types[0]).type.name,data.height,data.weight,data.sprites.front_default]
        document.getElementById("name").innerHTML=`Name: ${lidata[0].toUpperCase()}`;
        document.getElementById("type").innerHTML=`Type: ${lidata[1].toUpperCase()}`;
        document.getElementById("height").innerHTML=`Height: ${lidata[2]}`;
        document.getElementById("weight").innerHTML=`weight: ${lidata[3]}`;
        document.getElementById("img").innerHTML=`<img class="img" src="${lidata[4]}" width="90px" height="70px"></img>`;
        document.getElementById("style").innerHTML=`#info_list{visibility: inherit;}`;
        document.getElementById("style").innerHTML=`#intro{visibility: hidden;}`

    }
    catch(error){
        document.getElementById("list_container").innerHTML="POKEMON NOT FOUND";
        document.getElementById("img").innerHTML=`<img class="img" src="assets/images/failed.png" height="60px">`;
        document.getElementById("style").innerHTML="#list_container{ text-align: center;}";
        console.error("ERROR!");
    }
}

function entered(){
    const name=document.getElementById("input").value;
    if (name==""){
        document.getElementById("list_container").innerHTML="PLEASE ENTER A NAME!";
        document.getElementById("img").innerHTML=`<img class="img" src="assets/images/failed.png" height="60px">`;
        document.getElementById("style").innerHTML="#list_container{ text-align: center;}";
    }else{
        FetchData(name);
    }

    console.log("s");
    console.log(name);
    
    
}

function reload(){
    location.reload();
}

document.getElementById("img").innerHTML=`<img id="loader" src="assets/images/pokeball.png" width="40px"></img>`;
 document.getElementById("style").innerHTML=`#info_list{visibility: hidden;}`;

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if (event.key=="Enter"){
    
    entered();
    }
});
