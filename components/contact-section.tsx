"use client"

import { Mail, Send } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    await fetch("https://formsubmit.co/oarthurjircik@gmail.com", {
      method: "POST",
      body: data,
    })

    setSubmitted(true)
    form.reset()

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Fale Comigo
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tem alguma mensagem ou quer trabalhar comigo? Me envie uma mensagem.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden config */}
            <input type="hidden" name="_subject" value="Nova mensagem do Portfolio!" />
            <input type="hidden" name="_captcha" value="true" />

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Mensagem
              </label>
              <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Sua mensagem..."
                  className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm resize-none"
              />
            </div>

            <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              {submitted ? (
                  <>
                    <Mail size={16} />
                    Enviada!
                  </>
              ) : (
                  <>
                    <Send size={16} />
                    Enviar mensagem
                  </>
              )}
            </button>
          </form>
        </div>
      </section>
  )
}