// ZDJECIA KARUZELA STRONA GLOWNA
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}




//      AKTUALNOSCI ROZWIJANIE
function PokazUkryjTekst(polecenie,id) {
    var PrzyciskPokaz = document.getElementById('PrzyciskPokaz_' + id);
    var PrzyciskUkryj = document.getElementById('PrzyciskUkryj_' + id);
    var TrescSkrocona = document.getElementById('TrescSkrocona_' + id);
    var TrescPelna = document.getElementById('TrescPelna_' + id);
    if (polecenie == 'Czytaj wiecej') {
        PrzyciskPokaz.style.display = 'none';
        PrzyciskUkryj.style.display = 'block';
        TrescSkrocona.style.display = 'none';
        TrescPelna.style.display = 'block';
    }
    else if (polecenie == 'Ukryj') {
        PrzyciskPokaz.style.display = 'block';
        PrzyciskUkryj.style.display = 'none';
        TrescSkrocona.style.display = 'block';
        TrescPelna.style.display = 'none';
    }
}



//      PRZEWIJANIE STRZALKAMIA
document.addEventListener('DOMContentLoaded', function() {
    let currentNews = 1;

    for (let i = 2; i <= 3; i++) {
        document.getElementById(`TrescSkrocona_${i}`).style.display = 'none';
        document.getElementById(`TrescPelna_${i}`).style.display = 'none';
    }

    function handleArrowClick(direction) {
        if (direction === 'next') {
            if (currentNews < 3) {
                currentNews++;
            }
        } else if (direction === 'prev') {
            if (currentNews > 1) {
                currentNews--;
            }
        }

        for (let i = 1; i <= 3; i++) {
            const skroconaElement = document.getElementById(`TrescSkrocona_${i}`);
            const pelnaElement = document.getElementById(`TrescPelna_${i}`);

            if (i !== currentNews) {
                skroconaElement.style.display = 'none';
                pelnaElement.style.display = 'none';
            } else {
                skroconaElement.style.display = 'block';
                pelnaElement.style.display = 'block';
            }
        }
    }

    function PokazUkryjTekst(polecenie, id) {
        var PrzyciskPokaz = document.getElementById(`PrzyciskPokaz_${id}`);
        var PrzyciskUkryj = document.getElementById(`PrzyciskUkryj_${id}`);
        var TrescSkrocona = document.getElementById(`TrescSkrocona_${id}`);
        var TrescPelna = document.getElementById(`TrescPelna_${id}`);

        if (polecenie === 'Czytaj wiecej') {
            PrzyciskPokaz.style.display = 'block';
            PrzyciskUkryj.style.display = 'none';
            TrescSkrocona.style.display = 'block';
            TrescPelna.style.display = 'none';
        } else if (polecenie === 'Ukryj') {
            PrzyciskPokaz.style.display = 'block';
            PrzyciskUkryj.style.display = 'none';
            TrescSkrocona.style.display = 'block';
            TrescPelna.style.display = 'none';
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            handleArrowClick('next');
            PokazUkryjTekst('Czytaj wiecej', currentNews);
        } else if (event.key === 'ArrowLeft') {
            handleArrowClick('prev');
            PokazUkryjTekst('Ukryj', currentNews);
        }
    });

    document.getElementById('next').addEventListener('click', function () {
        handleArrowClick('next');
        PokazUkryjTekst('Czytaj wiecej', currentNews);
    });

    document.getElementById('prev').addEventListener('click', function () {
        handleArrowClick('prev');
        PokazUkryjTekst('Ukryj', currentNews);
    });
});

// WYBIERANIE OPCJI 
function usunOpcje() {
    var radios = document.getElementsByName("opcje");

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        radios[i].parentNode.remove();
        break;
      }
    }
  }