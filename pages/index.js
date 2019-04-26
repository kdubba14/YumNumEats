import React from 'react';
import Head from 'next/head';
import { register, unregister } from 'next-offline/runtime'

import App from '../containers/App';


class index extends React.Component {
  state = {

  }
  
  componentDidMount() {
    // if ('serviceWorker' in navigator) {
    //   /*navigator.serviceWorker.getRegistrations()
    //     .then(reg => console.log(reg))*/
    //   navigator.serviceWorker
    //     .register('/sw-cached.js')
    //     .then(registration => {
    //       console.log('SERVICE WORKER REGISTRATION SUCCESSFUL')
    //     })
    //     .catch(err => {
    //       console.warn('SERVICE WORKER REGISTRATION FAILED', err.message)
    //     })
    // }
    register()
  }

  componentWillUnmount(){
    unregister()
  }
  
  render(){
      
    return (
        <React.Fragment>
          <Head>
            <title>YumNum</title>
          </Head>
          <App />
        </React.Fragment>
      )
  }
}

export default index;
