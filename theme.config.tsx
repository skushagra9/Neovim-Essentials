import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <span className="nx-font-extrabold nx-text-xl nx-tracking-tighter">Neovim Essentials</span>

    </>
  ), project: {
    link: 'https://github.com/skushagra9/Neovim-Essentials',
  },
  chat: {
    link: 'https://discordapp.com/channels/@me/kushagra_16/',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s'
      }
    }
  },
  editLink: { component: null },
  feedback: { content: null },
  footer: { component: null }
};

export default config;
