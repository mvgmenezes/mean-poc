'use strict';

module.exports = function(app) {
   app.route('/categories')


    //testando o retorno
    /*
    .get(function (request, response){
        response.json([{ name:'Beverages'}, {name: 'Condiments'}]);
        
        
    });
    */
   //chamando o controller
   .get(categories.list);
};
