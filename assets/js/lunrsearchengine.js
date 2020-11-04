
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "  Please send your message to Fardeen. We will reply as soon as possible!   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                               ডোমেইন ও হোস্টিং              :       কিছুক্ষণ আগে ডিএসবি তে এক ভাইয়ার পোস্ট পড়লাম হোস্টিং নিয়ে। উনার ব্যাখ্যাটা আমার কাছে একটু জটিল মনে হল। তাই আমি চেষ্টা করলাম আরেকটু সহজ করে বুঝাতে।:                                                                               Fardeen Ehsan                 30 Aug 2020                                                                                                                           Les Ambassadeurs, the first Restaurant we Visited in Paris                         1 2 3 4 5                      :       Within the Hôtel de Crillon, which was built in 1758, Les Ambassadeurs operated as a restaurant since the mid-19th century. It reached its peak of fame as a restaurant and. . . :                                                                                               02 Feb 2020                                                                                                                           Much more than a desert: A trip into the Sahara              :       The Sahara is a desert located on the African continent. It is the largest hot desert in the world, and the third largest desert overall after Antarctica and the Arctic. . . . :                                                                                               01 Feb 2020                                                                                                                           One day we just started our adventure              :       The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. :                                                                                               12 Jan 2020                                                                                                                           London is that kind of place you must visit in this lifetime              :       The Queen’s Guard and Queen’s Life Guard (called King’s Guard and King’s Life Guard when the reigning monarch is male) are the names given to contingents of infantry and cavalry. . . :                                                                                               12 Jan 2020                                                                                                                           Memoirs supports external images as featured              :       Adding images is a very annoying task, I know that, but “Memoirs” theme has external featured images integrated so your publishing task becomes easier now. :                                                                                               12 Jan 2020                                   &laquo;        1        2       &raquo; "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/page2/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 7,
    "url": "http://localhost:4000/domain/",
    "title": "ডোমেইন ও হোস্টিং",
    "body": "2020/08/30 - কিছুক্ষণ আগে ডিএসবি তে এক ভাইয়ার পোস্ট পড়লাম হোস্টিং নিয়ে। উনার ব্যাখ্যাটা আমার কাছে একটু জটিল মনে হল। তাই আমি চেষ্টা করলাম আরেকটু সহজ করে বুঝাতে। একটা ওয়েবসাইট আসলে একটা বাড়ির মত। একটা বাড়ি করার প্রসেস গুলো কি কি? একটা জমি থাকবে, জমির উপর বাড়ি হবে। তারপর বাড়িটার জন্য একটা ঠিকানা হবে। তাই তো? ওয়েবসাইট বানাতে গেলেও একই রকম প্রসেস ফলো করতে হয়। জমি: বাড়ি করতে প্রথমেই আমাকে জমির ব্যাবস্থা করতে হয়। ওয়েবসাইট এর ক্ষেত্রে এই জমিটাই হল হোস্টিং। প্রথমত ওয়েবসাইট বানাতে গেলেই যে হোস্টিং কিনতে হবে, সেটা না। চাইলে নিজের কম্পিউটারে টেম্পোরারি সার্ভার চালু করে সেটাকে হোস্টিং হিসেবে ব্যাবহার করা যায়। এটাকে বলে লোকালহোস্ট। তবে ওয়েবসাইট পাবলিক এর জন্য রিলিজ করার সময় একটা হোস্টিং ভাড়া নেয়াই উত্তম। হোস্টিং কয়েক ধরনের হয়, প্রত্যেকটার ব্যাখ্যা অনেক বড় হবে। হয়তো অন্য কোনদিন সেগুলোর ব্যাখ্যা দিব। বাড়ি: জমি কেনা শেষ। এখন বাড়ি বানানোর কাজ। ওয়েবসাইট দুই ধরণের হয়, স্ট্যাটিক আর ডায়নামিক। স্ট্যাটিক ওয়েবসাইট শুধু html/css ও ক্ষেত্রবিশেষে JavaScript ব্যাবহার করা হয়। ডায়নামিক ওয়েবসাইটে বিভিন্ন ধরণের ল্যাঙ্গুয়েজ ব্যবহার করা যেতে পারে। কিন্তু যেই জিনিসটা স্ট্যাটিক থেকে ডায়নামিক ওয়েবসাইটকে আলাদা করে সেটা হচ্ছে ডাটাবেজ। একটা ডায়নামিক ওয়েবসাইটের ডাটাবেজ লাগবেই। ডাটাবেজ অনেক ধরণের হয়, সেই ব্যাখ্যায় আজ যাচ্ছিনা। লোকালহোস্ট এ ওয়েবসাইটের কাজ শেষ হওয়ার পর ওয়েবসাইট হোস্টিংয়ে আপলোড করতে হয়। গুগল ড্রাইভ বা ফেসবুকে আমরা যেমন ছবি আপলোড করি খুব সহজেই, ওয়েবসাইট আপলোড এর ব্যাপারটা তেমন সহজ/সিম্পল কিছুনা। স্ট্যাটিক ওয়েবসাইটআপলোড করা মোটামুটি সহজ। কিন্তু ডায়নামিক ওয়েবসাইট মানে যেটার কন্টেন্ট চেন্জ হয় সময়ে সময়ে, যেমন ফেসবুক, বা একটা ইকমার্স এর ওয়েবসাইট বা একটা ব্লগ ওয়েবসাইট, এগুলো আপলোড করা জটিল প্রসেস। জটিল হওয়ায় এই ব্যাখ্যায় আর যাচ্ছিনা। হয়ত অন্য কোনোদিন। এখন আসি ডোমেইনে। এড্রেস/ঠিকানা: জমি কিনে সেটার উপর বাড়ি বানানো শেষ। মানুষ আমার বাড়ি চিনবে কিভাবে? কাউকে কিভাবে বুঝাবো আমার বাড়িটা কোথায়? সেটার জন্য লাগবে ঠিকানা। অনেকের ধারণা হতে পারে এটাই হচ্ছে ডোমেইন। টেকনিক্যাল কথা চিন্তা করলে এটা ডোমেইন না। ডোমেইন আসলে অনেকটা নেমপ্লেটের মত, যেখানে লেখা থাকে আপনার বাড়ির নাম , সাথে ঠিকানা। তাহলে ঠিকানা কোনটা? ঠিক হচ্ছে আসলে আইপি এড্রেস। এটা হোস্টিংয়ের সাথেই পাওয়া যাবে, এটা নিয়ে টেনশনের কিছু নেই। আমাদের অনেকের মনে একটা ভুল ধারনা আছে, ডোমেইন অনেক ইম্পরট্যান্ট। কেউ কেউ তো আবার হোস্টিং থেকে ডোমাইনকে বেশী প্রাধান্য দিয়ে থাকে। এটা একদমই ভুল ধারণা। হোস্টিং থেকে ডোমেইন মোটেও বেশি দরকারী না। ডোমেইন দিয়ে মানুষকে বলবেন যে এটা আমার ওয়েবসাইট। কিন্তু হোস্টিং এর উপর ডিপেন্ড করবে ওয়েবসাইটটা কেমন পারফর্ম করছে। মাঝেমাঝে আমরা দেখিনা সার্ভার ওভারলোড হয়ে ওয়েবসাইট কাজ করছে না? মাঝেমাঝেই পিএসসি/জেএসসি/এসএসসির রেজাল্টের সময় দেখা যায় সার্ভার ডাউন। এটা হয় হোস্টিং এর জন্য। হোস্টিং যখন এত মানুষের লোড নিতে পারেনা, তখন সেটা ক্র্যাশ করে/সার্ভার ডাউন হয়ে যায়। ডোমেইন এর উপর ওয়েবসাইট এর কিছুই নির্ভর করেনা। আচ্ছা ডোমেইন কি কিনতেই হবে? নাহ, কিনতেই হবে এমন কোন কথা নেই। ডোমেইন লাগবেই ওয়েবসাইট চালাতে এমন কোন নিয়ম নেই। তাহলে ওয়েবসাইট খুঁজে পাবে কিভাবে? আইপি এড্রেস দিয়ে। আইপি এড্রেস চিনেন তো? 000. 000. 000. 000, এমন ফরম্যাটের হয় আইপি এড্রেস। ডোমেইন না কিনে আইপি এড্রেস দিয়েও ওয়েবসাইট চালানো সম্ভব। এসইও: ওয়েবসাইট বানালাম, হোস্টিং ডোমেইন কিনলাম। কিন্তু গুগলে সার্চ দিলে আমার ওয়েবসাইট আসছেনা। কেন? এটার উত্তর এসইও/SEO। SEO মানে Search Engine Optimization। ওয়েবসাইট বানানোর পর সার্চ ইঞ্জিনকে বলে দিতে হয় আমার ওয়েবসাইট এইখানে আছে। এইটা, এইটা সার্চ দিলে আমার ওয়েবসাইট দেখানো হোক কারণ আমার ওয়েবসাইট এইসব এর সাথে সম্পর্কিত। যেমন potato সার্চ দিলে আমার ওয়েবসাইট দেখানো হোক কারণ আমার ওয়েবসাইটে আলু বিক্রি হয়। তবে কিছু CMS যেমন ওয়ার্ডপ্রেসে seo জিনিসটার জন্য আলাদা প্লাগিন থাকে, সেটা নিজে নিজেই এসইও এর কিছু কাজ করে। cms আজকের টপিক না, তাই সেটা নিয়ে কথা বাড়াচ্ছি না। কিছু কমন প্রশ্ন ও তাদের উত্তর (F. A. Q. ) প্রশ্ন: হোস্টিং কত টাকার কিনলে ভালো হয়? উত্তর: যতটুকু স্পিড/ক্যাপাসিটি/স্টোরেজ আপনার দরকার। বড়(বেশি মানুষ ভিজিট করে) একটা ওয়েবসাইটের জন্য 1 লক্ষ টাকার হোস্টিং ও কম হবে। আবার একেবারে কম মানুষ ভিজিট করে এমন ওয়েবসাইটের জন্য 5 হাজার টাকার ওয়েবসাইটও বেশী হয়ে যাবে। তবে প্রথম প্রথম শুরু করার জন্য 2 হাজার মধ্যে শেয়ার্ড হোস্টিং কিনেই শুরু করা যায়। প্ৰশ্ন: ডোমেইন/ হোস্টিং দেশী ওয়েবসাইট থেকে কিনব নাকি বিদেশী?উত্তর: আমার এক্সপেরিয়েন্স থেকে দেখা দেশী রিসেলাররা অতিরিক্ত প্রাইস রাখে। আপনার বাজেট যদি একেবারে কম হয়, তাহলে দেশী নিতে পারেন কার্য তারা কম টাকার প্যাকেজ রাখে, যদিও স্টোরেজ/ram কম হয় একদম। কিন্তু বিদেশী হোস্টিং অবশ্যই সাজেস্টেড। আপনি বিদেশী কোন কোম্পানী থেকে হোস্টিং নিলে 2000 টাকার যদি 20 GB স্টোরেজ পান, দেশী কোম্পানি থেকে 1000 টাকায় 2 থেকে 5 জিবি পাবেন। প্রশ্ন: ভালো হোস্টিং কোম্পানি কোনগুলো?উত্তর: আমি namecheap, bluehost, hostgator, godaddy ইত্যাদি প্রেফার করি প্রশ্ন: ভালো ডোমেইন কত টাকায় পাওয়া যায়?উত্তর: ভালো ডোমেইন বলতে কিছু নেই। ডোমেইন সবগুলোর কাজ ও ফিচার্স একই। আপনার কোনটা পছন্দ সেটা নিবেন। এখন . com ইন্ডাস্ট্রি স্ট্যান্ডার্ড। বেশিরভাগই . com প্রেফার করে। আবার . com. bd ও পপুলার। . com কোম্পানি ভেদে 700 থেকে 900 টাকায় পেয়ে যাবেন। আবার . xyz ডোমেইন 150 থেকে 250 টাকায় পাওয়া যায়। ডোমেইনের পিছনে 1000 এর বেশী খরচ না করার পরামর্শ থাকবে আজকের জন্য এখানেই শেষ করছি। আপনাদের যেকোন প্রশ্ন থাকলে করতে পারেন। এই গ্রুপে আমার প্রথম পোস্ট। যেকোন অনাকাঙ্ক্ষিত ভুলের জন্য ক্ষমাপ্রার্থী। আমি ফারদিন এহসান, পড়াশোনা করছি কম্পিউটার সায়েন্স ও ইঞ্জিনিয়ারিং নিয়ে। ধন্যবাদ। [এডিটেড এন্ড রিপোস্টেড] "
    }, {
    "id": 8,
    "url": "http://localhost:4000/les-ambassadeurs/",
    "title": "Les Ambassadeurs, the first Restaurant we Visited in Paris",
    "body": "2020/02/02 - Within the Hôtel de Crillon, which was built in 1758, Les Ambassadeurs operated as a restaurant since the mid-19th century. It reached its peak of fame as a restaurant and nightclub (a café-concert) in the last three decades of the 19th century. Always a center of entertainment for the aristocracy, in the 1870s it also became a regular destination of some of the best known figures of art and the demi-monde. Edgar Degas and Henri de Toulouse-Lautrec portrayed visitors at the night club, and Aristide Bruant performed there.  It was decorated in an 18th-century rococo style, redesigned by Sybille de Margérie with furnishings by Sonia Rykiel. Following a renovation of the hotel in 1981–85, the restaurant occupied a former private ballroom with windows looking out on the Place de la Concorde, a few hundred meters from the Palais Garnier. Les Ambassadeurs had two Michelin stars. In the last decade of its operation, chef was Dominique Bouchet followed by Jean-François Piège and finally when the hotel closed in 2013 for an extended renovation, Christopher Hache. In 2017 Hache opened a smaller restaurant, L’Écrin, within the renovated hotel; the former space of Les Ambassadeurs became a bar. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/much-more-than-a-desert-trip-to-sahara/",
    "title": "Much more than a desert: A trip into the Sahara",
    "body": "2020/02/01 - The Sahara is a desert located on the African continent. It is the largest hot desert in the world, and the third largest desert overall after Antarctica and the Arctic. Its area of 9,200,000 square kilometres (3,600,000 sq mi) is comparable to the area of China or the United States. [3] The name ‘Sahara’ is derived from a dialectal Arabic word for “desert”, ṣaḥra (صحرا /ˈsˤaħra/). The desert comprises much of North Africa, excluding the fertile region on the Mediterranean Sea coast, the Atlas Mountains of the Maghreb, and the Nile Valley in Egypt and Sudan. It stretches from the Red Sea in the east and the Mediterranean in the north to the Atlantic Ocean in the west, where the landscape gradually changes from desert to coastal plains. To the south, it is bounded by the Sahel, a belt of semi-arid tropical savanna around the Niger River valley and the Sudan Region of Sub-Saharan Africa. The Sahara can be divided into several regions including: the western Sahara, the central Ahaggar Mountains, the Tibesti Mountains, the Aïr Mountains, the Ténéré desert, and the Libyan Desert. For several hundred thousand years, the Sahara has alternated between desert and savanna grassland in a 20,000 year cycle caused by the precession of the Earth’s axis as it rotates around the Sun, which changes the location of the North African Monsoon. The area is next expected to become green in about 15,000 years (17,000 AD). "
    }, {
    "id": 10,
    "url": "http://localhost:4000/one-day-just-started-adventure/",
    "title": "One day we just started our adventure",
    "body": "2020/01/12 - The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/london/",
    "title": "London is that kind of place you must visit in this lifetime",
    "body": "2020/01/12 - The Queen’s Guard and Queen’s Life Guard (called King’s Guard and King’s Life Guard when the reigning monarch is male) are the names given to contingents of infantry and cavalry soldiers charged with guarding the official royal residences in the United Kingdom. The British Army has regiments of both Horse Guards and Foot Guards predating the English Restoration (1660), and since the reign of King Charles II these regiments have been responsible for guarding the Sovereign’s palaces. The Guards are fully operational soldiers. The Queen’s Guard and Queen’s Life Guard are mounted at the royal residences that come under the operating area of the British Army’s London District, which is responsible for the administration of the Household Division. This covers Buckingham Palace, St James’s Palace and the Tower of London, as well as Windsor Castle. The Queen’s Guard is also mounted at the sovereign’s other official residence, the Palace of Holyroodhouse, but not as often as in London. In Edinburgh, the guard is the responsibility of the resident infantry battalion at Redford Barracks. It is not mounted at the Queen’s private residences at Sandringham or Balmoral.  The Queen’s Guard is the name given to the contingent of infantry responsible for guarding Buckingham Palace and St James’s Palace (including Clarence House) in London. The guard is made up of a company of soldiers from a single regiment, which is split in two, providing a detachment for Buckingham Palace and a detachment for St James’s Palace. Because the Sovereign’s official residence is still St James’s, the guard commander (called the captain of the guard) is based there, as are the regiment’s colours. When the Sovereign is in residence, the Queen’s Guard numbers three officers and forty other ranks, with four sentries each posted at Buckingham Palace (on the forecourt) and St James’s Palace (two in Friary Court, two at the entrance to Clarence House). This reduces to three officers and 31 ORs, with two sentries each, when the Sovereign is not in residence. The Queen’s Guard is not purely ceremonial in nature. They provide sentries during the day and night, and during the later hours, they patrol the grounds of the Palace. Until 1959, the sentries at Buckingham Palace were stationed outside the fence. This stopped following an incident involving a female tourist and a Coldstream Guardsman – due to the continued pestering by tourists and sightseers, the guardsman kicked the tourist on the ankle as he marched. The tourist made a complaint to the police and the sentry was confined to barracks for ten days. Not long after, the sentries were moved inside the fence. "
    }, {
    "id": 12,
    "url": "http://localhost:4000/external-featured-image/",
    "title": "Memoirs supports external images as featured",
    "body": "2020/01/12 - Adding images is a very annoying task, I know that, but “Memoirs” theme has external featured images integrated so your publishing task becomes easier now. Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/post-with-spoiler/",
    "title": "Spoliers Inside - a film review needs hidden spoilers like this post",
    "body": "2020/01/11 - Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that gave away the film’s entire plot twist premise. As in many similar films, such as Jacob’s Ladder (1990), Soul Survivors (2001), and The Butterfly Effect (2004), events and people were thoroughly distorted and confused because the protagonist was at the point of death. The tagline was misleading: “When You Don’t Have a Memory, How Can You Remember Who to Trust?” The mind-warping film opened with a hospital patient Simon Cable (Ryan Phillippe) awakening in a hospital with little knowledge (amnesia perhaps?) of what had happened, and why he was there, etc. He was told by attending Dr. Jeremy Newman (Stephen Rea) that it was July 29, 2002 (Simon thought it was the year 2000 - he was confused - he heard a doctor say 20:00 hours!) and that he had died for two minutes from cardiac arrest following the near-fatal accident – but he had been revived (“You’re as good as new”). Dr. Newman: “Simon, this is the 29th of July. The year is 2002. And your wife, whose name is Anna, is waiting outside. ” What critiques say?:  “There’s almost no single moment in Portrait of a Lady on Fire that couldn’t be captured, mounted, and hung on a wall as high art. ” — Entertainment Weekly A major clue to everything that truly happened was the scene that played next under the credits - hospital staff failed to bring a patient back to life with a defibrillator after a car accident. Chest compressions failed and there was no pulse. A second major clue was provided by hospital orderly Travis (Stephen Graham): Everybody dies. No mystery there. But why and how everyone dies. Now, there’s a mystery worth solving. Probably the biggest mystery there is. So how do we add spoilers in this theme?: &lt;span class= spoiler &gt;My hidden paragraph here. &lt;/span&gt;"
    }, {
    "id": 14,
    "url": "http://localhost:4000/that-day-we-almost-missed-flight/",
    "title": "That day when we almost missed our flight",
    "body": "2020/01/01 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 15,
    "url": "http://localhost:4000/review-oscar/",
    "title": "Reviewing the best Oscar movies of all time",
    "body": "2020/01/01 - Review products, books, movies, restaurant and anything you like on your Jekyll blog with Memoirs! JSON-LD ready for review property. How to use?: It’s actually really simple! Add the rating in your YAML front matter. It also supports halfs: ---layout: posttitle:  Inception Movie author: johncategories: [ Lifestyle ]tags: [red, yellow]image: assets/images/11. jpgdescription:  My review of Inception movie. Actors, directing and more.  rating: 4. 5---"
    }, {
    "id": 16,
    "url": "http://localhost:4000/the-observer/",
    "title": "The Observer - National Gallery of Art, Washington, United States",
    "body": "2019/12/01 - The National Gallery of Art, and its attached Sculpture Garden, is a national art museum in Washington, D. C. , located on the National Mall, between 3rd and 9th Streets, at Constitution Avenue NW. Open to the public and free of charge, the museum was privately established in 1937 for the American people by a joint resolution of the United States Congress. Andrew W. Mellon donated a substantial art collection and funds for construction.  The core collection includes major works of art donated by Paul Mellon, Ailsa Mellon Bruce, Lessing J. Rosenwald, Samuel Henry Kress, Rush Harrison Kress, Peter Arrell Browne Widener, Joseph E. Widener, and Chester Dale. The Gallery’s collection of paintings, drawings, prints, photographs, sculpture, medals, and decorative arts traces the development of Western Art from the Middle Ages to the present, including the only painting by Leonardo da Vinci in the Americas and the largest mobile created by Alexander Calder. The Gallery’s campus includes the original neoclassical West Building designed by John Russell Pope, which is linked underground to the modern East Building, designed by I. M. Pei, and the 6. 1-acre (25,000 m2) Sculpture Garden. The Gallery often presents temporary special exhibitions spanning the world and the history of art. It is one of the largest museums in North America. "
    }, {
    "id": 17,
    "url": "http://localhost:4000/press-and-education/",
    "title": " Culinary Arts in Europe by Jean Anthelme Brillat-Savarin",
    "body": "2019/12/01 - The origins of culinary began with primitive humans roughly 2 million years ago. There are various theories as to how early humans used fire to cook meat. According to anthropologist Richard Wrangham, author of Catching Fire: How Cooking Made Us Human, primitive humans simply tossed a raw hunk of meat into the flames and watched it sizzle. Another theory claims humans may first have savoured roasted meat by chance when the flesh of a beast killed in a forest fire was found to be more appetizing and easier to chew and digest than the conventional raw meat. Culinary techniques improved with the introduction of earthenware and stoneware, the domestication of livestock, and advancements in agriculture. In early civilizations, the primary employers of professional chefs were kings, aristocrats, or priests. The divide between professional chefs cooking for the wealthy and peasants cooking for their families engendered the development of many cuisines. A great deal of the study of Culinary Arts in Europe was organized by Jean Anthelme Brillat-Savarin, a man famous for his quote “Tell me what you eat, and I will tell you what you are,” which has since been mistranslated and oversimplified into “You are what you eat. ” Other people helped to parse out the different parts of food science and gastronomy. Over time, increasingly deeper and more detailed studies into foods and the Culinary Arts has led to a greater wealth of knowledge. In Asia, a similar path led to a separate study of the Culinary Arts, which later essentially merged with the Western counterpart. In the modern international marketplace, there is no longer a distinct divide between Western and Eastern foods. Culinary Arts students today, generally speaking, are introduced to the different cuisines of many different cultures from around the world. The Culinary Arts, in the Western world, as a craft and later as a field of study, began to evolve at the end of the Renaissance period. Prior to this, chefs worked in castles, cooking for kings and queens, as well as their families, guests, and other workers of the castle. As Monarchical rule became phased out as a modality, the chefs took their craft to inns and hotels. From here, the craft evolved into a field of study. Before cooking institutions, professional cooks were mentors for individual students who apprenticed under them. In 1879, the first cooking school was founded in the United States: the Boston Cooking School. This school standardized cooking practices and recipes, and laid the groundwork for the culinary arts schools that would follow. "
    }, {
    "id": 18,
    "url": "http://localhost:4000/education/",
    "title": "Education must also train one for quick, resolute and effective thinking.",
    "body": "2018/06/12 - Memoirs theme has Prism highlighter integrated. I will show you in this post a few examples of how it looks if you are a developer planning to add pieces of code on your website. HTML: &lt;li class= ml-1 mr-1 &gt;  &lt;a target= _blank  href= # &gt;  &lt;i class= fab fa-twitter &gt;&lt;/i&gt;  &lt;/a&gt;&lt;/li&gt;CSS: . highlight . c {  color: #999988;  font-style: italic; }. highlight . err {  color: #a61717;  background-color: #e3d2d2; }JS: // alertbar later$(document). scroll(function () {  var y = $(this). scrollTop();  if (y &gt; 280) {    $('. alertbar'). fadeIn();  } else {    $('. alertbar'). fadeOut();  }});Python: print( Hello World )Ruby: require 'redcarpet'markdown = Redcarpet. new( Hello World! )puts markdown. to_htmlC: printf( Hello World );"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});