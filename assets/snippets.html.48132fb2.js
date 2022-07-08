import{_ as a,o as n,c as s,e}from"./app.1d88d0c2.js";const t={},i=e(`<h1 id="snippets" tabindex="-1"><a class="header-anchor" href="#snippets" aria-hidden="true">#</a> Snippets</h1><p><strong>BuJo</strong> provides various snippets for everyday actions. Below you can find a short description and example output for the snippets available:</p><ul><li><p><code>task</code> to enter a task</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Enter</span> <span class="token attr-name">text</span> <span class="token attr-name">here</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>taskclip</code> to enter a task from clipboard</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Clipboard</span> <span class="token attr-name">pasted</span> <span class="token attr-name">here</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>scratch</code> to scratch a text selection</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token strike"><span class="token punctuation">~</span><span class="token content">Some text</span><span class="token punctuation">~</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>time</code> to enter the current time</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>10:38
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>date</code> to enter the current date</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>2022.04.24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>datetime</code> to enter the current date and time</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>2022.04.24 10:39
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>timetracktable</code> to enter a time tracking table</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">     Tracker </span><span class="token punctuation">|</span><span class="token table-header important"> Task             </span><span class="token punctuation">|</span><span class="token table-header important"> Backlog  </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">----------:</span> <span class="token punctuation">|</span> <span class="token punctuation">:---------------</span> <span class="token punctuation">|</span> <span class="token punctuation">:-------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> 00:00-00:00 </span><span class="token punctuation">|</span><span class="token table-data"> [ ] Example task </span><span class="token punctuation">|</span><span class="token table-data"> [[link]] </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data">             </span><span class="token punctuation">|</span><span class="token table-data">                  </span><span class="token punctuation">|</span><span class="token table-data">          </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>timetrackrow</code> to add an empty row to the time tracking table</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>|             |                  |          |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>timetracktask</code> to enter a task in the time tracking table</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>|             | [ ] <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Enter</span> <span class="token attr-name">here</span><span class="token punctuation">&gt;</span></span> |          |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>timetracktaskclip</code> to enter a task from clipboard in the time tracking table</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>|             | [ ] <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Clipboard</span><span class="token punctuation">&gt;</span></span>  |          |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>timeblocktable</code> to enter a time blocking table</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">        Time </span><span class="token punctuation">|</span><span class="token table-header important"> Block         </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">----------:</span> <span class="token punctuation">|</span> <span class="token punctuation">:------------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data">     (00:00) </span><span class="token punctuation">|</span><span class="token table-data"> (Revision #1) </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data">             </span><span class="token punctuation">|</span><span class="token table-data">               </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> 00:00-00:00 </span><span class="token punctuation">|</span><span class="token table-data"> Chunk (#1)    </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data">             </span><span class="token punctuation">|</span><span class="token table-data"> <span class="token list punctuation">-</span> Chunk note  </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data">             </span><span class="token punctuation">|</span><span class="token table-data">               </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>timeblockrow</code> to add an empty row to the time blocking table</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>|             |               |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>timeblockrev</code> to enter a revision row in the time blocking table</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>|     (10:53) | (Revision #1) |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>timeblockchunk</code> to enter a chunk row in the time blocking table</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>| 00:00-00:00 | <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Enter</span> <span class="token attr-name">here</span><span class="token punctuation">&gt;</span></span>  |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>timeblocknote</code> to enter a note row in the time blocking table</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>|             | - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Add</span> <span class="token attr-name">here</span><span class="token punctuation">&gt;</span></span>  |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The <em>Markdown All in One</em> extension provides a table auto-formatting via the <code>alt+shift+f</code> keybinding. This makes it easy to work with and align markdown tables with a simple keyboard shortcut. This functionality will soon be brought to <strong>BuJo</strong>.</p></div>`,4),l=[i];function o(p,c){return n(),s("div",null,l)}var r=a(t,[["render",o],["__file","snippets.html.vue"]]);export{r as default};