var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
    function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of  tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    }

    // -------------------------------------- script 2 ------------------

    var sidemenu = document.getElementById("sidemenu");
    function openmenu() {
        sidemenu.style.right = "0"; 
        // un nav ul right=-200px so here put right=0 so that it will 
    }
    function closemenu() {
        sidemenu.style.right = "-200px"; 
    }
    