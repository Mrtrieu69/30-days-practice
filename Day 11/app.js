
const toasts = document.querySelector(".toasts")

function showToast(option){
    var toast = document.createElement("div")

    var icons = {
        success: '<i class="fas fa-check-circle"></i>',
        warning: '<i class="fas fa-exclamation-circle"></i>',
        error: '<i class="fas fa-exclamation-triangle"></i>',
    }

    toast.className = `toast ${option}`
    toast.innerHTML = `
        ${icons[option]}
        <p>This is a ${option} message!</p>
        <span class="${option}"></span>
    `
    
    toasts.append(toast)
    setTimeout(() => toasts.removeChild(toast), 6000)
}