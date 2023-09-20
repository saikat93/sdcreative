document.addEventListener('DOMContentLoaded', function() {

        
    setTimeout(function() {
        document.getElementById("robotPopup").style.display = "flex";
    }, 4000)
    var linkedInLink = document.querySelector('.linkedin-link');

    if (linkedInLink) {
        linkedInLink.addEventListener('mouseover', function() {
            this.classList.add('jiggle');
        });

        linkedInLink.addEventListener('mouseout', function() {
            this.classList.remove('jiggle');
        });
    }

    document.addEventListener("mousemove", function(event) {
        const eyes = document.querySelectorAll(".eye");
        eyes.forEach(eye => {
            const boundingBox = eye.getBoundingClientRect();
            const eyeCenterX = boundingBox.left + boundingBox.width / 2;
            const eyeCenterY = boundingBox.top + boundingBox.height / 2;
            const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
            const distance = Math.min(boundingBox.width / 4, boundingBox.height / 4);
            const eyeX = distance * Math.cos(angle);
            const eyeY = distance * Math.sin(angle);
            eye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
        });
        
    });

    let careButton = document.getElementById('careButton');
    let isMouseOver = false;
    
    careButton.addEventListener('mouseover', function() {
        if (!isMouseOver) {
            isMouseOver = true;
            moveButton();
            showRobotFunnyMessage();
        }
    });

    careButton.addEventListener('click', function() {
        showRobotFunnyMessage();
    });

    function showRobotFunnyMessage() {
        const robotSpeechBubble = document.querySelector('.robot-speech-bubble');
        const robotMainMessage = document.getElementById('robotMainMessage');
        
        robotSpeechBubble.textContent = "Catch me if you can!";
        robotMainMessage.style.display = "block";
        robotMainMessage.textContent = "A typical Computer can handle up to 3 billion instructions in just one second. Beat that!";
    }
    
    
    careButton.addEventListener('mouseout', function() {
        isMouseOver = false;
    });
    
    function moveButton() {
        if (isMouseOver) {
            let x = Math.random() * (window.innerWidth - careButton.clientWidth);
            let y = Math.random() * (window.innerHeight - careButton.clientHeight);
    
            // Move the robot (careButton)
            careButton.style.position = 'fixed';
            careButton.style.left = x + 'px';
            careButton.style.top = y + 'px';
    
            // Move the robot-speech-bubble along with the robot
            const robotSpeechBubble = document.querySelector('.robot-speech-bubble');
            const horizontalOffset = 5; // Gap between the robot and the speech bubble
            
            // Adjust the vertical offset to your liking
            // For example, this will position the speech bubble slightly higher than the middle
            const verticalOffset = (careButton.clientHeight - robotSpeechBubble.clientHeight) / 2 - 70; // Subtracting 10 pixels for a little upward push
    
            robotSpeechBubble.style.position = 'fixed';
            robotSpeechBubble.style.left = (x + careButton.clientWidth + horizontalOffset) + 'px';  // Place it to the right of the robot
            robotSpeechBubble.style.top = (y + verticalOffset) + 'px';  // Adjusted vertical position
    
            setTimeout(moveButton, 100); // Move the button every 100ms
        }
    }
    
    
    
    

function checkMouseOverDuration() {
    if (isMouseOverRobot) {
        mouseOverDuration += 1;
        if (mouseOverDuration >= 5) {
            warningMessage.style.display = "block";
        } else {
            setTimeout(checkMouseOverDuration, 1000);
        }
    }
}

    
});

function closePopup() {
    document.getElementById("robotPopup").style.display = "none";
}
