class MailBox {
    constructor() {
		this.mailBox = [];
	}
	
	addMessage(subject, text) {
		let message = {
			subject,
			text
		}
		this.mailBox.push(message);
		return this;
	}
	
	get messageCount() {
		return this.mailBox.length;
	}
	
	deleteAllMessages() {
		this.mailBox = [];
	}
	
	findBySubject(substr) {
		return this.mailBox.filter(message => message.subject.includes(substr));
	}
	
	toString() {
		if(this.mailBox.length === 0) {
			return ' * (empty mailbox)';
		} else {
			let result;
			for (let message of this.mailBox) {
				result += ` * [${message.subject}] ${message.text}\n`;
			}
			return result.trim();
		}
	}
}
