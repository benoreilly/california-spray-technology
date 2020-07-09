
$(document).ready(function(){
    $('.sidenav').sidenav({
        inDuration: 600,
        outDuration: 600,
        edge: 'left',
    });
    $('.scrollspy').scrollSpy();
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
    $('#logo').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
    
    
});

