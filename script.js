// Chat Popup Toggle
function toggleChat() {
    const chatPopup = document.getElementById("chatPopup");
    chatPopup.style.display = chatPopup.style.display === "block" ? "none" : "block";
}

// Send Message Function
function sendMessage(event) {
    if (event.key === "Enter") {
        const userInput = document.getElementById("userInput").value;
        if (userInput.trim() !== "") {
            const chatbox = document.getElementById("chatbox");
            const userMessage = document.createElement("p");
            userMessage.className = "user-message";
            userMessage.textContent = userInput;
            chatbox.appendChild(userMessage);
            document.getElementById("userInput").value = "";
        }
    }
}

// Lesson Details Modal
const lessonContent = {
    "lesson1": { title: "The Rich Don’t Work for Money", details: "Focus on building income-generating assets..." },
    "lesson2": { title: "Financial Literacy is Essential", details: "Understanding assets vs liabilities is key..." },
    "lesson3": { title: "Work to Learn, Not to Earn", details: "Build diverse skills that open wealth opportunities..." },
    "lesson4": { title: "Mind Your Own Business", details: "Build personal wealth rather than just a career..." }
};

function showLessonDetails(lessonId) {
    const modal = document.getElementById("lessonModal");
    document.getElementById("lessonTitle").innerText = lessonContent[lessonId].title;
    document.getElementById("lessonDetails").innerText = lessonContent[lessonId].details;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("lessonModal").style.display = "none";
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});












// Get the modal
const modals = document.querySelectorAll('.modal');
const modalBtns = document.querySelectorAll('.modal-btn');
const closeBtns = document.querySelectorAll('.close');

// Show modal when a key lesson is clicked
modalBtns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        modals[index].style.display = "block";
    });
});

// Close the modal when the close button is clicked
closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        modals[index].style.display = "none";
    });
});

// Close the modal when clicking outside of it
window.addEventListener('click', function (event) {
    modals.forEach((modal) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});