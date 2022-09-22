let myPromise = async() =>{
    try{
        let url = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
        let json = url.json();

        if(url){
            json.then((data) =>{
                for (let key in data){
                    let arr1 = data[key];
                    // console.log(arr1)
                    for (let key2 in arr1){
                        let arr2 = arr1[key2].source;
                        let authorArr = arr1[key2].author
                        let titleArr = arr1[key2].title
                        let descArr  = arr1[key2].description
                        let moreUrl = arr1[key2].url;
                        let publishedData = arr1[key2].publishedAt
                        let content =  arr1[key2].content
                        // console.log(arr2)
                        // console.log(authorArr)
                        console.log(titleArr)
                        // console.log(descArr)
                        // console.log(moreUrl)
                        // console.log(publishedData)
                        // console.log(content)
                        // let titleTxt = document.getElementById("title").innerHTML = `${titleArr}`


                        // for (let key3 in arr2){
                        //     let names = arr2[key3].name
                        //     console.log(names)

                            

                            
                        // }
                    }
                }

            }
            )

            

            
           
        }

        
    }
    catch{
        console.log(error)
    }
}

myPromise()