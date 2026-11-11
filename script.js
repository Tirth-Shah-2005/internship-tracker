let form = document.querySelector("form")

let applications = []

form.addEventListener("submit", function(event){
    event.preventDefault()

    let companyID = document.getElementById("company").value;
    let jobRole = document.getElementById("jobRole").value;
    let applyDate = document.getElementById("applyDate").value;
    let applyStatus = document.getElementById("status").value;
    let applyDesc = document.getElementById("text").value;

    let application = {
        company:companyID,
        role:jobRole,
        date:applyDate,
        status:applyStatus,
        desc:applyDesc
    }

    applications.push(application)
    renderApplications()

    console.log(applications);
})

// Render records dynamically

let applicationList = document.getElementById("thirdSec")

function renderApplications(){

    applicationList.querySelectorAll(".appCard").forEach(card => card.remove())

    applications.forEach(function(application){
        let appCard = document.createElement("div")
        appCard.classList.add("appCard")

        let companyHead = document.createElement("h3")
        companyHead.textContent = application.company

        let roleText = document.createElement("p")
        roleText.textContent = application.role

        let dateText = document.createElement("p")
        dateText.textContent = application.date

        let statusBadge = document.createElement("span")
        statusBadge.textContent = application.status
        statusBadge.classList.add(application.status)

        appCard.appendChild(companyHead)
        appCard.appendChild(roleText)
        appCard.appendChild(dateText)
        appCard.appendChild(statusBadge)
    
        applicationList.appendChild(appCard)
    })
}