import{_ as l}from"./bujo-syntax-highlighting-colored-entries.f6b01d40.js";import{_ as d}from"./bujo-syntax-highlighting-time-tracking.9bedd8da.js";import{_ as c}from"./bujo-syntax-highlighting-time-blocking.0a80a129.js";import{_ as p,r as i,o as h,c as u,a as s,b as t,w as r,d as e,e as a}from"./app.1d88d0c2.js";var m="/images/features/bujo-syntax-highlighting-transparent-notation.png",g="/images/features/bujo-syntax-highlighting-modifiers.png",v="/images/features/bujo-syntax-highlighting-modifier-placement.png",k="/images/features/bujo-syntax-highlighting-multiple-entries-per-line.png",_="/images/features/bujo-syntax-highlighting-entries-with-wiki-link.png",b="/images/features/bujo-syntax-highlighting-multi-colored-grids.png",f="/images/features/bujo-syntax-highlighting-gray-colored-grids.png",w="/images/features/bujo-syntax-highlighting-notation-override.png";const x={},y=s("h1",{id:"syntax-highlighting",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#syntax-highlighting","aria-hidden":"true"},"#"),e(" Syntax Highlighting")],-1),B=e("When enabled, "),q=s("strong",null,"BuJo",-1),J=e(" parses the text written in Markdown files for specific "),T=s("code",null,"regex",-1),C=e(" patterns. These patterns are exposed as "),R={href:"https://macromates.com/manual/en/language_grammars",target:"_blank",rel:"noopener noreferrer"},D=e("TextMate"),j=e(" scopes to form a language grammar that can be used for syntax highlighting. At its core, "),S=s("strong",null,"BuJo",-1),z=e(" uses the VS Code API for injecting a language grammar (i.e., see "),M={href:"https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide",target:"_blank",rel:"noopener noreferrer"},F=e("VS Code documentation"),V=e(" for more details). This section of the guide provides information about the anatomy of a "),H=s("strong",null,"BuJo",-1),N=e(" entry, as well as other components that are supported for syntax highlighting."),W=a(`<h2 id="bujo-entries" tabindex="-1"><a class="header-anchor" href="#bujo-entries" aria-hidden="true">#</a> BuJo Entries</h2><p>For each Bullet Journal entry, you can highlight four different tokens. Take, for example, the Bullet Journal entry below that constitutes a completed task:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [x] Write BuJo readme file.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="notation" tabindex="-1"><a class="header-anchor" href="#notation" aria-hidden="true">#</a> Notation</h3><p><strong>BuJo</strong> uses the <strong><em>notation</em></strong> <code>[</code> <code>]</code> to indicate that the text that follows is a Bullet Journal entry. The <code>x</code> in <code>[x]</code> represents the <strong><em>symbol</em></strong> that describes the type of Bullet Journal entry. The <strong><em>text</em></strong> that follows (i.e., <code>Write BuJo readme file.</code>) represents the entry&#39;s content.</p><p>Aside from the <em>notation</em>, <em>symbol</em>, and <em>text</em>, you may also use a <strong><em>modifier</em></strong>. For example, you can use the <code>!</code> modifier after <code>[x]</code> to indicate a sense of priority:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>[x] ! Write BuJo readme file.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="symbols" tabindex="-1"><a class="header-anchor" href="#symbols" aria-hidden="true">#</a> Symbols</h3><p>Below is a list with the supported Bullet Journal symbols (i.e., more can be added upon request):</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] Represents a task.
<span class="token list punctuation">-</span> [x] Represents a completed task.
<span class="token list punctuation">-</span> [&gt;] Represents a task migrated forward.
<span class="token list punctuation">-</span> [&lt;] Represents a task migrated backward.
<span class="token list punctuation">-</span> [/] Represents a task in progress.
<span class="token list punctuation">-</span> [-] Represents a dropped task.
<span class="token list punctuation">-</span> [o] Represents an event.
<span class="token list punctuation">-</span> Represents a note. Nothing special about it.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With the default colors and the <strong>Default Dark+</strong> theme, the entries above are highlighted as follows:</p><div class="showcase-image"><img src="`+l+'" alt="Default highlighting for Bullet Journal symbols" width="400"></div><p>The notation brackets <code>[</code> and <code>]</code> can be colored such that they are not visible, but will still remain present in the editor (e.g., <code>[x]</code>). This can be useful if one wants to make the notation brackets transparent to keep the entry clean and emphasize the content. For example:</p><div class="showcase-image"><img src="'+m+'" alt="Highlighting for Bullet Journal symbols with transparent notation" width="400"></div><h3 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers" aria-hidden="true">#</a> Modifiers</h3><p><strong>BuJo</strong> also supports three Bullet Journal modifiers:</p><ul><li><code>!</code> - may indicate priority, inspiration, etc.</li><li><code>?</code> - may indicate waiting for someone or something, unclear, etc.</li><li><code>*</code> - may indicate something special about the entry, etc.</li></ul><p>These modifiers can be combined with any of the supported Bullet Journal symbols. For example:</p><div class="showcase-image"><img src="'+g+`" alt="Default highlighting for Bullet Journal modifiers" width="400"></div><p><strong>BuJo</strong> can easily be extended upon request to support an arbitrary number of characters (i.e., including combinations of characters) as modifiers. <strong>BuJo</strong> provides flexibility for where a supported modifier can be placed. For example, all of the following are correctly identified and parsed as valid entries, as can be seen in the image below:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] ! Represents a task
<span class="token list punctuation">-</span> [ ]! Represents a task
<span class="token list punctuation">-</span> [ ] !Represents a task
<span class="token list punctuation">-</span> [ ]!Represents a task
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="showcase-image"><img src="`+v+`" alt="Modifier placement" width="230"></div><h3 id="complex-entries" tabindex="-1"><a class="header-anchor" href="#complex-entries" aria-hidden="true">#</a> Complex Entries</h3><p><strong>BuJo</strong> also provides syntax highlighting support for multiple entries on the same line separated by a pipe (i.e., <code>|</code>) character:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- [ ] Task one | [ ] ! Task two | [x] Task three
- [&lt;] Task one | [-] ! Task two | [&gt;] Task three
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="showcase-image"><img src="`+k+'" alt="Support for multiple entries per line" width="423"></div><div class="custom-container warning"><p class="custom-container-title">Experimental</p><p>The support for multiple <strong>BuJo</strong> entries on the line is <em>experimental</em> and may change in the future.</p></div><h3 id="metadata" tabindex="-1"><a class="header-anchor" href="#metadata" aria-hidden="true">#</a> Metadata</h3>',28),E=s("strong",null,"BuJo",-1),I=e(" entries may also contain inline "),A=s("em",null,"metadata",-1),L=e(" stored after the "),O=s("code",null,"|",-1),P=e(" character. For example, entries can contain wiki links or blockquote IDs (e.g., as used by "),$={href:"https://github.com/dendronhq/dendron",target:"_blank",rel:"noopener noreferrer"},U=e("Dendron"),G=e(" and "),K={href:"https://github.com/foambubble/foam",target:"_blank",rel:"noopener noreferrer"},Q=e("Foam"),X=e("):"),Y=a(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] Represents a task | [[wiki.link]]
<span class="token list punctuation">-</span> [ ] Represents a task ^dzywxd9fvg
<span class="token list punctuation">-</span> [ ] Represents a task | [[wiki.link]] ^dzywxd9fvg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The lines above will be parsed in such a way that the wiki link and the block quote IDs at the end of the line are omitted.</p><div class="showcase-image"><img src="`+_+'" alt="Highlighting for Bullet Journal entries with wiki links" width="460"></div><h2 id="markdown-tables" tabindex="-1"><a class="header-anchor" href="#markdown-tables" aria-hidden="true">#</a> Markdown Tables</h2><p><strong>BuJo</strong> also exposes scopes for targeting and highlighting grids in markdown tables (i.e., the <code>:---:</code>, <code>:---</code>, or <code>---:</code> for horizontal grids, and the <code>|</code> for vertical grids). A separate scope is also provided for highlighting the <code>:</code> in in horizontal grids. The following screenshot shows the tokens that can highlighted:</p><div class="showcase-image"><img src="'+b+'" alt="Highlighting for table grids" width="230"></div><p>With the default colors (i.e., and the <code>Default Dark+</code> theme) the table grid can be faded way to be less obtrusive:</p><div class="showcase-image"><img src="'+f+'" alt="Highlighting for table grids" width="230"></div><h2 id="time-tracking" tabindex="-1"><a class="header-anchor" href="#time-tracking" aria-hidden="true">#</a> Time Tracking</h2><p><strong>BuJo</strong> also provides support for highlighting tasks in markdown tables, as well as well as associated time records (i.e., <code>hh:mm-hh:mm</code>):</p><div class="showcase-image"><img src="'+d+'" alt="Highlighting for the time tracking table" width="600"></div>',11),Z=e("Note. See section "),ee=e("Time Tracking"),se=e(" for how to easily add entries to the time tracking table and track the time spent on tasks."),te=s("h2",{id:"time-blocking",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#time-blocking","aria-hidden":"true"},"#"),e(" Time Blocking")],-1),ne=e("Similarly, "),ae=s("strong",null,"BuJo",-1),oe=e(" it also supports time blocking syntax highlighting, based on the methodology discussed in "),ie={href:"https://www.goodreads.com/book/show/25744928-deep-work",target:"_blank",rel:"noopener noreferrer"},re=e("Newport (2016)"),le=e("."),de=s("div",{class:"showcase-image"},[s("img",{src:c,alt:"Highlighting for the time blocking table",width:"500"})],-1),ce=s("h2",{id:"custom-colors",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#custom-colors","aria-hidden":"true"},"#"),e(" Custom Colors")],-1),pe=s("strong",null,"BuJo",-1),he=e(" comes with default colors and styles for the "),ue={href:"https://macromates.com/manual/en/language_grammars",target:"_blank",rel:"noopener noreferrer"},me=e("TextMate"),ge=e(" scopes it exposes. These colors and styles are chosen to work well with the "),ve=s("strong",null,"Default Dark+",-1),ke=e(" theme. However, they can be customized via the "),_e=s("code",null,"editor.tokenColorCustomizations",-1),be=e(" setting in "),fe={href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"},we=e("VS Code"),xe=e("."),ye=a(`<p>Upon typing <code>&quot;editor.tokenColorCustomizations&quot;</code> you can trigger VS Code&#39;s intellisense which will automatically pre-fill the <code>textMateRules</code> array with the default colors provided by <strong>BuJo</strong>.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// Other VS Code settings.</span>

    <span class="token property">&quot;editor.tokenColorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Override only for the \`Default Dark+\` theme.</span>
        <span class="token property">&quot;[Default Dark+]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;textMateRules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token comment">// The scopes for which we want to provide custom colors.</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example, to colorize the notation brackets <code>[</code> and <code>]</code> for a task <code>[x]</code>, you can use:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// Other VS Code settings.</span>

    <span class="token property">&quot;editor.tokenColorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Override only for the \`Default Dark+\` theme.</span>
        <span class="token property">&quot;[*Dark*]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;textMateRules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bujo.task.completed.notation&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FFB6C1&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold underline&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the theme <code>Default Dark+</code> is used, the above override will result in a completed task with bolded, underlined, and pink notation brackets:</p><div class="showcase-image"><img src="`+w+'" alt="Custom highlighting with pink notation for a completed task" width="400"></div>',6),Be={class:"custom-container tip"},qe=s("p",{class:"custom-container-title"},"TIP",-1),Je=e("Check out the "),Te=e("TextMate Scopes Reference"),Ce=e(" for the complete list of tokens that can be targeted and colorized.");function Re(De,je){const n=i("ExternalLinkIcon"),o=i("RouterLink");return h(),u("div",null,[y,s("p",null,[B,q,J,T,C,s("a",R,[D,t(n)]),j,S,z,s("a",M,[F,t(n)]),V,H,N]),W,s("p",null,[E,I,A,L,O,P,s("a",$,[U,t(n)]),G,s("a",K,[Q,t(n)]),X]),Y,s("p",null,[s("em",null,[Z,t(o,{to:"/guide/time-tracking.html"},{default:r(()=>[ee]),_:1}),se])]),te,s("p",null,[ne,ae,oe,s("a",ie,[re,t(n)]),le]),de,ce,s("p",null,[pe,he,s("a",ue,[me,t(n)]),ge,ve,ke,_e,be,s("a",fe,[we,t(n)]),xe]),ye,s("div",Be,[qe,s("p",null,[Je,t(o,{to:"/reference/scopes.html"},{default:r(()=>[Te]),_:1}),Ce])])])}var Ve=p(x,[["render",Re],["__file","syntax-highlighting.html.vue"]]);export{Ve as default};
