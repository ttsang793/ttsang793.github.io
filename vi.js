const codeProjects = [
  {
    code: "mini_textbook",
    name: "Website nhà sách mini",
    year: "Hiện tại",
    technology: ["react", "tailwind", ".NET"],
    description: "Sử dụng kiến trúc Onion ở backend, cùng với giao diện được thiết kế từ thư viện Tailwind.",
    github: "https://www.github.com/ttsang793/MiniTextbook"
  },
  {
    code: "active_together",
    name: "Website cửa hàng thể thao",
    year: 2024,
    technology: ["react", "bootstrap", ".NET"],
    description: "Thực hiện trong môn Công nghệ .NET, website cho phép bạn mua và bán đồ thể thao.",
    github: "https://www.github.com/ttsang793/ActiveTogetherStore"
  },
  {
    code: "turmeric",
    name: "Website cửa hàng mỹ phẩm",
    year: 2023,
    technology: ["bootstrap"],
    description: "Thực hiện trong môn Lập trình web và ứng dụng, website cho phép bạn mua và bán cửa hàng mỹ phẩm.",
    github: "https://www.github.com/ttsang793/Turmeric"
  },
  {
    code: "launcher",
    name: "Phần mềm Launcher",
    year: 2022,
    technology: ["csharp"],
    description: "Phần mềm này cho phép bạn gom các ứng dụng, file và thư mục vào một launcher duy nhất. Hỗ trợ hệ điều hành Windows 7 trở lên.",
    github: "https://www.github.com/ttsang793/AppLauncher"
  }
];

function renderTech(tech) {
  let techHTML = "";
  tech.forEach(t => techHTML += `<img src="./images/${t}.svg" alt=${t} class="inline me-2" />`);
  return techHTML;
}

function renderCodeProjects() {
  let codeHTML = `
    <h2 class="border-b-2 border-b-[#1964AA] text-4xl font-bold mb-3 pb-1">
      <i class="ph ph-code"></i> DỰ ÁN CODE
    </h2>
  `;
  codeProjects.forEach(c => {
    codeHTML += `
      <div class="flex flex-col md:flex-row gap-6 my-7">
        <img src="./images/${c.code}.png" alt=${c.code} class="md:h-45 lg:h-60 rounded-[20px] shadow">
        <div class="text-center md:text-left">
          <h3 class="font-medium text-3xl mb-1 md:mb-2">${c.name}</h3>
          <div class="text-2xl mb-1 md:mb-4">
            ${c.year} | ${renderTech(c.technology)}
          </div>

          <div class="text-lg mb-7 text-center md:text-justify italic">${c.description}</div>

          <a href=${c.github} class="text-xl px-4 py-2 rounded-xl bg-[#1964AA] text-[#E8F2FF] hover:bg-[#4683BB] duration-150">
            <i class="ph-fill ph-github-logo"></i> GitHub
          </a>
        </div>
      </div>
    `
  });

  document.getElementById("code-project").innerHTML = codeHTML;
}

renderCodeProjects();