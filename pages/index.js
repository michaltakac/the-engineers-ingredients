import Container from '../components/container'
import Intro from '../components/intro'
import Search from '../components/search'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>The Engineer's Ingredients</title>
        </Head>
        <Container>
          <Intro />
          <Search />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
