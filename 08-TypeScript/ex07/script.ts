/*

Utilizando a estrutura HTML/CSS abaixo, crie o script
que irá fazer o botão mobile funcionar (ativar/desativar a navegação).
// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

*/

const button = document.querySelector("#btn-mobile");

button?.addEventListener("click", handleClick);

function handleClick(event: Event) {
  if (event instanceof MouseEvent) {
    if (button?.parentElement?.classList.contains("active")) {
      button?.setAttribute("aria-expaded", "false");
      button?.setAttribute("aria-label", "Abrir Menu");
    } else {
      button?.setAttribute("aria-expaded", "true");
      button?.setAttribute("aria-label", "Fechar Menu");
    }
    button?.parentElement?.classList.toggle("active");
  }
}

/**
 * SOLUÇÃO ANDRE RAFAEL
 * 

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event: PointerEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById('nav');
  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains('active');
    if (active) {
      nav.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir Menu');
    } else {
      nav.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Fechar Menu');
    }
  }
}

btnMobile?.addEventListener('pointerdown', toggleMenu);

 */
