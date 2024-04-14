import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

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
  editLink: { component: null },
  feedback: { content: null },
  footer: { component: null }
};

export default config;
