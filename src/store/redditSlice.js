import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    posts: [{
        title: "Christmas is Funbecause I said so.because I said so.",
        author: "skwidward",
        selftext: "Christmas is fun because I said so.",
        permalink: "/",
        thumbnail: "../logo192.png",
        ups: 999,
        subreddit: "r/politics",
        created: 1203901243,
        id: "hwiute",
        showingComments: true,
        loadingComments: false,
        error: false,
        comments: [{
                author: "gairy",
                body: "i think you're dumb skwiddy",
                ups: 34524,
                created: 1203901555,
                id: "hweote",
                permalink: "/"
            },
            {
                author: "sayundee",
                body: "you're v dumb",
                ups: 3524,
                created: 1203910555,
                id: "hweope",
                permalink: "/"
            },
            {
                author: "ms durcrabz",
                body: "tres brill skwiddy",
                ups: 324,
                created: 1203903555,
                id: "hweyte",
                permalink: "/"
            }]
        },
        {
            title: "Christmas is NOT Fun",
            author: "padraig",
            selftext: "Christmas is NOT fun because I said so.",
            permalink: "/",
            thumbnail: "../logo192.png",
            ups: 9999,
            subreddit: "r/politics",
            created: 1613596000,
            id: "hxiuoe",
            showingComments: false,
            loadingComments: false,
            error: false,
            comments: []
        },
        {
            title: "Halloween is Fun and I don't care what you have to say about Christmas you silly silly sea creatures oh my god leave it alone already for crying out loud",
            author: "spungbab",
            selftext: "Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. Halloween is fun because I said so. ",
            permalink: "/",
            thumbnail: "../logo192.png",
            ups: 19999,
            subreddit: "r/politics",
            created: 1613596500,
            id: "hwiuoe",
            showingComments: false,
            loadingComments: false,
            error: false,
            comments: [{
                author: "plaenck",
                body: "smart",
                ups: 34124,
                created: 1223901555,
                id: "hxeote",
                permalink: "/"
            },
            {
                author: "pof",
                body: "killer attidude",
                ups: 5424,
                created: 1203010555,
                id: "hleope",
                permalink: "/"
            }]
        }],
    postClicked: true,
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