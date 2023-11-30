function panelPreload(){
    leftPanelHandler = document.getElementsByClassName("left-panel")[0];
    leftPanelSelContainer = leftPanelHandler.getElementsByClassName("panel-selection-container")[0];
    for(var i=1;i<=20;i++){
        //[TODO] This usage of innerHTML is too low. I should find some elegant functions to adapt that.
        leftPanelSelContainer.innerHTML += "<div class=\"panel-selection nowrap\">Generated Panel Content "+i+"</div>";
    }

    stagePanelHandler = document.getElementsByClassName("stage-panel")[0];
    for(var i=1;i<=100;i++){
        stagePanelHandler.innerHTML += "Some word in this line; Number : "+i+"<br>";
    }
}
