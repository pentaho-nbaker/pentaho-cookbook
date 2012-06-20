define(["cookbook/cookbook","cookbook/pentahoRecipeBook", "cookbook/recipes/rhubarb-pie"], function(cookbook, pentahoRecipeBook){
  $(document).ready(function(){
    var book = new cookbook.RecipeBook(pentahoRecipeBook);
    (new cookbook.RecipeBookView({model: book})).render();
  })
});
