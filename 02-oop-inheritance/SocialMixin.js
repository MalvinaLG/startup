// Mixin
var Social = function () {};
 
Social.prototype = {
 
    share: function (friendName) {
        console.log("Shared with "+friendName + ": " + this.attributes["title"]);
        $('#divSocial').html("Shared with "+friendName + ": " + this.attributes["title"]);
    },
 
    like: function () {
        console.log( "Liked: "+ this.attributes["title"] );
        $('#divSocial').html("Liked: "+ this.attributes["title"]);
    }
 
};


// Extend an existing object with a method from another
function augment( receivingClass, givingClass ) {
 
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {
 
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
 
            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            //  receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}
 
 
// Augment the Car constructor to include "driveForward" and "driveBackward"
//augment( Movie, Social);