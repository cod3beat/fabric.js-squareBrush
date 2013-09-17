;(function(global){

  var fabric = global.fabric,
      canvas = new fabric.Canvas("demo"),
      brushColor = document.getElementById("brushColor"),
      brushSize = document.getElementById("brushSize");

  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush = new fabric.SquareBrush(canvas);
  canvas.freeDrawingBrush.width = brushSize.value;
  canvas.freeDrawingBrush.color = brushColor.value;

  brushSize.addEventListener("change", function(e){
    canvas.freeDrawingBrush.width = parseInt(e.target.value, 10);
  }, false);

  brushColor.addEventListener("change", function(e){
    canvas.freeDrawingBrush.color = e.target.value;
  }, false);

})(this);