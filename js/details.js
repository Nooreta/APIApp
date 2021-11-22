// alert(window.location.search); //get URL rId=2233
var query=new URLSearchParams(window.location.search); //rId=2233
var currentId=query.get('rId'); //2233 حسب عأي منتج كبست عليه
 //alert(currentId);
var display;
var food_img=document.getElementById('recImg');
var ings=[]; //array for displaying ingredients 
var list=document.getElementById('list-rec');
var httPR=new XMLHttpRequest();

async function getImg_Ingredients()
{
let apiOp=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${currentId}`);
let apiData=await apiOp.json();
console.log(apiData.recipe);
food_img.src=apiData.recipe.image_url;
// console.log(apiData.recipe.image_url);
ings=apiData.recipe.ingredients;
console.log(ings);
var ingP="";
for(var i=0;i<ings.length;i++)
{
    ingP+=`
    <li>${ings[i]}</li>
    `;
}
list.innerHTML=ingP;
}
getImg_Ingredients();

// getData();


// httPR.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${currentId}`);
// httPR.send();

// httPR.addEventListener("readystatechange",function(){
// if(httPR.readyState==4)
// {
//     display=JSON.parse(httPR.response).recipe;
//     // console.log(display);
//    food_img.src=display.image_url;
//    ings=display.ingredients;
//    //console.log(ings);
//    displayList();
// }
// });
// function displayList()
// {
//  var ingP="";
//  for(var i=0;i<ings.length;i++)
//  {
//      ingP+=`
//      <li>${ings[i]}</li>
//      `;
//  }
//  list.innerHTML=ingP;
// }