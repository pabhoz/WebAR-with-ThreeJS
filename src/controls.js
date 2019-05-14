document.onkeydown = (e) => {
 switch (e.key) {
            case "w":
                if(controlsOn) { markerRoot1.children[0].position.y += 0.5;}
                break;
            case "s":
                if(controlsOn) { markerRoot1.children[0].position.y -= 0.5;}
                break;
        }
}

document.onkeyup = (e) => {

    }