/*
 * Pre load all the required images
 */

function ResourceLoader() {
    
    this.imagesLoaded = 0;
    
    this.startUpResourceLoader = function() {
        g_ResourceLoader = this;
        
        this.images = new Array();
        this.images[0] = "img/dead_tea.png";
        this.images[1] = "img/wr1.png";
        this.images[2] = "img/wr2.png";
        this.images[3] = "img/wr3.png";
        this.images[4] = "img/wl1.png";
        this.images[5] = "img/wl2.png";
        this.images[6] = "img/wl3.png";
        this.images[7] = "img/n.png";
        this.images[8] = "img/face.png";
        this.images[8] = "img/cloud.png";
        this.images[9] = "img/dead_face.png";
        this.images[10] = "img/intro.jpg";
        this.images[11] = "img/level2.png";
        this.images[12] = "img/carrot.png";
        this.images[12] = "img/smallcarrot.png";
        this.images[13] = "img/gameover.jpg";
        this.images[13] = "img/ending.jpg";
        this.images[14] = "img/level4.jpg";
        
        for( var i=0; i<this.images.length; i++ ) {
            var img = new Image;
            img.onload = function() { g_ResourceLoader.imageLoaded(); };
            img.src = this.images[i];
        }
    }
    
    this.imageLoaded = function() {
        this.imagesLoaded++;
    }
    
    this.loaded = function() {
        return this.imagesLoaded == this.images.length;
    }
}
