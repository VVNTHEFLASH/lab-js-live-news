//api key
const apikey = '1e7fddb66bbb4c1f928cf692f526a484';
//get the country code
const getData = async(country) => {
    try{
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`)

        if(data.status === 200){
            return await data.json();
        }
    }
    catch(error) {
        console.log(error);
    }
}
getData('in');
const rendernews = (list) => {
    
    let news = '';
    list.map((element) => {
        news += `<div class="news">
        <img src="${element.urlToImage}" class="newsposter" alt=${element.title}>
        <h2 class="newsheader">${element.title}</h2>
        <p class="newsdescription">${element.description}</p>
        <a href=${element.url}>Read More</a>
        </div>\n`
    })
    return news;
}

const render = async(country) => {
    document.querySelector(".newslist").innerHTML = "";
    let data = await getData(country);
    document.querySelector(".newslist").innerHTML = rendernews(data.articles)
}
const indiaNews = () => {
    document.title = 'India News'
    render('in');
    return false;
}
const usNews = () => {
    document.title = 'US News'
    render('us');
    return false;
}
const homePage = () => {
    indiaNews();
}
homePage();
