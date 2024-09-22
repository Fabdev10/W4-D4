


// funzione per far apparire le cards dei film allo scroll //
window.onscroll = function () {appear()}


function appear() {
    if (document.documentElement.scrollTop > 150)
        Array.from(document.querySelectorAll('.cards.invisible')).forEach(
            (el) => el.classList.remove('invisible')
          );
}

//funzione bonus per far scomparire il logo netflix//
setTimeout(() => {
    document.querySelector('.netflix').classList.add('invisible')
  }, 5000);

