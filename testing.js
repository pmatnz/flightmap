import { planeType } from './testData.js'
const testingBtn = document.getElementById("radio-btn")

testingBtn.addEventListener("change", highlightText)



function highlightText (e){ // Highlights the text when changed
    document.getElementById(e.target.id).parentElement.classList.add("highlight") // uses CSS class .hightlight
}

function getAircraftData (aircraftData) {
    const planeData = []

    for (let planes of aircraftData) {
        planeData.push({
            manufacturer: planes.manufacturer,
            planeType: planes.planeType,
        })
    } return planeData
}

function addRadioData (aircraftData) {
    let radioButtons = "";
    const planeData = getAircraftData(aircraftData)

    for (let plane of planeData) {
        radioButtons += `
        <div class="radio">
           <label for="${plane.manufacturer} ${plane.planeType}">${plane.manufacturer} ${plane.planeType}</label>
            <input 
                type="radio" 
                id="${plane.manufacturer} ${plane.planeType}" 
                value="${plane.manufacturer} ${plane.planeType}" 
                name="planeButtons" />
        </div>`
    } testingBtn.innerHTML = radioButtons;


}
addRadioData(planeType)




