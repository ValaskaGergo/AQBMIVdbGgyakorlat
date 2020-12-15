$(document).ready(function() {
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data) {
        $.each(data, function(key, value) {
            $(".adatok").append(`<tr>
            <td>`+value.manufacturer+`</td>
            <td>`+value.name+`</td>
            <td>`+value.color+`</td>
            <td>`+value.year+`</td>
            <td>`+value.horsepower+`</td>
            <td>`+value.consumption+`</td>
            <td>`+value.avaiable+`</td>
        </tr>`);
        })
    })
})
