var start = new Date().getTime();
       var bestTime=0;
       function makeShapes()
       {
           var top=Math.random()*300;
           var left=Math.random()*300;
           var width=(Math.random()*200)+100;
           if(Math.random()>0.5)
           {
               document.getElementById("shape").style.borderRadius="50%";
           }
           else
           document.getElementById("shape").style.borderRadius="0";
           document.getElementById("shape").style.top=top+"px";
           document.getElementById("shape").style.left=left+"px";
           document.getElementById("shape").style.width=width+"px";
           document.getElementById("shape").style.height=width+"px";
           document.getElementById("shape").style.display="block";
           document.getElementById("shape").style.backgroundColor=getRandomColor();
           start = new Date().getTime();
       }
       function getRandomColor() {
             var letters = '0123456789ABCDEF';
             var color = '#';
             for (var i = 0; i < 6; i++) {
             color += letters[Math.floor(Math.random() * 16)];
              }
             return color;
           }
       function appearAfterdelay()
       {
       setTimeout(makeShapes,Math.random()*2000);
       }
       appearAfterdelay();
     document.getElementById("shape").onclick=function()
     {
        document.getElementById("shape").style.display="none";
        var end = new Date().getTime();
        var Timetaken =(end-start)/1000;
        document.getElementById("time").innerHTML=Timetaken +"s";
        if(bestTime==0 || Timetaken<bestTime)
        bestTime=Timetaken;
        document.getElementById("best").innerHTML=bestTime +"s";
        appearAfterdelay();
        
     }
