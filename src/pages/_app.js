import React, { useEffect } from "react";
import { useRouter } from "next/router";

// CSS
import "./global.scss";

const IndexPage = ({ Component, ...rest }) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return <Component {...rest} />;
};

const AppWithContext = ({ Component, pageProps }) => (
  <div className="App">
    <IndexPage Component={Component} pageProps={pageProps} />
  </div>
);

export default AppWithContext;
