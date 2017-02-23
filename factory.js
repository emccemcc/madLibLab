var app = angular.module('myModule');

app.factory('ourFactory', function() {


 var finalData = '';
//returning initial object
return {
  ourFunction: function(displayFullName){
  finalData = "Welcome to the "  + displayFullName.first + '. We\'ve got '+ displayFullName.second + ' and ' + displayFullName.third + '!';
},

//returning the data
returnWord: function(){
  return finalData;
}

//end return
}

});
