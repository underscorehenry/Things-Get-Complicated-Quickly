let key1 = document.getElementById('hiddenDot');
let inventory = [];
let firstLink = document.getElementById('firstLink');
let secondLink = document.getElementById('secondLink');
let thirdLink = document.getElementById('thirdLink');
let logBox = document.getElementById('logBox');
let tickTackToeBoard = document.querySelectorAll('.tickTackToe');
let thirdPageBlocks = document.querySelectorAll('.gameBlocks');
let movingCharacter = document.getElementById('movingCharacter');
let tickTackToeBoard2 = document.querySelectorAll('.tickTackToe1');
let secondPageDummy = document.querySelector('.secondPage');
let fourthPageDummy = document.querySelector('.fourthPage');

document.addEventListener('DOMContentLoaded', (event) => {
    key1.addEventListener('click', (event) => {
        pickUpItem(key1);
        firstLink.firstElementChild.innerHTML = "Let's Go."
    });

    firstLink.addEventListener('click', (event) => {
        if(inventory.length <= 0) {
            logBox.style.display = 'inline';
            logBox.firstElementChild.innerHTML = "You need a key to open me up. My key is somewhere on this page.";
            document.getElementById('continueButton').addEventListener('click', (event) => {
                logBox.style.display = 'none';
            })
        }

        else {
            followLink('firstPage', 'secondPage');
        }
    })

    secondLink.addEventListener('click', (event) => {
        if(!inventory.includes('key2')) {
            logBox.style.display = 'inline';
            logBox.firstElementChild.innerHTML = "You need a key to open me up.";
            document.getElementById('continueButton').addEventListener('click', (event) => {
                logBox.style.display = 'none';
            })
        }

        else {
            followLink('firstPage', 'thirdPage');
            resetThirdPageBoard();
            window.addEventListener('keydown', (event) => {
                moveCharacter(event.key);
            });
        }
    })

    thirdLink.addEventListener('click', (event) => {
        if(!inventory.includes('key3')) {
            logBox.style.display = 'inline';
            logBox.firstElementChild.innerHTML = "You need a key to open me up.";
            document.getElementById('continueButton').addEventListener('click', (event) => {
                logBox.style.display = 'none';
            })
        }

        else {
            followLink('firstPage', 'fourthPage');
        }
    })
});

function pickUpItem(item) {
    item.style.display = 'none';
    inventory.push(item);
}

function dropItem(item, xPosition, yPosition) {
    item.style. display = 'inline';
    item.style.left = xPosition + 'px';
    item.style.top = yPosition + 'px';
}

function hoverOverLink(elementName){
    let element = document.getElementById(elementName);
    let originalColor = element.style.backgroundColor;
    element.style.backgroundColor = 'rgb(253, 245, 196)';
    element.addEventListener('mouseout', (event) => {
        element.style.backgroundColor = originalColor;
    });
}

function followLink(currentPageName, targetPageName) {
   let oldPages = document.querySelectorAll("." + currentPageName);
   let newPages = document.querySelectorAll("." + targetPageName);

   for(let i = 0; i < oldPages.length; i++) {
    oldPages[i].style.display = 'none';
   }

   for(let i = 0; i < newPages.length; i++) {
    newPages[i].style.display = 'inline';
   }


}

function changeColor(elementId) {
    let block = document.getElementById(elementId);
    if(block.style.backgroundColor === 'white') {
        block.style.backgroundColor = 'red';
    }
    if(secondPageDummy.style.display === 'inline') {
    if(isGameOver(block)) {
        logBox.style.display = 'inline';
        logBox.firstElementChild.innerHTML = "Nice You beat me. Here's Your key.";
        inventory.push('key2');
        secondLink.firstElementChild.innerHTML = "Let's Go."
        document.getElementById('continueButton').addEventListener('click', (event) => {
            logBox.style.display = 'none';
            for(let i = 0; i< tickTackToeBoard.length; i++) {
                tickTackToeBoard[i].style.backgroundColor = 'white';
            }
        })
    }
    else {
        while(1 === 1) {
            let cpuBlock = randomPlayByCpu();
            if(cpuBlock){
                changeColorCpu(cpuBlock);
                break;
            }
            else if(tickTackToeBoard[0].style.backgroundColor != 'white'
            && tickTackToeBoard[1].style.backgroundColor != 'white'
            && tickTackToeBoard[2].style.backgroundColor != 'white'
            && tickTackToeBoard[3].style.backgroundColor != 'white'
            && tickTackToeBoard[4].style.backgroundColor != 'white'
            && tickTackToeBoard[5].style.backgroundColor != 'white'
            && tickTackToeBoard[6].style.backgroundColor != 'white'
            && tickTackToeBoard[7].style.backgroundColor != 'white'
            && tickTackToeBoard[8].style.backgroundColor != 'white') {
                logBox.style.display = 'inline';
                logBox.firstElementChild.innerHTML = "Tie Game. Let's Run it back.";
                document.getElementById('continueButton').addEventListener('click', (event) => {
                    logBox.style.display = 'none';
                    for(let i = 0; i< tickTackToeBoard.length; i++) {
                        tickTackToeBoard[i].style.backgroundColor = 'white';
                    }
                })
                break;
            }
            else {
                console.log("picking a tile.");
            }
        }
    }
}

else if(fourthPageDummy.style.display === 'inline') {
    if(isGameOver(block)) {
        logBox.style.display = 'inline';
        logBox.firstElementChild.innerHTML = "Wow You beat me.";
        document.getElementById('continueButton').addEventListener('click', (event) => {
            logBox.style.display = 'none';
            for(let i = 0; i< tickTackToeBoard2.length; i++) {
                tickTackToeBoard2[i].style.backgroundColor = 'white';
            }
        })
    }
    else {
        let counter = 0;
        while(counter < 50) {
            let cpuBlock = randomPlayByCpu();
            if(cpuBlock){
                changeColorCpu(cpuBlock);
                break;
            }
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white'
            && tickTackToeBoard2[1].style.backgroundColor != 'white'
            && tickTackToeBoard2[2].style.backgroundColor != 'white'
            && tickTackToeBoard2[3].style.backgroundColor != 'white'
            && tickTackToeBoard2[4].style.backgroundColor != 'white'
            && tickTackToeBoard2[5].style.backgroundColor != 'white'
            && tickTackToeBoard2[6].style.backgroundColor != 'white'
            && tickTackToeBoard2[7].style.backgroundColor != 'white'
            && tickTackToeBoard2[8].style.backgroundColor != 'white') {
                logBox.style.display = 'inline';
                logBox.firstElementChild.innerHTML = "Tie Game. Let's Run it back.";
                document.getElementById('continueButton').addEventListener('click', (event) => {
                    logBox.style.display = 'none';
                    for(let i = 0; i< tickTackToeBoard2.length; i++) {
                        tickTackToeBoard2[i].style.backgroundColor = 'white';
                    }
                })
                break;
            }
            else {
                console.log("picking a tile.");
                counter = counter + 1;
            }
        }
    }
}
}

function changeColorCpu(element) {
    element.style.backgroundColor = 'black';
    if(isGameOver(element)) {
        logBox.style.display = 'inline';
        logBox.firstElementChild.innerHTML = "Hahaha. I won."
        document.getElementById('continueButton').addEventListener('click', (event) => {
            logBox.style.display = 'none';
            for(let i = 0; i< tickTackToeBoard.length; i++) {
                tickTackToeBoard[i].style.backgroundColor = 'white';
            }

            for(let i = 0; i< tickTackToeBoard2.length; i++) {
                tickTackToeBoard2[i].style.backgroundColor = 'white';
            }
        })
    } 
}

function isGameOver(element) {
    if(secondPageDummy.style.display === 'inline') {
    if(element.id === '1') {
        if(tickTackToeBoard[1].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[2].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[3].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[6].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[8].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '2') {
        if(tickTackToeBoard[0].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[2].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[7].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '3') {
        if(tickTackToeBoard[1].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[0].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[5].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[8].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[6].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '4') {
        if(tickTackToeBoard[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[5].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[0].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[6].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '5') {
        if(tickTackToeBoard[3].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[5].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[1].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[7].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[0].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[8].style.backgroundColor === element.style.backgroundColor 
        || tickTackToeBoard[2].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[6].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '6') {
        if(tickTackToeBoard[3].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[4].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[8].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[2].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '7') {
        if(tickTackToeBoard[7].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[8].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[3].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[0].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[2].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '8') {
        if(tickTackToeBoard[6].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[8].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[1].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '9') {
        if(tickTackToeBoard[7].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[6].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[5].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[2].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard[0].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else {return false;}
}

else if(fourthPageDummy.style.display === 'inline') {
    if(element.id === '11') {
        if(tickTackToeBoard2[1].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[2].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[3].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[6].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[8].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '12') {
        if(tickTackToeBoard2[0].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[2].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[7].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '13') {
        if(tickTackToeBoard2[1].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[0].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[5].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[8].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[6].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '14') {
        if(tickTackToeBoard2[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[5].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[0].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[6].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '15') {
        if(tickTackToeBoard2[3].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[5].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[1].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[7].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[0].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[8].style.backgroundColor === element.style.backgroundColor 
        || tickTackToeBoard2[2].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[6].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '16') {
        if(tickTackToeBoard2[3].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[4].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[8].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[2].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '17') {
        if(tickTackToeBoard2[7].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[8].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[3].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[0].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[2].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '18') {
        if(tickTackToeBoard2[6].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[8].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[1].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else if(element.id === '19') {
        if(tickTackToeBoard2[7].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[6].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[5].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[2].style.backgroundColor === element.style.backgroundColor
        || tickTackToeBoard2[4].style.backgroundColor === element.style.backgroundColor && tickTackToeBoard2[0].style.backgroundColor === element.style.backgroundColor) {
            return true;
        }
        else {
            return false;
        }
    }

    else {return false;}
}
}

function randomPlayByCpu() {
    let num = Math.floor(Math.random() * 9);
    if(secondPageDummy.style.display === 'inline') {
        if(tickTackToeBoard[num].style.backgroundColor != 'white') {
            return null;
        }

        else {
            return tickTackToeBoard[num];
        }
    }

    else if(fourthPageDummy.style.display === 'inline') {
         
            if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor 
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[0].style.backgroundColor === 'white'){
                        return tickTackToeBoard2[0];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[1].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[1];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[1].style.backgroundColor
                || tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[2].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[2];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor) {
                    if(tickTackToeBoard2[3].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[3];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor) {
                    if(tickTackToeBoard2[3].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[3];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
               
        

            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[1].style.backgroundColor
                || tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[2].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[2];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor) {
                    if(tickTackToeBoard2[3].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[3];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor) {
                    if(tickTackToeBoard2[3].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[3];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[1].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[1];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[1].style.backgroundColor
                || tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[2].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[2];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor) {
                    if(tickTackToeBoard2[3].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[3];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor) {
                    if(tickTackToeBoard2[3].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[3];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
               
        

            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[1].style.backgroundColor
                || tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[2].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[2];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor) {
                    if(tickTackToeBoard2[3].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[3];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor) {
                    if(tickTackToeBoard2[3].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[3];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[6].style.backgroundColor) {
                    if(tickTackToeBoard2[4].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[4];
                    }
                    else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor) {
                    if(tickTackToeBoard2[5].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[5];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
           else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[3].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[3].style.backgroundColor
                || tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor
                || tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor === tickTackToeBoard2[2].style.backgroundColor) {
                    if(tickTackToeBoard2[6].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[6];
                    }
                    else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

        
            else if(tickTackToeBoard2[1].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[1].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[8].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[8].style.backgroundColor) {
                    if(tickTackToeBoard2[7].style.backgroundColor === 'white') {
                    return tickTackToeBoard2[7];
                    }
                    else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                }
                
        

         
            else if(tickTackToeBoard2[0].style.backgroundColor != 'white' && tickTackToeBoard2[4].style.backgroundColor != 'white' && tickTackToeBoard2[0].style.backgroundColor === tickTackToeBoard2[4].style.backgroundColor
                || tickTackToeBoard2[2].style.backgroundColor != 'white' && tickTackToeBoard2[5].style.backgroundColor != 'white' && tickTackToeBoard2[2].style.backgroundColor === tickTackToeBoard2[5].style.backgroundColor
                || tickTackToeBoard2[6].style.backgroundColor != 'white' && tickTackToeBoard2[7].style.backgroundColor != 'white' && tickTackToeBoard2[6].style.backgroundColor === tickTackToeBoard2[7].style.backgroundColor) {
                    if(tickTackToeBoard2[8].style.backgroundColor === 'white'){
                    return tickTackToeBoard2[8];
                    }
                    else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                        return null;
                    }
            
                    else {
                        return tickTackToeBoard2[num];
                    }
            
                }
                //start over this comment
                else if(tickTackToeBoard2[num].style.backgroundColor != 'white') {
                    return null;
                }
        
                else {
                    return tickTackToeBoard2[num];
                }
        
        
        
    }
}

function talkToAnObject(pageName) {
    if(pageName === 'secondPage') {
        logBox.style.display = 'inline';
            logBox.firstElementChild.innerHTML = "If you want the key you have to play me in tic tac toe.";
            document.getElementById('continueButton').addEventListener('click', (event) => {
                logBox.style.display = 'none';
            })
        }

        else if(pageName === 'fourthPage') {
            logBox.style.display = 'inline';
                logBox.firstElementChild.innerHTML = "Let's get a rematch in.";
                document.getElementById('continueButton').addEventListener('click', (event) => {
                    logBox.style.display = 'none';
                })
            }
       


}

function moveCharacter(keyStroke) {
   let xPosition = parseInt(movingCharacter.style.left);
   let yPosition = parseInt(movingCharacter.style.top);
    if(keyStroke === 'ArrowRight') {
        if(movingCharacter.style.left != thirdPageBlocks[2].style.left) {
            movingCharacter.style.left = (xPosition + 100) + 'px';
            jumpOntoBlockAndChangeColor();
            checkIfFinished();
        }
    }

    else if(keyStroke === 'ArrowLeft') {
        if(movingCharacter.style.left != thirdPageBlocks[0].style.left) {
            movingCharacter.style.left = (xPosition - 100) + 'px';
            jumpOntoBlockAndChangeColor();
            checkIfFinished();
        }
        
    }

    else if(keyStroke === 'ArrowDown') {
        if(movingCharacter.style.top != thirdPageBlocks[9].style.top) {
            movingCharacter.style.top = (yPosition + 100) + 'px';
            jumpOntoBlockAndChangeColor();
            checkIfFinished();
        }
    }

    else if(keyStroke === 'ArrowUp') {
        if(movingCharacter.style.top != thirdPageBlocks[0].style.top) {
            movingCharacter.style.top = (yPosition - 100) + 'px';
            jumpOntoBlockAndChangeColor();
            checkIfFinished();
        }
        
    }
}

function startThirdPageGame() {
    window.addEventListener('keydown', (event) => {
        moveCharacter(event.key);
    })
}

function jumpOntoBlockAndChangeColor() {
    for(let i = 0; i < thirdPageBlocks.length; i++) {
        if(movingCharacter.style.top === thirdPageBlocks[i].style.top && movingCharacter.style.left === thirdPageBlocks[i].style.left) {
            if(thirdPageBlocks[i].style.backgroundColor === 'rgb(2, 158, 62)') {
                resetThirdPageBoard();
            } 
            
            else if(thirdPageBlocks[i].style.backgroundColor === 'rgb(219, 4, 201)') {
                putCharacterOnRandomBlock();
            }

            else{
                thirdPageBlocks[i].style.backgroundColor = 'rgb(2, 158, 62)';
            }
        }
    }
}

function resetThirdPageBoard() {
    thirdPageBlocks[0].style.backgroundColor = 'white';
    thirdPageBlocks[3].style.backgroundColor = 'white';
    thirdPageBlocks[5].style.backgroundColor = 'white';
    thirdPageBlocks[7].style.backgroundColor = 'white';
    thirdPageBlocks[8].style.backgroundColor = 'white';
    thirdPageBlocks[10].style.backgroundColor = 'white';
    thirdPageBlocks[11].style.backgroundColor = 'white';
    movingCharacter.style.left = '470px';
    movingCharacter.style.top = '200px';
}

function putCharacterOnRandomBlock() {
    let num = Math.floor(Math.random() * 12);
    movingCharacter.style.top = thirdPageBlocks[num].style.top;
    movingCharacter.style.left = thirdPageBlocks[num].style.left;
}

function checkIfFinished() {
    if(thirdPageBlocks[0].style.backgroundColor === 'rgb(2, 158, 62)' &&
    thirdPageBlocks[3].style.backgroundColor === 'rgb(2, 158, 62)' &&
    thirdPageBlocks[5].style.backgroundColor === 'rgb(2, 158, 62)' &&
    thirdPageBlocks[7].style.backgroundColor ==='rgb(2, 158, 62)' &&
    thirdPageBlocks[8].style.backgroundColor === 'rgb(2, 158, 62)' &&
    thirdPageBlocks[10].style.backgroundColor === 'rgb(2, 158, 62)' &&
    thirdPageBlocks[11].style.backgroundColor === 'rgb(2, 158, 62)') {
        logBox.style.display = 'inline';
            logBox.firstElementChild.innerHTML = "Congrats You won. Here's Your Key.";
            inventory.push('key3');
        thirdLink.firstElementChild.innerHTML = "Let's Go."
            document.getElementById('continueButton').addEventListener('click', (event) => {
                logBox.style.display = 'none';
            });
    }
}