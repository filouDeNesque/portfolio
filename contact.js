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
    url = 'https://script.google.com/macros/s/AKfycbwrrc9I01PQrx8lF1_-oeBroI-AtXXdSvzqp2LAr8RinYayCQf29stq/exec';

$('#submit-form').on('click', function(e){
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method:"GET",
        datatype:"json",
        data:$form.serializeObject()
    }).done(function(){
        //do something
        console.log($form.serializeObject());
    });
})