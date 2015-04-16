function searcher(){
    var name = document.getElementById("getter").value;
    if(name == "UBM 883"){
        window.location.href = 'Taxiprofile1.html';
        }
    else if(name == "ABC 123")    {
        window.location.href = 'Taxiprofile2.html';
    }
    else if(name == "JES 222")    {
        window.location.href = 'Taxiprofile3.html';
    }
    else if(name == "UST 400")    {
        window.location.href = 'Taxiprofile4.html';
    }
    else{
        window.location.href = 'Taxierrorpage.html';
    }
}