var express = require('express');
var http = require("http"); 
var router = express.Router(); 
var cheerio = require("cheerio");
//cheerio 模块，用于对怕爬取到的页面做解析，得到想要的数据， 
var fs = require("fs"); 

router.get("/", function (req, res) { 

    var homeDesc = {}, _html;
 http.get("http://m.wufazhuce.com/",function (response) { 
        response.on("data",function (chunk) { 
            _html += chunk; 
            //console.info(_html)
        }); 
        response.on("end", function () { 

            console.log("爬取结束"); 
            $ = cheerio.load(_html); 
            var homeLink = ($(".link-div a").attr("href")).split("/"); 
            homeDesc.id = homeLink[homeLink.length - 1];
            homeDesc.day = $(".day").text();
            homeDesc.month = $(".month").text(); 
            homeDesc.textShort = $(".text-content-short").text(); 
            homeDesc.href = $(".link-div a").attr("href"); 
            homeDesc.bgImg = $(".home-img").attr("style"); 
            res.send({ "homeDesc": homeDesc }); //爬取结束后返回数据 
        }); }).on("error",function(err){ 
            console.log(err) 
        }); 
}); 

module.exports = router;
