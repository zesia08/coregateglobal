"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Solutions() {
  const { t } = useLanguage()

  const solutions = [
    {
      number: "01",
      titleKey: "solutions.korea.title",
      descriptionKey: "solutions.korea.description",
      link: "#",
    },
    {
      number: "02",
      titleKey: "solutions.china.title",
      descriptionKey: "solutions.china.description",
      link: "#",
    },
    {
      number: "03",
      titleKey: "solutions.ecommerce.title",
      descriptionKey: "solutions.ecommerce.description",
      link: "#",
    },
    {
      number: "04",
      titleKey: "solutions.influencer.title",
      descriptionKey: "solutions.influencer.description",
      link: "#",
    },
  ]

  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">{t("solutions.badge")}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground tracking-tight text-balance">
              {t("solutions.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              {t("solutions.description")}
            </p>
          </div>
        </div>

        <div className="divide-y divide-border">
          {solutions.map((solution) => (
            <Link
              key={solution.number}
              href={solution.link}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 first:pt-0 last:pb-0"
            >
              <span className="text-sm font-mono text-muted-foreground">{solution.number}</span>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-accent transition-colors mb-2">
                  {t(solution.titleKey)}
                </h3>
                <p className="text-muted-foreground max-w-xl">{t(solution.descriptionKey)}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
