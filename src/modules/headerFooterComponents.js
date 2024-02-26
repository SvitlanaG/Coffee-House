import pin from "../assets/icons/pin-alt.svg";
import phone from "../assets/icons/phone.svg";
import clock from "../assets/icons/clock.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";

class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="footer" class="footer flex flex-jc-start flex-ai-center">
        <div class"footer-social">
          <h2 class="title footer__title">
            Sip, Savor, Smile.<span class="highlight"> It’s coffee time!</span>
          </h2>
          <div class="footer-icons__container flex">
            <a href="https://twitter.com" target="_blank" class="btn-icon-light flex"><img src=${twitter} alt="Twitter"/></a>
            <a href="https://instagram.com" target="_blank" class="btn-icon-light flex"><img src=${instagram} alt="Instagram"/></a>
            <a href="https://facebook.com" target="_blank" class="btn-icon-light flex"><img src=${facebook} alt="Facebook"/></a>
          </div>
        </div>
        <div class"footer-contacts">
        <h3 class="footer-contacts__title">Contact us</h3>
                <nav class="footer__nav">
                  <ul class="footer__list">
                    <li class="footer__item">
                      <a class="footer__link" href="https://www.google.de/maps/place/Green+Moore+Rd,+Louisiana+70661,+USa" target="_blank"><img src=${pin} alt="Location"/>8558 Green Rd., LA</a>
                    </li>
                    <li class="footer__item">
                      <a class="footer__link" href="tel:+16035550123"><img src=${phone} alt="Phone" />+1&#032;(603)&#032;555&#032;0123</a>
                    </li>
                    <li class="footer__item">
                    <img src=${clock} alt="Clock"/>Mon-Sat: 9:00 AM – 23:00 PM
                  </li>
                  </ul>
                </nav></div>
      </footer>
      `;
  }
}

customElements.define("footer-component", FooterComponent);
