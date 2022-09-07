import React from 'react'
import Link from 'next/link'
import { FooterLogo } from '../components/footer-logo'
import { TwitterCircle, DiscordCircle, GitHubCircle } from '../lib/icons'

export default function Footer({ ...restProps }) {
  return (
    <footer
      className="bg-footer-gradient text-semi-white py-[20px] md:py-8 shrink-0"
      {...restProps}
    >
      <div className="container">
        <div className="grid md:grid-cols-[200px_1fr] xxl:grid-cols-2 gap-9 xxl:gap-0">
          <div className="w-[200px] mx-auto lg:ml-0 flex flex-col items-center gap-9">
            <FooterLogo />

            <div className="flex flex-wrap gap-6">
              <a
                target="_blank"
                href="https://twitter.com/"
                rel="noopener noreferrer"
              >
                <TwitterCircle className="w-6 h-6" />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/"
                rel="noopener noreferrer"
              >
                <DiscordCircle className="w-6 h-6" />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/"
                rel="noopener noreferrer"
              >
                <GitHubCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-[10px] md:gap-4 lg:gap-9 md:pt-4 [&>*]:text-base [&>*]:font-heading text-center md:text-start">
            <div>
              <h3 className="border-b-semi-white border-b inline-block px-3 md:px-0 mb-4">
                Projects
              </h3>

              <div className="grid gap-[10px] [&>*]:py-4 [&>*]:transition">
                <Link href="/">
                  <a className="hover:text-white">Prysm</a>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="border-b-semi-white border-b inline-block px-3 md:px-0 mb-4">
                About Us
              </h3>

              <div className="grid gap-[10px] [&>*]:py-4 [&>*]:transition">
                <Link href="/">
                  <a className="hover:text-white">Our Mission</a>
                </Link>
                <Link href="/">
                  <a className="hover:text-white">Our Vision</a>
                </Link>
                <Link href="/">
                  <a className="hover:text-white">Meet the Team</a>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="border-b-semi-white border-b inline-block px-3 md:px-0 mb-4">
                Careers
              </h3>

              <div className="grid gap-[10px] [&>*]:py-4 [&>*]:transition">
                <Link href="/">
                  <a className="hover:text-white">Work With Us</a>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="border-b-semi-white border-b inline-block px-3 md:px-0 mb-4">
                Resources
              </h3>

              <div className="grid gap-[10px] [&>*]:py-4 [&>*]:transition">
                <Link href="/">
                  <a className="hover:text-white">Github</a>
                </Link>
                <Link href="/">
                  <a className="hover:text-white">Docs</a>
                </Link>
                <Link href="/">
                  <a className="hover:text-white">Media Kit</a>
                </Link>
                <Link href="/">
                  <a className="hover:text-white">Brand Guidelines</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-[40px] md:mt-[10px] text-center text-base font-subheading">
          Copyright © 2022 Prysmatic Labs
        </p>
      </div>
    </footer>
  )
}
