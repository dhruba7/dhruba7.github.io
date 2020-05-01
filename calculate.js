
    function Percentage(){
        var x=parseInt(document.getElementById("iinfect").value);
        var y=parseInt(document.getElementById("ideaths").value);
        var z=parseInt(document.getElementById("irecover").value);
       var dPer=(y/x)*100;
       var rPer=(z/x)*100;
    document.getElementById("result").innerHTML="The total number of deaths percentage is "+dPer+"%";
    document.getElementById("result1").innerHTML="The total number of recovered percentage is "+rPer+"%";
    }