const codeProjects = [
  {
    code: "mini_textbook",
    name: "Mini Bookstore",
    year: "Ongoing",
    technology: ["react", "tailwind", "dotnet"],
    description: "Using Onion architecture in backend, and UI has been designed using Tailwind.",
    github: "https://www.github.com/ttsang793/MiniTextbook"
  },
  {
    code: "active_together",
    name: "Sport Shop Website",
    year: 2024,
    technology: ["react", "bootstrap", "dotnet"],
    description: "Creating in .NET Technology, this website allows you to buy and sell sportwears, such as shirts, pants, shoes, accessories, etc.",
    github: "https://www.github.com/ttsang793/ActiveTogetherStore"
  },
  {
    code: "turmeric",
    name: "Cosmetics Store Website",
    year: 2023,
    technology: ["bootstrap"],
    description: "Creating in Web Development, this website allows you to buy and sell cosmetic items, such as lipsticks, masks, etc.",
    github: "https://www.github.com/ttsang793/Turmeric"
  },
  {
    code: "launcher",
    name: "Launcher",
    year: 2022,
    technology: ["csharp"],
    description: "This Launcher is an all-in-one software that allows you to link software, folders, and files. Launcher supports Windows 7 and newer.",
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
      <i class="ph ph-code"></i> CODE PROJECTS
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