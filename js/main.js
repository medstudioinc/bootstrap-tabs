$(document).ready(() => {
  let url = window.location.href.replace(/\/$/, "");
  
  if (window.location.hash) {
    const hash = url.split("#");
    $('#myTab a[href="#'+hash[1]+'"]').tab("show");
    url = window.location.href.replace(/\/#/, "#");
    window.history.replaceState(null, null, url);
    setTimeout(() => {
      $(window).scrollTop(0);
    }, 400);
  } 
  
  $('a[data-toggle="tab"]').on("click", function() {
    let newUrl;
    const hash = $(this).attr("href");
    if(hash == "#home") {
      newUrl = url.split("#")[0];
    } else {
      newUrl = url.split("#")[0] + hash;
    }
    newUrl += "/";
    window.history.replaceState(null, null, newUrl);
  });
});