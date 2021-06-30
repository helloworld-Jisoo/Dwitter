export default class TweetService {
  
  constructor(baseURL){
    this.baseURL = baseURL;
  }

  async getTweets(username) {
    const query = username ? `?username = ${username}`:'';
    const response = await fetch(`${this.baseURL}/tweets${query}`,{
      method:'GET',
      header:{ 'Content-type': 'application.json'},
    });
    const data = await response.json();
    if(response.status!==200){
      throw new Error(data.message);
    }

    return data;
    
  }

  async postTweet(text) {
    const response = await fetch(`${this.baseURL}/tweets`,{
      method:'POST',
      header:{ 'Content-type': 'application.json'},
      body: JSON.stringify({text,username:'jisoo',name:'Jisoo'})
    });
    const data = await response.json();
    if(response.status!==201){
      throw new Error(data.message);
    }
    return data;
    
  }

  async deleteTweet(tweetId) {
   const response = await fetch(`${this.baseURL}/tweets/${tweetId}`,{
      method:'DELETE',
      header:{ 'Content-type': 'application.json'},
    });
    if(response.status!==204){
      throw new Error();
    }
  }

  async updateTweet(tweetId, text) {
const response = await fetch(`${this.baseURL}/tweets/${tweetId}`,{
      method:'PUT',
      header:{ 'Content-type': 'application.json'},
          body: JSON.stringify({text})
    });
 const data = await response.json();
    if(response.status!==200){
      throw new Error(data.message);
    }

    return data;
  }
}
