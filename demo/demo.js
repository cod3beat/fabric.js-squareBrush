;(function(global){

  var fabric = global.fabric,
      canvas = new fabric.Canvas("demo");

  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush = new fabric.SquareBrush(canvas);

})(this);