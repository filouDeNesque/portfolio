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


var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwIn4XmKXTgg6dnPtEXxZ5R4lrUivUFwplsLwWZ6HkdTH_LntpFKvuY/exec';

$('#submit-form').on('click', function(e){
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method:"GET",
        dataType:"json",
        data:$form.serializeObject()
    }).done(function(){
        //do something
        console.log($form.serializeObject());
    });
})