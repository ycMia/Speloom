window.onload = function () {
    insBallHandler = document.getElementsByClassName("inspire-ball")[0];
//  alert(insBallHandler);
    insBallHandler.onanimationend = function () {
        if(insBallHandler.classList.contains("inspire-ball-ani-1"))
        {
            insBallHandler.classList.remove("inspire-ball-ani-1");
            insBallHandler.classList.add("inspire-ball-ani-2");
        }
        else
        {
            insBallHandler.classList.remove("inspire-ball-ani-2");
            insBallHandler.classList.add("inspire-ball-ani-1");
        }
    } 
    panelPreload()
}
