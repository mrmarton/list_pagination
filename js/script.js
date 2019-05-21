/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Imre Marton Chrome FireFox Safari 
******************************************/



//___________________creating global variables___________________
const maxShowStudent = 10;                                                //maximum 10 student shown per page
const studentLiItem = document.getElementsByClassName("student-item cf"); //li class="student-item cf" uses all data in this class
let pages = 1;                                                        //first page will be
let studentsOnPages = Math.ceil(studentLiItem.length / 10);               //uses the match ceil and uses "student-item cf"
const aTag = document.getElementsByTagName("a");                          //uses the a tags




//___________________loop and sets how many studentLiItes will be shown___________________
  const showPage = (studentLiItem, pages) => {
    for (let i = 0; i < studentLiItem.length; i++) {         //loops through the all lenght
        if (i >= (pages * maxShowStudent) - maxShowStudent && i <= (pages * maxShowStudent)-1) {
            studentLiItem[i].style.display = "block";  
   } else {
            studentLiItem[i].style.display = "none";  
        };
      };
  };
  showPage(studentLiItem, pages)                        //the function will be running




//___________________append page links==builds up the functionality___________________
const appendPageLinks = () => {
  let studentsOnPages = Math.ceil(studentLiItem.length / 10);     //calculate how many pages will be shown
  const div = document.createElement("div");                      //builds up the div
  const ul = document.createElement("ul");                        //builds up the ul 
  div.className = "pagination"; 
  div.appendChild(ul);                                            //subjoin the ul to the div



//selector for the class pagination
document.querySelector("div.page").appendChild(div);

    for (let i = 0; i < studentsOnPages; i++) {           //for loop for the pages
        const pages = i + 1;                              //page 1
        const li = document.createElement("li");
        ul.appendChild(li);                               //subjoin the li to the ul
        li.innerHTML = `<a href="#" class="">${pages}</a>`;  //innerHTML helps to build up the page 
    };
    
    for (let i = 0; i < aTag.length; i++) { 
        aTag[i].addEventListener("click", (event) => {  //evenlistener on the aTag 
            for(let i = 0; i < aTag.length; i++) {   //for loop on the aTag 
                aTag[i].className = "";              //active==> not active button
            };
            showPage(studentLiItem, i + 1);          //showPage function will be running
            event.target.className = "active"; 
        });
    };
};
appendPageLinks();                  //the function will be running