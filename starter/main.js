// default settting starts here

ScrollReveal({ reset: true, distance: '300px',
duration: 2000, })
// default settting ends here


// heading starts here
ScrollReveal().reveal('.heading',{
    origin: 'right',
   
});

ScrollReveal().reveal('.heading', { 
    scale: 4 });
// heading ends here


// logotext starts here
ScrollReveal().reveal('.logotext',{
    origin: 'right',
    
});

ScrollReveal().reveal('.logotext', { 
    scale: 3, distance: '800px',origin:"right" });
// logotext ends here


// firstsection-leftdiv p starts here
ScrollReveal().reveal('.firstsection-leftdiv p',{
    origin: 'bottom',
   
});

ScrollReveal().reveal('..firstsection-leftdiv p', { 
    scale: 4 });
// firstsection-leftdiv p ends here


// line starts here
ScrollReveal().reveal('.line',{
    origin: 'top',
    distance: '150px',
    duration: 2000
});

ScrollReveal().reveal('.line, .firstsection-rightdiv', {
    rotate: {
        x: -270,
        y: 270,
        // z: 2000,
        duration: 2000,
        scale: 4 
    }
});

ScrollReveal().reveal('.line', { 
    scale: 4 });


    ScrollReveal().reveal('.firstsection-rightdiv', {
        
           delay: 500 
        
    });

    ScrollReveal().reveal('.firstsection-rightdiv', { 
        scale: 0.4, origin: "right" });
// line ends here


ScrollReveal().reveal('.secondsection-leftdiv', {
    rotate: {
        // x: 180,
        y: 180,
        // z: 2000,
        duration: 2000,
        scale: 4 ,
        origin:"right"
    }
});

ScrollReveal().reveal('.secondsection-rightdiv', {
    rotate: {
        // x: 180,
        y: -180,
        // z: 2000,
        duration: 2000,
        scale: 4 ,
        origin:"right"
    }
});


ScrollReveal().reveal('.thirdsection-rightdiv', {
    rotate: {
        x: 180,
        // y: -180,
        // z: 2000,
        duration: 2000,
        scale: 4 ,
        origin:"right"
    }
});


ScrollReveal().reveal('.thirdsection-leftdiv', {
    rotate: {
        x: -180,
        y: -180,
        // z: 2000,
        duration: 2000,
        scale: 4 ,
        origin:"right"
    }
});


