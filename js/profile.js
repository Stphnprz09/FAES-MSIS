document.addEventListener("DOMContentLoaded", function() {
    const editProfileLink = document.querySelector(".edit-profile");
    const settingIcon = document.getElementById("setting-icon");
    const profileContainer = document.getElementById("profile-container");
    const settingsContainer = document.getElementById("settings-container");
    const fullNameInput = document.querySelector(".full-name");
  
    // // Toggle edit mode for profile name
    // editProfileLink.addEventListener("click", function(event) {
    //   event.preventDefault();
    //   if (fullNameInput.hasAttribute("readonly")) {
    //     fullNameInput.removeAttribute("readonly");
    //     fullNameInput.focus();
    //     editProfileLink.childNodes[0].textContent = "Save Profile ";
    //   } else {
    //     fullNameInput.setAttribute("readonly", "readonly");
    //     editProfileLink.childNodes[0].textContent = "Edit Profile ";
    //   }
    // });
  
    // Stop propagation to prevent edit profile when clicking on the settings icon
    settingIcon.addEventListener("click", function(event) {
      event.stopPropagation();
      profileContainer.style.display = "none";
      settingsContainer.style.display = "block";
    });
  });
  