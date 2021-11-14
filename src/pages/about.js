import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout title="about" description="more about me">
      <GatsbyImage
        image={getImage(data.file)}
        alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling around it"
      />
      <h1>About page</h1>
      <Link to="/">Go home</Link>
    </Layout>
  );
}
