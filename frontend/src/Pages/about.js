import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


export default function About() {
    return (<div className="centerContent">
    <div className="selfCenter spaceBetween">
    <div align="center">
      <TwitterTimelineEmbed
        onLoad={function noRefCheck(){}}
        options={{
          height: 1000
        
          
        }}
        screenName="ShreyasKamath18"
        sourceType="Profile"
        theme="dark"
        tweetLimit={100}
        placeholder={<div style={{backgroundColor: 'black', color: 'white', margin: 10, padding: 10}}>Loading...</div>}
      />
    </div>
  </div>
  </div>)
}