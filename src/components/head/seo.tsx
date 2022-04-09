import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import * as globalStyles from "../../styles/global.module.scss"

interface Queries {
  site: {
    siteMetadata: {
      defaultTitle: string
      titleTemplate: string
      defaultDescription: string
      siteUrl: string
      defaultImage: string
    }
  }
}

const Seo = ({
  title,
  description,
  image,
  article,
  bgColor,
}: {
  title: string
  description: string
  image?: string
  article?: string
  bgColor?: string
}) => {
  const { pathname } = useLocation()

  const { site }: Queries = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  let bgColourClass = bgColor ? bgColor + "Bg" : ""

  function setTheme(theme: string) {
    if (theme === "highContrast") {
      document.querySelector("html")?.setAttribute("data-theme", "highContrast")
    }
    ;(window as any).__theme = theme
  }
  ;(window as any).__setPreferredTheme = function (theme: string) {
    setTheme(theme)
    try {
      localStorage.setItem("preferred-theme", theme)
    } catch (e) {}
  }
  let preferredTheme = localStorage.getItem("preferred-theme")!

  setTheme(preferredTheme)

  function setFont(font: string) {
    if (font === "dyslexic") {
      document.querySelector("html")?.setAttribute("data-font", "dyslexic")
    }
    ;(window as any).__font = font
  }
  ;(window as any).__setPreferredFont = function (font: string) {
    setFont(font)
    try {
      localStorage.setItem("preferred-font", font)
    } catch (e) {}
  }
  let preferredFont = localStorage.getItem("preferred-font")!

  setFont(preferredFont)

  return (
    <Helmet
      bodyAttributes={{ class: globalStyles[bgColourClass] }}
      title={seo.title}
      titleTemplate={
        seo.title === "David Price Web Design" ? "" : titleTemplate
      }
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`
