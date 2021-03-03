/* {
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
        } */

import { createSlice } from '@reduxjs/toolkit';
import { getComments, search } from '../api/reddit';

const initialState = {
    posts: [],
    activePostIndex: null,
    error: false,
    isLoading: false,
    searchTerm: '',
    filter: 0
}

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        startGetPosts (state, action) {
            state.searchTerm = action.payload;
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess (state, action) {
            state.posts = action.payload;
            state.isLoading = false;
        },
        getPostsFailure (state) {
            state.isLoading = false;
            state.error = true;
        },
        startGetComments (state, action) {
            const postIndex = action.payload;
            console.log(postIndex);
            state.posts[postIndex].showingComments = !state.posts[postIndex].showingComments;
            if (!state.posts[postIndex].showingComments) {
                return;
            }
            state.posts[postIndex].loadingComments = true;
            state.posts[postIndex].error = false;
        },
        getCommentsSuccess (state, action) {
            const postIndex = action.payload.index;
            state.posts[postIndex].comments = action.payload.comments;
            state.posts[postIndex].loadingComments = false;
            state.posts[postIndex].error = false;
        },
        getCommentsFailure (state, action) {
            const postIndex = action.payload;
            state.posts[postIndex].loadingComments = false;
            state.posts[postIndex].error = true;
        },
        setSearchTerm (state, action) {
            state.searchTerm = action.payload;
        },
        setFilter (state, action) {
            state.filter = action.payload;
        },
        toggleActivePost (state, action) {
            if (action) {
                state.activePostIndex = action.payload;
            } else {
                state.activePostIndex = null;
            }
        },
        toggleComments (state) {
            if (!state.activePostIndex) {
                return;
            }
            state.posts[state.activePostIndex].showingComments = !state.posts[state.activePostIndex].showingComments;
        }
    }
});

export const {
    startGetPosts,
    getPostsSuccess,
    getPostsFailure,
    startGetComments,
    getCommentsSuccess,
    getCommentsFailure,
    setSearchTerm,
    setFilter,
    toggleActivePost,
    toggleComments
} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (term) => async (dispatch) => {
    try {
        dispatch(startGetPosts(term));
        const posts = await search(term);
        dispatch(getPostsSuccess(posts));
    } catch (error) {
        dispatch(getPostsFailure());
    }  
};

export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(startGetComments(index));
        const comments = await getComments(permalink);
        dispatch(getCommentsSuccess({ index, comments }));
    } catch (error) {
        console.log(error);
        dispatch(getCommentsFailure(index));
    }
};