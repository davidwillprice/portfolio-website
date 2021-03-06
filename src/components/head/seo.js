import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import globalStyles from "../../styles/global.module.scss"

const SEO = ({ title, description, image, article, bgColor }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

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

  return (
    <Helmet
      bodyAttributes={{ class: globalStyles[bgColourClass] }}
      title={seo.title}
      titleTemplate={
        seo.title === "David Price Web Design" ? "" : titleTemplate
      }
    >
      <script type="javascript">
        {(function () {
          if (typeof window !== "undefined") {
            function setTheme(theme) {
              if (theme === "highContrast") {
                document
                  .querySelector("html")
                  .setAttribute("data-theme", "highContrast")
              }
              window.__theme = theme
            }
            window.__setPreferredTheme = function (theme) {
              setTheme(theme)
              try {
                localStorage.setItem("preferred-theme", theme)
              } catch (e) {}
            }
            var preferredTheme
            try {
              preferredTheme = localStorage.getItem("preferred-theme")
            } catch (e) {}
            setTheme(preferredTheme)

            function setFont(font) {
              if (font === "dyslexic") {
                document
                  .querySelector("html")
                  .setAttribute("data-font", "dyslexic")
              }
              window.__font = font
            }
            window.__setPreferredFont = function (font) {
              setFont(font)
              try {
                localStorage.setItem("preferred-font", font)
              } catch (e) {}
            }
            var preferredFont
            try {
              preferredFont = localStorage.getItem("preferred-font")
            } catch (e) {}
            setFont(preferredFont)
          }
        })()}
      </script>
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

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
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
