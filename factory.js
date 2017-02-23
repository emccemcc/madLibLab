var app = angular.module('myModule');

app.factory('ourFactory', function () {


    var finalData = '';
    //returning initial object
    return {
        ourFunction: function (createSong) {
            finalData = "Welcome to the " + 
                createSong.first + '. We\'ve got ' + 
                createSong.second + ' and ' + 
                createSong.third + '! We got ' + 
                createSong.fourth + ' you need, ' + 
                createSong.fifth + ' we know the ' +
                createSong.sixth + '. ' + 'We are the ' + createSong.seventh + ' that can ' +
                createSong.eighth + ' whatever you may ' +
                createSong.ninth + '. If you got the ' +
                createSong.tenth + ', ' + 
                createSong.fifth + ', we got your ' +
                createSong.eleventh + '. ' + 
                createSong.first + ', welcome to the ' +
                createSong.first + '. Watch it ' +
                createSong.twelth + ' you to your....n-n-n-n...' +
                createSong.thirteenth + ', ' + 
                createSong.thirteenth + 's! ' + "We're gonna watch you " + createSong.fourteenth + '!'
        },

        //returning the data
        returnWord: function () {
            return finalData;
        }

        //end return
    }

});
