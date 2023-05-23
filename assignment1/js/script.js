const recordPerPage = 10;

/**Show Total */
var _totalCount = users.length;

totalCount = document.querySelector(`#totalCount`);
totalCount.innerHTML = `Total: ${_totalCount}`;

//Set Pagination bar
const paginationItem = (pageNo) => `<li>
                                     <a href="#" onclick="event.preventDefault();ShowPage(${pageNo})">${pageNo}</a>
                                    </li>`;
const pagginationBar = document.querySelector(".pagination")

var totalPages = 0;
totalPages = _totalCount / recordPerPage;
console.log(totalPages);
for(var j=0;j<totalPages;j++){
    pagginationBar.insertAdjacentHTML('beforeend', paginationItem((j+1)));
}


//Fire on page load
window.onload = function() {
    ShowPage(1);
};


/*************************************************************************************************************************************** */
/**Show Contact Info - Pagination */
function ShowPage(pageNo){
    /**Show Data */
    const contactData = (userItem) => `<li class="contact-item cf">
                                        <div class="contact-details">
                                            <img class="avatar" src="${userItem.image}">
                                            <h3>${userItem.firstname} ${userItem.lastname}</h3>
                                            <span class="email">${userItem.firstname}.${userItem.lastname}@example.com</span>
                                        </div>
                                        <div class="joined-details">
                                            <span class="date">Joined ${userItem.joined}</span>
                                        </div>
                                        </li>`;

                                        
    const contactList = document.querySelector(`.contact-list`)
    var userItem = {firstname:"", lastname:"", image:"", joined:""}

    var i = 0;    
    var recordCount = 0;
    var indexOfSpace = 0;

    //Clear original list
    contactList.innerHTML = "";

    for (i=pageNo*recordPerPage - recordPerPage;i<users.length;i++){
        console.log(i);
        console.log(recordCount);
        if(recordCount < recordPerPage){
            indexOfSpace = users[i].name.indexOf(" ");

            userItem.firstname = users[i].name.substring(0, indexOfSpace);
            userItem.lastname = users[i].name.substring(indexOfSpace+1);
            userItem.image = users[i].image;
            userItem.joined = users[i].joined;

            contactList.insertAdjacentHTML(`beforeend`, contactData(userItem));

            recordCount +=1;
        }
    }
}