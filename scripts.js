console.log('Scritp file is loaded.');

// Third part:
// $('css selector').action()
// use the same structure
$('h1').html('This is done by <em>Javascript!</em>');
// why dont' we use in html: asnwer we don't change html becasuse from JS we can change something when it happens

// $ ('tag').styel('border','1px solid red');


// how to make classes and force css to do it
// adding class
$ ('h2').toggleClass('blue');
// $('main').append('<p>A p is appended in the main.</p>');
// $ ('p').css('border','1px solid red'); 

// remove it with double toggleClass
 $ ('h2').toggleClass('blue');

// append
// $('main').append('<p>A p is appended in the main.</p>');

// like creating names: let name = 'Adam";

// create a function
// function myLittleFunction (){
//     $('main').append('<p>We have a break.</p>');
//     $ ('p').css('border','1px solid red');
//     $ ('p').css('padding','10px');
// }

function myLittleFunction (){
    $('main').append('<p>We have a break.</p>');
    $ ('p').css('border','1px solid red');
    $ ('p').css('padding','10px');
}

// Fourth part
// // if(condition that true or false){
//     // condition is tru
// // } else{
// // condition is false
// }

function myLittleFunction (){
    // condition nubmer of ps are samller than 5
    if($('p'.lenght < 5){
        $('main').append('<p>We have a break.</p>');
    }else{
        console.log('We reached the maximum p number');
    }
    $ ('p').css('border','1px solid red');
    $ ('p').css('padding','10px');
}

// loops
let colors = ['orange', 'yellow', 'purple'];


// }else{
    // console.log('We reached the maximum p number');
// }

// howe to use function
myLittleFunction();
myLittleFunction();

// $ ('#add').click(myLittleFunction);

// $('#remove').click(function (){
//     $('p:last-child').remove();
// });



// remove
// $ ('#add').click()

// $('h1').text('This is done by <em>Javascript!</em>');
// $('h1').html('This is done by <em>Javascript!</em>');

// single line comment//

/* 
Multiple 
lines
of
comments*/

// First part: copy from Adam//



