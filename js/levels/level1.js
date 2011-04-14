/*
 * Level 1
 * Comprises of a couple of obstacles and
 * a huge HAPPY BIRTHDAY message.
 */

function Level1() {
    
    this.startUpLevel1 = function( gs ) {
        this.length = 1000; // Length of the level in pixels
        this.startPos.Set( 100, 100 );
        this.endPos.Set( 800, 400 );
        
        this.startUpLevel( gs );
        
        new Ball().startUpBall( 100, 100 );
        new Ball().startUpBall( 500, 120 );
        new Ball().startUpBall( 510, 30 );
        
        new Item().startUpItem( 130, 50 );
        new Item().startUpItem( 140, 50 );
        new Item().startUpItem( 150, 50 );
        
        this.createBoundingBox();
                
        return this;
    };
    
    this.nextLevel = function( gs ) {        
        return new Level2().startUpLevel2( gs );
    }
}

Level1.prototype = new Level();