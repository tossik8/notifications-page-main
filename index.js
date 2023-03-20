let notificationCount = 0;


window.onload = () => {
    const notifications = Array.from(document.getElementsByClassName("new-notification"));
    notificationCount = notifications.length;
    for(let notification of notifications){
        notification.addEventListener("click", () => markRead(notification));
    }
    setNotificationsLabel();
}
function markAllRead(){
    const notifications = Array.from(document.getElementsByClassName("new-notification"));
    for(let notification of notifications){
        markRead(notification);
    }
}
function markRead(notification){
    notification.classList.remove("new-notification");
    notification.classList.add("notification");
    notification.getElementsByClassName("red-dot")[0].remove();
    --notificationCount;
    setNotificationsLabel();
    notification.removeEventListener("click", markRead);
}
function setNotificationsLabel(){
    document.getElementsByClassName("notifications-count")[0].textContent = notificationCount;
}
