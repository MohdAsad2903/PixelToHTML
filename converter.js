// Handle file upload (simulated content for now)
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      // Example HTML and CSS content (you would generate this dynamically)
    const generatedHtml = `
        &lt;div class="container"&gt;
        &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
        &lt;p&gt;This is a dynamically generated HTML layout.&lt;/p&gt;
        &lt;/div&gt;
    `;
    const generatedCss = `
        .container {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
        }
        h1 {
        color: blue;
        }
        p {
        font-size: 16px;
        }
    `;

      // Display the generated HTML and CSS
    document.getElementById('htmlCode').textContent = generatedHtml;
    document.getElementById('cssCode').textContent = generatedCss;
    }
});

  // Function to copy code to clipboard
function copyToClipboard(elementId) {
    const codeElement = document.getElementById(elementId);
    const textToCopy = codeElement.textContent;

    // Create a temporary textarea to hold the code and copy to clipboard
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Select the content and copy
    tempTextArea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Alert user that the content has been copied
    alert('Code copied to clipboard!');
}