window.addEventListener('scroll', () => {
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByClassName('layer');
    let speed = [ 0.2, 0.3, 0.4, 0.4, 1];
    
    for(let i=0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset*speed[i]) +'px)';
    }
 });
 