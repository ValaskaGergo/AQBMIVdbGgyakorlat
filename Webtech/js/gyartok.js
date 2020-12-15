$(document).ready(function() {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data) {
        $.each(data, function(key, value) {
            $(".adatok").append(`<tr>
            <td>`+value.name+`</td>
            <td>`+value.country+`</td>
            <td>`+value.founded+`</td>
        </tr>`);
        })
    })
})
