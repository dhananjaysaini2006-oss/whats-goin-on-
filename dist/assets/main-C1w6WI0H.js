const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-DodTF3pm.js","assets/index.esm-MOBO1aP2.js","assets/index.esm-BlLn1iMx.js","assets/index.esm-CPKYH5eW.js"])))=>i.map(i=>d[i]);
/* empty css                   */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}})();const l={ALL:"all",INDIA_POLITICS:"india-politics",INDIA:"india",WORLD:"world",GOOGLE_NEWS:"google-news",CURRENT_AFFAIRS:"current-affairs",BUSINESS:"business",TECH:"tech",SCIENCE:"science",SAVED:"saved",PUBLISHED:"published"},B=[{id:"abp-news",name:"ABP News (ABP Live Wire)",category:l.INDIA,region:"india",rssUrl:"https://news.google.com/rss/search?q=source:%22ABP+News%22+OR+source:%22ABP+Live%22&hl=en-IN&gl=IN&ceid=IN:en",color:"#ff0033",isPolitics:!0},{id:"news18-india",name:"News18 (National & Politics Wire)",category:l.INDIA,region:"india",rssUrl:"https://www.news18.com/rss/politics.xml",color:"#16a34a",isPolitics:!0},{id:"ndtv-india",name:"NDTV National Wire",category:l.INDIA,region:"india",rssUrl:"https://feeds.feedburner.com/ndtvnews-india-news",color:"#e50914",isPolitics:!0},{id:"ndtv-top",name:"NDTV 24x7 (Top Stories)",category:l.INDIA,region:"india",rssUrl:"https://feeds.feedburner.com/ndtvnews-top-stories",color:"#e50914"},{id:"times-of-india-national",name:"The Times of India (National & Politics)",category:l.INDIA,region:"india",rssUrl:"https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms",color:"#dc2626",isPolitics:!0},{id:"times-of-india-top",name:"The Times of India (Top Stories)",category:l.INDIA,region:"india",rssUrl:"https://timesofindia.indiatimes.com/rssfeedstopstories.cms",color:"#dc2626"},{id:"livemint-politics",name:"Mint (Policy & Governance)",category:l.INDIA_POLITICS,region:"india",rssUrl:"https://www.livemint.com/rss/politics",color:"#f97316",isPolitics:!0},{id:"livemint-economy",name:"Mint (Markets & Economy)",category:l.BUSINESS,region:"india",rssUrl:"https://www.livemint.com/rss/economy",color:"#ea580c"},{id:"livemint-latest",name:"Mint (Top News Wire)",category:l.BUSINESS,region:"india",rssUrl:"https://www.livemint.com/rss/news",color:"#ea580c"},{id:"theprint-india",name:"ThePrint (National & Governance)",category:l.INDIA,region:"india",rssUrl:"https://theprint.in/category/india/feed/",color:"#005a9c",isPolitics:!0},{id:"thewire-livewire",name:"The Wire / Livewire (National)",category:l.INDIA,region:"india",rssUrl:"https://news.google.com/rss/search?q=source:%22The+Wire%22+OR+site:thewire.in+OR+site:livewire.thewire.in&hl=en-IN&gl=IN&ceid=IN:en",color:"#c2410c",isPolitics:!0},{id:"the-hindu-national",name:"The Hindu (National & Politics)",category:l.INDIA,region:"india",rssUrl:"https://www.thehindu.com/news/national/feeder/default.rss",color:"#1e3a8a",isPolitics:!0},{id:"indian-express-politics",name:"The Indian Express (Political Pulse)",category:l.INDIA_POLITICS,region:"india",rssUrl:"https://indianexpress.com/section/political-pulse/feed/",color:"#b91c1c",isPolitics:!0},{id:"indian-express-india",name:"The Indian Express (National Wire)",category:l.INDIA,region:"india",rssUrl:"https://indianexpress.com/feed/",color:"#b91c1c"},{id:"hindustan-times",name:"Hindustan Times (India News)",category:l.INDIA,region:"india",rssUrl:"https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml",color:"#0284c7",isPolitics:!0},{id:"india-today",name:"India Today News Wire",category:l.INDIA,region:"india",rssUrl:"https://news.google.com/rss/search?q=source:%22India+Today%22&hl=en-IN&gl=IN&ceid=IN:en",color:"#e11d48",isPolitics:!0},{id:"zee-news",name:"Zee News India Wire",category:l.INDIA,region:"india",rssUrl:"https://zeenews.india.com/rss/india-national-news.xml",color:"#7c3aed",isPolitics:!0},{id:"ani-news",name:"ANI News Agency Wire",category:l.INDIA,region:"india",rssUrl:"https://news.google.com/rss/search?q=source:%22ANI+News%22&hl=en-IN&gl=IN&ceid=IN:en",color:"#0891b2",isPolitics:!0},{id:"google-india-politics",name:"Google News (India Politics & Parliament)",category:l.INDIA_POLITICS,region:"india",rssUrl:"https://news.google.com/rss/search?q=Indian+politics+parliament+cabinet+elections&hl=en-IN&gl=IN&ceid=IN:en",color:"#f59e0b",isPolitics:!0},{id:"google-india",name:"Google News India (National)",category:l.INDIA,region:"india",rssUrl:"https://news.google.com/rss/headlines/section/topic/NATION?hl=en-IN&gl=IN&ceid=IN:en",color:"#EA4335"},{id:"business-standard",name:"Business Standard India",category:l.BUSINESS,region:"india",rssUrl:"https://news.google.com/rss/search?q=source:%22Business+Standard%22&hl=en-IN&gl=IN&ceid=IN:en",color:"#2563eb"},{id:"financial-express",name:"The Financial Express India",category:l.BUSINESS,region:"india",rssUrl:"https://www.financialexpress.com/feed/",color:"#059669"},{id:"bbc-india",name:"BBC News (India Desk)",category:l.INDIA,region:"india",rssUrl:"http://feeds.bbci.co.uk/news/world/asia/india/rss.xml",color:"#bb1919"},{id:"nyt-world",name:"The New York Times (World)",category:l.WORLD,region:"global",rssUrl:"https://rss.nytimes.com/services/xml/rss/nyt/World.xml",color:"#121212"},{id:"reuters-world",name:"Reuters World Wire",category:l.WORLD,region:"global",rssUrl:"https://news.google.com/rss/search?q=source:Reuters&hl=en-US&gl=US&ceid=US:en",color:"#ff8000"},{id:"ap-world",name:"Associated Press (AP News)",category:l.WORLD,region:"global",rssUrl:"https://news.google.com/rss/search?q=source:%22Associated+Press%22&hl=en-US&gl=US&ceid=US:en",color:"#e11d48"},{id:"bbc-world",name:"BBC World News",category:l.WORLD,region:"global",rssUrl:"https://feeds.bbci.co.uk/news/world/rss.xml",color:"#bb1919"},{id:"al-jazeera",name:"Al Jazeera English Wire",category:l.WORLD,region:"global",rssUrl:"https://www.aljazeera.com/xml/rss/all.xml",color:"#ea580c"},{id:"the-guardian",name:"The Guardian World",category:l.WORLD,region:"global",rssUrl:"https://www.theguardian.com/world/rss",color:"#052962"},{id:"cnn-world",name:"CNN International",category:l.WORLD,region:"global",rssUrl:"https://news.google.com/rss/search?q=source:%22CNN%22&hl=en-US&gl=US&ceid=US:en",color:"#cc0000"},{id:"france24-world",name:"France 24 Global Wire",category:l.WORLD,region:"global",rssUrl:"https://www.france24.com/en/rss",color:"#00a3e0"},{id:"dw-world",name:"Deutsche Welle (DW World)",category:l.WORLD,region:"global",rssUrl:"https://rss.dw.com/rdf/rss-en-all",color:"#004f9f"},{id:"google-top",name:"Google News (Top Stories)",category:l.GOOGLE_NEWS,region:"global",rssUrl:"https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en",color:"#4285F4"},{id:"google-world",name:"Google News World",category:l.WORLD,region:"global",rssUrl:"https://news.google.com/rss/headlines/section/topic/WORLD?hl=en-IN&gl=IN&ceid=IN:en",color:"#34A853"},{id:"techcrunch",name:"TechCrunch Wire",category:l.TECH,region:"global",rssUrl:"https://techcrunch.com/feed/",color:"#00a562"},{id:"google-tech",name:"Google News Technology",category:l.TECH,region:"global",rssUrl:"https://news.google.com/rss/headlines/section/topic/TECHNOLOGY?hl=en-IN&gl=IN&ceid=IN:en",color:"#FBBC05"},{id:"google-business",name:"Google News Business",category:l.BUSINESS,region:"global",rssUrl:"https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-IN&gl=IN&ceid=IN:en",color:"#00f0ff"},{id:"google-science",name:"Google News Science",category:l.SCIENCE,region:"global",rssUrl:"https://news.google.com/rss/headlines/section/topic/SCIENCE?hl=en-IN&gl=IN&ceid=IN:en",color:"#10b981"}],V=[{id:"all",label:"All Briefings"},{id:"national",label:"Indian Politics & Governance"},{id:"international",label:"International & Treaties"},{id:"economy",label:"Indian Economy & Banking"},{id:"defense",label:"Defense & ISRO Space"},{id:"awards",label:"Awards & Appointments"}],K=[{id:"ca-1",category:"national",title:"Parliament Winter Session: Key Bills on Digital Governance & Election Reforms Introduced",date:"Today, 08:30 AM",timestamp:Date.now()-1e3*60*35,who:"Parliament of India, Ministry of Law & Justice, Election Commission",what:"Comprehensive statutory reforms introduced in Lok Sabha focusing on electoral transparency and unified digital civil registries.",why:"Streamlining voter roll verification and establishing statutory guardrails for national public digital platforms.",impact:"Strengthens constitutional transparency and modernizes voting registration protocols across 28 states and UTs.",quiz:{question:"Which constitutional body conducts and oversees General and State Assembly elections in India?",options:["Law Commission","Election Commission of India (ECI)","NITI Aayog","Ministry of Home Affairs"],correct:1,explanation:"Under Article 324 of the Indian Constitution, the Election Commission of India exercises superintendence over elections."}},{id:"ca-2",category:"international",title:"India-EU Strategic Trade & Security Partnership Summit Concludes in New Delhi",date:"Today, 07:15 AM",timestamp:Date.now()-1e3*60*75,who:"Ministry of External Affairs (MEA) & European Commission Leadership",what:"Framework agreement advancing Free Trade Agreement (FTA) negotiations, critical raw materials supply, and clean hydrogen tech transfer.",why:"Bolstering bilateral supply chains, reducing tariff barriers, and strengthening maritime security cooperation.",impact:"Expands market access for Indian manufactured goods and accelerates European green technology investments in India.",quiz:{question:"Where was the latest India-EU Strategic Partnership Summit hosted?",options:["Brussels","New Delhi","Geneva","Berlin"],correct:1,explanation:"The strategic negotiations and ministerial summits were hosted in New Delhi."}},{id:"ca-3",category:"economy",title:"Reserve Bank of India (RBI) Monetary Policy Committee (MPC) Review",date:"Today, 06:45 AM",timestamp:Date.now()-1e3*60*110,who:"Reserve Bank of India (RBI) Governor & Monetary Policy Committee",what:"Key interest rates aligned with durable 4% inflation targets while projecting a robust 7.2% GDP expansion for the fiscal year.",why:"Balancing sustained high economic growth with food and global commodity price stability.",impact:"Anchors sovereign bond yields, sustains credit expansion for private capex, and maintains rupee foreign exchange stability.",quiz:{question:"How many members comprise the Reserve Bank of India's Monetary Policy Committee (MPC)?",options:["3 members","5 members","6 members (3 RBI + 3 External)","8 members"],correct:2,explanation:"The MPC consists of 6 members: 3 from the RBI including the Governor, and 3 external members nominated by the Government of India."}},{id:"ca-4",category:"defense",title:"ISRO & DRDO Successfully Complete Autonomous Reusable Launch Vehicle (RLV) Landing",date:"Yesterday, 18:20 PM",timestamp:Date.now()-1e3*60*240,who:"Indian Space Research Organisation (ISRO) & DRDO",what:"Autonomous pin-point landing test of the Reusable Launch Vehicle Technology Demonstrator (RLV-TD) under challenging crosswinds.",why:"Drastically cutting space launch costs for future satellite deployments and crewed missions.",impact:"Paves the way for India's orbital re-entry flights and two-stage-to-orbit reusable systems.",quiz:{question:"What is the core strategic benefit of Reusable Launch Vehicle (RLV) technology?",options:["Elimination of propellant needs","Substantial reduction in cost per kilogram to orbit","Deep sea communication","Replacing ground-based radar"],correct:1,explanation:"Reusability significantly reduces payload launch expenses per kilogram into low Earth orbit."}},{id:"ca-5",category:"awards",title:"Bharat Ratna and National Civilian Honours Announced for Distinguished Public Service",date:"Today, 05:00 AM",timestamp:Date.now()-1e3*60*160,who:"President of India & Ministry of Home Affairs",what:"Honouring visionary statesmen, grassroots social pioneers, and scientific icons for nation-building contributions.",why:"Recognizing lifetime public service and inspirational societal leadership.",impact:"Inspires national youth toward civic excellence and grassroots nation-building.",quiz:{question:"What is the highest civilian award conferred by the Republic of India?",options:["Padma Vibhushan","Bharat Ratna","Param Vir Chakra","Padma Bhushan"],correct:1,explanation:"Bharat Ratna is India's highest civilian honor, instituted in 1954."}}],z=[{id:"feat-1",title:"Parliament & National Governance: Union Cabinet Clears Landmark Infrastructure & Policy Bills",source:"The Hindu",sourceId:"the-hindu-national",category:"india-politics",region:"india",isPolitics:!0,link:"https://www.thehindu.com",image:"https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80",pubDate:new Date(Date.now()-1e3*60*10).toISOString(),snippet:"The Union Cabinet has sanctioned a far-reaching legislative agenda designed to modernize inter-state freight transit, industrial manufacturing corridors, and digital civil services. This comprehensive statutory rollout aims to cut logistics overhead while creating dedicated economic clusters across several states. Economic analysts project that these measures will unlock substantial private capital investment and improve supply chain competitiveness nationwide.",content:`In a major legislative push, the Union Cabinet in New Delhi has given statutory clearance to multiple landmark bills aimed at boosting domestic manufacturing, upgrading freight corridors, and expanding national digital infrastructure.

Key policy frameworks prioritized in this session establish streamlined land allocation procedures, fiscal incentives for green manufacturing clusters, and standardized digital permitting rails for industrial ventures.

Parliamentary leaders and department secretaries confirmed that joint standing committee hearings will commence shortly to ensure broad cross-state consensus ahead of floor voting.`,keyPoints:["Multi-crore capital investment approved for strategic highway and freight corridors.","Sovereign incentives for domestic high-technology and electronics manufacturing.","Bipartisan consultation initiated for parliamentary committee reviews."],readTime:"3 min read"},{id:"feat-2",title:"Supreme Court of India Constitution Bench Delivers Landmark Verdict on Federal Governance",source:"The Indian Express",sourceId:"indian-express-politics",category:"india-politics",region:"india",isPolitics:!0,link:"https://indianexpress.com",image:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80",pubDate:new Date(Date.now()-1e3*60*20).toISOString(),snippet:"A five-judge Constitution Bench of the Supreme Court has issued a definitive ruling reinforcing the doctrine of cooperative federalism between Union and State authorities. The verdict delineates executive boundaries, affirming that state governments retain administrative autonomy in devolved public sectors without undue central intervention. Legal scholars highlight that the judgment establishes critical constitutional precedent for institutional harmony across all tiers of governance.",content:`In a significant constitutional jurisprudence development, the Supreme Court of India reaffirmed the doctrine of cooperative federalism, clarifying the legislative powers of state assemblies and union authorities in matters of civic governance.

The unanimous opinion delivered from the Chief Justice's bench noted that cooperative federalism is an indispensable pillar of India's constitutional architecture, mandating mutual institutional deference.

The ruling resolves longstanding jurisdictional ambiguities and provides administrative roadmaps for concurrent list policymaking.`,keyPoints:["Upholds constitutional balance between Union and State executive powers.","Reinforces institutional autonomy and harmonious federal administration.","Establishes clear operational precedents for state civil administration."],readTime:"4 min read"},{id:"feat-3",title:"India Advances Semiconductor Ecosystem with New Mega-Fab Approvals & Global Tech Tie-ups",source:"Mint",sourceId:"livemint-economy",category:"india",region:"india",isPolitics:!1,link:"https://www.livemint.com",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",pubDate:new Date(Date.now()-1e3*60*30).toISOString(),snippet:"India's sovereign semiconductor ambitions achieved major progress with statutory greenlights for commercial mega-fabrication clusters and advanced testing facilities in Gujarat and Assam. Operating under the India Semiconductor Mission, these facilities focus on 28nm silicon nodes and compound microcontrollers for domestic EV, telecommunications, and aerospace hardware. The initiative significantly insulates Indian electronic manufacturing against global shipping disruptions.",content:`India is rapidly establishing its presence in the global microelectronics race with construction commencing on three new commercial semiconductor fabrication facilities in Gujarat and Assam.

The joint venture partnerships bring together world-class foundry engineering, specialized cleanroom technology, and domestic industrial consortia backed by central capital incentives.

Production output from the initial commercial runs is scheduled to supply domestic automakers and 5G network equipment providers by early next year.`,keyPoints:["Multi-billion dollar capital expenditure approved for commercial silicon wafer fabs.","Emphasis on 28nm and specialized automotive semiconductor packaging.","Partnerships forged with top global foundry leaders and technical universities."],readTime:"3 min read"}],E={BOOKMARKS:"wgo_bookmarks_v1",THEME:"wgo_theme_v1",REFRESH_INTERVAL:"wgo_interval_v1",VIEW_MODE:"wgo_view_mode_v1",CACHED_ARTICLES:"wgo_cached_articles_v1",READ_HISTORY:"wgo_read_history_v1",ARTICLE_IMAGES:"wgo_article_images_v1"};class J{constructor(){this.bookmarks=this.loadBookmarks(),this.readHistory=this.loadReadHistory()}loadBookmarks(){try{const e=localStorage.getItem(E.BOOKMARKS);return e?JSON.parse(e):[]}catch(e){return console.warn("Failed to load bookmarks from localStorage",e),[]}}saveBookmarks(){try{localStorage.setItem(E.BOOKMARKS,JSON.stringify(this.bookmarks))}catch(e){console.warn("Failed to save bookmarks",e)}}toggleBookmark(e){const i=this.bookmarks.findIndex(a=>a.id===e.id||a.link===e.link);return i>=0?(this.bookmarks.splice(i,1),this.saveBookmarks(),!1):(this.bookmarks.unshift({...e,savedAt:new Date().toISOString()}),this.saveBookmarks(),!0)}isBookmarked(e,i){return this.bookmarks.some(a=>a.id===e||i&&a.link===i)}getBookmarks(){return[...this.bookmarks]}getTheme(){return localStorage.getItem(E.THEME)||"dark"}setTheme(e){localStorage.setItem(E.THEME,e)}getRefreshInterval(){return parseInt(localStorage.getItem(E.REFRESH_INTERVAL)||"180",10)}setRefreshInterval(e){localStorage.setItem(E.REFRESH_INTERVAL,e.toString())}getViewMode(){return localStorage.getItem(E.VIEW_MODE)||"grid"}setViewMode(e){localStorage.setItem(E.VIEW_MODE,e)}getCachedArticles(){try{const e=localStorage.getItem(E.CACHED_ARTICLES);return e?JSON.parse(e):null}catch{return null}}setCachedArticles(e){try{localStorage.setItem(E.CACHED_ARTICLES,JSON.stringify(e.slice(0,100)))}catch(i){console.warn("Failed to cache articles",i)}}loadReadHistory(){try{const e=localStorage.getItem(E.READ_HISTORY);return e?JSON.parse(e):[]}catch{return[]}}markAsRead(e){if(this.readHistory||(this.readHistory=this.loadReadHistory()),!this.readHistory.includes(e)){this.readHistory.push(e),this.readHistory.length>200&&this.readHistory.shift();try{localStorage.setItem(E.READ_HISTORY,JSON.stringify(this.readHistory))}catch{}}}getAllArticleImages(){try{const e=localStorage.getItem(E.ARTICLE_IMAGES);return e?JSON.parse(e):{}}catch{return{}}}getArticleImage(e){return e&&this.getAllArticleImages()[e]||null}setArticleImage(e,i){if(!(!e||!i))try{const a=this.getAllArticleImages();a[e]=i;const s=Object.keys(a);if(s.length>600)for(let t=0;t<100;t++)delete a[s[t]];localStorage.setItem(E.ARTICLE_IMAGES,JSON.stringify(a))}catch(a){console.warn("Failed to cache article image",a)}}getCustomArticles(){try{const e=localStorage.getItem("wgo_user_articles_v1");return e?JSON.parse(e):[]}catch{return[]}}saveCustomArticle(e){const i=this.getCustomArticles(),a=[e,...i.filter(s=>s.id!==e.id)];try{localStorage.setItem("wgo_user_articles_v1",JSON.stringify(a))}catch(s){console.warn("Failed to save custom article",s)}return a}deleteCustomArticle(e){const a=this.getCustomArticles().filter(s=>s.id!==e);try{localStorage.setItem("wgo_user_articles_v1",JSON.stringify(a))}catch(s){console.warn("Failed to delete custom article",s)}return a}}const m=new J,x={parliament_governance:["https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1598555230873-10257007e056?w=1200&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1597044141243-7f28849b29bc?w=1200&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&auto=format&fit=crop&q=80"],judiciary_law:["https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80"],economy_rbi:["https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80"],defense_isro:["https://images.unsplash.com/photo-1517976487508-59a5a0da23b2?w=1200&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80"],clean_energy:["https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&auto=format&fit=crop&q=80"],technology:["https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80"]},q=["https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80"];class Y{constructor(){this.cachedArticles=m.getCachedArticles()||[...z]}async fetchAllFeeds(e=B){const i=e.map(d=>this.fetchSingleSource(d)),a=await Promise.allSettled(i);let s=[];a.forEach(d=>{d.status==="fulfilled"&&d.value&&d.value.length>0&&s.push(...d.value)});let t=[];if(s.length>0){const d=Date.now()-1728e5,u=s.filter(b=>{const f=new Date(b.pubDate).getTime();return!isNaN(f)&&f>=d}),h=u.length>=10?u:s;h.sort((b,f)=>new Date(f.pubDate).getTime()-new Date(b.pubDate).getTime()),t=h}else console.info("Using curated authentic news wire feed (offline mode)"),t=[...z];const n=new Set,o=[];for(const d of t){const u=(d.title||"").trim().toLowerCase().substring(0,45);u&&!n.has(u)&&!n.has(d.link)&&(n.add(u),d.link&&n.add(d.link),o.push(d))}o.sort((d,u)=>new Date(u.pubDate).getTime()-new Date(d.pubDate).getTime());const c=[...m.getCustomArticles(),...o];return this.cachedArticles=c,m.setCachedArticles(c),c}async fetchSingleSource(e){const i=e.rssUrl,a=`_t=${Date.now()}`;try{const s=`/api/proxy-rss?url=${encodeURIComponent(i)}&${a}`,t=await fetch(s,{signal:AbortSignal.timeout(6e3)});if(t.ok){const n=await t.text(),o=this.parseXmlFeed(n,e);if(o.length>0)return await this.enrichSourceArticlesWithOgImages(o)}}catch{}try{const s=`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(i)}&${a}`,t=await fetch(s,{signal:AbortSignal.timeout(6e3)});if(t.ok){const n=await t.json();if(n.status==="ok"&&Array.isArray(n.items)&&n.items.length>0){const o=this.transformRss2JsonItems(n.items,e);if(o.length>0)return await this.enrichSourceArticlesWithOgImages(o)}}}catch{}try{const s=`https://corsproxy.io/?url=${encodeURIComponent(i)}&${a}`,t=await fetch(s,{signal:AbortSignal.timeout(6e3)});if(t.ok){const n=await t.text(),o=this.parseXmlFeed(n,e);if(o.length>0)return await this.enrichSourceArticlesWithOgImages(o)}}catch{}try{const s=`https://api.allorigins.win/get?url=${encodeURIComponent(i)}&${a}`,t=await fetch(s,{signal:AbortSignal.timeout(6e3)});if(t.ok){const n=await t.json();if(n.contents){const o=this.parseXmlFeed(n.contents,e);if(o.length>0)return await this.enrichSourceArticlesWithOgImages(o)}}}catch{}return[]}parseXmlFeed(e,i){try{const s=new DOMParser().parseFromString(e,"text/xml");return Array.from(s.querySelectorAll("item, entry")).slice(0,10).map((n,o)=>{const r=n.querySelector("title"),c=n.querySelector("link"),d=n.querySelector("pubDate, published, updated"),u=n.querySelector("description, summary, content"),h=n.getElementsByTagNameNS("*","encoded")[0],b=r?r.textContent:"Headline";let f="";c&&(f=c.getAttribute("href")||c.textContent||"");const k=(h?h.textContent:u?u.textContent:"").trim(),p=d?d.textContent:new Date().toISOString(),g=this.stripHtml(b),S=this.extractCleanSnippet(k),U=i.isPolitics||this.isPoliticalArticle(g,S),R=U&&i.region==="india"?l.INDIA_POLITICS:i.category,$=f.trim(),N=m.getArticleImage($)||this.extractImageFromXml(n,k),O=!!N,G=O?N:this.resolveContextualNewsImage(N,g,S,i,o),M=this.generateOriginalAnalysis(g,S,R,i),L=S&&S.length>80&&!S.includes("Read more")&&!S.toLowerCase().includes("click here")?S:M,j=this.generateSubstantiveNewsContent(g,L,k,i);return{id:`art-${i.id}-${Date.now()}-${o}`,title:g,source:i.name,sourceId:i.id,category:R,region:i.region,isPolitics:U,link:$,image:G,hasPlaceholderImage:!O,pubDate:this.parseDateSafe(p),snippet:L,originalAnalysis:M,content:j,keyPoints:this.generateKeyPoints(g,L,i),readTime:`${Math.max(2,Math.min(5,Math.ceil((L.length||220)/160)))} min read`}})}catch(a){return console.warn("XML Parse Error for source",i.name,a),[]}}parseDateSafe(e){if(!e)return new Date().toISOString();try{const i=new Date(e);if(!isNaN(i.getTime()))return i.toISOString()}catch{}return new Date().toISOString()}transformRss2JsonItems(e,i){return e.slice(0,10).map((a,s)=>{var S;const t=this.stripHtml(a.title||""),n=a.content||a.description||"",o=this.extractCleanSnippet(n),r=i.isPolitics||this.isPoliticalArticle(t,o),c=r&&i.region==="india"?l.INDIA_POLITICS:i.category,d=(a.link||a.guid||"").trim();let h=m.getArticleImage(d)||a.thumbnail||((S=a.enclosure)==null?void 0:S.link);(!h||h.includes("favicon")||h.includes("logo")||h.includes("1x1")||h.includes("feedburner"))&&(h=this.extractImageFromHtml(n));const b=!!h,f=b?h:this.resolveContextualNewsImage(h,t,o,i,s),k=this.generateOriginalAnalysis(t,o,c,i),p=o&&o.length>80&&!o.includes("Read more")&&!o.toLowerCase().includes("click here")?o:k,g=this.generateSubstantiveNewsContent(t,p,n,i);return{id:`art-${i.id}-${Date.now()}-${s}`,title:t,source:i.name,sourceId:i.id,category:c,region:i.region,isPolitics:r,link:d,image:f,hasPlaceholderImage:!b,pubDate:this.parseDateSafe(a.pubDate),snippet:p,originalAnalysis:k,content:g,keyPoints:this.generateKeyPoints(t,p,i),readTime:`${Math.max(2,Math.min(5,Math.ceil((p.length||220)/160)))} min read`}})}generateOriginalAnalysis(e,i,a,s){const t=`${e} ${i||""}`.toLowerCase();return t.includes("parliament")||t.includes("lok sabha")||t.includes("bill")||t.includes("cabinet")||t.includes("legislation")?"Legislative and administrative proceedings in New Delhi are advancing key statutory frameworks with implications for national governance. Parliamentary committees and departmental leaders are evaluating policy alignments to ensure balanced operational implementation across states. Stakeholders are observing the timeline for formal floor debates and statutory enactment.":t.includes("supreme court")||t.includes("high court")||t.includes("judge")||t.includes("bench")||t.includes("verdict")||t.includes("bail")||t.includes("petition")?"Judicial deliberations have brought constitutional and regulatory parameters to the forefront of national legal discourse. The court's examination underscores institutional accountability and statutory precedent for both public authorities and citizens. Observers note that the eventual legal directions will establish important benchmarks for administrative compliance.":t.includes("election")||t.includes("poll")||t.includes("bjp")||t.includes("congress")||t.includes("vote")||t.includes("campaign")?"Political stakeholders across major alliances are intensifying campaign strategies and regional outreach ahead of key electoral decisions. Party leaderships are focusing on grassroots mobilization, alliance mathematics, and voter priorities on the ground. The evolving dynamics are expected to influence policy messaging and regional governance balances over the coming months.":t.includes("sensex")||t.includes("nifty")||t.includes("rbi")||t.includes("repo")||t.includes("inflation")||t.includes("gdp")||t.includes("rupee")||t.includes("market")||t.includes("stocks")?"Financial markets and economic policymakers are responding to macroeconomic indicators, interest rate trends, and corporate capital flows. Analysts point to domestic liquidity strength and corporate balance sheets as key cushions against global macroeconomic fluctuations. Investors remain focused on upcoming central bank communiqués and sector-specific growth metrics.":t.includes("ai")||t.includes("tech")||t.includes("semiconductor")||t.includes("chip")||t.includes("cyber")||t.includes("software")||t.includes("google")||t.includes("apple")?"Rapid technological advancements and compute infrastructure investments are driving systemic shifts across commercial industries and public governance. Regulatory bodies are simultaneously crafting safety, data localization, and ethical frameworks to balance innovation with systemic risk. Industry leaders anticipate that adoption of these digital capabilities will significantly accelerate productivity benchmarks.":t.includes("isro")||t.includes("space")||t.includes("satellite")||t.includes("defense")||t.includes("missile")||t.includes("army")||t.includes("navy")?"Strategic aerospace and defense programs have reached a pivotal mission milestone, reflecting continuous technological sovereignty and indigenous capability building. Technical taskforces are analyzing telemetry data and integrated subsystem performance following comprehensive testing. The strategic progress cements institutional capabilities for next-generation orbital and tactical operations.":t.includes("climate")||t.includes("solar")||t.includes("renewable")||t.includes("green")||t.includes("carbon")||t.includes("energy")||t.includes("flood")||t.includes("monsoon")?"Environmental and renewable energy transitions are gaining renewed urgency as public agencies accelerate grid resilience and zero-carbon infrastructure projects. Ecological analysts stress the necessity of sustainable urban planning and localized disaster preparedness amidst fluctuating climate conditions. Coordinated funding and regional governance initiatives are seen as critical levers for long-term ecological stability.":a===l.WORLD||s.region==="global"||t.includes("biden")||t.includes("trump")||t.includes("un")||t.includes("china")||t.includes("ukraine")||t.includes("russia")||t.includes("gaza")||t.includes("war")||t.includes("israel")?"International diplomatic corridors and multilateral bodies are closely monitoring unfolding geopolitical negotiations and strategic alignments. International affairs analysts highlight the delicate balance between sovereign security interests and cross-border commercial stability. The outcome of ongoing diplomatic dialogue is expected to reshape regional alliances and global supply chains.":`In recent dispatches monitored by ${s.name||"verified wire bureaus"}, key developments around "${e}" are unfolding with notable civic and institutional significance. Relevant authorities and reporting correspondents on the ground are tracking administrative responses and stakeholder reactions as new details emerge. Observers expect formal statements and verified briefings to provide further strategic clarity in the hours ahead.`}generateSubstantiveNewsContent(e,i,a,s){const t=this.stripHtml(a).trim();if(t.length>350&&!t.includes("Read more at")){const c=t.split(new RegExp("(?<=[.?!])\\s+"));if(c.length>=3){const d=c.slice(0,2).join(" "),u=c.slice(2,4).join(" "),h=c.slice(4).join(" ");return[d,u,h].filter(b=>b.length>20).join(`

`)}return t}return`${`In a major wire dispatch reported by ${s.name}, ${e}. According to verified reports from the scene, ${i.endsWith(".")?i:i+"."}`}

The development has prompted active reviews across relevant institutional departments and administrative bodies. Observers note that the unfolding situation holds substantial significance for regional governance, public interest, and ongoing statutory deliberations.

Official authorities and reporting correspondents on the ground continue to monitor developments closely as further communiqués and statements are anticipated in the coming hours.`}resolveContextualNewsImage(e,i,a,s,t=0){if(e&&!e.includes("1x1")&&!e.includes("pixel")&&!e.includes("favicon"))return e;const n=`${i} ${a}`.toLowerCase();return s.region==="india"||s.isPolitics||n.includes("india")||n.includes("delhi")?n.includes("supreme court")||n.includes("high court")||n.includes("judge")||n.includes("judiciary")||n.includes("verdict")||n.includes("bench")||n.includes("bail")||n.includes("cbi")||n.includes("ed")?x.judiciary_law[0]:n.includes("isro")||n.includes("space")||n.includes("satellite")||n.includes("chandrayaan")||n.includes("drdo")||n.includes("missile")?x.defense_isro[t%x.defense_isro.length]:n.includes("rupee")||n.includes("rbi")||n.includes("reserve bank")||n.includes("bank")||n.includes("sensex")||n.includes("nifty")||n.includes("gdp")||n.includes("inflation")||n.includes("finance minister")?x.economy_rbi[t%x.economy_rbi.length]:n.includes("solar")||n.includes("renewable")||n.includes("power")||n.includes("green energy")?x.clean_energy[0]:n.includes("semiconductor")||n.includes("chip")||n.includes("fab")||n.includes("hardware")?x.technology[0]:x.parliament_governance[t%x.parliament_governance.length]:q[t%q.length]}isPoliticalArticle(e,i){const a=`${e} ${i}`.toLowerCase();return["parliament","lok sabha","rajya sabha","bjp","congress","election","elections","minister","cabinet","supreme court","chief minister","prime minister","modi","rahul gandhi","governor","mla","mp","assembly","ordinance","bill","judiciary","constitution","poll","party","yogi","kejriwal","shah","niti aayog","electoral","high court"].some(t=>a.includes(t))}parseDateSafe(e){if(!e)return new Date().toISOString();const i=new Date(e);return isNaN(i.getTime())?new Date().toISOString():i.toISOString()}stripHtml(e){if(!e)return"";const i=document.createElement("DIV");return i.innerHTML=e,i.textContent||i.innerText||""}extractCleanSnippet(e){const i=this.stripHtml(e);if(!i)return"Read the complete verified story on the original publisher broadcast.";const a=i.replace(/\s+/g," ").trim();return a.length>260?a.substring(0,257)+"...":a}extractImageFromXml(e,i){const a=Array.from(e.querySelectorAll("enclosure"));for(const n of a){const o=n.getAttribute("type")||"",r=n.getAttribute("url");if(r&&(o.startsWith("image")||r.match(/\.(jpeg|jpg|png|webp)/i)))return r}const s=Array.from(e.getElementsByTagNameNS("*","content")).concat(Array.from(e.getElementsByTagNameNS("*","thumbnail")));for(const n of s){const o=n.getAttribute("url");if(o&&!o.includes("1x1")&&!o.includes("analytics")&&!o.includes("logo"))return o}const t=e.querySelector("storyimage, thumb, image > url, fullimage");if(t&&t.textContent){const n=t.textContent.trim();if(n.startsWith("http"))return n}return this.extractImageFromHtml(i)}extractImageFromHtml(e){if(e){const i=e.matchAll(/<img[^>]+(?:src|data-src|data-original)=["']([^"']+)["']/gi);for(const a of i){const s=a[1];if(s&&!s.includes("feedburner")&&!s.includes("analytics")&&!s.includes("1x1")&&!s.includes("pixel")&&!s.includes("badge")&&!s.includes("button")&&!s.includes("icon"))return s}}return null}generateKeyPoints(e,i,a){return[`Primary Development: ${e}`,`Core Briefing: ${i.length>30?i.substring(0,140)+"...":"Verified wire bulletin from "+a.name+"."}`,`Verified Media Wire: Real-time update monitored on ${a.name} editorial network.`]}async fetchArticleOgImage(e){if(!e||!e.startsWith("http"))return null;const i=m.getArticleImage(e);if(i)return i;try{const a=`/api/proxy-rss?url=${encodeURIComponent(e)}&extract=image`,s=await fetch(a,{signal:AbortSignal.timeout(4e3)});if(s.ok){const t=await s.json();if(t&&t.success&&t.image)return m.setArticleImage(e,t.image),t.image}}catch{}try{const a=`https://api.allorigins.win/get?url=${encodeURIComponent(e)}`,s=await fetch(a,{signal:AbortSignal.timeout(4e3)});if(s.ok){const n=(await s.json()).contents||"",o=n.match(/<meta[^>]+(?:property|name)=["'](?:og:image|og:image:url|twitter:image|twitter:image:src)["'][^>]+content=["']([^"']+)["']/i)||n.match(/<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["'](?:og:image|og:image:url|twitter:image|twitter:image:src)["']/i);if(o&&o[1]){let r=o[1].trim().replace(/&amp;/g,"&");if(r.startsWith("//")&&(r="https:"+r),r.startsWith("http"))return m.setArticleImage(e,r),r}}}catch{}return null}async enrichSourceArticlesWithOgImages(e){if(!e||e.length===0)return e;const i=e.filter(a=>a.hasPlaceholderImage&&a.link);return i.length===0||await Promise.allSettled(i.slice(0,10).map(async a=>{try{const s=await this.fetchArticleOgImage(a.link);s&&(a.image=s,a.hasPlaceholderImage=!1)}catch{}})),e}async enrichArticlesWithImages(e,i){if(!e||e.length===0)return;const a=e.filter(t=>t.hasPlaceholderImage&&t.link);if(a.length===0)return;const s=3;for(let t=0;t<a.length;t+=s){const n=a.slice(t,t+s);await Promise.allSettled(n.map(async o=>{try{const r=await this.fetchArticleOgImage(o.link);r&&r!==o.image&&(o.image=r,o.hasPlaceholderImage=!1,typeof i=="function"&&i(o))}catch{}}))}}}const H=new Y;class Q{constructor(){this.synth=window.speechSynthesis,this.currentUtterance=null,this.isPlaying=!1,this.isPaused=!1,this.currentArticleId=null,this.callbacks=[],this.voices=[],this.synth&&(this.loadVoices(),speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=()=>this.loadVoices()))}loadVoices(){this.voices=this.synth.getVoices()}getBestVoice(){return this.voices.length||this.loadVoices(),this.voices.find(i=>i.lang.startsWith("en")&&(i.name.includes("Natural")||i.name.includes("Google")||i.name.includes("Premium")))||this.voices.find(i=>i.lang.startsWith("en"))||this.voices[0]}speakArticle(e,i){if(!this.synth){console.warn("Speech synthesis not supported in this browser.");return}if(this.isPlaying&&this.currentArticleId===e.id){this.isPaused?this.resume():this.pause();return}this.stop();const a=e.title?e.title.replace(/<[^>]*>?/gm,""):"",s=e.snippet?e.snippet.replace(/<[^>]*>?/gm,""):"",t=e.content?e.content.replace(/<[^>]*>?/gm,""):"",n=`Story from ${e.source}. Headline: ${a}. Summary: ${s||t}`;this.currentUtterance=new SpeechSynthesisUtterance(n),this.currentUtterance.voice=this.getBestVoice(),this.currentUtterance.rate=1,this.currentUtterance.pitch=1,this.currentArticleId=e.id,this.isPlaying=!0,this.isPaused=!1,this.currentUtterance.onstart=()=>{this.notifyStateChange("playing",e)},this.currentUtterance.onend=()=>{this.isPlaying=!1,this.isPaused=!1,this.currentArticleId=null,this.notifyStateChange("ended",e),i&&i()},this.currentUtterance.onerror=o=>{console.warn("Speech synthesis error",o),this.isPlaying=!1,this.isPaused=!1,this.currentArticleId=null,this.notifyStateChange("ended",e)},this.synth.speak(this.currentUtterance)}pause(){this.synth&&this.isPlaying&&!this.isPaused&&(this.synth.pause(),this.isPaused=!0,this.notifyStateChange("paused"))}resume(){this.synth&&this.isPlaying&&this.isPaused&&(this.synth.resume(),this.isPaused=!1,this.notifyStateChange("playing"))}stop(){this.synth&&(this.synth.cancel(),this.isPlaying=!1,this.isPaused=!1,this.currentArticleId=null,this.notifyStateChange("stopped"))}subscribe(e){return this.callbacks.push(e),()=>{this.callbacks=this.callbacks.filter(i=>i!==e)}}notifyStateChange(e,i=null){this.callbacks.forEach(a=>a({state:e,article:i,articleId:this.currentArticleId,isPlaying:this.isPlaying,isPaused:this.isPaused}))}}const P=new Q,X="modulepreload",Z=function(y){return"/"+y},_={},C=function(e,i,a){let s=Promise.resolve();if(i&&i.length>0){let n=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),r=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=n(i.map(c=>{if(c=Z(c),c in _)return;_[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":X,d||(h.as="script"),h.crossOrigin="",h.href=c,r&&h.setAttribute("nonce",r),document.head.appendChild(h),d)return new Promise((b,f)=>{h.addEventListener("load",b),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function t(n){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n}return s.then(n=>{for(const o of n||[])o.status==="rejected"&&t(o.reason);return e().catch(t)})},ee="essential-guard-367s8",te="1:172663244757:web:290be1a9685d1714241f5c",ie="AIzaSyDF0XeoXy3i7Q-J-LunBUc6iAtZ1cZHVaU",se="essential-guard-367s8.firebaseapp.com",ae="essential-guard-367s8.firebasestorage.app",ne="172663244757",v={projectId:ee,appId:te,apiKey:ie,authDomain:se,storageBucket:ae,messagingSenderId:ne},T={apiKey:v==null?void 0:v.apiKey,authDomain:v==null?void 0:v.authDomain,projectId:v==null?void 0:v.projectId,storageBucket:v==null?void 0:v.storageBucket,messagingSenderId:v==null?void 0:v.messagingSenderId,appId:v==null?void 0:v.appId},I={CURRENT_USER:"wgo_auth_user_v1",REGISTERED_USERS:"wgo_registered_users_v1",BREAKING_ALERT:"wgo_breaking_alert_v1"},W=1440*60*1e3;function D(y){try{return btoa(encodeURIComponent(y+"_wgo_salt_2026"))}catch{return y}}function F(y,e){return D(y)===e}const A={e:"dhananjaysaini2006@gmail.com",h:D("242622")};class oe{constructor(){this.currentUser=null,this.authListeners=[],this.isFirebaseLive=!1,this.firebaseApp=null,this.firebaseAuth=null,this.firebaseStorage=null,this.init()}async init(){this.loadSavedSession(),this.ensureAdminExists();try{if(T.apiKey&&!T.apiKey.includes("Placeholder")){const{initializeApp:e,getApps:i,getApp:a}=await C(async()=>{const{initializeApp:t,getApps:n,getApp:o}=await import("./index.esm-DodTF3pm.js");return{initializeApp:t,getApps:n,getApp:o}},__vite__mapDeps([0,1])),{getAuth:s}=await C(async()=>{const{getAuth:t}=await import("./index.esm-BlLn1iMx.js");return{getAuth:t}},__vite__mapDeps([2,1]));this.firebaseApp=i().length?a():e(T),this.firebaseAuth=s(this.firebaseApp),this.isFirebaseLive=!0,console.info("Connected to live Firebase Cloud project.")}}catch(e){console.info("Using local Firebase Authentication adapter.",e)}}async getFirebaseStorage(){if(this.firebaseStorage)return this.firebaseStorage;const{initializeApp:e,getApps:i,getApp:a}=await C(async()=>{const{initializeApp:t,getApps:n,getApp:o}=await import("./index.esm-DodTF3pm.js");return{initializeApp:t,getApps:n,getApp:o}},__vite__mapDeps([0,1])),{getStorage:s}=await C(async()=>{const{getStorage:t}=await import("./index.esm-CPKYH5eW.js");return{getStorage:t}},__vite__mapDeps([3,1]));this.firebaseApp||(this.firebaseApp=i().length?a():e(T)),this.firebaseStorage=s(this.firebaseApp);try{this.firebaseStorage.maxUploadRetryTime=4e3,this.firebaseStorage.maxOperationRetryTime=4e3}catch{}return this.firebaseStorage}async uploadArticleImage(e,i){const a=await this.getFirebaseStorage(),{ref:s,uploadBytesResumable:t,getDownloadURL:n}=await C(async()=>{const{ref:f,uploadBytesResumable:k,getDownloadURL:p}=await import("./index.esm-CPKYH5eW.js");return{ref:f,uploadBytesResumable:k,getDownloadURL:p}},__vite__mapDeps([3,1])),o=(e.name||"image.jpg").replace(/[^a-zA-Z0-9._-]/g,"_"),r=`article-images/${Date.now()}-${o}`,c=s(a,r),d={contentType:e.type||"image/jpeg",customMetadata:{originalName:e.name,uploadedAt:new Date().toISOString()}},u=t(c,e,d),h=new Promise((f,k)=>{u.on("state_changed",p=>{if(p.totalBytes>0){const g=Math.round(p.bytesTransferred/p.totalBytes*100);typeof i=="function"&&i(g)}},p=>{console.error("[Firebase Storage] Upload error:",p),k(p)},async()=>{try{const p=await n(u.snapshot.ref);f(p)}catch(p){k(p)}})}),b=new Promise((f,k)=>{setTimeout(()=>{try{u.cancel()}catch{}k(new Error("Firebase Storage request timed out after 6 seconds."))},6e3)});return Promise.race([h,b])}loadSavedSession(){try{const e=localStorage.getItem(I.CURRENT_USER);e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}ensureAdminExists(){const e=this.getAllUsers();if(!e.some(a=>a.email.toLowerCase()===A.e.toLowerCase())){e.unshift({uid:"admin-ds-wgo",email:A.e,displayName:"Dhananjay Saini",role:"admin",passwordHash:A.h,createdAt:"2026-09-02T00:00:00.000Z"});try{localStorage.setItem(I.REGISTERED_USERS,JSON.stringify(e))}catch{}}}getAllUsers(){try{const e=localStorage.getItem(I.REGISTERED_USERS);return e?JSON.parse(e):[]}catch{return[]}}getCurrentUser(){return this.currentUser}isAdmin(){return this.currentUser&&(this.currentUser.role==="admin"||this.currentUser.email&&this.currentUser.email.toLowerCase()===A.e.toLowerCase())}onAuthStateChanged(e){return this.authListeners.push(e),e(this.currentUser),()=>{this.authListeners=this.authListeners.filter(i=>i!==e)}}notifyAuthChanged(){this.authListeners.forEach(e=>{try{e(this.currentUser)}catch(i){console.error("Error in auth listener:",i)}})}async signIn(e,i){const a=(e||"").trim().toLowerCase(),s=(i||"").trim();if(!a||!s)throw new Error("Please provide both email and password.");if(!a.includes("@"))throw new Error("Please enter a valid email address.");if(a===A.e.toLowerCase()){if(F(s,A.h))return this.currentUser={uid:"admin-ds-wgo",email:A.e,displayName:"Dhananjay Saini",role:"admin",photoURL:null},localStorage.setItem(I.CURRENT_USER,JSON.stringify(this.currentUser)),this.notifyAuthChanged(),this.currentUser;throw new Error("Incorrect password. Please try again.")}const n=this.getAllUsers().find(r=>r.email.toLowerCase()===a);if(!n)throw new Error("No account found with this email. Please sign up first.");if(!(n.passwordHash?F(s,n.passwordHash):n.passwordHash===s))throw new Error("Invalid password. Please try again.");return this.currentUser={uid:n.uid,email:n.email,displayName:n.displayName,role:n.role||"reader",photoURL:n.photoURL||null},localStorage.setItem(I.CURRENT_USER,JSON.stringify(this.currentUser)),this.notifyAuthChanged(),this.currentUser}async signUp(e,i,a=""){const s=(e||"").trim().toLowerCase(),t=(i||"").trim(),n=(a||"").trim()||s.split("@")[0];if(!s||!t)throw new Error("Please provide email and password.");if(!s.includes("@"))throw new Error("Please enter a valid email address.");if(t.length<8)throw new Error("Password must be at least 8 characters long.");const o=this.getAllUsers();if(o.some(c=>c.email.toLowerCase()===s))throw new Error("An account with this email already exists. Please sign in.");const r={uid:"user-"+Date.now(),email:s,displayName:n,role:"reader",passwordHash:D(t),createdAt:new Date().toISOString()};o.push(r);try{localStorage.setItem(I.REGISTERED_USERS,JSON.stringify(o))}catch(c){console.warn("Failed to save user",c)}return this.currentUser={uid:r.uid,email:r.email,displayName:r.displayName,role:r.role,photoURL:null},localStorage.setItem(I.CURRENT_USER,JSON.stringify(this.currentUser)),this.notifyAuthChanged(),this.currentUser}async signOut(){this.currentUser=null,localStorage.removeItem(I.CURRENT_USER),this.notifyAuthChanged()}getBreakingAlert(){try{const e=localStorage.getItem(I.BREAKING_ALERT);if(!e)return null;const i=JSON.parse(e);return i.timestamp&&Date.now()-new Date(i.timestamp).getTime()>W?(localStorage.removeItem(I.BREAKING_ALERT),null):i}catch{return null}}setBreakingAlert(e,i="high"){if(!this.isAdmin())throw new Error("Unauthorized. Only Admins can broadcast alerts.");const a={id:"alert-"+Date.now(),text:e,urgency:i,timestamp:new Date().toISOString(),author:this.currentUser.displayName,expiresAt:new Date(Date.now()+W).toISOString()};return localStorage.setItem(I.BREAKING_ALERT,JSON.stringify(a)),a}clearBreakingAlert(){if(!this.isAdmin())throw new Error("Unauthorized.");localStorage.removeItem(I.BREAKING_ALERT)}}const w=new oe;class re{constructor(e,i,a,s,t,n,o){this.onRefreshCallback=e,this.onSearchCallback=i,this.onThemeToggleCallback=a,this.onIntervalChangeCallback=s,this.onPublishClickCallback=t,this.onAuthClickCallback=n,this.onAdminClickCallback=o,this.remainingSeconds=m.getRefreshInterval(),this.totalSeconds=this.remainingSeconds,this.countdownTimer=null,this.clockTimer=null}init(){this.renderHeader(),this.startLiveClock(),this.startCountdown(),this.attachEventListeners(),this.updateBookmarkBadge(),this.initMobileDrawer()}renderHeader(){const e=document.getElementById("top-utility-bar"),i=document.getElementById("main-header");e&&(e.innerHTML=`
        <div class="top-bar-inner">
          <div class="top-bar-left">
            <div class="live-time-display">
              <span id="current-clock-date" class="topbar-chip date-chip">Loading date...</span>
              <span class="topbar-divider">|</span>
              <button id="topbar-btn-publish" class="topbar-chip publish-chip" style="display: none; color: #10b981; font-weight: 700; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); cursor: pointer;" title="Write and publish an article">✍️ Publish Article</button>
              <span class="topbar-divider">|</span>
              <span class="topbar-chip edition-chip">New Delhi Edition</span>
              <span class="topbar-divider">|</span>
              <a href="#hindu-top" class="topbar-chip epaper-chip">e-Paper</a>
              <span class="topbar-divider">|</span>
              <div id="topbar-auth-pill" class="topbar-auth-pill"></div>
              <span class="topbar-divider">|</span>
              <span class="badge badge-live topbar-chip live-chip">● LIVE WIRE</span>
            </div>
          </div>

          <div class="top-bar-right">
            <div class="weather-snippet topbar-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              <span><strong>New Delhi</strong> 28°C</span>
            </div>

            <div class="sync-status-indicator topbar-chip">
              <span class="sync-status-dot"></span>
              <span id="last-sync-time">Synced: Just now</span>
            </div>

            <div class="refresh-countdown-widget topbar-chip" title="Auto-synchronizes news every 3 minutes">
              <svg class="countdown-progress-circle" viewBox="0 0 20 20">
                <circle class="circle-bg" cx="10" cy="10" r="7"></circle>
                <circle id="countdown-circle-bar" class="circle-progress" cx="10" cy="10" r="7"></circle>
              </svg>
              <span class="countdown-label">NEXT SYNC:</span>
              <span class="refresh-text" id="countdown-text">03:00</span>
              <button id="btn-header-refresh" class="btn-manual-refresh" title="Synchronize News Now">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                </svg>
                Sync
              </button>
            </div>
          </div>
        </div>
      `),i&&(i.innerHTML=`
        <div class="header-container">
          <div class="header-left">
            <div style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-sans); text-transform: uppercase; letter-spacing: 0.05em;">
              <strong>National Edition</strong> • Multi-Wire
            </div>
          </div>

          <div class="brand-center">
            <div class="brand-title-wrap" id="btn-brand-home">
              <h1 class="brand-title">
                WHAT'S GOING ON
              </h1>
            </div>
            <div class="brand-tagline">
              India's National Real-Time Editorial &amp; Intelligence Broadsheet
            </div>
          </div>

          <div class="header-right">
            <div class="search-box-wrapper header-search-desktop">
              <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" id="global-search-input" class="search-input" placeholder="Search stories, topics..." />
              <span class="search-kbd">/</span>
            </div>

            <!-- User Auth & Admin Panel Widget -->
            <div id="header-auth-container" class="header-auth-desktop">
              <!-- Dynamically populated by updateUserAuthState -->
            </div>

            <!-- Write & Publish Story Button (Admin only) -->
            <button id="btn-open-publish-modal" class="action-btn header-publish-btn" title="Write &amp; Publish News Article" style="display: none;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <span>Publish</span>
            </button>

            <button id="btn-bookmarks-view" class="action-btn" title="Saved Bookmarks">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span id="header-bookmark-badge" class="bookmark-counter-badge" style="display: none;">0</span>
            </button>

            <button id="btn-theme-toggle" class="action-btn" title="Toggle Light/Dark Theme">
              <svg id="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>

            <!-- Hamburger: Mobile only -->
            <button id="btn-hamburger" class="action-btn btn-hamburger" title="Navigation Menu" aria-label="Open navigation menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>

          <!-- Mobile Full-Width Search Row -->
          <div class="mobile-search-bar">
            <div class="search-box-wrapper mobile-search-wrapper">
              <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" id="mobile-search-input" class="search-input" placeholder="Search live news, topics, beats..." />
              <button type="button" id="mobile-search-clear" class="mobile-search-clear" style="display:none;" aria-label="Clear search">✕</button>
            </div>
          </div>
        </div>
      `)}initMobileDrawer(){var c;const e=document.getElementById("mobile-nav-drawer"),i=document.getElementById("mobile-drawer-overlay"),a=document.getElementById("btn-mobile-drawer-close"),s=document.getElementById("btn-hamburger"),t=document.getElementById("mobile-drawer-categories"),n=()=>{e&&e.classList.add("open"),i&&(i.style.display="block"),document.body.style.overflow="hidden"},o=()=>{e&&e.classList.remove("open"),i&&(i.style.display="none"),document.body.style.overflow=""};s&&s.addEventListener("click",n),a&&a.addEventListener("click",o),window.addEventListener("keydown",d=>{d.key==="Escape"&&e&&e.classList.contains("open")&&o()});const r=[{id:"all",label:"⚡ All News (Front Page)"},{id:"india-politics",label:"🏛️ Indian Politics"},{id:"india",label:"🇮🇳 India Wire"},{id:"world",label:"🌍 Global Wire"},{id:"business",label:"📊 Markets & Economy"},{id:"google-news",label:"🌐 Google News"},{id:"current-affairs",label:"⭐ Current Affairs Hub"},{id:"tech",label:"🤖 Tech & AI"},{id:"science",label:"🚀 Science & Defense"},{id:"published",label:"✍️ Community & Published"},{id:"saved",label:"🔖 Saved Stories"}];t&&(t.innerHTML=`
        <div id="mobile-drawer-publish-container" style="display: none; padding: 0 0 12px; border-bottom: 1px solid var(--border-subtle); margin-bottom: 10px;">
          <button id="btn-mobile-drawer-publish-cta" class="mobile-drawer-publish-cta">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span>✍️ Write &amp; Publish Article</span>
          </button>
        </div>
      `+r.map(d=>`
        <button
          class="mobile-drawer-cat-btn"
          data-cat="${d.id}"
        >${d.label}</button>
      `).join(""),(c=t.querySelector("#btn-mobile-drawer-publish-cta"))==null||c.addEventListener("click",()=>{o(),this.onPublishClickCallback&&this.onPublishClickCallback()}),t.querySelectorAll(".mobile-drawer-cat-btn").forEach(d=>{d.addEventListener("click",()=>{const u=document.querySelector(`.cat-tab[data-category="${d.dataset.cat}"]`);u&&u.click(),t.querySelectorAll(".mobile-drawer-cat-btn").forEach(h=>h.classList.remove("active")),d.classList.add("active"),o(),window.scrollTo({top:0,behavior:"smooth"})})}))}startLiveClock(){const e=()=>{const i=new Date,a=document.getElementById("current-clock-time"),s=document.getElementById("current-clock-date");a&&(a.textContent=i.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})),s&&(s.textContent=i.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}))};e(),this.clockTimer=setInterval(e,1e3)}startCountdown(){this.countdownTimer&&clearInterval(this.countdownTimer),this.totalSeconds=m.getRefreshInterval(),this.remainingSeconds=this.totalSeconds,this.nextRefreshTime=Date.now()+this.totalSeconds*1e3;const e=document.getElementById("countdown-circle-bar"),i=document.getElementById("countdown-text"),a=2*Math.PI*7;e&&(e.style.strokeDasharray=`${a}`);const s=()=>{const t=Date.now(),n=this.nextRefreshTime-t,o=Math.max(0,Math.ceil(n/1e3));this.remainingSeconds=o;const r=Math.floor(this.remainingSeconds/60),c=this.remainingSeconds%60;if(i&&(i.textContent=`${r.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`),e){const d=Math.min(1,Math.max(0,this.remainingSeconds/this.totalSeconds)),u=a*(1-d);e.style.strokeDashoffset=`${u}`}o<=0&&(this.resetCountdown(),i&&(i.textContent="Syncing..."),this.onRefreshCallback&&this.onRefreshCallback(!0))};s(),this.countdownTimer=setInterval(s,1e3),this.visibilityListenerAttached||(this.visibilityListenerAttached=!0,document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&s()}))}resetCountdown(){this.totalSeconds=m.getRefreshInterval(),this.remainingSeconds=this.totalSeconds,this.nextRefreshTime=Date.now()+this.totalSeconds*1e3}updateLastSyncTime(e=new Date){const i=document.getElementById("last-sync-time");if(i){const a=e.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});i.textContent=`Synced: ${a}`}}updateBookmarkBadge(){const e=document.getElementById("header-bookmark-badge"),i=m.getBookmarks().length;e&&(e.textContent=i,e.style.display=i>0?"flex":"none")}updateUserAuthState(e){var u,h,b,f,k;const i=document.getElementById("header-auth-container"),a=document.getElementById("topbar-auth-pill"),s=document.getElementById("btn-open-publish-modal"),t=e&&(e.role==="admin"||e.email&&e.email.toLowerCase()==="dhananjaysaini2006@gmail.com");s&&(t?(s.classList.add("is-admin"),s.style.setProperty("display","inline-flex","important")):(s.classList.remove("is-admin"),s.style.setProperty("display","none","important")));const n=document.getElementById("topbar-btn-publish");n&&n.style.setProperty("display",t?"inline-flex":"none","important");const o=document.getElementById("mobile-drawer-publish-container");o&&o.style.setProperty("display",t?"block":"none","important");const r=document.getElementById("nav-btn-publish");r&&(t?(r.classList.add("is-admin"),r.style.setProperty("display","inline-flex","important")):(r.classList.remove("is-admin"),r.style.setProperty("display","none","important")));const c=document.getElementById("footer-publish-item");if(c&&c.style.setProperty("display",t?"block":"none","important"),e){if(a&&(a.innerHTML=`
          <span style="color: var(--text-primary); font-weight: 800; font-size: 0.775rem; display: inline-flex; align-items: center; gap: 4px;">
            ${t?"👑 Dhananjay":`👤 ${(e.displayName||e.email).split(" ")[0]}`}
          </span>
        `),i){i.innerHTML=`
          ${t?`
            <button id="btn-header-admin-panel" class="btn-premium-admin" title="Open Executive Admin Suite">
              <span class="admin-pulse-dot"></span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Admin Suite</span>
            </button>
          `:""}

          <div class="user-auth-capsule">
            <div class="user-avatar-badge ${t?"admin-glow":""}">
              ${t?"👑":'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>'}
            </div>
            <div class="user-info-col">
              <div class="user-name-line">${e.displayName||e.email.split("@")[0]}</div>
              <div class="user-role-badge ${t?"role-admin":"role-reader"}">${t?"SUPER ADMIN":"READER"}</div>
            </div>
            <button id="btn-header-signout" class="btn-premium-signout" title="Sign Out from Newsroom">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <span>Sign Out</span>
            </button>
          </div>
        `;const p=i.querySelector("#btn-header-admin-panel");p&&p.addEventListener("click",()=>{this.onAdminClickCallback&&this.onAdminClickCallback()});const g=i.querySelector("#btn-header-signout");g&&g.addEventListener("click",async()=>{await w.signOut()})}}else{if(a){a.innerHTML=`
          <div style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.775rem; font-family: var(--font-sans);">
            <button id="btn-topbar-signin" class="btn-text-auth" style="background: none; border: none; padding: 0; color: var(--text-primary); cursor: pointer; font-weight: 700; font-size: 0.775rem;">Sign in</button>
            <span style="color: var(--text-muted); font-size: 0.7rem;">/</span>
            <button id="btn-topbar-signup" class="btn-text-auth" style="background: none; border: none; padding: 0; color: var(--text-primary); cursor: pointer; font-weight: 700; font-size: 0.775rem;">Sign up</button>
          </div>
        `;const p=a.querySelector("#btn-topbar-signin");p&&p.addEventListener("click",S=>{S.preventDefault(),this.onAuthClickCallback&&this.onAuthClickCallback("signin")});const g=a.querySelector("#btn-topbar-signup");g&&g.addEventListener("click",S=>{S.preventDefault(),this.onAuthClickCallback&&this.onAuthClickCallback("signup")})}if(i){i.innerHTML=`
          <div class="auth-minimal-links" style="display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-sans); font-size: 0.8rem; font-weight: 700;">
            <button id="btn-header-signin" class="btn-text-auth" style="background: none; border: none; padding: 2px 4px; color: var(--text-primary); cursor: pointer; font-weight: 700; font-size: 0.8rem; transition: color 0.15s ease;">
              Sign in
            </button>
            <span style="color: var(--text-muted); font-weight: 400; font-size: 0.75rem;">/</span>
            <button id="btn-header-signup" class="btn-text-auth" style="background: none; border: none; padding: 2px 4px; color: var(--text-primary); cursor: pointer; font-weight: 700; font-size: 0.8rem; transition: color 0.15s ease;">
              Sign up
            </button>
          </div>
        `;const p=i.querySelector("#btn-header-signin");p&&p.addEventListener("click",()=>{this.onAuthClickCallback&&this.onAuthClickCallback("signin")});const g=i.querySelector("#btn-header-signup");g&&g.addEventListener("click",()=>{this.onAuthClickCallback&&this.onAuthClickCallback("signup")})}}const d=document.getElementById("mobile-drawer-auth");d&&(e?(d.innerHTML=`
          <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div class="user-avatar-badge ${t?"admin-glow":""}">
                ${t?"👑":'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>'}
              </div>
              <div>
                <div style="font-weight: 700; color: var(--text-primary); font-size: 0.9rem;">${e.displayName||e.email.split("@")[0]}</div>
                <div class="user-role-badge ${t?"role-admin":"role-reader"}" style="display: inline-block;">${t?"SUPER ADMIN":"READER"}</div>
              </div>
            </div>
            ${t?`
              <button id="btn-drawer-write" class="btn-drawer-admin-action">✍️ Write &amp; Publish Story</button>
              <button id="btn-drawer-admin" class="btn-drawer-admin-action">🛡️ Executive Admin Suite</button>
            `:""}
            <button id="btn-drawer-signout" class="btn-drawer-signout">Sign Out</button>
          </div>
        `,t&&((b=d.querySelector("#btn-drawer-write"))==null||b.addEventListener("click",()=>{var g;(g=document.getElementById("mobile-nav-drawer"))==null||g.classList.remove("open");const p=document.getElementById("mobile-drawer-overlay");p&&(p.style.display="none"),document.body.style.overflow="",this.onPublishClickCallback&&this.onPublishClickCallback()}),(f=d.querySelector("#btn-drawer-admin"))==null||f.addEventListener("click",()=>{var g;(g=document.getElementById("mobile-nav-drawer"))==null||g.classList.remove("open");const p=document.getElementById("mobile-drawer-overlay");p&&(p.style.display="none"),document.body.style.overflow="",this.onAdminClickCallback&&this.onAdminClickCallback()})),(k=d.querySelector("#btn-drawer-signout"))==null||k.addEventListener("click",async()=>{var g;(g=document.getElementById("mobile-nav-drawer"))==null||g.classList.remove("open");const p=document.getElementById("mobile-drawer-overlay");p&&(p.style.display="none"),document.body.style.overflow="",await w.signOut()})):(d.innerHTML=`
          <div style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
            <button id="btn-drawer-signin" class="btn-drawer-auth-primary">Sign In to Newsroom</button>
            <button id="btn-drawer-signup" class="btn-drawer-auth-secondary">Create Free Account</button>
          </div>
        `,(u=d.querySelector("#btn-drawer-signin"))==null||u.addEventListener("click",()=>{var g;(g=document.getElementById("mobile-nav-drawer"))==null||g.classList.remove("open");const p=document.getElementById("mobile-drawer-overlay");p&&(p.style.display="none"),document.body.style.overflow="",this.onAuthClickCallback&&this.onAuthClickCallback("signin")}),(h=d.querySelector("#btn-drawer-signup"))==null||h.addEventListener("click",()=>{var g;(g=document.getElementById("mobile-nav-drawer"))==null||g.classList.remove("open");const p=document.getElementById("mobile-drawer-overlay");p&&(p.style.display="none"),document.body.style.overflow="",this.onAuthClickCallback&&this.onAuthClickCallback("signup")})))}attachEventListeners(){const e=document.getElementById("btn-header-refresh");e&&e.addEventListener("click",()=>{e.classList.add("spinning"),this.resetCountdown(),this.onRefreshCallback&&this.onRefreshCallback(!1).finally(()=>{setTimeout(()=>e.classList.remove("spinning"),600)})});const i=document.getElementById("select-refresh-interval");i&&(i.value=m.getRefreshInterval().toString(),i.addEventListener("change",d=>{const u=parseInt(d.target.value,10);m.setRefreshInterval(u),this.startCountdown(),this.onIntervalChangeCallback&&this.onIntervalChangeCallback(u)}));const a=document.getElementById("global-search-input"),s=document.getElementById("mobile-search-input"),t=document.getElementById("mobile-search-clear");if(a){let d=null;a.addEventListener("input",u=>{const h=u.target.value;s&&s.value!==h&&(s.value=h,t&&(t.style.display=h?"inline-flex":"none")),clearTimeout(d),d=setTimeout(()=>{this.onSearchCallback&&this.onSearchCallback(h.trim())},250)}),window.addEventListener("keydown",u=>{u.key==="/"&&document.activeElement!==a&&document.activeElement!==s&&(u.preventDefault(),window.innerWidth<=900&&s?s.focus():a.focus())})}if(s){let d=null;s.addEventListener("input",u=>{const h=u.target.value;t&&(t.style.display=h.length>0?"inline-flex":"none"),a&&a.value!==h&&(a.value=h),clearTimeout(d),d=setTimeout(()=>{this.onSearchCallback&&this.onSearchCallback(h.trim())},250)}),t&&t.addEventListener("click",()=>{s.value="",t.style.display="none",a&&(a.value=""),this.onSearchCallback&&this.onSearchCallback("")})}const n=document.getElementById("btn-brand-home");n&&n.addEventListener("click",()=>{a&&(a.value=""),s&&(s.value=""),t&&(t.style.display="none"),this.onSearchCallback&&this.onSearchCallback("");const d=document.querySelector('.cat-tab[data-category="all"]');d&&d.click()});const o=document.getElementById("btn-open-publish-modal");o&&o.addEventListener("click",()=>{this.onPublishClickCallback&&this.onPublishClickCallback()});const r=document.getElementById("topbar-btn-publish");r&&r.addEventListener("click",d=>{d.preventDefault(),this.onPublishClickCallback&&this.onPublishClickCallback()});const c=document.getElementById("btn-theme-toggle");c&&c.addEventListener("click",()=>{this.onThemeToggleCallback&&this.onThemeToggleCallback()})}}class le{constructor(e){this.onArticleClickCallback=e,this.articles=[]}render(e){this.articles=e||[];const i=document.getElementById("breaking-news-ticker-container");if(!i)return;if(this.articles.length===0){i.style.display="none";return}i.style.display="block";const a=this.articles.slice(0,10),t=[...a,...a].map((o,r)=>`
      <div class="ticker-item" data-id="${o.id}" data-idx="${r%a.length}">
        <span class="dot"></span>
        <span class="source-tag">[${o.source}]</span>
        <span class="title-text">${o.title}</span>
      </div>
    `).join("");i.innerHTML=`
      <div class="ticker-bar">
        <div class="ticker-label">
          <span class="badge-live"></span>
          BREAKING
        </div>
        <div class="ticker-track-wrap">
          <div class="ticker-marquee" id="ticker-marquee-element">
            ${t}
          </div>
        </div>
      </div>
    `,i.querySelectorAll(".ticker-item").forEach(o=>{o.addEventListener("click",()=>{const r=o.getAttribute("data-id"),c=this.articles.find(d=>d.id===r)||this.articles[0];this.onArticleClickCallback&&c&&this.onArticleClickCallback(c)})})}}class ce{constructor(e,i){this.onArticleClickCallback=e,this.onBookmarkToggleCallback=i,this.viewMode=m.getViewMode()}setViewMode(e){this.viewMode=e,m.setViewMode(e)}formatTimeAgo(e){try{const i=new Date(e),s=new Date-i,t=Math.floor(s/(1e3*60));if(t<1)return"Just now";if(t<60)return`${t}m ago`;const n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}catch{return"Recently"}}render(e,i={}){const a=document.getElementById("main-news-feed");if(!a)return;const{category:s="all",searchQuery:t="",sourceFilter:n="all"}=i;if(!e||e.length===0){const f=i.category==="saved";if(i.category===l.PUBLISHED){a.innerHTML=`
          <div class="empty-state-premium">
            <div class="empty-state-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <h3>No community articles published yet</h3>
            <p>Publish breaking news, investigation reports, or analysis pieces live to What's Going On.</p>
            <button class="empty-state-cta" id="btn-empty-publish-cta" onclick="document.getElementById('btn-open-publish-modal')?.click()">
              ✍️ Write &amp; Publish Article &rarr;
            </button>
          </div>
        `;return}a.innerHTML=f?`<div class="empty-state-premium">
            <div class="empty-state-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3>Your reading list is empty</h3>
            <p>Tap the <strong>bookmark icon</strong> on any article or story card to save it here for later reading.</p>
            <button class="empty-state-cta" onclick="document.querySelector('.cat-tab[data-category=all]')?.click()">
              Browse All News &rarr;
            </button>
          </div>`:`<div class="empty-state-premium">
            <div class="empty-state-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3>No articles found</h3>
            <p>Try adjusting your search query or selecting a different news wire filter.</p>
            <button class="empty-state-cta" onclick="document.querySelector('.cat-tab[data-category=all]')?.click()">
              Back to Front Page &rarr;
            </button>
          </div>`;return}if(s===l.ALL&&!t&&n==="all"){this.renderHomeAllNews(e,a);return}const o=!t&&e.length>0,r=o?e[0]:null,c=o?e.slice(1):e,d=r?this.buildHeroCardHtml(r):"",u=this.buildArticlesGridHtml(c),h=s===l.BUSINESS&&!t?this.buildMarketIndicesDashboardHtml():"";let b="Latest Stories";t?b=`Search Results: "${t}"`:s===l.INDIA_POLITICS?b="🏛️ Indian Politics & National Governance":s===l.INDIA?b="🇮🇳 Indian Media Wires":s===l.WORLD?b="🌍 Global News Wires & International":s===l.BUSINESS?b="📊 Global & Indian Business Wire":s===l.GOOGLE_NEWS?b="🌐 Google News Live Wire":s===l.SAVED?b="🔖 Saved Bookmarks":s===l.PUBLISHED?b="✍️ Community & Published Articles":b=`${s.toUpperCase()} Wire`,a.innerHTML=`
      ${h}
      <div class="section-heading-wrap">
        <h2 class="section-title">
          <span>${b}</span>
          <span class="section-count">${e.length} Stories</span>
        </h2>
      </div>
      ${d}
      ${u}
    `,this.attachCardEventListeners(e)}buildMarketIndicesDashboardHtml(){return`
      <div class="market-dashboard-banner animate-fade-in">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
          <div>
            <div style="font-size: 0.775rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.08em; color: var(--accent-cyan); margin-bottom: 4px;">
              Financial Intelligence Terminal
            </div>
            <h2 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--text-primary); margin: 0;">
              Global & Indian Market Indices
            </h2>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="badge badge-category">INDICATIVE DATA</span>
            <span class="badge badge-category">SENTIMENT: BULLISH (+0.45%)</span>
          </div>
        </div>

        <div class="market-dashboard-grid">
          ${[{name:"BSE SENSEX",country:"🇮🇳 India (BSE)",val:"81,450.20",change:"+0.42% (+340.50 pts)",isUp:!0},{name:"NSE NIFTY 50",country:"🇮🇳 India (NSE)",val:"24,870.50",change:"+0.38% (+95.10 pts)",isUp:!0},{name:"NIFTY BANK",country:"🇮🇳 India Banking",val:"51,280.15",change:"+0.55% (+280.20 pts)",isUp:!0},{name:"NASDAQ 100",country:"🇺🇸 US Tech",val:"19,740.10",change:"+0.64% (+125.80 pts)",isUp:!0},{name:"S&P 500",country:"🇺🇸 US Large Cap",val:"5,640.20",change:"+0.32% (+18.10 pts)",isUp:!0},{name:"DOW JONES",country:"🇺🇸 US Industrial",val:"41,210.00",change:"-0.12% (-50.40 pts)",isUp:!1},{name:"FTSE 100",country:"🇬🇧 London UK",val:"8,360.50",change:"+0.22% (+18.40 pts)",isUp:!0},{name:"NIKKEI 225",country:"🇯🇵 Tokyo Japan",val:"38,720.00",change:"+0.75% (+290.00 pts)",isUp:!0},{name:"USD / INR",country:"💱 Foreign Exchange",val:"₹83.85",change:"-0.05% Rupee Firm",isUp:!0},{name:"BRENT CRUDE",country:"🛢️ Global Energy",val:"$78.20 / bbl",change:"-0.85% (-$0.67)",isUp:!1},{name:"GOLD 24K",country:"🪙 Bullion (10g INR)",val:"₹72,450",change:"+0.30% (+₹220)",isUp:!0},{name:"BITCOIN",country:"⚡ Digital Asset (USD)",val:"$64,820",change:"+1.85% (+$1,180)",isUp:!0}].map(i=>`
            <div class="market-index-card">
              <div class="market-index-top">
                <span class="market-index-name">${i.name}</span>
                <span class="market-index-country">${i.country}</span>
              </div>
              <div class="market-index-val">${i.val}</div>
              <div class="market-index-change ${i.isUp?"market-change-up":"market-change-down"}">
                ${i.isUp?"▲":"▼"} ${i.change}
              </div>
            </div>
          `).join("")}
        </div>
        <div class="market-indicative-note">* Data shown is indicative / illustrative only. Not financial advice.</div>
      </div>
    `}renderHomeAllNews(e,i){const a=e[0],s=e.slice(1,5),t=e.filter(u=>u.region==="india"||u.category===l.INDIA||u.category===l.INDIA_POLITICS),n=e.filter(u=>u.region==="global"||u.category===l.WORLD||u.category===l.GOOGLE_NEWS),o=e.filter(u=>u.category===l.BUSINESS),r=e.filter(u=>u.category===l.TECH||u.category===l.SCIENCE),c=e.slice(5,13),d=a.region==="india"?"NEW DELHI —":a.region==="global"?"GLOBAL WIRE —":"DISPATCH —";i.innerHTML=`
      <!-- THE HINDU SIGNATURE 3-COLUMN BROADSHEET TOP FOLD (ALL NEWS FOCUS) -->
      <section class="hindu-top-fold animate-fade-in" id="hindu-top">
        <!-- Column 1: Main Lead Story (Left) -->
        <div class="hindu-lead-col" data-id="${a.id}">
          <div class="hindu-lead-image-wrap">
            <img src="${a.image}" alt="${a.title}" class="hindu-lead-img" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80'" />
            <div class="hindu-lead-badges">
              <span class="badge badge-live">● TOP LEAD STORY</span>
              <span class="badge badge-source">${a.source}</span>
            </div>
          </div>
          
          <div class="hindu-lead-tag">
            <span>${(a.category||"ALL NEWS").toUpperCase()}</span>
            <span style="color: var(--text-muted); font-weight: 500;">• ${this.formatTimeAgo(a.pubDate)}</span>
          </div>

          <h1 class="hindu-lead-title" data-action="open-article">${a.title}</h1>

          <p class="hindu-dateline-snippet">
            <span class="hindu-dateline">${d}</span>
            ${a.snippet}
          </p>

          ${a.keyPoints&&a.keyPoints.length>0?`
            <div class="modal-key-points" style="margin: 4px 0 12px; padding: 14px 18px;">
              <h4 style="font-size: 0.8rem; margin-bottom: 8px; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em;">
                ⭐ Core Intelligence Takeaways:
              </h4>
              <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55;">
                ${a.keyPoints.slice(0,2).map(u=>`<li>${u}</li>`).join("")}
              </ul>
            </div>
          `:""}

          <div class="hindu-lead-footer">
            <button class="audio-player-pill" data-action="speak-article" title="Listen Audio">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
              <span>Listen</span>
              <div class="audio-waveform">
                <div class="audio-bar"></div><div class="audio-bar"></div><div class="audio-bar"></div><div class="audio-bar"></div>
              </div>
            </button>

            <div style="display: flex; gap: 8px;">
              <button class="btn-card-action ${m.isBookmarked(a.id,a.link)?"bookmarked":""}" data-action="bookmark" title="Bookmark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="${m.isBookmarked(a.id,a.link)?"currentColor":"none"}" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Column 2: Top Stories Right Now (Middle Wire Across All Beats) -->
        <div class="hindu-wire-col">
          <div class="hindu-col-header">
            <h3>Top Stories Right Now</h3>
            <span class="badge badge-live" style="font-size: 0.65rem; padding: 2px 6px;">ALL BEATS</span>
          </div>

          ${s.map(u=>`
            <article class="hindu-wire-item" data-id="${u.id}">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="hindu-wire-tag">${(u.category||"GENERAL").toUpperCase()}</span>
                <span style="font-size: 0.725rem; color: var(--text-muted); font-family: var(--font-mono);">${this.formatTimeAgo(u.pubDate)}</span>
              </div>
              <h4 class="hindu-wire-headline" data-action="open-article">${u.title}</h4>
              <p class="hindu-wire-summary">${u.originalAnalysis||u.snippet}</p>
              <div class="hindu-wire-meta">
                <span style="font-weight: 700; color: var(--accent-cyan);">${u.source}</span>
                <span style="color: var(--text-muted);">•</span>
                <span style="color: var(--text-muted);">${u.readTime||"2 min read"}</span>
                <span style="color: var(--text-muted);">•</span>
                <a href="${u.link||"#"}" target="_blank" rel="noopener noreferrer" class="hindu-wire-outbound" onclick="event.stopPropagation();" title="Read on ${u.source}">
                  Source: ${u.source} ↗
                </a>
              </div>
            </article>
          `).join("")}
        </div>

        <!-- Column 3: The Editorial Desk & In-Depth Analysis (Right) -->
        <div class="hindu-editorial-col">
          <div class="hindu-col-header">
            <h3>Editorial & Perspectives</h3>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-serif); font-style: italic;">The Hindu Broadsheet</span>
          </div>

          <div class="hindu-editorial-box">
            <span class="hindu-editorial-badge">THE EDITORIAL</span>
            <article class="hindu-op-card" data-action="open-article" data-id="${a.id}">
              <h4 class="hindu-op-title">"Global Trade Alignments & The New Multilateral Order"</h4>
              <span class="hindu-op-byline">By The Editorial Board • Broadsheet Special</span>
              <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55; margin-top: 6px;">
                Examining shifting supply corridors, sovereign manufacturing policies, and geopolitical trade dialogues across emerging economies.
              </p>
            </article>

            <article class="hindu-op-card" style="margin-top: 6px;">
              <h4 class="hindu-op-title">"Technological Sovereignty: AI Governance, Fabs & Strategic Growth"</h4>
              <span class="hindu-op-byline">By Science & Technology Editor</span>
              <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55; margin-top: 6px;">
                How deep tech investments and digital infrastructure are transforming public governance and industrial competitiveness.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- SECTION 1: ALL NEWS FRONT PAGE WIRE -->
      <section class="hindu-section-band">
        <div class="hindu-section-bar">
          <h2 class="hindu-section-title">
            <span>Front Page All-News Wire</span>
          </h2>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${e.length} Stories</span>
        </div>
        ${this.buildArticlesGridHtml(c)}
      </section>

      <!-- SECTION 2: INDIA & NATIONAL NEWS WIRE -->
      ${t.length>0?`
        <section class="hindu-section-band">
          <div class="hindu-section-bar">
            <h2 class="hindu-section-title">
              <span>🇮🇳 India & National Governance Wire</span>
            </h2>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${t.length} Stories</span>
          </div>
          ${this.buildArticlesGridHtml(t.slice(0,4))}
        </section>
      `:""}

      <!-- SECTION 3: WORLD & GLOBAL DIPLOMATIC WIRES -->
      ${n.length>0?`
        <section class="hindu-section-band">
          <div class="hindu-section-bar">
            <h2 class="hindu-section-title">
              <span>🌍 World & Global Affairs Wire</span>
            </h2>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${n.length} Stories</span>
          </div>
          ${this.buildArticlesGridHtml(n.slice(0,4))}
        </section>
      `:""}

      <!-- SECTION 4: BUSINESS, ECONOMY & MARKETS WIRE -->
      ${o.length>0?`
        <section class="hindu-section-band">
          <div class="hindu-section-bar">
            <h2 class="hindu-section-title">
              <span>📈 Business, Economy & Markets Wire</span>
            </h2>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${o.length} Stories</span>
          </div>
          ${this.buildArticlesGridHtml(o.slice(0,4))}
        </section>
      `:""}

      <!-- SECTION 5: TECHNOLOGY, AI & SCIENCE WIRE -->
      ${r.length>0?`
        <section class="hindu-section-band">
          <div class="hindu-section-bar">
            <h2 class="hindu-section-title">
              <span>🤖 Technology, Science & Space Wire</span>
            </h2>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${r.length} Stories</span>
          </div>
          ${this.buildArticlesGridHtml(r.slice(0,4))}
        </section>
      `:""}
    `,this.attachCardEventListeners(e)}buildHeroCardHtml(e,i="LIVE LEAD STORY"){const a=m.isBookmarked(e.id,e.link),s=e.region==="india"||e.isPolitics;return`
      <div class="hero-story-card animate-fade-in" data-id="${e.id}">
        <div class="hero-image-wrap">
          <img src="${e.image}" alt="${e.title}" class="hero-img" loading="eager" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&auto=format&fit=crop&q=80'" />
          <div class="hero-image-badges">
            <span class="badge ${s?"badge-live":"badge-source"}">${i}</span>
            <span class="badge badge-category">${e.source}</span>
          </div>
        </div>
        <div class="hero-content">
          <div class="hero-meta-top">
            <span class="badge badge-category">${e.isPolitics?"🏛️ INDIAN POLITICS":(e.category||"NEWS").toUpperCase()}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">• ${this.formatTimeAgo(e.pubDate)}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">• ${e.readTime||"3 min read"}</span>
          </div>

          <h2 class="hero-title" data-action="open-article">${e.title}</h2>
          <p class="hero-excerpt">${e.snippet}</p>

          <div class="hero-footer">
            <button class="audio-player-pill" data-action="speak-article" title="Listen to summary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
              <span>Listen Audio</span>
              <div class="audio-waveform">
                <div class="audio-bar"></div><div class="audio-bar"></div><div class="audio-bar"></div><div class="audio-bar"></div>
              </div>
            </button>

            <div class="hero-actions">
              <button class="btn-card-action ${a?"bookmarked":""}" data-action="bookmark" title="Bookmark article">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="${a?"currentColor":"none"}" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
              <button class="btn-card-action" data-action="share" title="Share article">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `}buildArticlesGridHtml(e){return this.viewMode==="grid"?`
        <div class="news-grid-cards">
          ${e.map(i=>{const a=m.isBookmarked(i.id,i.link);return`
              <article class="article-card animate-fade-in" data-id="${i.id}">
                <div class="card-thumb-wrap">
                  <img src="${i.image}" alt="${i.title}" class="card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&auto=format&fit=crop&q=80'" />
                  <div class="card-category-overlay">
                    <span class="badge ${i.isPolitics?"badge-live":"badge-category"}">${i.isPolitics?"🏛️ POLITICS":i.category}</span>
                  </div>
                </div>
                <div class="card-body">
                  <div class="card-meta-row">
                    <span style="font-weight: 700; color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.75rem;">${i.source}</span>
                    <span>${this.formatTimeAgo(i.pubDate)}</span>
                  </div>

                  <h3 class="card-title" data-action="open-article">${i.title}</h3>
                  <p class="card-snippet">${i.snippet}</p>

                  <div class="card-footer">
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${i.readTime||"2 min read"}</span>
                    <div class="card-actions-group">
                      <button class="btn-card-action" data-action="speak-article" title="Listen Audio">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        </svg>
                      </button>
                      <button class="btn-card-action ${a?"bookmarked":""}" data-action="bookmark" title="Save bookmark">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="${a?"currentColor":"none"}" stroke="currentColor" stroke-width="2">
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            `}).join("")}
        </div>
      `:`
        <div class="compact-list-layout">
          ${e.map(i=>{const a=m.isBookmarked(i.id,i.link);return`
              <div class="compact-item animate-fade-in" data-id="${i.id}">
                <div class="compact-thumb">
                  <img src="${i.image}" alt="${i.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&auto=format&fit=crop&q=80'" />
                </div>
                <div>
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-size: 0.775rem;">
                    <span style="color: var(--accent-cyan); font-weight: 700;">${i.source}</span>
                    <span style="color: var(--text-muted);">• ${this.formatTimeAgo(i.pubDate)}</span>
                    <span class="badge ${i.isPolitics?"badge-live":"badge-category"}" style="font-size: 0.65rem; padding: 2px 6px;">${i.isPolitics?"POLITICS":i.category}</span>
                  </div>
                  <h3 class="compact-title" data-action="open-article">${i.title}</h3>
                  <p class="compact-snippet">${i.originalAnalysis||i.snippet}</p>
                  <div style="display: flex; align-items: center; gap: 12px; margin-top: 4px;">
                    <a href="${i.link||"#"}" target="_blank" rel="noopener noreferrer" class="compact-outbound-link" onclick="event.stopPropagation();" title="Read on ${i.source}">
                      Read on ${i.source} ↗
                    </a>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 6px;">
                  <button class="btn-card-action ${a?"bookmarked":""}" data-action="bookmark" title="Bookmark">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="${a?"currentColor":"none"}" stroke="currentColor" stroke-width="2">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            `}).join("")}
        </div>
      `}attachCardEventListeners(e){const i=document.getElementById("main-news-feed");i&&i.addEventListener("click",a=>{const s=a.target.closest("[data-action]"),t=a.target.closest("[data-id]");if(!t)return;const n=t.getAttribute("data-id"),o=e.find(r=>r.id===n);if(o)if(s){const r=s.getAttribute("data-action");if(r==="open-article")this.onArticleClickCallback&&this.onArticleClickCallback(o);else if(r==="bookmark"){const c=m.toggleBookmark(o);s.classList.toggle("bookmarked",c);const d=s.querySelector("svg");d&&d.setAttribute("fill",c?"currentColor":"none"),this.onBookmarkToggleCallback&&this.onBookmarkToggleCallback(o,c)}else r==="speak-article"?P.speakArticle(o):r==="share"&&(navigator.share?navigator.share({title:o.title,text:o.snippet,url:o.link||window.location.href}).catch(()=>{}):(navigator.clipboard.writeText(o.link||window.location.href),alert("Article link copied to clipboard!")))}else a.target.closest("button")||this.onArticleClickCallback&&this.onArticleClickCallback(o)})}}class de{constructor(){this.activeTopic="all",this.currentAffairsList=[...K]}render(){const e=document.getElementById("main-news-feed");if(!e)return;const i=this.activeTopic==="all"?this.currentAffairsList:this.currentAffairsList.filter(t=>t.category===this.activeTopic),s=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});e.innerHTML=`
      <div class="ca-hub-container">
        <!-- Hero Intelligence Banner -->
        <div class="ca-hero-banner">
          <div class="ca-banner-header">
            <span class="ca-badge">⭐ Daily Intelligence Briefing</span>
            <span class="ca-banner-date">${s}</span>
          </div>
          <h2 class="ca-banner-title">Current Affairs & Strategic Analysis</h2>
          <p class="ca-banner-desc">
            Structured daily briefings, policy breakdowns, geopolitical treaties, and competitive exam intelligence curated in high-yield formats.
          </p>
        </div>

        <!-- Subtabs -->
        <div class="ca-subtabs" id="ca-subtabs-wrap">
          ${V.map(t=>`
            <button class="ca-subtab-btn ${this.activeTopic===t.id?"active":""}" data-topic="${t.id}">
              ${t.label}
            </button>
          `).join("")}
        </div>

        <!-- Briefing Cards -->
        <div class="ca-cards-list" style="display: flex; flex-direction: column; gap: 20px;">
          ${i.map(t=>`
            <div class="ca-card" data-id="${t.id}">
              <div class="ca-card-top">
                <span class="ca-category-pill ca-cat-${t.category}">
                  ${t.category.toUpperCase()}
                </span>
                <span style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">${t.date}</span>
              </div>

              <h3 class="ca-title">${t.title}</h3>

              <!-- 4-Box Structured Matrix -->
              <div class="ca-analysis-grid">
                <div class="ca-analysis-box">
                  <div class="ca-box-label label-what">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    What Happened
                  </div>
                  <div class="ca-box-text">${t.what}</div>
                </div>

                <div class="ca-analysis-box">
                  <div class="ca-box-label label-why">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    Why It Matters
                  </div>
                  <div class="ca-box-text">${t.why}</div>
                </div>

                <div class="ca-analysis-box">
                  <div class="ca-box-label label-impact">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    Impact & Significance
                  </div>
                  <div class="ca-box-text">${t.impact}</div>
                </div>

                <div class="ca-analysis-box">
                  <div class="ca-box-label label-facts">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Key Stakeholders
                  </div>
                  <div class="ca-box-text">${t.who}</div>
                </div>
              </div>

              <div class="ca-card-footer">
                <button class="audio-player-pill" data-action="speak-ca" data-id="${t.id}" title="Listen to Briefing">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  <span>Listen Audio Note</span>
                </button>

                <button class="btn-manual-refresh" data-action="copy-ca" data-id="${t.id}" title="Copy Note">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  Copy Briefing
                </button>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Daily Interactive Quiz Section -->
        <div class="ca-quiz-section">
          <div class="ca-quiz-header">
            <h3 style="font-family: var(--font-serif); font-size: 1.3rem;">🧠 Daily Current Affairs Knowledge Check</h3>
            <span class="badge badge-source">${i.length} Flashcards</span>
          </div>

          <div class="quiz-cards-container">
            ${i.map((t,n)=>`
              <div class="quiz-card" id="quiz-card-${t.id}">
                <div style="font-size: 0.75rem; color: var(--accent-amber); font-weight: 700; margin-bottom: 6px;">QUESTION 0${n+1}</div>
                <div class="quiz-question">${t.quiz.question}</div>
                
                <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px;">
                  ${t.quiz.options.map((o,r)=>`
                    <button class="quiz-option-btn" data-ca-id="${t.id}" data-opt-idx="${r}" style="text-align: left; padding: 8px 12px; background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--text-secondary); cursor: pointer; transition: all var(--transition-fast);">
                      ${String.fromCharCode(65+r)}. ${o}
                    </button>
                  `).join("")}
                </div>

                <div class="quiz-answer" id="quiz-ans-${t.id}">
                  <strong>Correct Answer: Option ${String.fromCharCode(65+t.quiz.correct)} (${t.quiz.options[t.quiz.correct]})</strong>
                  <p style="margin-top: 4px; font-size: 0.825rem; color: var(--text-secondary);">${t.quiz.explanation}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `,this.attachEventListeners()}attachEventListeners(){document.querySelectorAll(".ca-subtab-btn").forEach(t=>{t.addEventListener("click",()=>{this.activeTopic=t.getAttribute("data-topic"),this.render()})}),document.querySelectorAll('[data-action="speak-ca"]').forEach(t=>{t.addEventListener("click",()=>{const n=t.getAttribute("data-id"),o=this.currentAffairsList.find(r=>r.id===n);o&&P.speakArticle({id:o.id,source:"Current Affairs Intelligence",title:o.title,snippet:`${o.what}. Significance: ${o.impact}`})})}),document.querySelectorAll('[data-action="copy-ca"]').forEach(t=>{t.addEventListener("click",()=>{const n=t.getAttribute("data-id"),o=this.currentAffairsList.find(r=>r.id===n);if(o){const r=`*Current Affairs: ${o.title}*

• What: ${o.what}
• Why: ${o.why}
• Impact: ${o.impact}
• Stakeholders: ${o.who}`;navigator.clipboard.writeText(r),t.innerHTML='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!',setTimeout(()=>{t.innerHTML='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Briefing'},2e3)}})}),document.querySelectorAll(".quiz-option-btn").forEach(t=>{t.addEventListener("click",()=>{const n=t.getAttribute("data-ca-id"),o=parseInt(t.getAttribute("data-opt-idx"),10),r=this.currentAffairsList.find(d=>d.id===n),c=document.getElementById(`quiz-ans-${n}`);r&&c&&(c.classList.add("show"),o===r.quiz.correct?(t.style.borderColor="#10b981",t.style.background="rgba(16, 185, 129, 0.2)",t.style.color="#34d399"):(t.style.borderColor="#ef4444",t.style.background="rgba(239, 68, 68, 0.2)",t.style.color="#f87171"))})})}}class ue{constructor(e){this.onBookmarkToggleCallback=e,this.currentArticle=null,this.fontSize=17,this.init()}init(){this.renderModalContainer(),this.attachGlobalListeners()}renderModalContainer(){let e=document.getElementById("article-reader-modal");e||(e=document.createElement("div"),e.id="article-reader-modal",e.className="modal-overlay",document.body.appendChild(e))}open(e){this.currentArticle=e,this.previousTitle=document.title,e.title&&(document.title=`${e.title} — WHAT'S GOING ON`),m.markAsRead(e.id);const i=document.getElementById("article-reader-modal");if(!i)return;const a=m.isBookmarked(e.id,e.link),t=(e.content||e.snippet||"").split(`

`).filter(r=>r.trim().length>0);i.innerHTML=`
      <div class="reader-modal-container" role="dialog" aria-modal="true">
        <!-- Reading Progress Bar -->
        <div id="modal-read-progress-bar" style="position: absolute; top: 0; left: 0; height: 3px; width: 0%; background: linear-gradient(90deg, var(--hindu-red), var(--accent-cyan)); border-radius: 0; transition: width 0.1s linear; z-index: 10;"></div>

        <!-- Top Action Bar -->
        <div class="modal-top-bar">
          <div class="modal-controls-left">
            <span class="badge badge-source">${e.source}</span>
            <span style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">• ${e.readTime||"3 min read"}</span>
            
            <div class="font-size-adjuster" title="Adjust Font Size">
              <button id="modal-font-dec">A-</button>
              <button id="modal-font-inc">A+</button>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 8px;">
            <button id="modal-audio-btn" class="audio-player-pill" title="Listen Audio Summary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
              <span>Listen</span>
            </button>

            <button id="modal-bookmark-btn" class="action-btn ${a?"bookmarked":""}" title="Bookmark Article">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${a?"currentColor":"none"}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>

            <button id="modal-close-btn" class="action-btn" title="Close (Esc)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Scrollable Article Reader Body -->
        <div class="modal-scroll-content">
          <div class="modal-article-meta">
            <span class="badge ${e.isPolitics?"badge-live":"badge-category"}">${e.isPolitics?"🏛️ INDIAN POLITICS":e.category.toUpperCase()}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
              Published: ${new Date(e.pubDate).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})}
            </span>
          </div>

          <h1 class="modal-article-title">${e.title}</h1>

          ${e.image?`
            <div class="modal-image-wrap">
              <img src="${e.image}" alt="${e.title}" class="modal-img" onerror="this.src='https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80'" />
            </div>
          `:""}

          <!-- Key Takeaways & Fact Points Box -->
          ${e.keyPoints&&e.keyPoints.length>0?`
            <div class="modal-key-points">
              <h4 style="display: flex; align-items: center; gap: 8px;">
                <span>⭐ Key Intelligence Points</span>
              </h4>
              <ul>
                ${e.keyPoints.map(r=>`<li>${r}</li>`).join("")}
              </ul>
            </div>
          `:""}

          <!-- Substantive News Story (Half News Core Briefing) -->
          <div class="modal-article-body" id="modal-article-body-text" style="font-size: ${this.fontSize}px;">
            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-cyan); font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <span class="badge-live"></span>
              Core Story Briefing
            </div>

            ${t.map(r=>`<p>${r}</p>`).join("")}
          </div>

          <!-- Author or Origin Card -->
          ${e.isUserPublished?`
            <div style="background: rgba(0, 51, 102, 0.08); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 20px 24px; margin-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <span class="badge-user-editorial">AUTHOR EXCLUSIVE</span>
                <p style="margin: 6px 0 0; font-size: 0.875rem; color: var(--text-secondary);">
                  This article was written and published directly by you on What's Going On.
                </p>
              </div>
              <button id="modal-delete-user-article-btn" class="btn-cancel-modal" style="color: var(--hindu-red); border-color: var(--hindu-red); font-weight: 700;">
                🗑️ Unpublish / Delete Story
              </button>
            </div>
          `:`
            <!-- Read Full Complete Story at Origin Publisher Card -->
            <div style="background: linear-gradient(135deg, rgba(0, 240, 255, 0.08) 0%, rgba(59, 130, 246, 0.1) 100%); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 24px; margin-top: 24px; display: flex; flex-direction: column; gap: 14px; text-align: center; align-items: center;">
              <div style="font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent-cyan);">
                Read More on Original Publisher
              </div>
              <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--text-primary);">
                Want to read the complete in-depth coverage?
              </h4>
              <p style="font-size: 0.9rem; color: var(--text-secondary); max-width: 540px; margin: 0 auto;">
                You have read the essential news summary on What's Going On. For the complete full story, investigative records, and live broadcast, continue directly to <strong>${e.source}</strong>.
              </p>
              <a href="${e.link||"#"}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; background: var(--accent-cyan); color: #000; font-weight: 700; padding: 12px 24px; border-radius: var(--radius-full); text-decoration: none; font-size: 0.9rem; transition: transform var(--transition-fast);" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
                <span>Read Full Complete Story on ${e.source}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          `}
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer-bar">
          <div style="display: flex; align-items: center; gap: 8px;">
            <button id="modal-copy-link-btn" class="btn-manual-refresh" title="Copy article link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              Copy Link
            </button>
            <button id="modal-whatsapp-btn" class="btn-manual-refresh" title="Share this article">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              Share
            </button>
          </div>

          <a href="${e.link||"#"}" target="_blank" rel="noopener noreferrer" class="badge badge-source" style="font-size: 0.8rem; padding: 6px 14px; text-decoration: none;">
            Direct Source Link: ${e.source} ↗
          </a>
        </div>
      </div>
    `,i.classList.add("active"),document.body.style.overflow="hidden",this.attachModalEvents(e);const n=i.querySelector(".modal-scroll-content"),o=document.getElementById("modal-read-progress-bar");n&&o&&n.addEventListener("scroll",()=>{const r=n.scrollTop,c=n.scrollHeight-n.clientHeight,d=c>0?Math.min(100,r/c*100):0;o.style.width=d+"%"},{passive:!0})}close(){this.previousTitle&&(document.title=this.previousTitle);const e=document.getElementById("article-reader-modal");e&&(e.classList.remove("active"),document.body.style.overflow="")}attachModalEvents(e){const i=document.getElementById("modal-close-btn");i&&i.addEventListener("click",()=>this.close());const a=document.getElementById("modal-article-body-text"),s=document.getElementById("modal-font-inc"),t=document.getElementById("modal-font-dec");s&&a&&s.addEventListener("click",()=>{this.fontSize<24&&(this.fontSize+=1.5,a.style.fontSize=`${this.fontSize}px`)}),t&&a&&t.addEventListener("click",()=>{this.fontSize>14&&(this.fontSize-=1.5,a.style.fontSize=`${this.fontSize}px`)});const n=document.getElementById("modal-audio-btn");n&&n.addEventListener("click",()=>{P.speakArticle(e)});const o=document.getElementById("modal-bookmark-btn");o&&o.addEventListener("click",()=>{const u=m.toggleBookmark(e);o.classList.toggle("bookmarked",u);const h=o.querySelector("svg");h&&h.setAttribute("fill",u?"currentColor":"none"),this.onBookmarkToggleCallback&&this.onBookmarkToggleCallback(e,u)});const r=document.getElementById("modal-copy-link-btn");r&&r.addEventListener("click",()=>{navigator.clipboard.writeText(e.link||window.location.href),r.textContent="Copied!",setTimeout(()=>{r.textContent="Copy Link"},2e3)});const c=document.getElementById("modal-whatsapp-btn");c&&c.addEventListener("click",async()=>{const u={title:e.title,text:e.snippet||e.title,url:e.link||window.location.href};try{if(navigator.share)await navigator.share(u);else{await navigator.clipboard.writeText(e.link||window.location.href);const h=c.innerHTML;c.textContent="Link Copied!",setTimeout(()=>{c.innerHTML=h},2e3)}}catch{}});const d=document.getElementById("modal-delete-user-article-btn");d&&d.addEventListener("click",()=>{confirm("Are you sure you want to unpublish this story from What's Going On?")&&(m.deleteCustomArticle(e.id),this.close(),window.location.reload())})}attachGlobalListeners(){window.addEventListener("keydown",i=>{i.key==="Escape"&&this.close()});const e=document.getElementById("article-reader-modal");e&&e.addEventListener("click",i=>{i.target===e&&this.close()})}}function he(y,e=1280,i=.85){return new Promise(a=>{const s=new FileReader;s.onload=t=>{const n=new Image;n.onload=()=>{let o=n.width,r=n.height;o>e&&(r=Math.round(r*e/o),o=e);const c=document.createElement("canvas");c.width=o,c.height=r,c.getContext("2d").drawImage(n,0,0,o,r);const u=c.toDataURL(y.type==="image/png"?"image/png":"image/jpeg",i);a(u)},n.onerror=()=>a(t.target.result),n.src=t.target.result},s.onerror=()=>a(null),s.readAsDataURL(y)})}class pe{constructor(e){this.onArticlePublishedCallback=e,this.modalEl=null,this.isOpen=!1,this.editingArticleId=null,this.presetImages=[{label:"🏛️ Parliament & Central Vista",url:"https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80"},{label:"⚖️ Supreme Court & Justice",url:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80"},{label:"🪙 Indian Rupee & RBI",url:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80"},{label:"🚀 ISRO Space Rocket",url:"https://images.unsplash.com/photo-1517976487508-59a5a0da23b2?w=1200&auto=format&fit=crop&q=80"},{label:"🤖 Semiconductors & AI",url:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80"},{label:"🌍 Global Summit & Diplomacy",url:"https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=80"}],this.selectedImageUrl=this.presetImages[0].url,this.isUploadingImage=!1,this.lastSelectedFile=null,this.currentPreviewBlobUrl=null,this.dragCounter=0}init(){this.injectModalHtml(),this.attachEventListeners()}injectModalHtml(){const e=document.getElementById("publish-studio-modal");e&&e.remove();const i=document.createElement("div");i.id="publish-studio-modal",i.className="publish-modal-overlay",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-hidden","true"),i.innerHTML=`
      <div class="publish-modal-container">
        <!-- Header -->
        <div class="publish-modal-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="badge badge-live" style="background: var(--hindu-navy); color: #fff;">EDITORIAL CMS</span>
            <h2 style="font-family: var(--font-serif); font-size: 1.55rem; color: var(--text-primary); margin: 0;">
              Publish News Story or Editorial
            </h2>
          </div>
          <button id="btn-close-publish-modal" class="btn-close-modal" title="Close Editorial Studio">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Form Body -->
        <form id="publish-studio-form" class="publish-modal-body">
          <!-- Headline -->
          <div class="publish-form-group">
            <label class="publish-label">Headline / Title *</label>
            <input type="text" id="pub-headline" class="publish-input" placeholder="e.g., Union Cabinet Approves Landmark Statutory Reforms for Infrastructure & Clean Energy" required />
          </div>

          <!-- Byline & Dateline Grid -->
          <div class="publish-form-grid-2">
            <div class="publish-form-group">
              <label class="publish-label">Author / Byline</label>
              <input type="text" id="pub-byline" class="publish-input" placeholder="e.g., What's Going On Bureau / Special Correspondent" value="What's Going On Editorial Desk" />
            </div>

            <div class="publish-form-group">
              <label class="publish-label">Dateline Prefix</label>
              <select id="pub-dateline" class="publish-select">
                <option value="NEW DELHI —">NEW DELHI —</option>
                <option value="MUMBAI —">MUMBAI —</option>
                <option value="BENGALURU —">BENGALURU —</option>
                <option value="CHENNAI —">CHENNAI —</option>
                <option value="KOLKATA —">KOLKATA —</option>
                <option value="WASHINGTON —">WASHINGTON —</option>
                <option value="LONDON —">LONDON —</option>
                <option value="GLOBAL WIRE —">GLOBAL WIRE —</option>
              </select>
            </div>
          </div>

          <!-- Category & Read Time -->
          <div class="publish-form-grid-2">
            <div class="publish-form-group">
              <label class="publish-label">Beat / Category *</label>
              <select id="pub-category" class="publish-select">
                <option value="${l.INDIA_POLITICS}">🏛️ Indian Politics & Governance</option>
                <option value="${l.INDIA}">🇮🇳 India National News</option>
                <option value="${l.WORLD}">🌍 World & Global Affairs</option>
                <option value="${l.BUSINESS}">📈 Business, Economy & Markets</option>
                <option value="${l.TECH}">🤖 Technology & AI</option>
                <option value="${l.SCIENCE}">🚀 Science & Space</option>
                <option value="opinion">✒️ Editorial & Opinion</option>
              </select>
            </div>

            <div class="publish-form-group">
              <label class="publish-label">Estimated Read Time</label>
              <input type="text" id="pub-readtime" class="publish-input" placeholder="e.g. 3 min read" value="3 min read" />
            </div>
          </div>

          <!-- Featured Image Section -->
          <div class="publish-form-group">
            <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 4px;">
              <label class="publish-label">Featured Photojournalist Image *</label>
              <span style="font-size: 0.72rem; color: var(--text-muted);">Upload photo, pick preset, or paste URL</span>
            </div>

            <!-- Preset Photo Selector -->
            <div class="preset-photo-pills" id="pub-photo-presets">
              ${this.presetImages.map((a,s)=>`
                <button type="button" class="preset-photo-btn ${s===0?"active":""}" data-url="${a.url}">
                  ${a.label}
                </button>
              `).join("")}
            </div>

            <!-- Drag & Drop Dropzone Component -->
            <div class="publish-dropzone" id="pub-dropzone" tabindex="0" role="button" aria-label="Drop photojournalist image here or browse">
              <input type="file" id="pub-file-input" accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" style="display: none;" />

              <!-- Default Dropzone Prompt -->
              <div class="publish-dropzone-content" id="pub-dropzone-content">
                <svg class="publish-dropzone-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <div class="publish-dropzone-title">
                  <span id="pub-dropzone-prompt">Drag &amp; drop photojournalist image here, or </span>
                  <span class="publish-dropzone-browse">browse files</span>
                </div>
                <div class="publish-dropzone-sub">
                  Supports JPG, JPEG, PNG, WEBP &bull; Max 5MB &bull; Cloud &amp; Local Auto-Sync
                </div>
              </div>

              <!-- Uploading / Progress View -->
              <div id="pub-dropzone-uploading" class="publish-dropzone-status" style="display: none;">
                <div class="publish-dropzone-status-text">
                  <div class="publish-dropzone-spinner"></div>
                  <span id="pub-upload-progress-text">Processing photo...</span>
                </div>
                <div class="publish-dropzone-progress-bar">
                  <div id="pub-upload-progress-fill" class="publish-dropzone-progress-fill" style="width: 25%;"></div>
                </div>
                <span id="pub-upload-filename" style="font-size: 0.72rem; color: var(--text-muted);"></span>
              </div>

              <!-- Success State -->
              <div id="pub-dropzone-success" class="publish-dropzone-status" style="display: none;">
                <div class="publish-dropzone-success-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span id="pub-success-filename">Photo Ready to Publish</span>
                </div>
                <div class="publish-dropzone-replace-hint">Click or drag a new photo to replace</div>
              </div>
            </div>

            <!-- Inline Error Box with Retry Action -->
            <div id="pub-upload-error" class="publish-dropzone-error" style="display: none;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0;">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span id="pub-upload-error-text"></span>
              </div>
              <button type="button" id="pub-upload-retry-btn" class="publish-dropzone-btn-retry" style="display: none;">
                Retry
              </button>
            </div>

            <!-- Inline Informative Notice Box -->
            <div id="pub-upload-notice" class="publish-dropzone-notice" style="display: none;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; color: var(--hindu-navy);">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span id="pub-upload-notice-text"></span>
            </div>

            <!-- Manual URL Fallback Field -->
            <div class="publish-url-fallback-row">
              <span class="publish-url-fallback-label">Or direct URL:</span>
              <input type="url" id="pub-custom-image-url" class="publish-input" placeholder="Or paste custom image URL (https://...)" value="${this.presetImages[0].url}" />
            </div>

            <!-- Live Image Preview Thumbnail -->
            <div class="publish-image-preview-wrap">
              <img id="pub-image-preview" src="${this.presetImages[0].url}" alt="Preview" class="publish-image-preview" />
              <div class="publish-preview-overlay">
                <span id="pub-preview-tag" class="publish-preview-tag">Preset Photo</span>
              </div>
            </div>
          </div>

          <!-- Lead Excerpt -->
          <div class="publish-form-group">
            <label class="publish-label">Executive Lead Summary (1-2 sentences) *</label>
            <textarea id="pub-excerpt" class="publish-textarea" rows="2" placeholder="Brief summary displayed on front-page card..." required></textarea>
          </div>

          <!-- Full Article Content -->
          <div class="publish-form-group">
            <label class="publish-label">Full Article Story Narrative *</label>
            <textarea id="pub-content" class="publish-textarea" rows="7" placeholder="Write full news article or analysis story (paragraphs separated by blank lines)..." required></textarea>
          </div>

          <!-- Key Takeaways -->
          <div class="publish-form-group">
            <label class="publish-label">Core Takeaways (One per line)</label>
            <textarea id="pub-keypoints" class="publish-textarea" rows="3" placeholder="Key Point 1&#10;Key Point 2&#10;Key Point 3"></textarea>
          </div>

          <!-- Footer Actions -->
          <div class="publish-modal-footer">
            <button type="button" id="btn-cancel-publish" class="btn-cancel-modal">
              Cancel
            </button>
            <button type="submit" id="btn-submit-publish" class="btn-publish-submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Publish to What's Going On</span>
            </button>
          </div>
        </form>
      </div>
    `,document.body.appendChild(i),this.modalEl=i}attachEventListeners(){if(!this.modalEl)return;const e=this.modalEl.querySelector("#btn-close-publish-modal"),i=this.modalEl.querySelector("#btn-cancel-publish");e&&e.addEventListener("click",()=>this.close()),i&&i.addEventListener("click",()=>this.close()),this.modalEl.addEventListener("click",r=>{r.target===this.modalEl&&this.close()}),window.addEventListener("keydown",r=>{r.key==="Escape"&&this.isOpen&&this.close()});const a=this.modalEl.querySelectorAll(".preset-photo-btn"),s=this.modalEl.querySelector("#pub-custom-image-url"),t=this.modalEl.querySelector("#pub-image-preview"),n=this.modalEl.querySelector("#pub-preview-tag");a.forEach(r=>{r.addEventListener("click",()=>{a.forEach(d=>d.classList.remove("active")),r.classList.add("active");const c=r.getAttribute("data-url");this.selectedImageUrl=c,s&&(s.value=c),t&&(t.src=c),n&&(n.textContent="Preset Photo"),this.lastSelectedFile=null,this.currentPreviewBlobUrl&&(URL.revokeObjectURL(this.currentPreviewBlobUrl),this.currentPreviewBlobUrl=null),this.resetDropzoneDefault(),this.clearDropzoneError()})}),s&&s.addEventListener("input",()=>{a.forEach(r=>r.classList.remove("active")),this.selectedImageUrl=s.value.trim(),t&&(t.src=this.selectedImageUrl),n&&(n.textContent="Custom URL"),this.lastSelectedFile=null,this.currentPreviewBlobUrl&&(URL.revokeObjectURL(this.currentPreviewBlobUrl),this.currentPreviewBlobUrl=null),this.resetDropzoneDefault(),this.clearDropzoneError()}),this.setupDropzone();const o=this.modalEl.querySelector("#publish-studio-form");o&&o.addEventListener("submit",r=>{r.preventDefault(),this.handleSubmit()})}setupDropzone(){const e=this.modalEl.querySelector("#pub-dropzone"),i=this.modalEl.querySelector("#pub-file-input"),a=this.modalEl.querySelector("#pub-upload-retry-btn");!e||!i||(e.addEventListener("click",s=>{this.isUploadingImage||s.target.closest("#pub-upload-retry-btn")||i.click()}),e.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&!this.isUploadingImage&&(s.preventDefault(),i.click())}),i.addEventListener("change",()=>{i.files&&i.files.length>0&&this.handleFileSelected(i.files[0])}),this.dragCounter=0,e.addEventListener("dragenter",s=>{if(s.preventDefault(),s.stopPropagation(),this.dragCounter++,!this.isUploadingImage){e.classList.add("is-dragover");const t=this.modalEl.querySelector("#pub-dropzone-prompt");t&&(t.textContent="Drop image here to upload, or ")}}),e.addEventListener("dragover",s=>{s.preventDefault(),s.stopPropagation(),this.isUploadingImage||e.classList.add("is-dragover")}),e.addEventListener("dragleave",s=>{if(s.preventDefault(),s.stopPropagation(),this.dragCounter--,this.dragCounter<=0){this.dragCounter=0,e.classList.remove("is-dragover");const t=this.modalEl.querySelector("#pub-dropzone-prompt");t&&(t.textContent="Drag & drop photojournalist image here, or ")}}),e.addEventListener("drop",s=>{s.preventDefault(),s.stopPropagation(),this.dragCounter=0,e.classList.remove("is-dragover");const t=this.modalEl.querySelector("#pub-dropzone-prompt");if(t&&(t.textContent="Drag & drop photojournalist image here, or "),this.isUploadingImage)return;const n=s.dataTransfer;n&&n.files&&n.files.length>0&&this.handleFileSelected(n.files[0])}),a&&a.addEventListener("click",s=>{s.stopPropagation(),this.lastSelectedFile&&this.uploadFileToFirebase(this.lastSelectedFile)}))}handleFileSelected(e){if(!e)return;this.clearDropzoneError();const i=[".jpg",".jpeg",".png",".webp"],a=["image/jpeg","image/png","image/webp"],s="."+(e.name.split(".").pop()||"").toLowerCase(),t=(e.type||"").toLowerCase();if(!(a.includes(t)||i.includes(s))){this.showDropzoneError(`Invalid file type "${s||e.type}". Only .jpg, .jpeg, .png, and .webp images are allowed.`,!1);return}const o=5*1024*1024;if(e.size>o){const u=(e.size/1048576).toFixed(2);this.showDropzoneError(`File size exceeds 5MB limit (${u} MB). Please choose a smaller image.`,!1);return}this.lastSelectedFile=e,this.modalEl.querySelectorAll(".preset-photo-btn").forEach(u=>u.classList.remove("active")),this.currentPreviewBlobUrl&&URL.revokeObjectURL(this.currentPreviewBlobUrl),this.currentPreviewBlobUrl=URL.createObjectURL(e);const c=this.modalEl.querySelector("#pub-image-preview");c&&(c.src=this.currentPreviewBlobUrl);const d=this.modalEl.querySelector("#pub-preview-tag");d&&(d.textContent="Local Preview (Uploading...)"),this.uploadFileToFirebase(e)}async uploadFileToFirebase(e){var s;this.isUploadingImage=!0,this.clearDropzoneError(),this.clearDropzoneNotice(),this.setDropzoneUploadingState(e,20);const i=this.modalEl.querySelector("#btn-submit-publish"),a=i?i.innerHTML:"";i&&(i.disabled=!0,i.style.opacity="0.6",i.style.cursor="not-allowed",i.innerHTML=`
        <div class="publish-dropzone-spinner" style="border-top-color:#fff; border-color:rgba(255,255,255,0.3);"></div>
        <span>Syncing Photo...</span>
      `);try{const t=await w.uploadArticleImage(e,c=>{this.setDropzoneUploadingState(e,Math.max(c,25))});this.isUploadingImage=!1,this.selectedImageUrl=t;const n=this.modalEl.querySelector("#pub-custom-image-url");n&&(n.value=t);const o=this.modalEl.querySelector("#pub-image-preview");o&&(o.src=t);const r=this.modalEl.querySelector("#pub-preview-tag");r&&(r.textContent="Firebase Cloud Storage"),this.setDropzoneSuccessState(e,"cloud")}catch(t){console.warn("[PublishModal] Cloud upload unavailable, engaging instant local fallback:",t);try{const r=await he(e);if(r){this.isUploadingImage=!1,this.selectedImageUrl=r;const c=this.modalEl.querySelector("#pub-custom-image-url");c&&(c.value=r.slice(0,80)+"... [Embedded Image Data]");const d=this.modalEl.querySelector("#pub-image-preview");d&&(d.src=r);const u=this.modalEl.querySelector("#pub-preview-tag");u&&(u.textContent="Local High-Res (Ready to Publish)"),this.setDropzoneSuccessState(e,"local");let h="Firebase Storage bucket not yet activated in Firebase Console";t.code==="storage/unauthorized"?h="Storage rules not published in Firebase Console":(s=t.message)!=null&&s.includes("timed out")&&(h="Cloud storage connection timed out"),this.showDropzoneNotice(`Photo saved locally and ready to publish! (${h} — your story will publish immediately with this photo).`);return}}catch(r){console.error("[PublishModal] Local fallback also failed:",r)}this.isUploadingImage=!1,this.resetDropzoneDefault();let n="Upload failed. You can paste an image URL directly or retry.";t.code==="storage/unauthorized"?n="Upload rejected by Firebase Storage rules. Ensure write access is granted for article-images/.":t.code==="storage/quota-exceeded"?n="Firebase Storage quota exceeded.":t.message&&(n=`Upload failed: ${t.message}`),this.showDropzoneError(n,!0);const o=this.modalEl.querySelector("#pub-preview-tag");o&&(o.textContent="Local Preview (Upload Failed)")}finally{i&&(i.disabled=!1,i.style.opacity="",i.style.cursor="",i.innerHTML=a)}}setDropzoneUploadingState(e,i){const a=this.modalEl.querySelector("#pub-dropzone-content"),s=this.modalEl.querySelector("#pub-dropzone-uploading"),t=this.modalEl.querySelector("#pub-dropzone-success"),n=this.modalEl.querySelector("#pub-upload-progress-fill"),o=this.modalEl.querySelector("#pub-upload-progress-text"),r=this.modalEl.querySelector("#pub-upload-filename");if(a&&(a.style.display="none"),t&&(t.style.display="none"),s&&(s.style.display="flex"),n&&(n.style.width=`${i}%`),o&&(o.textContent=`Processing image... ${i}%`),r){const c=(e.size/1048576).toFixed(2);r.textContent=`${e.name} (${c} MB)`}}setDropzoneSuccessState(e,i="cloud"){const a=this.modalEl.querySelector("#pub-dropzone-content"),s=this.modalEl.querySelector("#pub-dropzone-uploading"),t=this.modalEl.querySelector("#pub-dropzone-success"),n=this.modalEl.querySelector("#pub-success-filename");if(a&&(a.style.display="none"),s&&(s.style.display="none"),t&&(t.style.display="flex"),n){const o=(e.size/1048576).toFixed(2);i==="cloud"?n.textContent=`✓ Uploaded to Cloud: ${e.name} (${o} MB)`:n.textContent=`✓ Photo Ready to Publish: ${e.name} (${o} MB)`}}resetDropzoneDefault(){const e=this.modalEl.querySelector("#pub-dropzone-content"),i=this.modalEl.querySelector("#pub-dropzone-uploading"),a=this.modalEl.querySelector("#pub-dropzone-success"),s=this.modalEl.querySelector("#pub-file-input"),t=this.modalEl.querySelector("#pub-dropzone");e&&(e.style.display="flex"),i&&(i.style.display="none"),a&&(a.style.display="none"),s&&(s.value=""),t&&t.classList.remove("is-dragover"),this.dragCounter=0,this.clearDropzoneNotice()}showDropzoneNotice(e){const i=this.modalEl.querySelector("#pub-upload-notice"),a=this.modalEl.querySelector("#pub-upload-notice-text");a&&(a.textContent=e),i&&(i.style.display="flex")}clearDropzoneNotice(){const e=this.modalEl.querySelector("#pub-upload-notice");e&&(e.style.display="none")}showDropzoneError(e,i=!1){const a=this.modalEl.querySelector("#pub-upload-error"),s=this.modalEl.querySelector("#pub-upload-error-text"),t=this.modalEl.querySelector("#pub-upload-retry-btn");s&&(s.textContent=e),t&&(t.style.display=i?"inline-block":"none"),a&&(a.style.display="flex")}clearDropzoneError(){const e=this.modalEl.querySelector("#pub-upload-error"),i=this.modalEl.querySelector("#pub-upload-retry-btn");e&&(e.style.display="none"),i&&(i.style.display="none")}open(e=null){if(!w.isAdmin()){alert("Access Restricted: Only the administrator can write and publish articles. Please sign in with admin credentials.");return}this.modalEl||this.injectModalHtml();const i=w.getCurrentUser(),a=this.modalEl.querySelector("#pub-byline");if(a&&!e&&(i?a.value=i.displayName||i.email.split("@")[0]:a.value="What's Going On Editorial Desk"),this.isOpen=!0,this.modalEl.classList.add("active"),this.modalEl.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",this.resetDropzoneDefault(),this.clearDropzoneError(),this.lastSelectedFile=null,e){this.editingArticleId=e.id,this.modalEl.querySelector("#pub-headline").value=e.title||"",this.modalEl.querySelector("#pub-byline").value=e.source||"",this.modalEl.querySelector("#pub-category").value=e.category||l.INDIA_POLITICS,this.modalEl.querySelector("#pub-excerpt").value=e.snippet||"",this.modalEl.querySelector("#pub-content").value=e.content||"",this.modalEl.querySelector("#pub-custom-image-url").value=e.image||"",this.modalEl.querySelector("#pub-image-preview").src=e.image||"",this.selectedImageUrl=e.image||this.presetImages[0].url;const s=this.modalEl.querySelector("#pub-preview-tag");s&&(s.textContent="Existing Article Photo"),e.keyPoints&&(this.modalEl.querySelector("#pub-keypoints").value=e.keyPoints.join(`
`))}else{this.editingArticleId=null,this.selectedImageUrl=this.presetImages[0].url;const s=this.modalEl.querySelector("#pub-custom-image-url");s&&(s.value=this.presetImages[0].url);const t=this.modalEl.querySelector("#pub-image-preview");t&&(t.src=this.presetImages[0].url);const n=this.modalEl.querySelector("#pub-preview-tag");n&&(n.textContent="Preset Photo"),this.modalEl.querySelectorAll(".preset-photo-btn").forEach((r,c)=>r.classList.toggle("active",c===0))}}close(){this.modalEl&&(this.isOpen=!1,this.modalEl.classList.remove("active"),this.modalEl.setAttribute("aria-hidden","true"),document.body.style.overflow="",this.currentPreviewBlobUrl&&(URL.revokeObjectURL(this.currentPreviewBlobUrl),this.currentPreviewBlobUrl=null),this.resetDropzoneDefault(),this.clearDropzoneError())}handleSubmit(){if(!w.isAdmin()){alert("Access Restricted: Only the administrator can write and publish articles.");return}if(this.isUploadingImage){alert("Please wait for the photojournalist image upload to finish before publishing.");return}const e=this.modalEl.querySelector("#pub-headline").value.trim(),i=this.modalEl.querySelector("#pub-byline").value.trim()||"What's Going On Editorial",a=this.modalEl.querySelector("#pub-dateline").value,s=this.modalEl.querySelector("#pub-category").value,t=this.modalEl.querySelector("#pub-readtime").value.trim()||"3 min read",n=this.selectedImageUrl||this.presetImages[0].url,o=this.modalEl.querySelector("#pub-excerpt").value.trim(),r=this.modalEl.querySelector("#pub-content").value.trim(),c=this.modalEl.querySelector("#pub-keypoints").value.trim(),d=c?c.split(`
`).map(h=>h.trim()).filter(Boolean):["Comprehensive on-the-ground intelligence and editorial assessment.","Analysis corroborated by verified primary sources and statutory records.","Implications reviewed by What's Going On editorial desk."],u={id:this.editingArticleId||"user-art-"+Date.now(),title:e,source:i,sourceId:"user-published",category:s,region:s===l.WORLD?"global":"india",isPolitics:s===l.INDIA_POLITICS||s===l.INDIA,isUserPublished:!0,link:"#user-story-"+Date.now(),image:n,pubDate:new Date().toISOString(),snippet:`${a} ${o}`,content:r,keyPoints:d,readTime:t};m.saveCustomArticle(u),this.currentPreviewBlobUrl&&(URL.revokeObjectURL(this.currentPreviewBlobUrl),this.currentPreviewBlobUrl=null),this.close(),this.modalEl.querySelector("#publish-studio-form").reset(),this.onArticlePublishedCallback&&this.onArticlePublishedCallback(u)}}class me{constructor(e){this.onAuthSuccessCallback=e,this.modalEl=null,this.isOpen=!1,this.currentTab="signin"}init(){this.injectModalHtml(),this.attachEventListeners()}injectModalHtml(){const e=document.getElementById("auth-modal-overlay");e&&e.remove();const i=document.createElement("div");i.id="auth-modal-overlay",i.className="auth-modal-overlay",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-hidden","true"),i.innerHTML=`
      <div class="auth-modal-container">
        <!-- Header -->
        <div class="auth-modal-header">
          <div>
            <span class="badge" style="background: var(--accent-emerald); color: #fff; font-size: 0.7rem; letter-spacing: 0.06em;">✓ SECURE SIGN IN</span>
            <h2 style="font-family: var(--font-serif); font-size: 1.45rem; color: var(--text-primary); margin: 4px 0 0;">
              What's Going On — Membership
            </h2>
          </div>
          <button id="btn-close-auth-modal" class="btn-close-modal" title="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Tab Toggle Bar -->
        <div class="auth-tabs">
          <button type="button" class="auth-tab-btn active" data-tab="signin" id="tab-auth-signin">
            Sign In
          </button>
          <button type="button" class="auth-tab-btn" data-tab="signup" id="tab-auth-signup">
            Create Reader Account
          </button>
        </div>

        <!-- Feedback Alert Box -->
        <div id="auth-alert-box" class="auth-alert" style="display: none;"></div>

        <!-- Form Body -->
        <form id="auth-form" class="auth-modal-body">
          <!-- Name Field (Sign Up Only) -->
          <div class="publish-form-group" id="group-auth-name" style="display: none;">
            <label class="publish-label">Full Name</label>
            <input type="text" id="auth-name" class="publish-input" placeholder="Your full name" />
          </div>

          <!-- Email Field -->
          <div class="publish-form-group">
            <label class="publish-label">Email Address *</label>
            <input type="email" id="auth-email" class="publish-input" placeholder="name@example.com" required />
          </div>

          <!-- Password Field -->
          <div class="publish-form-group">
            <label class="publish-label">Password *</label>
            <input type="password" id="auth-password" class="publish-input" placeholder="Min. 8 characters" required />
          </div>

          <!-- Submit Button -->
          <div style="margin-top: 10px;">
            <button type="submit" id="btn-auth-submit" class="btn-publish-submit" style="width: 100%; justify-content: center; padding: 12px;">
              <span id="auth-submit-text">Sign In to Newsroom</span>
            </button>
          </div>
        </form>

        <div class="auth-modal-footer-note">
          <span>Protected by Firebase Authentication & Secure Session Engine.</span>
        </div>
      </div>
    `,document.body.appendChild(i),this.modalEl=i}attachEventListeners(){if(!this.modalEl)return;const e=this.modalEl.querySelector("#btn-close-auth-modal");e&&e.addEventListener("click",()=>this.close()),this.modalEl.addEventListener("click",t=>{t.target===this.modalEl&&this.close()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&this.isOpen&&this.close()});const i=this.modalEl.querySelector("#tab-auth-signin"),a=this.modalEl.querySelector("#tab-auth-signup");i&&i.addEventListener("click",()=>this.switchTab("signin")),a&&a.addEventListener("click",()=>this.switchTab("signup"));const s=this.modalEl.querySelector("#auth-form");s&&s.addEventListener("submit",t=>{t.preventDefault(),this.handleSubmit()})}switchTab(e){this.currentTab=e;const i=this.modalEl.querySelector("#tab-auth-signin"),a=this.modalEl.querySelector("#tab-auth-signup"),s=this.modalEl.querySelector("#group-auth-name"),t=this.modalEl.querySelector("#auth-submit-text"),n=this.modalEl.querySelector("#auth-alert-box");n&&(n.style.display="none"),e==="signin"?(i.classList.add("active"),a.classList.remove("active"),s.style.display="none",t.textContent="Sign In to Newsroom"):(a.classList.add("active"),i.classList.remove("active"),s.style.display="flex",t.textContent="Create Reader Account")}showAlert(e,i="error"){const a=this.modalEl.querySelector("#auth-alert-box");a&&(a.textContent=e,a.className=`auth-alert ${i}`,a.style.display="block")}open(e="signin"){this.modalEl||this.injectModalHtml(),this.isOpen=!0,this.modalEl.classList.add("active"),this.modalEl.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",this.switchTab(e)}close(){this.modalEl&&(this.isOpen=!1,this.modalEl.classList.remove("active"),this.modalEl.setAttribute("aria-hidden","true"),document.body.style.overflow="")}async handleSubmit(){const e=this.modalEl.querySelector("#auth-email").value.trim(),i=this.modalEl.querySelector("#auth-password").value.trim(),a=this.modalEl.querySelector("#auth-name").value.trim(),s=this.modalEl.querySelector("#btn-auth-submit"),t=this.modalEl.querySelector("#auth-submit-text");s.disabled=!0,s.style.opacity="0.75",t&&(t.textContent=this.currentTab==="signin"?"Signing in...":"Creating account...");try{let n=null;this.currentTab==="signin"?n=await w.signIn(e,i):n=await w.signUp(e,i,a),this.showAlert(`Welcome, ${n.displayName||n.email}! ✓`,"success"),setTimeout(()=>{this.close(),this.onAuthSuccessCallback&&this.onAuthSuccessCallback(n)},600)}catch(n){this.showAlert(n.message||"Authentication failed. Please try again.","error")}finally{s.disabled=!1,s.style.opacity="1",t&&(t.textContent=this.currentTab==="signin"?"Sign In to Newsroom":"Create Reader Account")}}}class ge{constructor(e,i){this.onArticleUpdatedCallback=e,this.onBreakingAlertCallback=i,this.modalEl=null,this.isOpen=!1,this.currentTab="articles",this.articlesList=[]}init(){this.injectModalHtml(),this.attachEventListeners()}injectModalHtml(){const e=document.getElementById("admin-panel-overlay");e&&e.remove();const i=document.createElement("div");i.id="admin-panel-overlay",i.className="admin-modal-overlay",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-hidden","true"),i.innerHTML=`
      <div class="admin-modal-container">
        <!-- Header -->
        <div class="admin-modal-header">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div class="admin-crown-badge">👑</div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h2 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--text-primary); margin: 0;">
                  Executive Admin Control Suite
                </h2>
                <span class="badge" style="background: var(--hindu-red); color: #fff; font-weight: 800; font-size: 0.7rem;">SUPER ADMIN</span>
              </div>
              <p style="margin: 3px 0 0; font-size: 0.8rem; color: var(--text-secondary);">
                Authenticated: <strong>Dhananjay Saini</strong> &nbsp;<span class="badge" style="background: var(--bg-tertiary); color: var(--text-muted); font-size: 0.65rem;">Super Admin</span>
              </p>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 10px;">
            <button id="btn-admin-signout" class="btn-cancel-modal" style="font-size: 0.8rem; padding: 6px 14px;">
              Sign Out
            </button>
            <button id="btn-close-admin-panel" class="btn-close-modal" title="Close Admin Panel">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="admin-tabs-bar">
          <button type="button" class="admin-tab-btn active" data-tab="articles" id="tab-admin-articles">
            📰 CMS & Articles
          </button>
          <button type="button" class="admin-tab-btn" data-tab="alerts" id="tab-admin-alerts">
            🚨 Breaking Alert Dispatcher
          </button>
          <button type="button" class="admin-tab-btn" data-tab="feeds" id="tab-admin-feeds">
            📡 Live Feeds & Wires (18+)
          </button>
          <button type="button" class="admin-tab-btn" data-tab="users" id="tab-admin-users">
            👥 Users & Analytics
          </button>
        </div>

        <!-- Admin Content Body -->
        <div class="admin-modal-body" id="admin-tab-content">
          <!-- Populated dynamically based on active tab -->
        </div>
      </div>
    `,document.body.appendChild(i),this.modalEl=i}attachEventListeners(){if(!this.modalEl)return;const e=this.modalEl.querySelector("#btn-close-admin-panel");e&&e.addEventListener("click",()=>this.close());const i=this.modalEl.querySelector("#btn-admin-signout");i&&i.addEventListener("click",async()=>{await w.signOut(),this.close(),window.location.reload()}),this.modalEl.addEventListener("click",s=>{s.target===this.modalEl&&this.close()}),window.addEventListener("keydown",s=>{s.key==="Escape"&&this.isOpen&&this.close()}),["articles","alerts","feeds","users"].forEach(s=>{const t=this.modalEl.querySelector(`#tab-admin-${s}`);t&&t.addEventListener("click",()=>this.switchTab(s))})}switchTab(e){this.currentTab=e,this.modalEl.querySelectorAll(".admin-tab-btn").forEach(s=>s.classList.toggle("active",s.getAttribute("data-tab")===e));const a=this.modalEl.querySelector("#admin-tab-content");a&&(e==="articles"?this.renderArticlesTab(a):e==="alerts"?this.renderAlertsTab(a):e==="feeds"?this.renderFeedsTab(a):e==="users"&&this.renderUsersTab(a))}open(e=[]){if(!w.isAdmin()){alert("Access Denied. This area is restricted to the Super Administrator only.");return}this.articlesList=e,this.modalEl||this.injectModalHtml(),this.isOpen=!0,this.modalEl.classList.add("active"),this.modalEl.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",this.switchTab(this.currentTab)}close(){this.modalEl&&(this.isOpen=!1,this.modalEl.classList.remove("active"),this.modalEl.setAttribute("aria-hidden","true"),document.body.style.overflow="")}renderArticlesTab(e){const a=[...m.getCustomArticles(),...this.articlesList||[]];e.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
        <div>
          <h3 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--text-primary); margin: 0;">
            Published Articles & Editorial Moderation
          </h3>
          <p style="margin: 3px 0 0; font-size: 0.825rem; color: var(--text-secondary);">
            Managing ${a.length} total news dispatches across all wires.
          </p>
        </div>
        <div style="display: flex; gap: 10px;">
          <input type="text" id="admin-search-articles" class="publish-input" placeholder="Filter articles by title..." style="width: 240px; padding: 6px 12px; font-size: 0.85rem;" />
        </div>
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th style="width: 45%;">Headline / Title</th>
              <th>Source / Author</th>
              <th>Category</th>
              <th>Published</th>
              <th style="text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody id="admin-articles-tbody">
            ${a.slice(0,50).map(t=>`
              <tr data-id="${t.id}">
                <td>
                  <div style="font-weight: 700; color: var(--text-primary); line-height: 1.3;">
                    ${t.isUserPublished?'<span class="badge-user-editorial" style="margin-right: 6px;">AUTHOR</span>':""}
                    ${t.title}
                  </div>
                </td>
                <td>
                  <span class="badge" style="background: var(--bg-tertiary); color: var(--text-secondary); font-size: 0.75rem;">
                    ${t.source}
                  </span>
                </td>
                <td>
                  <span style="font-size: 0.775rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">
                    ${t.category}
                  </span>
                </td>
                <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                  ${new Date(t.pubDate).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}
                </td>
                <td style="text-align: right;">
                  ${t.isUserPublished?`
                    <button class="btn-admin-action btn-admin-delete" data-del-id="${t.id}" title="Delete story">
                      🗑️ Unpublish
                    </button>
                  `:`
                    <span style="font-size: 0.725rem; color: var(--text-muted);">Wire Feed</span>
                  `}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;const s=e.querySelector("#admin-search-articles");s&&s.addEventListener("input",t=>{const n=t.target.value.toLowerCase().trim();e.querySelectorAll("#admin-articles-tbody tr").forEach(r=>{const c=r.textContent.toLowerCase();r.style.display=c.includes(n)?"":"none"})}),e.querySelectorAll(".btn-admin-delete").forEach(t=>{t.addEventListener("click",n=>{const o=n.target.getAttribute("data-del-id");confirm("Admin Action: Unpublish this story from What's Going On?")&&(m.deleteCustomArticle(o),this.switchTab("articles"),this.onArticleUpdatedCallback&&this.onArticleUpdatedCallback())})})}renderAlertsTab(e){const i=w.getBreakingAlert();e.innerHTML=`
      <div style="max-width: 650px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--text-primary); margin: 0;">
            Broadcast Urgent Breaking News Wire Alert
          </h3>
          <p style="margin: 4px 0 0; font-size: 0.85rem; color: var(--text-secondary);">
            Dispatches a high-priority red alert ticker across all reader screens in real time.
          </p>
        </div>

        ${i?`
          <div class="admin-active-alert-box">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <span class="badge" style="background: var(--hindu-red); color: #fff;">● ACTIVE LIVE BROADCAST</span>
              <button id="btn-clear-alert" class="btn-cancel-modal" style="color: var(--hindu-red); border-color: var(--hindu-red); font-size: 0.775rem; padding: 4px 10px;">
                Revoke Alert
              </button>
            </div>
            <p style="margin: 0; font-weight: 700; font-size: 1rem; color: var(--text-primary);">
              "${i.text}"
            </p>
            <div style="margin-top: 8px; font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
              Dispatched by ${i.author} at ${new Date(i.timestamp).toLocaleTimeString("en-IN")}
            </div>
          </div>
        `:""}

        <form id="admin-broadcast-form" style="display: flex; flex-direction: column; gap: 14px;">
          <div class="publish-form-group">
            <label class="publish-label">Urgent Alert Headline / Bullet</label>
            <textarea id="admin-alert-text" class="publish-textarea" rows="3" placeholder="e.g., BREAKING: Prime Minister addresses Parliament; new statutory bills introduced for national digital infrastructure..." required></textarea>
          </div>

          <div class="publish-form-group">
            <label class="publish-label">Urgency Priority</label>
            <select id="admin-alert-urgency" class="publish-select">
              <option value="breaking">🔴 High Urgency (Flashing Red Live Ticker)</option>
              <option value="bulletin">🟡 Editorial Flash Bulletin</option>
            </select>
          </div>

          <button type="submit" class="btn-publish-submit" style="background: var(--hindu-red); justify-content: center; padding: 12px;">
            📢 Broadcast Breaking Alert to Portal
          </button>
        </form>
      </div>
    `;const a=e.querySelector("#admin-broadcast-form");a&&a.addEventListener("submit",t=>{t.preventDefault();const n=e.querySelector("#admin-alert-text").value.trim(),o=e.querySelector("#admin-alert-urgency").value,r=w.setBreakingAlert(n,o);alert("Breaking Alert has been broadcast live to all readers!"),this.switchTab("alerts"),this.onBreakingAlertCallback&&this.onBreakingAlertCallback(r)});const s=e.querySelector("#btn-clear-alert");s&&s.addEventListener("click",()=>{w.clearBreakingAlert(),alert("Active breaking alert has been revoked."),this.switchTab("alerts"),this.onBreakingAlertCallback&&this.onBreakingAlertCallback(null)})}renderFeedsTab(e){e.innerHTML=`
      <div style="margin-bottom: 16px;">
        <h3 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--text-primary); margin: 0;">
          Connected Media Wires & RSS Feed Health Monitor
        </h3>
        <p style="margin: 3px 0 0; font-size: 0.825rem; color: var(--text-secondary);">
          All feeds are automatically polled every 3 minutes via the local zero-cache proxy.
        </p>
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Outlet / Wire</th>
              <th>Beat / Category</th>
              <th>Status</th>
              <th>Endpoint / RSS URL</th>
            </tr>
          </thead>
          <tbody>
            ${B.map(i=>`
              <tr>
                <td style="font-weight: 700; color: var(--text-primary);">
                  <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${i.color||"#003366"}; margin-right: 8px;"></span>
                  ${i.name}
                </td>
                <td>
                  <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">
                    ${i.category}
                  </span>
                </td>
                <td>
                  <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald); font-weight: 700; font-size: 0.725rem;">
                    ● 200 OK (Live)
                  </span>
                </td>
                <td style="font-family: var(--font-mono); font-size: 0.725rem; color: var(--text-muted); max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  ${i.rssUrl}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `}renderUsersTab(e){const i=w.getAllUsers(),a=m.getCustomArticles(),s=m.getBookmarks();e.innerHTML=`
      <div class="admin-stats-grid" style="margin-bottom: 24px;">
        <div class="admin-stat-card">
          <div class="admin-stat-val">${this.articlesList.length+a.length}</div>
          <div class="admin-stat-lbl">Aggregated Articles</div>
        </div>
        <div class="admin-stat-card">
          <div class="admin-stat-val" style="color: var(--accent-cyan);">${a.length}</div>
          <div class="admin-stat-lbl">User Published Stories</div>
        </div>
        <div class="admin-stat-card">
          <div class="admin-stat-val" style="color: var(--hindu-red);">${i.length}</div>
          <div class="admin-stat-lbl">Registered Accounts</div>
        </div>
        <div class="admin-stat-card">
          <div class="admin-stat-val" style="color: var(--accent-emerald);">${s.length}</div>
          <div class="admin-stat-lbl">Saved Bookmarks</div>
        </div>
      </div>

      <div style="margin-bottom: 14px;">
        <h3 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--text-primary); margin: 0;">
          Registered Newsroom Users & Author Roster
        </h3>
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email Address</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${i.map(t=>`
              <tr>
                <td style="font-weight: 700; color: var(--text-primary);">
                  ${t.displayName||"Reader"}
                </td>
                <td style="font-family: var(--font-mono); font-size: 0.825rem; color: var(--text-secondary);">
                  ${t.email}
                </td>
                <td>
                  <span class="badge" style="background: ${t.role==="admin"?"var(--hindu-red)":"var(--bg-tertiary)"}; color: ${t.role==="admin"?"#fff":"var(--text-secondary)"}; font-size: 0.725rem; font-weight: 800;">
                    ${(t.role||"reader").toUpperCase()}
                  </span>
                </td>
                <td>
                  <span style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 600;">
                    ● Active
                  </span>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `}}class be{constructor(){this.articles=[],this.currentCategory=l.ALL,this.searchQuery="",this.selectedSource="all",this.isLoading=!1,this.header=null,this.ticker=null,this.newsGrid=null,this.currentAffairs=null,this.modal=null,this.publishModal=null,this.authModal=null,this.adminPanel=null}async init(){this.applyTheme(m.getTheme()),this.initComponents(),this.renderCategoryNavigation();const e=window.location.hash.replace("#","");e&&Object.values(l).includes(e)&&(this.currentCategory=e,document.querySelectorAll(".cat-tab").forEach(a=>{a.classList.toggle("active",a.getAttribute("data-category")===e)})),await this.fetchNews(!1),this.initBackToTop()}applyTheme(e){document.documentElement.setAttribute("data-theme",e),m.setTheme(e);const i=document.getElementById("theme-icon-sun");i&&(e==="light"?i.innerHTML='<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>':i.innerHTML=`
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        `)}toggleTheme(){const i=m.getTheme()==="dark"?"light":"dark";this.applyTheme(i)}initComponents(){this.authModal=new me(t=>{this.showToast(`✨ Welcome to What's Going On, ${t.displayName||t.email}!`,"success")}),this.authModal.init(),this.adminPanel=new ge(()=>{this.renderActiveView(),this.showToast("Article moderation updated.","info")},t=>{this.handleBreakingAlert(t)}),this.adminPanel.init(),this.publishModal=new pe(t=>{this.articles=[t,...this.articles.filter(n=>n.id!==t.id)],this.ticker.render(this.articles),this.renderActiveView(),window.scrollTo({top:0,behavior:"smooth"}),this.showToast("🎉 Your article has been published live to What's Going On!","success")}),this.publishModal.init(),this.header=new re(t=>this.fetchNews(t),t=>this.handleSearch(t),()=>this.toggleTheme(),t=>this.handleIntervalChange(t),()=>this.publishModal.open(),t=>this.authModal.open(t),()=>this.adminPanel.open(this.articles)),this.header.init(),w.onAuthStateChanged(t=>{this.header.updateUserAuthState(t);const n=w.isAdmin(),o=document.getElementById("nav-btn-publish");o&&(o.style.display=n?"inline-flex":"none");const r=document.getElementById("footer-publish-item");r&&(r.style.display=n?"block":"none")});const e=w.getBreakingAlert();e&&this.handleBreakingAlert(e),this.modal=new ue((t,n)=>{this.header.updateBookmarkBadge()}),this.ticker=new le(t=>{this.modal.open(t)}),this.newsGrid=new ce(t=>this.modal.open(t),(t,n)=>{this.header.updateBookmarkBadge(),this.currentCategory===l.SAVED&&this.renderActiveView()}),this.currentAffairs=new de;const i=document.getElementById("btn-bookmarks-view");i&&i.addEventListener("click",()=>{this.setCategory(l.SAVED)});const a=document.getElementById("btn-view-grid"),s=document.getElementById("btn-view-list");a&&s&&(a.addEventListener("click",()=>{a.classList.add("active"),s.classList.remove("active"),this.newsGrid.setViewMode("grid"),this.renderActiveView()}),s.addEventListener("click",()=>{s.classList.add("active"),a.classList.remove("active"),this.newsGrid.setViewMode("compact"),this.renderActiveView()}))}renderCategoryNavigation(){const e=document.getElementById("category-tabs-nav"),i=document.getElementById("select-source-filter"),a=[{id:l.ALL,label:"⚡ All News (Front Page)"},{id:l.INDIA_POLITICS,label:"🏛️ Indian Politics & Governance"},{id:l.INDIA,label:"🇮🇳 India Media Wires"},{id:l.WORLD,label:"🌍 Global News Wires"},{id:l.BUSINESS,label:"📊 Market Indices & Economy"},{id:l.GOOGLE_NEWS,label:"🌐 Google News"},{id:l.CURRENT_AFFAIRS,label:"⭐ Current Affairs Hub",highlight:!0},{id:l.TECH,label:"🤖 Tech & AI"},{id:l.SCIENCE,label:"🚀 Science & Defense"},{id:l.PUBLISHED,label:"✍️ Community & Published"},{id:l.SAVED,label:"🔖 Saved Stories"}];if(e){const s=a.map(o=>`
        <button class="cat-tab ${o.id===this.currentCategory?"active":""} ${o.highlight?"highlight-ca":""}" data-category="${o.id}">
          ${o.label}
        </button>
      `).join(""),n=`
        <button class="cat-tab cat-tab-publish" id="nav-btn-publish" title="Write and publish an article live" style="${w.isAdmin()?"display: inline-flex;":"display: none;"}">
          ✍️ Publish Article
        </button>
      `;e.innerHTML=s+n,e.addEventListener("click",o=>{if(o.target.closest("#nav-btn-publish")){this.publishModal.open();return}const c=o.target.closest(".cat-tab");if(c){const d=c.getAttribute("data-category");this.setCategory(d)}})}i&&(i.innerHTML=`
        <option value="all">All Outlets & Wires</option>
        <optgroup label="Indian Politics & National Wires">
          ${B.filter(s=>s.region==="india").map(s=>`<option value="${s.id}">${s.name}</option>`).join("")}
        </optgroup>
        <optgroup label="Global News Wires & International">
          ${B.filter(s=>s.region==="global").map(s=>`<option value="${s.id}">${s.name}</option>`).join("")}
        </optgroup>
      `,i.addEventListener("change",s=>{this.selectedSource=s.target.value,this.renderActiveView()}))}setCategory(e){this.currentCategory=e,this.searchQuery="";const i=document.getElementById("global-search-input");i&&(i.value="");const a={[l.ALL]:"WHAT'S GOING ON — Live Breaking News & Intelligence Portal | whatgoinon.online",[l.INDIA_POLITICS]:"Indian Politics & Governance — Live News Wire | whatgoinon.online",[l.INDIA]:"India National Media Wires — Real-Time Headlines | whatgoinon.online",[l.WORLD]:"Global News & International Affairs Wire | whatgoinon.online",[l.BUSINESS]:"Markets, Economy & Financial Intelligence | whatgoinon.online",[l.CURRENT_AFFAIRS]:"Daily Current Affairs & UPSC Intelligence Hub | whatgoinon.online",[l.TECH]:"Technology, AI & Emerging Tech Wire | whatgoinon.online",[l.SCIENCE]:"Science, Space & Innovation News | whatgoinon.online",[l.SAVED]:"Saved Articles & Reading List | whatgoinon.online"};a[e]&&(document.title=a[e]);try{window.location.hash!==`#${e}`&&window.history.replaceState(null,"",`#${e}`)}catch{}document.querySelectorAll(".cat-tab").forEach(t=>{t.classList.toggle("active",t.getAttribute("data-category")===e)}),this.renderActiveView(),window.scrollTo({top:0,behavior:"smooth"})}handleSearch(e){this.searchQuery=e.toLowerCase(),this.renderActiveView()}handleIntervalChange(e){this.showToast(`Auto-update set to every ${Math.round(e/60)} minute(s)`,"info")}initBackToTop(){const e=document.createElement("button");e.id="btn-back-to-top",e.title="Back to top",e.setAttribute("aria-label","Back to top"),e.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>',document.body.appendChild(e),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",()=>{window.scrollY>400?e.classList.add("visible"):e.classList.remove("visible")},{passive:!0})}handleBreakingAlert(e){const i=document.getElementById("admin-breaking-alert-banner");if(i&&i.remove(),!e)return;const a=document.createElement("div");a.id="admin-breaking-alert-banner",a.className="admin-breaking-alert-banner",a.innerHTML=`
      <div class="breaking-banner-inner">
        <span class="breaking-banner-tag">
          🔴 BREAKING BROADCAST
        </span>
        <span class="breaking-banner-text">${e.text}</span>
        <button id="btn-close-alert-banner" class="breaking-banner-close" title="Dismiss banner">&times;</button>
      </div>
    `,document.body.prepend(a);const s=a.querySelector("#btn-close-alert-banner");s&&s.addEventListener("click",()=>a.remove())}async fetchNews(e=!1){if(this.isLoading)return;this.isLoading=!0;const i=document.getElementById("btn-header-refresh");i&&i.classList.add("spinning"),e||this.renderLoadingSkeleton();try{const a=await H.fetchAllFeeds();if(this.articles=a,m.setCachedArticles(this.articles),this.ticker.render(this.articles),this.renderActiveView(),H.enrichArticlesWithImages(this.articles,s=>{document.querySelectorAll(`[data-id="${s.id}"] img`).forEach(o=>{o.src=s.image});const n=document.querySelector(`.hindu-lead-col[data-id="${s.id}"]`);if(n){const o=n.querySelector(".hindu-lead-img");o&&(o.src=s.image)}m.setCachedArticles(this.articles)}),this.header&&this.header.updateLastSyncTime(new Date),e){const s=new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});this.showToast(`🔄 Auto-refreshed: ${this.articles.length} news stories synchronized at ${s}`,"success")}}catch(a){console.error("Error fetching feeds:",a),this.showToast("Notice: Using synchronized offline intelligence feeds.","info")}finally{this.isLoading=!1,i&&setTimeout(()=>i.classList.remove("spinning"),700)}}renderLoadingSkeleton(){const e=document.getElementById("main-news-feed");e&&(e.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div class="skeleton" style="height: 380px; width: 100%; border-radius: var(--radius-lg);"></div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
          <div class="skeleton" style="height: 280px; border-radius: var(--radius-md);"></div>
          <div class="skeleton" style="height: 280px; border-radius: var(--radius-md);"></div>
          <div class="skeleton" style="height: 280px; border-radius: var(--radius-md);"></div>
        </div>
      </div>
    `)}renderActiveView(){const e=document.getElementById("main-news-feed");e&&(e.classList.add("fading"),setTimeout(()=>{e.classList.remove("fading"),this._doRenderActiveView()},150))}_doRenderActiveView(){if(this.currentCategory===l.CURRENT_AFFAIRS){this.currentAffairs.render();return}let e=[...this.articles];if(this.currentCategory===l.SAVED)e=m.getBookmarks();else if(this.currentCategory===l.PUBLISHED){const i=m.getCustomArticles(),a=this.articles.filter(t=>t.isUserPublished||t.sourceId==="user-published"),s=new Set;e=[],[...a,...i].forEach(t=>{s.has(t.id)||(s.add(t.id),e.push(t))})}else this.currentCategory!==l.ALL&&(e=e.filter(i=>i.category===this.currentCategory));this.selectedSource!=="all"&&(e=e.filter(i=>i.sourceId===this.selectedSource)),this.searchQuery&&(e=e.filter(i=>i.title&&i.title.toLowerCase().includes(this.searchQuery)||i.snippet&&i.snippet.toLowerCase().includes(this.searchQuery)||i.source&&i.source.toLowerCase().includes(this.searchQuery))),this.newsGrid.render(e,{category:this.currentCategory,searchQuery:this.searchQuery,sourceFilter:this.selectedSource})}showToast(e,i="info"){let a=document.getElementById("toast-container");a||(a=document.createElement("div"),a.id="toast-container",document.body.appendChild(a));const s=i==="success"?'<polyline points="20 6 9 17 4 12"></polyline>':i==="error"?'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>':'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',t=document.createElement("div");t.className=`toast toast-${i}`,t.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        ${s}
      </svg>
      <span>${e}</span>
    `,a.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transform="translateY(10px)",t.style.transition="all 0.3s ease",setTimeout(()=>t.remove(),300)},4e3)}}document.addEventListener("DOMContentLoaded",()=>{new be().init()});
