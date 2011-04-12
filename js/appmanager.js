
function AppManager() {
    
    this.startUpAppManager = function() {
        g_AppManager = this;
        
        this.ball = new Ball( [100,100] );
        this.ball.startUpBall();
        
        var ball2 = new Ball( [500,120] );
        ball2.startUpBall();
        
        var ball3 = new Ball( [600,100] );
        ball3.startUpBall();
        
        // Add some ground
        var boxDef = new b2BoxDef();
        boxDef.extents.Set( 600, 30 );
        boxDef.restitution = 0.0;
        
        var groundBodyDef = new b2BodyDef();
        groundBodyDef.AddShape( boxDef );
        groundBodyDef.position.Set( 300, 300 );
        
        var ground = g_World.CreateBody( groundBodyDef );
        console.log( ground );
    };
}


/*
 function createGround(world) {
     var groundSd = new b2BoxDef();
     groundSd.extents.Set(400, 30);
     groundSd.restitution = 0.0;
     var groundBd = new b2BodyDef();
     groundBd.AddShape(groundSd);
     groundBd.position.Set(400, 470);
     return world.CreateBody(groundBd);
 }
 
 function createBall(world, x, y) {
     var ballSd = new b2CircleDef();
     ballSd.density = 1.0;
     ballSd.radius = 20;
     ballSd.restitution = 0.5;
     ballSd.friction = 0.5;
     var ballBd = new b2BodyDef();
     ballBd.AddShape(ballSd);
     ballBd.position.Set(x,y);
     return world.CreateBody(ballBd);
 }
 
 function createBox(world, x, y, width, height, fixed) {
     if (typeof(fixed) == 'undefined') fixed = true;
     var boxSd = new b2BoxDef();
     if (!fixed) boxSd.density = 1.0; 
     boxSd.restitution = 0.0;
     boxSd.friction = 1.0;
     boxSd.extents.Set(width, height);
     var boxBd = new b2BodyDef();
     boxBd.AddShape(boxSd);
     boxBd.position.Set(x,y);
     return world.CreateBody(boxBd);
 }
 
*/