/*
 * A Scene - Base class for all other screen
 */ 

function Screen() {
    
    this.startUpScreen = function() {
        return;
    }
    
    this.stopUpdate = function() {
        this.update = function(){};
    }
}