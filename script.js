var splide;

document.addEventListener("DOMContentLoaded", function () {
  splide = new Splide(".splide", {
    padding: "5rem",
    autoWidth: true,
    perPage: 4,
    arrows: false,
    pagination: false,
    lazyLoad: 'sequential',
    type: 'loop',
    drag: 'free'
  });
  splide.mount();
  // init accordions
  append_json();
  const accordions = document.querySelectorAll(".accordion h3");
  accordions.forEach((accordionEl) => {
    new Accordion(accordionEl);
  });
});

document.addEventListener("scroll", function (event) {
  if (window.innerWidth > 820)
    document
      .getElementById("top-slider")
      .setAttribute(
        "style",
        `transform: translateX(${125 - window.scrollY / 5}px);width: unset`
      );
});

/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Simple accordion pattern example
 */

("use strict");

class Accordion {
  constructor(domNode) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector("button[aria-expanded]");

    const controlsId = this.buttonEl.getAttribute("aria-controls");
    this.contentEl = document.getElementById(controlsId);

    this.open = this.buttonEl.getAttribute("aria-expanded") === "true";

    // add event listeners
    this.buttonEl.addEventListener("click", this.onButtonClick.bind(this));
  }

  onButtonClick() {
    this.toggle(!this.open);
  }

  toggle(open) {
    // don't do anything if the open state doesn't change
    if (open === this.open) {
      return;
    }

    // update the internal state
    this.open = open;

    // handle DOM updates
    this.buttonEl.setAttribute("aria-expanded", `${open}`);
    if (open) {
      this.contentEl.removeAttribute("hidden");
    } else {
      this.contentEl.setAttribute("hidden", "");
    }
  }

  // Add public open and close methods for convenience
  open() {
    this.toggle(true);
  }

  close() {
    this.toggle(false);
  }
}

const faqData = [
  {
    q: "Is it truly unlimited design?",
    a: "Definitely! You can send unlimited requests to your design queue anytime, and your designer will address them one by one.",
  },
  {
    q: "How quickly will I receive my designs/illustration?",
    a: "Once you make a design request, it enters your design queue and is managed in the order it was received in a first-come, first-served approach.<br/>On average, most clients receive their requests within a few business days. Occasionally, it might take longer based on the request's complexity.",
  },
  {
    q: "Can I resell any of the work created by Design Ideate?",
    a: "You possess full rights to the designs, granting you the flexibility to utilize them according to your preferences.",
  },
  {
    q: "I have an urgent request. What should I do?",
    a: "We understand that some requests require immediate attention. We do our best to accommodate rush requests when they arise.",
  },
  {
    q: "How many requests can I submit at once?",
    a: "Feel free to add any amount of requests to your design queue whenever you like, and we will handle them one at a time.",
  },
  {
    q: "How many brands can I request designs for?",
    a: "Design+Illustration plan members can submit requests for an unlimited number of brands, while Design plan members are limited to one brand.",
  },
  {
    q: "What types of designs can Design Ideate create?",
    a: "Our skilled designers/illustrators can create anything from an Android app to a character creation. Check out our package for some ideas.",
  },
  {
    q: "What types of designs does Design Ideate not handle?",
    a: "Our designers do not create motion graphics, InDesign documents, physical product or photography.",
  },
  {
    q: "Is cancelling a complicated process?",
    a: "Absolutely not. You can cancel your account at any time without the need to mail us, send emails, or navigate complex processes.",
  },
];

function append_json(data = faqData) {
  var table = document.getElementById("accordionGroup");
  data.forEach((item, index) => {
    var h3 = document.createElement("h3");
    h3.innerHTML = `<button type="button" aria-expanded="false" class="accordion-trigger" aria-controls="sect${index + 2
      }"
              id="accordion${index + 2}id">
              <span class="accordion-title">
                <div class="accordion-title-text">${item.q}</div>
                <span class="accordion-icon"></span>
              </span>
            </button>
          `;
    table.appendChild(h3);
    var div = document.createElement("div");
    div.setAttribute("id", `sect${index + 2}`);
    div.setAttribute("role", "region");
    div.setAttribute("aria-labelledby", `accordion${index + 2}id`);
    div.setAttribute("class", `accordion-panel`);
    div.setAttribute("hidden", "");
    div.innerHTML = `<div class="answer">
          ${item.a}
        </div>
      `;
    table.appendChild(div);
    var hr = document.createElement("hr");
    table.appendChild(hr);
  });
}

function toggle(id) {
  var n = document.getElementById(id);
  n.className = n.className != "hidden" ? "hidden" : "";
}
