import React from "react"
import styled from '@emotion/styled';
import Layout from "../components/layout"
import SEO from "../components/Seo"
import { OverGeenVrijwilligersprobleem } from "../utils/queries/overOns"
import Page from '../Templates/Page';

const Container = styled.div`
    max-width: 700px;
    padding: 24px 16px;
    
    @media (min-width: 1024px) {
        padding: 48px 48px 72px;
    }
`;

const IndexPage = () => {
    const { pageHeader, pageDescription } = OverGeenVrijwilligersprobleem();

    return (
        <Layout>
            <SEO title="Over Geen Vrijwilligersprobleem" />
            <Page
                heading={pageHeader}
            >
                <Container>
                    <p>{pageDescription}</p>
                </Container>
            </Page>
        </Layout>
    )
}

export default IndexPage