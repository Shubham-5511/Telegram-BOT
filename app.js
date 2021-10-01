require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TOKEN;

//bot is given life here
const bot = new TelegramBot(token,{polling: true});

bot.on("polling_error",console.log); // removes polling error

//this will receive user entered message
bot.on("message",(msg)=>{  // event ,context function

    var greeting = "hi";
    if(msg.text.toString().toLowerCase().indexOf(greeting)===0)
    {
        bot.sendMessage(msg.chat.id,"Hello"+" "+msg.chat.first_name);
    }
    //console.log(Object.values(msg) + " this is msg");
    //console.log(msg.text.toString().toLowerCase().indexOf(greeting));

    var bye = "bye";
    if(msg.text.toString().toLocaleLowerCase().includes(bye)) // anything containing bye word
    {
        bot.sendMessage(msg.chat.id,"Nice to meet you, Bye");
    }
    //console.log(msg);
    var robot ="I'am Robot";
    if(msg.text.indexOf(robot)===0)
    {
        bot.sendMessage(msg.chat.id,"How can you be a bot ? please Explain");
    }

    var sampleText = "Sample text";
    if(msg.text.indexOf(sampleText)===0)
    {
        bot.sendMessage(msg.chat.id,"You just clicked sample text");
    }

    var secondSample = "Second sample";
    if(msg.text.indexOf(secondSample)===0)
    {
        bot.sendMessage(msg.chat.id,"Are you fan of Vade Wilsion?");
    }

    var keyboard = "keyboard";
    if(msg.text.indexOf(keyboard)===0)
    {
        bot.sendMessage(msg.chat.id,"You just pressed keyboard");
    }

    var what = "idiot";
    if(msg.text.includes(what))
    {
        bot.kickChatMember(msg.chat.id , msg.from.id);
    }

});
bot.onText(/\/start/,(msg)=> {
    bot.sendMessage(msg.chat.id,"welcome"+" "+msg.chat.first_name,{
        "reply_markup": {
            "keyboard":[["Sample text","Second sample"],["keyboard"],["I'am Robot"]]
        }
    });
    console.log(msg);

});

bot.onText(/\/sendphoto/,(msg)=>{
    bot.sendPhoto(msg.chat.id,"https://thumbs.dreamstime.com/b/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg",{caption: "Here we go! \nGolden retriever"});
});

