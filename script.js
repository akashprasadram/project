function random_bg_color() 
{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
    
 function loadcolor()
 {
		 var arr=document.getElementsByClassName('card');
		 var len=arr.length;
		 for(var i=0;i<len;i++)
		 {
		 	arr[i].style.backgroundColor=random_bg_color();
		 }
}
loadcolor();