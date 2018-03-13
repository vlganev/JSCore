function solve() {
	class Post {
		constructor(title, content) {
			this.title = title;
			this.content = content;
		}
		
		toString() {
			return `Post: ${this.title}\nContent: ${this.content}\n`;
		}
	}
	
	class SocialMediaPost extends Post {
		constructor(title, content, postLikes, postDislikes) {
			super(title, content);
			this.postLikes = postLikes;
			this.postDislikes = postDislikes;
			this.comments = [];
		}
		
		addComment(comment) {
			this.comments.push(comment);
		}
		
		toString() {
			let result = super.toString();
			result += `Rating: ${this.postLikes - this.postDislikes}`;
			if (this.comments.length > 0) {
				result += `\nComments:\n`;
				for (let comment of this.comments) {
					result += ` * ${comment}\n`;
				}
			}
			return result.trim();
		}
	}
	
	class BlogPost extends Post {
		constructor(title, content, postViews) {
			super(title, content);
			this.postViews = postViews;
		}
		
		view() {
			this.postViews += 1;
			return this;
		}
		
		toString() {
			let result = super.toString();
			result += `Views: ${this.postViews}\n`;
			return result.trim();
		}
	}
	
	return {Post, SocialMediaPost, BlogPost};
}