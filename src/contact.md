---
title: Contact
description: Get in touch with zines.ch, whether it's about a zine swap, a visit or a question.
---

# Say hello

Questions, zine swaps, visit requests, or just want to chat about paper? Send us a note.

<form class="form" action="{{ site.contactFormEndpoint }}" method="post">
<input type="hidden" name="_subject" value="Message via zines.ch">
<label>Your name <input name="name" autocomplete="name" required></label>
<label>Email <input type="email" name="email" autocomplete="email" required></label>
<label>Message <textarea name="message" rows="6" required></textarea></label>
<button type="submit" class="button">Send message</button>
</form>
