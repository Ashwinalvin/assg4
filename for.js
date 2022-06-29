var ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant:'Domino',rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]



// question 1
var new1 =[];
var new2 =[];

for (var i=0;i<ratingData.length;i++){
    var count=0;
    var sum = 0;
    for(var j=0;j<ratingData.length;j++){
       if(ratingData[j]['restaurant']==ratingData[i]['restaurant']){
       count=count+1;
       sum =sum+ratingData[j]['rating']; 
       }
    }
    




    if(count>1){
        var con =(sum/count); 
        var x = ratingData[i]['restaurant'];
       var pu ={
            restaurant:x,
            rating:con
             
        }
        
     new1.push(pu);
      

        
     }




if(count==1){
            
    x=ratingData[i]['restaurant']
    var y =ratingData[i]["rating"]
    pu={
        restaurant:x,
        rating:y
    }
    new1.push(pu);
   
}


}
console.log(new1);









//question 2

   for(var k=0;k<new1.length;k++){
    if(new1[k]["rating"]>4){
        console.log(new1[k]['restaurant']);


    }
}









