 let recipe=[];
 async function getPizza()
{
 let apiOp=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
  let apiData=await apiOp.json();
  console.log(apiData.recipes);
   recipe=apiData.recipes;
   var cartoona="";
    for(var i=0;i<recipe.length;i++)
    {
        cartoona+=`
        <div class="col-md-4">
        <div class="post">
          <img src="${recipe[i].image_url}" class="img-fluid alt="">
          <h2>${recipe[i].title}</h2>
            <p>${recipe[i].publisher}</p>
            <a href="details.html?rId=${recipe[i].recipe_id}" class="btn btn-info ">details</a>
            </div>
    </div>
         `
    }
   document.getElementById('post-row').innerHTML=cartoona;

}
async function getPasta()
{
    let apiOp=await fetch("https://forkify-api.herokuapp.com/api/search?q=pasta");
  let apiData=await apiOp.json();
  console.log(apiData.recipes);
  recipe=apiData.recipes;
   var cartoona="";
    for(var i=0;i<recipe.length;i++)
    {
        cartoona+=`
        <div class="col-md-4">
        <div class="post">
          <img src="${recipe[i].image_url}" class="img-fluid alt="">
          <h2>${recipe[i].title}</h2>
            <p>${recipe[i].publisher}</p>
            <a href="details.html?rId=${recipe[i].recipe_id}" class="btn btn-info ">details</a>
            </div>
    </div>
         `
    }
   document.getElementById('post2-row').innerHTML=cartoona;
}
async function getData()
{
    getPizza();
    getPasta();
}

getData();