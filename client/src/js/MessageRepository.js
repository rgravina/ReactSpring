class MessageRepository {
    constructor(fetch) {
        this.fetch = fetch;
    }

    getMessage() {
        return this.fetch('/api/message')
            .then(response => response.json())
            .then(json => json.message)
    }
}

export default MessageRepository;