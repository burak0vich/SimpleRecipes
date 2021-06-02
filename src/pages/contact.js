import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

const contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <h1>contact page </h1>
        <section className="contact-page">
          <article className="contact-info">
            <h3>Wanna get in touch?</h3>
            <p>
              I'm baby kombucha DIY pabst four loko tofu jianbing waistcoat
              green juice, cray retro YOLO. Intelligentsia irony ennui
              thundercats, crucifix jean shorts flexitarian polaroid sriracha
              banjo affogato migas brooklyn 8-bit. Ramps mixtape shaman
              skateboard sustainable kombucha asymmetrical four loko echo park
              synth put a bird on it. Neutra pork belly tote bag you probably
              haven't heard of them. Cornhole polaroid swag tofu pabst forage.
              Irony tumblr brunch snackwave vegan banh mi. Chillwave cred
              dreamcatcher af helvetica artisan. Enamel pin squid freegan,
              kitsch offal chillwave 3 wolf moon hexagon gochujang. Lomo butcher
              knausgaard williamsburg food truck poutine wayfarers raclette
              fingerstache narwhal fashion axe messenger bag four dollar toast
              everyday carry mixtape. Brooklyn roof party live-edge la croix
              brunch.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xjvjwpja"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export default contact
