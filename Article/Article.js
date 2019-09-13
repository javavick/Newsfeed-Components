/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "The Transformers (Marvel Comics)",
    date: "May 8th, 1984",
    firstParagraph:
      "The Transformers, the monthly comic book published in the U.S. by Marvel Comics, was the very first original fiction to feature the famous robots in disguise, as well as the longest-running. It started life as a four-issue, bimonthly limited series in 1984, but proved so popular that it continued publication as an ongoing monthly until spring of 1991. The series ultimately reached 80 issues and spun off several miniseries.",

    secondParagraph:
      "The series established the Marvel Comics continuity, which would form the basis for several successor stories over the years, including the Generation 2 series published by Marvel themselves only two years later, and the Regeneration One series which would reunite the creative team from the latter days of this series.",

    thirdParagraph:
      "Nearly all of the U.S. stories were later published by Marvel UK, along with new stories that fit between the gaps of the U.S. tales."
  },
  {
    title: "The Transformers (TV Series)",
    date: "September 17, 1984",
    firstParagraph:
      "The Transformers is a half-hour American animated robot superhero television series which originally aired from September 17, 1984 to November 11, 1987. The first of many series in the Transformers franchise, it was based upon Hasbro's Transformers toy line (itself based upon the Diaclone and Microman toy lines originally created by Japanese toy manufacturer Takara) and depicts a war among giant robots that can transform into vehicles and other objects.",

    secondParagraph:
      "Co-produced between Marvel Productions and Sunbow Productions for first-run syndication, animation for the series was done by Toei Animation in Japan, and later by AKOM in South Korea. The series was supplemented by a feature film, The Transformers: The Movie (1986), taking place between the second and third seasons.",

    thirdParagraph:
      'This series is also popularly known as "Generation 1", a term originally coined by fans in response to the re-branding of the franchise as Transformers: Generation 2 in 1992, which eventually made its way into official use.'
  },
  {
    title: "Transformers (2019 Comic)",
    date: "March 13, 2019",
    firstParagraph:
      "Transformers is an ongoing comic series from IDW Publishing that debuted in March 2019, releasing issues every two weeks for its first six months of publication before switching to a monthly release schedule in September 2019. The series marks the first installment of a brand-new continuity for IDW's Transformers comics, replacing the previous ongoing continuity that ran from 2005 to 2018. ",

    secondParagraph:
      "Set prior to the war between Autobots and Decepticons, Transformers takes place on a thriving, peaceful Cybertron that serves as an interstellar commerce hub. The era of peace is brought to an unexpected end, however, when the planet experiences its first murder in living memory.",

    thirdParagraph:
      "The series is written by Brian Ruckley. Each issue is regularly drawn by more than one artist; duties were initially split between Angel Hernandez and Cachét Whitman, with Hernandez illustrating the majority of the pages in each issue, while the second arc of the series saw Anna Malkova and Bethany McGuire-Smith join Hernandez as the book's primary recurring artists."
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

/*============== VARIABLES ==============*/
let articlesDiv = document.querySelector(".articles");
let head = document.querySelector("head");

let gsap = document.createElement("script");
gsap.setAttribute(
  "src",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
);

/*============== ARTICLE COMPONENT CREATOR ==============*/
function articleCreator(object) {
  /*===== VARIABLES ====*/

  // Article Div
  let article = document.createElement("div");

  // Content Array
  const content = [
    document.createElement("h2"),
    document.createElement("span")
  ];

  // Create p Elements and Add Them to the Content Array
  for (let i = 0; i < 4; i++) {
    let p = document.createElement("p");
    content.push(p);
  }

  // Add a New Span Element to the Content Array
  content.push(document.createElement("span"));

  /*===== ATTRIBUTES, PROPERTIES, AND TEXT ====*/
  article.classList.add("article");

  // Title
  content[0].textContent = object.title;

  // Close Button
  content[1].setAttribute("class", "close");
  content[1].style.border = "1px solid red";
  content[1].style.padding = "0 5px";
  content[1].style.cursor = "pointer";
  content[1].textContent = "X";

  // Date
  content[2].setAttribute("class", "date");
  content[2].textContent = object.date;

  // Paragraphs
  content[3].textContent = object.firstParagraph;
  content[4].textContent = object.secondParagraph;
  content[5].textContent = object.thirdParagraph;

  // Expand Button
  content[6].setAttribute("class", "expandButton");
  content[6].textContent = "\u25bc";

  /*===== EVENT LISTENERS =====*/

  // Close Button
  content[1].addEventListener("click", (event) => {
    TweenMax.to(article, 0.7, { opacity: 0, display: "none", delay: 0 });
  });

  // Expand Button
  content[6].addEventListener("click", () => {
    article.classList.toggle("article-open");

    if (article.classList.contains("article-open")) {
      content[6].textContent = "\u25b2";
    } else {
      content[6].textContent = "\u25bc";
    }
  });

  /*===== COMPONENT STRUCTURE =====*/
  content.forEach((arg) => {
    article.appendChild(arg);
  });

  return article;
}

/*============== DOM MANIPULATION ==============*/
head.appendChild(gsap);

data.forEach((arg) => {
  articlesDiv.appendChild(articleCreator(arg));
});
