var app = angular.module('myModule');

app.factory('ourFactory', function() {


 var finalData = '';
//returning initial object
return {
  ourFunction: function(displayFullName){
  finalData = "Our mad libs phrase is that"  + displayFullName.first + ' has ' + displayFullName.second + '!';
},

//returning the data
returnWord: function(){
  return finalData;
}

//end return
}

});
