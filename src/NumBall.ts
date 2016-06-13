class Numball extends egret.Sprite{
    public constructor(){
       super();
       //this.drawNumball(ex:number,ey:number);
    }
    // private x:number:void;
    
      public getAngle(){
        return this.$getRotation().valueOf();
    }
    
    public drawNumball(ex:number,ey:number){
        var blackLine:egret.Shape = new egret.Shape();
        blackLine.graphics.lineStyle( 2, 0x000000 );
        blackLine.graphics.moveTo( 0,0);
        // blackLine.graphics.moveTo( sx,sy );
        blackLine.graphics.lineTo( ex,ey );
        blackLine.graphics.endFill();
        this.addChild( blackLine );
        // ball up line
            var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill( 0x000000, 1);
        shp.graphics.drawCircle( ex, ey, 10 );
        shp.graphics.endFill();
        //console.log("ex:"+ex);
        this.addChild( shp );
        //  var stageW:number = this.stage.stageWidth;
        // var stageH:number = this.stage.stageHeight;
        // var circlex = stageW/2;
        // var circley = stageH/2-50;
        // var steak_0:egret.Bitmap = this.createBitmapByName("steak_0_png");
        // this.addChild(steak_0);
        // steak_0.x = circlex;//-circle_140.width/2;
        // steak_0.y = circley;//-circle_140.height/2;
        // // 黑线上的小圆
        // var small_Circle_33_0:egret.Bitmap = this.createBitmapByName("small_Circle_33_0_png");
        // this.addChild(small_Circle_33_0); 
        // small_Circle_33_0.x = steak_0.x-small_Circle_33_0.width/2;//-circle_140.width/2;
        // small_Circle_33_0.y = steak_0.y+steak_0.height;//-circle_140.height/2;
    } 
}