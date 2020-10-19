function browserCheck() {
    var isSafari = navigator.userAgent.toLowerCase().includes('safari');
    var isChrome = navigator.userAgent.toLowerCase().includes('chrome');
    if (isSafari && !isChrome) {
        $('#main-landing').css({"background-image": "url(/images/laketahoe-1.jpg)"});
     }
  }

$(document).ready(function(){
    browserCheck();
    $('.sidenav').sidenav({
        inDuration: 600,
        outDuration: 600,
        edge: 'left'
    });
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(600); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
});

