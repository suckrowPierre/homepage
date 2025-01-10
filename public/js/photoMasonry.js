function loadMacy() {

    const grid = document.getElementById('photo-grid');
    if (!grid) {
        console.error("Element with ID 'photo-grid' not found.");
        return;
    }
    const numberOfColumns = 4;

    const macyInstance = Macy({
        container: '#photo-grid',
        trueOrder: false,
        waitForImages: false, // Ensure Macy waits for images to load
        margin: {
            x: "4%",
            y: 0,
        },
        breakAt: {
            768: numberOfColumns - 2,
            1024: numberOfColumns - 1,
        },
        columns: numberOfColumns,
    });

    macyInstance.runOnImageLoad(function () {
        macyInstance.recalculate(true);
    }, true);

    function recalculateGrid() {
        macyInstance.recalculate(true);
    }

    function decrementColumns() {
        if (numberOfColumns > 1) {
            macyInstance.options.columns = numberOfColumns - 1;
            macyInstance.options.breakAt = {
                768: numberOfColumns - 3,
                1024: numberOfColumns - 2,
            }
            recalculateGrid();
        }
    }

    function resetColumns() {
        macyInstance.options.columns = numberOfColumns;
        macyInstance.options.breakAt = {
            768: numberOfColumns - 2,
            1024: numberOfColumns - 1,
        }
        recalculateGrid();
    }

    window.recalculateGrid = recalculateGrid;
    window.decrementColumns = decrementColumns;
    window.resetColumns = resetColumns;
}



window.addEventListener('load', () => {
    loadMacy();
    window.loadMacy = loadMacy;
});
