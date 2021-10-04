document.addEventListener("DOMContentLoaded", function(){
    var imageArray = [
        "./images/Low_Light_Photography_2.jpg",
        "./images/Low_Light_Photography_3.jpg",
        "./images/pexels-photo-459301.jpeg",
        "./images/nature-photography-editing-tips-4.jpg",
        "./images/lightning-photography1.jpg",
        "./images/Low_Light_Photography_2.jpg",
        "./images/nature-photography-editing-tips-4.jpg"
    ];

    var imageArrayIndex = 0;
        
        var leftButton = document.querySelector("#leftButton");
        var rightButton = document.querySelector("#rightButton");
        var imgJS = document.getElementById("imgJS");

        //src = imageArray[0]
        imgJS.src = imageArray[imageArrayIndex];

        rightButton.addEventListener('click', function(){
            if(imageArrayIndex < imageArray.length - 1){
                imageArrayIndex++; //increment 0 to 1
                imgJS.src = imageArray[imageArrayIndex]; // src = imageArray[1]
            }
            else{
                console.log("Out of Bounds on right button!")
            }
        })
        
        leftButton.addEventListener('click', function(){
            if(imageArrayIndex > 0){
                imageArrayIndex--; //increment 1 to 0
                imgJS.src = imageArray[imageArrayIndex]; // src = imageArray[0]
            }
            else{
                console.log("Out of Bounds on left button!")
            }
        })
    })