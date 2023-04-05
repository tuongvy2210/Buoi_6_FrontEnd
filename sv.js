lst = [];
curItem = null;
$(function () {
    getStudents();
})

function getStudents() {
    fetch("http://localhost:3000/students")
        .then(res => res.json()).then(data => {
            data.forEach((element, index) => {
                element.STT = index + 1
                lst.push(element);
            });
            
            $("#tbodySV").html("");
            $("#svTemplate").tmpl(lst).appendTo("#tbodySV");

        })
        .catch(err => {
            str = "<caption>Error...</caption>";
            $("#tbodySV").html(str);
        })
}