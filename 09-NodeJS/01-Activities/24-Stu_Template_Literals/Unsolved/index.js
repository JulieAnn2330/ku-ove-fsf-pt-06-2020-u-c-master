// music should be an object with title, artist, and album properties
const music = 
  // code here
  {title: "Summertime", 
  artist: "Ella Fitzgerald", 
  album: "Porgy and Bess"
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
<h2>The album ${music.album}</h2>
<p>Featuring ${music.artist} and the song, ${music.title}.</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

