function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return [
                `Post: ${this.title}`,
                `Content: ${this.content}`
            ].join('\n');
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        };
        toString() {
            let result = [
                super.toString(),
                `Rating: ${this.likes - this.dislikes}`
            ];
            if (this.comments.length > 0) {
                result.push('Comments:');
                this.comments.forEach(c => result.push(' * ' + c))
            }
            return result.join('\n')
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this;
          
        };
        toString() {
            return [
                super.toString(),
                `Views: ${this.views}`
            ].join('\n');
        };
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}



let post = new Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());


// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!


