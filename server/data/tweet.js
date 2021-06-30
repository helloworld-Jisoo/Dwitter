let tweets=[
  {
    id: "1",  
    text: "Testing..",  
    createdAt: Date.now().toString(), 
    name: "bob",  
    username: "bob",  
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png"
  },
    {
    id: "2",  
    text: "Testing..",  
    createdAt: Date.now().toString(), 
    name: "chris",  
    username: "chris",  
  },
];

export async function getAll(){
  return tweets;
}

export async function getAllByUsername(username){
  return tweets.filter(tweet => tweet.username === username)
}

export async function getById(id){
  return tweets.find(tweet => tweet.id === id)
}

export async function create(text,name,username){
    const tweet = {
      id: Date.now().toString(),
      text,
      createAt: new Date(),
      name,
      username,
  };
  tweets = [tweet, ...tweets]
    return tweet;
}

export async function update(id,text){
   const tweet = tweets.find((tweet)=>tweet.id===id);
   if(tweet){
    tweet.text = text;}
    return tweet;
   }

export async function remove(id){
  return tweets = tweets.filter((tweet) => tweet.id !== id)
   }