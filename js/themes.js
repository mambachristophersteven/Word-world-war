const body = document.getElementsByTagName("body")[0]
var themeState = localStorage.getItem("themeState") ? JSON.parse(localStorage.getItem("themeState")) : {
    bgColor: "#FFFFFF",
}


function initState(){
    let themeState = localStorage.getItem("themeState") && JSON.parse(localStorage.getItem("themeState")) 
}

initState()

function handleThemeSelection(){
    var themes = document.getElementsByClassName("theme")
    for(let i = 0; i < themes.length; i++){
        const theme = themes[i]
        theme.addEventListener("click", ()=>{
            const themeId = theme.getAttribute("id")
            theme.setAttribute("class", "theme selected")
            for(let j = 0; j < themes.length; j++){
                if(i!=j){
                    themes[j].setAttribute("class", "theme")
                }
            }
            switch(themeId){
                case "theme1":
                    themeState = {
                        ...themeState,
                        bgColor: "#5C6C75"
                    }
                    break;
                case "theme2":
                    themeState = {
                        ...themeState,
                        bgColor: "#FFFFFF"
                    }
                    break;
                case "theme3":
                    themeState = {
                        ...themeState,
                        bgColor: "#0E0E0E"
                    }
                    break;
                case "theme4":
                    themeState = {
                        ...themeState,
                        bgColor: "#344B00"
                    }
                    break;
                default:
                    console.log("theme not found")
            }
            body.style.backgroundColor = themeState.bgColor
            localStorage.setItem("themeState", JSON.stringify(themeState)); 
        })
    }
}

handleThemeSelection()