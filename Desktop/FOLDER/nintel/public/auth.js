function openSlideMenu() {
    if (document.getElementById("menu").style.width ="100px",
    document.getElementById("container").style.marginLeft ="100px") {
    document.getElementById("openIcon").style.display="none"
    // document.getElementById("userName").style.display="none"
    }
}
function closeSideMenu() {
    if (document.getElementById("menu").style.width ="0px", 
    document.getElementById("container").style.marginLeft ="0px") {
            document.getElementById("openIcon").style.display="block"
            document.getElementById("userName").style.display="block"

    }
}

setTimeout(function () {
    document.getElementById('preloader').style.display='none';

}, 1000);