import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function News() {
    return (
    <div>
        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="ESPN"
  options={{height: 800, width: 500}}
/>

        {/* <TwitterTweetEmbed
  tweetId={'1631080648999075841'}
/> */}
      
    </div>
    )
}