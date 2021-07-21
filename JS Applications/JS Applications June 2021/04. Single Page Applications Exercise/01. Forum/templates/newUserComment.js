export default function () {
    return `
    <div class="answer-comment">
                <p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form id="createComment">
                        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                        <div>
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" id="username">
                        </div>
                        <button>Post</button>
                    </form>
                </div>
            </div>
    `
}