var Alexa = require('alexa-sdk');

var intent = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','ninteen','twenty'];

var max = intent.length;
var sound="";
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};


var per={
            '<audio src="https://s3.amazonaws.com/soundsofanimals/Cat+meow+1.mp3"/>' : "cat",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Chickens.mp3"/>':"chickens",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Cow%2C+moo%2C+cow+moo.mp3"/>':"cow",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Crow+caw.mp3"/>':"crow",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Duck+quacking+1.mp3"/>':"duck",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/kite.mp3"/>':"kite",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Elephant+trumpeting.mp3"/>':"elephant",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Field+Rat.mp3"/>':"rat",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Goat.mp3"/>':"goat",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Herd+sheep.mp3"/>':"sheep",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Horse+whinnying+1.mp3"/>':"horse",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Lion+roar.mp3"/>':"lion",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Monkey+chatter+2.mp3"/>':"monkey",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Mosquito.mp3"/>':"mosquito",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Pig+squeal+1.mp3"/>':"pig",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Rooster.mp3"/>':"rooster",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/Tiger+growl+1.mp3"/>':"tiger",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/deer.mp3"/>':"deer",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/dustier_eagle1.mp3"/>':"eagle",
            '<audio src ="https://s3.amazonaws.com/soundsofanimals/wolf.mp3"/>':"wolf"
};


var handlers = {

    'LaunchRequest': function() { //Executes when a new session is launched

        var k = Math.floor(Math.random()*max);

        if(k==0)
        {
          this.emit('one');
        }
        else if(k==1)
        {
        this.emit('two');
        }
            else if(k==2)
        {
        this.emit('three');
        }
            else if(k==3)
        {

        this.emit('four');
        }
            else if(k==4)
        {
        this.emit('five');
        }
            else if(k==5)
        {
        this.emit('six');
        }
            else if(k==6)
        {
        this.emit('seven');
        }
            else if(k==7)
        {
        this.emit('eight');
        }
            else if(k==8)
        {
        this.emit('nine');
        }
            else if(k==9)
        {
        this.emit('ten');
        }
            else if(k==10)
        {
        this.emit('eleven');
        }
            else if(k==11)
        {
        this.emit('twelve');
        }
            else if(k==12)
        {
        this.emit('thirteen');
        }
            else if(k==13)
        {
        this.emit('fourteen');
        }
            else if(k==14)
        {
        this.emit('fifteen');
        }
            else if(k==15)
        {
        this.emit('sixteen');
        }
            else if(k==16)
        {
        this.emit('seventeen');
        }
            else if(k==17)
        {
        this.emit('eighteen');
        }
            else if(k==18)
        {
        this.emit('ninteen');
        }
            else
        {
        this.emit('twenty');
        }

    },

    'one': function() {

         sound = '<audio src="https://s3.amazonaws.com/soundsofanimals/Cat+meow+1.mp3"/>';
        this.emit(':ask', "I am in testing intent"  + "now guess the animal name");
    },

     'two': function() {

         sound = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Chickens.mp3"/>';
        this.emit('ask', "I am in testingtwo intent" + "now guess the animal name");
    },


    'three': function() {

         sound = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Cow%2C+moo%2C+cow+moo.mp3"/>';
        this.emit('ask', "I am in testingtwo intent" + "now guess the animal name");
    },

     'four': function() {

         sound = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Crow+caw.mp3"/>';
        this.emit('ask', "I am in testingtwo intent" + "now guess the animal name");
    },




     'five': function() {

         sound = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Duck+quacking+1.mp3"/>';
        this.emit('ask', "I am in testingtwo intent" + "now guess the animal name");
    },

     'six': function() {

         sound = '<audio src ="https://s3.amazonaws.com/soundsofanimals/kite.mp3"/>';
        this.emit('ask', "I am in testingtwo intent" + "now guess the animal name");
    },

     'seven': function() {

         sound  = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Elephant+trumpeting.mp3"/>';
        this.emit('ask', "I am in testingtwo intent" + "now guess the animal name");
    },

     'eight': function() {

         sound= '<audio src ="https://s3.amazonaws.com/soundsofanimals/Field+Rat.mp3"/>';
        this.emit('ask', "I am in testingtwo intent" + "now guess the animal name");
    },

     'nine': function() {

         sound= '<audio src ="https://s3.amazonaws.com/soundsofanimals/Goat.mp3"/>';
        this.emit('ask', "I am in testingtwo intent" + "now guess the animal name");
    },

     'ten': function() {

         sound = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Herd+sheep.mp3"/>';
        this.emit('ask', "I am in testingtwo intent" + "now guess the animal name");
    },

     'eleven': function() {

         sound = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Horse+whinnying+1.mp3"/>';
        this.emit('ask',  "now guess the animal name");
    },



      'twelve': function() {

         sound= '<audio src ="https://s3.amazonaws.com/soundsofanimals/Lion+roar.mp3"/>';
        this.emit('ask', "now guess the animal name");
    },


      'thirteen': function() {

         sound  = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Monkey+chatter+2.mp3"/>';
        this.emit('ask',  "now guess the animal name");
    },

      'fourteen': function() {

         sound  = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Mosquito.mp3"/>';
        this.emit('ask',  "now guess the animal name");
    },

      'fifteen': function() {

         sound  = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Pig+squeal+1.mp3"/>';
        this.emit('ask', "now guess the animal name");
    },

      'sixteen': function() {

         sound  = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Rooster.mp3"/>';
        this.emit('ask',  "now guess the animal name");
    },

      'seventeen': function() {

         sound = '<audio src ="https://s3.amazonaws.com/soundsofanimals/Tiger+growl+1.mp3"/>';
        this.emit('ask',  "now guess the animal name");
    },

      'eighteen': function() {

         sound  = '<audio src ="https://s3.amazonaws.com/soundsofanimals/deer.mp3"/>';
        this.emit('ask',  "now guess the animal name");
    },

      'ninteen': function() {

         sound  = '<audio src ="https://s3.amazonaws.com/soundsofanimals/dustier_eagle1.mp3"/>';
        this.emit('ask',  "now guess the animal name");
    },

      'twenty': function() {

         sound = '<audio src ="https://s3.amazonaws.com/soundsofanimals/wolf.mp3"/>';
        this.emit('ask', "now guess the animal name");
    },



    'checking': function() {

        var animal = this.event.request.intent.slots.animal.value;
        if (animal==per[sound])
        this.emit(':ask',"yes your are correct");
        else
        this.emit(':ask',"sorry correct answer is "+per[sound]);
    },

	'AMAZON.CancelIntent': function() {
        this.emit(':tell', "Bye");
    },

	'AMAZON.StopIntent': function() {
        this.emit(':tell', "Please Rate us, Awesome, Not Good, Good, Poor");
    },

	'AMAZON.HelpIntent': function() {
        this.emit(':tell', " help.");

    }
};
