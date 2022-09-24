// api url
const api_url =
	" https://newsapi.org/v2/everything?q=bitcoin&apiKey=a5084503198c4f7ba1f22cbc87c817e6";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	
	show(data);
    show2(data)
    show3(data)
    show4(data)
    show5(data)
    show6(data)
    show7(data)
    show8(data)
    show9(data)
    show10(data)
    show11(data)
    show12(data)
    // show13(data)
    show14(data)
    show15(data)
    show16(data)
    show17(data)
    show18(data)
    show19(data)
    show20(data)
    show21(data)
    show22(data)
    // show23(data)






}
// Calling that async function
getapi(api_url);


// Function to define innerHTML for HTML table
function show(data) {

    let mainDiv = document.getElementById("reuterData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")

    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);





    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)





	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Reuters"){


       
        let tr1 = document.createElement("tr")
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)

        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )


        

       
        
        
        
      
       
        
        table.appendChild(tr1);
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
        
       
  


    }
}

    
}

// For bbc news=====================================================

// Function to define innerHTML for HTML table
function show2(data) {

    let mainDiv = document.getElementById("bbcData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);





    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "BBC News"){


       
        let tr1 = document.createElement("tr")
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )

       
        
        
        
      
       
        
        table.appendChild(tr1);
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
        
       
  


    }
}

    
}

//For insider news==================================================
function show3(data) {

    let mainDiv = document.getElementById("insiderData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
      


    mainDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Business Insider"){


       
        let tr1 = document.createElement("tr")
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}
}

// For Vice News======================================================
function show4(data) {

    let mainDiv = document.getElementById("viceData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Vice News"){


       
        let tr1 = document.createElement("tr")
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}
}

// // For Journal du geek news===============================================
function show5(data) {

    let mainDiv = document.getElementById("geekData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Journal du geek"){


       
        let tr1 = document.createElement("tr")
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}
}

// // For Slashdot.org news==================================
function show6(data) {

    let mainDiv = document.getElementById("slashData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)


    trTh6.appendChild(trTh6Txt)


	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Slashdot.org"){


       
        let tr1 = document.createElement("tr")
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
        
       
  


    }
}
}

// For Entrepreneur News=====================================
function show7(data) {

    let mainDiv = document.getElementById("entData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)

    trTh6.appendChild(trTh6Txt)



	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Entrepreneur"){


       
        let tr1 = document.createElement("tr")
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
        
       
  


    }
}

    
}

// // For gizmodo news=============================================
function show8(data) {

    let mainDiv = document.getElementById("gizmodoData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Gizmodo.com"){


       
        let tr1 = document.createElement("tr")
        
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
        
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
        
       
  


    }
}

    
}

// For guardian news=======================================================
function show9(data) {

    let mainDiv = document.getElementById("guardianData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
    
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




   
    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "The Guardian"){


       
        let tr1 = document.createElement("tr")
        
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
       
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)        
       
  


    }
}

    
}

// For Wired news==============================================================
function show10(data) {

    let mainDiv = document.getElementById("wiredData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
   
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
   
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




   
    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Wired"){


       
        let tr1 = document.createElement("tr")
       
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
       
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

    
}

// For time news=============================================
function show11(data) {

    let mainDiv = document.getElementById("timeData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
   
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
  
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Time"){


       
        let tr1 = document.createElement("tr")
       
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
       
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

    
}

// For CNEt news===============================================================
function show12(data) {

    let mainDiv = document.getElementById("cnetData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
    
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
  
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "CNET"){


       
        let tr1 = document.createElement("tr")
        
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
       
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

    
}
// For venture news=================================================
function show13(data) {

    let mainDiv = document.getElementById("ventureData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
   
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
    
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




   
    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "VentureBeat"){


       
        let tr1 = document.createElement("tr")
        
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
       
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

    
}

// For subStack news====================================================
function show14(data) {

    let mainDiv = document.getElementById("substackData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
  
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
   
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




 
    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Substack.com"){


       
        let tr1 = document.createElement("tr")
       
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
       
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

    
}

// For intelligence news==================================================
function show15(data) {

    let mainDiv = document.getElementById("intelligenceData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
   
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
   
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




   
    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Insiderintelligence.com"){


       
        let tr1 = document.createElement("tr")
       
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
       
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

    
}

// For heise news==================================================================
function show16(data) {

    let mainDiv = document.getElementById("heiseData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
  
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
   
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




   
    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "heise online"){


       
        let tr1 = document.createElement("tr")
      
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);

        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

    
}

// FOr insight news=========================================================
function show17(data) {

    let mainDiv = document.getElementById("insightData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
    
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
  
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    
    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Techinsights.com"){


       
        let tr1 = document.createElement("tr")
       
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
       
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

    
}

// For barrons news=================================================================
function show18(data) {

    let mainDiv = document.getElementById("barronsData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
   
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Barron's"){


       
        let tr1 = document.createElement("tr")
       
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
      
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

    
}

// For yahooo news===========================================================
function show19(data) {

    let mainDiv = document.getElementById("yahooData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
   
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
   
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    
    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Yahoo Entertainment"){


       
        let tr1 = document.createElement("tr")
       
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
       
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

    
}

// For use of news===============================================================
function show20(data) {

    let mainDiv = document.getElementById("useOfData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
   
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
   
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




    
    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "MakeUseOf"){


       
        let tr1 = document.createElement("tr")
       
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
        
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

    
}

// For venture news=================================================================
function show21(data) {

    let mainDiv = document.getElementById("ventureData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
   
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
   
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




   
    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "VentureBeat"){


       
        let tr1 = document.createElement("tr")
       
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
        
        
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
        tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

}

// For spigel news==================================================================
function show22(data) {

    let mainDiv = document.getElementById("spiegelData")



    let table = document.createElement("table")

    let tr = document.createElement("tr")
   
    let trTh5 = document.createElement("th")
    let trTh5Txt = document.createTextNode("Title")
    let trTh3 = document.createElement("th")
    let trTh3Txt = document.createTextNode("Published Date")
    let trTh4 = document.createElement("th")
    let trTh4Txt = document.createTextNode("Content")
    let trTh6 = document.createElement("th")
    let trTh6Txt = document.createTextNode("Image")
   


    mainDiv.appendChild(table);
    table.appendChild(tr);
   
    tr.appendChild(trTh5);
    tr.appendChild(trTh3);
    tr.appendChild(trTh4);
    tr.appendChild(trTh6);




   
    trTh5.appendChild(trTh5Txt)
    trTh3.appendChild(trTh3Txt)
    trTh4.appendChild(trTh4Txt)
    trTh6.appendChild(trTh6Txt)




	
	
	// Loop to access all rows
	for (let key in data.articles) {
        console.log(data.articles[key].source.name)
        if(data.articles[key].source.name === "Spiegel Online"){


       
        let tr1 = document.createElement("tr")
        
        // let tr1td2 = document.createElement("td");
        let link = document.createElement("a")
        link.setAttribute("href",data.articles[key].url )
        link.setAttribute("target", "_blank")
        let linkTxt = document.createTextNode("Read More...")
        let tr1td3 = document.createElement("td");
        let tr1td3Txt = document.createTextNode( new Date(data.articles[key].publishedAt))
        let tr1td4 = document.createElement("td");
        let tr1td4Txt = document.createTextNode(data.articles[key].content)
        let tr1td5 = document.createElement("td");
        let tr1td5Txt = document.createTextNode(data.articles[key].title)
        let tr1td6 = document.createElement("td");
        let img = document.createElement("img")
        img.setAttribute("src",data.articles[key].urlToImage )
       
        
        
        
      
       
        
        table.appendChild(tr1);
       
        tr1.appendChild(tr1td5);
        tr1td5.appendChild(tr1td5Txt)
        link.appendChild(linkTxt)
        tr1.appendChild(tr1td3);
        tr1td3.appendChild(tr1td3Txt)
        tr1.appendChild(tr1td4);
        tr1td4.appendChild(tr1td4Txt)
        tr1td4.appendChild(link)
         tr1.appendChild(tr1td6);
        tr1td6.appendChild(img)
       
  


    }
}

}












    


   
    
// For displaying tables functions==============================
let mainDiv = document.getElementById("reuterData")
mainDiv.style.display = "none"


let container = document.getElementById("container")
let navBar = document.getElementById("nav")
navBar.style.display = "none"


function display(){
    mainDiv.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}
let mainDiv1 = document.getElementById("bbcData")
mainDiv1.style.display = "none"
console.log(mainDiv1)



function display2(){

    mainDiv1.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}
let mainDiv2 = document.getElementById("insiderData")
mainDiv2.style.display = "none"


function display3(){

    mainDiv2.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}
let mainDiv3 = document.getElementById("viceData")
mainDiv3.style.display = "none"

function display4(){

    mainDiv3.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}



let mainDiv4 = document.getElementById("geekData")
mainDiv4.style.display = "none"
function display5(){

    mainDiv4.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}


let mainDiv5= document.getElementById("slashData")
mainDiv5.style.display = "none"
function display6(){

    mainDiv5.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}


let mainDiv6= document.getElementById("entData")
mainDiv6.style.display = "none"
function display7(){

    mainDiv6.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}


let mainDiv7= document.getElementById("gizmodoData")
mainDiv7.style.display = "none"
function display8(){

    mainDiv7.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}


let mainDiv8= document.getElementById("guardianData")
mainDiv8.style.display = "none"
function display9(){

    mainDiv8.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}

let mainDiv9= document.getElementById("wiredData")
mainDiv9.style.display = "none"
function display10(){

    mainDiv9.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}

let mainDiv10= document.getElementById("timeData")
mainDiv10.style.display = "none"
function display11(){

    mainDiv10.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}

let mainDiv11= document.getElementById("cnetData")
mainDiv11.style.display = "none"
function display12(){

    mainDiv11.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}

// let mainDiv12= document.getElementById("ventureData")
// mainDiv12.style.display = "none"
// function display13(){

//     mainDiv12.style.display = "block"
//     navBar.style.display = "block"

//     container.style.display = "none"

// }

let mainDiv13= document.getElementById("substackData")
mainDiv13.style.display = "none"
function display14(){

    mainDiv13.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}


let mainDiv14= document.getElementById("intelligenceData")
mainDiv14.style.display = "none"
function display15(){

    mainDiv14.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}


let mainDiv15= document.getElementById("heiseData")
mainDiv15.style.display = "none"
function display16(){

    mainDiv15.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}


let mainDiv16= document.getElementById("insightData")
mainDiv16.style.display = "none"
function display17(){

    mainDiv16.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}


let mainDiv17= document.getElementById("barronsData")
mainDiv17.style.display = "none"
function display18(){

    mainDiv17.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}

let mainDiv18= document.getElementById("yahooData")
mainDiv18.style.display = "none"
function display19(){

    mainDiv18.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}

let mainDiv19= document.getElementById("useOfData")
mainDiv19.style.display = "none"
function display20(){

    mainDiv19.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}

let mainDiv20= document.getElementById("ventureData")
mainDiv20.style.display = "none"
function display21(){

    mainDiv20.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}

let mainDiv21= document.getElementById("spiegelData")
mainDiv21.style.display = "none"
function display22(){

    mainDiv21.style.display = "block"
    navBar.style.display = "block"

    container.style.display = "none"

}











