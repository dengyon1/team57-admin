/* Query selectors */
const viewEventButton = document.querySelector("#studyGroupsContainer");
/* Add listeners */
viewEventButton.addEventListener("click", displayEvents);

/* Event viewing checking function */
function displayEvents(e) {
	e.preventDefault();

	if (e.target.className == "studyGroupEventButton") {
		let eventHolderName = e.target.parentElement.parentElement.children[1].textContent;

		webpageName = "club_page.html"; // Get webpage name from database based on event holder name

		window.location.href = webpageName;
	}

	if (e.target.className == "studyGroupGrpPgButton") {
		let eventHolderName = e.target.parentElement.parentElement.children[1].textContent;

		webpageName = "user_view_club_page.html"; // Get webpage name from database based on event holder name

		window.location.href = webpageName;
	}

}
