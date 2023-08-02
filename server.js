const express = require('express');

const App= express();

App.get('/api',(request,response)=>{
    response.json({
        users:["LIST OF All BOOKS",
                
               "Sword of Destiny (The Witcher)",
               "D&D Waterdeep Dragon Heist HC (Dungeons & Dragons)",
               "Destiny Grimoire Anthology, Volume II: Fallen Kingdoms",
               "The Last Wish: Introducing the Witcher",
               "Blood Oath (Sawbones)",
               "The Collected Short Stories of Louis L'Amour, Volume 7: Frontier Stories",
               "Lord of Falcon Ridge",
               "The Rebel Prince (The Moorehawke Trilogy)",
               "Blaze Wyndham",
               "The Seventh Scroll (2) (The Egyptian Series)",
               "The Mountain Between Us (Movie Tie-In): A Novel",
               "Utah Blaine",
               "North to the Rails: A Novel (Talon and Chantry)",
               "Crucible: Star Wars Legends",
               "The Collected Bowdrie Dramatizations: Volume III (Chuck Bowdrie's Adventures)",
               "The Collected Short Stories of Louis L'Amour, Volume 3: The Frontier Stories",
               "Last of the Breed",
               "Radigan: A Novel",
               "River Divided",
               "Apparition Island (4) (The Windjammer Mystery Series)",
               "Sins of the Younger Sons",
               "The Walking Drum",
              
               

    ]
    })
});

App.listen(process.env.PORT||5000);


