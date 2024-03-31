"use strict";const Even={};Even.backToTop=function(){const e=$("#back-to-top");$(window).scroll(function(){$(window).scrollTop()>100?e.fadeIn(1e3):e.fadeOut(1e3)}),e.click(function(){$("body,html").animate({scrollTop:0})})},Even.mobileNavbar=function(){const n=$("#mobile-navbar"),t=$(".mobile-navbar-icon"),e=new Slideout({panel:document.getElementById("mobile-panel"),menu:document.getElementById("mobile-menu"),padding:180,tolerance:70});e.disableTouch(),t.click(function(){e.toggle()}),e.on("beforeopen",function(){n.addClass("fixed-open"),t.addClass("icon-click").removeClass("icon-out")}),e.on("beforeclose",function(){n.removeClass("fixed-open"),t.addClass("icon-out").removeClass("icon-click")}),$("#mobile-panel").on("touchend",function(){e.isOpen()&&t.click()})},Even._initToc=function(){const t=20,e=$(".post-toc"),s=$(".post-footer");if(e.length){const o=e.offset().top-t,i=s.offset().top-e.height()-t,n={start:{position:"absolute",top:o},process:{position:"fixed",top:t},end:{position:"absolute",top:i}};$(window).scroll(function(){const t=$(window).scrollTop();t<o?e.css(n.start):t>i?e.css(n.end):e.css(n.process)})}const o=30,n=$(".toc-link"),i=$(".headerlink"),a=$(".post-toc-content li"),r=$.map(i,function(e){return $(e).offset().top}),c=$.map(r,function(e){return e-o}),l=function(e,t){for(let n=0;n<e.length-1;n++)if(t>e[n]&&t<=e[n+1])return n;return t>e[e.length-1]?e.length-1:-1};$(window).scroll(function(){const t=$(window).scrollTop(),e=l(c,t);if($(n).removeClass("active"),$(a).removeClass("has-active"),e!==-1){$(n[e]).addClass("active");let t=n[e].parentNode;for(;t.tagName!=="NAV";)$(t).addClass("has-active"),t=t.parentNode.parentNode}})},Even.fancybox=function(){$.fancybox&&($(".post-content").each(function(){$(this).find("img").each(function(){$(this).wrap(`<a class="fancybox" href="${this.src}" data-fancybox="gallery" data-caption="${this.title}"></a>`)})}),$(".fancybox").fancybox({selector:".fancybox",protect:!0}))},Even.highlight=function(){const e=document.querySelectorAll("pre code");for(let s=0;s<e.length;s++){const n=e[s],i=n.parentElement,t=n.innerHTML.split(/\n/);t[t.length-1]===""&&t.pop();const a=t.length;let r="";for(let e=0;e<a;e++)r+=`<div class="line">${e+1}</div>`;let c="";for(let e=0;e<a;e++)c+=`<div class="line">${t[e]}</div>`;n.className+=" highlight";const o=document.createElement("figure");o.className=n.className,o.innerHTML=`<table><tbody><tr><td class="gutter"><pre>${r}</pre></td><td class="code"><pre>${c}</pre></td></tr></tbody></table>`,i.parentElement.replaceChild(o,i)}},Even.chroma=function(){const e=document.querySelectorAll(".highlight > .chroma");for(let t=0;t<e.length;t++){const n=e[t],s=n.querySelector("pre.chroma > code[data-lang]"),o=s?s.className:"";n.className+=" "+o}},Even.toc=function(){const e=document.getElementById("post-toc");if(e!==null){const t=document.getElementById("TableOfContents");t===null?e.parentNode.removeChild(e):(this._refactorToc(t),this._linkToc(),this._initToc())}},Even._refactorToc=function(e){const n=e.children[0];let t=n,s;for(;t.children.length===1&&(s=t.children[0].children[0]).tagName==="UL";)t=s;t!==n&&e.replaceChild(t,n)},Even._linkToc=function(){const e=document.querySelectorAll("#TableOfContents a:first-child");for(let t=0;t<e.length;t++)e[t].className+=" toc-link";for(let e=1;e<=6;e++){const t=document.querySelectorAll(".post-content>h"+e);for(let e=0;e<t.length;e++){const n=t[e];n.innerHTML=`<a href="#${n.id}" class="headerlink anchor"><i class="iconfont icon-link"></i></a>${n.innerHTML}`}}},Even.flowchart=function(){if(!window.flowchart)return;const e=document.querySelectorAll("pre code.language-flowchart, pre code.language-flow");for(let t=0;t<e.length;t++){if(!window.hljs&&t%2===0)continue;const n=e[t],o=window.hljs?n.parentElement:n.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement,s=document.createElement("div"),i=`js-flowchart-diagrams-${t}`;s.id=i,s.className="align-center",o.parentElement.replaceChild(s,o);const a=flowchart.parse(n.childNodes[0].nodeValue);a.drawSVG(i,window.flowchartDiagramsOptions?window.flowchartDiagramsOptions:{})}},Even.sequence=function(){if(!window.Diagram)return;const e=document.querySelectorAll("pre code.language-sequence");for(let t=0;t<e.length;t++){if(!window.hljs&&t%2===0)continue;const n=e[t],o=window.hljs?n.parentElement:n.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement,s=document.createElement("div"),i=`js-sequence-diagrams-${t}`;s.id=i,s.className="align-center",o.parentElement.replaceChild(s,o);const a=Diagram.parse(n.childNodes[0].nodeValue);a.drawSVG(i,window.sequenceDiagramsOptions?window.sequenceDiagramsOptions:{theme:"simple"})}},Even.responsiveTable=function(){const e=document.querySelectorAll(".post-content table:not(.lntable)");for(let t=0;t<e.length;t++){const n=e[t],s=document.createElement("div");s.className="table-wrapper",n.parentElement.replaceChild(s,n),s.appendChild(n)}},$(document).ready(function(){Even.backToTop(),Even.mobileNavbar(),Even.toc(),Even.fancybox()}),Even.responsiveTable(),Even.flowchart(),Even.sequence(),window.hljs?(hljs.initHighlighting(),Even.highlight()):Even.chroma()