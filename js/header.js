document.getElementsByTagName("header")[0].innerHTML = `
<nav>
  <div>
    <img src="/img/logo.png" alt="web-logo" class="head-logo">
    <i>Sang's page</i>
  </div>

  <div class="single-button" onclick="menuClick()">
    <img src="/img/menu.png" alt="web-logo" class="head-logo">
  </div>

  <div class="full-button">
    <a href="/"><button>Home</button></a>
    <a href="/about"><button>About</button></a>
    <a href="/portfolio"><button>Portfolio</button></a>
    <a href="/resources"><button>Resources</button></a>
  </div>
</nav>

<div class="button-menu" id="button-menu">
  <a href="/"><button>Home</button></a>
  <a href="/about"><button>About</button></a>
  <a href="/portfolio"><button>Portfolio</button></a>
  <a href="/resources"><button>Resources</button></a>
</div>
`

window.addEventListener("resize", () => {
  document.getElementById('button-menu').style.display = 'none';
  document.getElementById('background-menu').style.display = 'none';
  document.body.style.overflow = 'initial';
});

function menuClick() {
  console.log("Hello");
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

document.getElementsByTagName("footer")[0].innerHTML = `&copy; ${new Date().getYear() + 1900} by Tran Tuan Sang`;