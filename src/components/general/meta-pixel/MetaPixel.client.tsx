import React, {useEffect} from 'react';
import {ClientAnalytics, loadScript} from '@shopify/hydrogen';

const PIXEL_ID = '2312095542276454'; // <-- Add your pixel ID here
let init = false;

type Props = {};

const MetaPixel = (props: Props) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    if (init) {
      return;
    }

    init = true;

    if (window.fbq) return;

    const fbq: any = (window.fbq = (...args: any[]) => {
      fbq.callMethod ? fbq.callMethod.apply(fbq, args) : fbq.queue.push(args);
    });

    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = !0;
    fbq.version = '2.0';
    fbq.queue = [];

    loadScript('https://connect.facebook.net/en_US/fbevents.js').catch(
      () => {},
    );

    fbq('init', PIXEL_ID);
    fbq('track', 'PageView');

    // Listen for events from Hydrogen
    // https://shopify.dev/custom-storefronts/hydrogen/framework/analytics#default-events
    ClientAnalytics.subscribe(
      ClientAnalytics.eventNames.PAGE_VIEW,
      (payload) => {
        fbq('track', 'PageView');
      },
    );
  });

  return null;
};

export default MetaPixel;
