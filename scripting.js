document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const urlInput = document.querySelector('#urlInput');
    const bookmark = document.querySelector('#bookmark'); // matches your HTML

    function bookmarklists(inputUrl) {
        const bookmarkItem = document.createElement("div");
        bookmarkItem.classList.add("bookmark");
        bookmarkItem.innerHTML = `<a href="${inputUrl}" target="_blank">${inputUrl}</a>`;
        bookmark.appendChild(bookmarkItem);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent form from reloading the page
        const input = urlInput.value.trim();
        if (input) {
            bookmarklists(input);
            urlInput.value = ''; // clear input after adding
        }
    });

    form.addEventListener('reset', () => {
        bookmark.innerHTML = ''; // clears all bookmarks
    });
});