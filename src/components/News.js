import React, { Component } from "react";
import { Row, Col } from "antd";
import NewsCard from "./NewsCard";
import "./News.css";

export class News extends Component {
  //   articles = [
  //     {
  //       source: {
  //         id: "associated-press",
  //         name: "Associated Press",
  //       },
  //       author: "PETER SMITH, HOLLY MEYER",
  //       title:
  //         "Southern Baptists narrowly reject formal ban on churches with any women pastors - The Associated Press",
  //       description:
  //         "Delegates at the Southern Baptist Convention’s annual meeting have narrowly rejected a proposal to enshrine a ban on churches with women pastors in the denomination’s constitution. Opponents argued the proposal was unnecessary because the SBC already has a wa…",
  //       url: "https://apnews.com/article/southern-baptist-churches-women-pastors-34edfd1578e609c3acb187ab90f0255e",
  //       urlToImage:
  //         "https://dims.apnews.com/dims4/default/3f8a132/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fda%2Ffe%2F58cd6e416ee0647b2984341cd510%2F6603a6ce567743ab9aff352811f40fb0",
  //       publishedAt: "2024-06-12T16:07:00Z",
  //       content:
  //         "INDIANAPOLIS (AP) Southern Baptists narrowly rejected a proposal Wednesday to enshrine a ban on churches with women pastors in the denominations constitution after opponents argued it was unnecessary… [+6566 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Nbcsportsboston.com",
  //       },
  //       author: "Justin Leger",
  //       title:
  //         "Doctor provides insight on Porzingis' 'rare' leg injury - Yahoo Sports",
  //       description:
  //         'Orthopedist Dr. John Ponti joined Early Edition to provide insight on Kristaps Porzingis\' "rare" leg injury and share the likelihood of the Celtics big man...',
  //       url: "https://www.nbcsportsboston.com/nba/boston-celtics/doctor-insight-kristaps-porzingis-injury-medial-retinaculum-tear/620698/?partner=yahoo",
  //       urlToImage:
  //         "https://media.zenfs.com/en/csnne.com/cfadaddf9891b66e9140d662927e6949",
  //       publishedAt: "2024-06-12T16:06:21Z",
  //       content:
  //         "Doctor provides insight on Porzingis' rare' leg injury originally appeared on NBC Sports Boston\r\nTuesday's discouraging update on Kristaps Porzingis' injury left Boston Celtics fans scratching their … [+2602 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Gizmodo.com",
  //       },
  //       author: "Passant Rabie",
  //       title:
  //         "Boeing's Starliner Now Has 5 Leaks While Parked Outside the ISS - Gizmodo",
  //       description:
  //         "Starliner teams detected a helium leak before launch, two more after liftoff, and now a fourth and fifth leak with the vehicle docked at the ISS. Oh my.",
  //       url: "https://gizmodo.com/boeing-starliner-spacecraft-fifth-helium-leak-iss-nasa-1851534977",
  //       urlToImage:
  //         "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/54d4a34837543f8cbae01d2ee7934c5a.png",
  //       publishedAt: "2024-06-12T15:55:00Z",
  //       content:
  //         "Following an iffy docking at the International Space Station last week, Boeing managed to deliver a pair of NASA astronauts to the orbital lab. The stressful Starliner saga continues as the crew caps… [+3617 chars]",
  //     },
  //     {
  //       source: {
  //         id: "reuters",
  //         name: "Reuters",
  //       },
  //       author: "Reuters",
  //       title:
  //         "US consumer prices unchanged in May; rate-cut expectations rise - Reuters",
  //       description: null,
  //       url: "https://www.reuters.com/markets/us/us-consumer-prices-flat-may-defying-expectations-slight-rise-2024-06-12/",
  //       urlToImage: null,
  //       publishedAt: "2024-06-12T15:49:00Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "BBC News",
  //       },
  //       author: null,
  //       title:
  //         "Gaza ceasefire plan in balance US says Hamas proposes 'changes' - BBC.com",
  //       description:
  //         'US Secretary of State Antony Blinken says some of the changes are "workable" and some not.',
  //       url: "https://www.bbc.com/news/articles/c0661dnmzezo",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/38f4/live/b35a4280-28c5-11ef-acf5-2f465150f8a8.jpg",
  //       publishedAt: "2024-06-12T15:43:48Z",
  //       content:
  //         'By Tom Bateman, BBC state department correspondent  David Gritten, BBC News\r\nUS Secretary of State Antony Blinken says Hamas has proposed "numerous changes" to a US-backed plan for a Gaza ceasefire a… [+5508 chars]',
  //     },
  //     {
  //       source: {
  //         id: "the-verge",
  //         name: "The Verge",
  //       },
  //       author: "Emma Roth",
  //       title:
  //         "The EU slaps additional tariffs on Chinese EV imports - The Verge",
  //       description:
  //         "The European Union is placing additional tariffs of up to 38 percent on electric vehicles imported from China, as it looks to remove their “unfair competitive advantage.”",
  //       url: "https://www.theverge.com/2024/6/12/24176871/eu-additional-tariffs-chinese-ev-imports",
  //       urlToImage:
  //         "https://cdn.vox-cdn.com/thumbor/cSBU5lD5hrjz8arXVIVyBeI4A6A=/0x0:4000x2667/1200x628/filters:focal(2000x1334:2001x1335)/cdn.vox-cdn.com/uploads/chorus_asset/file/25488453/2154480997.jpg",
  //       publishedAt: "2024-06-12T14:30:14Z",
  //       content:
  //         "The EU slaps additional tariffs on Chinese EV imports\r\nThe EU slaps additional tariffs on Chinese EV imports\r\n / Chinese EVs imported to the European Union now face additional tariffs of up to 38 per… [+1670 chars]",
  //     },
  //     {
  //       source: {
  //         id: "google-news",
  //         name: "Google News",
  //       },
  //       author: "Reuters",
  //       title: "Fire in Kuwait building kills 49 foreign workers - Reuters",
  //       description: null,
  //       url: "https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL21pZGRsZS1lYXN0L2xlYXN0LTM1LXBlb3BsZS1raWxsZWQtZmlyZS1zb3V0aGVybi1rdXdhaXQtc3RhdGUtbWVkaWEtMjAyNC0wNi0xMi_SAQA?oc=5",
  //       urlToImage: null,
  //       publishedAt: "2024-06-12T14:13:00Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Rolling Stone",
  //       },
  //       author: "Rolling Stone",
  //       title: "The Best Songs of 2024 So Far - Rolling Stone",
  //       description:
  //         "The Best Songs of 2024 So Far: Olivia Rodrigo, Kendrick Lamar, Sabrina Carpenter, and more",
  //       url: "http://www.rollingstone.com/music/music-lists/best-songs-of-2024-so-far-1235031994/",
  //       urlToImage:
  //         "https://www.rollingstone.com/wp-content/uploads/2024/06/best-songs-so-far-illo-2024.jpg?w=1600&h=900&crop=1",
  //       publishedAt: "2024-06-12T14:00:41Z",
  //       content:
  //         "Image Credit: Griffin Lots for Rolling Stone\r\nMost of Heavy, SIR’s highly anticipated follow-up to his excellent 2019 LP, Chasing Summer, finds him burdened by internal tumult particularly, as he tol… [+482 chars]",
  //     },
  //     {
  //       source: {
  //         id: "cbs-news",
  //         name: "CBS News",
  //       },
  //       author: "Paulina Smolinski, Alyssa Spady, Clare Hymes",
  //       title:
  //         "Hunter Biden's options for appeal after gun conviction - CBS News",
  //       description:
  //         "Hunter Biden's potential appeal of his gun conviction might reference one of these constitutional arguments.",
  //       url: "https://www.cbsnews.com/news/hunter-biden-appeal-gun-conviction/",
  //       urlToImage:
  //         "https://assets2.cbsnewsstatic.com/hub/i/r/2024/06/12/edca4ff3-7a6f-4298-b1e8-7f192deb968a/thumbnail/1200x630g2/f3c7097e3908a6feb7b0f8ec3b94cde3/gettyimages-2155936346.jpg?v=e6a7e661b3d1c604b3ae2bec0d66302a",
  //       publishedAt: "2024-06-12T13:59:30Z",
  //       content:
  //         "Hunter Biden was found guilty of federal felony gun charges Tuesday by a Delaware jury, but the first son still has avenues for appeal to try to overcome his conviction. Before his trial concluded, h… [+5469 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "CBS Sports",
  //       },
  //       author: null,
  //       title:
  //         "2024 U.S. Open picks, predictions, odds, field: Golf expert eyeing Collin Morikawa at Pinehurst - CBS Sports",
  //       description:
  //         "Sia Nejad reveals his U.S. Open 2024 picks, props, and sleepers for the year's third golf major",
  //       url: "https://www.cbssports.com/golf/news/2024-u-s-open-picks-predictions-odds-field-golf-expert-eyeing-collin-morikawa-at-pinehurst/",
  //       urlToImage:
  //         "https://sportshub.cbsistatic.com/i/r/2022/04/06/fdec49f8-6807-46d7-aeaf-1d42048eb758/thumbnail/1200x675/369021897807eadc541cd8ad557bd1a4/collin-morikawa-usatsi.jpg",
  //       publishedAt: "2024-06-12T13:35:23Z",
  //       content:
  //         "Four-time major winner Rory McIlroy will once again attempt to end his winless drought in majors when he tees off in the 2024 U.S. Open beginning Thursday at Pinehurst No. 2. Since his last major vic… [+6153 chars]",
  //     },
  //     {
  //       source: {
  //         id: "techcrunch",
  //         name: "TechCrunch",
  //       },
  //       author: "Christine Hall",
  //       title:
  //         "Here’s everything Apple announced at the WWDC 2024 keynote, including Apple Intelligence, Siri makeover - TechCrunch",
  //       description:
  //         "The TechCrunch the team runs down all of the biggest news from the Apple WWDC 2024 keynote in an easy-to-skim digest.",
  //       url: "https://techcrunch.com/2024/06/12/everything-apple-announced-wwdc-2024/",
  //       urlToImage:
  //         "https://techcrunch.com/wp-content/uploads/2024/06/Tim-Cook-Apple-WWDC.png?resize=1200,678",
  //       publishedAt: "2024-06-12T13:35:00Z",
  //       content:
  //         "Its WWDC 2024 keynote time! Each year Apple kicks off its Worldwide Developers Conference with a few hours of just straight announcements, like the long-awaited Apple Intelligence and a makeover for … [+13146 chars]",
  //     },
  //     {
  //       source: {
  //         id: "reuters",
  //         name: "Reuters",
  //       },
  //       author: "Reuters",
  //       title:
  //         "Russian barrage leaves Kyiv residents without power and water - Reuters",
  //       description: null,
  //       url: "https://www.reuters.com/world/europe/russian-barrage-leaves-kyiv-residents-without-power-water-2024-06-12/",
  //       urlToImage: null,
  //       publishedAt: "2024-06-12T13:29:00Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "BuzzFeed News",
  //       },
  //       author: "Stephanie Soteriou",
  //       title: "Matty Healy's Mom Confirms Gabbriette Engagement - BuzzFeed News",
  //       description:
  //         "Denise, who was previously caught liking an Instagram post shading Matty’s ex Taylor Swift, has said that Gabbriette is “everything” she would want in a daughter-in-law.",
  //       url: "https://www.buzzfeednews.com/article/stephaniesoteriou/matty-healy-mom-denise-welch-confirms-gabbriette-engagement",
  //       urlToImage:
  //         "https://img.buzzfeed.com/buzzfeed-static/static/2024-06/12/13/enhanced/9a3c292cd138/original-2884-1718198262-2.jpg?crop=1246:653;1,43%26downsize=1250:*",
  //       publishedAt: "2024-06-12T13:26:49Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: "the-washington-post",
  //         name: "The Washington Post",
  //       },
  //       author:
  //         "John Hudson, Victoria Bisset, Mohamad El Chamaa, Susannah George, Bryan Pietsch",
  //       title:
  //         "Hezbollah fires rockets into Israel; Blinken travels to Qatar - The Washington Post",
  //       description:
  //         "The waves of rockets are a dramatic escalation in the simmering border crisis even as negotiations over a Gaza cease-fire reach a delicate moment.",
  //       url: "https://www.washingtonpost.com/world/2024/06/12/israel-hamas-war-news-gaza-ceasefire/",
  //       urlToImage:
  //         "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/06-12-2024/t_b89e3f4e08d9404c9b2ec1a3fe66ee24_name_STILL_hezb.jpg&w=1440",
  //       publishedAt: "2024-06-12T13:16:00Z",
  //       content:
  //         "DOHA, Qatar Hezbollah bombarded northern Israel with rockets and artillery shells Wednesday, threatening to further embattle Israel on its northern front as the war in Gaza drags on, with U.S. Secret… [+6564 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Hollywood Reporter",
  //       },
  //       author: "Gary Baum",
  //       title:
  //         "The Street-Fighting Lawyer Who’s Become Hollywood’s Dark Knight - Hollywood Reporter",
  //       description:
  //         'When pissed-off power players from Megyn Kelly and Bethenny Frankel to Tucker Carlson and Don Lemon need a warrior to fight their nastiest legal battles, Bryan Freedman is the first person they call: "If you f*** with my client, you get what you get!"',
  //       url: "http://www.hollywoodreporter.com/business/business-news/entertainment-lawyer-bryan-freedman-hollywood-dark-knight-1235919993/",
  //       urlToImage:
  //         "https://www.hollywoodreporter.com/wp-content/uploads/2024/06/18cover.BreakingNews-SPLASH-2024.jpg?w=1024",
  //       publishedAt: "2024-06-12T13:00:30Z",
  //       content:
  //         "In 2021, ESPN broadcaster Sage Steele was suspended following comments she made on a podcast, including calling parent company Disney’s vaccine mandates “sick” and questioning why Barack Obama consid… [+22872 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "CNBC",
  //       },
  //       author: "Jessica Golden, Contessa Brewer",
  //       title:
  //         "Influencer Jake Paul launching men's skin, personal care line at Walmart - CNBC",
  //       description:
  //         "The line, called W, will feature products priced at less than $10 and looks to tap into the growing market for men's grooming.",
  //       url: "https://www.cnbc.com/2024/06/12/jake-paul-launching-mens-skin-care-line-walmart.html",
  //       urlToImage:
  //         "https://image.cnbcfm.com/api/v1/image/107427288-1718121551085-W_JAKE_PAUL_LOCKER_ROOM_BENCH.jpg?v=1718134383&w=1920&h=1080",
  //       publishedAt: "2024-06-12T13:00:01Z",
  //       content:
  //         'Jake Paul is launching a personal care brand geared toward men.\r\nJake Paul is entering a new arena: skin care.\r\nThe YouTube influencer-turned-boxer announced on Wednesday the launch of "W," a skin-ca… [+2796 chars]',
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "YouTube",
  //       },
  //       author: null,
  //       title:
  //         "Tiger mosquitoes behind dengue fever rise in Europe | BBC News - BBC News",
  //       description:
  //         "An invasive species of mosquito has set up home in 13 countries in the EU, including France, Spain and Greece. Tiger mosquitoes have been linked to the sprea...",
  //       url: "https://www.youtube.com/watch?v=1JAoNBRko9A",
  //       urlToImage: "https://i.ytimg.com/vi/1JAoNBRko9A/maxresdefault.jpg",
  //       publishedAt: "2024-06-12T12:43:29Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "[Removed]",
  //       },
  //       author: null,
  //       title: "[Removed]",
  //       description: "[Removed]",
  //       url: "https://removed.com",
  //       urlToImage: null,
  //       publishedAt: "1970-01-01T00:00:00Z",
  //       content: "[Removed]",
  //     },
  //     {
  //       source: {
  //         id: "associated-press",
  //         name: "Associated Press",
  //       },
  //       author: "REGINA GARCIA CANO, GISELA SALOMON",
  //       title:
  //         "Russian warships and aircraft enter the Caribbean for military exercises - The Associated Press",
  //       description:
  //         "A fleet of Russian warships have reached Cuban waters ahead of planned military exercises in the Caribbean. Some see their deployment as a projection of Russia's strength as tensions grow over Western support for Ukraine. The U.S. military expects the exercis…",
  //       url: "https://apnews.com/article/russia-military-warships-caribbean-cuba-venezuela-446f60a04a9e0639381ddf5ee084d2c3",
  //       urlToImage:
  //         "https://dims.apnews.com/dims4/default/0c24acc/2147483647/strip/true/crop/4800x2700+0+382/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F72%2F93%2Fe8b12807ca5ad5b1caaf08ae9e87%2F892b2077a6e44f9b916cb8a6efeb7d25",
  //       publishedAt: "2024-06-12T12:20:00Z",
  //       content:
  //         "CARACAS, Venezuela (AP) A fleet of Russian warships reached Cuban waters on Wednesday ahead of planned military exercises in the Caribbean in what some see as a projection of strength as tensions gro… [+6379 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "CNET",
  //       },
  //       author: null,
  //       title:
  //         "Home Security Cameras Are Getting Smarter With AI. That's Good News for Everyone - CNET",
  //       description:
  //         "The more I work with AI-enabled object detection and smart alerts, the more I feel like we're getting (most) things right.",
  //       url: "https://www.cnet.com/home/security/features/home-security-cameras-are-getting-smarter-with-ai-thats-good-news-for-everyone/",
  //       urlToImage:
  //         "https://www.cnet.com/a/img/resize/08492d6318d43a15e0d1ad2b969a6fbb4f91ad29/hub/2024/06/07/6bfbdf88-9139-4bf3-a465-311480ffdd3a/cover-story-home-security.jpg?auto=webp&fit=crop&height=675&width=1200",
  //       publishedAt: "2024-06-12T12:00:00Z",
  //       content:
  //         "My phone buzzes with a notification, catching me off-guard while I'm out in the backyard: Person detected, package detected. It's my Google Nest Doorbell letting me know, via my iPhone's lock screen,… [+22023 chars]",
  //     },
  //   ];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=be47388be6734e06ab6e6a4c8799b01b";
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="news-container">
        <Row gutter={[16, 16]} justify="center">
          {this.state.articles.map((article, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <NewsCard
                image={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://th.bing.com/th?id=OIP.L1nR_3pSUTMMXbrIf4Nz8QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                }
                title={
                  article.title
                    ? article.title.slice(0, 45)
                    : "No Title Available"
                }
                description={
                  article.description
                    ? article.description.slice(0, 100)
                    : "No Description Available"
                }
                news_url={article.url}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default News;
