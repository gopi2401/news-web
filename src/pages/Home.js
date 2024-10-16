import React, { useEffect, useState } from 'react';
import { DataContext } from '../utils/DataProvider';
import Pagination from '../components/Pagination';
import Skeleton from '../components/skeleton';
// const d = [
//     {
//         "source": {
//             "id": "the-washington-post",
//             "name": "The Washington Post"
//         },
//         "author": "David Ovalle",
//         "title": "Ovesrdose deaths decline sharply after years of fentanyl-fueled surges - The Washington Post",
//         "description": "Public health officials and researchers say the drop may reflect multiple forces, including access to treatment and overdose-reversal medication.",
//         "url": "https://www.wasxhingtonpost.com/health/2024/10/07/overdose-deaths-decline/",
//         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OCQKAHPFQY5I77DACKXLD6ZUOI.jpg&w=1440",
//         "publishedAt": "2024-10-07T12:37:49Z",
//         "content": "Overdose deaths appear to be declining sharply in the United States, a sign that efforts to combat the scourge of lethalfentanyl may be paying off even as experts caution that the toll remains unacce… [+7531 chars]"
//     },
//     {
//         "source": {
//             "id": "the-washington-post",
//             "name": "The Washington Post"
//         },
//         "author": "David Ovalle",
//         "title": "Overdose deaths decline sharply after years of fentanyl-fueled surges - The Washington Post",
//         "description": "Public health officials and researchers say the drop may reflect multiple forces, including access to treatment and overdose-reversal medication.",
//         "url": "https://www.washingtonpost.com/health/2024/10/07/overdose-deaths-decline/",
//         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OCQKAHPFQY5I77DACKXLD6ZUOI.jpg&w=1440",
//         "publishedAt": "2024-10-07T12:37:49Z",
//         "content": "Overdose deaths appear to be declining sharply in the United States, a sign that efforts to combat the scourge of lethalfentanyl may be paying off even as experts caution that the toll remains unacce… [+7531 chars]"
//     },
//     {
//         "source": {
//             "id": "nbc-news",
//             "name": "NBC News"
//         },
//         "author": "Arata Yamamoto, Mithil Aggarwal",
//         "title": "Japan's government admits doctoring cabinet photo after online storm - NBC News",
//         "description": "The Japanese government on Monday said it doctored images of its new cabinet, following mockery from eagle-eyed social media users who spotted the editing over the untidy suits of the country’s top leaders.",
//         "url": "https://www.nbcnews.com/news/world/japan-government-admits-doctoring-cabinet-photo-kate-royals-rcna174225",
//         "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-10/241007-japan-cabinet-mb-0844-3038df.jpg",
//         "publishedAt": "2024-10-07T11:57:01Z",
//         "content": "Although minor, the edits add the Japanese government to a growing list of administrations and royal families around the world who have manipulated their official pictures, raising questions about ho… [+1195 chars]"
//     },
//     {
//         "source": {
//             "id": "reuters",
//             "name": "Reuters"
//         },
//         "author": "Reuters",
//         "title": "Hezbollah missiles hit Israel's Haifa in escalating conflict - Reuters",
//         "description": null,
//         "url": "https://www.reuters.com/world/middle-east/hezbollah-strikes-israel-gaza-war-anniversary-fears-grow-over-middle-east-2024-10-07/",
//         "urlToImage": null,
//         "publishedAt": "2024-10-07T11:38:32Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "cbs-news",
//             "name": "CBS News"
//         },
//         "author": "CBS Miami Team, Hunter Geisel",
//         "title": "South Florida cities declare states of emergency ahead of heavy rain and Hurricane Milton - CBS News",
//         "description": "South Florida is seeing periods of heavy rain, some areas are already seeing flooding, especially Broward County.",
//         "url": "https://www.cbsnews.com/miami/news/south-florida-states-of-emergency-flooding-heavy-rain-hurricane-milton/",
//         "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/10/06/85d09abf-1db6-4249-a4a5-27652909f342/thumbnail/1200x630/1bace63d226fd497959a51a12fb8f7e3/hollywood-flooding-10-5-2024.jpg?v=0736ad3ef1e9ddfe1218648fe91d6c9b",
//         "publishedAt": "2024-10-07T11:25:19Z",
//         "content": "FORT LAUDERDALE — As South Florida is seeing periods of heavy rain and Hurricane Milton strengthens, some areas are already seeing flooding and taking the necessary precautions to prepare.\r\nOn Monday… [+6947 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "BBC News"
//         },
//         "author": null,
//         "title": "Russia jails US citizen Stephen Hubbard, 72, on mercenary charges - BBC.com",
//         "description": "Prosecutors said Stephen Hubbard was fighting on the Ukrainian side when he was captured by Russian forces in 2022.",
//         "url": "https://www.bbc.com/news/articles/crr5n4nlg79o",
//         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a22e/live/83914ac0-8497-11ef-bf4c-1f355eb87d3c.jpg",
//         "publishedAt": "2024-10-07T11:01:58Z",
//         "content": "A Russian court has sentenced a 72-year-old American citizen to almost seven years in jail for allegedly fighting as a mercenary for Ukraine.\r\nProsecutors said Stephen James Hubbard was serving in a … [+1852 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Yahoo Entertainment"
//         },
//         "author": "Alice Gledhill and James Hirai",
//         "title": "Key US Yields Hit 4% for First Time Since August on Fed Rethink - Yahoo Finance",
//         "description": "(Bloomberg) -- Key US Treasury yields are back at 4%, a level last seen in August, as a blowout jobs report undercut chances for another big interest-rate...",
//         "url": "https://finance.yahoo.com/news/key-us-yields-near-4-074137831.html/",
//         "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
//         "publishedAt": "2024-10-07T10:54:25Z",
//         "content": "(Bloomberg) -- Key US Treasury yields are back at 4%, a level last seen in August, as a blowout jobs report undercut chances for another big interest-rate reduction from the Federal Reserve.\r\nMost Re… [+3020 chars]"
//     },
//     {
//         "source": {
//             "id": "cbs-news",
//             "name": "CBS News"
//         },
//         "author": null,
//         "title": "Mayor reportedly beheaded days after taking office in Mexico amid surge in cartel violence - CBS News",
//         "description": "Alejandro Arcos' murder came days after the killing of another city official. according to the Institutional Revolutionary Party.",
//         "url": "https://www.cbsnews.com/news/mayor-alejandro-arcos-murdered-after-taking-office-mexico/",
//         "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/10/07/a9ffb3be-29d7-40ee-8e07-bfb404bb85df/thumbnail/1200x630/11728a69dfa01bac3cb9d18a433af539/gettyimages-2176377038.jpg?v=0736ad3ef1e9ddfe1218648fe91d6c9b",
//         "publishedAt": "2024-10-07T10:37:16Z",
//         "content": "The mayor of a city in southern Mexico has been murdered less than a week after taking office, authorities said Sunday, the latest in a series of attacks on politicians in the violence-plagued Latin … [+3322 chars]"
//     },
//     {
//         "source": {
//             "id": "cnn",
//             "name": "CNN"
//         },
//         "author": "Ben Morse",
//         "title": "Ravens claim wild overtime victory, Texans snatch last-second win and Jayden Daniels keeps rolling: NFL Week 5 Sunday review - CNN",
//         "description": "Week 5 in the NFL had everything: late drama, historic achievements and a game across the Atlantic in London.",
//         "url": "https://www.cnn.com/2024/10/07/sport/nfl-week-5-sunday-review-spt-intl/index.html",
//         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24280753261813.jpg?c=16x9&q=w_800,c_fill",
//         "publishedAt": "2024-10-07T10:22:00Z",
//         "content": "Week 5 in the NFL had everything: late drama, historic achievements and a game across the Atlantic in London.\r\nSundays action began with the Minnesota Vikings victory over the New York Jets at the To… [+8897 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "New York Post"
//         },
//         "author": "Ronny Reyes",
//         "title": "These 97 people are still being held by Hamas a year after Oct. 7 attacks - New York Post ",
//         "description": "Of the 251 hostages who were kidnapped by Hamas on Oct. 7, 97 remain in Gaza after a year in captivity, including Americans Edan Alexander, Itay Chen, Sagui Dekel Chen, Gad Haggai, Judi Weinstein H…",
//         "url": "https://nypost.com/2024/10/07/world-news/faces-of-oct-7-hostages-97-people-still-held-by-hamas-in-gaza/",
//         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/10/newspress-collage-0r3m9b4zf-1728251272118.jpg?quality=75&strip=all&1728236918&w=1024",
//         "publishedAt": "2024-10-07T10:02:00Z",
//         "content": "Thousands of lives were forever altered and upended when Hamas terrorists invaded Israel on Oct. 7, butchering more than 1,200 people and kidnapping 251 others. \r\nThose hostages whom Hamas abducted a… [+3623 chars]"
//     },
//     {
//         "source": {
//             "id": "business-insider",
//             "name": "Business Insider"
//         },
//         "author": "Alex Morrell",
//         "title": "Activist investor Starboard has informed Pfizer it has taken a stake - Business Insider",
//         "description": "Activist investor Starboard Value is looking to shake up the pharma giant's sagging stock price after taking a stake reportedly worth about $1bn.",
//         "url": "https://www.businessinsider.com/starboard-activist-significant-stake-in-drugmaker-pfizer-2024-10",
//         "urlToImage": "https://i.insider.com/67032ce2198738e3a70e95d6?width=1200&format=jpeg",
//         "publishedAt": "2024-10-07T09:40:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "bloomberg",
//             "name": "Bloomberg"
//         },
//         "author": "Henry Meyer, Dan Williams, Dana Khraiche",
//         "title": "Israel Strikes Across Gaza to Thwart Renewed Hamas Attacks - Bloomberg",
//         "description": "Hamas fired a barrage of rockets toward Tel Aviv after Israel bombed a number of targets connected to the militant group in Gaza, as fighting escalated after a year of war.",
//         "url": "https://www.bloomberg.com/news/articles/2024-10-07/israel-strikes-across-gaza-to-thwart-renewed-hamas-attacks",
//         "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iGHHpA1UUUgM/v0/1200x800.jpg",
//         "publishedAt": "2024-10-07T09:23:26Z",
//         "content": "Hamas fired a barrage of rockets toward Tel Aviv after Israel bombed a number of targets connected to the militant group in Gaza, as fighting escalated after a year of war. \r\nSubscribe to the Bloombe… [+60 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Spaceflight Now"
//         },
//         "author": null,
//         "title": "Live coverage: ESA’s Hera spacecraft aims to launch on SpaceX’s Falcon 9 rocket as Hurricane Milton takes aim at Florida - Spaceflight Now",
//         "description": null,
//         "url": "https://spaceflightnow.com/2024/10/07/live-coverage-esas-hera-mission-to-launch-on-spacex-falcon-9-rocket-from-cape-canaveral/",
//         "urlToImage": null,
//         "publishedAt": "2024-10-07T09:12:21Z",
//         "content": "An artist’s rendering of the Hera spacecraft along with CubeSats Milani and Juventas around the asteroid, Dimorphous. Graphic: ESA\r\nThe European Space Agency and SpaceX are hoping for good enough wea… [+8291 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Whitehouse.gov"
//         },
//         "author": "The White House",
//         "title": "Statement from President Joe Biden Marking One Year Since the October 7th Attack - The White House",
//         "description": "On this day last year, the sun rose on what was supposed to be a joyous Jewish holiday. By sunset, October 7 had become the deadliest day for the Jewish",
//         "url": "https://www.whitehouse.gov/briefing-room/statements-releases/2024/10/07/statement-from-president-joe-biden-marking-one-year-since-the-october-7th-attack/",
//         "urlToImage": "https://www.whitehouse.gov/wp-content/uploads/2021/01/wh_social-share.png",
//         "publishedAt": "2024-10-07T09:00:00Z",
//         "content": "On this day last year, the sun rose on what was supposed to be a joyous Jewish holiday. By sunset, October 7 had become the deadliest day for the Jewish people since the Holocaust. Today marks one ye… [+2946 chars]"
//     },
//     {
//         "source": {
//             "id": "cbs-news",
//             "name": "CBS News"
//         },
//         "author": null,
//         "title": "FDA's promised rules on pulse oximeters unlikely to end decades of racial bias - CBS News",
//         "description": "For decades, widely used pulse oximeters have underestimated the oxygen needs of darker-skinned patients. Will the FDA's new guidelines fix that?",
//         "url": "https://www.cbsnews.com/news/pulse-oximeters-new-fda-rule/",
//         "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2022/11/01/c4c82be8-9efa-4ce5-961b-fbfe9d2418b4/thumbnail/1200x630/5dafa60e090f6d54180eac1046db5dc7/ap22301672385237.jpg?v=0736ad3ef1e9ddfe1218648fe91d6c9b",
//         "publishedAt": "2024-10-07T09:00:00Z",
//         "content": "Oakland, California — The patient was in his 60s, an African American man with emphysema. The oximeter placed on his fingertip registered well above the 88% blood oxygen saturation level that signals… [+10164 chars]"
//     },
//     {
//         "source": {
//             "id": "fox-news",
//             "name": "Fox News"
//         },
//         "author": "Christine Rousselle",
//         "title": "North Carolina woman eats nothing but sardines, loses 35 pounds: 'This is not a diet' - Fox News",
//         "description": "A woman in North Carolina has eaten only sardines for the past three months and does not plan on eating carbohydrates ever again, she told Fox News Digital.",
//         "url": "https://www.foxnews.com/food-drink/north-carolina-woman-eats-nothing-sardines-loses-35-pounds-this-not-diet",
//         "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/sardine-split.jpg",
//         "publishedAt": "2024-10-07T09:00:00Z",
//         "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+4332 chars]"
//     },
//     {
//         "source": {
//             "id": "cnn",
//             "name": "CNN"
//         },
//         "author": "Ashley Strickland",
//         "title": "How to see the elusive Draconid meteor shower - CNN",
//         "description": "Look up Monday night for a chance to see the Draconid meteor shower. It’s a smaller meteor shower than some, but there is always the chance for a meteor storm.",
//         "url": "https://www.cnn.com/2024/10/07/science/draconid-meteor-shower-how-to-watch/index.html",
//         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2-63001901.jpg?c=16x9&q=w_800,c_fill",
//         "publishedAt": "2024-10-07T08:56:00Z",
//         "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nKeep your eyes on the night skies to see the elusive D… [+3954 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Hindustan Times"
//         },
//         "author": "Bhavika Rathore",
//         "title": "Joaquin Phoenix's Joker 2 deliver disappointing numbers at the US Box office after a flop opening - Hindustan Times",
//         "description": "Despite high expectations, Joker: Folie a Deux struggled at the box office. | Hollywood",
//         "url": "https://www.hindustantimes.com/entertainment/hollywood/joaquin-phoenixs-joker-2-deliver-disappointing-numbers-at-the-us-box-office-after-a-flop-opening-101728280779000.html",
//         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/10/07/1600x900/FILM-JOKER-FOLIE-A-DEUX-PREMIERE-48_1728283991929_1728284040156.JPG",
//         "publishedAt": "2024-10-07T07:22:34Z",
//         "content": "Joker: Folie a Deux, one of the most anticipated films of the year, turned out to be a huge disappointment at the US Box Office and worldwide. While it opened at the top spot in North America, the mo… [+2119 chars]"
//     },
//     {
//         "source": {
//             "id": "espn",
//             "name": "ESPN"
//         },
//         "author": "Todd Archer",
//         "title": "Dak's late TD gives Cowboys 'one to remember' - ESPN",
//         "description": "Cowboys quarterback Dak Prescott threw the winning touchdown pass with 20 seconds left Sunday night in a crucial victory against the Steelers.",
//         "url": "https://www.espn.com/nfl/story/_/id/41656720/cowboys-dak-prescott-delivers-last-minute-win-vs-steelers",
//         "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1007%2Fr1397165_1296x729_16%2D9.jpg",
//         "publishedAt": "2024-10-07T07:11:00Z",
//         "content": "PITTSBURGH -- As lightning lit up the sky outside Acrisure Stadium, delaying the start of Sunday night's game between the Dallas Cowboys and Pittsburgh Steelers, Dak Prescott had a message for his te… [+4469 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "CNBC"
//         },
//         "author": "Yeo Boon Ping",
//         "title": "CNBC Daily Open: September’s blockbuster jobs report changes the calculus - CNBC",
//         "description": "The jobs report affirms recession unlikely for now. It also almost guarantees the Fed will reduce rates by a quarter point in November.",
//         "url": "https://www.cnbc.com/2024/10/07/cnbc-daily-open-septembers-jobs-report-changes-the-calculus.html",
//         "urlToImage": "https://image.c  nbcfm.com/api/v1/image/108043920-1728280212553-gettyimages-2021277635-ocr-l-a2-jobfair-08-pb.jpeg?v=1728280240&w=1920&h=1080",
//         "publishedAt": "2024-10-07T06:30:01Z",
//         "content": "This report is from today's CNBC Daily Open, our international markets newsletter. CNBC Daily Open brings investors up to speed on everything they need to know, no matter where they are. Like what yo… [+3847 chars]"
//     },
//     {
//         "source": {
//             "id": "cnn",
//             "name": "CNN"
//         },
//         "author": "Kathleen Magramo, Lex Harvey",
//         "title": "Israel marks October 7 attack anniversary as Middle East conflict escalates - CNN",
//         "description": "Israel marks the first anniversary of the October 7 Hamas attacks as conflict in the Middle East escalates. Follow for live updates.",
//         "url": "https://www.cnn.com/world/live-news/israel-hamas-attack-anniversary-war-11-07-24-intl-hnk/index.html",
//         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2175912792.jpg?c=16x9&q=w_800,c_fill",
//         "publishedAt": "2024-10-07T06:29:00Z",
//         "content": "There were demonstrations, marches and memorials across the world this weekend ahead of the anniversary of Hamas October 7 attacks on Israel.\r\nLarge crowds marched through the streets of Barcelona, J… [+1569 chars]"
//     }
// ]
function Home() {
    const { loading, MsgLoad } = React.useContext(DataContext);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchTopHeadlines = async () => {
            try {
                loading.setLoading(true);
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`,
                    {
                        headers: {
                            "origin": "http://localhost:3000/",
                            "referer": "http://localhost:3000/",
                            "sec-fetch-site": null
                        }
                    }
                );
                const data = await response.json();
                if (data.status === 'error') { MsgLoad.setMsg({ load: true, message: data.message }) } else {
                    setArticles(data.articles.filter(
                        (item) => item.title !== "[Removed]"
                    ));
                }
                loading.setLoading(false);
            } catch (error) {
                loading.setLoading(false);
                MsgLoad.setMsg({ load: true, message: 'Failed to fetch' })
            }
        };
        fetchTopHeadlines();
        // loading.setLoading(true);
        // setTimeout(() => {
        //     setArticles(d);
        //     loading.setLoading(false);
        // }, 1000)
        // eslint-disable-next-line
    }, []);


    return (
        <div className='w-full flex flex-col items-center min-h-[calc(100vh-300px)]'>
            <h1 className='text-center font-bold text-2xl my-5 h-10'>
                <span className='text-red-600'>Top</span> Headlines
            </h1>
            <div className='flex-auto flex justify-center items-center w-full'>
                {!loading.loading ? (articles && articles.length > 0 ? (
                    <Pagination articles={articles} ></Pagination>
                ) : (
                    <h1 className='text-center text-gray-500'>No articles available at the moment.</h1>
                )) : (<Skeleton />)}
            </div>
        </div>
    );
}

export default Home;
