function init () {
  var canvasElement = document.querySelector("#canvas");

  var stage = new PIXI.Stage(0xcccccc);
  var renderer = new PIXI.autoDetectRenderer(800,600, canvasElement);

  var world = new World();

  _.times(100, function() {
    _.tap(new Bot(), function (b) {
      world.add(b);
      world.setRandomPosition(b);
    });
  });

  _.times(1, function() {
    _.tap(new Resource(), function(r) {
      world.add(r);
      world.setRandomPosition(r);
    });
  });

  stage.addChild(world.sprite);

  var prevTimestamp = 0;
  function animate(timestamp) {

    var deltaTime = timestamp - prevTimestamp;
    prevTimestamp += deltaTime;

    world.render(deltaTime);
    renderer.render(stage);

    requestAnimFrame(animate);
  }

  requestAnimFrame(animate);
}
