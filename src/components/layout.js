import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === blogPath) {
      header = (
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={rootPath}
        >
          Home
        </Link>
      )
    } else {
      header = (
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={blogPath}
        >
          Blog
        </Link>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(40),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "95%",
            }}
          >
            {header}
          </header>
          <main>{children}</main>
        </div>
        {/* <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer> */}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
