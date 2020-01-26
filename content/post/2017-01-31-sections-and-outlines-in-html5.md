+++
tags = ["programming", "synopsis"]
type = "post"
title = "Sections and outlines in HTML5"
date = "2017-01-31"
+++

Mozilla provides [by far the best HTML5 introduction guide](//developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) available on the net. Here I will outline tl;dr and provide example of «The Holy Grail» layout.

## Address
The address element represents the contact information for its nearest `article` or `body` element ancestor.

## Article
*"The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content."* ([source](https://www.w3.org/TR/html5/dom.html#element-dfn-categories)).

`Article`s should potentially have child headings (`h1-h6` element) and `section`ed content if necessary.

This is a semantically correct example with user submitted comments inside `article` elements wrapped in `section`,
{{< highlight html >}}
    <article itemscope itemtype="http://schema.org/BlogPosting">
     <header>
      <h1 itemprop="headline">The Very First Rule of Life</h1>
      <p><time itemprop="datePublished" datetime="2009-10-09">3 days ago</time></p>
      <link itemprop="url" href="?comments=0">
     </header>
     <p>If there's a microphone anywhere near you, assume it's hot and
     sending whatever you're saying to the world. Seriously.</p>
     <p>...</p>
     <footer>
      <a itemprop="discussionUrl" href="?comments=1">Show comments...</a>
     </footer>
     <section>
     <h1>Comments</h1>
     <article itemprop="comment" itemscope itemtype="http://schema.org/UserComments" id="c1">
      <link itemprop="url" href="#c1">
      <footer>
       <p>Posted by: <span itemprop="creator" itemscope itemtype="http://schema.org/Person">
        <span itemprop="name">George Washington</span>
       </span></p>
       <p><time itemprop="commentTime" datetime="2009-10-10">15 minutes ago</time></p>
      </footer>
      <p>Yeah! Especially when talking about your lobbyist friends!</p>
     </article>
     <article itemprop="comment" itemscope itemtype="http://schema.org/UserComments" id="c2">
      <link itemprop="url" href="#c2">
      <footer>
       <p>Posted by: <span itemprop="creator" itemscope itemtype="http://schema.org/Person">
        <span itemprop="name">George Hammond</span>
       </span></p>
       <p><time itemprop="commentTime" datetime="2009-10-10">5 minutes ago</time></p>
      </footer>
      <p>Hey, you have the same first name as me.</p>
     </article>
    </section>
    </article>
{{< /highlight >}}

but it can be as simple as

{{< highlight html >}}
    <article>
        <h1>Main outline</h1>
        <p>Lorem ipsum dolor sit amet</p>
    </article>
{{< /highlight >}}

## Aside
Put it simply, `aside` represents stuff related to content around it.

* `aside` inside an `article` is directly related to `article` content;
* `aside` outside of `article` but inside of `main` is directly related to `main` content, but not necessarily to `article`
* and so on

## h1-h6
*"These elements represent headings for their sections."* They should not be used as purely stylistic elements, but as a guides to its respective sections. Defining subheading before heading is considered a bad practice and should not be done.

## Footer
*"The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like."*. It can be a footer for an article or the whole document. Note that contact information may reside in `footer`, but must be contained inside `address` element.

## Header
*"The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element."* It usually contains section heading and other aids, but not necessarily. In case of absence of other semantic aids `header` can be omitted. But it is not `section`ing element and shouldn't be used as such.

## Div
Good old `div`isions are semantically inert elements. They describe nothing about content and serve purely as a hook for styling the document. There is nothing more to it.

## Main
*"The `main` element represents the main content section of the `body` of a document or application. The main content section consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application."* `Main` is not a sectioning element, but should always be only one and should never be  inside a `section` or an `article`.

## Nav
*"The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links."* `Nav` can be used twice - one for main navigation around the site and a second one for content itself.

## Section
`<section>` is used to define different independent parts of website content. It is defined as *"The section element represents a generic document or application section… The section element is not a generic container element. "*. Assistive technologies and web crawlers use this technology to make sense of the document. According to [w3 recommendation](//www.w3.org/TR/html5/sections.html) "*the theme of each `section` should be identified, typically by including a heading (`h1-h6` element) as a child of the section element.*"

More interesting stuff about section can be found in ["The Importance Of HTML5 Sectioning Elements" - The Smashing Magazine](//www.smashingmagazine.com/2013/01/the-importance-of-sections/)

## Notes on some other elements
* `<!DOCTYPE HTML>` - doesn't need more unnecessary complication;
* `<style>` and `<script>` do not need `type` attribute, since they all expect appropriate content anyway;
* `<meta type="robots" content="all">` is a shorthand for `index, follow`;

## The Holy Grail layout
{{< highlight html >}}
    <!DOCTYPE HTML>
    <html>
     <head>
        <title>Steve Hill's Home Page</title>
        <meta type="robots" content="all">
        <style>
            :root {
                font: italic small-caps normal 13px/150% Arial, Helvetica, sans-serif;
            }
        </style>
     </head>
     <body>
        <p>Hard Trance is My Life.</p>
        <header>
            <!-- this is a comment inside document's main header -->
            <h1>Best wesbsite in the unioverse</h1>
            <a href="/" title="Yet another company">
                <img src="logo-generic.svg" title="Yet another company" alt="Yet another company">
            </a>
        </header>
        <main>
            <section id="wrapper-main">
                <article>
                    <header>
                        <h1>Stuff</h1>
                        <p>Published: <time pubdate="pubdate">2009-10-09</time></p>
                    </header>

                    <section>
                        <h2>Smaller stuff</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                    </section>

                    <section>
                        <h2>Even smaller stuff</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                    </section>
                    <footer>
                        this article is licensed under WTFPLv2 license
                    </footer>
                    <section>
                        <h1>Comments</h1>
                        <article>
                            <footer>
                                Posted by Alexander
                            </footer>
                            <p>Do you want anything</p>
                        </article>
                        <article>
                            <footer>
                                Posted by Diogenes
                            </footer>
                            <p>Yes, don't block the sun!</p>
                        </article>
                    </section>
                </article>
            </section>
        </main>
        <foooter>
            <address>
                123 Basic street
            </address>
            <p>Content is licensed under Creative Commons 0</p>
        </footer>
     </body>
    </html>    
{{< /highlight >}}
