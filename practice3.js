function fetchdata(callback){
setTimeout(()=>{
 callback("data fetchdeeddddd");  
}, 2000);
}
fetchdata((data)=>{
    console.log(data);
})