
$(document).ready(function () {
    $("#regPage").hide();
    $('.showData').hide();
    $('#register').click(function(){
        $("#regPage").show();
    });
});

//movies search
var btnSearch=document.getElementById('btnSearch')
btnSearch.addEventListener('click', movieData)

function movieData(){
    var search=document.getElementById('search').value
    var result=null
    var xhr= new XMLHttpRequest()
    xhr.open('GET',  'http://www.omdbapi.com/?s=' + search + '&apikey=98cc7623')
    xhr.send()
    xhr.onload=function(){
        if(xhr.status==200){
            result=JSON.parse(xhr.response)
            console.log(result)
            displayData(result)
        }else{
            console.log("Error Code: "+xhr.status)
        }
    }
    event.preventDefault();
}

var tbody=document.getElementById('tbody')

function displayData(input){
    // alert('Hello')
    console.log(input)
    $('.showData').show();
    tbody.textContent=""
    input.Search.forEach(function(ele){
        // console.log(ele.Title)
        var tr=document.createElement('tr')
        var td1=document.createElement('td')
        td1.textContent=ele.Title
        var td2=document.createElement('td')
        td2.textContent=ele.Year
        var td3=document.createElement('td')
        td3.textContent=ele.Type
        var td4=document.createElement('td')
        var img=document.createElement('img')
        img.src=ele.Poster
        img.setAttribute('alt',ele.Title)
        img.setAttribute('id', 'imgPoster')
        td4.appendChild(img)
        // td4.textContent=ele.Poster
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tbody.appendChild(tr)
    })
}

