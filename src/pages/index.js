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
        <p>Eu sou desenvolvedora front-end com forte background em testes.</p>
        <p>Vamos construir algo incrível!</p>
      </Layout>
    )
  }
}

export default IndexPage
