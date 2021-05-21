

$(document).ready(function(){
    buildProductView(data);
   
});


function buildProductView(arr){

    arr.forEach((kompany) => {
        let perProduct = '<div class="col-4"' +
        '<div class="container card"style="width: 18rem;">' + 
        '<img src="' + kompany.image + '" class="card-img-top" >' + 
          '<div class="container opasity"> <h5>' + kompany.brandName + '</h5>'+
        '<p>' + kompany.productName + '</p>'+
         '</div>' +
         '<div class="card-body">' + 
          '<h6>' + kompany.title + '</h6>' + 
          '<p class="card-text">' + kompany.rate + '</p>' +
        '</div>' +
        '</div>' +
      '</div>';
      $("#brands").append(perProduct);
    });
}