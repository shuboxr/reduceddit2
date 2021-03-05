export const search = async (term) => {
    const response = await fetch(term === '' ? 'https://www.reddit.com/r/popular.json' : `https://www.reddit.com/search.json?q=${term}`);
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
            permalink: `https://www.reddit.com${child.data.permalink}`,
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

    //visit https://cors-anywhere.herokuapp.com/corsdemo and enable demo CORS-proxy usage
    /*
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${permalink}.json`);
    const jsonResponse = await response.json();
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
    */
    //comment out this dummy variable below \/ \/ \/
    const comments = [{"author":"DefunctDoughnut","body":"Man, some people really are amazing. I would love to personally thank this one for giving such a wonderful gift.","permalink":"https://www.reddit.com/r/AskMen/comments/lv5fjo/contrary_to_popular_belief_about_guys_the_single/gpaa68f/","ups":1346,"created":1614785303,"id":"gpjj7z9"},
        {"author":"DefunctDoughnut","body":"Man, some people really are amazing. I would love to personally thank this one for giving such a wonderful gift.","permalink":"https://www.reddit.com/r/AskMen/comments/lv5fjo/contrary_to_popular_belief_about_guys_the_single/gpaa68f/","ups":1346,"created":1614785303,"id":"gpjjqz9"},
        {"author":"DefunctDoughnut","body":"Man, some people really are amazing. I would love to personally thank this one for giving such a wonderful gift.","permalink":"https://www.reddit.com/r/AskMen/comments/lv5fjo/contrary_to_popular_belief_about_guys_the_single/gpaa68f/","ups":1346,"created":1614785303,"id":"gpqj7z9"},
        {"author":"DefunctDoughnut","body":"Man, some people really are amazing. I would love to personally thank this one for giving such a wonderful gift.","permalink":"https://www.reddit.com/r/AskMen/comments/lv5fjo/contrary_to_popular_belief_about_guys_the_single/gpaa68f/","ups":1346,"created":1614785303,"id":"gpjjez9"},
        {"author":"DefunctDoughnut","body":"Man, some people really are amazing. I would love to personally thank this one for giving such a wonderful gift.","permalink":"https://www.reddit.com/r/AskMen/comments/lv5fjo/contrary_to_popular_belief_about_guys_the_single/gpaa68f/","ups":1346,"created":1614785303,"id":"gpjjaz9"},
        {"author":"DefunctDoughnut","body":"Man, some people really are amazing. I would love to personally thank this one for giving such a wonderful gift.","permalink":"https://www.reddit.com/r/AskMen/comments/lv5fjo/contrary_to_popular_belief_about_guys_the_single/gpaa68f/","ups":1346,"created":1614785303,"id":"ggjj7z9"},
        {"author":"DefunctDoughnut","body":"Man, some people really are amazing. I would love to personally thank this one for giving such a wonderful gift.","permalink":"https://www.reddit.com/r/AskMen/comments/lv5fjo/contrary_to_popular_belief_about_guys_the_single/gpaa68f/","ups":1346,"created":1614785303,"id":"gkjj7z9"},
        {"author":"DefunctDoughnut","body":"Man, some people really are amazing. I would love to personally thank this one for giving such a wonderful gift.","permalink":"https://www.reddit.com/r/AskMen/comments/lv5fjo/contrary_to_popular_belief_about_guys_the_single/gpaa68f/","ups":1346,"created":1614785303,"id":"gljj7z9"},
        {"author":"DefunctDoughnut","body":"Man, some people really are amazing. I would love to personally thank this one for giving such a wonderful gift.","permalink":"https://www.reddit.com/r/AskMen/comments/lv5fjo/contrary_to_popular_belief_about_guys_the_single/gpaa68f/","ups":1346,"created":1614785303,"id":"gbjj7z9"}]
    //dummy variable /\ /\ /\
        return comments;
}