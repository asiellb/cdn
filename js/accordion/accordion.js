/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia = window.matchMedia || (function(doc, undefined){

  var bool,
      docElem  = doc.documentElement,
      refNode  = docElem.firstElementChild || docElem.firstChild,
      // fakeBody required for <FF4 when executed in <head>
      fakeBody = doc.createElement('body'),
      div      = doc.createElement('div');

  div.id = 'mq-test-1';
  div.style.cssText = "position:absolute;top:-100em";
  fakeBody.style.background = "none";
  fakeBody.appendChild(div);

  return function(q){

    div.innerHTML = '&shy;<style media="'+q+'"> #mq-test-1 { width: 42px; }</style>';

    docElem.insertBefore(fakeBody, refNode);
    bool = div.offsetWidth == 42;
    docElem.removeChild(fakeBody);

    return { matches: bool, media: q };
  };

})(document);




/*AccordionTabs jQuery plugin. Author & copyright (c) 2013 : isyara */
(function($){
  
  $.fn.accordionTabs = function(options){

    var defaults = {"autoExpandFirst":false};
    var params = $.extend(defaults,options);

    return this.each(function(){
      
     
    //Just test detection mediaqueries
    if (matchMedia) {    
      var mq = window.matchMedia( "(max-width: 30em)" );        
      if(mq.matches){
        return;
      }
    }     

    //Open first panel default
    if(params.autoExpandFirst){
      $(this).children('li:first-child').children('a').addClass('active').next().addClass('is-open').css('height','auto');
    }

    $(this).on('click', 'li > a', function(e) {

       e.preventDefault();

       //instance
       $accordion = $(this).parents('.accordion');

       if (!$(this).hasClass('active')) {

        //panel
        $accordion.find('.is-open').removeClass('.is-open').css('height',0);
        $(this).next().addClass('is-open').css('height','auto');

        //tab
        $accordion.find('.active').removeClass('active'); 
        $(this).addClass('active');   

        } else if(!$accordion.hasClass('tabs') || ($accordion.hasClass('tabs') && $accordion.find('>li:first-child').css('display') == 'list-item')){

          $accordion.find('.is-open').removeClass('.is-open').css('height',0);
          $(this).removeClass('active');        
        }
      });
    }); 
  }
})(jQuery);


//USE
$(document).ready(function () { 

  $('.accordion').accordionTabs({"autoExpandFirst":true});
});
