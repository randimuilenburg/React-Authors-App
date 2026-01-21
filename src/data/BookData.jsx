const bookData = [
  {
    bookId: 1,
    bookTitle: "Our Wives Under The Sea",
    bookAuthor: "Julia Armfield",
    authorId: 1,
    bookPubYear: 2022,
    bookSynopsis:
      "A woman grapples with the mysterious and unsettling changes in her wife after she returns from a deep-sea mission gone wrong.",
    bookCoverImage: "/cover-images/Armfield1.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/our-wives-under-the-sea-julia-armfield/1139985549",
  },
  {
    bookId: 2,
    bookTitle: "Private Rites",
    bookAuthor: "Julia Armfield",
    authorId: 1,
    bookPubYear: 2024,
    bookSynopsis:
      "Three estranged queer sisters reunite following the death of their architecht father, confronting their fraught inheritance, their fractured relationships, and haunting revelations from their past.",
    bookCoverImage: "/cover-images/Armfield2.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/private-rites-julia-armfield/1144125333?ean=9781250344311",
  },
  {
    bookId: 3,
    bookTitle: "The Girls",
    bookAuthor: "Emma Cline",
    authorId: 2,
    bookPubYear: 2016,
    bookSynopsis:
      "14‑year‑old Evie Boyd becomes mesmerized by a free‑spirited group of girls in late‑1960s California and is drawn into their Manson‑like cult.",
    bookCoverImage: "/cover-images/Cline1.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/the-girls-emma-cline/1122678902?ean=9780812988024",
  },
  {
    bookId: 4,
    bookTitle: "The Guest",
    bookAuthor: "Emma Cline",
    authorId: 2,
    bookPubYear: 2023,
    bookSynopsis:
      "A young woman gets kicked out of a rich man’s house in the Hamptons and spends a tense week trying to stay afloat without a plan.",
    bookCoverImage: "/cover-images/Cline2.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/the-guest-emma-cline/1141987011?ean=9780812988031",
  },
  {
    bookId: 5,
    bookTitle: "Such Sharp Teeth",
    bookAuthor: "Rachel Harrison",
    authorId: 3,
    bookPubYear: 2022,
    bookSynopsis:
      "A woman who bitten by a werewolf and has to deal with turning into a monster while facing old traumas and helping her sister.",
    bookCoverImage: "/cover-images/Harrison1.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/such-sharp-teeth-rachel-harrison/1140838929?ean=9780593545836",
  },
  {
    bookId: 6,
    bookTitle: "Black Sheep",
    bookAuthor: "Rachel Harrison",
    authorId: 3,
    bookPubYear: 2023,
    bookSynopsis:
      "A woman estranged from her cult-like family returns home for a wedding and uncovers dark secrets.",
    bookCoverImage: "/cover-images/Harrison2.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/black-sheep-rachel-harrison/1142833364?ean=9780593545867",
  },
  {
    bookId: 7,
    bookTitle: "So Thirsty",
    bookAuthor: "Rachel Harrison",
    authorId: 3,
    bookPubYear: 2024,
    bookSynopsis:
      "Two best friends go on a girls’ trip that takes a terrifying turn when they meet a group of strange and very thristy strangers.",
    bookCoverImage: "/cover-images/Harrison3.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/so-thirsty-rachel-harrison/1144474403?ean=9780593642542",
  },
  {
    bookId: 8,
    bookTitle: "This Thing Between Us",
    bookAuthor: "Gus Moreno",
    authorId: 4,
    bookPubYear: 2021,
    bookSynopsis:
      "A grieving husband is haunted by a strange smart speaker and a growing sense that something evil is following him.",
    bookCoverImage: "/cover-images/Moreno1.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/this-thing-between-us-gus-moreno/1138462113?ean=9780374539238",
  },
  {
    bookId: 9,
    bookTitle: "A Head Full of Ghosts",
    bookAuthor: "Paul Tremblay",
    authorId: 5,
    bookPubYear: 2015,
    bookSynopsis:
      "A teenage girl may be possessed as her family turns her struggle into a reality TV show.",
    bookCoverImage: "/cover-images/Tremblay1.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/a-head-full-of-ghosts-paul-tremblay/1120159641?ean=9780062363244",
  },
  {
    bookId: 10,
    bookTitle: "The Cabin At The End of the World",
    bookAuthor: "Paul Tremblay",
    authorId: 5,
    bookPubYear: 2018,
    bookSynopsis:
      "A family’s peaceful vacation is shattered when strangers arrive, claiming the world will end unless they make an unthinkable choice.",
    bookCoverImage: "/cover-images/Tremblay2.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/the-cabin-at-the-end-of-the-world-paul-tremblay/1127143035?ean=9780062679116",
  },
  {
    bookId: 11,
    bookTitle: "The Pallbears Club",
    bookAuthor: "Paul Tremblay",
    authorId: 5,
    bookPubYear: 2022,
    bookSynopsis:
      "A man writes a memoir about his strange teenage friendship with a girl who might be a vampire, while she adds her own notes to challenge his story.",
    bookCoverImage: "/cover-images/Tremblay3.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/the-pallbearers-club-paul-tremblay/1140276919?ean=9780063069909",
  },
  {
    bookId: 12,
    bookTitle: "Horror Movie",
    bookAuthor: "Paul Tremblay",
    authorId: 5,
    bookPubYear: 2024,
    bookSynopsis:
      "A screenwriter looks back on the cursed indie horror film he made in the '90s and the terrifying things that followed.",
    bookCoverImage: "/cover-images/Tremblay4.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/horror-movie-paul-tremblay/1144117219?ean=9780063399105",
  },
  {
    bookId: 13,
    bookTitle: "Wanderers",
    bookAuthor: "Chuck Wendig",
    authorId: 6,
    bookPubYear: 2019,
    bookSynopsis:
      "When a mysterious sleepwalking plague spreads across America, a group of strangers must protect the walkers and uncover the truth behind it.",
    bookCoverImage: "/cover-images/Wendig1.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/wanderers-chuck-wendig/1129747542?ean=9780399182129",
  },
  {
    bookId: 14,
    bookTitle: "The Book of Accidents",
    bookAuthor: "Chuck Wendig",
    authorId: 6,
    bookPubYear: 2021,
    bookSynopsis:
      "An unsuspecting father moves back to his childhood home full of dark memories, only to face supernatural forces tied to trauma and evil.",
    bookCoverImage: "/cover-images/Wendig2.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/the-book-of-accidents-chuck-wendig/1137974943?ean=9780399182150",
  },
  {
    bookId: 15,
    bookTitle: "Black River Orchard",
    bookAuthor: "Chuck Wendig",
    authorId: 6,
    bookPubYear: 2023,
    bookSynopsis:
      "A cursed apple orchard tempts a town with beauty and power, but it comes at a horrifying cost.",
    bookCoverImage: "/cover-images/Wendig3.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/black-river-orchard-chuck-wendig/1142888528?ean=9780593158746",
  },
  {
    bookId: 16,
    bookTitle: "The Staircase in the Woods",
    bookAuthor: "Chuck Wendig",
    authorId: 6,
    bookPubYear: 2025,
    bookSynopsis:
      "They lost a friend to a strange staircase in the woods as teens, and now, as adults, they’re determined to find out where he went.",
    bookCoverImage: "/cover-images/Wendig4.jpg",
    bookBuyLink:
      "https://www.barnesandnoble.com/w/the-staircase-in-the-woods-chuck-wendig/1146072187?ean=9780593156568",
  },
];

export default bookData;
