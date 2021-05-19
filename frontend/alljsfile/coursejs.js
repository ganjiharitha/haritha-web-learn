$(document).ready(function() {
    var newId = uniqId();
    var newTest = { 'name': "", 'id': newId, 'Articels': "" };
    $.get("/api/courses",function(data,status){
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
        newTest.name= $('#selector').val();
        newTest.Articels = $('#articul').val();
        newTest.id=uniqId();
        if(newTest.name=="")
        alert("no test selected");
         else if(newTest.Articels=="")
        alert("no articules are selected");
        else
        {
            $.ajax({
            method: "POST",
            url: `/api/courselib`,
            data: {
                name: newTest.name,
                Articles: newTest.Articels,
                id : newTest.id
            },
            success: function(Data) {
                Data = Data.itemdetails
                addRow(Data);

            }
            })

            addRow(newTest);
            $(".selectdiv").css("visibility","hidden");
            $(".addingdiv").css("height","50px");
            $('#selector').val('');
            $('#articul').val('');
        }
    });
});
function uniqId() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
}
    function addRow(obj) {

        var row = `<tr scope="row" class="test-row-${obj.id}">
                       <td>${obj.name}</td>
                       <td id="result-${obj.id}" data-testid="${obj.id}"">${obj.Articels}</td>
                       <td>
                         <button data-testid="${obj.id}" id="delete-${obj.id}">Delete</button>
                         <button data-testid="${obj.id}"  id="save-${obj.id}">Save</button>

                       </td>
                   </tr>`
        $('#tests-table').append(row)

        $(`#delete-${obj.id}`).on('click', deleteTest);
        $(`#save-${obj.id}`).on('click', saveUpdate);


        $(`#result-${obj.id}`).on('click', editResult)

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
         $.ajax({
            method: "PUT",
            url: `/api/courselib/${testid}`,
            data: {
                Articles: $(`#${testid}`).val()
         },
        success: function(Data) {}
    })
        var saveBtn = $(`#save-${testid}`)
        var row = $(`.test-row-${testid}`)

        saveBtn.prop('disabled', true)
        row.css('opacity', "0.5")

        setTimeout(function () {
            row.css('opacity', '1')
        }, 2000)


    }

    function deleteTest() {
        var testid = $(this).data('testid');
        var row = $(`.test-row-${testid}`)
        $.ajax({
        method: "DELETE",
        url: `/api/courselib/${testid}`,

        success: function(Data) {

        }
        })
        row.remove()
        var deleteBtn = $(`#delete-${testid}`)
        var saveBtn = $(`#save-${testid}`)

    }
