// @ts-ignore
import {AppProps, PageProps} from "$fresh/server.ts";

// @ts-ignore
import {asset} from "$fresh/runtime.ts";

const DESCRIPTION =
    "Hej, my name is Sebastian Frederik Jacobsen. I am glad to meet you here. I'm a product manager at CARIAD, maker, creator & optimist living in Berlin.";

export default function App({Component}: AppProps, props: PageProps) {


    return (
        <html>
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta
                name="description"
                content={DESCRIPTION}
            />
            <meta property="og:title" content="Sebastian Frederik Jacobsen"/>
            <meta property="og:description" content={DESCRIPTION}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://hejsfj.com"/>
            <meta property="og:image" content="/home-og.png"/>
            <meta property="og:image:width" content="800"/>
            <meta property="og:image:height" content="425"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            >
            </link>

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-VQJ4YX34EV"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-VQJ4YX34EV');
            </script>

            <title>Sebastian Frederik Jacobsen</title>
        </head>
        <body>
        <Component/>
        </body>
        </html>
    );
}
