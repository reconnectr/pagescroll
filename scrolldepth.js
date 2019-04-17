<script type = "text/javascript" >
  /*This code works for firing a Facebook Custom Event "SCROLLED 50 PERCENT" when someone scrolls 50% of a web page */

function getScrollPercent(){var o=document.documentElement,r=document.body,e="scrollHeight",t=(o.scrollTop||r.scrollTop)/((o[e]||r[e])-o.clientHeight)*100;return Math.round(t)}var scrollFired=!1,props={pm_path:window.location.pathname};window.addEventListener("scroll",function(o){50<=getScrollPercent()&&!scrollFired&&(fbq("trackCustom","SCROLLED 50 PERCENT",props),scrollFired=!0)});
</script>
