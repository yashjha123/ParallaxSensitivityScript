$(document).ready(function(){
    a = []
    $('div').each(function(){
      //console.log($(this).attr('story'))
        if($(this).attr('story')!=undefined){
        a.push([$(this),$(this).offset().top,$(this).attr('m'),$(this).attr('s')])
      }
    });
})
$(window).scroll(function(){
    var wScroll = $(window).scrollTop();
    height= $('.slide').height();
    
    
    for(i =0 ;i<a.length;i+=1){
        t = ""
        if(a[i][2]!=undefined){
            t+=' translateY('+((((wScroll+(height/2))-(a[i][1]))/a[i][2]))+'px)'
        }
        if(a[i][3]!=undefined){
           t+=' scale('+ ((  (  (  (  wScroll+ (  height / 2) )-(a[i][1]))/a[i][3]))/1000+1)+')'
            
        }
       a[i][0].css('transform',t)
        console.log(t)
    }
    
    
   
});