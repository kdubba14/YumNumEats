import React from "react";
import Head from "next/head";
import { register, unregister } from "next-offline/runtime";

import App from "../containers/App";

class index extends React.Component {
  state = {};

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./static/sw.js", { scope: "/" })
        .then(registration => {
          console.log(
            `SERVICE WORKER REGISTRATION: \n ${registration} \n SUCCESSFUL at scope: `,
            registration.scope
          );
        })
        .catch(err => {
          console.warn("SERVICE WORKER REGISTRATION FAILED BRO", err.message);
        });
    }
  }

  componentWillUnmount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
        console.log(registrations);
        for (let registration of registrations) {
          console.log("Reg: ", registration);
          if (
            registration.active.scriptURL ==
            "http://localhost/my-push/myworker.js"
          ) {
            registration.unregister();
          }
        }
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>YumNum</title>
        </Head>
        <App />
      </React.Fragment>
    );
  }
}

export default index;
