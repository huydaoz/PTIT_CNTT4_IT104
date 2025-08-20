class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.following = [];
    }
    createPost(content) {
        const newPost = new Post(Date.now(), this.id, content);
        this.posts.push(newPost);
        return newPost;
    }
    comment(postId, commentContent, allPosts) {
        const post = allPosts.find((p) => p.id === postId);
        if (post) {
            const newComment = new PostComment(Math.random(), this.id, commentContent);
            post.addComment(newComment);
        }
    }
    follow(user) {
        if (this.following.indexOf(user) === -1 && user !== this) {
            this.following.push(user);
        }
    }
    likePost(postId, allPosts) {
        const post = allPosts.find((p) => p.id === postId);
        if (post) {
            post.addLike(this.id);
        }
    }
    viewFeed() {
        return this.following
            .reduce((allPosts, user) => allPosts.concat(user.posts), [])
            .sort((a, b) => b.id - a.id);
    }
}
class Post {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    addLike(userId) {
        if (this.likes.indexOf(userId) === -1) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class PostComment {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
const u1 = new User(1);
const u2 = new User(2);
u1.follow(u2);
const p1 = u2.createPost("Hello word");
u1.likePost(p1.id, [p1]);
u1.comment(p1.id, "hay", [p1]);
console.log(u1.viewFeed());
