import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader.tsx";
import { XIcon } from "../components/XIcon.tsx";
import { site } from "../data/site.ts";
import { vehicles } from "../data/vehicles.ts";
import { usePageTitle } from "../lib/usePageTitle.ts";

type FormState = {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  vehicle: "",
  message: "",
};

export function Contact() {
  usePageTitle("Contact | VÉLORA MOTORS");
  const [params] = useSearchParams();
  const preset = params.get("vehicle") ?? "";
  const [form, setForm] = useState<FormState>({ ...emptyForm, vehicle: preset });
  const [appliedPreset, setAppliedPreset] = useState(preset);
  const [submitted, setSubmitted] = useState(false);

  if (appliedPreset !== preset) {
    setAppliedPreset(preset);
    setForm((current) => ({ ...current, vehicle: preset }));
  }

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Private appointments"
        title="Let's Find Your Next Vehicle."
        subtitle="Tell us what you're looking for and we'll help you discover the right vehicle."
        image="/images/contact.jpg"
        imageAlt="Audi R8 on a city street at dusk"
      />
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
          <div className="bg-ink px-6 py-16 text-ivory lg:col-span-5 lg:px-12 lg:py-20">
            <h2 className="font-serif text-4xl font-normal">Contact Information</h2>
            <span className="mt-6 block h-px w-12 bg-gold" />
            <p className="mt-8 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">Email</p>
            <a href={site.mailto} className="mt-3 inline-block text-lg text-ivory transition hover:text-gold">
              {site.email}
            </a>
            <p className="mt-12 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">
              Follow VÉLORA MOTORS
            </p>
            <a
              href={site.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={site.xLabel}
              className="mt-5 inline-flex h-12 w-12 items-center justify-center border border-white/25 text-ivory transition hover:border-gold hover:text-gold"
            >
              <XIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="px-6 py-16 lg:col-span-7 lg:px-14 lg:py-20">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col justify-center">
                <span className="block h-px w-12 bg-bronze" />
                <p className="mt-8 max-w-xl font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-snug text-ink">
                  Thank you. Your inquiry has been received. Our team will be in touch soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ ...emptyForm, vehicle: preset });
                  }}
                  className="mt-10 inline-flex min-h-12 w-fit items-center border-b border-ink pb-1 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition hover:border-bronze hover:text-bronze"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <label className="block">
                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone">Full Name</span>
                    <input
                      className="field"
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(event) => update("name", event.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone">Email</span>
                    <input
                      className="field"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(event) => update("email", event.target.value)}
                    />
                  </label>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <label className="block">
                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone">Phone</span>
                    <input
                      className="field"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(event) => update("phone", event.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone">
                      Vehicle Interested In
                    </span>
                    <select
                      className="field"
                      name="vehicle"
                      required
                      value={form.vehicle}
                      onChange={(event) => update("vehicle", event.target.value)}
                    >
                      <option value="">Select a vehicle</option>
                      {vehicles.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.id}>
                          {vehicle.year} {vehicle.name}
                        </option>
                      ))}
                      <option value="undecided">Not sure yet</option>
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone">Message</span>
                  <textarea
                    className="field"
                    name="message"
                    required
                    value={form.message}
                    onChange={(event) => update("message", event.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center bg-ink px-7 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ivory transition hover:bg-gold hover:text-ink sm:w-fit"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
