---
title: What Is URL Encoding? Fixing Broken Links
date: 2026-04-27
category: 생산성도구
excerpt: Strange characters like %20 showing up in a URL, or Korean addresses breaking when shared. A simple explanation of what URL encoding is and how to fix it.
thumbnail: /blog/covers/url-encoder.png
imageAlt: What URL encoding is and how to fix broken addresses
tags: [URL encoding, URL decoding, broken URL, developer tools]
relatedServices: [tools]
---

You've probably copied a link and found the address **full of strange characters** like `%20` or `%EC%95%88`. Or you've shared a URL with Korean characters via a messenger and had it **break and fail to open.** Both of these are related to **URL encoding.**

URL encoding isn't a difficult concept — it's simply **a convention for converting characters that can't be used in a web address into a safe format.** This guide covers exactly what URL encoding is, why `%` characters appear, real conversion examples, how to decode a broken address, and common mistakes like double-encoding.

## What Is URL Encoding?

Web addresses (URLs) have **a defined set of allowed characters.** Only English letters, numbers, and a few symbols (`-`, `_`, `.`, `~`) work reliably — **spaces, Korean characters, and special characters cannot be used as-is.** URL encoding (percent encoding) converts these characters into a safe format.

The principle is simple: characters that can't be used are converted to **`%` + a hexadecimal code.** That's why encoded URLs are full of `%` signs.

## Before / After Encoding — Real Examples

```text
Space          →  %20
Korean "안"    →  %EC%95%88   (3 bytes in UTF-8)
&              →  %26
?              →  %3F
Search "맛집"  →  %EB%A7%9B%EC%A7%91
```

For example, `armes.co.kr/검색?q=맛집 추천` becomes:

```text
armes.co.kr/%EA%B2%80%EC%83%89?q=%EB%A7%9B%EC%A7%91%20%EC%B6%94%EC%B2%9C
```

It looks strange, but it's a convention that ensures the address is delivered intact in any environment.

## Encoding vs. Decoding

| Type | Direction | When Used |
| --- | --- | --- |
| Encoding | Human-readable → `%` format | When creating or sharing a URL |
| Decoding | `%` format → original | When you need to read a `%`-heavy URL |

## When You Need It — Real-World Use Cases

| Situation | Reason |
| --- | --- |
| Sharing links | Sending URLs with Korean/spaces via messenger or email without breaking |
| Search / parameter handling | Embedding search terms in a URL (`?q=`) |
| API requests | Including values (Korean, symbols) in request URLs |
| Ad / traffic analysis | Embedding campaign names in `utm_` parameters |

## ⚠️ The Most Common Mistake — Double Encoding

Encoding an address that's **already been encoded** turns `%` into `%25`, making it even more broken. This is the cause of "I definitely encoded it, but it got worse."

```text
Original         :  안
Encoded once     :  %EC%95%88     (correct)
Encoded twice    :  %25EC%2595%2588  (broken — % becomes %25)
```

> Rule: **Encode only once.** If an address already contains `%XX`, don't encode it again. When in doubt, decode it first to check the original.

## Good to Know

- **UTF-8 is the encoding standard:** A single Korean character typically becomes three `%XX` chunks. Decoding must also use the same standard to avoid corruption.
- **`+` and `%20`:** Spaces are usually represented as `%20`, but in some form submissions they appear as `+`. Both mean a space.
- **Browsers handle it automatically:** Modern browsers auto-encode Korean characters in the address bar, but when building URLs in code or passing values externally, manual encoding is the safer approach.

## Related Tools and Further Reading

Since this is similar to "converting data into a different format," these articles pair well with this one:

| Related Article | What It Covers |
| --- | --- |
| [Base64 Encoding & Decoding](/blog/base64-guide) | Packaging data as text |
| [How to Format JSON](/blog/json-format) | Expanding condensed data |
| [Developer Online Tool Collection](/blog/dev-tools) | Full dev utilities |
| [Online Text & Developer Tool Collection](/blog/online-dev-text-tools) | Text and conversion tools |

ARMES is also building [ARMES Tools](/projects/tools) — encoding tools you can use directly in the browser, no sign-up or installation needed.

## Conclusion

URL encoding is **a convention for converting characters that can't be used in a web address (spaces, Korean, special characters) into `%` + code format.** Decode a broken URL to see its original form, and encode any URL you want to share safely. **Just avoid encoding twice** and it's not complicated at all.

## Frequently Asked Questions (FAQ)

**Q. What does `%20` in a URL mean?**
It's the URL-encoded form of a space. Since spaces can't be used directly in URLs, they're represented as `%20`.

**Q. Why does a Korean character in a URL become something like `%EC%95%88`?**
A single Korean character is typically 3 bytes in UTF-8, and each byte is encoded as `%XX`, resulting in three chunks.

**Q. I encoded a URL and it got even more broken.**
You likely encoded a URL that was already encoded. `%` gets turned into `%25`, breaking it further. Decode it back to the original first, then encode just once.

**Q. When do I use decoding?**
When you want to read what a `%`-heavy address actually says. It's the reverse of encoding — it converts the address back into a human-readable form.

**Q. Are `+` and `%20` the same thing?**
Both represent a space, but in different contexts. In URL paths, `%20` is used; in some form submissions, `+` is used to represent a space.

**Q. Which characters need to be encoded?**
Spaces, Korean characters, `&`, `?`, `#`, `/`, and other special characters. English letters, numbers, and a few symbols (`-_.~`) can stay as-is.

**Q. If the browser handles it automatically, do I need to encode manually?**
In the address bar, yes — the browser handles it. But when building URLs in code or passing values externally, manual encoding is the safer approach.

**Q. Is it safe to paste sensitive values into an online encoding tool?**
Be cautious if the tool sends input to a server. For URLs containing tokens or personal information, use a tool that processes everything locally in the browser.
