/* Diretriz visual: preservar fielmente a landing page Allure Agency importada do repositório original. */
import { useEffect } from "react";
import { toast } from "sonner";
import { AllureLandingPage } from "@/components/AllureLandingPage";

function formatWhatsapp(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function Home() {
  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>(
      'input[data-mask="whatsapp"], input[name="WhatsApp"]',
    );
    const cleanups: Array<() => void> = [];

    if (input) {
      const onInput = () => {
        const caret = input.selectionStart ?? input.value.length;
        const digitsBefore = input.value.slice(0, caret).replace(/\D/g, "").length;
        const formatted = formatWhatsapp(input.value);
        if (formatted === input.value) return;
        input.value = formatted;
        let seen = 0;
        let position = formatted.length;
        for (let index = 0; index < formatted.length; index += 1) {
          if (/\d/.test(formatted[index]!)) {
            seen += 1;
            if (seen === digitsBefore) {
              position = index + 1;
              break;
            }
          }
        }
        if (digitsBefore === 0) position = formatted.length;
        input.setSelectionRange(position, position);
      };
      input.addEventListener("input", onInput);
      cleanups.push(() => input.removeEventListener("input", onInput));
    }

    const ctaLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href="#representada"]'),
    );
    const onCtaClick = (event: MouseEvent) => {
      event.preventDefault();
      const target = document.getElementById("representada");
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#representada");
    };
    ctaLinks.forEach((link) => link.addEventListener("click", onCtaClick));
    cleanups.push(() =>
      ctaLinks.forEach((link) => link.removeEventListener("click", onCtaClick)),
    );

    const form = document.querySelector<HTMLFormElement>(
      'form[data-ajax="formsubmit"], form.contact-form',
    );
    if (form) {
      const onSubmit = async (event: Event) => {
        event.preventDefault();
        const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
        const originalLabel = button?.innerHTML ?? "";
        if (button) {
          button.disabled = true;
          button.innerHTML = "Enviando...";
        }

        const data: Record<string, string> = { _captcha: "false" };
        new FormData(form).forEach((value, key) => {
          if (!key.startsWith("_")) data[key] = String(value);
        });
        data._subject = "Nova candidatura - Allure Agency";

        try {
          const response = await fetch("https://formsubmit.co/ajax/allureagencymodelss@gmail.com", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(data),
          });
          if (!response.ok) throw new Error("request failed");
          form.reset();
          toast.success("Candidatura enviada com sucesso! Entraremos em contato em breve.");
        } catch {
          toast.error("Não foi possível enviar. Tente novamente em instantes.");
        } finally {
          if (button) {
            button.disabled = false;
            button.innerHTML = originalLabel;
          }
        }
      };
      form.addEventListener("submit", onSubmit);
      cleanups.push(() => form.removeEventListener("submit", onSubmit));
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return <AllureLandingPage />;
}
