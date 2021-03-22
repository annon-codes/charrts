import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'Charrts' }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <main>
            {children}
        </main>
        <footer>
        </footer>
    </>
)

export default Layout
