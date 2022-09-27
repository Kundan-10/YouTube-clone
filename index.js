let api_key="AIzaSyCx7PDvgux9O-k-oBYq0fcH9WTx_7zD16U";
let q="";

let search=async()=>{
let query=document.getElementById("query").value;
let data =await getData(query);
q=query;
append(data)
// getData(query)
}

let getData = async (query)=>{
    url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;


  let res= await fetch(url);
  let data=await res.json();
  console.log(data.items);
  return data.items;

}


let append  =(data)=>{
    let results=document.getElementById("results");
   results.innerHTML=null;

    data.forEach((el)=>{
        let img=document.createElement("img");
        img.src=el.snippet.thumbnails.medium.url;

        let h3=document.createElement("h3");
        h3.innerText=el.snippet.title;

        let div=document.createElement("div");
        div.onclick=()=>{
            saveVideo(el);
        }
        div.setAttribute("class","video");
        div.append(img,h3);

        results.append(div);
    });
}

let saveVideo =(data)=>{
    localStorage.setItem("video",JSON.stringify(data));
    window.location.href="video.html";
}

let filter=async ()=>{
    let data =await getData(q);
    data.filter((el)=>{
        return el.snippet.channelId==="UCphTF9wHwhCt-BzIq-s4V-g";
    });
    append(data);
    

}


let popolar = async ()=>{
    url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=popularmovies&key=${api_key}`;


  let res= await fetch(url);
  let data=await res.json();
  console.log(data.items);
 append(data.items);

}

popolar();
