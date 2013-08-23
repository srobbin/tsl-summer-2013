$(function () {
  var screenHalfWidth, screenHeight;

  function openWindow(url, left) {
    window.open(url, null,'width='+ screenWidth +',height='+ screenHeight + ',top=0,left=0');
  }

  $(".btn").click(function () {
    var $directory = $(this).next(".directory"),
        $students = $directory.find("li"),
        $unvisited = $students.not(".visited"),
        numUnvisited = $unvisited.length,
        randomIndex = Math.floor(Math.random() * numUnvisited),
        $random = $unvisited.eq(randomIndex);

    // Set the screen dimensions
    screenWidth = screen.width;
    screenHeight = screen.height;

    // Get a random number
    $random.addClass("visited");

    // Open the windows
    openWindow($random.find("a:eq(1)").attr("href"));

    return false;
  });
});