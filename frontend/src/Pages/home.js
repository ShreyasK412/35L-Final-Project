import './home.css';

export default function Home() {
    return(
        <>
        <div class="body">
        <h1 class = "title">sports central</h1>
        <div class="topictext">
                <p>Welcome to your new way to interact with sports.</p>
                <br></br>
            </div>
            <div class="youtubeplayer" align="center">
                <iframe width="966" height="543" src="https://www.youtube.com/embed/2S6PGsZpQqk" ></iframe>
            </div>
            <div class="topictext">
                <p>We've worked extensively on a new webapp that combines all the text you'll need into one area.</p>
            </div>
            <div class="paragraphtext">
                <p>This new app is the new way to interact with all your favorite online sports content, from sports scores, upcoming matches, tweet history from your favorite athletes and organizations, and also a discussion thread to talk about the lastest happenings with your favorite teams and sports.</p>
                <p>You won't find anything like this anywhere else.</p>
            </div>
        </div>
        

        </>
    )
}
