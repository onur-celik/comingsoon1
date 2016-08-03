
/* navigation bar */
$(".nav-menu-link").click(function () {
    $(".menu-items").slideToggle();
    console.log("hilu");
});


jQuery(document).ready(function(){
    if( $('.cd-stretchy-nav').length > 0 ) {
        var stretchyNavs = $('.cd-stretchy-nav');
        
        stretchyNavs.each(function(){
            var stretchyNav = $(this),
                stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
            
            stretchyNavTrigger.on('click', function(event){
                event.preventDefault();
                stretchyNav.toggleClass('nav-is-visible');
            });
        });

        $(document).on('click', function(event){
            ( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
        });
    }

    $(".cd-stretchy-nav > ul > li > a").click(function(e) { 
        var id = $(this).attr("scrollTo");
        e.preventDefault(); 
        goToByScroll(id);
    });
});

function goToByScroll(id){
      // Remove "link" from the ID
    console.log(id);
    if (id != "home")
    {
        $('html,body').animate({ scrollTop: $("#"+id).offset().top}, 'slow');
    }
    else
    {
        $('html,body').animate({ scrollTop: 0}, 'slow');
    }
}