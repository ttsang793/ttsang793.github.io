document.getElementsByTagName("header")[0].innerHTML = `
<nav>
  <div>
    <img src="/img/logo.png" alt="web-logo" class="head-logo">
    <i>ttsang793's page</i>
  </div>

  <div class="single-button">
    <img src="/img/menu.png" alt="web-logo" class="head-logo" onclick="menuClick()">
  </div>

  <div class="full-button">
    <a href="/porfolio"><button>Porfolio</button></a></button>
    <a href="/blog"><button>Blog</button></a></button>
    <a href="/resources"><button>Resources</button></a></button>
    <a href="/quick-access"><button>Quick Access</button></a></button>
  </div>
</nav>

<div class="button-menu" id="button-menu">
  <a href="/porfolio"><button>Porfolio</button></a></button>
  <a href="/blog"><button>Blog</button></a></button>
  <a href="/resources"><button>Resources</button></a></button>
  <a href="/quick-access"><button>Quick Access</button></a></button>
</div>
`

window.addEventListener("resize", () => {
  document.getElementById('button-menu').style.display = 'none';
  document.getElementById('background-menu').style.display = 'none';
  document.body.style.overflow = 'initial';
});

function menuClick() {
  if (document.getElementById('button-menu').style.display != 'initial') {
    document.getElementById('button-menu').style.display = 'initial';
    document.getElementById('background-menu').style.display = 'initial';
    document.body.style.overflow = 'hidden';
  }
  else {
    document.getElementById('button-menu').style.display = 'none';
    document.getElementById('background-menu').style.display = 'none';
    document.body.style.overflow = 'initial';
  }
}