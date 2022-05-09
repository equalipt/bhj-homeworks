const hasTooltipElements = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');

hasTooltipElements.forEach((elem) =>
  elem.addEventListener('click', (e) => {
    e.preventDefault();

    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('tooltip_active')) {
      return elem.nextElementSibling.remove();
    }

    const { left, bottom } = elem.getBoundingClientRect();

    tooltipActive = tooltip.cloneNode(true);

    tooltipActive.classList.add('tooltip_active');
    tooltipActive.textContent = elem.getAttribute('title');
    tooltipActive.style.left = left.toFixed(0).toString() + 'px';
    tooltipActive.style.top = bottom.toFixed(0).toString() + 'px';

    elem.insertAdjacentElement('afterEnd', tooltipActive);
  })
);