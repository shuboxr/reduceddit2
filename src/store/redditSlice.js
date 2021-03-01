import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    posts: [{
        title: "Christmas is Fun",
        author: "skwidward",
        body: "Christmas is fun because I said so.",
        permalink: "/",
        thumbnail: "../logo192.png",
        ups: 999,
        subreddit: "r/politics",
        created: 1203901243,
        id: "hwiute"
      },
      {
        title: "Christmas is NOT Fun",
        author: "padraig",
        body: "Christmas is NOT fun because I said so.",
        permalink: "/",
        thumbnail: "../logo192.png",
        ups: 9999,
        subreddit: "r/politics",
        created: 1613596000,
        id: "hxiuoe"
      },
      {
        title: "Halloween is Fun and I don't care what you have to say about Christmas you silly silly sea creatures oh my god leave it alone already for crying out loud",
        author: "spungbab",
        body: "Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. ",
        permalink: "/",
        thumbnail: "../logo192.png",
        ups: 19999,
        subreddit: "r/politics",
        created: 1613596500,
        id: "hwiuoe"
      }],
    postClicked: false,
    error: false,
    isLoading: false,
    searchTerm: '',
    filter: null
}

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {

    }
})


export default redditSlice.reducer;