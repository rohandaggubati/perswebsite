if (document.querySelector('.store--spec__about') != null) {
    document.querySelector('.store--spec__about').addEventListener('click', function() {
        document.querySelector('.fas.fa-plus.about').classList.toggle('hidden');
        document.querySelector('.fas.fa-minus.about').classList.toggle('hidden');
    });
}

if (document.querySelector('.store--spec__info') != null) {
    document.querySelector('.store--spec__info').addEventListener('click', function() {
        document.querySelector('.fas.fa-plus.info').classList.toggle('hidden');
        document.querySelector('.fas.fa-minus.info').classList.toggle('hidden');
    });
}

if (document.querySelector('.store--spec__order') != null) {
    document.querySelector('.store--spec__order').addEventListener('click', function() {
        document.querySelector('.fas.fa-plus.order').classList.toggle('hidden');
        document.querySelector('.fas.fa-minus.order').classList.toggle('hidden');
    });
}

function showAbout() {
    document.querySelector('.showAbout').classList.toggle('hidden');
}

function showInfo() {
    document.querySelector('.showInfo').classList.toggle('hidden');
}

function showOrder() {
    document.querySelector('.showOrder').classList.toggle('hidden');
}