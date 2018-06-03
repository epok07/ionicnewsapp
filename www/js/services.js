angular.module('starter.services', [])

.factory('newsAPIservice', function($http) {

    var newsAPI= {};

    //option: 1
    var corsHeaders = {
    origin: ["*"],
    headers: ['Origin', 'X-Requested-With', 'Content-Type'],
    credentials: true,
    additionalHeaders: ['access-control-allow-headers', 'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, CORRELATION_ID'],
    additionalExposedHeaders: ['access-control-allow-headers', 'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, CORRELATION_ID']
    };

    newsAPI.getSources = function() {
      

      return {
        "status": "ok",
        "sources": [
            {
                "id": "abc-news-au",
                "name": "ABC News (AU)",
                "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
                "url": "http://www.abc.net.au/news",
                "category": "general",
                "language": "en",
                "country": "au",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English",
                "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
                "url": "http://www.aljazeera.com",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "ars-technica",
                "name": "Ars Technica",
                "description": "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
                "url": "http://arstechnica.com",
                "category": "technology",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "associated-press",
                "name": "Associated Press",
                "description": "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
                "url": "https://apnews.com/",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "bbc-news",
                "name": "BBC News",
                "description": "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
                "url": "http://www.bbc.co.uk/news",
                "category": "general",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "bbc-sport",
                "name": "BBC Sport",
                "description": "The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.",
                "url": "http://www.bbc.co.uk/sport",
                "category": "sports",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "bild",
                "name": "Bild",
                "description": "Die Seite 1 für aktuelle Nachrichten und Themen, Bilder und Videos aus den Bereichen News, Wirtschaft, Politik, Show, Sport, und Promis.",
                "url": "http://www.bild.de",
                "category": "general",
                "language": "de",
                "country": "de",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "bloomberg",
                "name": "Bloomberg",
                "description": "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
                "url": "http://www.bloomberg.com",
                "category": "business",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "breitbart-news",
                "name": "Breitbart News",
                "description": "Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.",
                "url": "http://www.breitbart.com",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "business-insider",
                "name": "Business Insider",
                "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
                "url": "http://www.businessinsider.com",
                "category": "business",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "business-insider-uk",
                "name": "Business Insider (UK)",
                "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
                "url": "http://uk.businessinsider.com",
                "category": "business",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "buzzfeed",
                "name": "Buzzfeed",
                "description": "BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.",
                "url": "https://www.buzzfeed.com",
                "category": "entertainment",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "cnbc",
                "name": "CNBC",
                "description": "Get latest business news on stock markets, financial & earnings on CNBC. View world markets streaming charts & video; check stock tickers and quotes.",
                "url": "http://www.cnbc.com",
                "category": "business",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "cnn",
                "name": "CNN",
                "description": "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
                "url": "http://us.cnn.com",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "daily-mail",
                "name": "Daily Mail",
                "description": "All the latest news, sport, showbiz, science and health stories from around the world from the Daily Mail and Mail on Sunday newspapers.",
                "url": "http://www.dailymail.co.uk/home/index.html",
                "category": "entertainment",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "der-tagesspiegel",
                "name": "Der Tagesspiegel",
                "description": "Nachrichten, News und neueste Meldungen aus dem Inland und dem Ausland - aktuell präsentiert von tagesspiegel.de.",
                "url": "http://www.tagesspiegel.de",
                "category": "general",
                "language": "de",
                "country": "de",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "die-zeit",
                "name": "Die Zeit",
                "description": "Aktuelle Nachrichten, Kommentare, Analysen und Hintergrundberichte aus Politik, Wirtschaft, Gesellschaft, Wissen, Kultur und Sport lesen Sie auf ZEIT ONLINE.",
                "url": "http://www.zeit.de/index",
                "category": "business",
                "language": "de",
                "country": "de",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "engadget",
                "name": "Engadget",
                "description": "Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.",
                "url": "https://www.engadget.com",
                "category": "technology",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "entertainment-weekly",
                "name": "Entertainment Weekly",
                "description": "Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.",
                "url": "http://www.ew.com",
                "category": "entertainment",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "espn",
                "name": "ESPN",
                "description": "ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.",
                "url": "http://espn.go.com",
                "category": "sports",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info",
                "description": "ESPN Cricinfo provides the most comprehensive cricket coverage available including live ball-by-ball commentary, news, unparalleled statistics, quality editorial comment and analysis.",
                "url": "http://www.espncricinfo.com/",
                "category": "sports",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "financial-times",
                "name": "Financial Times",
                "description": "The latest UK and international business, finance, economic and political news, comment and analysis from the Financial Times on FT.com.",
                "url": "http://www.ft.com/home/uk",
                "category": "business",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "focus",
                "name": "Focus",
                "description": "Minutenaktuelle Nachrichten und Service-Informationen von Deutschlands modernem Nachrichtenmagazin.",
                "url": "http://www.focus.de",
                "category": "general",
                "language": "de",
                "country": "de",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "football-italia",
                "name": "Football Italia",
                "description": "Italian football news, analysis, fixtures and results for the latest from Serie A, Serie B and the Azzurri.",
                "url": "http://www.football-italia.net",
                "category": "sports",
                "language": "en",
                "country": "it",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "fortune",
                "name": "Fortune",
                "description": "Fortune 500 Daily and Breaking Business News",
                "url": "http://fortune.com",
                "category": "business",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "four-four-two",
                "name": "FourFourTwo",
                "description": "The latest football news, in-depth features, tactical and statistical analysis from FourFourTwo, the UK&#039;s favourite football monthly.",
                "url": "http://www.fourfourtwo.com/news",
                "category": "sports",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "fox-sports",
                "name": "Fox Sports",
                "description": "Find live scores, player and team news, videos, rumors, stats, standings, schedules and fantasy games on FOX Sports.",
                "url": "http://www.foxsports.com",
                "category": "sports",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "google-news",
                "name": "Google News",
                "description": "Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.",
                "url": "https://news.google.com",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "gruenderszene",
                "name": "Gruenderszene",
                "description": "Online-Magazin für Startups und die digitale Wirtschaft. News und Hintergründe zu Investment, VC und Gründungen.",
                "url": "http://www.gruenderszene.de",
                "category": "technology",
                "language": "de",
                "country": "de",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "hacker-news",
                "name": "Hacker News",
                "description": "Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as \"anything that gratifies one's intellectual curiosity\".",
                "url": "https://news.ycombinator.com",
                "category": "technology",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "handelsblatt",
                "name": "Handelsblatt",
                "description": "Auf Handelsblatt lesen sie Nachrichten über Unternehmen, Finanzen, Politik und Technik. Verwalten Sie Ihre Finanzanlagen mit Hilfe unserer Börsenkurse.",
                "url": "http://www.handelsblatt.com",
                "category": "business",
                "language": "de",
                "country": "de",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "ign",
                "name": "IGN",
                "description": "IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.",
                "url": "http://www.ign.com",
                "category": "entertainment",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "independent",
                "name": "Independent",
                "description": "National morning quality (tabloid) includes free online access to news and supplements. Insight by Robert Fisk and various other columnists.",
                "url": "http://www.independent.co.uk",
                "category": "general",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "mashable",
                "name": "Mashable",
                "description": "Mashable is a global, multi-platform media and entertainment company.",
                "url": "http://mashable.com",
                "category": "entertainment",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "metro",
                "name": "Metro",
                "description": "News, Sport, Showbiz, Celebrities from Metro - a free British newspaper.",
                "url": "http://metro.co.uk",
                "category": "general",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "mirror",
                "name": "Mirror",
                "description": "All the latest news, sport and celebrity gossip at Mirror.co.uk. Get all the big headlines, pictures, analysis, opinion and video on the stories that matter to you.",
                "url": "http://www.mirror.co.uk/",
                "category": "general",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "mtv-news",
                "name": "MTV News",
                "description": "The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
                "url": "http://www.mtv.com/news",
                "category": "entertainment",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "mtv-news-uk",
                "name": "MTV News (UK)",
                "description": "All the latest celebrity news, gossip, exclusive interviews and pictures from the world of music and entertainment.",
                "url": "http://www.mtv.co.uk/news",
                "category": "entertainment",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "national-geographic",
                "name": "National Geographic",
                "description": "Reporting our world daily: original nature and science news from National Geographic.",
                "url": "http://news.nationalgeographic.com",
                "category": "science",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "new-scientist",
                "name": "New Scientist",
                "description": "Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.",
                "url": "https://www.newscientist.com/section/news",
                "category": "science",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "newsweek",
                "name": "Newsweek",
                "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
                "url": "http://www.newsweek.com",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "new-york-magazine",
                "name": "New York Magazine",
                "description": "NYMAG and New York magazine cover the new, the undiscovered, the next in politics, culture, food, fashion, and behavior nationally, through a New York lens.",
                "url": "http://nymag.com",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "nfl-news",
                "name": "NFL News",
                "description": "The official source for NFL news, schedules, stats, scores and more.",
                "url": "http://www.nfl.com/news",
                "category": "sports",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "polygon",
                "name": "Polygon",
                "description": "Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.",
                "url": "http://www.polygon.com",
                "category": "entertainment",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "recode",
                "name": "Recode",
                "description": "Get the latest independent tech news, reviews and analysis from Recode with the most informed and respected journalists in technology and media.",
                "url": "http://www.recode.net",
                "category": "technology",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "reddit-r-all",
                "name": "Reddit /r/all",
                "description": "Reddit is an entertainment, social news networking service, and news website. Reddit's registered community members can submit content, such as text posts or direct links.",
                "url": "https://www.reddit.com/r/all",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "reuters",
                "name": "Reuters",
                "description": "Reuters.com brings you the latest news from around the world, covering breaking news in business, politics, entertainment, technology, video and pictures.",
                "url": "http://www.reuters.com",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "spiegel-online",
                "name": "Spiegel Online",
                "description": "Deutschlands führende Nachrichtenseite. Alles Wichtige aus Politik, Wirtschaft, Sport, Kultur, Wissenschaft, Technik und mehr.",
                "url": "http://www.spiegel.de",
                "category": "general",
                "language": "de",
                "country": "de",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "t3n",
                "name": "T3n",
                "description": "Das Online-Magazin bietet Artikel zu den Themen E-Business, Social Media, Startups und Webdesign.",
                "url": "http://t3n.de",
                "category": "technology",
                "language": "de",
                "country": "de",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "talksport",
                "name": "TalkSport",
                "description": "Tune in to the world's biggest sports radio station - Live Premier League football coverage, breaking sports news, transfer rumours &amp; exclusive interviews.",
                "url": "http://talksport.com",
                "category": "sports",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "techcrunch",
                "name": "TechCrunch",
                "description": "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.",
                "url": "https://techcrunch.com",
                "category": "technology",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "techradar",
                "name": "TechRadar",
                "description": "The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more.",
                "url": "http://www.techradar.com",
                "category": "technology",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-economist",
                "name": "The Economist",
                "description": "The Economist offers authoritative insight and opinion on international news, politics, business, finance, science, technology and the connections between them.",
                "url": "http://www.economist.com",
                "category": "business",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-guardian-au",
                "name": "The Guardian (AU)",
                "description": "Latest news, sport, comment, analysis and reviews from Guardian Australia",
                "url": "https://www.theguardian.com/au",
                "category": "general",
                "language": "en",
                "country": "au",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-guardian-uk",
                "name": "The Guardian (UK)",
                "description": "Latest news, sport, business, comment, analysis and reviews from the Guardian, the world's leading liberal voice.",
                "url": "https://www.theguardian.com/uk",
                "category": "general",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-hindu",
                "name": "The Hindu",
                "description": "The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India's national newspaper.",
                "url": "http://www.thehindu.com",
                "category": "general",
                "language": "en",
                "country": "in",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-huffington-post",
                "name": "The Huffington Post",
                "description": "The Huffington Post is a politically liberal American online news aggregator and blog that has both localized and international editions founded by Arianna Huffington, Kenneth Lerer, Andrew Breitbart, and Jonah Peretti, featuring columnists.",
                "url": "http://www.huffingtonpost.com",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-lad-bible",
                "name": "The Lad Bible",
                "description": "The LAD Bible is one of the largest community for guys aged 16-30 in the world. Send us your funniest pictures and videos!",
                "url": "http://www.theladbible.com",
                "category": "entertainment",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-new-york-times",
                "name": "The New York Times",
                "description": "The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com.",
                "url": "http://www.nytimes.com",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-next-web",
                "name": "The Next Web",
                "description": "The Next Web is one of the world’s largest online publications that delivers an international perspective on the latest news about Internet technology, business and culture.",
                "url": "http://thenextweb.com",
                "category": "technology",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-sport-bible",
                "name": "The Sport Bible",
                "description": "TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!",
                "url": "http://www.thesportbible.com",
                "category": "sports",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-telegraph",
                "name": "The Telegraph",
                "description": "Latest news, business, sport, comment, lifestyle and culture from the Daily Telegraph and Sunday Telegraph newspapers and video from Telegraph TV.",
                "url": "http://www.telegraph.co.uk",
                "category": "general",
                "language": "en",
                "country": "gb",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-times-of-india",
                "name": "The Times of India",
                "description": "Times of India brings the Latest News and Top Breaking headlines on Politics and Current Affairs in India and around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health and Fitness news, Cricket and opinions from leading columnists.",
                "url": "http://timesofindia.indiatimes.com",
                "category": "general",
                "language": "en",
                "country": "in",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-verge",
                "name": "The Verge",
                "description": "The Verge covers the intersection of technology, science, art, and culture.",
                "url": "http://www.theverge.com",
                "category": "technology",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal",
                "description": "WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.",
                "url": "http://www.wsj.com",
                "category": "business",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "the-washington-post",
                "name": "The Washington Post",
                "description": "Breaking news and analysis on politics, business, world national news, entertainment more. In-depth DC, Virginia, Maryland news coverage including traffic, weather, crime, education, restaurant reviews and more.",
                "url": "https://www.washingtonpost.com",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "time",
                "name": "Time",
                "description": "Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.",
                "url": "http://time.com",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "usa-today",
                "name": "USA Today",
                "description": "Get the latest national, international, and political news at USATODAY.com.",
                "url": "http://www.usatoday.com/news",
                "category": "general",
                "language": "en",
                "country": "us",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "wired-de",
                "name": "Wired.de",
                "description": "Wired reports on how emerging technologies affect culture, the economy and politics.",
                "url": "https://www.wired.de",
                "category": "technology",
                "language": "de",
                "country": "de",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            },
            {
                "id": "wirtschafts-woche",
                "name": "Wirtschafts Woche",
                "description": "Das Online-Portal des führenden Wirtschaftsmagazins in Deutschland. Das Entscheidende zu Unternehmen, Finanzen, Erfolg und Technik.",
                "url": "http://www.wiwo.de",
                "category": "business",
                "language": "de",
                "country": "de",
                "urlsToLogos": {
                    "small": "",
                    "medium": "",
                    "large": ""
                },
                "sortBysAvailable": [
                    "top"
                ]
            }
        ]
    } ;
    }

    newsAPI.getArticles = function(newssource) {
        newssource = newssource || 'techcrunch' ;
        
        
      return $http({
        method: 'JSON', 
        //url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
        //url : AppHelper.baseUrl + 'index.php/quotation/get_items/' 

        //url : 'https://newsapi.org/v1/articles?' +
        //        'country=us&' +
        //        `source=${newssource}&` +
        //        'apiKey=b714f12698014cf4aac6cd930ab5ffae' 
        headers : {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
            //'Access-Control-Expose-Headers': FooBar
            //Content-Type: text/html; charset=utf-8

        },

        url : 'http://localhost/~franck/ionic_sandbox/newsapp.io/www/proxy.php?url=' +
                'https%3A%2F%2Fnewsapi.org%2Fv1%2Farticles%3Fcountry%3Dus%26'+
                `source%3Dtechradar%26`+
                'apiKey%3Db714f12698014cf4aac6cd930ab5ffae'
                
      });
    }

    newsAPI.demoArticles = function(){
        return {
            "status": "ok",
            "source": "techcrunch",
            "sortBy": "top",
            "articles": [
                {
                    "author": "Sanjit Dang",
                    "title": "The robot revolution is just beginning",
                    "description": "Sanjit Dang Contributor Share on Twitter Sanjit Dang is an investment director at Intel Capital. More posts by this contributor What’s holding back VR? Every year, Time magazine gets swamped with pitches from thousands of companies, all convinced their product deserves to be included in Time’s “25 …",
                    "url": "https://techcrunch.com/2018/06/03/the-robot-revolution-is-just-beginning/",
                    "urlToImage": "https://techcrunch.com/wp-content/uploads/2015/01/jibo-kitchen-lights-up.jpeg?w=586",
                    "publishedAt": "2018-06-03T19:30:05Z"
                },
                {
                    "author": "Jason Rowley",
                    "title": "VCs like what they are hearing out of the podcasting sector",
                    "description": "Podcasts are television for the earbud generation. And although many podcasters make money, typically through sponsorships, the podcasting industry (such as it is) hasn’t received much in the way of venture funding -- until quite recently.",
                    "url": "https://techcrunch.com/2018/06/03/vcs-like-what-they-are-hearing-out-of-the-podcasting-sector/",
                    "urlToImage": "https://techcrunch.com/wp-content/themes/techcrunch-2017/images/opengraph-default.png",
                    "publishedAt": "2018-06-03T18:11:13Z"
                },
                {
                    "author": "Gregory Manalo",
                    "title": "Former Twitter employees prove innovation isn't just for profit",
                    "description": "There’s no secret the tech industry suffers a reputation for harmfully disrupting a community. But not everyone in tech is to blame for the negative effects. In 2015 Ben Kovacs and Joel Lunenfeld founded the non-profit Guardian Gym, a buy-one give-one mixed martial arts gym/after-school program tha…",
                    "url": "https://techcrunch.com/2018/06/03/former-twitter-employees-prove-innovation-isnt-just-for-profit/",
                    "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/06/screenshot-2018-06-02-22-25-13.png?w=715",
                    "publishedAt": "2018-06-03T18:00:12Z"
                },
                {
                    "author": "Anthony Ha, Jordan Crook, Lucas Matney",
                    "title": "Original Content podcast: 'Arrested Development' struggles to shake off recent controversies",
                    "description": "Netflix’s revival of Arrested Development may have had a mixed reception from critics and fans, but the dysfunctional Bluth family isn’t done yet. Five years after the premiere of the much-anticipated fourth season, Arrested Development is back for season five — or rather, the first eig…",
                    "url": "https://techcrunch.com/2018/06/03/original-content-arrested-development/",
                    "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/06/ad_502_unit_00210r2.jpg?w=599",
                    "publishedAt": "2018-06-03T14:00:55Z"
                },
                {
                    "author": "Fen Zhao",
                    "title": "Will smart home tech make us care more about privacy?",
                    "description": "Fen Zhao Contributor Share on Twitter Fen Zhao is an early stage investor at Alpha Edison who previously developed public private partnerships at the National Science Foundation in the areas of data science and cybersecurity. For most people, the thought of a smart device sharing their intimate con…",
                    "url": "https://techcrunch.com/2018/06/03/will-smart-home-tech-make-us-care-more-about-privacy/",
                    "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/05/amazon-echo-listening.png?w=753",
                    "publishedAt": "2018-06-03T13:30:35Z"
                },
                {
                    "author": "Jon Evans",
                    "title": "Whither VR/AR?",
                    "description": "“Despite many pronouncements that 2016 was the year of VR, a more apt word for virtual reality might be absence,” The Economist observed caustically last summer, noting that during that year forecasts of combined sales of VR hardware and software dropped from $5.1bn to $3.6bn to the har…",
                    "url": "https://techcrunch.com/2018/06/03/i-said-whither-not-wither-but-now-that-you-mention-it/",
                    "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/06/augmented.png?w=558",
                    "publishedAt": "2018-06-03T13:00:32Z"
                },
                {
                    "author": "TC Video",
                    "title": "Former Twitter employees prove innovation isn't just for profit",
                    "description": "In 2015 Ben Kovacs and Joel Lunenfeld founded the non-profit Guardian Gym, a buy-one give-one mixed martial arts gym/after-school program that now boasts over 300 adult members and youth mentees. on the Featureshow",
                    "url": "https://techcrunch.com/video-article/former-twitter-employees-prove-innovation-isnt-just-for-profit/",
                    "urlToImage": "https://img.vidible.tv/prod/2018-06/01/5b11a64ca3fc02729562e26f/5b11a6ed1aa5fc0f99c112aa_o_U_v1.jpg?w=640&h=360",
                    "publishedAt": "2018-06-03T02:36:27Z"
                },
                {
                    "author": "Devin Coldewey",
                    "title": "It's OK to leave Facebook",
                    "description": "The slow-motion privacy train wreck that is Facebook has many users, perhaps you, thinking about leaving or at least changing the way you use the social network. Fortunately for everyone but Mark Zuckerberg, it's not nearly has hard to leave as it once was. The main thing to remember is that social…",
                    "url": "https://techcrunch.com/2018/06/02/its-ok-to-leave-facebook/",
                    "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/03/fbexitwide.jpg?w=753",
                    "publishedAt": "2018-06-02T19:46:15Z"
                },
                {
                    "author": "Anthony Ha",
                    "title": "Looks like macOS 10.14 will have a new dark mode and an Apple News app",
                    "description": "Apple’s Worldwide Developers Conference is just a couple of days away, but some of the updates appear to have been revealed early. Specifically, developer Steve Troughton-Smith tweeted some screenshots this morning of what he said was macOS 10.14. And while the screenshots focused on Xcode 10…",
                    "url": "https://techcrunch.com/2018/06/02/macos-dark-mode/",
                    "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/06/dark-mode.jpeg?w=712",
                    "publishedAt": "2018-06-02T19:34:54Z"
                },
                {
                    "author": "Natasha Lomas",
                    "title": "Not just another decentralized web whitepaper?",
                    "description": "Given all the hype and noise swirling around crypto and decentralized network projects, which runs the full gamut from scams and stupidity, to very clever and inspired ideas, the release of yet another whitepaper does not immediately set off an attention klaxon. But this whitepaper — which de…",
                    "url": "https://techcrunch.com/2018/06/02/not-just-another-decentralized-web-whitepaper/",
                    "urlToImage": "https://techcrunch.com/wp-content/uploads/2016/08/gettyimages-588616024.jpg?w=667",
                    "publishedAt": "2018-06-02T19:14:35Z"
                }
            ]
        };
    }

      newsAPI.getItemByPriceCat = function(cat_id) {
          cat_id = cat_id || 0 ;
          return $http({
              method: 'JSON',
              //url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
              url : AppHelper.baseUrl + 'index.php/quotation/get_items_by_price_cat/'
          });
      }

   // http://localhost/matjupweb/
    newsAPI.getItemsByCat = function() {
      //cat_id = cat_id || 0 ;
      return $http({
        method: 'JSON', 
        //url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
        url : AppHelper.baseUrl + 'index.php/quotation/get_items_by_cat/' 
      });
    }

    newsAPI.getItemDetails = function(id) {
      return $http({
        method: 'JSON', 
        //url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
        url : AppHelper.baseUrl + 'index.php/quotation/get_items/'+ id 
      });
    }

    newsAPI.getPricingDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    return newsAPI;

});

