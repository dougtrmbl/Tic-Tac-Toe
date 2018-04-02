$('document').ready(function() {
    var user="X";
    var comp="O";

var userArr=[];
var compArr=[];

$('#select').on('click', function() {
if($('#select').html() === "Play as O"){
    user ="O";
    comp ="X";
    $('#select').html("Play as X");
}else{
    user ="X";
    comp ="O";
    $('#select').html("Play as O")
    
}

})

function reset() {
    
       setTimeout(function (){$('#topLeft').html("");
        $('#topMid').html("");
        $('#topRight').html("");
        $('#midLeft').html("");
        $('#midMid').html("");
        $('#midRight').html("");
        $('#botLeft').html("");
        $('#botMid').html("");
        $('#botRight').html("");
    
    userArr=[];
    compArr=[];
    }, 1000);
}

$('#topLeft').on('click', function() {
    userArr.push("topLeft");
    $('#topLeft').html(user);
    
    makeMove();
    if(userArr.length + compArr.length === 9) {
    reset();
    }
})
$('#topMid').on('click', function() {
    userArr.push("topMid");
    $('#topMid').html(user);
    
    makeMove();
    if(userArr.length + compArr.length === 9) {
    reset();
    }
})
$('#topRight').on('click', function() {
    userArr.push("topRight");
    $('#topRight').html(user);
    
    makeMove();
    if(userArr.length + compArr.length === 9) {
    reset();
    }
})
$('#midLeft').on('click', function() {
    userArr.push("midLeft");
    $('#midLeft').html(user);
    
    makeMove();
    if(userArr.length + compArr.length === 9) {
    reset();
    }
})
$('#midMid').on('click', function() {
    userArr.push("midMid");
    $('#midMid').html(user);
    
    makeMove();
    if(userArr.length + compArr.length === 9) {
    reset();
    }
})
$('#midRight').on('click', function() {
    userArr.push("midRight");
    $('#midRight').html(user);
    
    makeMove();
    if(userArr.length + compArr.length === 9) {
    reset();
    }
})
$('#botLeft').on('click', function() {
    userArr.push("botLeft");
    $('#botLeft').html(user);
    
    makeMove();
    if(userArr.length + compArr.length === 9) {
    reset();
    }
}) 
$('#botMid').on('click', function() {
    userArr.push("botMid");
    $('#botMid').html(user);
    
    makeMove();
    if(userArr.length + compArr.length === 9) {
    reset();
    }
})
$('#botRight').on('click', function() {
    userArr.push("botRight");
    $('#botRight').html(user);
    
    makeMove();
    if(userArr.length + compArr.length === 9) {
    reset();
    }
})
function makeMove() {
if($('#midMid').html() === user && userArr.length === 1 && compArr.indexOf("topLeft") < 0) {
    compArr.push("topLeft");
    $('#topLeft').html(comp);

}else if(userArr.length === 1 && $('#midMid').html() !== user ) {
    compArr.push("midMid");
    $('#midMid').html(comp);

}else if(userArr.indexOf("midMid") >= 0 && userArr.indexOf("botRight") >=0 && userArr.indexOf("midRight") < 0 && compArr.indexOf("midRight") < 0 && compArr.indexOf("topRight") < 0){
    compArr.push("midRight");
    $('#midRight').html(comp);

}else if(userArr[0] === "topLeft" && userArr[1] === "botRight" && compArr.indexOf("botMid") < 0|| userArr[1] === "topLeft" && userArr[0] === "botRight" && compArr.indexOf("botMid") < 0 || userArr[0] === "topRight" && userArr[1] === "botLeft" && compArr.indexOf("botMid") < 0 || userArr[1] === "topRight" && userArr[0] === "botLeft" && compArr.indexOf("botMid") < 0 ){
    compArr.push("botMid");
    $('#botMid').html(comp);    


}else if(compArr.indexOf("topLeft") >=0 && compArr.indexOf("topMid") >= 0 && userArr.indexOf("topRight") < 0 && compArr.indexOf("topRight") < 0 ) {
    $('#topRight').html(comp);
    compArr.push("topRight");
    reset();
    
}else if(compArr.indexOf("topLeft") >= 0 && compArr.indexOf("topRight") >= 0 && userArr.indexOf("topMid") < 0 && compArr.indexOf("topMid") < 0) {
    $('#topMid').html(comp);
    compArr.push("topMid");
    reset();
    
}else if(compArr.indexOf("topMid") >= 0 && compArr.indexOf("topRight") >= 0 && userArr.indexOf("topLeft") < 0 && compArr.indexOf("topLeft") < 0) {
    $('#topLeft').html(comp);
    compArr.push("topLeft");
    reset();
    
}else if(compArr.indexOf("midLeft") >=0 && compArr.indexOf("midMid") >= 0 && userArr.indexOf("midRight") < 0 && compArr.indexOf("midRight") < 0 ) {
        $('#midRight').html(comp);
        compArr.push("midRight");
        reset();
        
}else if(compArr.indexOf("midLeft") >= 0 && compArr.indexOf("midRight") >= 0 && userArr.indexOf("midMid") < 0 && compArr.indexOf("midMid") < 0) {
        $('#midMid').html(comp);
        compArr.push("midMid");
        reset();
       
}else if(compArr.indexOf("midMid") >= 0 && compArr.indexOf("midRight") >= 0 && userArr.indexOf("midLeft") < 0 && compArr.indexOf("midLeft") < 0) {
        $('#midleft').html(comp);
        compArr.push("midLeft");
        reset();
        
}else if(compArr.indexOf("botLeft") >=0 && compArr.indexOf("botMid") >= 0 && userArr.indexOf("botRight") < 0 && compArr.indexOf("botRight") < 0 ) {
            $('#botRight').html(comp);
            compArr.push("botRight");
            reset();
            
}else if(compArr.indexOf("botLeft") >= 0 && compArr.indexOf("botRight") >= 0 && userArr.indexOf("botMid") < 0 && compArr.indexOf("botMid") < 0) {
            $('#botMid').html(comp);
            compArr.push("botMid");
            reset();
            
}else if(compArr.indexOf("botMid") >= 0 && compArr.indexOf("botRight") >= 0 && userArr.indexOf("botLeft") < 0 && compArr.indexOf("botLeft") < 0) {
            $('#botleft').html(comp);
            compArr.push("botLeft");
            reset();
            
}else if(compArr.indexOf("topLeft") >= 0 && compArr.indexOf("midLeft") >= 0 && userArr.indexOf("botLeft") < 0 && compArr.indexOf("botLeft") < 0){
    compArr.push("botLeft");
    $('#botLeft').html(comp);
    reset();
   
}else if(compArr.indexOf("topLeft") >= 0 && compArr.indexOf("botLeft") >= 0 && userArr.indexOf("midLeft") < 0 && compArr.indexOf("midLeft") < 0) {
    compArr.push("midLeft");
    $('#midLeft').html(comp);
    reset();
   
}else if(compArr.indexOf("midLeft") >= 0 && compArr.indexOf("botLeft") >= 0 && userArr.indexOf("topLeft") < 0 && compArr.indexOf("topLeft") < 0) {
    compArr.push("topLeft");
    $('#topLeft').html(comp);
    reset();
    
}else if(compArr.indexOf("topMid") >= 0 && compArr.indexOf("midMid") >= 0 && userArr.indexOf("botMid") < 0 && compArr.indexOf("botMid") < 0){
    compArr.push("botMid");
    $('#botMid').html(comp);
    reset();
    
}else if(compArr.indexOf("topMid") >= 0 && compArr.indexOf("botMid") >= 0 && userArr.indexOf("midMid") < 0 && compArr.indexOf("midMid") < 0) {
    compArr.push("midMid");
    $('#midMid').html(comp);
    reset();
    
}else if(compArr.indexOf("midMid") >= 0 && compArr.indexOf("botMid") >= 0 && userArr.indexOf("topMid") < 0 && compArr.indexOf("topMid") < 0) {
    compArr.push("topMid");
    $('#topMid').html(comp);
    reset();
    
}else if(compArr.indexOf("topRight") >= 0 && compArr.indexOf("midRight") >= 0 && userArr.indexOf("botRight") < 0 && compArr.indexOf("botRight") < 0){
    compArr.push("botRight");
    $('#botRight').html(comp);
    reset();
   
}else if(compArr.indexOf("topRight") >= 0 && compArr.indexOf("botRight") >= 0 && userArr.indexOf("midRight") < 0 && compArr.indexOf("midRight") < 0) {
    compArr.push("midRight");
    $('#midRight').html(comp);
    reset();
   
}else if(compArr.indexOf("midRight") >= 0 && compArr.indexOf("botRight") >= 0 && userArr.indexOf("topRight") < 0 && compArr.indexOf("topRight") < 0) {
    compArr.push("topRight");
    $('#topRight').html(comp);
    reset();
    
}else if(compArr.indexOf("topLeft") >= 0 && compArr.indexOf("midLeft") >= 0 && userArr.indexOf("botLeft") < 0 && compArr.indexOf("botLeft") < 0){
    compArr.push("botLeft");
    $('#botLeft').html(comp);
    reset();
    
}else if(compArr.indexOf("topLeft") >= 0 && compArr.indexOf("botLeft") >= 0 && userArr.indexOf("midLeft") < 0 && compArr.indexOf("midLeft") < 0) {
    compArr.push("midLeft");
    $('#midLeft').html(comp);
    reset();
   
}else if(compArr.indexOf("topLeft") >= 0 && compArr.indexOf("botRight") >= 0 && userArr.indexOf("midMid") < 0 && compArr.indexOf("midMid") < 0) {
    compArr.push("midMid");
    $('#midMid').html(comp);
    reset();
    
}else if(compArr.indexOf("topLeft") >= 0 && compArr.indexOf("midMid") >= 0 && userArr.indexOf("botRight") < 0 && compArr.indexOf("botRight") < 0) {
    compArr.push("botRight");
    $('#botRight').html(comp);
    reset();
   
}else if(compArr.indexOf("midMid") >= 0 && compArr.indexOf("botRight") >= 0 && userArr.indexOf("topLeft") < 0 && compArr.indexOf("topLeft") < 0) {
    compArr.push("topLeft");
    $('#topLeft').html(comp);
    reset();
   
}else if(compArr.indexOf("topRight") >= 0 && compArr.indexOf("botLeft") >= 0 && userArr.indexOf("midMid") < 0 && compArr.indexOf("midMid") < 0) {
    compArr.push("midMid");
    $('#midMid').html(comp);
    reset();
   
}else if(compArr.indexOf("topRight") >= 0 && compArr.indexOf("midMid") >= 0 && userArr.indexOf("botLeft") < 0 && compArr.indexOf("botLeft") < 0) {
    compArr.push("botLeft");
    $('#botLeft').html(comp);
    reset();
    
}else if(compArr.indexOf("midMid") >= 0 && compArr.indexOf("botLeft") >= 0 && userArr.indexOf("topRight") < 0 && compArr.indexOf("topRight") < 0) {
    compArr.push("topRight");
    $('#topRight').html(comp);
    reset();
    



}else if(userArr.indexOf("topLeft") >=0 && userArr.indexOf("topMid") >= 0 && userArr.indexOf("topRight") < 0 && compArr.indexOf("topRight") < 0 ) {
    $('#topRight').html(comp);
    compArr.push("topRight");
}else if(userArr.indexOf("topLeft") >= 0 && userArr.indexOf("topRight") >= 0 && userArr.indexOf("topMid") < 0 && compArr.indexOf("topMid") < 0) {
    $('#topMid').html(comp);
    compArr.push("topMid");
}else if(userArr.indexOf("topMid") >= 0 && userArr.indexOf("topRight") >= 0 && userArr.indexOf("topLeft") < 0 && compArr.indexOf("topLeft") < 0) {
    $('#topLeft').html(comp);
    compArr.push("topLeft");
}else if(userArr.indexOf("midLeft") >=0 && userArr.indexOf("midMid") >= 0 && userArr.indexOf("midRight") < 0 && compArr.indexOf("midRight") < 0 ) {
        $('#midRight').html(comp);
        compArr.push("midRight");
}else if(userArr.indexOf("midLeft") >= 0 && userArr.indexOf("midRight") >= 0 && userArr.indexOf("midMid") < 0 && compArr.indexOf("midMid") < 0) {
        $('#midMid').html(comp);
        compArr.push("midMid");
}else if(userArr.indexOf("midMid") >= 0 && userArr.indexOf("midRight") >= 0 && userArr.indexOf("midLeft") < 0 && compArr.indexOf("midLeft") < 0) {
        $('#midLeft').html(comp);
        compArr.push("midLeft");
}else if(userArr.indexOf("botLeft") >=0 && userArr.indexOf("botMid") >= 0 && userArr.indexOf("botRight") < 0 && compArr.indexOf("botRight") < 0 ) {
            $('#botRight').html(comp);
            compArr.push("botRight");
}else if(userArr.indexOf("botLeft") >= 0 && userArr.indexOf("botRight") >= 0 && userArr.indexOf("botMid") < 0 && compArr.indexOf("botMid") < 0) {
            $('#botMid').html(comp);
            compArr.push("botMid");
}else if(userArr.indexOf("botMid") >= 0 && userArr.indexOf("botRight") >= 0 && userArr.indexOf("botLeft") < 0 && compArr.indexOf("botLeft") < 0) {
            $('#botleft').html(comp);
            compArr.push("botLeft");
}else if(userArr.indexOf("topLeft") >= 0 && userArr.indexOf("midLeft") >= 0 && userArr.indexOf("botLeft") < 0 && compArr.indexOf("botLeft") < 0){
    compArr.push("botLeft");
    $('#botLeft').html(comp);
}else if(userArr.indexOf("topLeft") >= 0 && userArr.indexOf("botLeft") >= 0 && userArr.indexOf("midLeft") < 0 && compArr.indexOf("midLeft") < 0) {
    compArr.push("midLeft");
    $('#midLeft').html(comp);
}else if(userArr.indexOf("midLeft") >= 0 && userArr.indexOf("botLeft") >= 0 && userArr.indexOf("topLeft") < 0 && compArr.indexOf("topLeft") < 0) {
    compArr.push("topLeft");
    $('#topLeft').html(comp);
}else if(userArr.indexOf("topMid") >= 0 && userArr.indexOf("midMid") >= 0 && userArr.indexOf("botMid") < 0 && compArr.indexOf("botMid") < 0){
    compArr.push("botMid");
    $('#botMid').html(comp);
}else if(userArr.indexOf("topMid") >= 0 && userArr.indexOf("botMid") >= 0 && userArr.indexOf("midMid") < 0 && compArr.indexOf("midMid") < 0) {
    compArr.push("midMid");
    $('#midMid').html(comp);
}else if(userArr.indexOf("midMid") >= 0 && userArr.indexOf("botMid") >= 0 && userArr.indexOf("topMid") < 0 && compArr.indexOf("topMid") < 0) {
    compArr.push("topMid");
    $('#topMid').html(comp);
}else if(userArr.indexOf("topRight") >= 0 && userArr.indexOf("midRight") >= 0 && userArr.indexOf("botRight") < 0 && compArr.indexOf("botRight") < 0){
    compArr.push("botRight");
    $('#botRight').html(comp);
}else if(userArr.indexOf("topRight") >= 0 && userArr.indexOf("botRight") >= 0 && userArr.indexOf("midRight") < 0 && compArr.indexOf("midRight") < 0) {
    compArr.push("midRight");
    $('#midRight').html(comp);
}else if(userArr.indexOf("midRight") >= 0 && userArr.indexOf("botRight") >= 0 && userArr.indexOf("topRight") < 0 && compArr.indexOf("topRight") < 0) {
    compArr.push("topRight");
    $('#topRight').html(comp);
}else if(userArr.indexOf("topLeft") >= 0 && userArr.indexOf("midLeft") >= 0 && userArr.indexOf("botLeft") < 0 && compArr.indexOf("botLeft") < 0){
    compArr.push("botLeft");
    $('#botLeft').html(comp);
}else if(userArr.indexOf("topLeft") >= 0 && userArr.indexOf("botLeft") >= 0 && userArr.indexOf("midLeft") < 0 && compArr.indexOf("midLeft") < 0) {
    compArr.push("midLeft");
    $('#midLeft').html(comp);
}else if(userArr.indexOf("topLeft") >= 0 && userArr.indexOf("botRight") >= 0 && userArr.indexOf("midMid") < 0 && compArr.indexOf("midMid") < 0) {
    compArr.push("midMid");
    $('#midMid').html(comp);
}else if(userArr.indexOf("topLeft") >= 0 && userArr.indexOf("midMid") >= 0 && userArr.indexOf("botRight") < 0 && compArr.indexOf("botRight") < 0) {
    compArr.push("botRight");
    $('#botRight').html(comp);
}else if(userArr.indexOf("midMid") >= 0 && userArr.indexOf("botRight") >= 0 && userArr.indexOf("topLeft") < 0 && compArr.indexOf("topLeft") < 0) {
    compArr.push("topLeft");
    $('#topLeft').html(comp);
}else if(userArr.indexOf("topRight") >= 0 && userArr.indexOf("botLeft") >= 0 && userArr.indexOf("midMid") < 0 && compArr.indexOf("midMid") < 0) {
    compArr.push("midMid");
    $('#midMid').html(comp);
}else if(userArr.indexOf("topRight") >= 0 && userArr.indexOf("midMid") >= 0 && userArr.indexOf("botLeft") < 0 && compArr.indexOf("botLeft") < 0) {
    compArr.push("botLeft");
    $('#botLeft').html(comp);
}else if(userArr.indexOf("midMid") >= 0 && userArr.indexOf("botLeft") >= 0 && userArr.indexOf("topRight") < 0 && compArr.indexOf("topRight") < 0) {
    compArr.push("topRight");
    $('#topRight').html(comp);

}else if(userArr.indexOf("botMid") >= 0 &&  userArr.indexOf("topLeft") >= 0 &&  userArr.indexOf("topRight") >= 0 && compArr.indexOf("midLeft") < 0 && userArr.indexOf("midLeft") < 0){
    compArr.push("midLeft");
    $('#midLeft').html(comp);
}else if(userArr.indexOf("botMid") >= 0 &&  userArr.indexOf("topLeft") >= 0 &&  userArr.indexOf("topRight") >= 0 && compArr.indexOf("midRight") < 0 && userArr.indexOf("midRight") < 0){
    compArr.push("midRight");
    $('#midRight').html(comp);

} else if(userArr.indexOf("midRight") >= 0 && userArr.indexOf("botLeft") >= 0 &&  userArr.indexOf("topLeft") >= 0 && compArr.indexOf("botMid") < 0 && userArr.indexOf("botMid") < 0){
    compArr.push("botMid");
    $('#botMid').html(comp);
} else if(userArr.indexOf("midRight") >= 0 && userArr.indexOf("botLeft") >= 0 &&  userArr.indexOf("topLeft") >= 0 && compArr.indexOf("topMid") < 0 && userArr.indexOf("topMid") < 0){
    compArr.push("topMid");
    $('#topMid').html(comp);

}else if( userArr.indexOf("topMid") >= 0 && userArr.indexOf("botRight") >= 0 &&  userArr.indexOf("botLeft") >= 0 && compArr.indexOf("midRight") < 0 && userArr.indexOf("midRight") < 0){
    compArr.push("midRight");
    $('#midRight').html(comp);
}else if( userArr.indexOf("topMid") >= 0 && userArr.indexOf("botRight") >= 0 &&  userArr.indexOf("botLeft") >= 0 && compArr.indexOf("midLeft") < 0 && userArr.indexOf("midLeft") < 0){
    compArr.push("midLeft");
    $('#midLeft').html(comp);

}else if(userArr.indexOf("midLeft") >= 0 && userArr.indexOf("topRight") >= 0 &&  userArr.indexOf("botRight") >= 0 && compArr.indexOf("topMid") < 0 && userArr.indexOf("topMid") < 0){
    compArr.push("topMid");
    $('#topMid').html(comp);
}else if(userArr.indexOf("midLeft") >= 0 && userArr.indexOf("topRight") >= 0 &&  userArr.indexOf("botRight") >= 0 && compArr.indexOf("botMid") < 0 && userArr.indexOf("botMid") < 0){
    compArr.push("botMid");
    $('#botMid').html(comp);

}else if(userArr.indexOf("topLeft") >= 0 && userArr.indexOf("botLeft") >= 0 && compArr.indexOf("midLeft") < 0){
    compArr.push("midLeft");
    $('#midLeft').html(comp);
}else if(userArr.indexOf("topLeft") >= 0 && userArr.indexOf("topRight") >= 0 && compArr.indexOf("topMid") < 0) {
    compArr.push("topMid");
    $('#topMid').html(comp);
}else if(userArr.indexOf("topRight") >= 0 && userArr.indexOf("botRight") >= 0 && compArr.indexOf("midRight") < 0) {
    compArr.push("midRight");
    $('#midRight').html(comp);
}else if(userArr.indexOf("botRight") >=0 && userArr.indexOf("botLeft") >=0 && compArr.indexOf("botMid") < 0) {
    compArr.push("botMid");
    $('#botMid').html(comp);
}else if( userArr.indexOf("botMid") >= 0 &&  userArr.indexOf("topLeft") < 0 && compArr.indexOf("botRight") < 0 && userArr.indexOf("botRight") < 0){
    compArr.push("botRight");
    $('#botRight').html(comp);
} else if(userArr.indexOf("midRight") >= 0 && userArr.indexOf("botLeft") < 0 && compArr.indexOf("topRight") < 0 && userArr.indexOf("topRight") < 0){
    compArr.push("topRight");
    $('#topRight').html(comp);
}else if( userArr.indexOf("topMid") >= 0 && userArr.indexOf("botRight") < 0 && compArr.indexOf("topLeft") < 0 && userArr.indexOf("topLeft") < 0){
    compArr.push("topLeft");
    $('#topLeft').html(comp);
}else if(userArr.indexOf("midLeft") >= 0 && userArr.indexOf("topRight") < 0 && compArr.indexOf("botLeft") < 0 && userArr.indexOf("botLeft") < 0){
    compArr.push("botLeft");
    $('#botLeft').html(comp);
}else if(userArr.indexOf("botMid") >= 0 && userArr.indexOf("topLeft") >= 0 && compArr.indexOf("botLeft") < 0 && userArr.indexOf("botLeft") < 0){
    compArr.push("botLeft");
    $('#botLeft').html(comp);
} else if(userArr.indexOf("midRight") >=0 && userArr.indexOf("botLeft") >= 0 && compArr.indexOf("topLeft") < 0 && userArr.indexOf("topLeft") < 0){
    compArr.push("topLeft");
    $('#topLeft').html(comp);
}else if(userArr.indexOf("topMid") >= 0 && userArr.indexOf("botRight") >= 0 && compArr.indexOf("topRight") < 0 && userArr.indexOf("topRight") < 0) {
    compArr.push("topRight");
    $('#topRight').html(comp);
}else if(userArr.indexOf("midLeft") >= 0 && userArr.indexOf("topRight") >= 0 && compArr.indexOf("topLeft") < 0 && userArr.indexOf("topLeft") < 0){
    compArr.push("topLeft");
    $('#topLeft').html(comp);

}
}
})