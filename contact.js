var map = document.getElementById('mapiframe');
var visibmap = 0;

function setvisibmap() {
    if (visibmap == 0) {
        map.classList.add('visiblemap');
        visibmap += 1;
    } else {
        map.classList.remove('visiblemap');
        visibmap = 0
    }
}