
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import './news.css'

export default function News() { 
    return (
      <div class = "tweet_box">
    <div className="centerContent">
  <div className="selfCenter spaceBetween">
  <div align="center">
    NBA NEWS
    <TwitterTimelineEmbed
      onLoad={function noRefCheck(){}}
      options={{
        height: 1000
        
        
      }}
      screenName="Underdog__NBA"
      sourceType="profile"
      theme="dark"
      tweetLimit={100}
      placeholder={<div style={{backgroundColor: 'black', color: 'white', margin: 10, padding: 10}}>Loading NBA News...</div>}
    />
SOCCER NEWS
<TwitterTimelineEmbed
      onLoad={function noRefCheck(){}}
      options={{
        height: 1000
      
        
      }}
      screenName="SkySportsPL"
      sourceType="profile"
      theme="dark"
      tweetLimit={100}
      placeholder={<div style={{backgroundColor: 'black', color: 'white', margin: 10, padding: 10}}>Loading Prem News...</div>}
    />
    NFL NEWS
     <TwitterTimelineEmbed
      onLoad={function noRefCheck(){}}
      options={{
        height: 1000
      
        
      }}
      screenName="Underdog__NFL"
      sourceType="profile"
      theme="dark"
      tweetLimit={100}
      placeholder={<div style={{backgroundColor: 'black', color: 'white', margin: 10, padding: 10}}>Loading NFL News...</div>}
    />
  </div>
  </div>
</div>
</div>




//     return (
//     <div>
//         <TwitterTimelineEmbed
//   sourceType="profile"
//   screenName="ESPN"
//   options={{height: 800, width: 500}}
//       theme="dark"
//       widgetId="539487832448843776"
     
    
      
      
// />



//         {/* <TwitterTweetEmbed
//   tweetId={'1631080648999075841'}
// /> */}
      
//     </div>
    )
}