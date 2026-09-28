 function id(l){
    return document.getElementById(l)
}
function query(l){
    return document.querySelector(l)
}

function queryAll(l){
    return document.querySelectorAll(l)
}



const gateway_data= {
    current: "TaskManager", 
    options:["TaskManager","FestivalWeb", "Clothes", "Calculator","Weather app", "Finance app v1"],
    links: ["task-manager","festival-sec","Clothes-shop", "Calculator-app", "Weather-app", "Finance-no-db"]
}

function handleGatewayChange(event){
    const selectedGateway = event.target.value

    let num = 0; 
    queryAll(".mega-link option").forEach(element => {
        if(element.value === selectedGateway){
            gateway_data.current = gateway_data.options[num]
        }
        num++ 
    });
    //console.log(selectedGateway)
    //console.log(gateway_data)
    
}

function visitPage(e){
    const area = gateway_data.options.indexOf(gateway_data.current)
    e.target.href = `#${gateway_data.links[area]}`;
    return; 
}

query(".mega-link a").addEventListener("click", visitPage)
query(".mega-link select").addEventListener("change", handleGatewayChange)

const sideToggle = query(".open-side")
const sideNav = query(".side-nav")
const sideNavShell = query(".side-nav-shell")

sideToggle.addEventListener("click", () => {
    const isOpen = sideNavShell.classList.toggle("is-open")
    sideToggle.setAttribute("aria-expanded", isOpen)
    sideToggle.setAttribute("aria-label", isOpen ? "Close page navigation" : "Open page navigation")
})

queryAll(".side-nav a").forEach(link => {
    link.addEventListener("click", () => {
        sideNavShell.classList.remove("is-open")
        sideToggle.setAttribute("aria-expanded", "false")
        sideToggle.setAttribute("aria-label", "Open page navigation")
    })
})





function getFileName(src, folderName) {
    const path = src.replace(/\\/g, "/").split(/[?#]/)[0];
    const folder = folderName.replace(/^\/+|\/+$/g, "");
    const folderIndex = path.lastIndexOf(`/${folder}/`);

    if (folderIndex !== -1) {
        return path.slice(folderIndex + folder.length + 2);
    }

    return path.split("/").pop();
}

function removeEvents(el,func){
    const events = ["click", "doudleclick", "transitionend", "animationend", "submit","checked"]
    events.map(e=>{el.removeEventListener(e,func)})
}

function isDOMElement(value) {
  return value !== null && value instanceof Element;
}

function removeDOM(el){

    if (isDOMElement(el)){
        try{
            el.remove()
            removeEvents(el,removeDOM)
            return; 

        }
        catch(e){1+1}
        return; 
    }
    this.remove();
    removeEvents(this,removeDOM)
    return; 
}




// data handling the projects section of the pages


const TASK_MANAGER = {
    id:"task-manager",
    title: "Task Manager website", 
    github_link:"https://github.com/ceejaystokes09-stack/task-manager-",
    asset_folder: "assets/Task-manager/",
    video_link:"website-showcase.mp4" ,
    title_options : ["Open task UI - dark theme", "Open task UI - light theme", "Open screen - light theme"],
    image_options:["assets/Task-manager/open-tasks-darkTheme.png", "assets/Task-manager/open-tasks-lightTheme.png", "assets/Task-manager/open.png"],
    alt:["Website tasks dark theme", "Websites tasks light theme", "Website open"],
}
const FESTIVAL = {
    id:"festival-sec", 
    title: "Festival website", 
    github_link:"https://github.com/ceejaystokes09-stack/Festival-website",
    asset_folder: "assets/Festival/" ,
    video_link: "Festival-open-clip.mp4" ,
    title_options : ["Home page", "Booking festival tickets"],
    image_options: ["assets/Festival/Home-page.png", "assets/Festival/Payment-details.png"], 
    alt: ["Website home","Website payment area"],
}

const CLOTHES_STORE={
    id:"Clothes-shop",
    title: "Clothes Shop website",
    github_link:"https://github.com/ceejaystokes09-stack/clothes-store", 
    asset_folder: "assets/Clothes-store/",
    video_link: "clip.mp4",
    title_options:["Home page - Light", "Products page - light", "Create account page","Login page","Home page - dark", "Products page - dark" ],
    image_options:["assets/Clothes-store/home-light.png","assets/Clothes-store/products-page-light.png","assets/Clothes-store/create-acc-page.png","assets/Clothes-store/login-page.png","assets/Clothes-store/home-dark.png", "assets/Clothes-store/products-page-dark.png"],
    alt:["Website home light theme", "Websites product page light theme", "Website create acc page", "Website login page", "Website home dark theme", "Websites products dark theme"],
}

const CALCULATOR = {
    id:"Calculator-app",
    title: "Basic Calculator Website",
    github_link:"https://github.com/ceejaystokes09-stack/calculator.github.io",
    asset_folder:"assets/Calculator/",
    video_link:"clip.mp4",
    title_options:["Calculator Open"],
    image_options:["assets/Calculator/open.png"],
    alt:["Calculator open"],
    website:"https://ceejaystokes09-stack.github.io/calculator.github.io/",
}

const WEATHER = {
        id:"Weather-app",
        title: "Weather App - API Testing",
        github_link: "https://github.com/ceejaystokes09-stack/weatherApp.github.io" ,
        asset_folder: "assets/Weather/",
        video_link: "clip.mp4",
        title_options: ["Weather App - Open Page", "Weather App - Weather Navigation"],
        image_options: ["assets/Weather/Open-Ui.png", "assets/Weather/Open-Ui-weather-Nav.png"],
        alt:["Open UI", "Weather Navigation"],
        website:"https://ceejaystokes09-stack.github.io/weatherApp.github.io/" ,
}

const FINANCE_NO_DB = {
        id:"Finance-no-db",
        title: "Budgeting app - No DataBase ",
        github_link: "https://github.com/ceejaystokes09-stack/BudgetApp.github.io" ,
        asset_folder: "assets/finance/",
        video_link: "clip.mp4",
        title_options: ["Home page - Light Theme", "Home page - Dark Theme", "Group display - Light Theme", "Group display - Dark Theme", "New task - Light Theme", "New task - Dark theme", "Groups in-side a Group - Light Theme", "Groups in-side a Group - Dark Theme"],
        image_options: ["assets/finance/Home-task-light.png","assets/finance/Home-task-dark.png", "assets/finance/Home-group-light.png" , "assets/finance/Home-group-dark.png", "assets/finance/New-task-light.png", "assets/finance/New-task-dark.png", "assets/finance/Group-in-Group-showcase-light.png", "assets/finance/Group-in-Group-showcase.png"],
        alt:["Home page light", "Home page dark", "Groups light", "Groups dark", "new task light", "new task dark", "group in group light", "group in group dark" ],
        website:"https://ceejaystokes09-stack.github.io/BudgetApp.github.io/" ,
}

const projects = [TASK_MANAGER,FESTIVAL, CLOTHES_STORE, CALCULATOR, WEATHER, FINANCE_NO_DB]

function changeImage(change, obj) {
    if (!obj) return;
    //console.log(obj)

    const images = queryAll(".images-conc img");
    const img = [...images].find(image => {
        const src = image.getAttribute("src").replace(/^\//, "");
        return obj.image_options.includes(src);
    });
    if (!img) return;

    const currentSrc = img.getAttribute("src").replace(/^\//, "");
    const currentIndex = obj.image_options.indexOf(currentSrc);

    const nextIndex = (currentIndex + change + obj.image_options.length) % obj.image_options.length;
    img.closest(".images-conc").querySelector("h4").textContent = obj.title_options[nextIndex];
    img.src = obj.image_options[nextIndex];
    img.alt = obj.alt[nextIndex];
}

function openFullscreenImage(obj, selectedIndex) {
    const viewer = document.createElement("div");
    viewer.className = "full-screen-img";
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-modal", "true");
    viewer.innerHTML = `
        <button class="fullscreen-close" type="button" aria-label="Close image viewer">&times;</button>
        <div class="fullscreen-zoom-controls" role="group" aria-label="Zoom controls">
            <button class="zoom-out" type="button" aria-label="Zoom out">&minus;</button>
            <button class="zoom-reset" type="button" aria-label="Reset zoom">100%</button>
            <button class="zoom-in" type="button" aria-label="Zoom in">&plus;</button>
        </div>
        <button class="fullscreen-prev" type="button" aria-label="Previous image">&#10094;</button>
        <div class="fullscreen-content">
            <img class="fullscreen-image" alt="" draggable="false">
            <div class="fullscreen-thumbnails" role="list"></div>
        </div>
        <button class="fullscreen-next" type="button" aria-label="Next image">&#10095;</button>
    `;

    const image = viewer.querySelector(".fullscreen-image");
    const thumbnails = viewer.querySelector(".fullscreen-thumbnails");
    let currentIndex = selectedIndex;
    let zoomLevel = 1;
    let panX = 0;
    let panY = 0;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let panStartX = 0;
    let panStartY = 0;

    obj.image_options.forEach((src, index) => {
        const thumbnail = document.createElement("button");
        thumbnail.className = "fullscreen-thumbnail";
        thumbnail.type = "button";
        thumbnail.setAttribute("aria-label", `View ${obj.title_options[index]}`);
        thumbnail.innerHTML = `<img src="${src}" alt="">`;
        thumbnail.addEventListener("click", () => {
            currentIndex = index;
            updateViewer();
        });
        thumbnails.appendChild(thumbnail);
    });

    function renderTransform() {
        image.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;
    }

    function updateViewer() {
        image.src = obj.image_options[currentIndex];
        image.alt = obj.alt[currentIndex];
        renderTransform();
        viewer.querySelector(".zoom-reset").textContent = `${Math.round(zoomLevel * 100)}%`;
        viewer.querySelectorAll(".fullscreen-thumbnail").forEach((thumbnail, index) => {
            thumbnail.classList.toggle("is-selected", index === currentIndex);
        });
    }

    function setZoom(nextZoom) {
        zoomLevel = Math.min(3, Math.max(1, nextZoom));
        if (zoomLevel === 1) {
            panX = 0;
            panY = 0;
        }
        updateViewer();
    }

    function startPan(event) {
        if (zoomLevel === 1 || (event.pointerType === "mouse" && event.button !== 0)) return;
        event.preventDefault();
        pointerStartX = event.clientX;
        pointerStartY = event.clientY;
        panStartX = panX;
        panStartY = panY;
        image.setPointerCapture(event.pointerId);
        image.classList.add("is-panning");
    }

    function movePan(event) {
        if (!image.hasPointerCapture(event.pointerId)) return;
        panX = panStartX + event.clientX - pointerStartX;
        panY = panStartY + event.clientY - pointerStartY;
        renderTransform();
    }

    function endPan(event) {
        if (image.hasPointerCapture(event.pointerId)) {
            image.releasePointerCapture(event.pointerId);
        }
        image.classList.remove("is-panning");
    }

    function closeViewer() {
        document.removeEventListener("keydown", handleKeydown);
        document.body.classList.remove("fullscreen-open");
        viewer.remove();
    }

    function handleKeydown(event) {
        if (event.key === "Escape") closeViewer();
        if (event.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + obj.image_options.length) % obj.image_options.length;
            updateViewer();
        }
        if (event.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % obj.image_options.length;
            updateViewer();
        }
        if (event.key === "+" || event.key === "=") setZoom(zoomLevel + 0.25);
        if (event.key === "-" || event.key === "_") setZoom(zoomLevel - 0.25);
        if (event.key === "0") setZoom(1);
    }

    viewer.querySelector(".fullscreen-close").addEventListener("click", closeViewer);
    viewer.querySelector(".fullscreen-prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + obj.image_options.length) % obj.image_options.length;
        updateViewer();
    });
    viewer.querySelector(".fullscreen-next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % obj.image_options.length;
        updateViewer();
    });
    viewer.querySelector(".zoom-in").addEventListener("click", () => setZoom(zoomLevel + 0.25));
    viewer.querySelector(".zoom-out").addEventListener("click", () => setZoom(zoomLevel - 0.25));
    viewer.querySelector(".zoom-reset").addEventListener("click", () => setZoom(1));
    image.addEventListener("wheel", event => {
        event.preventDefault();
        setZoom(zoomLevel + (event.deltaY < 0 ? 0.25 : -0.25));
    }, { passive: false });
    image.addEventListener("pointerdown", startPan);
    image.addEventListener("pointermove", movePan);
    image.addEventListener("pointerup", endPan);
    image.addEventListener("pointercancel", endPan);
    viewer.addEventListener("click", event => {
        if (event.target === viewer) closeViewer();
    });
    document.addEventListener("keydown", handleKeydown);
    document.body.appendChild(viewer);
    document.body.classList.add("fullscreen-open");
    updateViewer();
}

projects.forEach(obj=>{
    createProjects_UI(obj)
})

function createProjects_UI(obj){
    const div = document.createElement("div")
    let para ="A video showing how the website works and function the key functionality of the website. The website isnt uploaded live, so if u want to see the website personally pls download the code or watch the video to show the website in use." ; 
    if (Object.hasOwn(obj,"website")){
        para = `A video showing how the website works and function the key functionality of the website. The website is live, so if u want to see the website personally pls download the code or <a href=${obj.website}>Click Here</a>.`
    }
    div.id = obj.id; 
    div.innerHTML = `
    <h3>${obj.title}</h3>
    <p>Want to see the <a href="${obj.github_link}" target="_blank" rel="noopener noreferrer">code</a>?</p>
    <div class="video-shell">
        <div class="video-conc box">
            <video class="project-video" controls preload="metadata" aria-label="Task Manager website showcase">
                <source src="${obj.asset_folder + obj.video_link}" type="video/mp4">
            </video>
            <p>${para}</p>
        </div>
    </div>
    
    <div class="images-conc box">
        
        <h4>${obj.title_options[0]}</h4>
        <div class="image-conc-options">
            <button class="image-left" type="button" aria-label="Previous image"><i class="fa-solid fa-circle-chevron-left"></i></button>
            <img src="${obj.image_options[0]}" alt="${obj.alt[0]}">
            <button class="image-right" type="button" aria-label="Next image"><i class="fa-solid fa-circle-chevron-right"></i></button>
        </div>
        
    </div>
    `
    id("projects").appendChild(div)

    const image = div.querySelector(".images-conc img");
    div.querySelector(".image-left").addEventListener("click", () => changeImage(1, obj));
    div.querySelector(".image-right").addEventListener("click", () => changeImage(-1, obj));
    image.addEventListener("click", () => {
        const selectedIndex = obj.image_options.indexOf(image.getAttribute("src"));
        openFullscreenImage(obj, selectedIndex === -1 ? 0 : selectedIndex);
    });
}

/*

base html = 
<div id="task-manager">
    <h3>Task Manager website</h3>
    <p>Want to see the <a href="https://github.com/ceejaystokes09-stack/task-manager-">code</a>?</p>
    <div class="video-shell">
        <div class="video-conc box">
            <video class="project-video" controls preload="metadata" aria-label="Task Manager website showcase">
                <source src="assets/Task-manager/website-showcase.mp4" type="video/mp4">
            </video>
            <p>A video showing how the website works and function the key functionality of the website. The website isnt uploaded live, so if u want to see the website personally pls download the code or watch the video to show the website in use.</p>
        </div>
    </div>
    
    <div class="images-conc box">
        
        <h4>${obj.title_options[0]}</h4>
        <div class="image-conc-options">
            <button class="image-left" onclick="changeImage(1, TASK_MANAGER)"><i class="fa-solid fa-circle-chevron-left"></i></button>
            <img src="assets/Task-manager/open.png">
            <button class="image-right" onclick="changeImage(-1, TASK_MANAGER)"><i class="fa-solid fa-circle-chevron-right"></i></button>
        </div>
        
    </div>
    
</div>
*/


