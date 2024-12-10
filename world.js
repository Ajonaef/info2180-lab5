document.addEventListener("DOMContentLoaded", () => {
    const lookupButton = document.getElementById("lookup");
    const resultDiv = document.getElementById("result");

    lookupButton.addEventListener("click", () => {
        const country = document.getElementById("country").value.trim();
        const url = `/info2180-lab5/world.php?country=${encodeURIComponent(country)}`;

        console.log("Sending request to:", url);

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log("Request completed with status:", xhr.status);
                if (xhr.status === 200) {
                    resultDiv.innerHTML = xhr.responseText;
                } else {
                    resultDiv.innerHTML = `<p>Error: Could not retrieve data (${xhr.status})</p>`;
                }
            }
        };

        xhr.open("GET", url, true);
        xhr.send();
    });
});
