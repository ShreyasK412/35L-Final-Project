
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function News() { 
    return (
    <div className="centerContent">
  <div className="selfCenter spaceBetween">
    <TwitterTimelineEmbed
      onLoad={function noRefCheck(){}}
      options={{
        height: 800,
      
        
      }}
      screenName="Underdog__NBA"
      sourceType="profile"
      theme="dark"
      tweetLimit={50}
    />
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