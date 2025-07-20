const config = {
  /*
  Aljun 
  */

  // 🔐 Passcode Page
  correctPasscode: "1021", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! So galing, Baby!!:DD", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: Day ng birthday natin:P", // Message shown for incorrect passcode
  cancelButtonText: "Reset", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is Nathalie Elora De la vega Gonzales so maldita  ?", // Example trending search query
    "Why is elora so gorgeous??", // Another example query
    `Kiss pls`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-04-21", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Passenger Seat", // Title of the song
      artist: "Stephen Speaks", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Saksi Ang Langit",
      artist: "December Avenue",
      left: "40%",
      top: "15%",
    },
    {
      title: "XXL",
      artist: "a beautiful blur album - Lany",
      left: "15%",
      top: "40%",
    },
    {
      title: "Super Far",
      artist: "Lany",
      left: "30%",
      top: "75%",
    },
    {
      title: "Pink Skies",
      artist: "Lany",
      left: "5%",
      top: "65%",
    },
    {
      title: "Kalendaryo",
      artist: "Andria",
      left: "25%",
      top: "90%",
    },
    {
      title: "Dalangin",
      artist: "Earl Agustin",
      left: "35%",
      top: "50%",
    },
    {
      title: "Nahanap kita",
      artist: "Amiel Sol",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Memorable Messages", // Title for the messages recap page
    messageGallery: [
      { title: "May 5, 2025", description: "The confession Day. TAINA KAKILIGGGG" }, // Message entry
      { title: "May 2, 2025", description: "Your first update after FSY. 🤩" },
      { title: "April 21, 2025", description: "The day you asked for my IG😍😋" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Birthday Girl", // Title for the pictures recap page
    pictureGallery: [
      { title: "💗💗💗", description: "My favorite picture of you. JAHASHASHA TANGINA KINIKILIG AKO LAGI PAG NAKIKITA KO TO" }, // Picture entry
      { title: "💗💗💗", description: "Remember how much u hate this first picture pero I find it cute? HAHAHAHA sinend mo sakin naka cover pero crinop ko lang yung sa myday ni kuya Thaniel" },
      { title: "💗💗💗",  description: "The first photo you've ever sent to me and the first photo na na myday ko 💗"},
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Hello. My Love, Elora. I wish you a very very happy birthday!! You know the rest.", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, My Elora!! 💗💓💗 Wishing us many more wonderful years together. 1 Birthday, 0 Christmast, 0 New years.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
