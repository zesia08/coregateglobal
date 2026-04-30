"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">{t("about.badge")}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground tracking-tight mb-6 text-balance">
              {t("about.title")}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.description1")}</p>
              <p>{t("about.description2")}</p>
            </div>
            <Button className="mt-8" size="lg" asChild>
              <Link href="mailto:zesia@coregateglobal.com">
                {t("nav.contact")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-6xl md:text-7xl font-serif font-medium text-foreground mb-4">{t("about.stat.projectsValue")}</p>
                  <p className="text-lg text-muted-foreground">{t("about.stat.projects")}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-32 h-32 md:w-40 md:h-40 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold text-foreground">{t("about.stat.satisfactionValue")}</p>
                <p className="text-xs text-muted-foreground">{t("about.stat.satisfaction")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
