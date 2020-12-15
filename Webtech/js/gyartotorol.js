$(document).ready(function() {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", (data) => {
        $.each(data, (key, value) => {
            $("select").append("<option value="+value._id+">"+value.name+"</option>");
        })
    })

    $("form").on('submit', function(e) {
        e.preventDefault();
        var id = $("form").find("select[name='manufacturer']").val();

        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/manufacturers/'+id,
            type: "DELETE",
            success: function() {
                console.log("Siker");
            }
        })

    })
})

