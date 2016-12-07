$(document).on("ready", function(){
  $.ajax ({
    method:"GET",
    url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
    dataType: "json",
    success: successCallback,
    error: errorCallback,
  });
  function successCallback(responseData) {
    $('.gif-gallery').text('');
    console.log("success!");
    var imageArray = responseData.data;
    imageArray.forEach(function(object) {
      $('.gif-gallery').append('<img src="' + object.images.fixed_height.url +'">');
    });
  };
  function errorCallback() {
    console.log("error!");
  }
  $('form').on("submit", searchReq);
  function searchReq(giphyQ) {
    giphyQ.preventDefault();
    $.ajax ({
      method:"GET",
      url: "http://api.giphy.com/v1/gifs/search",
      dataType: "json",
      data:$('form').serialize(),
      success: successCallback,
      error: errorCallback,
    });
  };
});
