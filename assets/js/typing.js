export function typeWriter( txt, elId, i, speed ) {
    //@TODO Correggere 
    // document.getElementById( 'hero-content' ).insertAdjacentHTML( 'afterbegin', '' ); 

    function writer() {
        if (i < txt.length) {
            document.getElementById( 'typing' ).innerHTML += txt.charAt(i);
            console.log(1);
            i++;
            
            setTimeout(writer, speed);
        }   
    }

    writer();
}