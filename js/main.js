// import { cmsData } from "./cms.js";

window.addEventListener("scroll", function (event) {
    const navigationBar = document.querySelector("#navbar");

    if (window.scrollY > 50) {
        navigationBar.classList.add("scrolled");
    } else {
        navigationBar.classList.remove("scrolled");
    }
});







const renderBannerContent = async () =>  {
    const bannerSection = document.querySelector('#bannerSection');

    const { headerSection = {} } = cmsData
    const { headerBgImg = '', bigText = '', smallText = '', applyBeforeText = '', applyBeforeDate = '' } = headerSection

    bannerSection.innerHTML = `        
        <img src="./assets/${headerBgImg}" alt="Banner" />

        <div class="banner-message-wrapper">
          <h1 class="big">${bigText}</h1>
          <h1 class="thin">${smallText}</h1>

          <div class="apply-here-w">
            <img src="./assets/icons/calendar-03.svg" alt="Calendar" class="calendar-icon">
            <div class="message-w">
              <p class="label">${applyBeforeText}</p>
              <p class="date">${applyBeforeDate}</p>
            </div>
            <button class="btn btn-primary">Apply here</button>
          </div>
        </div>
    `
}


const renderAbout = async () => {
    const aboutContainer = document.querySelector('#aboutSection');

    const { aboutSection = {} } = cmsData
    const { aboutTitle = '', aboutDescription = '' } = aboutSection

    aboutContainer.innerHTML = `
      <div class="divider-titles-wrapper">
        <h2 class="divider-title-header">
          ${aboutTitle}
        </h2>
        
        <div class="divider-content">
          <p>${aboutDescription}</p>
        </div>
      </div>
    `
}


const renderObjectives = async () => {
    const objectivesContainer = document.querySelector('#objectivesSection');

    const { objectivesSection = {} } = cmsData
    const { objectivesTitle = '', objectivesCards = [] } = objectivesSection

    let makeCards = ''

    objectivesCards.forEach(element => {
      const { iconImg = '', text = '' } = element

      makeCards += `
        <div class="objectives-card">
          <img src="./assets/icons/${iconImg}" alt="">
          ${text}
        </div>
      `
    });

    objectivesContainer.innerHTML = `
      <div class="objectives-wrapper">
        <div class="objectives-header-title">
          <h2>${objectivesTitle}</h2>
        </div>

        <div class="objectives-card-wrapper">
          ${makeCards}
        </div>
      </div>
    `
}


const renderEligibility = async () => {
    const eligibilityContainer = document.querySelector('#eligibilitySection');

    const { eligibilitySection = {} } = cmsData
    const { eligibilityBgImg = '', eligibilityTitle = '', eligibilityDescription = '', eligibilityCards = [] } = eligibilitySection

    // eligibilityContainer.style.backgroundImage = `url("../assets/${eligibilityBgImg}")`
    
    let makeCards = ''

    await eligibilityCards.forEach(item => {
        const { iconImg, boldText, thinText } = item
        
        makeCards += `
            <div class="eligibility-card">
              <img
                src="./assets/icons/${iconImg}"
                alt="Icon"
              />
              <p class="header"><strong>${boldText}</strong></p>
              <p>
                ${thinText}
              </p>
            </div>
        `
    });

    eligibilityContainer.innerHTML = `
        <img src="./assets/${eligibilityBgImg}" alt="Banner" class="bg-img" />

        <div class="eligibility-wrapper">

          <div class="eligibility-header-title">
            <h2>${eligibilityTitle}</h2>
            <p>
              ${eligibilityDescription}
            </p>
          </div>

          <div class="eligibility-card-wrapper">
           ${makeCards}
          </div>
        </div>
    `
}


const renderCoreThemes = async () => {
    const coreThemesContainer = document.querySelector('#coreThemeSection');

    const { coreThemesSection = {} } = cmsData
    const { coreThemesTitle = '', coreThemesDescription = '', coreThemesCard = [] } = coreThemesSection

    let makeCards = ''

    await coreThemesCard.forEach(item => {
        const { iconImg, cardTitle, listOfBullet = '' } = item

        let makeBullet = ''

        listOfBullet.forEach(text => {
            makeBullet += `
                <li>
                    <p class="label">${text}</p>
                </li>
            `
        })
        
        makeCards += `
          <div class="core-themes-card">
            <div class="card-title">
              <div class="card-icon-w">
                <img src="./assets/icons/ribbon.png" alt="" class="bg-icon" />
                <img
                  src="./assets/icons/${iconImg}"
                  alt=""
                  class="icon"
                />
              </div>
              <h2>${cardTitle}</h2>
            </div>

            <div class="card-content">
              <ul>
                ${makeBullet}
              </ul>
            </div>
          </div>
        `
    });

    coreThemesContainer.innerHTML = `
        <div class="title-header">
          <div class="ct-details-wrapper">
            <h2>${coreThemesTitle}</h2>
            <p>
                ${coreThemesDescription}
            </p>
          </div>
        </div>
        
        <div class="core-themes-card-wrapper">
            ${makeCards}
        </div>
    `
}


const renderWhyApply = async () => {
    const whyApplyContainer = document.querySelector('#whyApplySection');

    const { whyApplySection = {} } = cmsData
    const { whyApplyTitle = '', whyApplyDescription = '' } = whyApplySection

    whyApplyContainer.innerHTML = `
      <img src="./assets/logo-stamp.svg" class="logo-stamp" alt="">
      
      <div class="why-apply-wrapper">
        <div class="wa-header-title">
          <h2>${whyApplyTitle}</h2>
          <p>
            ${whyApplyDescription}
          </p>
          <p>
            
          </p>
        </div>
      </div>
    `
}


const renderApplyNow = async () => {
    const applyNowSection = document.querySelector('#applyNowSection');

    const { applyToSection = {} } = cmsData
    const { applyToBgImg = '', applyToTitle = '', applyToDescription = '', applyToButtonText = '', applyToNote = '' } = applyToSection

    applyNowSection.innerHTML = `
        <img src="./assets/${applyToBgImg}" alt="Banner" class="bg-img" />

        <div class="apply-now-form-wrapper">
          <div class="apply-now-wrapper">
            <div class="an-header-title">
              <h2>${applyToTitle}</h2>
            </div>
  
            <div class="an-content">
              <p>
                ${applyToDescription}
              </p>
              <button class="btn btn-primary">${applyToButtonText}</button>
              <p class="note">
                ${applyToNote}
              </p>
            </div>
          </div>
        </div>
    `
}


const renderTags = async () => {
    const tagsContainer = document.querySelector('#tagsSection');

    const { tagsSection = {} } = cmsData
    const { tagsHeader = '', tagsList = [] } = tagsSection

    let makeTags = ''

    tagsList.forEach(text => {
      makeTags += `
        <a class="tagrank" href="#">
          <img src="./assets/icons/hashtag.svg" alt="">
          <span>${text}</span>
        </a>`
    });

    tagsContainer.innerHTML = `
      <h3 class="title-header">${tagsHeader}</h3>

      <div class="tags-content">
        ${makeTags}
      </div>
    `
}


(async () => {
    await renderBannerContent();
    await renderAbout();
    await renderObjectives()
    await renderEligibility()
    await renderCoreThemes()
    await renderWhyApply()
    await renderApplyNow()
    await renderTags()

    document.querySelector('#pageContainer').style.opacity = 1
})();