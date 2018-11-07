$(function(){
    var area = $("#puzzlearea");
    //let tiles =area.children();
    var tiles = area.children();
    console.log(tiles.length);
    var x = 0;
    var y = 0;
    //var count = 0;
    var b_Top= "100px";
    var b_Left= "100px";
    var b_Top, b_Left;
    var count = 0;
    var div = document.createElement('div');
div.innerHTML = "<div>16</div>";
// set style
div.style.color = 'white';
    document.getElementById("puzzlearea").appendChild(div);
    
    function createGrid(){
        for (var i= 0; i < tiles.length; i++){
            $(tiles[i]).addClass("puzzlepiece");
            tiles[i].style.backgroundSize='400px 400px';
            

            tiles[i].style.top = y + "px";
            tiles[i].style.left = x + "px";

            x+= 100;
            count+=1;


            if(count%4 ==0){
            y+=100;
            x=0;

        } 
    }
}
    
    
    tiles[0].style.backgroundPosition = "0px 0px";
tiles[1].style.backgroundPosition = "-100px 0px";
tiles[2].style.backgroundPosition = "-200px 0px";
tiles[3].style.backgroundPosition = "-300px 0px";

tiles[4].style.backgroundPosition = "0px -100px";
tiles[5].style.backgroundPosition = "-100px -100px";
tiles[6].style.backgroundPosition = "-200px -100px";
tiles[7].style.backgroundPosition = "-300px -100px";

tiles[8].style.backgroundPosition = "0px -200px";
tiles[9].style.backgroundPosition = "-100px -200px";
tiles[10].style.backgroundPosition = "-200px -200px";
tiles[11].style.backgroundPosition = "-300px -200px";

tiles[12].style.backgroundPosition = "0px -300px";
tiles[13].style.backgroundPosition = "-100px -300px";
tiles[14].style.backgroundPosition = "-200px -300px";
//tiles[15].style.backgroundPosition = "-300px -300px";

    let button= document.getElementById('shufflebutton');
    button.addEventListener("click", shuffle);
     for(var i=0; i < tiles.length; i++){
          (function(index) {
            tiles[index].addEventListener("mouseover", function(){
            validMove(this);
            });
            tiles[index].addEventListener("click", function(){
            if (validMove(this)){
                     move(tiles[index]);
            }
            });
            tiles[index].addEventListener("mouseout", function(){
                       this.setAttribute("class", "puzzlepiece");
            });
          })(i);

     }
    
function shuffle(){
         var tile;
         for (var i=0; i<100; i++){
                 tile=  Math.floor(Math.random() * 15);
                 move(tiles[tile]);
         }
     }

function move(puzzlepiece){
            blockTop=puzzlepiece.offsetTop;
            blockLeft=puzzlepiece.offsetLeft;
            puzzlepiece.setAttribute("id", "selected");
            $('#selected').animate({
                backgroundImage: "url(background.jpg)",
                border: "2px solid black",
                height: "96px",
                lineHeight: "96px",
                position: "absolute",
                textAlign: "center",
                verticalAlign: "middle",
                width: "96px",
                left: b_Left,
                top: b_Top
             });
              puzzlepiece.style.top = b_Top;
              puzzlepiece.style.left = b_Left;
              b_Top= blockTop + "px";
              b_Left=blockLeft + "px";
              puzzlepiece.removeAttribute("id");
    }
    
    
    function validMove(puzzlepiece){
                blockTop=puzzlepiece.offsetTop;
                blockLeft= puzzlepiece.offsetLeft;
                var top= blockTop + "px";
                var left= blockLeft + "px";

                var testleft= Math.abs(parseInt(left) - parseInt(b_Left));
                if (top == b_Top && testleft==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;

                       }

                var testright= Math.abs(parseInt(top) - parseInt(b_Top));
                if (left == b_Left && testright==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;

                       }

    }
    

    
    createGrid();

});

