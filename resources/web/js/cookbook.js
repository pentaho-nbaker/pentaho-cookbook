define("cookbook/cookbook", ["cookbook/backbone-min","cookbook/underscore","cookbook/handlebars"], function(Backbone, _, Handlebars){

  var cookbook = {};

  cookbook.RecipeBook = Backbone.Model.extend({
    recipies: [],
    initialize: function() {

    }
  });

  cookbook.Recipe = Backbone.Model.extend({
    author: "Anonymous",
    title: "Unknown",
    description: "Unknown",
    ingredients: [],
    steps: [],
    initialize: function() {

    }
  });

  cookbook.Ingredient = Backbone.Model.extend({
    quantity: -1,
    name: "Unknown"
  });


  cookbook.RecipeBookView = Backbone.View.extend({
    tagName: 'div',
    render: function(){

      var curRowEle;
      for(var i=0, len=this.model.get('recipes').length; i<len; i++){
        if(i%3 ==0){
          curRowEle = document.createElement("div");
          curRowEle.className = "row";
          $("#gridContainer").append(curRowEle);
        }
        curRowEle.appendChild(new cookbook.RecipeView({model : this.model.get('recipes')[i]}).render().el);
      }
      return this;
    }
  });

  cookbook.RecipeView = Backbone.View.extend({
    tagName: 'div',
    className: "span4",
    render: function(){
      $(this.el).html(Handlebars.compile($("#recipe-template").html())(this.model));
      return this;
    }
  });

  return cookbook;

});