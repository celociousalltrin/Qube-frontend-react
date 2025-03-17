import React from "react";
import { useParams } from "react-router-dom";

import Page from "../index";
import Homepage from "../home-page";
import NotFound from "../not-found";

const Home = () => {
  const { page_id } = useParams();
  return (
    <>
      <Page>
        {(() => {
          switch (page_id) {
            case "home":
              return <Homepage />;
            default:
              return <NotFound />;
          }
        })()}
      </Page>
    </>
  );
};

export default Home;
