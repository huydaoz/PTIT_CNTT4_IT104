class User {
  public id: number;
  public posts: Post[];
  public following: User[];

  constructor(id: number) {
    this.id = id;
    this.posts = [];
    this.following = [];
  }

  createPost(content: string): Post {
    const newPost = new Post(Date.now(), this.id, content);
    this.posts.push(newPost);
    return newPost;
  }

  comment(postId: number, commentContent: string, allPosts: Post[]): void {
    const post = allPosts.find((p) => p.id === postId);
    if (post) {
      const newComment = new PostComment(
        Math.random(),
        this.id,
        commentContent
      );
      post.addComment(newComment);
    }
  }

  follow(user: User): void {
    if (this.following.indexOf(user) === -1 && user !== this) {
      this.following.push(user);
    }
  }

  likePost(postId: number, allPosts: Post[]): void {
    const post = allPosts.find((p) => p.id === postId);
    if (post) {
      post.addLike(this.id);
    }
  }

  viewFeed(): Post[] {
    return this.following
      .reduce((allPosts, user) => allPosts.concat(user.posts), [] as Post[])
      .sort((a, b) => b.id - a.id);
  }
}

class Post {
  public id: number;
  public likes: number[];
  public comments: PostComment[];
  public userId: number;
  public content: string;

  constructor(id: number, userId: number, content: string) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.likes = [];
    this.comments = [];
  }

  addLike(userId: number): void {
    if (this.likes.indexOf(userId) === -1) {
      this.likes.push(userId);
    }
  }

  addComment(comment: PostComment): void {
    this.comments.push(comment);
  }
}

class PostComment {
  public id: number;
  public userId: number;
  public content: string;
  public replies: PostComment[];

  constructor(id: number, userId: number, content: string) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.replies = [];
  }

  addReply(reply: PostComment): void {
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
