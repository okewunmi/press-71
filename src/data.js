const articles = [
  {
    source: {
      id: "wired1",
      name: "Wired",
    },
    author: "Andy Greenberg",
    title: "North Korea Is Now Mining Crypto to Launder Its Stolen Loot",
    description:
      "A spy group working for the Kim regime has been feeding stolen coins into crypto mining services in an effort to throw tracers off their trail.",
    url: "https://www.wired.com/story/north-korea-apt43-crypto-mining-laundering/",
    urlToImage:
      "https://media.wired.com/photos/64223c901d8bed66b5b38e35/191:100/w_1280,c_limit/North-Korea-Found-a-Clever-New-Way-to-Launder-Stolen-Crypto-Security-GettyImages-1280627476.png",
    publishedAt: "2023-03-28T15:00:00Z",
  },
  {
    source: {
      id: "google-news2",
      name: "Google News",
    },
    author: null,
    title:
      "New York sues KuCoin, expands cryptocurrency crackdown - Reuters.com",
    description:
      "New York sues KuCoin, expands cryptocurrency crackdown  Reuters.com",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL2xlZ2FsL25ldy15b3JrLXN1ZXMta3Vjb2luLWV4cGFuZHMtY3J5cHRvY3VycmVuY3ktY3JhY2tkb3duLTIwMjMtMDMtMDkv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-03-09T21:00:00Z",
  },
  {
    source: {
      id: "engadget3",
      name: "Engadget",
    },
    author: "Igor Bonifacic",
    title:
      "USDC stablecoin breaks dollar peg following Silicon Valley Bank collapse",
    description:
      "The abrupt collapse of Silicon Valley Bank has affected the value of the world’s fifth-largest cryptocurrency, increasing fears of a possible ripple effect among Web3 companies. On Saturday morning, USD Coin fell to a record low of $0.87 after Circle, the com…",
    url: "https://www.engadget.com/usdc-stablecoin-breaks-dollar-peg-following-silicon-valley-bank-collapse-232052571.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/lISMpIO8taATc20UwEOasQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/c04f51a0-bf86-11ed-ad7d-a5b0b18e557e.cf.jpg",
    publishedAt: "2023-03-11T23:20:52Z",
  },
  {
    source: {
      id: "engadget4",
      name: "Engadget",
    },
    author: "Steve Dent",
    title: "The UK government won't make an NFT after all",
    description:
      'Last year, UK Prime Minister Rishi Sunak (then Chancellor of the Exchequer) announced that the Royal Mint would issue an official NFT (non-fungible token) as a "forward-looking approach" toward crypto. Now, with the shine well off the technology, the Treasury…',
    url: "https://www.engadget.com/the-uk-government-wont-make-an-nft-after-all-125018638.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/YoQY7RDQR0iIFR5TL1WcDQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/ba970f90-cd60-11ed-bd97-fb13e152707e.cf.jpg",
    publishedAt: "2023-03-28T12:50:18Z",
  },
  {
    source: {
      id: "engadget5",
      name: "Engadget",
    },
    author: "Will Shanklin",
    title:
      "Sam Bankman-Fried pleads not guilty to latest fraud, bribery charges",
    description:
      "FTX founder and former CEO Sam Bankman-Fried (aka SBF) pleaded not guilty to five additional criminal charges this morning, according toCNBC. Prosecutors accuse the disgraced crypto exec of fraud and bribery for conspiring to send at least $40 million to Chin…",
    url: "https://www.engadget.com/sam-bankman-fried-pleads-not-guilty-to-latest-fraud-bribery-charges-165445328.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/x847Ur0Jd_6Eg9DTK2Ntag--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/0dfb3660-cf1a-11ed-b7ff-1d7112adf46a.cf.jpg",
    publishedAt: "2023-03-30T16:54:45Z",
  },
  {
    source: {
      id: 6,
      name: "The Guardian",
    },
    author: "Josh Taylor",
    title:
      "Twitter changes logo to Dogecoin cryptocurrency image in apparent late April fool’s day gag",
    description:
      "Elon Musk tweets out meme after blue bird on homepage replaced by image of shiba inu associated with cryptocurrency<ul><li>Follow our Australia news live blog for the latest updates</li><li>Get our morning and afternoon news emails, free app or daily news pod…",
    url: "https://www.theguardian.com/technology/2023/apr/04/twitter-changes-logo-to-dogecoin-cryptocurrency-image-in-apparent-late-april-fools-day-gag",
    urlToImage:
      "https://i.guim.co.uk/img/media/05a304230823d8ed139dad605a844443aab31673/0_106_3961_2377/master/3961.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=44968c844e3301828549319058c0c20b",
    publishedAt: "2023-04-04T00:53:08Z",
  },
  {
    source: {
      id: "business-insider7",
      name: "Business Insider",
    },
    author: "fdemott@insider.com (Filip De Mott)",
    title:
      "CFTC sues Binance and cofounder Changpeng Zhao for allegedly violating trading rules",
    description:
      "The world's largest cryptocurrency exchange is accused of violating the Commodity Exchange Act.",
    url: "https://markets.businessinsider.com/news/currencies/cftc-sues-binance-cofounder-changpeng-zhao-allegedly-violating-trading-rules-2023-3",
    urlToImage:
      "https://i.insider.com/6421b6740237f900185315c2?width=1200&format=jpeg",
    publishedAt: "2023-03-27T16:14:50Z",
  },
  {
    source: {
      id: 8,
      name: "Slashdot.org",
    },
    author: "BeauHD",
    title:
      "Microsoft Is Testing a Built-In Cryptocurrency Wallet For the Edge Browser",
    description:
      "Microsoft appears to be testing a built-in cryptocurrency wallet for Edge, according to screenshots pulled from a beta build of the browser. Ars Technica reports: The feature, which the screenshots say is strictly for internal testing, was unearthed by Twitte…",
    url: "https://slashdot.org/story/23/03/17/2136202/microsoft-is-testing-a-built-in-cryptocurrency-wallet-for-the-edge-browser",
    urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
    publishedAt: "2023-03-18T02:02:00Z",
  },
  {
    source: {
      id: "engadget9",
      name: "Engadget",
    },
    author: "Steve Dent",
    title: "US regulators will protect all deposits at Silicon Valley Bank",
    description:
      'US regulators have announced that they\'re taking action to "fully" protect all deposits at Silicon Valley Bank (SVB), CNBC has reported. The institution is home to a large number of startups and established companies like Roku and Etsy, which will have full a…',
    url: "https://www.engadget.com/us-regulators-will-protect-all-deposits-at-silicon-valley-bank-045837677.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/GG55.lJRrhAKn81IRfy7Sg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/97ee76a0-c152-11ed-bd79-862a0131fd8d.cf.jpg",
    publishedAt: "2023-03-13T04:58:37Z",
  },
  {
    source: {
      id: "10business-insider",
      name: "Business Insider",
    },
    author: "zsalfiti@insider.com (Zinya Salfiti)",
    title:
      "Binance boss CZ shows what he thinks of the trading violations lawsuit with an enigmatic tweet: '4'",
    description:
      "Cryptocurrency executive Changpeng Zhao signaled that he views the CFTC lawsuit against him and his exchange as a distraction.",
    url: "https://markets.businessinsider.com/news/currencies/binance-boss-cz-shows-what-he-thinks-of-cftc-lawsuit-by-tweeting-4-2023-3",
    urlToImage:
      "https://images2.markets.businessinsider.com/6422a4cf55bd920018e2016d?format=jpeg",
    publishedAt: "2023-03-28T09:52:26Z",
  },
  {
    source: {
      id: "11business-insider",
      name: "Business Insider",
    },
    author: "prosen@insider.com (Phil Rosen)",
    title:
      "Bitcoin storms toward its strongest quarter in 2 years with a 72% jump, outperforming the Nasdaq and gold",
    description:
      "The world's largest cryptocurrency is enjoying massive gains even though just a few months ago, some experts warned of a further crash.",
    url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-today-q1-nasdaq-gold-fed-rate-hikes-crypto-2023-3",
    urlToImage:
      "https://i.insider.com/6424307ded593e00183f0aad?width=1200&format=jpeg",
    publishedAt: "2023-03-29T13:10:39Z",
  },
  {
    source: {
      id: "12business-insider",
      name: "Business Insider",
    },
    author: "Morgan Chittum",
    title:
      "'Dr. Doom' economist Nouriel Roubini says the 'crypto apocalypse is coming' as SEC chair Gensler asks for more funding to catch bad actors",
    description:
      "Nouriel Roubini is rooting for the demise of the cryptocurrency industry again. This time he's hoping regulators will help stamp it out.",
    url: "https://markets.businessinsider.com/news/currencies/crypto-market-crash-dr-doom-economist-nouriel-roubini-sec-gensler-2023-3",
    urlToImage:
      "https://i.insider.com/6425c50ced593e00183f48f1?width=1200&format=jpeg",
    publishedAt: "2023-03-30T18:33:42Z",
  },
  {
    source: {
      id: 13,
      name: "VentureBeat",
    },
    author: "Martin Hiesboeck, Ph.D., Uphold",
    title: "The evolution of Web3 and the year crypto got serious",
    description:
      "Here's why, despite the current crypto winter, cryptocurrency will continue to make inroads into finance and much more.",
    url: "https://venturebeat.com/virtual/the-evolution-of-web3-and-the-year-crypto-got-serious/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2021/12/bitcoin-crypto-mining-log4j-vulnerability-microsoft-e1639850808529.jpg?w=1200&strip=all",
    publishedAt: "2023-03-31T20:07:00Z",
  },
  {
    source: {
      id: "14abc-news",
      name: "ABC News",
    },
    author: "Ali Dukakis",
    title:
      "Experts call cryptocurrency a 'bystander' in SVB, Signature Bank collapses",
    description:
      "Unlike last year's collapse of FTX, cryptocurrency did not play a leading role in the collapse of Silicon Valley Bank and Signature Bank, experts tell ABC News.",
    url: "https://abcnews.go.com/Business/experts-call-cryptocurrency-bystander-svb-signature-bank-collapses/story?id=97853623",
    urlToImage:
      "https://s.abcnews.com/images/US/signature-sh-er-230314_1678834873051_hpMain_16x9_992.jpg",
    publishedAt: "2023-03-15T16:29:42Z",
    content:
      "In the wake of last year's collapse of cryptocurrency exchange FTX, the collapse this week of Silicon Valley Bank and Signature Bank -- representing the second and third largest bank failures in U.S.… [+3662 chars]",
  },
  {
    source: {
      id: 15,
      name: "CNET",
    },
    author: "Nick Wolny",
    title: "Can You Write Off Crypto Losses on Your Taxes? - CNET",
    description:
      "Capital losses can help you lower your taxable income, but only under certain circumstances.",
    url: "https://www.cnet.com/personal-finance/taxes/crypto-loss-tax-tips/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/1515e0687dffcafe9a451aef43f0838ef8a1eae4/hub/2023/02/14/3d4a9a9c-1451-47f0-8198-42cd658157e9/cash-money-stack-100s-green-grid.png?auto=webp&fit=crop&height=630&width=1200",
    publishedAt: "2023-03-10T01:48:31Z",
    content:
      "This story is part of Taxes 2023, CNET's coverage of the best tax software, tax tips and everything else you need to file your return and track your refund. \r\nLet's just say 2022 wasn't the best year… [+7248 chars]",
  },
  {
    source: {
      id: 16,
      name: "The Guardian",
    },
    author: "Edward Helmore and agencies",
    title:
      "USD Coin value falls after revealing $3.3bn held at Silicon Valley Bank",
    description:
      "The stablecoin fell as low as $0.87 as Circle broke the news that its reserves were at the collapsed lenderThe value of the world’s fifth-biggest cryptocurrency, USD Coin (USDC), slumped to an all-time low on Saturday after Circle, the US firm behind the coin…",
    url: "https://www.theguardian.com/technology/2023/mar/11/usd-coin-depeg-silicon-valley-bank-collapse",
    urlToImage:
      "https://i.guim.co.uk/img/media/a245954fba260e7fb9a7ad3fea793cf0c89fa5a0/0_173_5184_3110/master/5184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7a653fdfe32d834f1bc06505f4e1113e",
    publishedAt: "2023-03-11T17:03:35Z",
    content:
      "The value of the worlds fifth-biggest cryptocurrency, USD Coin (USDC), slumped to an all-time low on Saturday after Circle, the US firm behind the coin, revealed that $3.3bn of the reserves backing i… [+4920 chars]",
  },
  {
    source: {
      id: 17,
      name: "Gizmodo.com",
    },
    author: "Kyle Barr",
    title: "Binance Stops Deposits and Withdrawals for UK Customers",
    description:
      "On Monday, Binance said it would suspend withdrawals and deposits for anybody using UK currency. The news came after the world’s largest crypto exchange’s banking partner in the UK, Paysafe, said it was abandoning crypto, at least as far as Binance was concer…",
    url: "https://gizmodo.com/binance-crypto-bitcoin-withdrawals-1850223376",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/01d4030a8f3067ae8c7965f8aa94caff.jpg",
    publishedAt: "2023-03-14T13:37:00Z",
    content:
      "On Monday, Binance said it would suspend withdrawals and deposits for anybody using UK currency. The news came after the worlds largest crypto exchanges banking partner in the UK, Paysafe, said it wa… [+2065 chars]",
  },
  {
    source: {
      id: 18,
      name: "Gizmodo.com",
    },
    author: "Jody Serrano",
    title:
      "U.S. Government Saves Silicon Valley Bank After Tech Industry Killed It",
    description:
      "The U.S. government swooped in on Sunday to save the tech industry from a problem of its own making, announcing that it would ensure all depositors in Silicon Valley Bank had full access to their money by Monday. Read more...",
    url: "https://gizmodo.com/us-government-backs-deposits-silicon-valley-bank-1850218306",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/dd04516d1e1486b568f5fdcbac4710f7.jpg",
    publishedAt: "2023-03-13T12:01:06Z",
    content:
      "The U.S. government swooped in on Sunday to save the tech industry from a problem of its own making, announcing that it would ensure all depositors in Silicon Valley Bank had full access to their mon… [+2490 chars]",
  },
  {
    source: {
      id: 19,
      name: "Digital Trends",
    },
    author: "Monica J. White",
    title: "After reaping the rewards, Nvidia turns its back on cryptocurrency",
    description:
      "With cryptomining all but over, Nvidia shared a strong opinion on cryptocurrencies as a whole.",
    url: "https://www.digitaltrends.com/news/nvidia-says-crypto-is-useless-for-society/",
    urlToImage:
      "https://www.digitaltrends.com/wp-content/uploads/2019/05/bitcoin-cryptocurrency-apps-mining-miner-crypto-alt-coin-7845.jpg?resize=1200%2C630&p=1",
    publishedAt: "2023-03-27T20:43:48Z",
    content:
      "Nvidia has just shared an interesting opinion on cryptocurrencies. According to the chipmaker, crypto doesn’t “bring anything useful for society.” The computational power of the best graphics cards i… [+3164 chars]",
  },
  {
    source: {
      id: 20,
      name: "The Guardian",
    },
    author: "Dan Milmo and agency",
    title: "Crypto bank Silvergate announces liquidation amid sector turmoil",
    description:
      "Wind-down and liquidation plan follows mass withdrawal of deposits after collapse of FTX exchange The cryptocurrency-focused US lender Silvergate is to wind down its operations after it was hit by customer withdrawals following the collapse of crypto exchange…",
    url: "https://www.theguardian.com/technology/2023/mar/09/crypto-bank-silvergate-liquidation-sector-turmoil-wind-down-ftx-exchange",
    urlToImage:
      "https://i.guim.co.uk/img/media/80cbc9fe9d08482d4bd817d00996cb7931d1b177/0_0_3888_2333/master/3888.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b65d8993a2a83c39065eb43558101253",
    publishedAt: "2023-03-09T14:45:15Z",
    content:
      "The cryptocurrency-focused US lender Silvergate is to wind down its operations after it was hit by customer withdrawals following the collapse of crypto exchange FTX.\r\nThe California-based bank had w… [+3223 chars]",
  },
  {
    source: {
      id: "22cnn",
      name: "CNN",
    },
    author: "Jeanne Sahadi",
    title:
      "Beyond FDIC insurance: How protected is your money outside of banks?",
    description:
      "Just as stock market turmoil is a good reminder to make sure your investment portfolio is diversified, a few surprise bank failures is a good excuse to find out whether your financial accounts — not just your checking and savings accounts — are all protected …",
    url: "https://www.cnn.com/2023/03/28/success/protections-insurance-financial-accounts-your-money/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230317155426-financial-security-stock.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-03-28T14:06:07Z",
    content:
      "Just as stock market turmoil is a good reminder to make sure your investment portfolio is diversified, a few surprise bank failures is a good excuse to find out whether your financial accounts not ju… [+5748 chars]",
  },
  {
    source: {
      id: 23,
      name: "The Guardian",
    },
    author: "Alex Lawson",
    title:
      "Sam Bankman-Fried received $2.2bn from FTX-linked entities, say court filings",
    description:
      "Disgraced crypto poster boy and five of his inner circle transferred $3.2bn into personal accounts, allege new managementSam Bankman-Fried, the disgraced co-founder of FTX, received more than $2bn from entities linked to the collapsed cryptocurrency exchange …",
    url: "https://www.theguardian.com/business/2023/mar/16/sam-bankman-fried-received-22bn-from-ftx-linked-entities-say-court-filings",
    urlToImage:
      "https://i.guim.co.uk/img/media/ef818a70a8598dc5db95839e4829fc13ca94cac2/96_0_4918_2951/master/4918.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e18374266db2c317f017ee5370369e7f",
    publishedAt: "2023-03-16T10:43:30Z",
    content:
      "Sam Bankman-Fried, the disgraced co-founder of FTX, received more than $2bn from entities linked to the collapsed cryptocurrency exchange into his personal accounts, according to court filings.\r\nBank… [+2596 chars]",
  },
  {
    source: {
      id: "24engadget",
      name: "Engadget",
    },
    author: "Mat Smith",
    title: "The Morning After: Netflix wins six Oscars",
    description:
      "Netflix took home six Oscars last night, besting all the other streaming services, but a single film, Everything, Everywhere All at Once, dominated the biggest awards. It claimed three of four of the acting awards, along with Best Director and Best Picture.Ne…",
    url: "https://www.engadget.com/the-morning-after-netflix-wins-six-oscars-111543725.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/_2DZ2YVThX3EZZ5fKLz59Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-06/d79853b0-af45-11ea-bf29-431281528203.cf.jpg",
    publishedAt: "2023-03-13T11:15:43Z",
    content:
      "Netflix took home six Oscars last night, besting all the other streaming services, but a single film, Everything, Everywhere All at Once, dominated the biggest awards. It claimed three of four of the… [+4125 chars]",
  },
  {
    source: {
      id: 25,
      name: "Gizmodo.com",
    },
    author: "Nikki Main",
    title: "Sam Bankman-Fried's Lawyers Say They May Need to Delay Trial",
    description:
      "Lawyers representing FTX founder Sam Bankman-Fried announced on Wednesday that his October trial might need to be delayed. The lawyers said they were still waiting for important documents to be handed over and claimed the hold-up could hinder their ability to…",
    url: "https://gizmodo.com/sam-bankman-fried-lawyers-may-need-to-delay-trial-ftx-1850207782",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4a026231960f26d648912ea607c7da8c.jpg",
    publishedAt: "2023-03-09T17:50:00Z",
    content:
      "Lawyers representing FTX founder Sam Bankman-Fried announced on Wednesday that his October trial might need to be delayed. The lawyers said they were still waiting for important documents to be hande… [+2762 chars]",
  },
  {
    source: {
      id: 26,
      name: "Gizmodo.com",
    },
    author: "Jody Serrano",
    title:
      "Lindsay Lohan, Jake Paul, Soulja Boy, and More Celebs Fined $400,000 for Illegally Promoting Crypto",
    description:
      "The Securities and Exchange Commission has a message for celebrities eyeing paid deals to promote cryptocurrencies: Disclose you’re getting paid, or else.Read more...",
    url: "https://gizmodo.com/jake-paul-soulja-boy-lindsay-lohan-akon-crypto-fine-trx-1850255958",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/de712a9e29239380b0866029ec864ac8.jpg",
    publishedAt: "2023-03-23T13:44:00Z",
    content:
      "The Securities and Exchange Commission has a message for celebrities eyeing paid deals to promote cryptocurrencies: Disclose youre getting paid, or else.\r\nThe SEC revealed on Wednesday that it had ch… [+3072 chars]",
  },
  {
    source: {
      id: "27abc-news",
      name: "ABC News",
    },
    author: "The Associated Press",
    title: "German investigators take down crypto money laundering site",
    description:
      "German investigators say they have taken down a major online money laundering operation, seizing the Germany-based server infrastructure of a platform that dealt in ill-gotten cryptocurrency",
    url: "https://abcnews.go.com/Business/wireStory/german-investigators-crypto-money-laundering-site-97880159",
    urlToImage:
      "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
    publishedAt: "2023-03-15T15:08:50Z",
    content:
      "BERLIN -- German investigators said they took down a major online money laundering operation on Wednesday, seizing the Germany-based server infrastructure of a platform that dealt in ill-gotten crypt… [+1285 chars]",
  },
  {
    source: {
      id: "28business-insider",
      name: "Business Insider",
    },
    author: "mfox@businessinsider.com (Matthew Fox)",
    title:
      "Bitcoin soars to a 9-month high after Credit Suisse takeover fails to calm banking fears",
    description:
      'Fundstrat said bitcoin\'s outperformance is a testament to its "outright resiliency" when you consider the failures of Signature Bank and Silvergate.',
    url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-9-month-high-credit-suisse-ubs-bank-crisis-2023-3",
    urlToImage:
      "https://i.insider.com/64185980718b5300194b17d2?width=1200&format=jpeg",
    publishedAt: "2023-03-20T13:46:19Z",
    content:
      "Bitcoin surged as much as 4% on Monday amid fears of an ongoing banking crisis that started with the downfall of Silicon Valley Bank earlier this month and has now led to the takeover of Credit Suiss… [+2301 chars]",
  },
  {
    source: {
      id: 29,
      name: "The Guardian",
    },
    author: "PA Media",
    title:
      "Nottingham Forest’s Gustavo Scarpa in Brazil after losing £1m in crypto scam",
    description:
      "<ul><li>Premier League club lend full support to midfielder after scam</li><li>Scarpa has appeared in court in Brazil trying to regain money</li></ul>Nottingham Forest are supporting midfielder Gustavo Scarpa after he lost almost £1m in a cryptocurrency scam.…",
    url: "https://www.theguardian.com/football/2023/mar/15/nottingham-forests-gustavo-scarpa-in-brazil-after-losing-1m-in-crypto-scam",
    urlToImage:
      "https://i.guim.co.uk/img/media/dda9e688a00cce1fd0ccdf291a5ee44c214c5ebc/309_128_2954_1772/master/2954.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=502f81416ec2e7756f2cc2da2d027500",
    publishedAt: "2023-03-15T19:12:33Z",
    content:
      "Nottingham Forest are supporting midfielder Gustavo Scarpa after he lost almost £1m in a cryptocurrency scam. Forest allowed their January signing to return to Brazil to deal with the matter, where r… [+1200 chars]",
  },
  {
    source: {
      id: 30,
      name: "The Guardian",
    },
    author: "Alex Lawson",
    title: "Caught in the FTX storm: how a crypto high-flyer fell to Earth",
    description:
      "Mastercard has cuts its ties with the Maps payments app run by British-educated cryptocurrency tycoon Alex Grebnev, who was backed by Sam Bankman-Fried, amid a row over Russian usersAs western brands began the stampede out of Russia a year ago, its citizens f…",
    url: "https://www.theguardian.com/technology/2023/mar/26/caught-in-the-ftx-storm-how-a-crypto-high-flyer-fell-to-earth",
    urlToImage:
      "https://i.guim.co.uk/img/media/aa8ec08160a43f2e89ece3a15f8ee9abb12a9b8b/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=d0ac239fb53f216ff4eb7675e6fdcc72",
    publishedAt: "2023-03-26T14:00:20Z",
    content:
      "As western brands began the stampede out of Russia a year ago, its citizens found themselves unable to pay for the international goods and services with which they had become so familiar.\r\nAmong the … [+13374 chars]",
  },
  {
    source: {
      id: 31,
      name: "VentureBeat",
    },
    author: "Dmitry Ivanov, CoinsPaid",
    title:
      "Why this ‘winter’ won’t stop the growing crypto e-commerce adoption",
    description:
      "From fast and inexpensive fees to secure transactions and a lack of chargebacks, crypto payments offer a multitude of benefits for retailers.",
    url: "https://venturebeat.com/virtual/why-this-winter-wont-stop-the-growing-crypto-e-commerce-adoption/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2018/02/crypto-2-e1619080181909.jpg?w=1200&strip=all",
    publishedAt: "2023-03-15T20:07:00Z",
    content:
      "From flight tickets, salaries, and tuition fees to Subway sandwiches and Elon Musks perfume these days you can use crypto to cover most of your everyday expenses. Microsoft, Google, Starbucks and num… [+6857 chars]",
  },
  {
    source: {
      id: 32,
      name: "Slashdot.org",
    },
    author: "msmash",
    title:
      "Sam Bankman-Fried's Legal Defense Is Being Funded With Alameda Money He Gifted His Father",
    description:
      "While still CEO of now-collapsed FTX, Sam Bankman-Fried transferred millions of dollars to his father. Some of those funds have since been used to pay for his mounting legal fees, Forbes os reporting, citing two sources close to the company. From a report: Sa…",
    url: "https://slashdot.org/story/23/03/29/1622244/sam-bankman-frieds-legal-defense-is-being-funded-with-alameda-money-he-gifted-his-father",
    urlToImage: "https://a.fsdn.com/sd/topics/business_64.png",
    publishedAt: "2023-03-29T20:00:00Z",
    content:
      "Sam Bankman-Fried, founder of fallen cryptocurrency exchange FTX who claimed to have just $100,000 in his bank account last November, is preparing for trial in October backed by a roster of powerful … [+1210 chars]",
  },
  {
    source: {
      id: 33,
      name: "Slashdot.org",
    },
    author: "msmash",
    title: "Binance Sued by US Watchdog for Alleged Derivatives Rule Lapses",
    description:
      "Binance Holdings, the world's largest cryptocurrency exchange, and Chief Executive Officer Changpeng Zhao, were sued by the US Commodity Futures Trading Commission for allegedly breaking trading and derivatives rules. From a report: The CFTC filed the lawsuit…",
    url: "https://news.slashdot.org/story/23/03/27/1511205/binance-sued-by-us-watchdog-for-alleged-derivatives-rule-lapses",
    urlToImage: "https://a.fsdn.com/sd/topics/usa_64.png",
    publishedAt: "2023-03-27T15:20:00Z",
    content:
      '"If you don\'t want your dog to have bad breath, do what I do: Pour a little\r\n Lavoris in the toilet."\r\n-- Comedian Jay Leno',
  },
  {
    source: {
      id: 34,
      name: "Coinmarketcap.com",
    },
    author: null,
    title: "USDC Down ~10%",
    description:
      "Get the latest USD Coin price, USDC market cap, trading pairs, charts and data today from the world’s number one cryptocurrency price-tracking website",
    url: "https://coinmarketcap.com/currencies/usd-coin/",
    urlToImage:
      "https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png",
    publishedAt: "2023-03-11T13:54:56Z",
    content:
      "What Is USD Coin (USDC)?\r\nUSD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 tha… [+6516 chars]",
  },
  {
    source: {
      id: "35business-insider",
      name: "Business Insider",
    },
    author: "ztayeb@businessinsider.com (Zahra Tayeb)",
    title:
      "Jeremy Siegel says bitcoin's rush higher will fizzle out once people trust banks again",
    description: "",
    url: "https://markets.businessinsider.com/news/currencies/jeremy-siegel-bitcoin-crypto-rally-will-fade-banking-crisis-2023-3",
    urlToImage:
      "https://i.insider.com/52ed527cecad049a6d4ad89c?width=1200&format=jpeg",
    publishedAt: "2023-03-22T13:38:59Z",
    content:
      "Wharton professor Jeremy Siegel has weighed in on bitcoin's recent rally, spurred on by the recent banking crisis. \r\n\"My feeling is when people feel they're safe in the banks again, bitcoin will go b… [+1226 chars]",
  },
  {
    source: {
      id: "36business-insider",
      name: "Business Insider",
    },
    author: "mfox@businessinsider.com (Matthew Fox)",
    title:
      "The SEC's recent moves against Coinbase and celebrity endorsers show the agency is getting serious about clamping down on crypto",
    description:
      'The SEC said it\'s "neutral about the technologies at issue" but added it\'s "anything but neutral when it comes to investor protection."',
    url: "https://markets.businessinsider.com/news/currencies/crypto-industry-sec-investigations-coinbase-lindsay-lohan-jake-paul-charges-2023-3",
    urlToImage:
      "https://i.insider.com/641c5a87b7834100191aedd4?width=1200&format=jpeg",
    publishedAt: "2023-03-23T15:21:53Z",
    content:
      "A flurry of action in a single day this week show the Securities and Exchange Commission is getting serious about regulating the cryptocurrency industry. \r\nThe SEC charged Justin Son of Tron, BitTorr… [+3248 chars]",
  },
  {
    source: {
      id: "37business-insider",
      name: "Business Insider",
    },
    author: "insider@insider.com (Elizabeth Wood )",
    title:
      "Experts from Amberdata, Custodia Bank, and United States for Kraken discuss the role digital assets are going to play in the future of finance",
    description:
      "The digital asset boom means it is imperative for financial institutions to adopt crypto, blockchain, and NFTs to keep up with global innovation.",
    url: "https://www.businessinsider.com/experts-share-how-digital-assets-are-impacting-financial-services-2023-3",
    urlToImage:
      "https://i.insider.com/642172ed0237f90018530dee?width=1200&format=jpeg",
    publishedAt: "2023-03-29T19:19:06Z",
    content:
      "The past decade has seen a cultural shift and adaptation to digital assets including cryptocurrency, nonfungible tokens (NFTs), and blockchain. From influencer and celebrity promotion to adoption at … [+2852 chars]",
  },
  {
    source: {
      id: 38,
      name: "Slashdot.org",
    },
    author: "msmash",
    title: "Cryptocurrencies Add Nothing Useful To Society, Says Nvidia",
    description:
      'The US chip-maker Nvidia has said cryptocurrencies do not "bring anything useful for society" despite the company\'s powerful processors selling in huge quantities to the sector. From a report: Michael Kagan, its chief technology officer, said other uses of pr…',
    url: "https://slashdot.org/story/23/03/27/163221/cryptocurrencies-add-nothing-useful-to-society-says-nvidia",
    urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
    publishedAt: "2023-03-27T16:04:00Z",
    content:
      "Michael Kagan, its chief technology officer, said other uses of processing power such as the artificial intelligence chatbot ChatGPT were more worthwhile than mining crypto. Nvidia never embraced the… [+1766 chars]",
  },
  {
    source: {
      id: "39business-insider",
      name: "Business Insider",
    },
    author: "mchittum@insider.com (Morgan Chittum)",
    title:
      "The 'mother of all moral hazards': economist Nouriel Roubini cheers the demise of banks with ties to the crypto industry",
    description:
      'The economist said the government\'s decision to backstop losses for Signature Bank was akin to "rewarding scammers" and "con men."',
    url: "https://markets.businessinsider.com/news/currencies/nouriel-roubini-crypto-market-crash-signature-bank-svb-dr-doom-2023-3",
    urlToImage:
      "https://i.insider.com/6329ebc04f9291001883dd7f?width=1200&format=jpeg",
    publishedAt: "2023-03-13T17:29:41Z",
    content:
      "There's at least one pundit who won't be losing any sleep over the biggest bank failure since the 2008 financial crisis. \r\nSilicon Valley Bank, Silvergate, and Signature have all closed in quick succ… [+1492 chars]",
  },
  {
    source: {
      id: "40business-insider",
      name: "Business Insider",
    },
    author: "ztayeb@businessinsider.com (Zahra Tayeb)",
    title:
      "Crypto firm BKCoin hit by emergency asset freeze over alleged $100 million Ponzi scheme that paid for co-founder's rent and vacations",
    description:
      "BKCoin's co-founder was accused of spending $371,000 of investor money to pay for vacations, sporting events, and a New York City apartment, per the SEC.",
    url: "https://markets.businessinsider.com/news/currencies/crypto-scam-fraud-sec-asset-freeze-100-million-ponzi-scheme-2023-3",
    urlToImage:
      "https://i.insider.com/633af20a6427060019ef0fac?width=1200&format=jpeg",
    publishedAt: "2023-03-07T11:01:42Z",
    content:
      "A Miami-based crypto firm was hit by an emergency asset freeze for allegedly running a $100 million Ponzi scheme that paid for the co-founder's life of luxury. \r\nOn Monday, the Securities and Exchang… [+1690 chars]",
  },
  {
    source: {
      id: "41business-insider",
      name: "Business Insider",
    },
    author: "mchittum@insider.com (Morgan Chittum)",
    title:
      "XRP surges 10% on speculation the CFTC's Binance suit could impact the token developer's monumental SEC case",
    description:
      "A win against the agency would be a big victory for Ripple, and would also offer some further clarity on future regulatory treatment for many tokens.",
    url: "https://markets.businessinsider.com/news/currencies/xrp-price-crypto-ripple-sec-case-binance-lawsuit-cftc-news-2023-3",
    urlToImage:
      "https://i.insider.com/60265f2e2edd0f001a8d5727?width=1200&format=jpeg",
    publishedAt: "2023-03-29T15:35:04Z",
    content:
      "XRP, the cryptocurrency issued by Ripple, is surging on rumors surrounding outcome of its long-running legal fight with the Securities and Exchange Commission. \r\nThe crypto is up 10% in the past 24 h… [+1581 chars]",
  },
  {
    source: {
      id: 42,
      name: "Boing Boing",
    },
    author: "Jason Weisberger",
    title:
      'Add bribery to the crimes "genius" crypto scammer Bankman-Fried is charged with',
    description:
      'In an effort to free "digital assets" frozen in China, "genius" crypto scammer Samuel Bankman-Fried is accused of ordering Alameda Research to issue a payment to a private crypto wallet allegedly belonging to one or more Chinese officials. Federal prosecutors…',
    url: "https://boingboing.net/2023/03/28/add-bribery-to-the-crimes-genius-crypto-scammer-bankman-fried-is-charged-with.html",
    urlToImage:
      "https://i0.wp.com/boingboing.net/wp-content/uploads/2022/03/dogecoin.jpg?fit=1200%2C960&ssl=1",
    publishedAt: "2023-03-28T16:06:31Z",
    content:
      'In an effort to free "digital assets" frozen in China, "genius" crypto scammer Samuel Bankman-Fried is accused of ordering Alameda Research to issue a payment to a private crypto wallet allegedly bel… [+1042 chars]',
  },
  {
    source: {
      id: 43,
      name: "VentureBeat",
    },
    author: "John Oliver, PwC",
    title: "Trust emerges as the path forward for digital assets in 2023",
    description:
      "Digital assets can be a powerful, disruptive technology. Why orgs that address consumer needs and concerns will have a distinct advantage.",
    url: "https://venturebeat.com/security/trust-emerges-as-the-path-forward-for-digital-assets-in-2023/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2021/12/GettyImages-939019528.jpg?w=1200&strip=all",
    publishedAt: "2023-03-08T21:07:00Z",
    content:
      "Even as the dust settles around disruptive technology, the future of digital assets or any asset minted and exchanged on a blockchain is yet to be decided. But after the chaotic year that crypto saw,… [+5669 chars]",
  },
  {
    source: {
      id: 44,
      name: "VentureBeat",
    },
    author: "Sri Krishna",
    title:
      "Autonomous agents and decentralized ML on tap as Fetch AI raises $40M",
    description:
      "To support intelligent agent and distributed blockchain technology, Web3 infrastructure provider Fetch AI has raised a fresh $40 million.",
    url: "https://venturebeat.com/ai/autonomous-agents-and-decentralized-ml-on-tap-as-fetch-ai-raises-40m/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2022/04/GettyImages-1226444511-Andrey-Suslov-e1661351743737.jpg?w=1200&strip=all",
    publishedAt: "2023-03-29T20:23:22Z",
    content:
      "Join top executives in San Francisco on July 11-12, to hear how leaders are integrating and optimizing AI investments for success. Learn More\r\nWeb3 infrastructure provider Fetch AI is looking to adva… [+1367 chars]",
  },
  {
    source: {
      id: 45,
      name: "MakeUseOf",
    },
    author: "Temitope Olatunji",
    title: "What Is a Risk-to-Reward Ratio? How to Calculate It",
    description:
      "Cryptocurrency trading requires balancing your risks with the potential reward.",
    url: "https://www.makeuseof.com/what-is-a-risk-to-reward-ratio-how-to-calculate-it/",
    urlToImage:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/laptop-with-chart-on-a-table-on-which-there-is-a-book-and-a-pen.jpg",
    publishedAt: "2023-03-17T20:00:16Z",
    content:
      "Due to the significant risks associated with crypto trading, taking the necessary measures to mitigate potential losses is important. That's why calculating your risk-to-reward ratio is an integral p… [+6448 chars]",
  },
  {
    source: {
      id: 46,
      name: "Hackaday",
    },
    author: "Bryan Cockfield",
    title: "Mice Play in VR",
    description:
      "Virtual Reality always seemed like a technology just out of reach, much like nuclear fusion, the flying car, or Linux on the desktop. It seems to be gaining steam in the last five years or so, thou…",
    url: "https://hackaday.com/2023/03/14/mice-play-in-vr/",
    urlToImage:
      "https://hackaday.com/wp-content/uploads/2023/03/mouse-vr-main.png",
    publishedAt: "2023-03-15T02:00:22Z",
    content:
      "Virtual Reality always seemed like a technology just out of reach, much like nuclear fusion, the flying car, or Linux on the desktop. It seems to be gaining steam in the last five years or so, though… [+1281 chars]",
  },
  {
    source: {
      id: 47,
      name: "CNET",
    },
    author: "Steven Musil",
    title: "Meta to Wind Down NFT Support on Facebook, Instagram - CNET",
    description:
      "Move comes less than a year after the company dove into the market for the digital assets.",
    url: "https://www.cnet.com/personal-finance/crypto/meta-to-wind-down-nft-support-on-facebook-instagram/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/c771e53146e660614a896650b73655205552d702/hub/2019/08/29/584babb8-d3ec-4cc6-ae27-31684372d09c/facebook-instagram-logos-phones-2.jpg?auto=webp&fit=crop&height=630&width=1200",
    publishedAt: "2023-03-13T23:24:00Z",
    content:
      "Meta plans to end support for NFTs on Facebook and Instagram, less than a year after jumping on the digital asset bandwagon.\r\nThe move was announced Monday by Meta commerce and fintech lead Stephane … [+1979 chars]",
  },
  {
    source: {
      id: 48,
      name: "The Guardian",
    },
    author: "Reuters",
    title:
      "FTX founder Sam Bankman-Fried set to plead not guilty to new US charges",
    description:
      "Bankman-Fried, 31, has already pleaded not guilty to eight counts over collapse of cryptocurrency exchange last yearFTX cryptocurrency exchange founder Sam Bankman-Fried is expected to plead not guilty on Thursday to new US criminal charges, which include con…",
    url: "https://www.theguardian.com/business/2023/mar/30/sam-bankman-fried-ftx-cryptocurrency-charges",
    urlToImage:
      "https://i.guim.co.uk/img/media/8e72cba341cb09d89ef554d7d320617f9009be37/0_18_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=63d878f19d8a6881202d7b16f524958f",
    publishedAt: "2023-03-30T13:01:10Z",
    content:
      "FTX cryptocurrency exchange founder Sam Bankman-Fried is expected to plead not guilty on Thursday to new US criminal charges, which include conspiring to violate campaign finance laws and bribe Chine… [+2021 chars]",
  },
  {
    source: {
      id: "49business-insider",
      name: "Business Insider",
    },
    author: "insider@insider.com (Eve Upton-Clark)",
    title: "Romance scammers are bilking Americans out of $1.3 billion a year",
    description:
      "Be careful who you trust online: more people are getting scammed out of thousands of dollars by people who claim to love them.",
    url: "https://www.businessinsider.com/romance-scams-booming-billions-facebook-instagram-pandemic-isolation-online-dating-2023-3",
    urlToImage:
      "https://i.insider.com/6414cb0ded35cc0019e49f81?width=1200&format=jpeg",
    publishedAt: "2023-03-20T10:01:00Z",
    content:
      "Kate Kleinert was home by herself one day in summer 2020 when she received a friend request from an attractive stranger on Facebook. He introduced himself as Tony, a Norwegian physician stationed in … [+12069 chars]",
  },
  {
    source: {
      id: 51,
      name: "MakeUseOf",
    },
    author: "Temitope Olatunji",
    title:
      "Simple vs. Exponential Moving Average: What Are Their Differences, and Which Is Better?",
    description:
      "These indicators help you trade cryptocurrency better. But which one should you use?",
    url: "https://www.makeuseof.com/simple-vs-exponential-moving-average-differences-which-is-better/",
    urlToImage:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/laptop-with-chart-on-a-table-on-which-there-is-a-book-and-a-pen.jpg",
    publishedAt: "2023-03-21T11:00:16Z",
    content:
      "Crypto traders often use moving averages for technical analysis to identify market trends and determine when to enter or exit positions. The most commonly used moving averages are the simple moving a… [+6045 chars]",
  },
  {
    source: {
      id: 52,
      name: "Internet",
    },
    author: "info@thehackernews.com (The Hacker News)",
    title:
      "Lookalike Telegram and WhatsApp Websites Distributing Cryptocurrency Stealing Malware",
    description:
      "Copycat websites for instant messaging apps like Telegram and WhatApp are being used to distribute trojanized versions and infect Android and Windows users with cryptocurrency clipper malware.\n\"All of them are after victims' cryptocurrency funds, with several…",
    url: "https://thehackernews.com/2023/03/lookalike-telegram-and-whatsapp.html",
    urlToImage:
      "https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEjbJ_mbGZEFvEvv18xP6quB8vUcoMKwcRZxcGzItNwN8qzzXE1tZ3Q4J0MruCrL4XHcTxBdC1E1zcH327fJxIQl0rN_uxvGGlfF1-yRfYDtI7GBWHsPjle8s_11aTteKo04R8Otk-zYoxoGAGD_iUaHWv7Uwx4WLDI_MIaqvF9CEe3qRysUKaoYcDuV/s728-e3650/android.png",
    publishedAt: "2023-03-17T10:22:00Z",
    content:
      'Copycat websites for instant messaging apps like Telegram and WhatApp are being used to distribute trojanized versions and infect Android and Windows users with cryptocurrency clipper malware.\r\n"All … [+3072 chars]',
  },
  {
    source: {
      id: "53business-insider",
      name: "Business Insider",
    },
    author: "zsalfiti@insider.com (Zinya Salfiti)",
    title:
      "Coinbase customer who lost $96,000 in a crypto hack has sued the exchange after getting the brush-off",
    description:
      "A Coinbase customer suing to recover the life savings stolen in a hack of his phone claims the crypto exchange told him the breach was his problem.",
    url: "https://markets.businessinsider.com/news/currencies/crypto-coinbase-hack-customer-sue-exchange-lost-life-savings-2023-3",
    urlToImage:
      "https://i.insider.com/63beb1c506706e0019a9bcc6?width=1200&format=jpeg",
    publishedAt: "2023-03-07T16:38:47Z",
    content:
      "A Coinbase customer said he lost $96,000 in a phone hack and now he's suing the US's largest cryptocurrency exchange after being told the breach was his problem.\r\nIn his lawsuit filed Monday, New Yor… [+2351 chars]",
  },
  {
    source: {
      id: "54business-insider",
      name: "Business Insider",
    },
    author: "mfox@businessinsider.com (Matthew Fox)",
    title:
      "Florida Governor Ron DeSantis proposes banning a digital currency from the Fed, arguing it will stifle innovation and promote surveillance",
    description:
      '"The Biden administration\'s efforts to inject a centralized bank digital currency is about surveillance and control," Governor Ron DeSantis said.',
    url: "https://markets.businessinsider.com/news/currencies/ron-desantis-ban-fed-digital-currency-surveillance-fears-cbdc-crypto-2023-3",
    urlToImage:
      "https://i.insider.com/6419ca2f1b5e1000186db10a?width=1200&format=jpeg",
    publishedAt: "2023-03-21T16:25:04Z",
    content:
      "Florida Governor Ron DeSantis is not on board with the potential launch of a central bank digital currency by the Federal Reserve.\r\nOn Monday, DeSantis proposed legislation that would make Florida th… [+2368 chars]",
  },
  {
    source: {
      id: 55,
      name: "Insiderintelligence.com",
    },
    author: "insider@insider.com (Adriana Nunez)",
    title: "Paytechs emerged mostly unscathed from the SVB fallout",
    description:
      "Visa, Mastercard, and several paytechs said their businesses were mostly uninterrupted despite ties with the now-collapsed bank.",
    url: "https://www.insiderintelligence.com/content/paytechs-emerged-mostly-unscathed-svb-fallout",
    urlToImage:
      "https://www.insiderintelligence.com/content/storage/socialsharingdefault/default-image-share.png?im=FitAndFill,width=1200,height=630",
    publishedAt: "2023-03-20T17:52:32Z",
    content:
      "The news: Major payments firms and fintechs noted that their businesses were mostly uninterrupted despite some close ties with now-collapsed Silicon Valley Bank, per Payments Dive. \r\n<ul><li>Visa and… [+2557 chars]",
  },
  {
    source: {
      id: "56business-insider",
      name: "Business Insider",
    },
    author: "mfox@businessinsider.com (Matthew Fox)",
    title:
      "There's a shocking similarity between the downfall of FTX and the implosion of Silicon Valley Bank, Fundstrat says",
    description:
      '"The speed of failure of SIVB is stunning and enabled in a digital world, in fact, its collapse mirrors the implosion of FTX," Fundstrat said.',
    url: "https://markets.businessinsider.com/news/stocks/silicon-valley-bank-implosion-ftx-fast-spreading-digital-panic-fundstrat-2023-3",
    urlToImage:
      "https://i.insider.com/63ca7aa02a1e600018b8d4b7?width=1200&format=jpeg",
    publishedAt: "2023-03-13T16:28:52Z",
    content:
      "Silicon Valley Bank imploded in a matter of days, and its swift downfall highlights the speed at which panic can spread in the digital era, according to Fundstrat's Tom Lee.\r\nThe investing world was … [+1999 chars]",
  },
  {
    source: {
      id: "57business-insider",
      name: "Business Insider",
    },
    author: "ztayeb@businessinsider.com (Zahra Tayeb)",
    title:
      "Bitcoin rises and crypto market tops $1 trillion again after US regulators bail out SVB customers",
    description:
      "Bitcoin's price jumped in a broad-based rally for cryptocurrencies Monday, after US regulators stepped in to bail out customers with money in Silicon Valley Bank.",
    url: "https://markets.businessinsider.com/news/currencies/crypto-bitcoin-silicon-valley-bank-svb-customer-bailout-regulators-2023-3",
    urlToImage:
      "https://i.insider.com/63cea91bb9a04b0019eda8e3?width=1200&format=jpeg",
    publishedAt: "2023-03-13T11:44:18Z",
    content:
      "Bitcoin's price jumped in a broad-based rally for cryptocurrencies Monday, after US regulators stepped in to bail out customers with money in Silicon Valley Bank. \r\nCryptos were staging a comeback fr… [+1897 chars]",
  },
  {
    source: {
      id: "58business-insider",
      name: "Business Insider",
    },
    author: "amcdade@insider.com (Aaron McDade)",
    title:
      "Sam Bankman-Fried's parents' home has become a spectacle for Stanford students as the FTX founder serves house arrest there",
    description:
      "Students told the Washington Post they have mixed feelings about the FTX founder's presence, who is out on a $250 million bond at his parent's house.",
    url: "https://www.businessinsider.com/sam-bankman-fried-ftx-house-arrest-attracts-stanford-students-2023-3",
    urlToImage:
      "https://i.insider.com/64035f2b37125e0018a117dc?width=1200&format=jpeg",
    publishedAt: "2023-03-04T17:31:44Z",
    content:
      "The house arrest of disgraced FTX founder Sam Bankman-Fried has drawn significant attention from surrounding residents namely Stanford students. \r\nThe fallen executive is currently out on a $250 mill… [+2411 chars]",
  },
  {
    source: {
      id: "59business-insider",
      name: "Business Insider",
    },
    author: "mchittum@insider.com (Morgan Chittum)",
    title:
      "US stocks rise as bank shares rebound and CPI shows inflation continues to cool",
    description:
      "Regional bank stocks surged Tuesday after cratering on SVB concerns a day earlier. Meanwhile, Moody's downgraded its outlook for the US banking sector.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-inflation-recession-dow-snaps-losing-streak-sp-2023-3",
    urlToImage:
      "https://i.insider.com/63e2c1fd96242f0019e7d91e?width=1200&format=jpeg",
    publishedAt: "2023-03-14T20:19:18Z",
    content:
      "US stocks climbed Tuesday as traders focused on the latest inflation data and continued to assess the fallout from the collapse of Silicon Valley Bank. The Dow Jones Industrial Average closed in the … [+1816 chars]",
  },
  {
    source: {
      id: "60business-insider",
      name: "Business Insider",
    },
    author: "mfox@businessinsider.com (Matthew Fox)",
    title:
      "Nvidia says crypto 'doesn't bring anything useful for society' as it turns its focus to artificial intelligence",
    description:
      "\"They bought a lot of stuff, and then eventually it collapsed, because it doesn't bring anything useful for society,\" Nvidia's CTO said.",
    url: "https://markets.businessinsider.com/news/stocks/nvidia-crypto-doesnt-bring-anything-useful-for-society-ai-focus-2023-3",
    urlToImage:
      "https://i.insider.com/6421aec7b50c2900186414bc?width=1200&format=jpeg",
    publishedAt: "2023-03-27T16:16:26Z",
    content:
      "Nvidia is looking beyond crypto as it shifts its focus to artificial intelligence, according to a recent interview with Nvidia CTO Michael Kagan.\r\nCrypto miners feverishly bought GPUs from Nvidia dur… [+1875 chars]",
  },
  {
    source: {
      id: "61business-insider",
      name: "Business Insider",
    },
    author: "tmohamed@insider.com (Theron Mohamed)",
    title:
      "Carefree gambling and partying in Las Vegas may signal a US recession isn't imminent, short seller Jim Chanos says",
    description:
      "Casinos on the Las Vegas Strip raked in big revenues in February, suggesting Americans are still spending freely, Chanos said.",
    url: "https://markets.businessinsider.com/news/stocks/jim-chanos-economy-recession-las-vegas-strip-party-casino-revenues-2023-3",
    urlToImage:
      "https://i.insider.com/60087c5a6d4c620018e410b3?width=1200&format=jpeg",
    publishedAt: "2023-03-29T13:07:23Z",
    content:
      'Fears of an imminent recession could be overblown given the carefree vibe in Las Vegas, Jim Chanos says.\r\n"The recession that FinTwit is convinced is upon us may be delayed because it is still partyi… [+2030 chars]',
  },
  {
    source: {
      id: "62reuters",
      name: "Reuters",
    },
    author: null,
    title: "Coinbase issued Wells notice by SEC",
    description:
      'Coinbase Global Inc <a href="https://www.reuters.com/companies/COIN.O" target="_blank">(COIN.O)</a> said on Wednesday it had received a notice from the U.S. Securities and Exchange Commission warning that the cryptocurrency exchange could face a civil action …',
    url: "https://www.reuters.com/legal/coinbase-issued-wells-notice-by-sec-2023-03-22/",
    urlToImage:
      "https://www.reuters.com/resizer/jl9XYeKeDAS9mJWC0OWsO6XNR9o=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HJ3QDYWTLRJ33EDDADEN7YH6WU.jpg",
    publishedAt: "2023-03-22T22:04:01Z",
    content:
      "March 22 (Reuters) - Coinbase Global Inc (COIN.O) said on Wednesday it had received a notice from the U.S. Securities and Exchange Commission warning that the cryptocurrency exchange could face a civ… [+674 chars]",
  },
  {
    source: {
      id: "63bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "NatWest limits cryptocurrency transfers over scam fears",
    description:
      "Customers will be able to transfer a maximum of £1,000 a day and up to £5,000 per month.",
    url: "https://www.bbc.co.uk/news/technology-64954119",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/94F0/production/_128982183_gettyimages-1248127985.jpg",
    publishedAt: "2023-03-14T14:47:41Z",
    content:
      "NatWest is limiting the amount of money customers can transfer to cryptocurrency exchanges.\r\nFrom Tuesday, customers will be able to transfer a maximum of £1,000 a day to such exchanges, and no more … [+2496 chars]",
  },
  {
    source: {
      id: 64,
      name: "Pitchfork",
    },
    author: "Matthew Ismael Ruiz",
    title:
      "Lil Yachty, Soulja Boy, Ne-Yo, Akon, and More Charged By SEC For Illegal Cryptocurrency Promotions",
    description:
      "Jake Paul, Linday Lohan, and other public figures were found to have promoted securities without disclosing their compensation",
    url: "https://pitchfork.com/news/lil-yachty-soulja-boy-ne-yo-akon-and-more-charged-by-sec-for-illegal-cryptocurrency-promotions/",
    urlToImage:
      "https://media.pitchfork.com/photos/641bb0b267f587dc8ca9fad6/16:9/w_1280,c_limit/lil-yachty.jpg",
    publishedAt: "2023-03-23T01:46:22Z",
    content:
      "Lil Yachty, Soulja Boy, Ne-Yo and Akon have been charged by the Securities and Exchange Commission for illegally promoting cryptocurrency. The artists were accused of accepting money to tout the cryp… [+2492 chars]",
  },
  {
    source: {
      id: 65,
      name: "MakeUseOf",
    },
    author: "Oluwademilade Afolabi",
    title: "What Is Double Spending in Blockchain and How Is It Prevented?",
    description:
      "Double spending can erode all trust in a cryptocurrency, which is why so much effort has gone into making sure this type of fraud doesn't happen.",
    url: "https://www.makeuseof.com/what-is-double-spending-in-blockchain-and-how-is-it-prevented/",
    urlToImage:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/blockchain-1.jpg",
    publishedAt: "2023-03-24T14:00:17Z",
    content:
      "Cryptocurrency transactions are secure and trustworthy thanks to blockchain technology. However, as with most innovative systems, the blockchain has exploitable vulnerabilities, which can lead to dou… [+7645 chars]",
  },
  {
    source: {
      id: 66,
      name: "MakeUseOf",
    },
    author: "Matthew Wallaker",
    title: "What Are Crypto Signal Groups? 5 Reasons You Shouldn't Trust Them",
    description:
      "You can't trust everything you read on the internet, and random cryptocurrency buy and sell signals are something to watch out for.",
    url: "https://www.makeuseof.com/what-are-crypto-signal-groups-reasons-you-shouldnt-trust-them/",
    urlToImage:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/12/crypto-stats-phone-1.jpg",
    publishedAt: "2023-03-18T10:31:16Z",
    content:
      "If you're looking for an easy way to start trading crypto, you might come across crypto signal groups. But what are crypto signal groups, and how do they work? Most important, should you trust them w… [+6150 chars]",
  },
  {
    source: {
      id: 67,
      name: "MakeUseOf",
    },
    author: "Adaeze Uche",
    title: "How Can You Avoid Crypto Ponzi and Pyramid Schemes?",
    description:
      "Heard of the classic Ponzi and pyramid schemes that scam you out of serious cash? There's now a cryptocurrency variation you need to know about...",
    url: "https://www.makeuseof.com/how-to-avoid-crypto-ponzi-pyramid-schemes/",
    urlToImage:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/crypto-ponzi-and-pyramid-scams.jpg",
    publishedAt: "2023-04-03T18:00:17Z",
    content:
      "Since the launch of Bitcoin (BTC) in 2009, cryptocurrencies have grown considerably and been adopted by the masses. However, the rise of digital assets has led to various scams, including Ponzi and p… [+8035 chars]",
  },
  {
    source: {
      id: 68,
      name: "Boing Boing",
    },
    author: "Jason Weisberger",
    title: "Shaq attempting to dodge service over an FTX lawsuit",
    description:
      "Shaquille O'Neal, NBA Hall of Famer and genie from Kazaam, is apparently hiding to evade service. A lawsuit filed by a retail investor in FTX alleges that Shaq, and a host of celebrity endorsers, misled investors. Shaq claims to have simply been a paid shill,…",
    url: "https://boingboing.net/2023/03/13/shaq-attempting-to-dodge-service-over-an-ftx-lawsuit.html",
    urlToImage:
      "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/03/kazaam.jpeg?fit=480%2C360&ssl=1",
    publishedAt: "2023-03-13T14:43:43Z",
    content:
      "Shaquille O'Neal, NBA Hall of Famer and genie from Kazaam, is apparently hiding to evade service. A lawsuit filed by a retail investor in FTX alleges that Shaq, and a host of celebrity endorsers, mis… [+1004 chars]",
  },
  {
    source: {
      id: 69,
      name: "Yahoo Entertainment",
    },
    author: "Eliza Bavin",
    title: "Man has two more chances before $232M in Bitcoin is lost forever",
    description:
      "After misplacing his digital wallet password, this man has only two more attempts before his millions are lost forever.",
    url: "https://au.finance.yahoo.com/news/man-has-two-more-chances-before-232-million-is-lost-forever-222045101.html",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2021-07/8de88490-eda3-11eb-aefe-da5c70e019cd",
    publishedAt: "2023-03-05T23:55:37Z",
    content:
      "The German-born man has used eight of his 10 attempts to access his Bitcoin. (Source: Getty)\r\nBack when Bitcoin was worth only $5 a coin, Stefan Thomas was paid 7,002 of them for making a video expla… [+1554 chars]",
  },
  {
    source: {
      id: 70,
      name: "The Guardian",
    },
    author: "Rowena Mason Whitehall editor",
    title:
      "Boris Johnson jokes he was given Partygate fine for ‘eating lunch at his desk’",
    description:
      "Former prime minister told audience in Lagos that his fine from police for breaking Covid laws was ‘bizarre’Boris Johnson has made light of his police fine for the Partygate scandal during a speech in Nigeria, joking that he was criminalised for standing up a…",
    url: "https://www.theguardian.com/politics/2023/mar/28/boris-johnson-jokes-he-was-given-partygate-fine-for-eating-lunch-at-his-desk",
    urlToImage:
      "https://i.guim.co.uk/img/media/33a3f243cdaf55db20dd0f87c818b7e836da0712/0_84_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5be4b694ffb6399c9016f8776df805ab",
    publishedAt: "2023-03-28T16:27:08Z",
    content:
      "Boris Johnson has made light of his police fine for the Partygate scandal during a speech in Nigeria, joking that he was criminalised for standing up and eating lunch at his desk for 20 minutes.\r\nThe… [+3504 chars]",
  },
  {
    source: {
      id: 73,
      name: "The Guardian",
    },
    author: "Alex Hern",
    title: "UK government drops plans for NFT made by Royal Mint",
    description:
      "Labour criticises Rishi Sunak ‘vanity project’ announced weeks before collapse in value of cryptocurrenciesThe UK government has dropped its plans to produce a non-fungible token for sale through the Royal Mint, just under a year after it first announced the …",
    url: "https://www.theguardian.com/technology/2023/mar/28/uk-government-nft-royal-mint-rishi-sunak-cryptocurrencies",
    urlToImage:
      "https://i.guim.co.uk/img/media/0d20402db30b415be415e92b2014d2945f83dd0a/0_543_8192_4918/master/8192.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=eb6d1718f97827c81e94eb1b7965e01d",
    publishedAt: "2023-03-28T11:22:30Z",
    content:
      "The UK government has dropped its plans to produce a non-fungible token for sale through the Royal Mint, just under a year after it first announced the project.\r\nIn response to a question from the Co… [+3120 chars]",
  },
  {
    source: {
      id: 74,
      name: "Motley Fool",
    },
    author: "newsfeedback@fool.com (Anders Bylund)",
    title: "Unstable Stablecoins: The Cryptocurrency Paradox",
    description:
      "Leading stablecoins didn't live up to the name this weekend, as a banking crisis rattled the cryptocurrency sector. Can you trust them in the future?",
    url: "https://www.fool.com/investing/2023/03/14/unstable-stablecoins-the-cryptocurrency-paradox/",
    urlToImage:
      "https://g.foolcdn.com/editorial/images/724461/sad-businessperson.jpg",
    publishedAt: "2023-03-14T09:30:00Z",
    content:
      "Stablecoins are digital currencies designed to maintain a stable value against a reference asset, such as the U.S. dollar. However, a rash of bank liquidations in and around the crypto market is shak… [+5374 chars]",
  },
  {
    source: {
      id: 75,
      name: "MakeUseOf",
    },
    author: "Katie Rees",
    title: "The 12 Main Pros and Cons of Crypto Explained",
    description:
      "Getting into crypto isn't clear-cut, so we've summarized the reasons why you and why you shouldn't.",
    url: "https://www.makeuseof.com/pros-cons-of-crypto-summarized/",
    urlToImage:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/02/gold-btc-dog-eth.jpg",
    publishedAt: "2023-03-04T11:15:15Z",
    content:
      "Cryptocurrency is an undeniably controversial kind of asset. While some love the crypto space and have invested thousands in the industry, others steer clear of crypto altogether, believing it to be … [+9071 chars]",
  },
  {
    source: {
      id: 76,
      name: "Phys.Org",
    },
    author: "Science X",
    title: "Stock market forces shown to drive cryptocurrency returns",
    description:
      "Having examined the impact of various factors on cryptocurrency returns, HSE economists found that fluctuations in cryptocurrency prices can be better explained by equity market risks than by factors specific to the crypto market, suggesting greater linkages …",
    url: "https://phys.org/news/2023-03-stock-shown-cryptocurrency.html",
    urlToImage: "https://scx2.b-cdn.net/gfx/news/hires/2018/2-bitcoin.jpg",
    publishedAt: "2023-03-15T20:11:03Z",
    content:
      "Having examined the impact of various factors on cryptocurrency returns, HSE economists found that fluctuations in cryptocurrency prices can be better explained by equity market risks than by factors… [+6065 chars]",
  },
  {
    source: {
      id: "77cnn",
      name: "CNN",
    },
    author: "Alicia Wallace",
    title:
      "Can the Fed help fend off a banking crisis while also cooling the economy?",
    description:
      "Last week, the Federal Reserve's biggest concern was a stubbornly high inflation rate and how much to crank up monetary policy tightening.",
    url: "https://www.cnn.com/2023/03/15/economy/fed-priority-cooling-economy-financial-stability/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230314081736-federal-reserve-031323.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-03-15T10:27:39Z",
    content:
      "Last week, the Federal Reserves biggest concern was a stubbornly high inflation rate and how much to crank up monetary policy tightening. \r\nIn recent days, a new bogeyman emerged in the form of a tri… [+6326 chars]",
  },
  {
    source: {
      id: 78,
      name: "MarketWatch",
    },
    author: "Frances Yue",
    title:
      "Crypto: Bitcoin falls after Fed chair Powell said interest rate cuts in 2023 are not likely",
    description:
      "Bitcoin fell Wednesday as the Fed raised its key interest rate by a quarter of a percentage point, as widely expected, while the Fed chairman Jerome Powell said it’s “the most likely case” that the central bank would refrain from cutting its key interest rate…",
    url: "https://www.marketwatch.com/story/bitcoin-falls-after-fed-chair-powell-said-interest-rate-cuts-in-2023-are-not-likely-b6001999",
    urlToImage: "https://images.mktw.net/im-701580/social",
    publishedAt: "2023-03-22T18:50:00Z",
    content:
      "Bitcoin fell Wednesday after the Federal Reserve raised its key interest rate by a quarter of a percentage point, as widely expected, while the Fed chairman Jerome Powell said its the most likely cas… [+1339 chars]",
  },
  {
    source: {
      id: 79,
      name: "Digital Trends",
    },
    author: "Alex Blake",
    title: "This Mac malware can steal your credit card data in seconds",
    description:
      "Think Macs can’t get viruses? Think again, as a new Mac malware strain has been found that steals credit card info, login data, and even your password database.",
    url: "https://www.digitaltrends.com/computing/macstealer-malware-steals-your-credit-card-data/",
    urlToImage:
      "https://www.digitaltrends.com/wp-content/uploads/2023/02/Apple-Craig-Federighi-security-privacy-1510.jpg?resize=1200%2C630&p=1",
    publishedAt: "2023-03-28T15:32:17Z",
    content:
      "Despite their reputation for security, Macs can still get viruses, and thats just been proven by a malicious new Mac malware that can steal your credit card info and send it back to the attacker, rea… [+2202 chars]",
  },
  {
    source: {
      id: 80,
      name: "Slashdot.org",
    },
    author: "EditorDavid",
    title:
      "Head of America's SEC: Crypto Firms Should Comply With US Regulations",
    description:
      "\"Crypto firms should do their work within the bounds of the law, or they shouldn't do it at all,\" says the head of America's Securities and Exchange Commission, which regulates US. investment markets. \n\nIn an editorial published in The Hill, SEC chair Gary Ge…",
    url: "https://news.slashdot.org/story/23/03/11/0444241/head-of-americas-sec-crypto-firms-should-comply-with-us-regulations",
    urlToImage: "https://a.fsdn.com/sd/topics/money_64.png",
    publishedAt: "2023-03-12T15:34:00Z",
    content:
      "\"Crypto firms should do their work within the bounds of the law, or they shouldn't do it at all,\" says the head of America's Securities and Exchange Commission, which regulates US. investment markets… [+3291 chars]",
  },
  {
    source: {
      id: "81business-insider",
      name: "Business Insider",
    },
    author: "zsalfiti@insider.com (Zinya Salfiti)",
    title:
      "Blame Silvergate's collapse on risky crypto, Elizabeth Warren says - but others slam 'arsonist and firefighter' crackdowns. 10 top experts on what pushed the bank to fail.",
    description:
      "Silvergate has failed, and debate is raging over whether volatile crypto or usual banking risks are to blame. Here's what Elizabeth Warren, Mike Novogratz and 8 other top voices had to say.",
    url: "https://markets.businessinsider.com/news/currencies/crypto-silvergate-bank-collapse-elizabeth-warren-novogratz-cz-binance-fix-2023-3",
    urlToImage:
      "https://i.insider.com/6409fb0b75a7270019db14bd?width=1200&format=jpeg",
    publishedAt: "2023-03-09T18:22:33Z",
    content:
      "Silvergate Capital, the mainstream bank that was once a key player in bridging a gap in the cryptocurrency industry, decided to write off its assets and close down Wednesday, only days after flagging… [+3769 chars]",
  },
  {
    source: {
      id: "82business-insider",
      name: "Business Insider",
    },
    author: "htan@insider.com (Huileng Tan)",
    title:
      "Signature Bank in New York went under on Sunday. Other lenders also named Signature Bank are scrambling to let customers know they're still open for business.",
    description:
      "Lenders going by the name of Signature Bank in other US states say they are not associated with the collapsed Signature Bank, New York.",
    url: "https://www.businessinsider.com/other-signature-banks-still-open-new-york-chicago-illinois-arkansas-2023-3",
    urlToImage:
      "https://i.insider.com/640feab0a3b2a10018b2c9ed?width=1200&format=jpeg",
    publishedAt: "2023-03-14T07:42:03Z",
    content:
      "Lenders with names similar to two recently collapsed US banks are scrambling to reassure customers that they are not related to their failed financial institution namesakes.\r\nAt least four other bank… [+2646 chars]",
  },
  {
    source: {
      id: "83business-insider",
      name: "Business Insider",
    },
    author: "insider@insider.com (Sindhu Sundar,Jacob Shamsian)",
    title:
      "The FBI is struggling to analyze Sam Bankman-Fried's laptop because it has so much data on it, prosecutors say",
    description:
      "It takes weeks to extract just Slack messages from Sam Bankman-Fried's laptop, an assistant US Attorney said, and longer still for the other data.",
    url: "https://www.businessinsider.com/sam-bankman-fried-ftx-laptop-data-messages-fbi-2023-3",
    urlToImage:
      "https://i.insider.com/6425ab88ed593e00183f4200?width=1200&format=jpeg",
    publishedAt: "2023-03-30T16:30:16Z",
    content:
      "Prosecutors have run into a roadblock while trying to analyze reams of data in their criminal case against Sam Bankman-Fried.\r\nIn a hearing in Manhattan federal court Thursday morning, Assistant US A… [+3212 chars]",
  },
  {
    source: {
      id: "84business-insider",
      name: "Business Insider",
    },
    author: "bgriffiths@insider.com (Brent D. Griffiths)",
    title:
      "Americans broadly support Biden bailing out Silicon Valley Bank even if Washington can't agree if it was a bailout: poll",
    description:
      "For now, polling suggests that there is no broader partisan split on the Biden administration's actions.",
    url: "https://www.businessinsider.com/svb-bailout-polling-silicon-valley-bank-collapse-americans-response-2023-3",
    urlToImage:
      "https://i.insider.com/640f5190a3b2a10018b2b262?width=1200&format=jpeg",
    publishedAt: "2023-03-14T17:52:29Z",
    content:
      "Early polling shows Americans broadly support the Biden administration's decision to bail out Silicon Valley Bank even if the White House and parts of Washington bristles at the use of the b-word ami… [+3494 chars]",
  },
  {
    source: {
      id: "85business-insider",
      name: "Business Insider",
    },
    author: "insider@insider.com (Jen Glantz)",
    title:
      "3 ways to protect your money following the SVB fallout — no matter where you bank",
    description:
      "If you're worried about your money following the fallout of Silicon Valley Bank, take these steps to make sure you'll be safe.",
    url: "https://www.businessinsider.com/personal-finance/ways-make-sure-money-protected-svb-fallout-2023-3",
    urlToImage:
      "https://i.insider.com/64109eb29aa2e6001956da47?width=1200&format=jpeg",
    publishedAt: "2023-03-14T18:43:55Z",
    content:
      "Our experts choose the best products and services to help make smart decisions with your money (here's how). In some cases, we receive a commission from our partners; however, our opinions are our ow… [+3449 chars]",
  },
  {
    source: {
      id: "86business-insider",
      name: "Business Insider",
    },
    author: "zsalfiti@insider.com (Zinya Salfiti)",
    title:
      "Binance customers pulled more than $1 billion the day US authorities slammed the crypto giant with a lawsuit",
    description:
      "Binance saw $1.3 billion in outflows on the day of the CFTC's lawsuit, according to crypto data provider Nansen.",
    url: "https://markets.businessinsider.com/news/currencies/binance-cz-changpeng-zhao-crypto-crackdown-cftc-lawsuit-customer-outflows-2023-3",
    urlToImage:
      "https://i.insider.com/61011fb70d35a90018258afb?width=1200&format=jpeg",
    publishedAt: "2023-03-29T12:18:34Z",
    content:
      "Binance customers pulled more than $1 billion from the troubled cryptocurrency giant the day US authorities slammed it with a lawsuit. \r\nThe exchange suffered $1.3 billion in outflows Monday after th… [+2663 chars]",
  },
  {
    source: {
      id: "87business-insider",
      name: "Business Insider",
    },
    author: "sbhaimiya@insider.com (Sawdah Bhaimiya)",
    title:
      "A brief history of Elon Musk's pets, including a 'nasty, brutish' Yorkshire Terrier named after a 17th century philosopher, and a cat called Schrödinger",
    description:
      "Elon Musk is a father to nine children and a string of pets, including a dog that bit people's ankles, and another that inspired a crypto meme coin.",
    url: "https://www.businessinsider.com/elon-musk-history-of-pets-dogs-cats-hobbes-floki-schrodinger-2023-3",
    urlToImage:
      "https://i.insider.com/64185313718b5300194b1738?width=1200&format=jpeg",
    publishedAt: "2023-03-23T14:53:23Z",
    content:
      "Billionaire Elon Musk may be the father of nine children and the boss of five major companies, but he still has time for a handful of four-legged friends. \r\nThe Twitter CEO has often publicly mention… [+2512 chars]",
  },
  {
    source: {
      id: "88business-insider",
      name: "Business Insider",
    },
    author: "mloh@insider.com (Matthew Loh)",
    title:
      "SBF played 'League of Legends' so much he was gaming during pitch meetings. Now his lawyers say there'll be no more online games for the crypto king.",
    description:
      "A new bail agreement proposes that Bankman-Fried can have a laptop with access to YouTube and DoorDash, but not his favorite video game.",
    url: "https://www.businessinsider.com/sbf-not-play-video-games-league-of-legends-ftx-bail-2023-3",
    urlToImage:
      "https://i.insider.com/6423c667b643e80019df4411?width=1200&format=jpeg",
    publishedAt: "2023-03-29T05:30:10Z",
  },
  {
    source: {
      id: 89,
      name: "Theregister.com",
    },
    author: "Jessica Lyons Hardcastle",
    title: "Malware disguised as Tor browser steals $400k in cryptocash",
    description:
      "Beware of third party downloads\nClipboard-injector malware disguised as Tor browser installers has been used to steal about $400,000 in cryptocurrency from nearly 16,000 users worldwide so far in 2023, according to Kaspersky researchers.…",
    url: "https://www.theregister.com/2023/03/30/kaspersky_clipboard_tor_malware/",
    urlToImage: "https://regmedia.co.uk/2023/03/29/tor_shutterstock.jpg",
    publishedAt: "2023-03-30T01:30:14Z",
    content:
      "Clipboard-injector malware disguised as Tor browser installers has been used to steal about $400,000 in cryptocurrency from nearly 16,000 users worldwide so far in 2023, according to Kaspersky resear… [+2997 chars]",
  },
  {
    source: {
      id: 90,
      name: "Motley Fool",
    },
    author: "newsfeedback@fool.com (Chris MacDonald)",
    title: "My Best Cryptocurrency to Buy Right Now",
    description:
      "Lido DAO is an under-appreciated but essential piece of the crypto puzzle.",
    url: "https://www.fool.com/investing/2023/03/08/my-best-cryptocurrency-to-buy-right-now/",
    urlToImage:
      "https://g.foolcdn.com/editorial/images/718765/staking-graphic-laptop.jpg",
    publishedAt: "2023-03-08T11:33:00Z",
    content:
      "The cryptocurrency market is in constant flux, with digital currencies soaring and tanking daily. Amid this volatility, it might be difficult to pick a token worth buying into.\r\nThat said, looking am… [+4052 chars]",
  },
  {
    source: {
      id: 91,
      name: "Motley Fool",
    },
    author: "newsfeedback@fool.com (Eric Volkman)",
    title: "Why The Sandbox Cryptocurrency Triumphed on Tuesday",
    description:
      "A big entertainment company's loss is the token's gain, it seems.",
    url: "https://www.fool.com/investing/2023/03/28/why-the-sandbox-cryptocurrency-triumphed-on-tuesda/",
    urlToImage:
      "https://g.foolcdn.com/editorial/images/726258/person-inspecting-a-rack-of-gpus.jpg",
    publishedAt: "2023-03-28T23:18:22Z",
    content:
      "What happened\r\nOn the surface, what happens with cryptocurrency The Sandbox(SAND 1.57%) has very little to do with events in corporate entertainment. Yet a recent move at TV and movie giant Walt Disn… [+1616 chars]",
  },
  {
    source: {
      id: 92,
      name: "Hackaday",
    },
    author: "Jonathan Bennett",
    title: "This Week in Security: USB Boom! Acropalypse, and a Bitcoin Heist",
    description:
      "We’ve covered a lot of sketchy USB devices over the years. And surely you know by now, if you find a USB drive, don’t plug it in to your computer. There’s more that could go wrong…",
    url: "https://hackaday.com/2023/03/24/this-week-in-security-usb-boom-acropalypse-and-a-bitcoin-heist/",
    urlToImage: "https://hackaday.com/wp-content/uploads/2016/01/darkarts.jpg",
    publishedAt: "2023-03-24T14:00:23Z",
    content:
      "We’ve covered a lot of sketchy USB devices over the years. And surely you know by now, if you find a USB drive, don’t plug it in to your computer. There’s more that could go wrong than just a malicio… [+9006 chars]",
  },
  {
    source: {
      id: "93politico",
      name: "Politico",
    },
    author: "Wesley Parnell",
    title: "Bankman-Fried pleads not guilty to five new charges",
    description:
      "A lawyer for the former cryptocurrency billionaire indicated he would contest the validity of new charges that prosecutors filed after his extradition.",
    url: "https://www.politico.com/news/2023/03/30/bankman-fried-pleads-not-guilty-to-five-new-charges-00089702",
    urlToImage:
      "https://static.politico.com/94/5e/a425a2564b95b2c330fa73d36c1a/ftx-bankman-fried-75020.jpg",
    publishedAt: "2023-03-30T18:25:38Z",
    content:
      "In the newest charge, prosecutors alleged on Tuesday that the former billionaire bribed Chinese officials after his trading firm, Alameda Research, was locked out of trading accounts on two of Chinas… [+884 chars]",
  },
  {
    source: {
      id: 94,
      name: "Theregister.com",
    },
    author: "Jeff Burt",
    title: "Attackers hit Bitcoin ATMs to steal $1.5 million in crypto cash",
    description:
      "Terminal maker General Bytes shutters its cloud business after second breach in seven months\nUnidentified miscreants have siphoned cryptocurrency valued at more than $1.5 million from Bitcoin ATMs by exploiting an unknown flaw in digicash delivery systems.…<!…",
    url: "https://www.theregister.com/2023/03/23/general_bytes_crypto_atm/",
    urlToImage:
      "https://regmedia.co.uk/2019/10/21/shutterstock_bitcoin_atm.jpg",
    publishedAt: "2023-03-23T09:02:06Z",
    content:
      "Unidentified miscreants have siphoned cryptocurrency valued at more than $1.5 million from Bitcoin ATMs by exploiting an unknown flaw in digicash delivery systems.\r\nAccording to General Bytes, the ou… [+4494 chars]",
  },
  {
    source: {
      id: 95,
      name: "Motley Fool",
    },
    author: "newsfeedback@fool.com (Rachel Warren)",
    title: "3 Supercharged Stocks With More Potential Than Any Cryptocurrency",
    description: "These growth stocks are going from strength to strength.",
    url: "https://www.fool.com/investing/2023/03/12/3-superior-growth-stocks-with-more-potential-than/",
    urlToImage:
      "https://g.foolcdn.com/editorial/images/724103/jumps-with-excitement-holding-phone-outdoors.jpg",
    publishedAt: "2023-03-12T11:53:00Z",
    content:
      "The volatility of the cryptocurrency market over the past year has largely disproved that it's a hedge against inflation, and many have headed for the hills. I'm not saying that investors should avoi… [+6116 chars]",
  },
  {
    source: {
      id: 96,
      name: "Motley Fool",
    },
    author: "newsfeedback@fool.com (Rachel Warren)",
    title: "3 Tech Stocks With More Potential Than Any Cryptocurrency",
    description:
      "These companies are on supercharged paths to growth, and patient investors who stay with them can capitalize.",
    url: "https://www.fool.com/investing/2023/03/12/3-tech-stocks-with-more-potential-than-any-cryptoc/",
    urlToImage:
      "https://g.foolcdn.com/editorial/images/724104/lying-in-despair-next-to-falling-graph.jpg",
    publishedAt: "2023-03-12T09:15:00Z",
    content:
      "While not all cryptocurrencies are created equal, and while some may make sense for a well-diversified investment portfolio, there remains a world of opportunity beyond this volatile space for indivi… [+6482 chars]",
  },
  {
    source: {
      id: 97,
      name: "Motley Fool",
    },
    author: "newsfeedback@fool.com (Eric Volkman)",
    title: "Why Coinbase Stock Was a Cryptocurrency Winner on Wednesday",
    description:
      "A good Tuesday for coins, tokens, and related assets spills over into Hump Day for the company.",
    url: "https://www.fool.com/investing/2023/03/15/why-coinbase-stock-was-a-cryptocurrency-winner-on/",
    urlToImage:
      "https://g.foolcdn.com/editorial/images/724813/pleased-person-using-a-pc.jpg",
    publishedAt: "2023-03-15T22:59:00Z",
    content:
      "What happened\r\nCryptocurrencies were a stinker of an asset class on Wednesday, but you wouldn't know that from the performance of one of their top exchange operators. Coinbase(COIN 2.90%) saw its sha… [+1430 chars]",
  },
  {
    source: {
      id: 98,
      name: "Motley Fool",
    },
    author: "newsfeedback@fool.com (Rachel Warren)",
    title: "3 Growth Stocks With More Potential Than Any Cryptocurrency",
    description:
      "These businesses may be dealing with market volatility, but green flags remain for each.",
    url: "https://www.fool.com/investing/2023/03/12/3-growth-stocks-with-more-potential-than-crypto/",
    urlToImage:
      "https://g.foolcdn.com/editorial/images/724100/two-people-a-laptop-and-their-bills.jpg",
    publishedAt: "2023-03-12T13:30:00Z",
    content:
      "While many cryptocurrency investments have been absolutely pummeled by the market over the last year, you don't have to put your money into digital currency in the hopes of supercharging your portfol… [+6294 chars]",
  },
  {
    source: {
      id: 99,
      name: "Theregister.com",
    },
    author: "Simon Sharwood",
    title: "B-List celebs including Lindsay Lohan fined after shilling crypto",
    description:
      "Didn't disclose payments as mastermind pumped up the value of tokens with fake trades\nEight very B-list celebrities have been fined for shilling a cryptocurrency without disclosing they were paid to do so, while the chap who paid them has been charged with fr…",
    url: "https://www.theregister.com/2023/03/23/lindsay_lohan_crypto/",
    urlToImage:
      "https://regmedia.co.uk/2023/03/23/shutterstock_lindsay_lohan.jpg",
    publishedAt: "2023-03-23T06:30:12Z",
    content:
      "Eight very B-list celebrities have agreed to cough up fines after being accused of shilling a cryptocurrency without disclosing they were paid to do so, while the chap who paid them has been charged … [+3557 chars]",
  },
  {
    source: {
      id: 100,
      name: "Theregister.com",
    },
    author: "Laura Dobberstein",
    title:
      "FTX cryptovillain Sam Bankman-Fried charged with bribing Chinese officials",
    description:
      "Court gives him new rules: Use one laptop, while living with the 'rents.\nUS authorities have charged FTX co-founder Sam Bankman-Fried (aka SBF) with attempting to bribe Chinese officials with $40 million worth of cryptocurrency in exchange for unfreezing trad…",
    url: "https://www.theregister.com/2023/03/29/us_charges_ftxs_sam_bankman/",
    urlToImage: "https://regmedia.co.uk/2016/06/07/bribery.jpg",
    publishedAt: "2023-03-29T10:24:10Z",
    content:
      "US authorities have charged FTX co-founder Sam Bankman-Fried (aka SBF) with attempting to bribe Chinese officials with $40 million worth of cryptocurrency in exchange for unfreezing trading accounts.… [+3222 chars]",
  },
  {
    source: {
      id: 101,
      name: "MakeUseOf",
    },
    author: "Katie Rees",
    title: "Linus Tech Tips YouTube Account Hacked to Promote Crypto Scams",
    description:
      "The popular YouTube channel Linus Tech Tips has been hacked, with live streams of crypto scam videos being uploaded by attackers.",
    url: "https://www.makeuseof.com/linus-tech-tips-youtube-hacked-to-promote-crypto-scams/",
    urlToImage:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/linus-tech-youtube.jpg",
    publishedAt: "2023-03-23T15:40:27Z",
    content:
      "The hugely popular YouTube channel Linus Tech Tips has been hacked in order to upload live streams of cryptocurrency scams. \r\nOn March 23, 2023, Linus Tech Tips, a tech reviews YouTube channel with o… [+2529 chars]",
  },
  {
    source: {
      id: 102,
      name: "Theregister.com",
    },
    author: "Brandon Vigliarolo",
    title: "FTX inner circle helped itself to $3.2B, liquidators say",
    description:
      "SBF alone pocketed $2.2B, or so this bankruptcy paperwork goes\nIn fresh filings in the FTX bankruptcy case, the cryptocurrency-exchange-slash-hedge-fund's liquidators say they've uncovered $3.2 billion (£2.6b) in payments and loans made to disgraced FTX found…",
    url: "https://www.theregister.com/2023/03/16/ftx_sbf_liquidator_claims/",
    urlToImage: "https://regmedia.co.uk/2023/03/16/shutterstock_sbf_comp.jpg",
    publishedAt: "2023-03-16T22:04:47Z",
    content:
      "In fresh filings in the FTX bankruptcy case, the cryptocurrency-exchange-slash-hedge-fund's liquidators say they've uncovered $3.2 billion (£2.6b) in payments and loans made to disgraced FTX founder … [+3574 chars]",
  },
  {
    source: {
      id: 103,
      name: "Motley Fool",
    },
    author: "newsfeedback@fool.com (RJ Fulton)",
    title:
      "Here's What Coinbase's CEO and Crypto Billionaire Thinks About Cryptocurrency Today",
    description:
      "As CEO of one of the top cryptocurrency exchanges, Brian Armstrong provides valuable insight on the cryptocurrency market.",
    url: "https://www.fool.com/investing/2023/03/08/heres-what-coinbase-ceo-and-crypto-billionaire-thi/",
    urlToImage:
      "https://g.foolcdn.com/editorial/images/723295/balance-a-book-a-gavel-and-a-cryptocurrency-coin.jpg",
    publishedAt: "2023-03-08T10:59:00Z",
    content:
      "Crypto in the U.S. is in a unique position. The asset class as a whole has rallied more than 40% since the beginning of 2023, yet is still down more than 60% from the highs of 2021.\r\nNow, adding to t… [+2858 chars]",
  },
  {
    source: {
      id: 104,
      name: "Biztoc.com",
    },
    author: "beincrypto.com",
    title: "Sees Your Cryptocurrency Transactions",
    description:
      "Crypto usage has been increasingly on the radar of tax authorities worldwide in recent years. The growing popularity of cryptocurrencies has increased their use for transactions and investments. Tax authorities want to ensure that individuals and businesses c…",
    url: "https://biztoc.com/x/3fd6763fc339acdf",
    urlToImage: "https://c.biztoc.com/p/3fd6763fc339acdf/og.webp",
    publishedAt: "2023-03-13T05:18:09Z",
    content:
      "Crypto usage has been increasingly on the radar of tax authorities worldwide in recent years. The growing popularity of cryptocurrencies has increased their use for transactions and investments. Tax … [+275 chars]",
  },
];
export default articles;
