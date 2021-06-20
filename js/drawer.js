
/* script required for the animated dropdropdown */
/* some relevant css styling is in the css file */

/* drawer-container is always present and is the activator for the drawer */
/* drawer-content is the content of the drawer that is expanded or collapsed */



/* the click action that triggers when drawer-container is clicked */
function clicked()
{
    var drawerButtonId = this.id;
    var drawer = getCorrespondingDrawer(document.getElementsByClassName("drawer-content"),drawerButtonId);
    if (drawer.classList.toggle('expanded'))
    {
        drawer.style.marginTop = '0px';
    }
    if (drawer.classList.toggle('collapsed')){
        drawer.style.marginTop = '-'+drawer.offsetHeight +'px';
    }
}


/* helper function that matches the drawer-container and drawer-content */
function getCorrespondingDrawer (list, id){

    for (var i = 0; i < list.length; i++){
        if(list[i].id == id){
            return list[i];
        }
    }
    return null;
}





/* sets up the event listeners */
document.addEventListener('readystatechange',function(e) {

     var drawerButtons = document.getElementsByClassName("drawer-container");
     var drawerList = document.getElementsByClassName("drawer-content");

    setTimeout(function(){;},10);
    for (var i = 0; i < drawerButtons.length; i++){

        var button = drawerButtons.item(i);

        var drawer = getCorrespondingDrawer(drawerList, button.id);
        if (drawer != null) {
            
            button.addEventListener("click",clicked);
            
            /*TODO: can append the other styles to this */
            console.log(drawer.offsetHeight);
        }
    }

//     /* need small delay */
//     /* need to check if we still need to do this */
//     /* if this is done in the loop above without the delay, some instances
//         of the page will have a negative offset of 74 instead of its actual
//         height*/
//    setTimeout(function(){var drawerList = document.getElementsByClassName("drawer-content");
//         for(var i = 0; i < drawerList.length;i++){
//             console.log(drawerList[i].offsetHeight);
//             drawerList[i].style.marginTop = '-'+drawerList[i].offsetHeight+'px'; 
//         }//}, 10);


});



