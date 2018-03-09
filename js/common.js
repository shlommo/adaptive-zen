import data from './data.js';

const getArticleMarkup = (dataItem) => {
  let imageOnlyClass = ''
  let imageUrl = '';
  let imageFormat = '';
  let dataImageUrl = dataItem.image;
  let articleImg = '';
  let articleChannel = '';
  let articleChannelClass = '';
  let articleDescription = '';
  let articleFooter = '';
  let descOnlyClass = '';

  if (typeof dataItem === "undefined") {
    return '';
  }

  if (dataItem.hasOwnProperty('channelName')) {
    articleChannel = `<span class="article__channel">${dataItem.channelName}</span>`;
  }

  articleFooter = `<div class="article__footer">
                      ${articleChannel}
                      <span class="article__icon-btns-item icon-btn icon-btn--action"></span>
                      <span class="article__icon-btns-item icon-btn icon-btn--heart"></span>
                    </div>`;

  if (dataItem.hasOwnProperty('image')) {
    imageFormat = dataImageUrl.slice(dataImageUrl.indexOf('.') + 1);
    imageUrl = dataImageUrl.slice(0, dataImageUrl.indexOf('.'));

    if (dataItem.size === 's') {
      articleImg = `<picture class="article__img-wrapper">
                      <source srcset="${imageUrl}@3x.${imageFormat}" media="(min-width: 992px)">
                      <source srcset="${imageUrl}@2x.${imageFormat}" media="(max-width: 991px)">
                      <img class="img-responsive" src="${imageUrl}.${imageFormat}">
                      ${articleFooter}
                    </picture>`;
    } else {
      articleImg = `<picture class="article__img-wrapper">
                      <source srcset="${imageUrl}@3x.${imageFormat}" media="(min-width: 992px)">
                      <source srcset="${imageUrl}@2x.${imageFormat}" media="(max-width: 991px)">
                      <img class="img-responsive" src="${imageUrl}.${imageFormat}">
                    </picture>`;
    }
  }

  if (!dataItem.hasOwnProperty('description')) {
    imageOnlyClass = 'article--img-only';
    articleDescription = ''
  } else {
    if (dataItem.size === 's') {
      descOnlyClass = 'article--desc-only';
    }
    articleDescription = `<div class="article__description">
                            <p>${dataItem.description}</p>
                            ${articleFooter}
                          </div>`;
  }

  return `<li class="app-grid__cell app-grid__cell--${dataItem.size} article ${imageOnlyClass} ${descOnlyClass}">
            <a class="article__link" href="#">
              <div class="article__content-wrapper">
                  <div class="article__content">
                    <h2 class="article__title" style="color: ${dataItem.titleColor}">
                      <span>${dataItem.title}</span>
                    </h2>

                    ${articleDescription}

                    ${articleImg}
                  </div>
              </div>
            </a>
          </li>`;
};

const getNodeFromMarkup = (markupTemplate) => {
  const div = document.createElement('div');
  div.innerHTML = markupTemplate;
  return div.firstChild;
};

const renderArticles = (data)=> {
  const articlesContainer = document.getElementById('articlesContainer');
  let articleMarkup = '';
  let articleNode = '';

  data.map((item) => {
    articleMarkup = getArticleMarkup(item); 
    articleNode = getNodeFromMarkup(articleMarkup);

    articlesContainer.appendChild(articleNode);
  });
};

renderArticles(data);
