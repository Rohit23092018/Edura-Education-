var appName = 'VPN US'; //use appName to place update app name in the Faq Q&As
var supportEmail =
  '<span class="text-highlight">support@freevpnusapp.com</span>'; //use supportEmail where support email needs to be placed
var supportForm = `<a href="#contactform" class="link">here</a>`; //use supportForm to add link to our support form
var privacyPolicyLink = `<a href="https://freevpnusapp.com/privacy-policy/" class="link">Privacy Policy</a>`; //use privacyPolicyLink to place the privacy policy link
var faqs = [
  {
    category: `general`,
    disp_name: `General`,
    ques_list: [
      {
        ques: `Why use a VPN?`,
        ans: `VPN allows you to have online privacy. As an internet user, you should always turn on your VPN whenever connected to a wifi network – secured or otherwise to ensure privacy and data safety including but not limited to personal information, bank details, and so on. We believe in a free and open internet and want users to benefit by having control over their digital footprint. Users can safely enjoy various activities from online browsing to video streaming wherever they are.`
      },
      {
        ques: `Why is our VPN the best?`,
        ans: `Our app aims to offer the best VPN service available by using multi-layer rotating encryption along with a set of proprietary protocols and patented algorithms to ensure all your data is secured. It offers adblockers and auto-connect option, along with a wide range of region options which help you access all geo-blocked content. Most importantly we do not monetize by collecting or sharing any user data.`
      },
      {
        ques: `Why do I need to add a VPN configuration?`,
        ans: `Apple requires an additional VPN configuration to allow redirecting all your network traffic through a VPN. This is needed for every VPN app.`
      },
      {
        ques: `I cannot find the region I want to connect to in the list provided?`,
        ans: `Please let us know which region you’re looking for via support email at ` + supportEmail + ` or by clicking ` + supportForm + ` and we’ll try to add it as soon as possible.`
      },
      {
        ques: `I think I found a bug in your app, what do I do?`,
        ans: `Good catch! Please let us know via support email at ` + supportEmail + ` or by clicking ` + supportForm + `, we’ll have our engineers fix it.`
      },
      {
        ques: `I have an idea to improve ` + appName + `, what do I do?`,
        ans: `That’s awesome! We’d love to hear it. You can either contact support or let us know by clicking ` + supportForm + `.`
      }
    ]
  },
  {
    category: `security-and-privacy`,
    disp_name: `Security and Privacy`,
    ques_list: [
      {
        ques: `Where can I read your privacy policy?`,
        ans: `You can read our privacy policy here - ` + privacyPolicyLink + `.`
      },
      {
        ques: `Why is blocking analytics and ad trackers important?`,
        ans: `Have you noticed how the ads you see are extremely personalized and targeted based on what you browsed earlier? That’s an outcome of your personal data being tracked, collected, and shared by trackers and analytics. By blocking these trackers, analytics, and ads, the browser in ` + appName + ` gives you full security, privacy, and anonymity.`
      },
      {
        ques: `Do you collect user data?`,
        ans: `We absolutely do not collect, store, or sell any user data.`
      }
    ]
  },
  {
    category: `browser`,
    disp_name: `Browser`,
    ques_list: [
      {
        ques: `How is the browser in the app different from private mode in browsers like safari and chrome?`,
        ans: `The private or incognito mode in a regular browser only hides your browsing history. It does not provide any security, nor does it hide your IP address. Your internet service provider and other trackers are still aware of all your online activity. The browser in ` + appName + ` sends all your traffic through a private tunnel keeping your real IP address hidden. It also disables analytics and trackers to send data from the pages you visit and blocks ads. Most importantly, it does not use an auto-complete URL bar refraining it from sending everything you type in the search engines to others.`
      },
      {
        ques: `Can I use a multi-screen browser?`,
        ans: `Yes, you can. We support up to 4 split screens as of now. Multi-Screen browser allows you to browse multiple websites in one browser window. You can multi-task like watch videos, read the news or browse other websites, all simultaneously.`
      }
    ]
  },
  {
    category: `premium-mode-features`,
    disp_name: `Premium Mode Features`,
    ques_list: [
      {
        ques: `If the app is free why should I choose the premium mode?`,
        ans: `Premium mode offers additional features to users who want to unlimited ad-free VPN and get faster speeds. We offer both Basic and Premium modes so that you as a user have the freedom to choose what best suits your needs and preferences.`
      },
      {
        ques: `What features are included in the premium mode?`,
        ans: `The main benefits of premium mode are:
          <ul class="pt-2">
            <li>Unlimited VPN</li>
            <li>Faster speed</li>
            <li>Ad-Free experience</li>
            <li>Auto-Connect (On-Demand)</li>
            <li>Accelerate</li>
            <li>Privacy Plus (Ad Block)</li>
            <li>All regions</li>
          </ul>
        `
      },
      {
        ques: `How is the adblocking different from an adblocker plugin in chrome?`,
        ans: appName + ` blocks ads on all your apps, whereas a browser plugin blocks ads only in that browser.`
      },
      {
        ques: `What does turning on 'acceleration' do?`,
        ans: `Acceleration increases your network speed making your apps and browsers faster and more responsive. We use multiple connections, patented caching mechanisms, and protocol optimization algorithms to get maximum juice out of your network connection.`
      },
      {
        ques: `What does turning on 'auto-connect' do?`,
        ans: `Auto-connect ensures that the VPN is always turned on and every single network packet goes through the VPN. If the VPN is not connected and an app tries to make an internet connection, the VPN is first turned on and then your network traffic goes through the VPN.`
      },
      {
        ques: `What does alternate IP do?`,
        ans: `Alternate IP connects you to a new node in the same region, when possible. There may be a situation where you want to connect to US East. However, when you do connect, the website/service you’re trying to access might not work. In this case, you can tap on the ‘Alternate IP’ button to get a new IP address in the same region. This increases your chances of getting an unblocked node in the network.`
      }
    ]
  },
  {
    category: `subscription`,
    disp_name: `Subscription`,
    ques_list: [
      {
        ques: `What are the different subscription options available?`,
        ans: `We offer three different subscription durations - 1 week, 1 month, and 1 year. Amongst these, you can choose one that best suits your requirement.`
      },
      {
        ques: `Can I cancel my subscription anytime?`,
        ans: `Please reach out to us if you’re facing issues with the app and we’ll resolve it so you do not need to cancel. But if you must - yes, you may cancel your subscription at any point in time.`
      },
      {
        ques: `How can I cancel my subscription?`,
        ans: `You can cancel an active subscription by visiting the Google/Apple store directly.`
      },
      {
        ques: `Will I be refunded any balance amount if I cancel my subscription in the middle?`,
        ans: `No. The refunds are handled by the stores directly and not by us, sorry.`
      },
      {
        ques: `How can I get free VPN time?`,
        ans: `You can earn free VPN time by watching a certain number of ads.`
      }
    ]
  },
  {
    category: `purchase`,
    disp_name: `Purchase`,
    ques_list: [
      {
        ques: `The app is asking me to make a purchase again? I already paid for it.`,
        ans: `Due to app updates, OS updates, or reinstalling, the purchase sometimes does not reflect. Please use the 'Restore Purchases' button to restore your purchase.`
      },
      {
        ques: `How is the payment charged?`,
        ans: `For details on payment, please refer to the points below:
          <ol class="pt-2">
            <li>Payment will be charged to your iTunes/Play Store account at confirmation of purchase.</li>
            <li>Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period.</li>
            <li>Account will be charged for renewal within 24 hours of the end of the current period, and the cost of the renewal will be provided.</li>
            <li>Subscriptions and Auto Renewals may be managed by the user in the App/Play Store settings after purchase.</li>
            <li>Any unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription to that publication.</li>
          </ol>
        `
      },
      {
        ques: `Apple/google store is not supported in my country but I want a premium subscription. What can I do?`,
        ans: `Don’t worry, we understand. Click ` + supportForm + ` to contact support and we will help you.`
      },
      {
        ques: `I am trying to make a purchase through the store but it’s failing. Can you help me?`,
        ans: `Your business is valuable to us. Please click ` + supportForm + ` to contact support and we will help you at the earliest.`
      }
    ]
  },
  {
    category: `ads`,
    disp_name: `Ads`,
    ques_list: [
      {
        ques: `Why should I watch ads?`,
        ans: `In order to earn free VPN time, you are required to watch ads. These ad impressions help us generate revenue which is used in keeping our servers running and providing you with good quality VPN service. We do not monetize by collecting, storing, or selling your data, and thus to keep providing you with free VPN we have this Ad-based model. Alternatively, if you do not wish to watch ads you can opt for our Premium mode.`
      },
      {
        ques: `Ads are not loading for me. What do I do?`,
        ans: `That should not have happened. Please try the below-mentioned steps:
          <ol class="pt-2">
            <li>Make sure you have a working internet connection</li>
            <li>Restart the app or</li>
            <li>Contact support and we’ll fix it for you.</li>
          </ol>
        `
      },
      {
        ques: `I watched ads but did not get VPN time, what do I do?`,
        ans: `Sometimes ad networks have faults and do not notify us correctly when you watch an ad. You could try again. However, if this persists please contact support.`
      },
      {
        ques: `I am seeing offensive ads, can I turn them off?`,
        ans: `Please contact support (possibly with a screenshot) when you see such an ad. We can always contact our Ad providers and ask them to stop.`
      },
      {
        ques: `Can I get VPN time without watching ads?`,
        ans: `Currently, the only way to earn VPN time for free is by watching ads. However, if you want a pure ad-free VPN experience with numerous other benefits, consider upgrading to our Premium plan.`
      },
      {
        ques: `Will the earned VPN time run out if I am not using the app?`,
        ans: `VPN time earned by watching ads runs out even if you’re not connected. You can always watch more ads when you want to earn more VPN time - there is no limit to how many ads you can watch.`
      }
    ]
  },
  {
    category: `support`,
    disp_name: `Support`,
    ques_list: [
      {
        ques: `How can I contact the support team?`,
        ans: `You can reach out to us at ` + supportEmail + ` or if you have a specific question or concern use the form by clicking ` + supportForm + `.`
      },
      {
        ques: `How long does the support team take to revert back?`,
        ans: `We try to resolve all queries within 24 hours (Mon-Fri). Be assured, we do get back to all messages that come to us.`
      }
    ]
  },
  {
    category: `issues`,
    disp_name: `Issues`,
    ques_list: [
      {
        ques: `My VPN is not connecting? What can I do?`,
        ans: `Governments, schools, ISP's and cell networks work overtime to disrupt our service and block VPN servers. While we automatically try to find an unblocked server for you, it can take time. Alternatively, you can disconnect your VPN and reconnect to a different region, or tap on Alternate IP to connect to a new node in the same region.`
      },
      {
        ques: `My app is saying it is detecting a proxy/VPN and not allowing access to content. What can I do?`,
        ans: `Some apps detect a proxy/VPN based on the VPN server's IP address. You can use the 'Try Alternate IP' button to connect to another server or try changing your region.`
      },
      {
        ques: `The connection speed is slow, what should I do?`,
        ans: `Connection speed is affected by the user network. You can try connecting through an alternate server. However, if the issue still persists, contact support.`
      },
      {
        ques: `I am not able to open certain websites, what should I do?`,
        ans: `In such a case you can try changing the region or try the alternate server option. If you are facing an ongoing issue with a specific website please contact support.`
      },
      {
        ques: `VPN is not working. What should I do?`,
        ans: `This should not have happened. Please follow the below-mentioned steps:
          <ol class="pt-2">
            <li>Open the app menu in the top right corner</li>
            <li>Click on Support > Contact Support >Trouble connecting VPN</li>
            <li>Let the app collect diagnostics before tapping on ‘Send Support Request’ to send us the diagnostics report with a brief description of the issue.</li>
          </ol>
          This will help us diagnose and fix any issues at the earliest.`
      }
    ]
  }
];