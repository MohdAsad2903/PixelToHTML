const drop = document.querySelector(".drop");
const input = document.querySelector(".file-input");
const text = document.querySelector(".text");
const progress = document.querySelector(".progress");
const imagePreview = document.getElementById("image-preview");

let files = [];

// Handle input change (file selection via button)
input.addEventListener("change", () => {
  files = input.files;
  handleFileUpload(files);
});

// Handle drag and drop
drop.addEventListener("dragover", (e) => {
  e.preventDefault();
  text.innerHTML = 'Release your mouse to drop';
  drop.classList.add("active");
});

drop.addEventListener("dragleave", (e) => {
  e.preventDefault();
  text.innerHTML = "Drag and drop your layout here.";
  drop.classList.remove("active");
});

drop.addEventListener("drop", (e) => {
  e.preventDefault();
  files = e.dataTransfer.files;
  handleFileUpload(files);
  drop.classList.remove("active");
  text.innerHTML = "Drag and drop your layout here.";
});

// Function to handle file upload (image preview and progress)
function handleFileUpload(files) {
  // Only allow image files
  const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
  const file = files[0];

  if (validImageTypes.includes(file.type)) {
    // Hide the drop area and start showing progress
    drop.style.display = "none";
    upload(file);
  } else {
    alert("Please upload a valid image file.");
  }
}

// Simulated upload logic with image preview
function upload(file) {
  let intervalCount = 0.25;
  progress.style.display = 'block';
  progress.style.width = `${20 * intervalCount}%`;

  const interval = setInterval(() => {
    intervalCount += 0.25;
    progress.style.width = `${20 * intervalCount}%`;

    if (intervalCount >= 5) {
      clearInterval(interval);
      progress.style.display = 'none';
      displayImage(file); // Show the image preview
    }
  }, 100);
}

// Function to display image preview
function displayImage(file) {
  const reader = new FileReader();

  reader.onload = function (e) {
    imagePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" style="max-width: 100%; height: auto; border-radius: 10px; margin-top: 20px;" />`;
  };

  reader.readAsDataURL(file);
}






















// // Handle file upload (simulated content for now)
// document.getElementById('fileInput').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     if (file) {
//       // Example HTML and CSS content (you would generate this dynamically)
//     const generatedHtml = `
//         &lt;div class="container"&gt;
//         &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
//         &lt;p&gt;This is a dynamically generated HTML layout.&lt;/p&gt;
//         &lt;/div&gt;
//     `;
//     const generatedCss = `
//         .container {
//         max-width: 100%;
//         margin: 0 auto;
//         padding: 20px;
//         }
//         h1 {
//         color: blue;
//         }
//         p {
//         font-size: 16px;
//         }
//     `;

//       // Display the generated HTML and CSS
//     document.getElementById('htmlCode').textContent = generatedHtml;
//     document.getElementById('cssCode').textContent = generatedCss;
//     }
// });

//   // Function to copy code to clipboard
// function copyToClipboard(elementId) {
//     const codeElement = document.getElementById(elementId);
//     const textToCopy = codeElement.textContent;

//     // Create a temporary textarea to hold the code and copy to clipboard
//     const tempTextArea = document.createElement('textarea');
//     tempTextArea.value = textToCopy;
//     document.body.appendChild(tempTextArea);

//     // Select the content and copy
//     tempTextArea.select();
//     document.execCommand('copy');

//     // Remove the temporary textarea
//     document.body.removeChild(tempTextArea);

//     // Alert user that the content has been copied
//     alert('Code copied to clipboard!');
// }