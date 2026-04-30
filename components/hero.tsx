"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {t("hero.badge")}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-foreground leading-tight text-balance mb-6">
            {t("hero.title")}
            <br />
            <span className="italic">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base" asChild>
              <Link href="mailto:zesia@coregateglobal.com">
                {t("hero.cta.consultation")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-base" asChild>
              <Link href="#services">
                {t("hero.cta.learnMore")}
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-semibold text-foreground">{t("hero.stat.experienceValue")}</p>
            <p className="text-sm text-muted-foreground mt-1">{t("hero.stat.experience")}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-semibold text-foreground">{t("hero.stat.partnersValue")}</p>
            <p className="text-sm text-muted-foreground mt-1">{t("hero.stat.partners")}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-semibold text-foreground">{t("hero.stat.marketsValue")}</p>
            <p className="text-sm text-muted-foreground mt-1">{t("hero.stat.markets")}</p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <Link href="#services" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-border" />
          </Link>
        </div>
      </div>
    </section>
  )
}
