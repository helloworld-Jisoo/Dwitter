import * as tweetRepository from '../data/tweet.js';

export async function getTweets(req, res){
  const username = req.query.username;
  const data = await(username 
  ? tweetRepository.getAllByUsername(username)
  : tweetRepository.getAll())
  res.status(200).json(data);
}

export async function getTweet(req, res, next){
  const id = req.params.id;
  const tweet = await tweetRepository.getById(id);
  if(tweet){
    res.status(200).json(tweet);
  } else{
    res.status(404).json({
      message: `Tweet id(${id}) not found`
    });
  }
}

export async function createTweet(req, res, next){
  const {text, name, username} = req.body;
  const tweet = await tweetRepository.create(text,name,username)
  res.status(201).json(tweet); //success
}

export async function updateTweet(req, res, next){
  const {text, name, username} = req.body;
  const tweet = await tweetRepository.create(text,name,username)
  res.status(201).json(tweet); //success
}

export async function deleteTweet(req, res, next){
  const id = req.params.id;
  await tweetRepository.remove(id)
  res.sendStatus(204);
  }