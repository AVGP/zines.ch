---
title: Submit a zine
description: Made a zine? Submit it to zines.ch, the cozy library for Swiss zines and friends from everywhere.
---

# Submit a zine

Made a zine? We'd love to see it. We focus on Swiss zinemakers, but everyone is welcome to submit.

Fill in the form below. If it fits the library, we'll ask you to post us a copy so it can go on the shelf.

<form class="form" action="{{ site.submitFormEndpoint }}" method="post" enctype="multipart/form-data">
<input type="hidden" name="_subject" value="New zine submission">
<label>Your name <input name="name" autocomplete="name" required></label>
<label>Email <input type="email" name="email" autocomplete="email" required></label>
<label>Zine title <input name="title" required></label>
<label>Link to you or your work <input type="url" name="author_link" placeholder="https://"></label>
<label>Topic <input name="topic" placeholder="e.g. nature, music, comics" required></label>
<label>Material <input name="material" placeholder="e.g. riso on recycled paper, stapled" required></label>
<div class="form-row">
<label>Pages <input type="number" name="pages" min="1" inputmode="numeric" required></label>
<label>Size <input name="size" placeholder="A5, A6…" required></label>
</div>
<label>Description <textarea name="description" rows="5" required></textarea></label>
<label>Photo of the cover <input type="file" name="cover" accept="image/*" required></label>
<button type="submit" class="button">Send submission</button>
</form>
