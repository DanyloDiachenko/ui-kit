export const getCookie = (name: string) => {
    const cookie = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    
    return cookie ? cookie[2] : null;
};
