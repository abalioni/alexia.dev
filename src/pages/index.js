import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = ""

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Oi, meu nome é Aléxia</h1>
        <p>
          Eu sou desenvolvedora front-end com background em testes
          automatizados.
        </p>
        <p>Vamos construir algo incrível!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
