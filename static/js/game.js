
function init() {

    // flag uncovered fields
    let fields = document.getElementsByClassName("field");
    const numberOfMines = document.querySelectorAll(".mine").length;
    let numberOfFlags = document.querySelectorAll(".field.flag.mine").length;
    let openFieds = document.querySelectorAll(".openField").length;


    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener('contextmenu', flag);
        fields[i].addEventListener('click', opening)
    }

    function flag(contextmenu) {
        contextmenu.preventDefault();
        this.classList.toggle("flag");
        let mineCounter = document.getElementById("mine-left-counter");
        let numberOfFlags = document.querySelectorAll(".flag").length;
        let newValue = (numberOfMines - numberOfFlags).toString();
        mineCounter.removeAttribute("disabled");
        document.getElementById("mine-left-counter").setAttribute("value", newValue);
    }

    // de identificat vecinii si de afisat minele din apropiere
    function opening() {
        if (!this.classList.contains('flag')) {
            let neighboursList = [];
            let mineNo = 0;
            if (this.classList.contains('mine')) {
                lose()
            }
            //this. coordinates of the event.target (number)
            this.setAttribute("class", 'openField');
            let x = parseInt(this.getAttribute('data-row'));
            let y = parseInt(this.getAttribute('data-col'));
            for (let i = x - 1; i <= x + 1; i++) {
                for (let j = y - 1; j <= y + 1; j++) {
                    if (document.querySelector("[data-row='" + i + "'][data-col='" + j + "']") != null) {
                        neighboursList.push(document.querySelector("[data-row='" + i + "'][data-col='" + j + "']"))
                        // console.log(neighboursList.indexOf(this)+ " this intex")
                    }
                }
            }
            let indexThis = neighboursList.indexOf(this)
            neighboursList.splice(indexThis,1)
            for (let neighbour of neighboursList) {
                if (neighbour.classList.contains("mine")) {
                    mineNo++;
                }
            }
            this.innerHTML = mineNo;
            if (mineNo === 0) {
                this.innerHTML = "";
                autoOpen(neighboursList);
            }}
    if (fields.length === numberOfMines) {
        alert('win func');}}

    function lose() {
        let allMines = document.getElementsByClassName('mine');
        for (let i = 0; i < allMines.length; i++) {
            allMines[i].setAttribute("class", "mine");
        }
        alert("game over");
        location.reload()}


    // function autoOpen(neighboursList) {
    //     // this.setAttribute("class", 'openField');
    //     // console.log((neighboursList.length + " length"))
    //     if (isUnopen(neighboursList)) {
    //
    //             autoOpen(neighboursList)
    //             // count++;
    //         }
    //
    //     for (let neighbour in neighboursList) {
    //         if ('neighbour.innerHTML = ""' && count !== 0) {
    //             neighbour.setAttribute("class", 'openField');
    //         } else {console.log("toate deschise")}
    //     }
    // }
    // function isUnopen(arr) {
    //     for (let i = 0; i<arr.length;i++){
    //         if (arr[i].classList.contains('field'))
    //             return true
    //     }
    // }
}







        //     let mines = 0
        //     for (let i = 0; i < neighboursList.length; i++) {
        //         if (neighboursList[i].classList.contains('mine')) {
        //             mines++
        //             alert('yep');
        //         } else {alert('nope')}
        //     }
        //     if (mines !== 0) {
        //         this.style.textAlign="center";
        //         this.innerHTML = 'pla';
        //         // break;
        //     }
    

        // function opening(e){
        //         let neighbours=[];
        //         let mineNumber=0;
        //         console.log(e);
        //         cell=e.target;
        //         if (cell.classList.contains('mine')){
        //             alert('GAME OVER')
        //         }
        //         let x =parseInt(cell.getAttribute('data-row'));
        //         let y =parseInt(cell.getAttribute('data-col'));
        //         for (let i = x - 1; i <= x + 1; i++) {
        //             for (let j = y - 1; j <= y + 1; j++){
        //                 if (document.querySelector("[data-row='"+i+"'][data-col='"+j+"']")!=null){
        //                     neighbours.push(document.querySelector("[data-row='"+i+"'][data-col='"+j+"']"))
        //                 }
        //             }
        //         }
        //         for (let i = 0, l = neighbours.length; i < l; i++) {
        //             let obj = neighbours[i];
        //             console.log(obj);
        //             if (obj.classList.contains('mine')){
        //                 mineNumber++;
        //             }
        //         }
        //         console.log(neighbours);
        //         console.log(mineNumber);
        //         switch(mineNumber) {
        //           case 0:
        //                 cell.classList.add('open');
        //
        //                 break;
        //           case 1:
        //               cell.style.textAlign="center";
        //               cell.innerHTML = '1';
        //               break;
        //           case 2:
        //               cell.style.textAlign="center";
        //               cell.innerHTML = '2';
        //               break;
        //           case 3:
        //               cell.style.textAlign="center";
        //               cell.innerHTML = '3';
        //               break;
        //           case 4:
        //               cell.style.textAlign="center";
        //               cell.innerHTML = '4';
        //               break;
        //           case 5:
        //               cell.style.textAlign="center";
        //               cell.innerHTML = '5';
        //               break;
        //           case 6:
        //               cell.style.textAlign="center";
        //               cell.innerHTML = '6';
        //               break;
        //           case 7:
        //               cell.style.textAlign="center";
        //               cell.innerHTML = '7';
        //               break;
        //           case 8:
        //               cell.style.textAlign="center";
        //               cell.innerHTML = '8';
        //               break;
        


init();

// let fields = document.getElementsByClassName("field")
// let fieldsArr = Array.from(fields)
// fields[0].addEventListener('click',()=>(console.log("alert")));
// fields[0].addEventListener('contextmenu',()=>(console.log("alert")));