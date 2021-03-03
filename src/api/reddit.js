
export const search = async (term) => {
    const response = await fetch(term === '' ? 'http://www.reddit.com/r/popular.json' : `http://www.reddit.com/search.json?q=${term}`);
    const jsonResponse = await response.json();
    const newPosts = await jsonResponse.data.children.map(child => {
        let img = '';
        if (child.data.is_reddit_media_domain && child.data.secure_media === null && !child.data.crosspost_parent_list) {
            img = child.data.url_overridden_by_dest
        } else {
            if (child.data.thumbnail !== 'default') {
                img = child.data.thumbnail;
            };
        }
        return {
            title: child.data.title,
            author: child.data.author,
            selftext: child.data.selftext.replace(/&amp;#x200B;/g, ' '),
            permalink: `https://reddit.com/r/${child.data.subreddit}/${child.data.id}`,
            thumbnail: img,
            ups: child.data.ups,
            subreddit: child.data.subreddit,
            created: child.data.created_utc,
            id: child.data.id,
            showingComments: false,
            loadingComments: false,
            error: false,
            comments: []
        };
    });
    return newPosts;
}

export const getComments = async (permalink) => {
    const response = await fetch(`${permalink}.json`);
    console.log("RESPONSE: " + response.keys());
    const jsonResponse = await response.json();
    console.log("JSON: " + jsonResponse);
    const comments = await jsonResponse[1].data.children.map(child => {
        return {
            author: child.data.author,
            body: child.data.body,
            permalink: `${permalink}/${child.data.id}`,
            ups: child.data.ups,
            created: child.data.created_utc,
            id: child.data.id
        };
    });
    return comments;
}