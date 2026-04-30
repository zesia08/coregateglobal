"use client"

import Link from "next/link"
import { Linkedin, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="py-16 md:py-20 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="https://www.coregateglobal.com" className="flex items-center gap-2 mb-6">
              <span className="text-xl font-semibold tracking-tight text-foreground">
                COREGATE<span className="text-muted-foreground font-normal">GLOBAL</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-4">
              <Link href="mailto:zesia@coregateglobal.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">{t("footer.services")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.services.distribution")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.services.market")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.services.online")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.services.mcn")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.services.consulting")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.services.global")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">{t("footer.company")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.company.about")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.company.partners")}
                </Link>
              </li>
              <li>
                <Link href="mailto:zesia@coregateglobal.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.company.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">{t("footer.offices")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t("footer.offices.korea")}</p>
                  <p className="text-sm text-muted-foreground">Seoul, South Korea</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t("footer.offices.china")}</p>
                  <p className="text-sm text-muted-foreground">China</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                <Link href="mailto:zesia@coregateglobal.com" className="hover:text-foreground transition-colors">
                  zesia@coregateglobal.com
                </Link>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                <Link href="https://www.coregateglobal.com" className="hover:text-foreground transition-colors">
                  www.coregateglobal.com
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
          <p className="text-sm text-muted-foreground">
            Seoul, Korea | China
          </p>
        </div>
      </div>
    </footer>
  )
}
