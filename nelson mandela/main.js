document.querySelectorAll(".comment-section button").forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();

    const commentSection = this.parentElement;
    const textarea = commentSection.querySelector("textarea");

    if (textarea.value.trim().length === 0) {
      alert("Please add a comment before submitting.");
    } else {
      alert("Thanks for your comment!");
      textarea.value = "";
    }
  });
});
