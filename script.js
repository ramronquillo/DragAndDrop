const dropZoneSet = Array.from(document.querySelectorAll('.droppable'));

dropZoneSet.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('hoverOver');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('hoverOver');
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedItem = document.querySelector('.beingDragged');

        if (draggedItem) {
            dropzone.appendChild(draggedItem.cloneNode(true));
            // Remove the 'beingDragged' class from the original item
            draggedItem.classList.remove('beingDragged');
        }
    });
});

const dragItems = document.querySelectorAll('.box');

dragItems.forEach(dragItem => {
    dragItem.addEventListener('dragstart', () => {
        dragItem.classList.add('beingDragged');
    });

    dragItem.addEventListener('dragend', () => {
        dragItem.classList.remove('beingDragged');
    });
});