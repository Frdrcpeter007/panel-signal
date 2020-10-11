(()=> {
  $("#runDemo").click((e) => {
    signal();
  })
})();

function signal() {
  var count = 0;
  setInterval(() => {
    count++;
    console.log(count);
    if (count < 30) {

      //For Direction A
      $("#stopLight").css('backgroundColor', "red");
      $("#goLight").css('backgroundColor', "black");
      $("#slowLight").css('backgroundColor', "black");

      //For direction B
      $("#stopLightB").css('backgroundColor', "black");
      $("#goLightB").css('backgroundColor', "green");
      $("#slowLightB").css('backgroundColor', "black");

    } else if (count == 30) {

      //For Direction A
      $("#stopLight").css('backgroundColor', "black");
      $("#slowLight").css('backgroundColor', "yellow");
      $("#goLight").css('backgroundColor', "black");

      //For direction B
      $("#stopLightB").css('backgroundColor', "black");
      $("#slowLightB").css('backgroundColor', "yellow");
      $("#goLightB").css('backgroundColor', "black");

    } else if (count >= 50 && count < 80) {

      //For Direction A
      $("#stopLight").css('backgroundColor', "black");
      $("#slowLight").css('backgroundColor', "black");
      $("#goLight").css('backgroundColor', "green");

      //For direction B
      $("#stopLightB").css('backgroundColor', "red");
      $("#slowLightB").css('backgroundColor', "black");
      $("#goLightB").css('backgroundColor', "black");

    } else if (count > 80 && count < 100) {
      //For Direction A
      $("#stopLight").css('backgroundColor', "black");
      $("#slowLight").css('backgroundColor', "yellow");
      $("#goLight").css('backgroundColor', "black");

      //For direction B
      $("#stopLightB").css('backgroundColor', "black");
      $("#slowLightB").css('backgroundColor', "yellow");
      $("#goLightB").css('backgroundColor', "black");

    } else if (count == 100) {
      count = 0;
    }
  }, 100);
}
