'use    strict';    
//var    watson    =    require('watson-developer-cloud');
var    config    =    require('../config');    
    
var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
//const fs = require('fs');

var language_translator = new LanguageTranslatorV2({
  //username: 'd3be649a-2b5e-442f-a561-6f4d06d278fc',
  username: process.env.USERNAME ||    config.watson.language_translator.username,
  //password: '6bgLaE8mowE5',
  password: process.env.PASSWORD || config.watson.language_translator.password,
  url: 'https://gateway.watsonplatform.net/language-translator/api/'
});    
        
module.exports.translate = function(req, res, next)    {    
    var    params = {text:req.body.text, model_id:req.body.model,};    
    
language_translator.translate(params,function(error, result) {    
                if    (error)    
                        return    next(error);    
                else    
                        return    res.json(result);    
        });    
};    

