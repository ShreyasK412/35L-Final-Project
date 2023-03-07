
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function News() { 
    return (
    <div className="centerContent">
  <div className="selfCenter spaceBetween">
  <div align="center">
    <TwitterTimelineEmbed
      onLoad={function noRefCheck(){}}
      options={{
        height: 1000
      
        
      }}
      screenName="Underdog__NBA"
      sourceType="profile"
      theme="dark"
      tweetLimit={100}
      placeholder={<div style={{backgroundColor: 'black', color: 'white', margin: 10, padding: 10}}>Loading...</div>}
    />
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