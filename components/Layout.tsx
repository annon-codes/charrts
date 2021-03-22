import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
    className?: string
}

const Layout = ({ children, className, title = 'Charrts' }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <main className={className}>
            {children}
        </main>
        <footer>
        </footer>
    </>
)

export default Layout
