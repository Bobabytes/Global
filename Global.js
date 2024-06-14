
// Character Count Function!
$(document).ready(function () {
    // Attach an input event listener to the textarea
    $('#information-message').on('input', function () {
        // Get the current value of the textarea
        var text = $(this).val();


        // Code to keep the characters below 200: //
        // Check if the length exceeds 200 characters
        if (text.length > 200) {
            // Trim the text to the first 200 characters
            text = text.substring(0, 200);
            // Update the textarea value
            $(this).val(text);
        }

        // Update the character count. Also add a '/200'! Twitter does that, so why don't we?
        $('#character-count').text(text.length + '/200');
    });
});

//   Onkeydown Function!!!
// This function does an animation on a <span> text element every time the R key is pressed.
$(document).ready(function () {
    // Array of text values to cycle through
    var textValues = ['architects.', 'gamedevs.', 'musicians.', 'students.', 'firms.', '👑 you. 🌷', 'agencies.', 'commerce.', 'definitely you.', 'creators.'];

    // Get the span element
    var textContainer = $('#omg-its-you');

    // Initialize an index variable to keep track of the current text
    var currentIndex = 0;

    // Function to update the text and perform the animation
    function updateText() {
        // Get the current text
        var currentText = textValues[currentIndex];

        // Increment the index for the next iteration, looping back to the first if needed
        currentIndex = (currentIndex + 1) % textValues.length;

        // Animate the text change (you can use other animation methods if needed)
        textContainer.fadeOut(400, function () {
            // Update the text and fadeIn
            textContainer.text(currentText).fadeIn(400);
        });
    }

    // Attach a keydown event listener to the document
    $(document).on('keydown', function (event) {
        // Check if the pressed key is 'R'
        if (event.key === 'r' || event.key === 'R') {
            // Call the updateText function only when the 'R' key is pressed
            updateText();

            $('#buttonpress').fadeOut(5000);
        }
    });

    // click event listener to the button for mobile users
    $('#omg-its-you').on('click', function () {
        updateText();
        $('#buttonpress').fadeOut(300);
    });

});

// onmouseover function!
// Technically, we don't need to use jQuery for something like this,
// But the professor has tasked us to do so. So let's do it!
$(document).ready(function () {
    // Use the mouseover event to trigger changes for all img elements
    $("img").mouseover(function () {
        // Add your code to change the interface here
        $(this).css("transform", "scale(1.3)");
    });

    // Use the mouseout event to revert the changes when the mouse leaves the image
    $("img").mouseout(function () {
        // Revert the changes
        $(this).css("transform", "scale(1)"); // Revert to the original size
    });
});

// Submit Alert Function!
// HTML already does validation for us, but the alert will let the user know that the submission was accepted.
$(document).ready(function () {
    // Use jQuery to handle the form submit event
    $("#hire-request-form").submit(function (event) {
        // Check if the form is valid
        if (this.checkValidity()) {
            alert("Form submitted successfully!");
        }
        //   There is no need for an else statement.
    });
});