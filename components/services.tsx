"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Store, TrendingUp, ShoppingCart, Video, FileText, Globe } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Store,
      titleKey: "services.distribution.title",
      descriptionKey: "services.distribution.description",
    },
    {
      icon: TrendingUp,
      titleKey: "services.market.title",
      descriptionKey: "services.market.description",
    },
    {
      icon: ShoppingCart,
      titleKey: "services.online.title",
      descriptionKey: "services.online.description",
    },
    {
      icon: Video,
      titleKey: "services.mcn.title",
      descriptionKey: "services.mcn.description",
    },
    {
      icon: FileText,
      titleKey: "services.consulting.title",
      descriptionKey: "services.consulting.description",
    },
    {
      icon: Globe,
      titleKey: "services.global.title",
      descriptionKey: "services.global.description",
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">{t("services.badge")}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground tracking-tight mb-6 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("services.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.titleKey} className="group bg-card hover:bg-secondary/50 transition-colors border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-lg bg-secondary text-foreground">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <Link href="#" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </div>
                <CardTitle className="text-xl font-medium text-foreground mt-4">
                  {t(service.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {t(service.descriptionKey)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
