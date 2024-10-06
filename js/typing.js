const typedTextSpan = document.getElementsByClassName("typing");
var speed = 40;

function typeWriter(txt) {
  var size = txt.textContent.length;
  var i = 0;
  var copy = txt.textContent; // Use textContent to get plain text without HTML tags
  txt.innerHTML = ""; // Clear the content to start typing effect
  // console.log("size", size);
  // console.log("copy", copy);
  function typeNextChar() {
    if (i < size) {
      txt.innerHTML += copy.charAt(i); // Add next character
      // console.log(i, copy.charAt(i));
      i++;
      setTimeout(typeNextChar, speed); // Call the function again for the next character
    }
  }

  typeNextChar(); // Start typing
}

// Iterate over all the elements with class "typing"
for (let i = 0; i < typedTextSpan.length; i++) {
  typeWriter(typedTextSpan[i]); // Call typeWriter for each element
}
