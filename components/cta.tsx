"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-6 text-balance">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed max-w-xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto px-8 py-6 text-base"
              asChild
            >
              <Link href="mailto:zesia@coregateglobal.com">
                {t("cta.button")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-6">
            {t("cta.contact")}: <Link href="mailto:zesia@coregateglobal.com" className="underline hover:text-primary-foreground transition-colors">zesia@coregateglobal.com</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
