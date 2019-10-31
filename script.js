(function() {

  function openTabs(url) {
    setTimeout(function(){
      console.log(url);
      window.open(url, "_blank");
    }, 500)
  }

  function run(urls) {
    for(var i=0; i<urls.length; i++){
      openTabs(urls[i]);
    }
  }

  var button = document.getElementById('submit');
  button.addEventListener("click", function(e){
    var submittedText = document.getElementById("urls").value;
    var urlArray = submittedText.split(/\r?\n/g);
    console.log(urlArray);
    run(urlArray);
  });
})();
