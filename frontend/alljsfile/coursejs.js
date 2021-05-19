$(document).ready(function() {
    var newId = 1;
    var newTest = { 'names' : "", "id" : newId, 'articles' : ""};


    $.get("/crud/get",function(data,status){
    var tests=data;
    for (var i in tests) {
        addRow(tests[i]);
    }
     });
    $("#addbtn").click(function(){
        $(".selectdiv").css("visibility","visible");
        $(".addingdiv").css("height","auto");
    });
    $("#subbtn").click(function(){
        newTest.names= $('#selector').val();
        newTest.id=newId++;
        newTest.articles = $('#articul').val();

        if(newTest.names=="")
        alert("no test selected");
         else if(newTest.articles=="")
        alert("no articules are selected");
        else
        {
            addRow(newTest);
            $(".selectdiv").css("visibility","hidden");
            $(".addingdiv").css("height","50px");

           $.post("/crud/post",
                {
                names : newTest.names,
                articles : newTest.articles,
                id : newTest.id
                })
             $('#selector').val('');
            $('#articul').val('');
        }
    });
});
    function addRow(obj) {

        var row = `<tr scope="row" class="test-row-${obj._id}">
                       <td>${obj.names}</td>
                       <td id="result-${obj._id}" data-testid="${obj._id}"">${obj.articles}</td>
                       <td>
                         <button data-testid="${obj._id}" id="delete-${obj._id}">Delete</button>
                         <button data-testid="${obj._id}"  id="save-${obj._id}">Save</button>

                       </td>
                   </tr>`
        $('#tests-table').append(row)

        $(`#delete-${obj._id}`).on('click', deleteTest);
        $(`#save-${obj._id}`).on('click', saveUpdate);


        $(`#result-${obj._id}`).on('click', editResult)

    }

    function editResult() {
     var testid = $(this).data('testid')
        var value = $(this).html()

        $(this).unbind()
        $(this).html(`<input class="result form-control" data-testid="${testid}" type="text" value="${value}">`)

        $(`.result`).on('keyup', function () {
            var testid = $(this).data('testid')
            var saveBtn = $(`#save-${testid}`)
            saveBtn.prop('disabled', false)

        })

    }

    function saveUpdate() {
        console.log('Saved!')
        var testid = $(this).data('testid')
        var saveBtn = $(`#save-${testid}`)
        var row = $(`.test-row-${testid}`)



        saveBtn.prop('disabled', true)
        row.css('opacity', "0.5")

        setTimeout(function () {
            row.css('opacity', '1')
        }, 2000)

        $.ajax({
        url: '/crud/put/'+testid,
        type: 'PUT',
        method : 'PUT',
        dataType: 'json'

    });
    }

    function deleteTest() {
        var testid = $(this).data('testid');
        var row = $(`.test-row-${testid}`)
        row.remove();
        console.log(testid)
        console.log(row)
        $.ajax({
        url: '/crud/del/'+testid,
        type: 'DELETE',
        method : 'DELETE',
        dataType: 'json'
    });
    }
