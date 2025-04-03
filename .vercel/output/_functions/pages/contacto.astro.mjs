/* empty css                                    */
import { c as createComponent, b as renderTemplate, d as addAttribute, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_BDyvm90E.mjs';
import { $ as $$Layout } from '../chunks/Layout_B_e2BNeu.mjs';
import { $ as $$Icon } from '../chunks/Icon_D6oeDbxa.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const apiCatpcha = "13524694-4fb6-46e0-83b0-58b011a4ab92";
  return renderTemplate(_a || (_a = __template(["", '<form id="contact-form"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> <div> <label for="name" class="block text-gray-700 font-medium mb-2">Nombre</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> </div> <div> <label for="phone" class="block text-gray-700 font-medium mb-2">Teléfono</label> <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> </div> </div> <div class="mb-4"> <label for="email" class="block text-gray-700 font-medium mb-2">Email</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> </div> <div class="mb-4"> <label for="message" class="block text-gray-700 font-medium mb-2">Mensaje</label> <textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea> </div> <div id="form-status" class="mb-4 hidden"> <p class="text-center font-medium"></p> </div> <!-- Contenedor para hCaptcha --> <div class="mb-4"> <div class="h-captcha"', ` data-callback="onCaptchaSuccess" data-expired-callback="onCaptchaExpired"></div> </div> <button type="submit" class="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors">
Enviar Mensaje
</button> </form> <!-- Cargar script de hCaptcha --> <script src="https://js.hcaptcha.com/1/api.js" async defer></script> <script>
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const statusText = formStatus?.querySelector('p');

  window.onCaptchaSuccess = function(token) {
    window.captchaToken = token;
    const formStatus = document.getElementById('form-status');
    const statusText = formStatus?.querySelector('p');
    if (statusText && formStatus) {
      statusText.textContent = '';
      formStatus.classList.add('hidden');
    }
  }

  window.onCaptchaExpired = function() {
    window.captchaToken = '';
    const formStatus = document.getElementById('form-status');
    const statusText = formStatus?.querySelector('p');
    if (statusText && formStatus) {
      statusText.textContent = 'Por favor, completa el hCaptcha.';
      formStatus.className ='mb-4 text-red-600';
      formStatus.classList.remove('hidden');
    }
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!statusText || !formStatus) return;
    
    if (!window.captchaToken) {
      statusText.textContent = 'Por favor, completa el hCaptcha.';
      formStatus.className = 'mb-4 text-red-600';
      formStatus.classList.remove('hidden');
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.captchaToken = captchaToken;

    form.querySelectorAll('input, textarea, button').forEach((el) => {
      el.setAttribute('disabled', 'true');
    });

    formStatus.classList.remove('hidden');
    statusText.textContent = 'Enviando mensaje...';
    formStatus.className = 'mb-4 text-gray-600';

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      (form).reset();
       captchaToken = '';
      statusText.textContent = '¡Mensaje enviado con éxito!';
      formStatus.className = 'mb-4 text-green-600';

      setTimeout(() => {
        formStatus.classList.add('hidden');
      }, 3000);
    } catch (error) {
      statusText.textContent = 'Error al enviar el mensaje. Por favor, intente nuevamente.';
      formStatus.className = 'mb-4 text-red-600';
    } finally {
      form.querySelectorAll('input, textarea, button').forEach((el) => {
        el.removeAttribute('disabled');
      });
    }
  });
</script>`])), maybeRenderHead(), addAttribute(apiCatpcha, "data-sitekey"));
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/components/contact-form/Form.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto - Estamos aqu\xED para ayudarte con todas tus necesidades de veh\xEDculos", "description": "Aqu\xED nos puedes contactar para un servicio r\xE1pido y seguro en la venta y compra de tu veh\xEDculo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white py-36 px-4 md:py-[180px]"> <div class="container mx-auto"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-bold text-black mb-5">Contáctanos</h1> <p class="text-xl text-black text-balance px-0 mx:px-[120px]">Ya sea que estés buscando el vehículo ideal o quieras vender el tuyo, en
        RG Motorsport estamos aquí para ayudarte.
        Contáctanos y recibe atención personalizada, asesoría experta y un proceso
        transparente. <strong></strong></p><p><strong>¡Tu mejor experiencia automotriz comienza aquí!</strong></p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-4"> <!-- Formulario de contacto --> <div class="bg-white p-8 rounded-2xl shadow-md"> <h2 class="text-2xl font-semibold mb-6">Envíanos un mensaje</h2> ${renderComponent($$result2, "Form", $$Form, {})} </div> <!-- Información de la empresa --> <div class="space-y-8"> <div class="bg-white p-8 rounded-2xl shadow-md"> <h2 class="text-2xl font-semibold mb-6">Información de Contacto</h2> <div class="space-y-4"> <div class="flex flex-col space-y-4"> <!-- Dirección 1 --> <div class="flex items-start space-x-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "maps", "class": "w-8 h-8" })} <div> <h3 class="font-semibold text-lg">Dirección:</h3> <p class="text-gray-600"> Av. Cerro Paranal 375, Antofagasta.</p> </div> </div> <div class="flex items-start space-x-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "phone-black", "class": "w-8 h-8" })} <div> <h3 class="font-semibold text-lg">Teléfono:</h3> <a href="tel:+56965991691" class="text-gray-600 py-1">+56 9 6599 1691</a> </div> </div> <div class="flex items-start space-x-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mail-black", "class": "w-8 h-8" })} <div> <h3 class="font-semibold text-lg">Correo Electrónico:</h3> <a href="mailto:contacto@rgmotorsport.cl" class="text-gray-600 py-1">contacto@rgmotorsport.cl</a> </div> </div> </div> </div> </div> <!-- Mapas --> </div> </div> </div> </main> ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/contacto.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/rg-motor-sport/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
