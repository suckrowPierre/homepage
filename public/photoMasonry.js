function loadMacy() {
    console.log("Loading Macy.js grid...");

    const grid = document.getElementById('photo-grid');
    if (!grid) {
        console.error("Element with ID 'photo-grid' not found.");
        return;
    }

    const macyInstance = Macy({
        container: '#photo-grid',
        trueOrder: false,
        waitForImages: false, // Ensure Macy waits for images to load
        margin: {
            x: "4%",
            y: 0,
        },
        columns: 4,
    });

    macyInstance.runOnImageLoad(function () {
        macyInstance.recalculate(true);
    }, true);
}

window.addEventListener('load', () => {
    loadMacy();
    window.loadMacy = loadMacy;
});
