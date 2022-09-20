window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

const id = process.env.GOOGLE_ANALYTICS_ID;
gtag('config', id);
