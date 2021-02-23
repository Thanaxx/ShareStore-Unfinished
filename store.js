let mainpage = document.querySelector(".mainpage");

const workBtn = document.querySelector(".works");
let workPage = document.querySelector(".worksPage");

const create = document.querySelector(".create");
const createPage = document.querySelector(".createPage");

const draftsBtn = document.querySelector(".drafts");
const draftsPage = document.querySelector(".draftsContainer");

const writingPage = document.querySelector(".write");
const blogBtn = document.querySelector(".blog");

const poemBtn = document.querySelector(".poem");
const storyBtn = document.querySelector(".story");
const articleBtn = document.querySelector(".article");

const exitWritingPage = document.querySelector(".backB");

const sbar = document.querySelector(".fixedSideBar");

// draft


// login.addEventListener("click", () =>{
//     mainpage.style.display = "block";
//     workPage.style.display = "block";
//     homepage.style.display = "none";
// });

workBtn.addEventListener('click', () =>{
    createPage.style.display = "none";
    mainpage.style.display = "block";
    workPage.style.display = "block";
    draftsPage.style.display = "none";
});

create.addEventListener('click', () =>{
    createPage.style.display = "block";
    workPage.style.display = "none";
    mainpage.style.display = "block";
    draftsPage.style.display = "none";
});

draftsBtn.addEventListener('click', () =>{
    createPage.style.display = "none";
    workPage.style.display = "none";
    mainpage.style.display = "block";
    draftsPage.style.display = "block";
});

/**BLOG PART */
blogBtn.addEventListener('click', () =>{
    mainpage.style.display = "none";
    writingPage.style.display = "block";
});

/**POEM PART */
poemBtn.addEventListener('click', () =>{
    mainpage.style.display = "none";
    writingPage.style.display = "block";
});

/**STORY PART */
storyBtn.addEventListener('click', () =>{
    mainpage.style.display = "none";
    writingPage.style.display = "block";
});

/**ARTICLE PART */
articleBtn.addEventListener('click', () =>{
    mainpage.style.display = "none";
    writingPage.style.display = "block";
});



/*MODAL OPTION INSIDE THE WRITING PAGE*/
const seeOptions = document.querySelector(".options");
const menuModal = document.querySelector(".menuModal");
const cancel = document.querySelector(".cancelOpt");

seeOptions.addEventListener("click", () =>{
    menuModal.style.display = "block";
});

cancel.addEventListener("click", () =>{
    menuModal.style.display = "none";
    writingPage.style.display = "none";
    mainpage.style.display = "block";
});


window.onclick = function(event){
    if (event.target == menuModal){
        menuModal.style.display = "none"; /**MENU INSIDE THE WRITING PAGE */
    }else if(event.target == settingModal){
        settingModal.style.display = "none"; /*SETTING MODAL */
    }
}


// USING LOCAL STORAGE TO STORE THE DATA
/*DISPLAYING THE TEXT IN THE WORKPAGE AREA FROM TEXTAREA AND TITLE INPUT*/
var worki = [];
var works = [];
let titleInput = document.querySelector(".title");
let bodyInput = document.querySelector(".bodyContainer");

window.onload = function(){
    if(JSON.parse(localStorage.getItem("storages")) !=null){
        works = JSON.parse(localStorage.getItem("storages"));
        worki = JSON.parse(localStorage.getItem("storagess"));
        console.log("work:" + works);
        display();
        Draft();
    }
};

// SAVE
function saveWork(){
    if(/*document.querySelector('.title').value.trim() != "" && */document.querySelector('.bodyContainer').value.trim() != ""){
        works.push(/*document.querySelector(".title").value.trim() && */document.querySelector(".bodyContainer").value.trim());
        if(localStorage.getItem("storages") == null){
            localStorage.setItem("storages", JSON.stringify(works));
        }else{
            localStorage.setItem("storages", JSON.stringify(works));
        }
        console.log(localStorage.getItem("storages"));
    }

    //input text must be filled [title and body]
    if(/*titleInput.value === "" &&*/ bodyInput.value === ""){
        alert("You must write something!");
    }

    display();

    //clear input value after saving
    // titleInput.value = "";
    bodyInput.value = "";
    titleInput.value = "";

    workPage.style.display = "block";
    writingPage.style.display = "none";
    menuModal.style.display = "none";
    mainpage.style.display = "block";
    createPage.style.display = "none";
    draftsPage.style.display = "none";
}



function display(){
    document.querySelector(".book").innerHTML = "";
    for(var i=0; i<works.length; i++)
    document.querySelector(".book").innerHTML +=
    "<div class='wrk'>" + 
        '<h1>#Work</h1>' +
        '<button class="fle" onclick="file()"><i class="fa fa-folder-open"></i></button>' +
        '<button class="del" onclick="del()"><i class="fas fa-trash"><i></button>'
    "</div>";
}



function file(index){
    document.querySelector(".book").innerHTML = "";
    for(var i=0; i<works.length; i++)
    document.querySelector(".book").innerHTML +=
    "<div class='btnNav'>" +
    '<button class="backB" onclick="exitProject()">Back</button>' +
    "</div>" +

    "<div class='sulat'>" +
    works[i]; +
    "</div>";
    sbar.style.display = "none";
    workPage.style.paddingLeft = "0";
}

function exitProject(){
    workPage.style.display = "block";
    sbar.style.display = "block";
    display();
    workPage.style.paddingLeft = "350px";
}

function del(index){
    works.splice(index, 1);
    if(localStorage.getItem("storages")  == null){
        localStorage.setItem("storages", JSON.stringify(works));
    }else{
        localStorage.setItem("storages", JSON.stringify(works));
    }
    console.log();
    display();
}



// DRAFTS

function saveDraft(){
    if(/*document.querySelector('.title').value.trim() != "" && */document.querySelector('.bodyContainer').value.trim() != ""){
        worki.push(/*document.querySelector(".title").value.trim(),*/document.querySelector(".bodyContainer").value.trim());
        if(localStorage.getItem("storagess") == null){
            localStorage.setItem("storagess", JSON.stringify(worki));
        }else{
            localStorage.setItem("storagess", JSON.stringify(worki));
        }
        console.log(localStorage.getItem("storagess"));
    }

    //input text must be filled [title and body]
    if(/**titleInput.value === "" && */ bodyInput.value === ""){
        alert("You must write something!");
    }

    Draft();

    //clear input value after saving
    // titleInput.value = "";
    bodyInput.value = "";

    workPage.style.display = "none";
    writingPage.style.display = "none";
    menuModal.style.display = "none";
    mainpage.style.display = "block";
    createPage.style.display = "none";
    draftsPage.style.display = "block";

}

//draftsdisplay
function Draft(){
    document.querySelector(".drafted").innerHTML = "";
    for(var i=0; i<worki.length; i++)
    document.querySelector(".drafted").innerHTML +=
    "<div class='wrk'>" + 
        '<h1>#Drafts</h1>' +
        '<button class="edit" ><i class="fas fa-pencil-alt"></i></button>' +
        '<button class="fle" onclick="filedraft()"><i class="fa fa-folder-open"></i></button>' +
        '<button class="del" onclick="deldraft()"><i class="fas fa-trash"><i></button>'
    "</div>";
}

function filedraft(index){
    document.querySelector(".drafted").innerHTML = "";
    for(var i=0; i<worki.length; i++)
    document.querySelector(".drafted").innerHTML +=
    "<div class='btnNav'>" +
    '<button class="backB" onclick="exitdraft()">Back</button>' +
    "</div>" +

    "<div class='sulat'>" +
    worki[i]; +
    "</div>";
    sbar.style.display = "none";
    draftsPage.style.paddingLeft = "0";
}

function exitdraft(){
    draftsPage.style.display = "block";
    sbar.style.display = "block";
    draftsPage.style.paddingLeft = "350px";
    Draft();
}

function deldraft(index){
    worki.splice(index, 1);
    if(localStorage.getItem("storagess")  == null){
        localStorage.setItem("storagess", JSON.stringify(worki));
    }else{
        localStorage.setItem("storagess", JSON.stringify(worki));
    }
    console.log();
    Draft();
}


// MENU BAR - RESPONSIVE
const openMenu = document.querySelector(".shareOpen");
const closeMenu = document.querySelector(".shareClose");
const menuOptions = document.querySelector(".menuOptions");

openMenu.addEventListener('click', () =>{
    menuOptions.style.width = "75%";
});

closeMenu.addEventListener('click', () =>{
    menuOptions.style.width = "0%";
});


// POP UP SETTING OPTIONS
const openSetting = document.querySelector(".setIconA");
const settingModal = document.querySelector(".settingWrapper");

openSetting.addEventListener('click', () =>{
    settingModal.style.display = 'block';
});

// DARK MODE
const darktheme = document.getElementById("darkmode");

darktheme.addEventListener('change', () =>{
    document.body.classList.toggle('dark');
});